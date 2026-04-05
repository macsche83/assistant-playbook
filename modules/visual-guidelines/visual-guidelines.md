# Visual Communication Guidelines

> Research-backed rules for diagrams, flowcharts, and visual documentation.
> Apply when generating any visual docs (HTML, Mermaid, diagrams, dashboards).

## Cognitive Load — The Hard Limits

| Parameter | Limit | Why |
|-----------|-------|-----|
| Working memory chunks | 3-5 items | Cowan's research: true capacity is 3-4 without rehearsal |
| Nodes per diagram | 7-15 max | Below 7 feels trivial; above 15 comprehension drops sharply |
| Drill-down depth | 2 levels max | 3+ progressive disclosure levels = users get lost |
| Time to comprehend | Under 20 seconds | Users fixate 100-500ms per element, move on after 10-20s |
| Above-the-fold content | Gets 80% of attention | Put the most important visual first |

## Progressive Disclosure

**The 2-level rule:** Show a simple overview first (5-7 high-level nodes), then let users expand to see details (7-10 steps per expansion). Never require 3+ levels.

**Patterns:**
- **Accordions** — expand/collapse sections on demand
- **Tabs** — separate audience-specific views (business vs technical)
- **Click-to-expand nodes** — in flowcharts, clicking reveals sub-process
- **The mechanism for accessing more detail must be clearly visible**

## Color Rules

| Rule | Guideline |
|------|-----------|
| Distinct colors per diagram | 5-6 max (8 absolute ceiling) |
| Semantic colors | 2-3 for categories (blue=data, orange=failure, green=success) |
| Colorblind safety | Okabe-Ito palette; avoid red/green; blue is safest |
| Secondary cues | Never rely on color alone — pair with shape, icon, or label |
| Contrast ratio | 4.5:1 minimum (WCAG 2.1 AA) |
| Grayscale test | Diagram should be readable without color |

**Okabe-Ito palette (colorblind-safe):**

| Color | Hex | Use for |
|-------|-----|---------|
| Orange | `#E69F00` | Warnings, attention |
| Sky Blue | `#56B4E9` | Primary actions, data flow |
| Bluish Green | `#009E73` | Success, completion |
| Blue | `#0072B2` | Infrastructure, neutral |
| Vermillion | `#D55E00` | Errors, failures |
| Reddish Purple | `#CC79A7` | Special states |
| Black | `#000000` | Text, borders |

## Layout and Reading Patterns

| Pattern | When | Implication |
|---------|------|-------------|
| **F-pattern** | Text-heavy pages | Key info in first 2 headings + left margin |
| **Z-pattern** | Visual/sparse layouts | Title top-left, diagram center, takeaway bottom-right |
| Text-to-visual ratio | 60% text / 40% visual | By area in surrounding documentation |
| Line length | 50-75 characters | For text blocks alongside diagrams |

## Architecture Diagrams (C4 Model)

| Level | Audience | Elements | What to show |
|-------|----------|----------|-------------|
| **1 — Context** | Everyone | 5-7 boxes | System + users + external systems |
| **2 — Container** | Technical | 6-12 boxes | Apps, DBs, APIs |
| **3 — Component** | Developers | 6-12 boxes | Internal components of one container |
| **4 — Code** | Rarely | Skip unless asked | Class/function level |

**Hard ceiling:** 20 elements per diagram. Beyond this, split into multiple diagrams.

## Anti-Patterns

- **Wall of boxes** — 20+ nodes with crossing lines
- **Rainbow diagrams** — 8+ colors with no semantic meaning
- **Nested disclosures** — 3+ levels of expand/collapse
- **No labels** — relying on color or position alone
- **Monolithic diagrams** — one giant flowchart instead of focused ones
- **Jargon-only labels** — unreadable by the target audience
