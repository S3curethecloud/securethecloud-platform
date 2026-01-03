# SecureTheCloud Platform

SecureTheCloud is a unified platform for **multi-cloud security engineering**, **defensive intelligence (STI Shield & STI AI)**, **hands-on labs**, and **architect-grade education**.

This repository is the **system of record** for the SecureTheCloud platform. It contains the production website, design system, platform documentation, and AWS deployment logic.

---

## What This Repository Is

This repository serves as:
*   The **production frontend** for securethecloud.dev
*   The **design system** governing all platform interfaces
*   The **documentation hub** capturing architectural decisions
*   The **deployment source** for AWS S3 + CloudFront
*   A **living portfolio** demonstrating senior-level platform engineering

This is not a marketing site.
It is a **platform built as code**.

---

## Platform Pillars

SecureTheCloud is organized around six core pillars:

1.  **STI Shield**
    A deployable, architecture-driven security framework spanning identity, zero trust networking, workload protection, data security, and detection.

2.  **STI AI**
    A security reasoning and intelligence layer designed to analyze architecture, correlate risk, and augment learning and decision-making.

3.  **Labs**
    A proof engine of real, hands-on security labs across AWS, Azure, and GCP, mapped to controls, threats, and architecture patterns.

4.  **Academy**
    Structured mastery paths for cloud and security engineers, built on labs, governed by STI Shield, and enhanced by STI AI.

5.  **Media**
    Technical education and architecture walkthroughs distributed via YouTube and other channels, tightly integrated with labs and platform content.

6.  **Consulting**
    Premium advisory services that apply the same frameworks, labs, and intelligence used throughout the platform.

---

## Architecture Overview

The SecureTheCloud platform is designed using a **static-first, cloud-native** architecture:
*   Static frontend hosted on **AWS S3**
*   Global delivery via **CloudFront**
*   Secure origin access using **Origin Access Control (OAC)**
*   DNS managed in **Route 53** (domain registered with Squarespace)
*   CI/CD driven by **GitHub Actions**

This architecture prioritizes:
*   Security
*   Performance
*   Cost efficiency
*   Long-term scalability

Detailed diagrams and rationale live under: `docs/architecture/`

---
```
## Repository Structure
securethecloud-platform/
├── site/ # Production website (S3-deployed)
├── design-system/ # Global UI tokens and components
├── docs/ # Architecture, decisions, roadmap
├── infra/ # AWS infrastructure definitions
├── .github/ # CI/CD workflows
├── CHANGELOG.md
└── VERSION
```
---

The structure of `/site` mirrors the S3 production layout exactly.

---

## Deployment Model

*   **Source of truth:** GitHub
*   **Build & deploy:** GitHub Actions
*   **Runtime:** AWS S3 + CloudFront
*   **Environments:** dev / stage / prod

> No servers. No runtime frameworks required for v1.

---

## Status

*   **Platform architecture:** defined
*   **Design system:** v1 locked
*   **Homepage:** under active build
*   **Labs, Shield, AI, Academy:** incremental rollout

This repository is **actively built and versioned**.

---

## License & Usage

All content, frameworks, and designs are proprietary to SecureTheCloud unless explicitly stated otherwise.

---

> SecureTheCloud is built as a system — not a site.
