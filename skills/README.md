# Claude Code Skills

## What Are Skills?

Skills are reusable prompt-based capabilities stored in `.claude/skills/` inside a project. When a matching topic comes up in conversation, the LLM reads the skill file for specialized instructions.

Skills are different from code libraries — they're **instructions for the AI**, not executable code.

## When to Create a Skill

Create a skill when:
- You repeatedly give the same instructions for a specific type of task
- A domain requires specific rules (design system, API patterns, image generation)
- You want consistent behavior across sessions for a topic

Don't create a skill for:
- One-time tasks
- Things already documented in CLAUDE.md or INSTRUCTIONS.md
- Generic coding patterns the LLM already knows

## Skill File Structure

```markdown
# Skill Name

> One-line description of when this skill applies.

## When to Use

- Trigger condition 1
- Trigger condition 2

## Rules

1. Rule 1
2. Rule 2

## Examples

### Good
...

### Bad
...

## Reference

- Link to docs
- Key values, IDs, paths
```

## How to Register Skills

### Option 1: Reference in CLAUDE.md

```markdown
## Skills

| Skill | File | When to read |
|-------|------|-------------|
| Frontend Design | `.claude/skills/frontend-design.md` | Building ANY UI component |
| API Patterns | `.claude/skills/api-patterns.md` | Calling external APIs |
```

### Option 2: `.claude/skills/` directory

Claude Code automatically discovers skill files in `.claude/skills/`. No explicit registration needed if you use this path.

## Examples

See `examples/` in this directory for real skill files extracted from projects.
