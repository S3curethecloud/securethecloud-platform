# MGF Project Memory — SecureTheCloud Platform

This file records **authoritative design decisions, deferred enhancements, and future recommendations** made during the SecureTheCloud platform build.

This is a **memory ledger**, not an execution plan.
Items here are intentionally deferred and must not be implemented unless explicitly reactivated.

---

## 🔒 CURRENT LOCK STATE (as of freeze)

- Homepage (desktop + mobile): **LOCKED**
- Global navigation (non-toggle): **LOCKED**
- Labs index UX (filters, sorting, badges): **LOCKED**
- First lab detail page (AWS ↔ Entra Federation): **LOCKED**
- Deployment pipeline (Git → S3 → CloudFront): **LOCKED**

No refactors or stylistic changes are permitted in these areas without an explicit unlock.

---

## ⏸️ DEFERRED / FUTURE IMPLEMENTATIONS

### 1. Mobile Navigation Toggle (Deferred — Authoritative)
**Status:** Deferred intentionally  
**Reason:** Mobile navigation is currently safe-mode (wrap layout) with no JS toggle.

Future implementation should include:
- Hamburger toggle button
- JS-controlled open/close state
- ARIA attributes (`aria-expanded`, `aria-controls`)
- Body scroll lock when menu is open
- Focus trapping for accessibility

**Note:**  
This is a *known requirement*, not a bug.

---

### 2. Labs Page Enhancements (Deferred)
- Search (title + tags)
- Popularity / recommendation ranking
- “Recommended Labs” logic
- STI AI correlation scoring

All depend on the normalized `labs.json` schema (already in place).

---

### 3. Lab Detail Page Extensions (Deferred)
- Architecture diagrams (Mermaid or SVG)
- “What This Maps To” (Shield / Controls / Compliance)
- Progressive disclosure of steps (accordion-style)
- Estimated cost indicators (if applicable)

The AWS ↔ Entra lab page is the **canonical template**.

---

### 4. STI AI Integration (Deferred)
Future use of:
- `labs.json` metadata
- Shield domain mapping
- Control identifiers
- Learning path inference

No implementation is to begin until explicitly unlocked.

---

## 🧭 NEXT MOVE OPTIONS (FROZEN)

The following options were identified but intentionally paused:

1. Templatize the lab detail page for all labs  
2. Write Step 1–3 of the AWS ↔ Entra lab walkthrough  
3. Add architecture diagrams  
4. Add Labs search  

Execution resumes only when explicitly reactivated.

---

## 🕘 FREEZE MARKER

Project frozen intentionally at this state.

Resume instruction required to proceed.

---

## 🔐 LOCKED DIRECTIVE — Templatize Labs

**Tag:** MGF-PLATFORM-ARCHITECT :: TEMPLATIZE LABS  
**Status:** Locked (Deferred)  
**Date Recorded:** 2026-01-07  
**Scope:** SecureTheCloud Platform — Labs System

### Context
The Labs Index and first lab page reached a stable, production-grade state.
At this point, further structural changes were intentionally paused to prevent
scope creep during initial platform launch.

### Intent
Create a canonical, reusable lab page template that standardizes:
- Lab header (trust anchor)
- “What You’ll Build” section
- Prerequisites block
- Start-point anchor
- Architecture diagram placement
- Step-by-step walkthrough structure
- Estimated time and level badges
- Mobile-first layout rules

### Explicit Non-Action
This work is **NOT** to be executed during the current launch phase.

No refactors, no new templates, and no retroactive changes to existing labs
are permitted unless this directive is explicitly reactivated.

### Reactivation Criteria
This directive may be reactivated when **any** of the following are true:
- ≥ 3 labs are published
- Labs search or filtering requires structural reuse
- Academy integration begins
- Documentation automation is introduced

Until reactivated, this item serves as **institutional memory only**.

