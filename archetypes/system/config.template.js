// config.js — All settings in one place
// Consolidate magic numbers, schedules, and thresholds here.

module.exports = {
  // ── Core Settings ──────────────────────────────────────────────────────────
  BATCH_SIZE: 50,              // items processed per run
  // MAX_RETRIES: 3,           // retry limit for API calls

  // ── Schedule ───────────────────────────────────────────────────────────────
  CRON: {
    // main:    '0 8 * * 1-5',  // Mon-Fri 08:00
    // monitor: '0 7-19 * * 1-5', // hourly Mon-Fri 07:00-19:00
  },

  // ── Thresholds ─────────────────────────────────────────────────────────────
  // STALE_DAYS: 60,           // days before treating as cold
  // COOLDOWN_DAYS: { first: 7, second: 14 },

  // ── Skip / Filter ─────────────────────────────────────────────────────────
  // SKIP_STATUSES: ['Bounced', 'Declined'],
};
