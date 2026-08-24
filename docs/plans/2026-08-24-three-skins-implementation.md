# Three Skins System Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a CSS variable-based skin system allowing admin to switch between Sage-Green Dark, Indian-Inspired (jewel tones + patterns), and Light & Airy themes via `skins.json`.

**Architecture:** CSS custom properties define all colors/styles. Three skin files override variables per theme. Dynamic loader reads `skins.json` to inject active skin. No code changes required for admin to switch.

**Tech Stack:** CSS custom properties, vanilla JS, JSON config

---

## Task 1: Create CSS Variables Foundation

**Files:**
- Create: `css/variables.css`
- Modify: `index.html` (link new CSS)

**Step 1: Create variables file**

Create `/Users/ravi/Local Sites/tours/css/variables.css`:

```css
/* Base Colors */
:root {
  --bg-primary: #0F172A;
  --bg-secondary: #1E293B;
  --bg-tertiary: #141E33;
  --bg-quaternary: #070A12;

  --text-primary: #F1F5F9;
  --text-secondary: #CBD5E1;
  --text-tertiary: #94A3B8;
  --text-muted: #64748B;

  --accent-primary: #10B981;
  --accent-secondary: #059669;
  --accent-tertiary: #047857;
  --accent-light: #A7F3D0;
  --accent-glow: rgba(16, 185, 129, 0.15);

  --emerald-primary: #10B981;
  --emerald-secondary: #059669;

  /* Glass & Borders */
  --glass-bg: rgba(30, 41, 59, 0.65);
  --glass-bg-hover: rgba(30, 41, 59, 0.85);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-border-accent: rgba(16, 185, 129, 0.3);

  --border-primary: #334155;
  --border-secondary: #1E293B;
  --border-accent: rgba(16, 185, 129, 0.3);

  /* Patterns & Textures */
  --pattern-opacity: 0.2;
  --pattern-url: none;
}
```

**Step 2: Link CSS in HTML head**

In `index.html`, after `<style>` tag and before closing `</head>`:

```html
<link rel="stylesheet" href="css/variables.css">
<link id="theme-skin" rel="stylesheet" href="">
```

**Step 3: Replace hardcoded colors in index.html**

Update existing inline styles to use variables. Example:

Replace:
```html
background: rgba(30, 41, 59, 0.65);
```

With:
```html
background: var(--glass-bg);
```

This is a search-and-replace task. Change ~15 instances in the style block and element classes.

**Step 4: Test that page still loads**

Open `index.html` in browser. Visually confirm it looks identical to before (sage-green dark theme intact).

**Step 5: Commit**

```bash
git add css/variables.css index.html
git commit -m "refactor: extract colors into CSS custom properties

- Create css/variables.css with --bg-*, --text-*, --accent-*, --glass-* variables
- Update index.html to reference variables instead of hardcoded hex values
- Functionality unchanged; prepares for multi-skin system"
```

---

## Task 2: Create Current Skin CSS (Sage-Green Dark)

**Files:**
- Create: `css/current.css`

**Step 1: Create current.css**

Create `/Users/ravi/Local Sites/tours/css/current.css`:

```css
/* Skin: Current (Sage-Green Dark) */
:root {
  --bg-primary: #0F172A;
  --bg-secondary: #1E293B;
  --bg-tertiary: #141E33;
  --bg-quaternary: #070A12;

  --text-primary: #F1F5F9;
  --text-secondary: #CBD5E1;
  --text-tertiary: #94A3B8;
  --text-muted: #64748B;

  --accent-primary: #10B981;
  --accent-secondary: #059669;
  --accent-tertiary: #047857;
  --accent-light: #A7F3D0;
  --accent-glow: rgba(16, 185, 129, 0.15);

  --emerald-primary: #10B981;
  --emerald-secondary: #059669;

  --glass-bg: rgba(30, 41, 59, 0.65);
  --glass-bg-hover: rgba(30, 41, 59, 0.85);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-border-accent: rgba(16, 185, 129, 0.3);

  --border-primary: #334155;
  --border-secondary: #1E293B;
  --border-accent: rgba(16, 185, 129, 0.3);

  --pattern-opacity: 0;
  --pattern-url: none;
}
```

**Step 2: Test it loads**

Manually set in browser console: `document.getElementById('theme-skin').href = 'css/current.css';`

Verify page looks identical (sage-green dark).

