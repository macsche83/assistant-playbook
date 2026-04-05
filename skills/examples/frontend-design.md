# Frontend Design Skill

> Read this skill when building ANY web component, page, or UI element.
> Extracted from the abuero-website project.

## When to Use

- Building a new page or component
- Modifying existing UI
- Creating wireframes or design files
- Reviewing visual output

## CI Rules

### Colors

| Role | Value | Usage |
|------|-------|-------|
| Primary | `{{PRIMARY_COLOR}}` | CTAs, active states, links |
| Secondary | `{{SECONDARY_COLOR}}` | Hover states, accents |
| Neutral | `{{NEUTRAL_COLOR}}` | Backgrounds, borders, muted text |

**Always present colors as Primary, Secondary, Neutral — never flat.**

### Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| H1 | {{FONT}} | {{H1_SIZE}} | bold |
| H2 | {{FONT}} | {{H2_SIZE}} | semibold |
| Body | {{FONT}} | {{BODY_SIZE}} | regular |

### Layout

- Max content width: {{MAX_WIDTH}}
- Responsive breakpoints: {{BREAKPOINTS}}
- Spacing scale: {{SPACING_SCALE}}

## Component Conventions

- One component per file, PascalCase naming
- Colocate types or put shared types in `types/`
- Use Tailwind utility classes — no inline styles
- All UI strings via i18n — no hardcoded text

## Design Versioning

Every design file edit MUST bump version in 3 places:
1. `<title>` tag
2. Banner / header area
3. `<h1>` heading

Use `date "+%y-%m-%d-%H%M"` for the version timestamp.

## Design File Location

Design files live in `docs/design/` as versioned HTML:

| File | Purpose |
|------|---------|
| `ci-reference.html` | CI Manual — colors, typography, logo, buttons |
| `page-templates.html` | Component library, section definitions |
| `visual-style.html` | Illustration system, photography, AI prompts |

## Image Generation

When generating illustrations:
- Maintain consistent style across all images
- Use the project's color palette
- Reference existing images for style continuity
- Save originals to the project's asset folder
