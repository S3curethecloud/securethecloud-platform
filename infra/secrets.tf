resource "aws_secretsmanager_secret" "openai_key" {
  name        = var.openai_key_secret_name
  description = "OpenAI API Key"

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_secretsmanager_secret_version" "openai_key_value" {
  secret_id     = aws_secretsmanager_secret.openai_key.id
  secret_string = jsonencode({ OPENAI_API_KEY = "REPLACE_WITH_REAL_KEY" })
}

resource "aws_secretsmanager_secret" "supabase_url" {
  name = var.supabase_url_secret_name

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_secretsmanager_secret_version" "supabase_url_val" {
  secret_id     = aws_secretsmanager_secret.supabase_url.id
  secret_string = jsonencode({ SUPABASE_URL = "REPLACE_WITH_SUPABASE_URL" })
}

resource "aws_secretsmanager_secret" "supabase_anon_key" {
  name = var.supabase_anon_key_secret_name

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_secretsmanager_secret_version" "supabase_anon_key_val" {
  secret_id     = aws_secretsmanager_secret.supabase_anon_key.id
  secret_string = jsonencode({ SUPABASE_ANON_KEY = "REPLACE_WITH_SUPABASE_ANON_KEY" })
}
