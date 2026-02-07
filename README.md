# Assistant Playbook

Boilerplate templates and conventions for AI-assisted software development. Drop these into any project so that LLMs, IDE tools, and human developers share the same operating system.

## What's Inside

```
templates/
├── PROJECT_STATUS.md    → Project entry point (state, changelog, AI instructions)
└── RETRO_GUIDE.md       → Lightweight retro format (Taoism + Agile)
```

## Quick Start

1. Copy `templates/PROJECT_STATUS.md` into your project root
2. Replace all `{{PLACEHOLDERS}}` with your project details
3. Point your `.cursorrules` / AI config to read it first
4. Update it at the end of every working session

## Templates

### PROJECT_STATUS.md

The **single source of truth** for project state. Any AI agent, IDE, or developer reads this first.

**Sections:**
- **Project** — name, repo, stack, goal (one-liners)
- **Status** — current phase, sprint, date, branch
- **Next Up** — top 5 tasks from GitHub Issues
- **Changelog** — keyword-style log, newest first
- **Task Management** — links to issues, filters, milestones
- **Directory Map** — folder purposes at a glance
- **Key Files** — reference table
- **Conventions** — branching, commits, components, styling
- **Tools** — what's used and for what
- **AI Agent Instructions** — read/update rules with triggers and formats
- **Retro & Reflection** — coaching cadence with Taoist principles

**AI Instructions include:**
- When to read (session start)
- When to update (triggers: task done, sprint change, org change, session end)
- How to update (changelog format, next-up format, status format)
- What never to do (delete history, change order, add prose)

### RETRO_GUIDE.md

A **2-minute retrospective** format for solo devs and AI-assisted teams.

**Format:**
```
Flow:     [keyword — smooth, stuck, scattered, focused]
Win:      [one thing that went well]
Friction: [one thing that slowed us down]
Next:     [one adjustment]
Dao:      [a Taoist insight for the moment]
```

**Principles covered:**
- Wu Wei (effortless action)
- Pu (the uncarved block / simplicity)
- Water (adaptive persistence)
- Te (virtue through action)
- Ziran (naturalness)
- Wuji (the value of rest)

## Philosophy

> "A journey of a thousand commits begins with a single `git add`."

This playbook blends:
- **Taoist principles** — simplicity, flow, natural rhythm
- **Agile practice** — sprints, retros, iterative delivery
- **AI-native workflow** — structured files that LLMs can parse, follow, and maintain

The goal: stay aligned, ship often, reflect briefly, keep it simple.

## Usage with AI Tools

| Tool | How to integrate |
|------|-----------------|
| **Claude Code** | Add to CLAUDE.md or memory: "Read PROJECT_STATUS.md first" |
| **Cursor** | Add to `.cursorrules`: "Read PROJECT_STATUS.md before starting work" |
| **ChatGPT/Other** | Paste PROJECT_STATUS.md as context at session start |
| **GitHub Copilot** | Reference in repo instructions |

## License

MIT — use freely, adapt to your workflow.
