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
<!-- Categories: SETUP | FEATURE | FIX | REFACTOR | DOCS | ORG | DEPLOY | CONFIG | CHORE | RETRO | LAUNCH | TEST -->

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
docs/design/        → CI reference, page templates, brand assets
public/             → {{description}}
scripts/            → Test scripts, migration scripts, utilities
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
| Testing | Smoke tests before deploy, test instructions in ticket DoDs |

## Tools & Integrations

| Tool | Purpose |
|------|---------|
| {{IDE}} | Primary IDE |
| {{AI_TOOL}} | AI coding assistant |
| {{CMS/DB}} | Data layer |
| {{HOSTING}} | Deployment |
| GitHub | Repo, Issues, Milestones, PRs |

## Production

<!-- Fill in once deployed. Remove this section if not yet live. -->

| Key | Value |
|-----|-------|
| Primary URL | `https://{{DOMAIN}}` |
| Admin | `https://{{DOMAIN}}/admin` — password in `ADMIN_SECRET` env var |
| Hosting | {{HOSTING_PROVIDER}} |
| DNS Registrar | {{REGISTRAR}} |

### Prerequisites

```bash
node -v                    # Node.js 18+ required
npm install                # install dependencies
{{DEPLOY_CLI}} login       # authenticate deploy CLI (one-time)
gh auth login              # authenticate GitHub CLI (one-time)
```

### Environment Variables

Copy `.env.example` → `.env.local` and fill in real values:

| Variable | Source |
|----------|--------|
| `{{VAR_1}}` | {{where to find it}} |
| `{{VAR_2}}` | {{where to find it}} |

### Deploy

```bash
npm run dev                # local development
{{DEPLOY_COMMAND}}         # deploy to production
```

### Smoke Tests

```bash
{{TEST_COMMAND_1}}         # {{description}} (N assertions)
{{TEST_COMMAND_2}}         # {{description}} (N assertions)
```

---

## AI Agent Instructions

### On Session Start (READ)

1. Read this file FIRST before any other action
2. Check **Status** to understand current phase and sprint
3. Check **Next Up** for immediate priorities
4. Read `.cursorrules` (or equivalent) for code style and architecture patterns
5. Check GitHub Issues for full task details before starting work

### Feature Workflow — Ticket → Wireframe → Approve → Build → Test

**Every new feature follows this sequence. No step may be skipped.**

#### Step 1: Ticket First
- Create a GitHub Issue with title, description, and DoD **before any implementation**
- The ticket is the scope contract — if it's not in the ticket, it doesn't get built
- Tickets are planning tools, not after-the-fact documentation

#### Step 2: Wireframe / Design First
- For UI features: update the wireframe or design file before writing any code
- **The LLM must STOP after updating the wireframe and explicitly ask: "Wireframe updated — please review and confirm before I implement"**
- If the LLM starts implementing without approval, the human should stop it immediately

#### Step 3: Human Approves
- The human reviews the wireframe/design in the browser and gives explicit approval
- No implicit approval — silence is not consent

#### Step 4: Implement
- Build exactly what was approved
- Screenshot each section and compare against the wireframe

#### Step 5: Test
- Add smoke test assertions for the new feature (see Test-With-Feature Rule)
- Run all test scripts → all green → ready to deploy

**Exempt:** bug fixes, copy tweaks, and non-visual backend changes (no wireframe needed, but still need a ticket).

### Test-With-Feature Rule

**Every new feature must include a smoke test that can be run before production.**

- When creating a feature, add matching assertions to the relevant test script
- The DoD for any feature ticket MUST include a `## Test Instructions` section
- Before deploying: run all test scripts → all green → deploy
- Test scripts are cumulative — never remove passing tests, only add

### Design File Versioning

Every edit to design/wireframe files MUST:
1. Bump version in 3 places (`<title>`, banner, `<h1>`) — run `date "+%y-%m-%d-%H%M"` for real time
2. Sync root review file for browser preview
3. If a style change: update BOTH design files + implementation CSS to stay in sync

### Issue Lifecycle Rules

- **Scope growth during review:** If new work emerges, create a child ticket (`[X.Y.Z]` numbering) with its own DoD. Add a comment to the parent linking to the child.
- **Design tickets** stay open with `status:reviewing` until the human explicitly approves. AI never closes design tickets unilaterally.
- **Labels:** `status:reviewing` = awaiting human review. Remove label when approved.
- **DoD updates:** If the Definition of Done evolves, update the issue body AND add a comment explaining the change.

### On Session End (UPDATE)

You MUST update at the end of every working session:
1. Update **GitHub Issues** first (comments, close if done)
2. Add a changelog entry to this file
3. Update **Next Up** if tasks were completed
4. Update **Status** if sprint or branch changed

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
- Categories: `SETUP` `FEATURE` `FIX` `REFACTOR` `DOCS` `ORG` `DEPLOY` `CONFIG` `CHORE` `LAUNCH` `TEST` `RETRO`
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
- ALWAYS keep this file concise

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
Dao:     [a brief Taoist insight + plain-language explanation of what it means]

---
```

### Sprint Velocity Review (after each sprint)

Track actual time vs estimates to improve future planning:
```
Sprint N: Xh estimated → Yh actual (Z%)
Pattern: [what type of tasks take longer/shorter than expected]
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

## Dao Master — Work-Life Balance

The AI acts as a gentle Dao Master, supporting sustainable pace:

### Break Reminders
- Every ~90 minutes of focused work, gently suggest a short break
- Keep it light: one line, Taoist tone
- **Always explain the wisdom** — a brief plain-language note on what it means and how it relates to the current work

### Daily Wrap-Up Prompts
- **~11:30** — Midday wind-down: summarize morning progress, note what's next after lunch
- **~17:00** — End-of-day wrap-up: summarize the day, update issues/changelog, note exactly where to pick up tomorrow
- Format: short bullet list — what was done, what's next, any blockers
- Goal: human returns with fresh motivation and zero ramp-up time

### Principles
- Sustainable pace > heroic sprints. Rest is not waste — it is preparation.
- *"The bow that is always bent will break."*
