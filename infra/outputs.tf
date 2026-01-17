output "frontend_bucket" {
  value = aws_s3_bucket.stc_frontend.bucket
}

output "cloudfront_domain" {
  value = aws_cloudfront_distribution.stc_cdn.domain_name
}

output "api_uri" {
  value = aws_api_gateway_rest_api.stc_api.execution_arn
}

output "deployer_trigger" {
  value = "Triggered by GitHub Actions ✅"
}
