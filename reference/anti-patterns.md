# Anti-Patterns — What Didn't Work

Lessons learned from 6 projects. Avoid these.

---

## Instructions

### Monolithic CLAUDE.md
Putting everything — architecture, data model, operations, rules — into one giant CLAUDE.md. It becomes unreadable and the LLM can't prioritize.

**Fix:** Thin CLAUDE.md as entry point → depth file for details.

### No Session Checklist
Without explicit "On Session Start" and "On Session End" instructions, the LLM forgets to read context or update state between sessions.

**Fix:** Always include session lifecycle sections in CLAUDE.md.

### Stale Documentation
Docs that aren't updated when code changes. The LLM follows outdated instructions and produces wrong output.

**Fix:** Documentation sync workflow — list exactly which docs to update on version bumps.

---

## Memory

### Memory in ~/.claude/ Only
Claude Code's default memory location (`~/.claude/projects/*/memory/`) doesn't travel with the repo. Machine migration = lost context.

**Fix:** Store memory in `./memory/` inside the repo.

### Memory Without Frontmatter
Memory files without `name`, `description`, `type` fields are hard to find and assess for relevance.

**Fix:** Standardize frontmatter format across all memory files.

---

## Collaboration

### Silent Assumptions
LLM implements based on a 95% understanding without confirming the remaining 5%. The 5% turns out to be wrong, wasting the entire implementation.

**Fix:** 95% confidence rule — ask one confirming question before starting.

### Auto-Completing Tasks
Setting status directly to "Completed" without human review. Bugs slip through.

**Fix:** "In Review" gate — human reviews before closing.

### Uncalibrated Estimates
Using human-speed estimates for AI-assisted work. Everything is estimated 3-5x too high, making sprint planning useless.

**Fix:** AI-assisted t-shirt sizes calibrated to actual AI speed. Reference comparable completed tasks.

### Middle-Dot Separators
Using · (middle dot) as a separator in bullet points or documentation. Hard to read.

**Fix:** Use separate bullet points or properly nested sub-bullets.

---

## Code

### Magic Numbers in Scripts
Batch sizes, cooldown days, cron schedules hardcoded across multiple files. Changing one means finding all occurrences.

**Fix:** Centralized `config.js` with all settings in one place.

### Raw console.log
Using `console.log` and `console.error` directly instead of a structured logger. Logs are unstructured, unparseable, and inconsistent.

**Fix:** Shared logger module with source tags, daily files, auto-cleanup.

### Credentials in ~/.config/ or Keychain
System-level credential storage that doesn't travel with the project. Machine migration breaks everything.

**Fix:** `credentials/.env` in-repo (gitignored).

### CSS `display:contents` Bug
Using `display:contents` for CSS grid layouts without testing in browser first. Cost a debugging round trip.

**Fix:** Always test UI changes in browser before presenting. Don't trust CSS properties you haven't verified.

---

## Process

### No Cron on New Machine
Migrating to a new machine and forgetting to reinstall cron jobs. Scripts don't run, nobody notices for days.

**Fix:** SETUP.md with explicit cron installation step. Dashboard health check shows cron status.

### Background Tasks Without PID Logging
Long-running background tasks that don't log their PID or output path. Impossible to monitor or kill.

**Fix:** Log PID + output path immediately when starting background tasks.

### Retros That Don't Happen
Setting a retro cadence but no mechanism to trigger it. Weeks pass without reflection.

**Fix:** Track retro triggers in memory (last date + task count). Check at session start.
