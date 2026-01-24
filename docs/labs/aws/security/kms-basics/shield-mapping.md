# Shield Mapping — AWS KMS Basics (Zero Trust Compute)

## Threat Scenario
Compromised workloads gain access to plaintext secrets or unencrypted data,
allowing attackers to escalate impact after initial access.

## Attack Path
Compromised workload
→ Access to unencrypted secrets or data
→ Credential extraction or data exposure
→ Lateral movement or persistence

markdown
Copy code

## Defensive Controls
- Encryption at rest using customer-managed KMS keys
- Strict key policies limiting workload access
- Key separation per environment or service

## Detection & Signals
- CloudTrail KMS API usage anomalies
- Unexpected decrypt operations
- Key access from unusual principals

## Shield Domain
Zero Trust Compute Shield

## Related Labs
- AWS IAM Basics
- AWS CloudTrail Logging & Audit Visibility
