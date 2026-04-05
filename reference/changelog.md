# Playbook Changelog

## [2.0.0] — 2026-04-05

### Added
- **3 archetypes** — Product (UI/web), System (scripts/automation), Process (recurring tasks)
- **Core templates** — CLAUDE.md, RETRO.md, RETRO_GUIDE.md, DAO_MASTER.md, MEMORY.md, memory starters, gitignore
- **Archetype templates** — Product (PROJECT_STATUS, CURRENT_SPRINT, SKILL), System (INSTRUCTIONS, config.js), Process (WORKFLOW, SKILLS)
- **7 optional modules** — design-review, visual-guidelines, credentials, database, setup, ai-audit-trail, testing
- **3 workflow integrations** — Notion, GitHub Issues, Jira
- **Skills section** — README + examples (frontend-design, api-patterns)
- **Reference docs** — patterns.md (what worked), anti-patterns.md (what didn't)
- **In-repo memory** as default — portable across machines
- **INSTALL.md** — guided installation wizard (14 interview questions → file generation → verification)

### Changed
- Restructured from flat `templates/` to organized `core/`, `archetypes/`, `modules/`, `workflows/`, `skills/`, `reference/`
- Taoist philosophy elevated from optional to **core identity** (RETRO_GUIDE.md, DAO_MASTER.md)
- Task tracker made **tool-agnostic** (Notion, GitHub Issues, Jira as equal options)

### Removed
- Old `templates/` directory (content redistributed to new structure)

## [1.0.0] — 2026-02-27

### Added
- Initial release with 3 templates: PROJECT_STATUS.md, CURRENT_SPRINT.md, RETRO_GUIDE.md
- README with usage instructions
