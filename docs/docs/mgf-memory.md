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

🔒 Freeze: Minor Optional Tweaks (Not Required)

These are explicitly nice-to-haves, not blockers, and must not slow execution:

Slightly increase contrast on inactive filter pills (accessibility)

Add hover elevation to lab cards (desktop delight)

Sticky filter bar on scroll (future enhancement)

These are deferred by design, not forgotten.

👉 This freeze is correct and safe.
