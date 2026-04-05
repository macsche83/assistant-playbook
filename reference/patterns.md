# Patterns — What Worked

Proven patterns extracted from 6 projects: lead-management, abuero-website, fishnet, client-onboarding, nebenkostenverrechnen, analytics.

---

## Instruction Architecture

### Layered Entry Point
**CLAUDE.md as thin entry point → depth file for details.**

CLAUDE.md should be scannable in 30 seconds. It contains: session start checklist, key files table, collaboration rules, code rules. All deep context (architecture, data model, procedures) goes in the depth file.

**Source:** All 6 repos use this pattern. Lead-management and analytics point to INSTRUCTIONS.md; abuero and fishnet point to PROJECT_STATUS.md; nebenkostenverrechnen points to WORKFLOW.md + SKILLS.md.

### Archetype-Specific Depth Files
Different project types need different depth files:
- **Product** (UI/web) → PROJECT_STATUS.md + CURRENT_SPRINT.md — tracks sprints, changelog, next up
- **System** (scripts/automation) → INSTRUCTIONS.md — architecture, data model, operations guide
- **Process** (recurring tasks) → WORKFLOW.md + SKILLS.md — step-by-step procedures with API code

---

## Memory

### In-Repo Memory
Store memory in `./memory/` inside the repo, not in `~/.claude/`. This makes it portable across machines (scp, git clone) and version-controlled.

**Source:** lead-management, abuero-website.

### Memory Frontmatter
Every memory file uses frontmatter: `name`, `description`, `type` (user/feedback/project/reference). The description is what determines relevance in future sessions — make it specific.

### MEMORY.md as Index
One-line entries, under 150 chars each, linking to individual files. The index is always loaded; individual files are read on demand.

---

## Collaboration

### 95% Confidence Rule
If confidence is >=95%, ask one confirming question before implementing. No silent assumptions. This prevents going down the wrong path entirely.

**Source:** lead-management feedback, after wasted implementation from silent assumptions.

### In Review Gate
After completing a task, set status to "In Review" — not "Completed". The human reviews before closing. This catches silent errors.

**Source:** lead-management feedback.

### T-Shirt Size Calibration
AI-assisted t-shirt sizes are significantly faster than human estimates. XS=<15min, S=15-45min, M=45min-2h, L=2-4h. Always reference comparable completed tasks.

**Source:** lead-management, after estimates were consistently off because they were calibrated to human speed.

---

## Workflows

### Notion as Task Tracker
Full lifecycle with timestamps: create ticket → link to project → set Start at (real time) → work → set Done at → calculate Working [min] → In Review. Commit messages include Notion Task ID.

**Source:** lead-management, abuero-website, client-onboarding.

### Retro System
Every N days or N tasks completed. Format: Flow/Win/Friction/Next/Dao. Quick + dirty, 2 minutes max. Log to RETRO.md, track cadence in memory/retro.md.

**Source:** lead-management (3d/5tasks), assistant-playbook (2d).

### Design Review Gate
For UI projects: update design file → present for review → WAIT for explicit "go" → implement. Silence is not consent. Version-bump design files in 3 places.

**Source:** abuero-website.

### Dry-Run First
Any script with side effects must support `--dry-run`. Always run dry-run before real execution.

**Source:** lead-management, nebenkostenverrechnen.

---

## Code

### Centralized Config
All magic numbers, schedules, thresholds in one `config.js` file. No values scattered across scripts.

**Source:** lead-management — consolidated from hardcoded values across multiple scripts.

### Structured Logging
Shared logger module with source tags. Never raw console.log. Daily log files with auto-cleanup. AI interactions logged as three entries: ai-classify, ai-result, ai-decision.

**Source:** lead-management.

### In-Repo Credentials
`credentials/.env` inside the repo (gitignored). `.env.example` committed as template. Makes the folder self-contained for scp migrations.

**Source:** lead-management.

---

## Skills

### SKILL.md vs SKILLS.md
- `SKILL.md` (singular) = service connections & access details (accounts, URLs, CLI paths)
- `SKILLS.md` (plural) = API code patterns with gotchas (working code + lessons learned)

**Source:** abuero uses SKILL.md; nebenkostenverrechnen uses SKILLS.md. Different content, both useful.

### .claude/skills/ Directory
Reusable prompt-based capabilities that the LLM reads when a matching topic comes up. Good for: design systems, image generation workflows, domain-specific rules.

**Source:** abuero-website.

### Gotcha Documentation
When an API has non-obvious behavior, document it as a "Gotcha" with specific, actionable warnings. These save hours of debugging.

**Source:** nebenkostenverrechnen SKILLS.md — multiple gotchas about attachment IDs, download paths, tesseract limitations.
