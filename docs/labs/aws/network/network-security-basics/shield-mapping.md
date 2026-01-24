# Shield Mapping — AWS Network Security Basics

## Threat Scenario
Overly permissive network access allows attackers to move laterally
between resources and access services that should be isolated.

## Attack Path
Weak segmentation and open ingress rules expose internal resources.

Public or compromised entry point
→ Open security group or routing rule
→ Lateral movement
→ Resource compromise

markdown
Copy code

## Defensive Controls
- Security group least privilege
- Network segmentation by tier
- Restrictive ingress and egress rules

## Detection & Signals
- VPC Flow Logs
- Security Hub network findings
- Unexpected east-west traffic patterns

## Shield Domain
Network Shield

## Related Labs
- AWS IAM Basics
- AWS CloudTrail Logging & Audit Visibility
