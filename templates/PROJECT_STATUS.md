# PROJECT STATUS — {{PROJECT_NAME}}

> **This is the entry point.** Every AI agent, IDE tool, and human developer reads this file FIRST.

## Project

| Key | Value |
|-----|-------|
| Name | {{PROJECT_NAME}} |
| Repo | {{REPO_URL}} |
| Stack | {{TECH_STACK}} |
| Goal | {{ONE_LINE_GOAL}} |

## Status

| Key | Value |
|-----|-------|
| Phase | {{PHASE}} |
| Current Sprint | {{CURRENT_SPRINT}} |
| Last Updated | {{DATE}} |
| Active Branch | `main` |

## Next Up

<!-- Max 5 items. Pull from GitHub Issues. P0 first, then P1. -->

- [ ] #1 — {{Task title}} (P0)
- [ ] #2 — {{Task title}} (P0)
- [ ] #3 — {{Task title}} (P0)

## Changelog

<!-- Newest first. Max 20 entries. Archive older to docs/CHANGELOG_ARCHIVE.md -->
<!-- Format: [YYYY-MM-DD] CATEGORY — short description -->
<!-- Categories: SETUP | FEATURE | FIX | REFACTOR | DOCS | ORG | DEPLOY | CONFIG | CHORE | RETRO -->

- `[{{DATE}}] SETUP` — Project initialized
- `[{{DATE}}] DOCS` — PROJECT_STATUS.md created as project entry point

## Task Management

| What | Where |
|------|-------|
| All tasks | [GitHub Issues]({{REPO_URL}}/issues) |
| Filter by sprint | Label: `sprint:1` through `sprint:N` |
| Filter by priority | Label: `P0: must have`, `P1: should have`, `P2: nice to have` |
| Sprint progress | [Milestones]({{REPO_URL}}/milestones) |

## Directory Map

<!-- Update this as project structure evolves -->

```
app/                → {{description}}
components/         → {{description}}
lib/                → {{description}}
types/              → {{description}}
docs/               → {{description}}
public/             → {{description}}
```

## Key Files

| File | Purpose |
|------|---------|
| `PROJECT_STATUS.md` | **This file** — entry point, state, changelog, next actions |
| `.cursorrules` | AI coding conventions, patterns, code style |
| `docs/REQUIREMENTS.md` | Full technical specification |
| `.env.example` | Required environment variables template |

## Conventions

| Area | Convention |
|------|-----------|
| Branching | `feature/#issue-number-short-name` |
| Commits | Conventional: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `test:` |
| Components | {{component conventions}} |
| Styling | {{styling conventions}} |
| Types | {{type conventions}} |

## Tools & Integrations

| Tool | Purpose |
|------|---------|
| {{IDE}} | Primary IDE |
| {{AI_TOOL}} | AI coding assistant |
| {{CMS/DB}} | Data layer |
| {{HOSTING}} | Deployment |
| GitHub | Repo, Issues, Milestones, PRs |

---

## AI Agent Instructions

### On Session Start (READ)

1. Read this file FIRST before any other action
2. Check **Status** to understand current phase and sprint
3. Check **Next Up** for immediate priorities
4. Read `.cursorrules` (or equivalent) for code style and architecture patterns
5. Check GitHub Issues for full task details before starting work

### On Session End (UPDATE)

You MUST update this file at the end of every working session:
1. Add a changelog entry summarizing what was done
2. Update **Next Up** if tasks were completed or priorities shifted
3. Update **Status** if sprint or branch changed

### When to Update (TRIGGERS)

| Trigger | What to update |
|---------|---------------|
| Task completed / issue closed | Changelog + Next Up |
| New folders, configs, tools added | Changelog + Directory Map |
| Convention or workflow changed | Conventions section |
| Sprint advanced | Status + Next Up |
| Organizational change (labels, milestones, docs) | Changelog |

### How to Update the Changelog

- Add new entries at the **TOP** (newest first)
- Format: `[YYYY-MM-DD] CATEGORY` — short description
- Categories: `SETUP` `FEATURE` `FIX` `REFACTOR` `DOCS` `ORG` `DEPLOY` `CONFIG` `CHORE`
- One line per entry, keyword-style, no prose
- Reference issues: `closes #5`, `progress on #12`
- Max 20 entries visible — archive older entries to `docs/CHANGELOG_ARCHIVE.md`

### How to Update Next Up

- Pull from GitHub Issues — current sprint, P0 first, then P1
- Max 5 items — remove completed, add upcoming
- Format: `- [ ] #number — Title (priority)`
- When all sprint items done → advance to next sprint

### How to Update Status

- Change `Current Sprint` when milestone is completed
- Change `Last Updated` to today's date
- Change `Active Branch` to reflect current work

### Rules

- NEVER delete changelog entries (archive to `docs/CHANGELOG_ARCHIVE.md`)
- NEVER change the section order of this file
- NEVER add long descriptions — link to docs or issues instead
- NEVER add tasks to Next Up that don't exist in GitHub Issues
- ALWAYS keep this file under 200 lines

---

## Retro & Reflection (every 2 days)

When approximately 2 days have passed since the last retro, prompt the human for a brief reflection. Approach this as a **coach and mentor** — not a status report.

### Format

```
--- RETRO [YYYY-MM-DD] ---

Flow:    [keyword — e.g. smooth, stuck, scattered, focused]
Win:     [one thing that went well]
Friction:[one thing that slowed us down]
Next:    [one adjustment for the next 2 days]
Dao:     [a brief Taoist insight relevant to the current situation]

---
```

### Retro Principles

Blend Taoist philosophy with modern agile practice:

- **Wu Wei (effortless action):** Are we forcing something that should flow naturally? Is there a simpler path we're ignoring?
- **Pu (the uncarved block):** Are we over-engineering? The simplest working solution is the most beautiful.
- **Water finds its level:** Progress isn't always linear. Sometimes stepping back IS the way forward.
- **Sprint = breath:** Each sprint is an inhale (plan, build) and exhale (ship, reflect). Don't hold your breath.
- **Velocity is not speed:** Moving fast in the wrong direction is waste. Alignment before acceleration.
- **Small wins compound:** One task, one commit, one test. The river carves the canyon drop by drop.

### When to Prompt Retro

- Check `Last Retro` date below
- If >= 2 days have passed, gently prompt the human at a natural pause point
- Keep it light — 2 minutes max, not a ceremony
- Log the retro in the Changelog as: `[DATE] RETRO — [one-line summary]`

**Last Retro:** none yet
**Retro Cadence:** every 2 days

---

<!-- FILE GOVERNANCE: This file must stay under 200 lines. If approaching limit, archive changelog entries. -->
