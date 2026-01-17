resource "aws_s3_bucket" "stc_frontend" {
  bucket = "stc-platform-frontend-${random_id.bucket_suffix.hex}"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "404.html"
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

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}
