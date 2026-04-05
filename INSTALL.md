# Installation Wizard — Assistant Playbook

> **For the LLM:** Read this file top to bottom. Follow each step in order. Ask the user the interview questions, then generate the project scaffolding based on their answers.
>
> **For the human:** Run this in Claude Code from your new project directory. The LLM will interview you and generate all the files.

---

## How to Run

```bash
cd /path/to/your-new-project
# Then tell Claude Code:
# "Read /path/to/assistant-playbook/INSTALL.md and set up this project"
```

---

## Step 1: Interview — Project Basics

Ask the user these questions. Record answers as variables for later use.

### Q1: Project Identity

Ask:
> "Let's set up your project. I need a few basics:
> 1. **Project name** — what do you call this project?
> 2. **Repo URL** — where does it live? (or 'not yet' if no repo)
> 3. **One-line goal** — what does this project do, in one sentence?
> 4. **Your name** — who am I working with?"

Record as: `PROJECT_NAME`, `REPO_URL`, `ONE_LINE_GOAL`, `USER_NAME`

### Q2: Project Type (Archetype)

Ask:
> "What type of project is this?
> 1. **Product** — a UI, website, or app with sprints and releases (e.g. Next.js site, mobile app, SaaS)
> 2. **System** — scripts, automation, or data pipelines that run on a schedule (e.g. email campaigns, ETL, monitoring)
> 3. **Process** — recurring tasks with no code product (e.g. annual billing, audit procedures, manual workflows with API helpers)"

Record as: `ARCHETYPE` (product | system | process)

### Q3: Tech Stack

Ask:
> "What's the tech stack? (e.g. 'Node.js, SQLite, Gmail API' or 'Next.js, TypeScript, Tailwind, Vercel')"

Record as: `TECH_STACK`

---

## Step 2: Interview — Tools & Integrations

### Q4: Task Tracker

Ask:
> "Which task tracker do you use?
> 1. **Notion** — tasks in a Notion database
> 2. **GitHub Issues** — tasks as GitHub issues with milestones
> 3. **Jira** — Atlassian Jira via MCP or API
> 4. **None yet** — skip for now, add later"

Record as: `TASK_TRACKER` (notion | github | jira | none)

Then **connect and auto-discover** based on the choice:

---

#### If Notion: Connect & Auto-Discover

**Step A — Authenticate.** Check if Notion MCP is already connected:
- Try calling `mcp__notion__*` tools. If they work, skip to Step B.
- If not connected, tell the user:
  > "Notion isn't connected yet. Let me set it up. I'll authenticate via MCP now."
  Then call `mcp__notion__authenticate` and follow the OAuth flow.

**Step B — Find the project.** Search Notion for the project:
- Search databases for a Tasks or Projects database
- Ask the user:
  > "I found these databases in your Notion workspace: [list]. Which one is your Tasks database? And which is your Projects database (if any)?"
- Or if the user mentions a project name, search for it directly

**Step C — Auto-fill variables.** From Notion, pull:
- `NOTION_TASKS_DB` — Tasks database ID
- `NOTION_PROJECTS_DB` — Projects database ID
- `NOTION_PROJECT_ID` — The current project page ID
- `NOTION_USER_ID` — The user's Notion person ID (from workspace members or page creators)
- Status options, property names, existing ticket structure
- Any existing documentation pages linked to the project

**Step D — Confirm.** Present what was found:
> "Here's what I pulled from Notion:
> - Tasks DB: `{{ID}}` ({{name}})
> - Projects DB: `{{ID}}` ({{name}})
> - Your user ID: `{{ID}}` ({{name}})
> - Project: `{{ID}}` ({{name}})
> - Status flow: {{statuses}}
>
> Look right?"

Record as: `NOTION_TASKS_DB`, `NOTION_PROJECTS_DB`, `NOTION_USER_ID`, `NOTION_PROJECT_ID`, `NOTION_STATUS_FLOW`, `NOTION_DOC_PAGES`

---

#### If GitHub Issues: Connect & Auto-Discover

**Step A — Check auth.** Run `gh auth status` to verify GitHub CLI is authenticated.
- If not: tell the user to run `! gh auth login` in the prompt.

