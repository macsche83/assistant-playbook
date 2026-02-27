# Retro & Reflection Guide

> A lightweight retrospective format for solo developers and AI-assisted teams.
> Blends Taoist philosophy with modern agile practice.

## Cadence

Every **2 days** — at a natural pause point, not as a ceremony.
Takes **2 minutes** max. The value is in the habit, not the depth.

## Format

```
--- RETRO [YYYY-MM-DD] ---

Flow:    [one keyword — smooth, stuck, scattered, focused, rushing, calm]
Win:     [one thing that went well]
Friction:[one thing that slowed us down]
Next:    [one adjustment for the next 2 days]
Dao:     [a brief Taoist insight + plain-language explanation of what it means]

---
```

## Example

```
--- RETRO 2026-02-09 ---

Flow:    focused
Win:     Notion integration done in one session
Friction:Spent too long choosing between caching strategies
Next:    Pick the simpler option first, optimize later
Dao:     "The best knife is used, not admired." — A tool's value is in its use, not its polish. Ship working code before perfecting it.

---
```

## Taoist Principles for Developers

### Wu Wei — Effortless Action
The best code writes itself through clear thinking.
If you're forcing a solution, step back. The right approach feels natural.
**Ask:** "Am I swimming upstream?"

### Pu — The Uncarved Block
Raw simplicity before clever abstraction.
The simplest working solution is the most beautiful.
**Ask:** "Am I adding complexity that nobody asked for?"

### Water — Adaptive Persistence
Water doesn't fight the rock — it flows around it.
When blocked, find a different path. Don't brute-force obstacles.
**Ask:** "Where is the path of least resistance?"

### Te — Virtue Through Action
Show, don't tell. Working code > perfect plans.
Ship something small and real over planning something large and imaginary.
**Ask:** "Can I ship something in the next 30 minutes?"

### Ziran — Naturalness
Follow the grain of the tools, framework, and language.
Don't fight the framework. Use what's there.
**Ask:** "Am I fighting the natural way this tool wants to work?"

### Wuji — The Void
Empty space is not nothing — it's potential.
Rest is part of the rhythm. Breaks make you faster, not slower.
**Ask:** "When did I last step away?"

## Sprint Velocity Review

Track actual time vs estimates after each sprint to improve future planning:

```
Sprint N: Xh estimated → Yh actual (Z%)
Pattern: [what type of tasks take longer/shorter than expected]
```

This builds an estimation reference over time. AI+human pair work has different velocity patterns than solo work — tracking reveals which task types benefit most from collaboration.

## Agile Reminders

- **Sprint = Breath:** Inhale (plan, build) → Exhale (ship, reflect). Don't hold your breath.
- **Velocity is not speed:** Direction matters more than pace.
- **Small wins compound:** One task, one commit, one test. The river carves the canyon drop by drop.
- **Done > Perfect:** A shipped feature beats a polished concept.
- **Reflect to recalibrate:** The retro isn't judgment — it's a compass check.

## Where to Log

Add retro entries to `PROJECT_STATUS.md` changelog:
```
- `[2026-02-09] RETRO` — Flow: focused. Shipping faster by choosing simpler options first.
```

## AI Agent Behavior

When prompting for a retro:
- Be gentle, not demanding — suggest, don't require
- Wait for a natural pause (task completed, end of session)
- Keep the tone warm and encouraging — coach, not manager
- If the human declines, respect it — try again next session
- Never repeat Taoist quotes — find fresh ones relevant to the situation
- **Always explain the wisdom** — don't just drop a quote. Add a brief plain-language note on what it means and how it relates to the current work. The insight should be actionable, not decorative.
