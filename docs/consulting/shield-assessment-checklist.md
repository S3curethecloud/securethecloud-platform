# SecureTheCloud Shield — Architecture Assessment Checklist

## Purpose
This checklist is used to assess cloud environments against
real-world attacker behaviors using the SecureTheCloud Shield Framework.

Each section represents a Shield domain and highlights:
- Key risk questions
- Control expectations
- Validation paths

---

## 🔐 Identity Shield

### Assessment Questions
- Are human identities federated through a central IdP?
- Are long-lived IAM users avoided or eliminated?
- Are privileged roles restricted and monitored?

### Control Expectations
- Identity federation and MFA enforced
- Least-privilege identity policies
- Regular access reviews

### Validation
- Review IAM configuration
- Execute **AWS IAM Basics** lab patterns

---

## 🗄️ Data Protection Shield

### Assessment Questions
- Is sensitive data encrypted at rest and in transit?
- Are storage access controls restrictive by default?
- Are public access blocks enforced?

### Control Expectations
- Customer-managed encryption keys
- Storage-level access restrictions
- Explicit deny for public exposure

### Validation
- Inspect KMS usage and policies
- Execute **S3 Public Access Block** lab

---

## 👁️ Detection & Visibility Shield

### Assessment Questions
- Is CloudTrail enabled across all regions?
- Are logs centralized and retained?
- Are security findings actively reviewed?

### Control Expectations
- Centralized logging
- Threat detection enabled
- Alerting and investigation workflows

### Validation
- Review CloudTrail configuration
- Execute **CloudTrail Logging & Audit Visibility** lab

---

## 🌐 Network Shield

### Assessment Questions
- Are networks segmented by function or trust level?
- Are ingress and egress rules minimal?
- Is lateral movement constrained?

### Control Expectations
- Tiered network architecture
- Restrictive security group rules
- Limited exposure to the internet

### Validation
- Review VPC and security group design
- Execute **Network Security Basics** lab

---

## 🧮 Zero Trust Compute Shield

### Assessment Questions
- Do workloads use dedicated IAM roles?
- Are permissions scoped to workload function?
- Are secrets and data isolated per service?

### Control Expectations
- Least-privilege service roles
- Encryption boundaries
- Runtime telemetry

### Validation
- Review service role policies
- Execute **IAM Basics** and **KMS Basics** labs

---

## Assessment Outcome

### Risk Scoring
Each Shield domain should be rated:
- Low Risk
- Medium Risk
- High Risk

### Deliverables
- Shield domain risk summary
- Prioritized remediation plan
- Validation evidence via labs

---

## Why This Works
This assessment focuses on **blast-radius reduction**, not checkbox compliance.

It maps directly to attacker behavior and provides
verifiable security outcomes.
