# STI AI — Lab Correlation Architecture

## Purpose

STI AI will reason over labs, not just list them.

It will answer questions such as:
- Which labs cover Identity Shield gaps?
- What controls are missing for Zero Trust maturity?
- Which Academy modules reinforce this lab?
- What risk domains are under-tested?

## Canonical Correlation Model (Locked)

### Data Sources
- labs.json
- shield.json (future)
- academy.json (future)

---
```
### Core Correlation Axes
Lab
 ├─ shieldDomains[]
 ├─ frameworks[]
 ├─ architecture.pattern
 ├─ controlObjectives[]
 └─ academy.track
```
---

## Example Correlation Logic (Conceptual)

INPUT:
Shield Domain = "Identity Shield"

PROCESS:
- Filter labs where controls.shieldDomains includes "Identity Shield"
- Rank by level (L5 → L1)
- Correlate missing frameworks
- Suggest next labs or academy modules

OUTPUT:
- Coverage map
- Risk gaps
- Learning recommendations
---
```
## Future Implementation Location

site/js/sti-ai/
├── correlation-engine.js
├── lab-analyzer.js
└── recommendations.js
```
---

## Design Constraints

- API-backed
- Graph-based
- Explainable outputs
- No black-box reasoning
