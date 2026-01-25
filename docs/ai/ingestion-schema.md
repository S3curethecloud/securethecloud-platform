# STC AI Ingestion Schema (v1)

## Purpose
This schema defines how SecureTheCloud AI ingests labs, Shield mappings,
and security concepts into a unified reasoning graph.

It is designed to support:
- Threat-driven analysis
- Cross-lab reasoning
- Executive and technical explanations

---

## Core Objects

### 1. Lab
Represents a hands-on security exercise.

**Required Fields**
- `lab_id`
- `title`
- `cloud`
- `domain` (identity, network, security, storage, composite)
- `difficulty`
- `outcomes`

**Optional Fields**
- `services`
- `prerequisites`

---

### 2. Shield Mapping
Connects a lab to a defensive security domain.

**Required Fields**
- `shield_domain`
- `threat_scenario`
- `attack_path`
- `defensive_controls`
- `detection_signals`

---

### 3. Threat
Represents an attacker behavior or risk pattern.

**Fields**
- `name`
- `description`
- `related_shields`
- `related_labs`

---

## Canonical Relationships

Threat
↓
Shield Domain
↓
Defensive Controls
↓
Labs
↓
Validation Evidence

yaml
Copy code

---

## Example (Conceptual)

```json
{
  "lab_id": "aws-iam-basics",
  "title": "AWS IAM Basics",
  "shield_domain": "Zero Trust Compute",
  "threat_scenario": "Over-permissive service roles",
  "defensive_controls": [
    "Least-privilege IAM roles",
    "Explicit deny policies"
  ],
  "detection_signals": [
    "CloudTrail role anomalies",
    "IAM Access Analyzer findings"
  ]
}
Design Principles
One source of truth per lab

One Shield domain per mapping

No duplication of concepts

Human-readable first, machine-ingestable second

Versioning
This document defines Schema v1.
All future ingestion enhancements must remain backward-compatible.


