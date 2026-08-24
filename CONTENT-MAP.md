# Fab Wow Tours — Content Map

Quick reference for AI-assisted content editing. Each section has its own JSON file.

## Site Structure

| Section | File | ID | Purpose |
|---------|------|----|-------|
| Header & Nav | `content/header.json` | — | Logo, nav links, CTA buttons |
| Hero | `content/hero.json` | `hero` | Main headline & value props |
| About | `content/about.json` | `about` | Svagato bio & profile |
| Methodology | `content/methodology.json` | `methodology` | Two core benefits |
| Tours | `content/tours.json` | `tours` | 4 tour offerings + prices |
| **Ready-Made Programs** | `content/readymade_tours.json` | `readymade` | **2 fixed-itinerary programs with full day-by-day detail** |
| Itinerary | `content/itinerary.json` | `itinerary` | Day-by-day phases |
| Consultation | `content/consultation.json` | `consultation` | Bishkek Hub info |
| Testimonials | `content/testimonials.json` | — | 3 guest reviews |
| FAQ | `content/faq.json` | — | Q&A pairs |

## Visual Themes (Skins)

All three skins are pre-built. Switching is **instant**—no code changes needed.

| Skin | File | When to Use |
|------|------|-------------|
| Sage Green Dark | `css/current.css` | Default, premium aesthetic |
| Indian Heritage | `css/indian.css` | Cultural authenticity, warm feel |
| Light & Airy | `css/light.css` | Accessibility, bright environments |

**To switch:** Edit `skins.json`, change `"active"` field. See `SKINS.md` for details.

---

## Editing Colors or Styles?

✓ **Do this first:** Check `SKINS.md` to see if an existing skin matches your request.

✓ **If a skin matches:** Update `skins.json` `"active"` field. Done.

✗ **Don't:** Add custom CSS tweaks. It fragments the system.

✓ **If no skin matches:** Document why in a comment, then propose creating a new skin.

## Ready-Made Tour Subpages

Two fully self-contained detail pages live in `tours/` subfolder:

| Tour | File |
|------|------|
| The Imperial Corridor: Delhi to Mumbai (10 Days) | `programs/delhi-mumbai-10-days.html` |
| The Great Indian Dialectic: Mountain, Cave, Temple & Cosmos (14 Days) | `programs/mumbai-dharamsala-tiruvannamalai-khajuraho.html` |

Each subpage contains:
- A full day-by-day timeline with lodging and meals per day
- Currency toggle (USD/EUR)
- Bishkek consultation scheduling modal
- Backlinks to `index.html#readymade`

## How to Edit

1. **Read this map first** (you're here)
2. **Find the section** you need to change in the table above
3. **Open the corresponding JSON file** in `content/`
4. **Edit the text** (don't touch HTML structure)
5. **Prices update** in `tours.json` under each tour's `price_usd` & `price_eur`
6. **The HTML is auto-synced** — JSON is the source of truth

## Key Fields (by section)

### Header
- `brand_name`, `brand_tagline`
- `nav_links` (array of href + label)
- `cta_text`, `cta_link`

### Hero  
- `headline`, `subheading`
- `value_highlights` (array of 4 items)
- `cta_primary` + `cta_secondary`

### Tours
- Array of 4 tours, each with:
  - `title`, `description`, `duration`
  - `details` (array)
  - `price_usd`, `price_eur`
  - `button_text`

### All sections
- Strings use `\n` for line breaks where needed
- Keep to current tone (sophisticated, intellectual, specific)

## Working Directory
- HTML: `/index.html` (read-only, regenerated from JSON)
- Content: `/content/*.json` (edit here)
- This map: `/CONTENT-MAP.md` (reference)
