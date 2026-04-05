# GitHub Issues Workflow Integration

> How to use GitHub Issues as your task tracker with Claude Code.

## Setup

1. Authenticate: `gh auth login`
2. Create labels for priority: `P0: must have`, `P1: should have`, `P2: nice to have`
3. Create labels for status: `status:reviewing` (awaiting human review)
4. Create sprint milestones: `Sprint 1`, `Sprint 2`, etc.

## Links

| What | Where |
|------|-------|
| All tasks | [GitHub Issues]({{REPO_URL}}/issues) |
| Filter by sprint | Label: `sprint:1` through `sprint:N` |
| Filter by priority | Label: `P0`, `P1`, `P2` |
| Sprint progress | [Milestones]({{REPO_URL}}/milestones) |

## Status Flow

Issues use labels + open/closed state:

```
Open (no label) ��� Open (status:in-progress) → Open (status:reviewing) → Closed
```

| State | Meaning |
|-------|---------|
| Open, no status label | Backlog / ready to work |
| Open, `status:in-progress` | Actively being worked on |
| Open, `status:reviewing` | Done, awaiting human review |
| Closed | Reviewed and confirmed |

## Issue Template

```markdown
## Description
<!-- Max 250 chars — what is being asked -->

## Definition of Done
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Effort
<!-- T-shirt size: XS / S / M / L -->

## Test Instructions
<!-- Steps to verify this works -->
```

## Before Starting Work

1. Create an issue (or find existing)
2. Assign to yourself
3. Add `status:in-progress` label
4. Add sprint milestone

## When Work Is Complete

1. Change label to `status:reviewing`
2. Add a completion comment summarizing what was done
3. Human reviews, then closes the issue

## Commit Messages

Reference issues in commits:
```
type: description (#123)
```

Or to auto-close:
```
feat: add login page, closes #123
```

## CLI Quick Reference

```bash
# Create issue
gh issue create --title "Task title" --body "Description" --label "P1" --milestone "Sprint 1"

# List open issues
gh issue list --milestone "Sprint 1"

# Update labels
gh issue edit 123 --add-label "status:reviewing" --remove-label "status:in-progress"

# Close with comment
gh issue close 123 --comment "Done: implemented X, tested Y"

# Create PR linked to issue
gh pr create --title "feat: description" --body "closes #123"
```

## Issue Lifecycle Rules

- **Scope growth during review:** create a child issue, link in parent comment
- **Design tickets** stay open with `status:reviewing` until human approves
- **DoD updates:** update issue body AND add a comment explaining the change
- **Labels:** `status:reviewing` = awaiting human review. Remove when approved.
