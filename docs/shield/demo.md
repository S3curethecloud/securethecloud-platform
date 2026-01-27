# STC Shield Demo (5–10 minutes)

## What you’re about to see
STC Shield analyzes live cloud identity configurations and models how attackers can move through identity trust paths across AWS, Azure, and GCP.

**Key distinction:** this is not “vulnerability scanning.” It’s **identity abuse path modeling**.

---

## Prerequisites (30 seconds)
- You have an active cloud session (SSO / federation)
- If the session is expired, Shield blocks analysis **by design**

---

## Demo Runbook (scripted)

### 1) Trigger analysis (30 seconds)
Run:

```bash
curl -X POST http://127.0.0.1:8000/analyze/aws

Say:
“This pulls live IAM trust relationships using my active session. If the session is expired, Shield blocks analysis by design.”

Proof point: defensive posture baked into the operator workflow.

2) Visualize the attack path (1–2 minutes)

Open the Shield UI demo.

Point to:

Identity entry point (SSO / federated identity)

Role assumption edge

Severity highlight (CRITICAL)

Say:
“This is the exact path an attacker would exploit after compromising a federated identity.”

3) Generate a report (1 minute)

Run:

curl -X POST http://127.0.0.1:8000/report/aws


Walk through:

Executive summary

Risk score / severity

Why it matters

Recommended actions

Say:
“This report is ready for security leadership—no translation required.”

4) Multi-cloud parity (1 minute)

Run:

curl -X POST http://127.0.0.1:8000/visualize/azure
curl -X POST http://127.0.0.1:8000/visualize/gcp


Say:
“Same model. Same risk logic. Different clouds.”

Optional closer (30 seconds)

“Shield is the detection and modeling backbone. Phase 2 connects this to AI reasoning and consulting-grade assessments.”

What not to claim (discipline)

No automated remediation (yet)

No compliance scoring engine (not the goal)

No multi-tenant SaaS claims



