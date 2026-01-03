# SecureTheCloud Platform

A unified platform for multi-cloud security engineering,
defensive intelligence (STI Shield & STI AI),
hands-on labs, and architect-grade education.

## What This Repo Is
- The production website
- The design system
- The platform documentation
- The deployment source for AWS

## Platform Pillars
- STI Shield (Security Framework)
- STI AI (Security Intelligence)
- Labs (Proof Engine)
- Academy (Mastery Paths)
- Media (Authority Distribution)
- Consulting (Applied Architecture)

## Architecture Overview
[link to docs/architecture]

## Deployment Model
AWS S3 + CloudFront + Route53

## Status
Actively built, versioned, and deployed
This alone separates you from 99% of portfolios.

4. docs/ — HOW WE “CAPTURE THE PROCESS”
This is where the real value is.

4.1 Architecture Documentation
arduino
---
```
docs/architecture/
├── platform-overview.md
├── aws-hosting-architecture.md
├── security-controls.md
└── future-saas-evolution.md
```
---
These explain:

Why static-first

Why CloudFront + OAC

How STI AI will evolve

How Academy becomes gated

4.2 Design System Docs
bash
Copy code
docs/design-system/
├── design-principles.md
├── color-tokens.md
├── typography.md
└── components.md
This proves systems thinking.

4.3 Architecture Decision Records (ADR) — NON-NEGOTIABLE
swift
Copy code
docs/decisions/
├── ADR-001-static-first.md
├── ADR-002-aws-hosting.md
├── ADR-003-sti-shield-framework.md
├── ADR-004-ai-positioning.md
└── ADR-005-github-first.md
Each ADR answers:

Context

Decision

Alternatives

Consequences

Recruiters and architects love this.

4.4 Roadmap (Public but Controlled)
bash
Copy code
docs/roadmap/
├── v1-platform.md
├── v2-sti-ai.md
└── v3-academy-saas.md
This shows vision without leaking IP.

5. Branching & Build Discipline
Branch Model (Simple & Senior)
css
Copy code
main        → production
develop     → active build
feature/*   → scoped changes
Examples:

feature/homepage-hero

feature/labs-index

feature/design-system-v1

No chaos. No long-lived junk branches.

6. Commit Message Standard (Important)
Use intent-based commits:

scss
Copy code
feat(homepage): add control plane hero section
docs(adr): record static-first hosting decision
style(design-system): finalize color tokens v1
chore(ci): add cloudfront invalidation step
This makes your Git history readable and impressive.

7. GitHub Actions (Minimal, Powerful)
.github/workflows/deploy.yml (Phase 1)
Pipeline intent:

Validate structure

Sync /site to S3

Invalidate CloudFront

We will implement this after homepage HTML is committed.

8. VERSIONING & CHANGELOG (Signals Maturity)
VERSION
Copy code
0.1.0
CHANGELOG.md
md
Copy code
## 0.1.0
- Platform design system defined
- Homepage wireframe implemented
- AWS hosting architecture documented
