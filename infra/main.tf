terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  required_version = ">= 1.3.0"
}

provider "aws" {
  region = var.aws_region
}

# --------------------------------------------
# Lambda Function URL (public endpoint)
# --------------------------------------------
resource "aws_lambda_function_url" "ai_chat" {
  function_name      = aws_lambda_function.ai_chat.function_name
  authorization_type = "NONE"

  cors {
    allow_origins = ["*"]
    allow_methods = ["POST"]
    allow_headers = ["*"]
  }
}

# --------------------------------------------
# Lambda Function (ZIP comes from ai_chat.zip)
# --------------------------------------------
resource "aws_lambda_function" "ai_chat" {
  function_name = "stc-ai-chat"
  role          = aws_iam_role.lambda_exec.arn
  handler       = "index.handler"
  runtime       = "nodejs18.x"

  filename         = "${path.module}/ai_chat.zip"
  source_code_hash = filebase64sha256("${path.module}/ai_chat.zip")

  environment {
    variables = {
      STC_ENV = "production"
    }
  }
}
