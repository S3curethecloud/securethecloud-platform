# SecureTheCloud Shield

SecureTheCloud Shield is the defensive intelligence layer that maps
real-world cloud threats to controls, detection signals, and hands-on labs.

Shield is organized by **threat domains**, not services.

---

## 🧠 Shield Domains

### 🔐 Identity Shield
**Threats**
- Credential abuse
- Privilege escalation
- Over-permissioned identities

**Primary Controls**
- IAM least privilege
- Role-based access
- Identity auditing

**Mapped Labs**
- AWS IAM Basics  
  → `labs/aws/identity/iam-basics/`
- AWS Entra ID Federation  
  → `labs/aws/identity/aws-entra-federation/`
- Composite: Secure Identity & Network  
  → `labs/aws/composite/secure-identity-network/`

---

### 🗄️ Data Protection Shield
**Threats**
- Public data exposure
- Accidental misconfiguration
- Unauthorized access

**Primary Controls**
- S3 Public Access Block
- Bucket policy enforcement
- Storage guardrails

**Mapped Labs**
- AWS S3 Public Access Block  
  → `labs/aws/storage/s3-public-access-block/`

---

### 🌐 Network Shield
**Threats**
- Lateral movement
- Public network exposure
- Over-permissive firewall rules

**Primary Controls**
- Network segmentation
- Security groups and NACLs
- Private endpoints and routing controls

**Mapped Labs**
- AWS Network Security Basics  
  → `labs/aws/network/network-security-basics/`
- Composite: Secure Identity & Network  
  → `labs/aws/composite/secure-identity-network/`
- Composite: Secure Network Access  
  → `labs/aws/composite/secure-network-access/`

---

### 🧮 Zero Trust Compute Shield
**Threats**
- Compromised workloads
- Credential abuse from compute
- Lateral movement via service roles

**Primary Controls**
- Least-privilege IAM roles for workloads
- Strong identity boundaries between services
- Encryption and secrets isolation
- Mandatory logging and telemetry

**Mapped Labs**
- AWS IAM Basics  
  → `labs/aws/identity/iam-basics/`
- AWS KMS Basics  
  → `labs/aws/security/kms-basics/`
- Composite: Secure Identity & Network  
  → `labs/aws/composite/secure-identity-network/`
- Composite: Secure Network Access  
  → `labs/aws/composite/secure-network-access/`

---

### 👁️ Detection & Visibility Shield
**Threats**
- Undetected malicious activity
- Delayed incident response
- Insufficient audit coverage

**Primary Controls**
- CloudTrail logging
- Centralized audit storage
- Event correlation

**Mapped Labs**
- AWS CloudTrail Logging & Audit Visibility  
  → `labs/aws/security/logging-cloudtrail/`

---

## 🔗 How Shield Is Used

Shield powers:
- Defensive architecture decisions
- Incident response readiness
- Consulting assessments
- SecureTheCloud AI reasoning

Each Shield domain is backed by **hands-on labs** that demonstrate
how controls are implemented and validated in real environments.
