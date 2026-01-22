resource "aws_iam_role" "lambda_exec" {
  name = "stc-lambda-exec-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Action = "sts:AssumeRole",
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })

  lifecycle {
    prevent_destroy = true
    ignore_changes = [name]
  }
}

resource "aws_iam_role" "lambda_role" {
  name = "stc_lambda_role"
  assume_role_policy = data.aws_iam_policy_document.lambda_assume.json

  lifecycle {
    prevent_destroy = true
    ignore_changes = [name]
  }
}
