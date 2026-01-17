resource "random_id" "bucket_suffix" {
  byte_length = 4
}

resource "aws_s3_bucket" "stc_frontend" {
  bucket = "stc-platform-frontend-${random_id.bucket_suffix.hex}"

  website {
    index_document = "index.html"
    error_document = "404.html"
  }
}

# ✅ Explicit ownership controls (avoids ACL conflicts)
resource "aws_s3_bucket_ownership_controls" "frontend_controls" {
  bucket = aws_s3_bucket.stc_frontend.id

  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}

resource "aws_cloudfront_distribution" "stc_cdn" {
  origin {
    domain_name = aws_s3_bucket.stc_frontend.bucket_regional_domain_name
    origin_id   = "stcFrontend"
  }

  enabled             = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = "stcFrontend"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
  }

  # ✅ REQUIRED BY AWS — even if unrestricted
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}
