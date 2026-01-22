terraform {
  backend "s3" {
    bucket         = "stc-terraform-backend-764265373335"
    key            = "securethecloud-platform/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "stc-tf-locks"
  }
}
