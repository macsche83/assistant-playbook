# Design Review Gate

> Extracted from the abuero-website project. Use this module for any project with UI/visual components.

## When to Apply

Add this module when:
- The project has a user-facing UI
- Design files exist (HTML wireframes, Figma, etc.)
- Visual consistency matters (brand, CI, design system)

## The Rule

For ANY visual/UI change:

1. **Update design file** — edit the wireframe or design reference, bump version in 3 places:
   - `<title>` tag
   - Banner/header
   - `<h1>` heading
   - Run `date "+%y-%m-%d-%H%M"` for the version timestamp

2. **Present for review** — open in browser for the human to see

3. **WAIT for explicit "go"** — silence is NOT consent. The LLM must stop and explicitly ask:
   > "Wireframe updated — please review and confirm before I implement."

4. **Only then implement** — build exactly what was approved

5. **Screenshot and compare** — after implementation, screenshot each section and compare against the wireframe

## Design File Versioning

Every edit to design/wireframe files MUST bump the version in 3 places. This prevents confusion about which version was approved.

## Three-Source Sync

When a design system exists, style changes must update all three sources:
1. **Code** — `tailwind.config.ts` / `globals.css` / equivalent
2. **Design file** — CI reference, wireframes
3. **External docs** — Notion CI Manual, brand guide, etc.

## Anti-Patterns

- Starting implementation before wireframe approval
- Assuming the last version was approved (check the version timestamp)
- Making "small tweaks" to approved designs without re-review
- Closing design tickets without explicit human approval

## Add to CLAUDE.md

```markdown
## Design Review Gate

For ANY visual/UI change:

1. Update design file, bump version in 3 places
2. Present to {{USER_NAME}} for review
3. **WAIT for explicit "go"** — silence is NOT consent
4. Only then proceed to implement
```
