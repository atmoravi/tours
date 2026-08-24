# Fab Wow Tours — Content Map

Quick reference for AI-assisted content editing. Each section has its own JSON file.

## Site Structure

| Section | File | ID | Purpose |
|---------|------|----|----|
| Header & Nav | `content/header.json` | — | Logo, nav links, CTA buttons |
| Hero | `content/hero.json` | `hero` | Main headline & value props |
| About | `content/about.json` | `about` | Svagato bio & profile |
| Methodology | `content/methodology.json` | `methodology` | Two core benefits |
| Tours | `content/tours.json` | `tours` | 4 tour offerings + prices |
| Itinerary | `content/itinerary.json` | `itinerary` | Day-by-day phases |
| Consultation | `content/consultation.json` | `consultation` | Bishkek Hub info |
| Testimonials | `content/testimonials.json` | — | 3 guest reviews |
| FAQ | `content/faq.json` | — | Q&A pairs |

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
