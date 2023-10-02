data "google_project" "project" {}

resource "google_artifact_registry_repository" "docker-repo" {
    project         = "deft-crawler-400712"
    location        = "us-west1"
    repository_id   = "eavesdrop-docker-repository"
    description     = "Eavesdrop Docker Repository."
    format          = "DOCKER"
}

resource "google_service_account_iam_binding" "docker-repo-iam" {
  service_account_id = google_service_account.github.name
  role               = "roles/iam.workloadIdentityUser"

  members = [
    "principalSet://iam.googleapis.com/${google_iam_workload_identity_pool.github.name}/attribute.repository/EavesdropCloud/eavesdrop"
  ]
}

resource "google_service_account" "github" {
  account_id   = "github"
  project      = data.google_project.project.project_id
  display_name = "GitHub"
}

resource "google_iam_workload_identity_pool" "github" {
  workload_identity_pool_id = "github"
}

resource "google_iam_workload_identity_pool_provider" "github" {
  project                            = data.google_project.project.project_id
  workload_identity_pool_id          = google_iam_workload_identity_pool.github.workload_identity_pool_id
  workload_identity_pool_provider_id = "github"
  attribute_mapping = {
    "google.subject"       = "assertion.sub"
    "attribute.actor"      = "assertion.actor"
    "attribute.repository" = "assertion.repository"
  }
  oidc {
    issuer_uri = "https://token.actions.githubusercontent.com"
  }
}

resource "google_project_iam_binding" "read-write-registry-iam" {
  project = data.google_project.project.project_id
  role    = "roles/artifactregistry.writer"
  members = ["serviceAccount:${google_service_account.github.email}"]
}

resource "google_project_iam_binding" "admin-cluster-iam" {
  project = data.google_project.project.project_id
  role    = "roles/container.developer"
  members = ["serviceAccount:${google_service_account.github.email}"]
}