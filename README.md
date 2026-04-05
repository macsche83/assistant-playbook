# Assistant Playbook

Templates and conventions for AI-assisted development. Drop these into any new project so that Claude Code (or any LLM agent) and the human developer share the same operating system from day one.

> *"A journey of a thousand commits begins with a single `git add`."*

## Philosophy

This playbook blends:
- **Taoist principles** — simplicity, flow, natural rhythm, sustainable pace
- **Agile practice** — sprints, retros, iterative delivery
- **AI-native workflow** — structured files that LLMs can parse, follow, and maintain

The goal: stay aligned, ship often, reflect briefly, keep it simple.

## How It Works

### 1. Pick an archetype

Your project type determines which instruction files you need:

| Archetype | For | Depth Files |
|-----------|-----|-------------|
| **Product** | UI, web, apps with sprints | `PROJECT_STATUS.md` + `CURRENT_SPRINT.md` + `SKILL.md` |
| **System** | Scripts, automation, data pipelines | `INSTRUCTIONS.md` + `config.js` |
| **Process** | Recurring tasks, no code product | `WORKFLOW.md` + `SKILLS.md` |

### 2. Copy core + archetype files

Every project gets:
- `CLAUDE.md` — AI agent entry point (from `core/`)
- `RETRO.md` — retro log
- `RETRO_GUIDE.md` — retro format with Taoist principles
- `DAO_MASTER.md` — work-life coaching
- `memory/` — portable AI memory with starter files

Plus the archetype-specific depth files.

### 3. Add optional modules

Pick what fits:

| Module | When |
|--------|------|
| `design-review` | Project has UI — adds wireframe-first gate |
| `visual-guidelines` | Creating diagrams or visual docs |
| `credentials` | Project needs API keys or secrets |
| `database` | Project has a database connection |
| `setup` | Project may migrate to new machines |
| `ai-audit-trail` | System uses LLM classification |
| `testing` | System needs E2E test protocol |

### 4. Pick a task tracker workflow

| Tracker | File |
|---------|------|
| Notion | `workflows/notion/notion-workflow.md` |
| GitHub Issues | `workflows/github-issues/github-issues-workflow.md` |
| Jira | `workflows/jira/jira-workflow.md` |

### 5. Fill in placeholders

Replace all `{{PLACEHOLDERS}}` with your project details.

## Repo Structure

```
assistant-playbook/
├── core/                    # Universal (every project)
│   ├── CLAUDE.md.template
│   ├── RETRO.md.template
│   ├── RETRO_GUIDE.md
│   ├── DAO_MASTER.md
│   ├── MEMORY.md.template
│   ├── memory/              # Starter memory files
│   └── gitignore.template
│
├── archetypes/              # Pick one
│   ├── product/             # UI/web/app
│   ├── system/              # Scripts/automation
│   └── process/             # Recurring tasks
│
├── modules/                 # Pick what fits
│   ├── design-review/
│   ├── visual-guidelines/
│   ├── credentials/
│   ├── database/
│   ├── setup/
│   ├── ai-audit-trail/
│   └── testing/
│
├── workflows/               # Pick one
│   ├── notion/
│   ├── github-issues/
│   └── jira/
│
├── skills/                  # Skill file templates
│   ├── README.md
│   └── examples/
│
└── reference/               # Knowledge base
    ├── patterns.md          # What worked across 6 projects
    ├── anti-patterns.md     # What didn't work
    └── changelog.md
```

## Universal Rules (Every Project)

1. **95% confidence → ask first** — no silent assumptions
2. **Session start: read entry point** — always read CLAUDE.md first
3. **Session end: update status** — always update state files
4. **Conventional commits** — `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `test:`
5. **T-shirt estimates** — XS/S/M/L calibrated to AI-assisted speed
6. **Retros** — regular reflection, Taoist + Agile format
7. **In-repo memory** — `./memory/` for portability

## Coming Next

**INSTALL.md** — a guided installation wizard where the LLM interviews you about your project and generates the full scaffolding automatically. (Phase 2)
