# ADR-001: Static-First Frontend Architecture

## Status
Accepted

## Context

SecureTheCloud is designed as a long-lived platform that integrates
documentation, security frameworks, hands-on labs, education, and future
intelligence services (STI AI).

The frontend must:

- Be secure by default
- Scale globally with minimal operational overhead
- Support incremental feature growth (AI, Academy, auth)
- Serve as a public-facing portfolio and authority platform
- Remain cost-efficient during early and growth phases

Several frontend architecture options were considered, including:
- Server-rendered frameworks
- Fully dynamic application backends
- Static site delivery with progressive enhancement

---

## Decision

SecureTheCloud will adopt a **static-first frontend architecture**.

The platform frontend will be delivered as static assets hosted on **AWS S3**
and distributed globally via **CloudFront**, with all backend capabilities
introduced incrementally through APIs as needed.

---

## Rationale

A static-first approach provides:

- **Security**  
  No public-facing application servers; reduced attack surface.

- **Performance**  
  CDN-native delivery with minimal latency.

- **Operational Simplicity**  
  No runtime infrastructure to patch, scale, or monitor.

- **Cost Efficiency**  
  Near-zero baseline cost during early stages.

- **Architectural Flexibility**  
  Dynamic features (STI AI, Academy auth, dashboards) can be layered via APIs
  without re-platforming the frontend.

This aligns with SecureTheCloud’s philosophy of
**architecture-first, identity-first, and least-privilege design**.

---

## Alternatives Considered

### Server-Side Rendered Frameworks (e.g., Next.js SSR)
- Pros: Dynamic rendering, SEO flexibility
- Cons: Increased complexity, server management, higher cost, larger attack surface

### Fully Dynamic SPA with Backend
- Pros: Rich interactivity
- Cons: Overkill for v1, operational overhead, premature complexity

---

## Consequences

### Positive
- Strong security posture from day one
- Simple CI/CD pipeline
- Clean separation between frontend and future services
- Easy rollback and versioning

### Trade-offs
- Dynamic features require API integration
- Authentication and personalization are deferred to later phases

These trade-offs are acceptable and intentional.

---

## Follow-On Decisions

This ADR enables and informs:
- ADR-002: AWS hosting and CloudFront usage
- ADR-003: STI Shield framework delivery model
- ADR-004: STI AI positioning as a service layer
- ADR-005: GitHub-first development workflow

