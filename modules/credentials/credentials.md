# In-Repo Credential Management

> Pattern extracted from the lead-management project. Makes repos fully self-contained for `scp` or `git clone` migrations.

## Pattern

All credentials live in `credentials/.env` inside the repo — **gitignored, never committed**.

```
project-root/
├── credentials/
│   ├── .env              # Actual secrets (gitignored)
│   └── .env.example      # Template with placeholder values (committed)
└── .gitignore            # Must include credentials/.env
```

## .env.example Template

```bash
# credentials/.env.example — Copy to .env and fill in real values
# NEVER commit the actual .env file

export API_KEY=your-api-key-here
export DB_PASSWORD=your-db-password-here
export OAUTH_REFRESH_TOKEN=your-token-here
```

## .gitignore Entries

```
.env
credentials/.env
```

## Usage in Scripts

```bash
# Manual
source credentials/.env && node scripts/my-script.js

# In cron
0 8 * * 1-5  . /absolute/path/to/credentials/.env && node /absolute/path/to/scripts/my-script.js
```

## Why This Pattern

- **Portable** — `scp -r project/` copies everything including credential templates
- **Safe** — `.env` is gitignored, only `.env.example` is committed
- **Self-contained** — no dependency on `~/.config/`, keychain, or system-level env vars
- **Discoverable** — new developers see `.env.example` and know exactly what's needed

## Migration Checklist

When moving to a new machine:
1. Copy the repo (via `scp` or `git clone`)
2. If `git clone`: copy `credentials/.env` separately (it's not in git)
3. Verify: `source credentials/.env && echo $API_KEY`
4. Test: run a dry-run of the main script
