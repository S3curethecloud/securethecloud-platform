resource "aws_api_gateway_rest_api" "stc_api" {
  name        = "stc-api"
  description = "API for SecureTheCloud"
}

resource "aws_lambda_permission" "api_gw_ai_chat" {
  statement_id  = "AllowAPIGatewayInvokeAIChatV2"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.ai_chat_fn.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.stc_api.execution_arn}/*/*"
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

resource "aws_api_gateway_deployment" "stc_deployment" {
  rest_api_id = aws_api_gateway_rest_api.stc_api.id

  triggers = {
    redeploy = sha1(jsonencode([
      aws_api_gateway_resource.ai_chat_res.id,
      aws_api_gateway_method.ai_chat_method.id,
      aws_api_gateway_integration.ai_chat_integration.id
    ]))
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_api_gateway_stage" "prod" {
  rest_api_id   = aws_api_gateway_rest_api.stc_api.id
  deployment_id = aws_api_gateway_deployment.stc_deployment.id
  stage_name    = "prod"
}
