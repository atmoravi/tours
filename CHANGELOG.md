# Changelog — Fab Wow Tours

All notable changes to content and pricing. See git history for technical details.

## [Unreleased]

## [1.0.0] — 2026-08-24

### Added
- Restructured content into modular JSON files for AI-friendly editing
  - `content/header.json` — navigation & branding
  - `content/hero.json` — hero section & value props
  - `content/about.json` — Svagato bio
  - `content/methodology.json` — core benefits
  - `content/tours.json` — all 4 tour offerings (pricing: USD/EUR)
  - `content/itinerary.json` — day phases
  - `content/consultation.json` — Bishkek Hub details
  - `content/testimonials.json` — guest reviews
  - `content/faq.json` — Q&A pairs
- CONTENT-MAP.md — quick reference for editing
- CHANGELOG.md — this file

### Why
- Token-optimized for AI editing (no full HTML re-parsing)
- Single source of truth for content (JSON)
- Easy version control via git

---

## Template for Future Entries

```markdown
## [X.X.X] — YYYY-MM-DD

### Changed
- Updated [section]: [what changed] (reason)

### Added
- New [item]: [description]

### Fixed
- Corrected [item]: [issue]

### Prices
- [Tour name]: USD $X,XXX → $X,XXX (EUR €X,XXX)
```

---

## Editing Instructions

1. **Before editing** → Read `CONTENT-MAP.md`
2. **Make changes** → Edit files in `content/`
3. **After saving** → Add entry here & commit:
   ```bash
   git add content/ CHANGELOG.md
   git commit -m "Update [section]: [brief reason]"
   ```

Keep entries brief—git log has the detailed history.
