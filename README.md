# SecureTheCloud Platform

A unified platform for multi-cloud security engineering,  
defensive intelligence (STI Shield & STI AI),  
hands-on labs, and architect-grade education.

---

## What This Repo Is

This repository represents the **platform itself**, not a demo or portfolio artifact.

It contains:
- The production website
- The design system
- The platform documentation
- The deployment source for AWS

This repo is the authoritative source of truth for SecureTheCloud.

---

## Platform Pillars

- **STI Shield** — Security framework and control model  
- **STI AI** — Security intelligence and reasoning layer  
- **Labs** — Proof engine through real deployments  
- **Academy** — Mastery paths and structured learning  
- **Media** — Authority distribution (YouTube, content, visibility)  
- **Consulting** — Applied architecture and real-world delivery  

---

## Architecture Overview

High-level platform architecture, hosting decisions, and evolution path:

➡️ `docs/architecture/`

---

## Deployment Model

- Amazon S3 (static hosting)
- Amazon CloudFront (distribution)
- Origin Access Control (OAC)
- Amazon Route 53 (DNS)

Static-first, secure-by-default, globally distributed.

---

## Status

Actively built, versioned, and deployed.

---

# Documentation Structure

## docs/ — Capturing the Process

This directory captures **how and why** the platform is built.

### 1. Architecture Documentation

docs/architecture/
├── platform-overview.md
├── aws-hosting-architecture.md
├── security-controls.md
└── future-saas-evolution.md

yaml
Copy code

These documents explain:
- Why static-first was chosen
- Why CloudFront + OAC is enforced
- How STI AI will evolve over time
- How the Academy transitions into gated access

---

### 2. Design System Documentation

docs/design-system/
├── design-principles.md
├── color-tokens.md
├── typography.md
└── components.md

yaml
Copy code

This proves system-level thinking and repeatability.

---

### 3. Architecture Decision Records (ADR) — **Non-Negotiable**

docs/decisions/
├── ADR-001-static-first.md
├── ADR-002-aws-hosting.md
├── ADR-003-sti-shield-framework.md
├── ADR-004-ai-positioning.md
└── ADR-005-github-first.md

yaml
Copy code

Each ADR documents:
- Context
- Decision
- Alternatives considered
- Consequences

This is how senior architects communicate intent.

---

### 4. Public Roadmap (Controlled)

docs/roadmap/
├── v1-platform.md
├── v2-sti-ai.md
└── v3-academy-saas.md

yaml
Copy code

Shows vision without leaking intellectual property.

---

## Branching & Build Discipline

Simple, senior-level branching model:

main → production
develop → active build
feature/* → scoped changes

yaml
Copy code

Example branches:
- `feature/homepage-hero`
- `feature/labs-index`
- `feature/design-system-v1`

No chaos. No long-lived junk branches.

---

## Commit Message Standard

Intent-based, readable commit history:

feat(homepage): add control plane hero section
docs(adr): record static-first hosting decision
style(design-system): finalize color tokens v1
chore(ci): add cloudfront invalidation step

yaml
Copy code

This makes Git history an asset, not noise.

---

## GitHub Actions (Phase 1)

Location:
.github/workflows/deploy.yml

yaml
Copy code

Pipeline intent:
1. Validate repository structure
2. Sync `/site` to Amazon S3
3. Invalidate CloudFront distribution

CI/CD will be implemented after homepage HTML is committed.

---

## Versioning & Changelog

VERSION
0.1.0

Copy code
CHANGELOG.md

0.1.0
Platform design system defined

Homepage wireframe implemented

AWS hosting architecture documented
