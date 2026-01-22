resource "aws_lambda_function" "ai_chat_fn" {
  function_name = "stc_ai_chat"
  role          = aws_iam_role.lambda_role.arn
  handler       = "index.handler"
  runtime       = "nodejs20.x"
  timeout       = 15

  filename         = "${path.module}/ai_chat.zip"
  source_code_hash = filebase64sha256("${path.module}/ai_chat.zip")
}
