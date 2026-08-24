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
