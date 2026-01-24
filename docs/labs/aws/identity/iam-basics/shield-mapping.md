# Shield Mapping — AWS IAM Basics

## Threat Scenario
Compromised credentials or over-permissioned identities allow attackers
to escalate privileges and access sensitive resources.

## Attack Path
Credential compromise or misuse of excessive permissions enables
unauthorized actions across AWS services.

Compromised credentials
→ Excessive IAM permissions
→ Privilege escalation
→ Resource takeover

markdown
Copy code

## Defensive Controls
- IAM least-privilege policies
- Use of IAM roles instead of long-lived users
- Regular access reviews

## Detection & Signals
- CloudTrail events:
  - `AttachUserPolicy`
  - `PutRolePolicy`
  - `CreateAccessKey`
- IAM Access Analyzer findings

## Shield Domain
Identity Shield

## Related Labs
- AWS S3 Public Access Block
- AWS CloudTrail Logging & Audit Visibility
