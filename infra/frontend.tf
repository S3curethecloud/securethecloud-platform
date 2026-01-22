resource "random_id" "bucket_suffix" {
  byte_length = 4
}

# ----------------------------
# S3 Frontend Bucket
# ----------------------------
resource "aws_s3_bucket" "stc_frontend" {
  bucket = "${var.frontend_bucket_prefix}-${random_id.bucket_suffix.hex}"
}

# ----------------------------
# S3 Website Configuration
# ----------------------------
resource "aws_s3_bucket_website_configuration" "frontend_website" {
  bucket = aws_s3_bucket.stc_frontend.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

# ----------------------------
# S3 Ownership Controls
# ----------------------------
resource "aws_s3_bucket_ownership_controls" "frontend_controls" {
  bucket = aws_s3_bucket.stc_frontend.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

# ----------------------------
# CloudFront Distribution
# ----------------------------
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

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}
