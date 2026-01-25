# SecureTheCloud Shield — Interview Questions (L2 / L3)

## Purpose
These questions evaluate a candidate’s ability to design, assess,
and defend cloud environments using threat-driven reasoning.

Questions are organized by Shield domain and mapped to real-world scenarios.

---

## 🔐 Identity Shield

### L2 Question
How would you prevent privilege escalation in an AWS environment
where multiple teams deploy services independently?

**What We’re Looking For**
- IAM role separation
- Avoidance of long-lived credentials
- Guardrails and access reviews

---

### L3 Question
An attacker compromises a developer’s credentials.
What controls limit blast radius, and how do you detect misuse?

**Expected Depth**
- Role scoping
- Conditional access
- CloudTrail analysis

---

## 🗄️ Data Protection Shield

### L2 Question
How do you ensure sensitive data remains protected if network controls fail?

**What We’re Looking For**
- Encryption at rest and in transit
- Key ownership and access boundaries

---

### L3 Question
Describe how you would design KMS key policies
to prevent compromised workloads from decrypting sensitive data.

**Expected Depth**
- Service-specific key policies
- Explicit denies
- Environment separation

---

## 👁️ Detection & Visibility Shield

### L2 Question
What logs are critical for detecting cloud compromise,
and how do you ensure they cannot be tampered with?

**What We’re Looking For**
- CloudTrail coverage
- Centralized logging
- Immutable storage

---

### L3 Question
How would you detect lateral movement in a cloud-native environment?

**Expected Depth**
- VPC Flow Logs
- Behavioral analysis
- Correlation across signals

---

## 🌐 Network Shield

### L2 Question
How do you reduce lateral movement risk inside a VPC?

**What We’re Looking For**
- Network segmentation
- Minimal ingress/egress
- Tiered architectures

---

### L3 Question
A service must be publicly reachable but should not expose internal systems.
How do you design this safely?

**Expected Depth**
- Private subnets
- Controlled ingress paths
- Identity-aware access

---

## 🧮 Zero Trust Compute Shield

### L2 Question
What does Zero Trust mean at the workload level in the cloud?

**What We’re Looking For**
- Least-privilege service roles
- Identity-bound compute
- Encryption boundaries

---

### L3 Question
Assume a container is compromised.
What prevents it from accessing unrelated services or data?

**Expected Depth**
- IAM role isolation
- Network controls
- Secrets management
- Detection signals

---

## Interviewer Guidance
Strong candidates:
- Think in attack paths
- Discuss blast radius
- Reference detection, not just prevention

Weak candidates:
- Rely on perimeter controls
- Speak only in tools, not outcomes
