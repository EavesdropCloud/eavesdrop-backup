resource "google_artifact_registry_repository" "docker-repo" {
  location      = "us-central1"
  repository_id = "eavesdrop-docker-repository"
  description   = "Docker image repository for Eavesdrop"
  format        = "DOCKER"

  docker_config {
    immutable_tags = true
  }
}