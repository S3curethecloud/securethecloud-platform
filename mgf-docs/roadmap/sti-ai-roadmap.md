# STI AI — Implementation Roadmap

STI AI is the intelligence layer of SecureTheCloud.
It reasons over labs, frameworks, and architecture to produce
explainable security insights.

This roadmap defines a **phased, defensible implementation path**
that avoids premature complexity and black-box behavior.

---

## Guiding Principles

- Explainable reasoning over opaque scoring
- Architecture-aware, not tool-centric
- Labs and frameworks as first-class inputs
- Human-in-the-loop by design
- Incremental delivery with real value at each phase

---

## Phase 0 — Design & Correlation (COMPLETE)

**Status:** Complete

Artifacts:
- `labs.json` canonical data model
- STI Shield domain definitions
- Academy track mappings
- `docs/architecture/sti-ai-lab-correlation.md`

Outcomes:
- Clear correlation axes
- No speculative AI implementation
- Strong architectural foundation

---

## Phase 1 — Local Correlation Engine (Static)

**Goal:** Reason over existing data without APIs or ML.

Scope:
- Client-side correlation logic
- Deterministic rules
- No authentication
- No persistence

Implementation:
site/js/sti-ai/
├── correlation-engine.js
├── lab-analyzer.js
└── recommendations.js

yaml
Copy code

Capabilities:
- Identify lab coverage by Shield domain
- Highlight gaps by framework (e.g., Zero Trust)
- Recommend next labs or Academy modules
- Rank labs by maturity (L5 → L1)

Outcome:
- STI AI produces **useful insights**
- Zero infrastructure required

---

## Phase 2 — API-Backed Intelligence Layer

**Goal:** Centralize reasoning and prepare for scale.

Scope:
- Read-only APIs
- Serverless backend
- Deterministic logic (still no ML)

Architecture:
- API Gateway
- Lambda
- JSON data sources (labs, shield, academy)

Capabilities:
- Multi-user access
- Versioned reasoning logic
- Auditable outputs

Outcome:
- STI AI becomes a **real service**
- Still explainable and deterministic

---

## Phase 3 — Graph-Based Reasoning

**Goal:** Model relationships explicitly.

Scope:
- Lab ↔ Shield ↔ Academy graph
- Path analysis
- Impact tracing

Capabilities:
- “What if this control is missing?”
- “Which labs reduce this risk domain?”
- Dependency-aware recommendations

Outcome:
- STI AI reasons structurally, not statistically

---

## Phase 4 — Assisted Intelligence (Optional)

**Goal:** Introduce ML cautiously and transparently.

Scope:
- Pattern detection
- Trend analysis
- Assisted suggestions (never autonomous decisions)

Constraints:
- No black-box scoring
- Human validation required
- Clear explanation paths

Outcome:
- Intelligence amplification without loss of trust

---

## What STI AI Will Never Be

- A generic chatbot
- A résumé keyword engine
- An opaque risk score generator
- A replacement for human judgment

---

## Success Criteria

STI AI is successful if:
- Its reasoning can be explained on a whiteboard
- Outputs can be audited
- Engineers trust its recommendations
- It enhances, not replaces, architectural thinking