**Step 3: Commit**

```bash
git add css/current.css
git commit -m "feat: add current skin (sage-green dark)

- Exact replica of current color scheme
- Baseline for skin system testing"
```

---

## Task 3: Create Indian Skin CSS (Jewel Tones + Patterns)

**Files:**
- Create: `css/indian.css`
- Create: `css/patterns/indian-geometric.svg` (optional, for pattern)

**Step 1: Create indian.css**

Create `/Users/ravi/Local Sites/tours/css/indian.css`:

```css
/* Skin: Indian Heritage (Jewel Tones) */
:root {
  /* Deep navy background */
  --bg-primary: #0B1929;
  --bg-secondary: #1A2F4A;
  --bg-tertiary: #142640;
  --bg-quaternary: #050F1A;

  /* Cream/ivory text */
  --text-primary: #F5E6D3;
  --text-secondary: #E8D9C4;
  --text-tertiary: #D4C4B0;
  --text-muted: #B8A896;

  /* Jewel accents: gold, burgundy, teal */
  --accent-primary: #D4AF37;
  --accent-secondary: #C9A961;
  --accent-tertiary: #8B3A3A;
  --accent-light: #E8D9C4;
  --accent-glow: rgba(212, 175, 55, 0.15);

  --emerald-primary: #2D5A4F;
  --emerald-secondary: #1F3A33;

  /* Gold-tinted glass */
  --glass-bg: rgba(26, 47, 74, 0.7);
  --glass-bg-hover: rgba(26, 47, 74, 0.9);
  --glass-border: rgba(212, 175, 55, 0.25);
  --glass-border-accent: rgba(212, 175, 55, 0.4);

  /* Gold borders with warmth */
  --border-primary: #8B7355;
  --border-secondary: #4A3A2A;
  --border-accent: rgba(212, 175, 55, 0.4);

  /* Geometric pattern background */
  --pattern-opacity: 0.08;
  --pattern-url: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><defs><pattern id="geom" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M0,0 L20,10 L40,0 M0,20 L20,30 L40,20 M0,40 L20,50 L40,40" stroke="%23D4AF37" stroke-width="1" fill="none" opacity="0.3"/></pattern></defs><rect width="100" height="100" fill="url(%23geom)"/></svg>');
}
```

**Step 2: Apply pattern to sections**

Add this to the `<style>` block in `index.html`:

```css
body.skin-indian section {
  position: relative;
  background-image: var(--pattern-url);
  background-repeat: repeat;
  background-opacity: var(--pattern-opacity);
}
```

**Step 3: Test it loads**

In browser console: `document.getElementById('theme-skin').href = 'css/indian.css';`

Verify: Navy background, gold/cream text, warm glass panels, subtle geometric pattern visible.

**Step 4: Commit**

```bash
git add css/indian.css
git commit -m "feat: add indian skin (jewel tones + patterns)

- Navy background (#0B1929), cream text (#F5E6D3)
- Gold accents (#D4AF37), burgundy (#8B3A3A), teal (#2D5A4F)
- Subtle geometric pattern overlay at 8% opacity
- Warm gold glass panels and borders"
```

---

## Task 4: Create Light Skin CSS (Bright & Airy)

**Files:**
- Create: `css/light.css`

**Step 1: Create light.css**

Create `/Users/ravi/Local Sites/tours/css/light.css`:

```css
/* Skin: Light & Airy */
:root {
  /* Cream/off-white background */
  --bg-primary: #F9F7F2;
  --bg-secondary: #EFE8E0;
  --bg-tertiary: #E5DDCE;
  --bg-quaternary: #FBF9F6;

  /* Dark slate text */
  --text-primary: #1A202C;
  --text-secondary: #2D3748;
  --text-tertiary: #4A5568;
  --text-muted: #718096;

  /* Teal & soft peach accents */
  --accent-primary: #00A896;
  --accent-secondary: #2D9B8F;
  --accent-tertiary: #E8B4A8;
  --accent-light: #C0E9E4;
  --accent-glow: rgba(0, 168, 150, 0.1);

  --emerald-primary: #00A896;
  --emerald-secondary: #008B7F;

  /* White/light glass cards */
  --glass-bg: rgba(255, 255, 255, 0.8);
  --glass-bg-hover: rgba(255, 255, 255, 0.95);
  --glass-border: rgba(0, 168, 150, 0.15);
  --glass-border-accent: rgba(0, 168, 150, 0.25);

  /* Clean light borders */
  --border-primary: #D4CCBE;
  --border-secondary: #E5DDCE;
  --border-accent: rgba(0, 168, 150, 0.25);

  /* No patterns for light skin */
  --pattern-opacity: 0;
  --pattern-url: none;
}
```

