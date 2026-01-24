# Shield Mapping — AWS CloudTrail Logging & Audit Visibility

## Threat Scenario
Malicious or unauthorized activity goes undetected due to missing,
limited, or improperly scoped audit logging.

## Attack Path
Without comprehensive logging, attackers can perform API actions
without triggering alerts or forensic evidence.

Malicious API activity
→ No or partial logging
→ Delayed detection
→ Extended attacker dwell time

markdown
Copy code

## Defensive Controls
- Multi-region CloudTrail
- Centralized S3 log storage
- Log file integrity validation

## Detection & Signals
- CloudTrail event history
- CloudWatch Logs (optional)
- SIEM ingestion and correlation

## Shield Domain
Detection & Visibility Shield

## Related Labs
- AWS IAM Basics
- AWS S3 Public Access Block
