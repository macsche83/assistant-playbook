# AI Audit Trail

> Pattern extracted from the lead-management project. Use when your system uses LLM classification or decision-making that needs traceability.

## The Pattern

Every AI interaction is logged as **three entries**:

1. **`ai-classify`** — Input sent to the model (what was asked)
2. **`ai-result`** — Raw response from the model (what came back)
3. **`ai-decision`** — Action taken based on the response (what was done)

## Example

```js
const log = require('../lib/logger')('monitor');

// 1. Log what we're asking
log.info('ai-classify', {
  email: contact.email,
  subject: message.subject,
  body: message.snippet,
  prompt: 'classify-reply'
});

// 2. Log what came back
const result = await llm.classify(message);
log.info('ai-result', {
  email: contact.email,
  raw: result,
  model: 'claude-haiku-4-5',
  tokens: result.usage
});

// 3. Log what we did with it
log.info('ai-decision', {
  email: contact.email,
  classification: result.category,
  action: 'auto-reply-q2',
  confidence: result.confidence
});
```

## Why Three Entries

- **Debugging** — when a classification is wrong, you can see input + output + action separately
- **Auditing** — trace exactly what the AI saw, said, and did for any contact
- **Cost tracking** — token usage per interaction
- **Compliance** — full trail of automated decisions

## When to Use

Add this module when:
- Your system uses LLM classification to make decisions (send email, update status, flag for review)
- You need to explain why the system took a specific action
- Multiple AI calls happen in sequence (pipeline)

## Add to CLAUDE.md

```markdown
## Code Rules

- Log all AI interactions with three entries: `ai-classify` (input), `ai-result` (raw response), `ai-decision` (action taken)
```

## Add to Logger

Ensure your logger supports structured data:

```js
log.info('ai-classify', { email, prompt, body });  // NOT just a string
```