**Step 2: Adjust contrast for readability**

Add to `<style>` block for light mode:

```css
body.skin-light {
  background-color: var(--bg-primary);
}

body.skin-light a {
  color: var(--accent-primary);
}

body.skin-light a:hover {
  color: var(--accent-secondary);
}
```

**Step 3: Test it loads**

In browser console: `document.getElementById('theme-skin').href = 'css/light.css';`

Verify: Cream background, dark slate text, teal accents, clean card styling, high contrast.

**Step 4: Commit**

```bash
git add css/light.css
git commit -m "feat: add light skin (bright & airy)

- Cream background (#F9F7F2), dark slate text (#1A202C)
- Teal accents (#00A896), soft peach (#E8B4A8)
- White glass cards with light shadows
- High contrast for readability
- No patterns; clean, breathing design"
```

---

## Task 5: Create Skin Config (skins.json)

**Files:**
- Create: `skins.json`

**Step 1: Create skins.json**

Create `/Users/ravi/Local Sites/tours/skins.json`:

```json
{
  "active": "current",
  "available": ["current", "indian", "light"],
  "skins": {
    "current": {
      "name": "Sage Green Dark",
      "description": "Premium, minimalist, sophisticated",
      "file": "css/current.css"
    },
    "indian": {
      "name": "Indian Heritage",
      "description": "Jewel tones, cultural patterns, warm aesthetic",
      "file": "css/indian.css"
    },
    "light": {
      "name": "Light & Airy",
      "description": "Bright, accessible, clean modern feel",
      "file": "css/light.css"
    }
  }
}
```

**Step 2: Commit**

```bash
git add skins.json
git commit -m "feat: add skins configuration

- Define active skin (default: current)
- List all three skins with metadata
- Admin edits active field to switch themes"
```

---

## Task 6: Add Skin Loader to HTML

**Files:**
- Modify: `index.html` (add JS in `<script>` section)

**Step 1: Add skin loader function**

In the `<script>` section before the closing `</body>` tag, add after `lucide.createIcons();`:

```javascript
// Load active skin from skins.json
async function loadActiveSkin() {
  try {
    const response = await fetch('skins.json');
    const config = await response.json();
    const activeSkin = config.active;
    const skinFile = config.skins[activeSkin].file;
    document.getElementById('theme-skin').href = skinFile;
    document.body.classList.add(`skin-${activeSkin}`);
  } catch (error) {
    console.error('Failed to load skin:', error);
    // Fallback to current skin
    document.getElementById('theme-skin').href = 'css/current.css';
  }
}

// Load skin on page load
loadActiveSkin();
```

**Step 2: Test skin switching**

1. Open `index.html` in browser
2. Verify sage-green dark theme loads (current)
3. Edit `skins.json`: change `"active": "current"` to `"active": "indian"`
4. Refresh page
5. Verify Indian jewel-tone theme loads
6. Repeat for `"light"` skin
7. Change back to `"current"`

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add dynamic skin loader to HTML

- Fetch active skin from skins.json on page load
- Link theme CSS dynamically
- Add body class for skin-specific CSS overrides
- Fallback to current skin if skins.json fails"
```

---

## Task 7: Create SKINS.md Documentation

**Files:**
- Create: `SKINS.md`

**Step 1: Create documentation**

Create `/Users/ravi/Local Sites/tours/SKINS.md`:

```markdown
# Visual Skins — Admin Reference

Choose which visual theme displays on the site. Three options available; swap anytime.

## How to Switch Skins

1. Open `skins.json` in your text editor
2. Find this line: `"active": "current"`
3. Change `current` to one of: `current`, `indian`, or `light`
4. Save the file
5. Refresh the website in your browser
6. Done! The new theme is live.

---

## The Three Skins

### **Sage Green Dark** (current)
- **Colors:** Dark slate background, sage-green accents, cream text
- **Feeling:** Premium, modern, minimalist, intellectual
- **Best for:** Sophisticated positioning, evening browsing
- **Use when:** You want elegant simplicity

