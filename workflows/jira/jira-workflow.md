# Jira Workflow Integration

> How to use Jira as your task tracker with Claude Code via MCP.

## Setup

### MCP Server Configuration

Add to `~/.claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "jira": {
      "command": "npx",
      "args": ["-y", "mcp-atlassian"],
      "env": {
        "JIRA_URL": "https://{{ORG}}.atlassian.net",
        "JIRA_USERNAME": "{{EMAIL}}",
        "JIRA_API_TOKEN": "{{API_TOKEN}}"
      }
    }
  }
}
```

### Get API Token

1. Go to https://id.atlassian.com/manage-profile/security/api-tokens
2. Create a new token
3. Add to the MCP config above

## Project Details

| Key | Value |
|-----|-------|
| Jira URL | `https://{{ORG}}.atlassian.net` |
| Project Key | `{{PROJECT_KEY}}` |
| Board | {{BOARD_NAME}} |

## Status Flow

Depends on your Jira workflow. Common:

```
To Do → In Progress → In Review → Done
```

## Before Starting Work

1. Find or create a ticket in the project
2. Move to "In Progress"
3. Assign to yourself

## When Work Is Complete

1. Move to "In Review"
2. Add a comment summarizing what was done
3. Human reviews, then moves to "Done"

## Commit Messages

Include the Jira ticket key:
```
type: description [PROJECT-123]
```

## MCP Usage

Once configured, the Jira MCP server provides tools for:
- Searching issues (`jql` queries)
- Reading issue details
- Creating issues
- Updating issue status
- Adding comments

The MCP tools are available directly in Claude Code conversations.

## CLI Alternative

If MCP isn't available, use the Jira REST API:

```bash
# Search issues
curl -s "https://{{ORG}}.atlassian.net/rest/api/3/search?jql=project={{KEY}}+AND+status='In Progress'" \
  -u "{{EMAIL}}:{{API_TOKEN}}" | jq '.issues[].key'

# Transition issue
curl -X POST "https://{{ORG}}.atlassian.net/rest/api/3/issue/{{KEY}}-123/transitions" \
  -u "{{EMAIL}}:{{API_TOKEN}}" \
  -H "Content-Type: application/json" \
  -d '{"transition": {"id": "{{TRANSITION_ID}}"}}'
```
