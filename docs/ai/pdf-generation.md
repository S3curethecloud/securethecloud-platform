# STC AI — Executive PDF Generation (v1)

## Purpose
Define how SecureTheCloud generates executive-ready PDF reports
from Shield dashboard data and AI analysis.

---

## Inputs
- Shield Dashboard JSON (`docs/dashboards/shield-dashboard.json`)
- AI Gap Analysis Output (structured JSON per v1 contract)
- Engagement metadata (client name, date, scope)

---

## Generation Steps
1. Merge AI output into Shield Dashboard JSON
2. Populate report sections using templates
3. Render markdown to PDF
4. Apply branding and formatting
5. Produce final, reviewable PDF

---

## Required Sections (Fixed Order)

### 1. Executive Summary
- Plain-language overview
- Top 2–3 risks
- Overall posture statement

### 2. Shield Domain Scores
Table of domains with:
- Status (Strong / Partial / Weak)
- One-line risk statement

### 3. Key Risks & Blast Radius
- Highest-impact attack paths
- Business impact explanation

### 4. Detection Confidence
- What will be detected
- What may go unnoticed

### 5. Recommended Actions
For each action:
- Shield domain
- Description
- Validation lab

### 6. Roadmap
- Immediate (0–30 days)
- Near-term (30–90 days)
- Strategic (90+ days)

---

## Output Requirements
- PDF format
- Executive-readable language
- No tool/vendor bias
- Traceable back to Shield domains

---

## Governance
- Human review before delivery
- Versioned output
- Backward-compatible with Schema v1
