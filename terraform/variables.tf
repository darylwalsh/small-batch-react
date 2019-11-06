

variable "ecr_repos" {
  description = "Create ECR repos with these names"
  type        = list(string)
  default     = ["sbr-users", "sbr-users_db", "sbr-client", "sbr-swagger"]
}