### **Indian Heritage** (indian)
- **Colors:** Deep navy background, gold/saffron accents, burgundy, cream text
- **Feeling:** Warm, cultural, rich, authentic
- **Best for:** Emphasizing cultural tourism, heritage connection
- **Visual:** Subtle geometric patterns, decorative gold borders
- **Use when:** Highlighting Indian aesthetic and tradition

### **Light & Airy** (light)
- **Colors:** Cream background, teal accents, dark slate text
- **Feeling:** Bright, accessible, modern, welcoming
- **Best for:** Accessibility, daytime reading, clean elegance
- **Use when:** You want maximum contrast and readability

---

## Which Skin Should I Use?

| Situation | Recommendation |
|-----------|-----------------|
| Most of the time | **Sage Green Dark** (premium default) |
| Emphasizing Indian culture | **Indian Heritage** (authentic, warm) |
| Accessibility/light environments | **Light & Airy** (high contrast) |
| Special campaigns/seasons | Try **Indian Heritage** (distinctive) |

---

## For AI Agents

**Changing colors or visual elements?** Check here first:
1. If your request matches an existing skin, edit `skins.json` to switch
2. If no skin fits, document why and suggest creating a new skin rather than custom CSS tweaks

**Example:**
- Request: "Use warmer colors" → Switch to **Indian Heritage** skin
- Request: "Make it lighter" → Switch to **Light & Airy** skin
- Request: "Use purple accents" → No skin fits; would require new skin creation
```

**Step 2: Commit**

```bash
git add SKINS.md
git commit -m "docs: add skin switching guide for admin

- Clear instructions on how to change skins via skins.json
- Describe each skin (colors, feeling, use case)
- Decision tree for choosing skins
- Note for AI agents to check skins before custom changes"
```

---

## Task 8: Update CONTENT-MAP.md

**Files:**
- Modify: `CONTENT-MAP.md`

**Step 1: Add skin section**

In `CONTENT-MAP.md`, add this section after the "Site Structure" table:

```markdown
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
```

**Step 2: Commit**

```bash
git add CONTENT-MAP.md
git commit -m "docs: add skin reference to CONTENT-MAP

- List all three skins with files and use cases
- Quick switching instructions
- Remind agents to check skins before custom CSS"
```

---

## Task 9: Test All Skins End-to-End

**Files:**
- Test: All skins in browser

**Step 1: Test Sage Green Dark**

1. Set `skins.json` `"active"` to `"current"`
2. Refresh page
3. Check:
   - Background is dark slate (#0F172A)
   - Accents are sage-green (#10B981)
   - Text is light cream
   - Glass panels have subtle blur effect
   - All sections readable

**Step 2: Test Indian Heritage**

1. Set `skins.json` `"active"` to `"indian"`
2. Refresh page
3. Check:
   - Background is deep navy (#0B1929)
   - Text is cream (#F5E6D3)
   - Accents are gold (#D4AF37), burgundy, teal
   - Subtle geometric patterns visible (especially on section backgrounds)
   - Glass panels have gold-tinted borders
   - All text has sufficient contrast

**Step 3: Test Light & Airy**

1. Set `skins.json` `"active"` to `"light"`
2. Refresh page
3. Check:
   - Background is cream (#F9F7F2)
   - Text is dark slate (#1A202C)
   - Accents are teal (#00A896)
   - Cards are white with light shadows
   - Very high contrast for readability
   - No patterns visible

**Step 4: Test switching multiple times**

Rapidly toggle between all three skins. Verify:
- No console errors
- CSS loads instantly
- All visual elements update
- No leftover styles from previous skin

**Step 5: Commit**

```bash
git add -A
git commit -m "test: verify all three skins render correctly

- Sage Green Dark: premium minimalist
- Indian Heritage: jewel tones + patterns
- Light & Airy: bright + high contrast
- Switching is instant, no artifacts
- All text readable in each skin"
```

---

## Summary Checklist

- [x] CSS variables foundation
- [x] Current skin (sage-green)
- [x] Indian skin (jewel tones + patterns)
- [x] Light skin (bright + airy)
- [x] skins.json config
- [x] Skin loader JavaScript
- [x] SKINS.md documentation
- [x] CONTENT-MAP.md updated
- [x] All skins tested end-to-end

**Next:** Commit everything and notify admin the system is ready to use.
