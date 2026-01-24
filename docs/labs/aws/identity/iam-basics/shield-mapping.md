# Shield Mapping — IAM Basics (Zero Trust Compute)

## Threat Scenario
Over-permissive IAM roles allow compromised workloads
to access unrelated services and sensitive data.

## Attack Path
Compromised compute workload
→ Excessive IAM role permissions
→ Unauthorized service access
→ Data exfiltration or persistence

markdown
Copy code

## Defensive Controls
- Least-privilege IAM roles for workloads
- Separation of duties between services
- Explicit deny policies where applicable
- Avoid long-lived IAM users

## Detection & Signals
- CloudTrail role usage anomalies
- IAM Access Analyzer findings
- Unusual service-to-service API calls

## Shield Domain
Zero Trust Compute Shield

## Related Labs
- AWS KMS Basics
- AWS CloudTrail Logging & Audit Visibility
