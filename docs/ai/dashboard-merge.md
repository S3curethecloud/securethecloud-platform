# Shield Dashboard Merge Logic (v1)

## Purpose
Describe how STC AI outputs update the Shield dashboard JSON.

## Rules
- Match domains by `name`
- Overwrite `status`, `key_risks`, `recommended_labs`
- Set `last_updated` to AI generation time
- Preserve unknown domains if AI omits them

## Safety
- No deletion of domains
- No schema changes at runtime
- Human review possible before publish
