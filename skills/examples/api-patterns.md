# API Patterns Skill

> Read this skill when working with external APIs in this project.
> Extracted from the nebenkostenverrechnen project's SKILLS.md pattern.

## When to Use

- Calling any external API
- Writing new API integration code
- Debugging API failures
- Onboarding to an unfamiliar service

## Pattern: Document Every API

For each external service, maintain a section with:

1. **Auth method** — how to authenticate (Bearer token, OAuth, API key)
2. **Base URL** — including API version
3. **Common operations** — working code snippets for the most-used calls
4. **Gotchas** — hard-won knowledge that saves debugging time

### Gotcha Format

```
> **Gotcha:** [Specific, actionable warning]
```

**Good gotchas:**
- "Attachment IDs expire — always re-fetch the message immediately before downloading"
- "`spreadsheetId` must be in `--params`, not in `--json`. Using `requestBody` in params gives 'Unknown name requestBody'"
- "Only `eng.traineddata` is installed — `deu` is unavailable, but `eng` handles Swiss number formats correctly"

**Bad gotchas:**
- "Be careful with the API" (too vague)
- "This can fail sometimes" (no actionable info)

## Pattern: CLI Wrappers

When a CLI tool wraps an API (like `gws` for Google Workspace):

```bash
# Document the binary location and account
GWS = '/path/to/gws'
ACCOUNT = 'user@example.com'

# Document the call pattern
gws {service} {resource} {method} --params '{JSON}' [--json '{body}']
```

## Pattern: Download Handling

Always document where downloads land and how to move them:

```python
# Some CLIs save to a fixed filename — copy immediately after
subprocess.run([CLI, 'download', '--id', file_id], capture_output=True)
shutil.copy('download.jpg', target_path)  # move to real destination
```

## Pattern: PDF Parsing Fallback

```bash
# Try text extraction first
pdftotext document.pdf -

# Fall back to OCR for image-based PDFs
pdftoppm -r 200 -jpeg document.pdf ./page
tesseract ./page-1.jpg ./out -l eng && cat ./out.txt
```

## Error Handling

- **Rate limits (429)** — log, wait, retry with backoff
- **Auth failures (401/403)** — log.fatal, exit process (don't retry with bad credentials)
- **Not found (404)** — log, skip, continue to next item
- **Server errors (500+)** — log, retry once, then skip
