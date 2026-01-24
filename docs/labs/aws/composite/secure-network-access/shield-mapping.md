# Shield Mapping — Secure Network Access (Zero Trust Compute)

## Threat Scenario
Workloads with unrestricted network paths allow attackers
to move laterally after compromising a single service.

## Attack Path
Compromised workload
→ Overly permissive network access
→ East-west movement
→ Multi-service compromise

markdown
Copy code

## Defensive Controls
- Explicitly defined ingress and egress rules
- Identity-aware access paths
- Network isolation between service tiers

## Detection & Signals
- VPC Flow Logs showing east-west traffic
- Unexpected connection attempts between services
- Security Hub network findings

## Shield Domain
Zero Trust Compute Shield

## Related Labs
- AWS Network Security Basics
- AWS IAM Basics
