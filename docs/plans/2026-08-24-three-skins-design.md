# Design: Three Visual Skins System

**Date:** 2026-08-24  
**Purpose:** Allow non-technical admin to switch between visual themes without code changes  
**Scope:** Sage-green dark (current) + Indian-inspired (jewel tones + patterns) + Light & airy (bright)

---

## Architecture

Uses **CSS custom properties (variables)** to define colors, patterns, and styles for each skin. A simple `skins.json` config file tells the app which skin to load. No code changes required for switching.

**File structure:**
```
tours/
├── skins.json (active skin selection)
├── css/
│   ├── variables.css (CSS var definitions)
│   ├── current.css (sage-green theme)
│   ├── indian.css (jewel tones + patterns)
│   └── light.css (bright + airy)
├── SKINS.md (admin documentation)
└── CONTENT-MAP.md (updated with note about skins)
```

---

## The Three Skins

### **Skin 1: Current (Sage-Green Dark)**
- **Palette:** Slate-900 bg, Sage-500 accents, Slate-100 text
- **Visual:** Sharp corners, minimal borders, glass-morphism, no patterns
- **Use case:** Premium, modern, minimalist positioning

### **Skin 2: Indian-Inspired (Jewel Tones)**
- **Palette:** Deep navy bg, gold/saffron accents (#D4AF37), burgundy (#8B3A3A), teal, cream text
- **Visual:** Decorative gold borders, geometric patterns (Kolam-inspired), softer rounded corners, warmer glass panels
- **Patterns:** Subtle repeating geometric motifs at low opacity on sections
- **Use case:** Cultural authenticity, heritage tourism, warm welcome

### **Skin 3: Light & Airy**
- **Palette:** Cream bg (#F9F7F2), teal accents (#00A896), peach accents, dark slate text
- **Visual:** Thin clean lines, solid cards with light shadows, minimal glass-morphism, lots of whitespace
- **Use case:** Accessibility, daytime browsing, modern-elegant feel

---

## Admin Workflow

**How to switch skins (non-technical):**
1. Open `skins.json`
2. Change `"active": "current"` to `"active": "indian"` or `"active": "light"`
3. Save
4. Site immediately loads new skin

**Example `skins.json`:**
```json
{
  "active": "current",
  "available": ["current", "indian", "light"],
  "skins": {
    "current": {
      "name": "Sage Green Dark",
      "description": "Premium, minimalist, sophisticated"
    },
    "indian": {
      "name": "Indian Heritage",
      "description": "Jewel tones, cultural patterns, warm aesthetic"
    },
    "light": {
      "name": "Light & Airy",
      "description": "Bright, accessible, clean modern feel"
    }
  }
}
```

---

## AI Agent Workflow

**Added to CONTENT-MAP.md:**
> **Style/Color Changes?** Check `SKINS.md` first. If a request matches an existing skin, update `skins.json` to switch themes. Only create custom CSS if no skin fits—document why in a comment.

This prevents one-off color tweaks and keeps the codebase organized.

---

## Implementation Checklist

- [ ] Create `css/variables.css` with all color/style custom properties
- [ ] Create `css/current.css` (override with current sage-green palette)
- [ ] Create `css/indian.css` (override with jewel tones + pattern defs)
- [ ] Create `css/light.css` (override with light palette + contrasts)
- [ ] Create `skins.json` config file
- [ ] Update `index.html` to load skin dynamically from `skins.json`
- [ ] Create `SKINS.md` (admin reference with previews)
- [ ] Update `CONTENT-MAP.md` with skin-switching note
- [ ] Test all three skins for readability and visual coherence

---

## Technical Notes

- CSS variables inherit through DOM, so one override point per property
- Pattern backgrounds use SVG data URIs or low-opacity PNGs for Indian skin
- Light skin needs adjusted contrast ratios for WCAG AA accessibility
- Skin switching is instant (no page reload needed if JS reads `skins.json` on load)
