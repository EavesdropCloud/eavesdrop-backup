variable "project_id" {
  description = "The project ID to host the cluster in"
}

variable "region" {
  description = "The region the cluster in"
  default     = "us-west1"
}

variable "db_url" {
  description = "Database url string"
  type = string
}