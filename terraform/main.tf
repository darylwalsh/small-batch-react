
resource "aws_ecr_repository" "sbr_ecr_repos" {
  for_each = toset(var.ecr_repos)
  name     = each.value
}


output "all_ecr_repos" {
  value = aws_ecr_repository.sbr_ecr_repos
}

output "all_ecr_repo_arns" {
  value = values(aws_ecr_repository.sbr_ecr_repos)[*].arn
}
output "all_ecr_repo_ids" {
  value = values(aws_ecr_repository.sbr_ecr_repos)[*].id
}
output "all_ecr_repo_name" {
  value = values(aws_ecr_repository.sbr_ecr_repos)[*].name
}
output "all_ecr_repo_registry_id" {
  value = values(aws_ecr_repository.sbr_ecr_repos)[*].registry_id
}
output "all_erc_repo_repository_url" {
  value = values(aws_ecr_repository.sbr_ecr_repos)[*].repository_url
}
