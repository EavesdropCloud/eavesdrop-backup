provider "google-beta" {
  project     = "deft-crawler-400712"
  region      = "us-west1"
}

provider "google" {
  project     = "deft-crawler-400712"
  region      = "us-west1"
}

data "google_client_config" "default" {}

provider "kubernetes" {
  host                   = "https://${module.gke.endpoint}"
  token                  = data.google_client_config.default.access_token
  cluster_ca_certificate = base64decode(module.gke.ca_certificate)
}