resource "google_artifact_registry_repository" "docker-repo" {
project             = "deft-crawler-400712"
    location        = "us-west1"
    repository_id   = "eavesdrop-docker-repository"
    description     = "Eavesdrop Docker Repository."
    format          = "DOCKER"
}