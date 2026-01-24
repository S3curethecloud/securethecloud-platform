# Shield Mapping — AWS S3 Public Access Block

## Threat Scenario
Public data exposure caused by misconfigured S3 bucket policies, ACLs,
or disabled Public Access Block controls.

## Attack Path
Misconfiguration or human error can expose S3 objects publicly,
allowing unauthorized access and potential data exfiltration.

Administrator or developer action
→ Public bucket policy or ACL applied
→ Objects become publicly accessible
→ Data leakage or scraping

markdown
Copy code

## Defensive Controls
- S3 Public Access Block (bucket and account level)
- Bucket policy enforcement
- Removal of public ACL permissions

## Detection & Signals
- CloudTrail events:
  - `PutBucketPolicy`
  - `PutBucketAcl`
- AWS Config:
  - `s3-bucket-public-read-prohibited`
  - `s3-bucket-public-write-prohibited`
- AWS Security Hub findings related to public S3 access

## Shield Domain
Data Protection / Storage Security

## Related Labs
- AWS IAM Basics
- AWS CloudTrail Logging & Audit Visibility