**Step B — Auto-fill from repo.** If `REPO_URL` was provided:
- Pull repo metadata: `gh repo view --json name,url,description`
- List existing milestones: `gh api repos/OWNER/REPO/milestones`
- List existing labels: `gh api repos/OWNER/REPO/labels`
- Check if priority labels exist (P0, P1, P2) — offer to create them if not

**Step C — Confirm.** Present what was found:
> "GitHub repo: {{name}} — {{description}}
> Milestones: {{list or 'none yet'}}
> Labels: {{list}}
> Missing priority labels: {{list}} — want me to create them?"

---

#### If Jira: Connect & Auto-Discover

**Step A — Check MCP.** Check if Jira MCP server is configured in `~/.claude/claude_desktop_config.json`.
- If configured, try listing projects.
- If not configured, ask:
  > "I need your Jira details to set up the MCP connection:
  > 1. Jira URL (e.g. `https://myorg.atlassian.net`)
  > 2. Username (email)
  > 3. API token (from https://id.atlassian.com/manage-profile/security/api-tokens)"
  
  Then write the MCP config to `~/.claude/claude_desktop_config.json`.

**Step B — Auto-fill from Jira.** Once connected:
- List available projects
- Ask user which project to use
- Pull project key, board, status flow
- Pull user's account ID

**Step C — Confirm.** Present what was found:
> "Jira project: {{KEY}} — {{name}}
> Status flow: {{statuses}}
> Your account: {{displayName}}"

Record as: `JIRA_URL`, `JIRA_PROJECT_KEY`, `JIRA_STATUS_FLOW`

---

### Q5: External Services

Ask:
> "What other external services does this project use? List any APIs, databases, hosting, CLIs.
> (e.g. 'Gmail API, Claude API, SQLite, HubSpot' or 'Vercel, Google Workspace CLI')"

Record as: `SERVICES` (list)

**For each service mentioned, check if it's already accessible:**
- **Claude API** → check if `ANTHROPIC_API_KEY` exists in env or `credentials/.env`
- **Google Workspace** → check if `gws` CLI exists: `which gws` or `which ~/.npm-global/bin/gws`
- **Gmail API** → check for `mcp__claude_ai_Gmail__authenticate` or existing OAuth tokens
- **Google Calendar** → check for `mcp__claude_ai_Google_Calendar__authenticate`
- **Vercel** → check `which vercel` and `vercel whoami`
- **HubSpot** → check for `HUBSPOT_TOKEN` in env

Report what's already connected vs what needs setup:
> "Here's what I found:
> - Claude API: connected (key in env)
> - Google Workspace CLI: found at ~/.npm-global/bin/gws
> - HubSpot: not connected — will need HUBSPOT_TOKEN
>
> I'll add the missing ones to credentials/.env.example."

### Q6: Credentials

Based on Q4 + Q5 auto-discovery, compile the full list of needed credentials.

Ask:
> "Based on your tools, here are the credentials this project needs:
> {{AUTO_DISCOVERED_LIST}}
>
> Any others I should add? Or is this complete?"

Record as: `HAS_CREDENTIALS` (true | false), `ENV_VARS` (list)

If any credentials are needed:
- Create `credentials/.env.example` with all vars
- **Copy existing values** from other projects' `credentials/.env` where they're shared (e.g. `ANTHROPIC_API_KEY`, `NOTION_API_KEY` are typically the same across projects)
- Tell the user:
  > "I've created `credentials/.env.example`. I also found matching keys in your other projects — want me to copy them to `credentials/.env` so you're ready to go?"

---

## Step 3: Interview — Workflows & Habits

### Q7: Language

Ask:
> "What language should the AI use in generated content (emails, docs, UI text)?
> And any language rules? (e.g. 'German, formal Sie' or 'English, casual' or 'Swiss German for emails, English for code')"

Record as: `LANGUAGE_RULE`

### Q8: Review Gate

Ask:
> "After I complete a task, should I set it to 'In Review' for you to check before closing? Or can I mark it as done directly?
> 1. **In Review gate** — you review before closing (recommended for production systems)
> 2. **Direct close** — I mark done, you trust the output"

Record as: `HAS_REVIEW_GATE` (true | false)

### Q9: Design Review (Product archetype only)

**Only ask if ARCHETYPE = product:**

> "Does this project have UI/visual components that need design approval before implementation?
> 1. **Yes** — I'll add a design review gate (wireframe-first workflow)
> 2. **No** — no visual design process needed"

Record as: `HAS_DESIGN_REVIEW` (true | false)

### Q10: Retro Cadence

Ask:
> "How often should we do a quick retro? Default is every 2 days or 5 tasks completed, whichever comes first.
> Options:
> 1. **Default** (2 days / 5 tasks)
> 2. **Lighter** (3 days / 5 tasks)
> 3. **Custom** — tell me your preference"

Record as: `RETRO_CADENCE`

### Q11: Scripts & Automation (System/Process archetypes)

**Only ask if ARCHETYPE = system or process:**

> "Does this project have scripts that run automatically (cron jobs, scheduled tasks)?
> 1. **Yes** — I'll enforce dry-run-first and add cron setup
> 2. **No** — no automated scripts"

Record as: `HAS_SCRIPTS` (true | false)

### Q12: Database

Ask:
> "Does this project have a database?
> 1. **SQLite** (local file)
> 2. **PostgreSQL / MySQL** (remote, needs connection docs)
> 3. **No database**"

Record as: `HAS_DATABASE` (none | sqlite | remote)

### Q13: Modules

Ask:
> "Which optional modules should I include? (pick all that apply)
> 1. **Visual guidelines** — rules for diagrams, flowcharts, visual docs
> 2. **AI audit trail** — structured logging for LLM classification decisions
> 3. **E2E testing protocol** — test procedure template
> 4. **Machine setup** — new machine setup checklist
> 5. **None of these**"

Record as: `MODULES` (list)

---

## Step 4: Interview — User Profile

### Q14: About You

Ask:
> "Last one — tell me a bit about yourself so I can tailor my work:
> 1. **Role** — what do you do? (e.g. 'founder', 'senior engineer', 'product manager', 'student')
> 2. **Expertise** — what are you strong at? What's new to you?
> 3. **Working style** — any preferences? (e.g. 'terse responses', 'explain your reasoning', 'I like to pair-program')"

Record as: `USER_ROLE`, `USER_EXPERTISE`, `WORKING_STYLE`

---

## Step 5: Confirm Before Generating

Present a summary to the user:

> "Here's what I'll set up for **{{PROJECT_NAME}}**:
>
> **Archetype:** {{ARCHETYPE}}
> **Stack:** {{TECH_STACK}}
> **Task tracker:** {{TASK_TRACKER}}
> **Credentials:** {{HAS_CREDENTIALS}}
> **Review gate:** {{HAS_REVIEW_GATE}}
> **Design review:** {{HAS_DESIGN_REVIEW}}
> **Retro cadence:** {{RETRO_CADENCE}}
> **Modules:** {{MODULES}}
>
> **Files I'll create:**
> - `CLAUDE.md` — AI entry point
> - `{{DEPTH_FILES}}` — archetype depth files
> - `RETRO.md` + `RETRO_GUIDE.md` + `DAO_MASTER.md` — retro & coaching
> - `memory/` — MEMORY.md + 4 starter files
> - `.gitignore` additions
> - {{CONDITIONAL_FILES}}
>
> Ready to generate? Or want to change anything?"

**Wait for explicit confirmation before proceeding.**

---

## Step 6: Generate Files

Once confirmed, create all files. Use the templates from the playbook, replacing all `{{PLACEHOLDERS}}` with the interview answers.

### 6.1: Core Files (always)

Create these in the project root:

1. **`CLAUDE.md`** — from `core/CLAUDE.md.template`
   - Remove all `{{#SECTION}}...{{/SECTION}}` blocks that don't apply to this archetype
   - Fill all `{{PLACEHOLDERS}}`
   - Set `{{DEPTH_FILE}}` based on archetype:
     - Product → `PROJECT_STATUS.md`
     - System → `INSTRUCTIONS.md`
     - Process → `WORKFLOW.md`

2. **`RETRO.md`** — from `core/RETRO.md.template`
   - Fill `{{PROJECT_NAME}}` and `{{RETRO_CADENCE}}`

3. **`RETRO_GUIDE.md`** — copy `core/RETRO_GUIDE.md` as-is
   - Replace `{{RETRO_CADENCE}}` with the chosen cadence

4. **`DAO_MASTER.md`** — copy `core/DAO_MASTER.md` as-is

5. **`memory/MEMORY.md`** — from `core/MEMORY.md.template`

6. **`memory/user_profile.md`** — from `core/memory/user_profile.md.template`
   - Fill with Q14 answers

7. **`memory/project_context.md`** — from `core/memory/project_context.md.template`
   - Fill with Q1 answers

8. **`memory/retro.md`** — from `core/memory/retro.md.template`
   - Fill `{{RETRO_CADENCE}}`

9. **`memory/reference_services.md`** — from `core/memory/reference_services.md.template`
   - Fill with Q5 answers (external services)

10. **`.gitignore`** — append contents of `core/gitignore.template` to existing .gitignore (or create if none)

### 6.2: Archetype Files

**If Product:**
- `PROJECT_STATUS.md` — from `archetypes/product/PROJECT_STATUS.md.template`
- `CURRENT_SPRINT.md` — from `archetypes/product/CURRENT_SPRINT.md.template`
- `SKILL.md` — from `archetypes/product/SKILL.md.template`

**If System:**
- `INSTRUCTIONS.md` — from `archetypes/system/INSTRUCTIONS.md.template`
- `config.js` — from `archetypes/system/config.template.js` (only if Node.js project)

**If Process:**
- `WORKFLOW.md` — from `archetypes/process/WORKFLOW.md.template`
- `SKILLS.md` — from `archetypes/process/SKILLS.md.template`

### 6.3: Task Tracker Workflow

**If Notion:**
- Copy the content from `workflows/notion/notion-workflow.md` into the **Task Management** section of CLAUDE.md
- Fill all Notion IDs from the auto-discovery in Q4 (Tasks DB, Projects DB, User ID, Project ID)
- Fill status flow with the actual statuses discovered from the database
- Fill documentation page IDs if any were found

**If GitHub Issues:**
- Copy the content from `workflows/github-issues/github-issues-workflow.md` into the **Task Management** section of CLAUDE.md
- Fill repo URL from Q1
- Create missing priority labels if user approved in Q4

**If Jira:**
- Copy the content from `workflows/jira/jira-workflow.md` into the **Task Management** section of CLAUDE.md
- Fill Jira URL, project key, and status flow from auto-discovery in Q4

### 6.4: Credentials (if HAS_CREDENTIALS)

- Create `credentials/.env.example` with all env vars from Q6 (auto-discovered + manual)
- Create `credentials/.env` with any values that were found in other project credentials
- Ensure `.gitignore` includes `credentials/.env`
- Add credential section to CLAUDE.md key files table
- Tell the user which values were copied and which still need to be filled in

### 6.5: Database (if HAS_DATABASE != none)

**If SQLite:**
- Add database section to INSTRUCTIONS.md / WORKFLOW.md with SQLite path
- Add `state/*.db` to .gitignore

**If Remote:**
- Create `DATABASE_CONNECTION.md` from `modules/database/DATABASE_CONNECTION.md.template`
- Add to CLAUDE.md key files table

### 6.6: Optional Modules

**If HAS_DESIGN_REVIEW:**
- Add design review section to CLAUDE.md (from `modules/design-review/design-review.md`)

**If 'visual-guidelines' in MODULES:**
- Copy `modules/visual-guidelines/visual-guidelines.md` to project root or `docs/`

**If 'ai-audit-trail' in MODULES:**
- Add AI audit trail rules to CLAUDE.md code rules section

**If 'testing' in MODULES:**
- Create `E2E_TESTING.md` from `modules/testing/E2E_TESTING.md.template`

**If 'setup' in MODULES:**
- Create `SETUP.md` from `modules/setup/SETUP.md.template`

**If HAS_SCRIPTS:**
- Add dry-run-first rule to CLAUDE.md code rules

---

## Step 7: Post-Install Verification

After generating all files, verify:

1. **Read CLAUDE.md** — confirm it reads cleanly, no leftover `{{PLACEHOLDERS}}` or `{{#SECTION}}` blocks
2. **Check cross-references** — every file mentioned in CLAUDE.md key files table actually exists
3. **Check memory/** — MEMORY.md index matches the files that exist
4. **Check .gitignore** — credentials and state files are excluded
5. **No secrets** — confirm no real API keys or passwords were written to any file

Present to the user:

> "Setup complete. Here's what was created:
>
> {{LIST_ALL_CREATED_FILES}}
>
> **Next steps:**
> 1. Fill in any remaining `{{PLACEHOLDERS}}` in the depth file ({{DEPTH_FILE}})
> 2. {{IF_CREDENTIALS}} Copy `credentials/.env.example` to `credentials/.env` and add your real keys
> 3. Read through CLAUDE.md to make sure it matches how you want to work
> 4. Start your first task — the system is ready."

---

## Quick Reference: Variable Mapping

### From Interview

| Variable | Source | Used In |
|----------|--------|---------|
| `PROJECT_NAME` | Q1 | CLAUDE.md, PROJECT_STATUS.md, RETRO.md, memory files |
| `REPO_URL` | Q1 | CLAUDE.md, PROJECT_STATUS.md, SKILL.md |
| `ONE_LINE_GOAL` | Q1 | CLAUDE.md, PROJECT_STATUS.md, project_context.md |
| `USER_NAME` | Q1 | CLAUDE.md (review gate, design review) |
| `ARCHETYPE` | Q2 | Determines which archetype files to copy |
| `TECH_STACK` | Q3 | CLAUDE.md, PROJECT_STATUS.md |
| `TASK_TRACKER` | Q4 | Determines which workflow to embed |
| `SERVICES` | Q5 | reference_services.md, SKILL.md / SKILLS.md |
| `HAS_CREDENTIALS` | Q6 | Credentials setup, .gitignore |
| `ENV_VARS` | Q6 | credentials/.env.example, credentials/.env |
| `LANGUAGE_RULE` | Q7 | CLAUDE.md code rules |
| `HAS_REVIEW_GATE` | Q8 | CLAUDE.md collaboration rules |
| `HAS_DESIGN_REVIEW` | Q9 | CLAUDE.md design review section |
| `RETRO_CADENCE` | Q10 | RETRO.md, RETRO_GUIDE.md, memory/retro.md |
| `HAS_SCRIPTS` | Q11 | CLAUDE.md code rules (dry-run) |
| `HAS_DATABASE` | Q12 | DATABASE_CONNECTION.md, .gitignore |
| `MODULES` | Q13 | Determines which optional modules to include |
| `USER_ROLE` | Q14 | memory/user_profile.md |
| `USER_EXPERTISE` | Q14 | memory/user_profile.md |
| `WORKING_STYLE` | Q14 | memory/user_profile.md |

### From Auto-Discovery

| Variable | Source | Used In |
|----------|--------|---------|
| `NOTION_TASKS_DB` | Notion MCP auto-discovery | CLAUDE.md task management, notion-workflow |
| `NOTION_PROJECTS_DB` | Notion MCP auto-discovery | CLAUDE.md task management |
| `NOTION_USER_ID` | Notion MCP auto-discovery | CLAUDE.md task management |
| `NOTION_PROJECT_ID` | Notion MCP auto-discovery | CLAUDE.md task management |
| `NOTION_STATUS_FLOW` | Notion MCP auto-discovery | CLAUDE.md task management |
| `NOTION_DOC_PAGES` | Notion MCP auto-discovery | CLAUDE.md documentation sync |
| `JIRA_URL` | Jira MCP auto-discovery | CLAUDE.md task management, jira-workflow |
| `JIRA_PROJECT_KEY` | Jira MCP auto-discovery | CLAUDE.md task management |
| `JIRA_STATUS_FLOW` | Jira MCP auto-discovery | CLAUDE.md task management |
| `GH_LABELS` | GitHub CLI auto-discovery | Priority labels, status labels |
| `GH_MILESTONES` | GitHub CLI auto-discovery | Sprint milestones |
| `EXISTING_CREDENTIALS` | Scanned from other projects | credentials/.env (copied values) |
| `CONNECTED_SERVICES` | Tool/CLI presence checks | reference_services.md, SKILL.md |

---

## Customization After Install

The generated files are starting points. Customize freely:

- **Add sections** to CLAUDE.md as your project evolves
- **Add memory files** as you learn things worth remembering
- **Add skills** to `.claude/skills/` for reusable AI capabilities
- **Update RETRO_GUIDE.md** if you prefer a different retro format
- **Swap task tracker** by replacing the Task Management section in CLAUDE.md
