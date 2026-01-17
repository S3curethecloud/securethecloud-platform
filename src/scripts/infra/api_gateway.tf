resource "aws_api_gateway_rest_api" "stc_api" {
  name        = "stc-api"
  description = "API for SecureTheCloud"
}

resource "aws_api_gateway_resource" "ai_chat_res" {
  rest_api_id = aws_api_gateway_rest_api.stc_api.id
  parent_id   = aws_api_gateway_rest_api.stc_api.root_resource_id
  path_part   = "ai-chat"
}

resource "aws_api_gateway_method" "ai_chat_method" {
  rest_api_id   = aws_api_gateway_rest_api.stc_api.id
  resource_id   = aws_api_gateway_resource.ai_chat_res.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "ai_chat_integration" {
  rest_api_id             = aws_api_gateway_rest_api.stc_api.id
  resource_id             = aws_api_gateway_resource.ai_chat_res.id
  http_method             = aws_api_gateway_method.ai_chat_method.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.ai_chat_fn.invoke_arn
}
