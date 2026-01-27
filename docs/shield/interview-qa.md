
---

## File 2 — `docs/shield/interview-qa.md`  
Purpose: **Senior-level interview defense**. Pattern: concise Q/A like Stripe design patterns + HashiCorp “recommended patterns.” :contentReference[oaicite:3]{index=3}

```md
# STC Shield — Interview Q&A (Architect Level)

## Q: What problem does Shield solve?
Most cloud breaches are identity-driven. Shield focuses on **identity trust abuse** and models exploitability: how identities can be abused **in sequence** across cloud environments.

## Q: Why not just use native cloud tools?
Native tools show configuration. Shield shows **exploit paths**—identity → privilege → resource—so teams can prioritize what attackers can actually chain.

## Q: Is it production-ready?
It’s operator-grade and production-aligned in design: clear scope boundaries, defensive failure modes, and a roadmap for persistence, scheduling, and integrations without changing the core model.

## Q: What’s your security posture for access?
Shield uses active sessions. Expired/invalid sessions block analysis by design. No credential harvesting, no silent fallback.

## Q: How do you reduce false positives?
Shield focuses on **trust relationships + reachable privilege paths**, not generic “best practice” checks. Severity is tied to chainable abuse, not just misconfiguration.

## Q: What’s the differentiator vs CSPM/SIEM?
CSPM flags misconfigurations. SIEM logs events. Shield models **identity attack paths** that connect misconfig → abuse path → impact, producing an operator view and a leadership report.

## Q: Where does STC AI fit?
Shield provides structured outputs (paths, severity, rationale). AI reasons over them: “why this matters,” “what to fix first,” and consulting-grade narratives.
