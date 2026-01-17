variable "domain_name" {
  description = "Root domain to use for STC"
  type        = string
}

variable "openai_key_secret_name" {
  description = "AWS Secrets Manager name for the OpenAI API key"
  type        = string
}

variable "supabase_url_secret_name" {
  description = "AWS Secrets Manager name for Supabase project URL"
  type        = string
}

variable "aws_region" {
  description = "AWS region to deploy into"
  type        = string
  default     = "us-east-1"
}

variable "supabase_anon_key_secret_name" {
  description = "AWS Secrets Manager name for Supabase anon key"
  type        = string
}
