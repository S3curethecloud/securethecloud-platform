resource "aws_iam_role" "lambda_role" {
  name = "stc_lambda_role"

  assume_role_policy = data.aws_iam_policy_document.lambda_assume.json
}

data "aws_iam_policy_document" "lambda_assume" {
  statement {
    effect = "Allow"
    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

resource "aws_lambda_function" "ai_chat_fn" {
  function_name = "stc_ai_chat"
  role          = aws_iam_role.lambda_role.arn
  handler       = "index.handler"
  runtime       = "nodejs20.x"
  timeout       = 15

  filename         = "${path.module}/ai_chat.zip"
  source_code_hash = filebase64sha256("${path.module}/ai_chat.zip")
}


