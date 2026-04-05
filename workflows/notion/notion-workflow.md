# Notion Workflow Integration

> How to use Notion as your task tracker with Claude Code. Extracted from lead-management and abuero-website projects.

## Setup

1. Create a Notion integration at https://www.notion.so/my-integrations
2. Store the API key in `credentials/.env` as `NOTION_API_KEY`
3. Share your databases with the integration
4. Record database IDs below

## Database IDs

| Database | ID | Purpose |
|----------|----|---------|
| Tasks | `{{TASKS_DB_ID}}` | All tasks and tickets |
| Projects | `{{PROJECTS_DB_ID}}` | Project grouping |
| Current Project | `{{PROJECT_ID}}` | Link all tasks here |

## Assignee

| Key | Value |
|-----|-------|
| Name | {{USER_NAME}} |
| Notion User ID | `{{USER_ID}}` |

Every new task must be linked to the current project and assigned.

## Status Flow

```
New → Ready to Work → In Sprint → On Going → In Review → Completed
```

| Status | Meaning |
|--------|---------|
| New | Just created, not yet scoped |
| Ready to Work | Defined, prioritized |
| In Sprint | Actively being worked on |
| On Going | Running across sessions |
| Paused | Blocked or deferred |
| In Review | Done, awaiting human review |
| Completed | Reviewed and confirmed |

## Ticket Properties

| Property | Type | Usage |
|----------|------|-------|
| Name | title | Clear, action-oriented |
| Status | status | See flow above |
| Prio | select | Immediate / 1st / 2nd / 3rd / 4th Priority |
| Size | select | XS (<15min) / S (15-45min) / M (45min-2h) / L (2-4h) / XL (4h+) |
| Projects | relation | Always link to current project |
| Start at | date | Set date+time (ISO 8601 with TZ) when work starts |
| Done at | date | Set date+time when work is completed |
| Working [min] | number | Calculate from Done at minus Start at |

## Ticket Body

Use headings inside the page, not properties:
- **Description** — max 250 chars, what is being asked
- **DOD** �� Definition of Done, 3-5 bullet points
- **Effort** — Estimated effort (t-shirt size)
- **Testing** — Steps to verify, expected outcomes

## Before Starting Work

1. Create a task in the Tasks DB (or move existing to In Sprint)
2. Link to project via `Projects` relation
3. Set `Start at` to actual current time: `date +%Y-%m-%dT%H:%M:%S.000%:z`
4. Set `Status` to In Sprint

## When Work Is Complete

1. Set `Done at` to actual current time (same method)
2. Calculate and set `Working [min]` from the difference
3. Set `Status` to In Review (human reviews before closing)
4. Add a completion comment summarizing what was done

## Commit Messages

Include the Notion Task ID in every commit:
```
type: description [TASK-XXXXX]
```

Fetch from ticket: `.properties["Task ID"].unique_id` → `prefix + number`

## API Examples

### Create a task

```bash
curl -X POST https://api.notion.com/v1/pages \
  -H "Authorization: Bearer $NOTION_API_KEY" \
  -H "Notion-Version: 2022-06-28" \
  -H "Content-Type: application/json" \
  -d '{
    "parent": {"database_id": "TASKS_DB_ID"},
    "properties": {
      "Name": {"title": [{"text": {"content": "Task title"}}]},
      "Status": {"status": {"name": "New"}},
      "Projects": {"relation": [{"id": "PROJECT_ID"}]},
      "Assignee": {"people": [{"id": "USER_ID"}]}
    }
  }'
```

### Update status

```bash
curl -X PATCH https://api.notion.com/v1/pages/PAGE_ID \
  -H "Authorization: Bearer $NOTION_API_KEY" \
  -H "Notion-Version: 2022-06-28" \
  -H "Content-Type: application/json" \
  -d '{"properties": {"Status": {"status": {"name": "In Review"}}}}'
```

## Access Methods

| Method | When |
|--------|------|
| Notion MCP (OAuth) | Claude Desktop / claude.ai — `claude mcp add --transport http notion https://mcp.notion.com/mcp` |
| API via curl | Scripts, automation, Claude Code CLI |
| Notion UI | Human review, bulk operations |

## Documentation Pages

If you maintain documentation in Notion, record page IDs here:

| Page | ID | Content |
|------|----|---------|
| {{PAGE_NAME}} | `{{PAGE_ID}}` | {{DESCRIPTION}} |
