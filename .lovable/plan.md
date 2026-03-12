

# Plan: Fix Contact Page, Vibrant WRC-Themed UI Overhaul

## Issues Identified

1. **Contact page works** - route exists at `/en/contact`, page renders. If not visible, it may be a navigation issue (the user is on `/contact` without language prefix). The route requires `/:lang/contact`.

2. **Background is plain white** - `--background: 120 15% 97%` is near-white. The reference screenshots show a soft sage/mint green background (`~hsl(120, 25%, 90%)`) throughout.

3. **Pages look dull** - missing the WRC site's illustrative style: toucan illustrations, leaf decorations, soft green tinted cards, bold typography with forest-deep colors, earth-gradient sections (like the "Join the Movement" screenshot).

4. **No illustrations** - the WRC source site uses toucan, leaf, and nature illustrations. We already have `public/images/toucan.png` and assets we can use.

## Plan

### 1. Fix background color + global styling
- Change `--background` from `120 15% 97%` (near white) to `120 20% 93%` (soft sage green like the screenshots)
- Change `--card` to a slightly lighter green tint
- Add a subtle leaf/nature pattern or gradient overlay to the body

### 2. Enhance section backgrounds across all pages
- Replace plain `bg-forest-mist/20` alternating sections with richer treatments:
  - Soft green tinted sections with subtle gradients
  - Earth-gradient sections (warm brown like screenshot 1) for contact/CTA areas
  - Forest-deep sections with white text for emphasis blocks
- Add decorative corner illustrations (toucan, leaves) to key sections

### 3. Upgrade card styling
- Cards get subtle green-tinted backgrounds with soft shadows (like screenshot 2 "Why This Congress Matters")
- Add left border accents or rounded-lg with more padding
- Use emoji/icon decorations like the reference

### 4. Typography upgrades
- Bolder, larger headings with forest-deep color
- Add decorative line elements beside headings (like screenshot 3 with dashes around "11th IRF World Ranger Congress")
- Gold-warm accents for subtitles and dates

### 5. Home page - add "Why This Congress Matters" section
- Add the section from screenshot 2 with conservation innovation, biodiversity, global network items
- Add the congress info block from screenshot 3 (toucan, date, location, big "2027")

### 6. Contact page enhancement  
- Add the earth-gradient "Join the Movement" section (screenshot 1) with contact details, event partners card
- Add the CTA card (screenshot 4) with "Ready to Shape the Future of Conservation?"
- Ensure the contact form and map are properly styled

### 7. Add decorative illustrations throughout
- Use `public/images/toucan.png` as decorative element on home/about pages
- Add floating leaf/nature decorations to section corners
- Use the forest background images subtly in section backgrounds

### Files to modify
- `src/index.css` - background colors, new utility classes
- `src/pages/Index.tsx` - add "Why This Congress Matters" section, congress info block with toucan
- `src/pages/Contact.tsx` - add earth-gradient section, enhance styling
- `src/components/layout/PageLayout.tsx` - add subtle background pattern
- `src/components/shared/PageBanner.tsx` - enhance banner styling
- `src/pages/About.tsx`, `FAQ.tsx`, `Program.tsx`, etc. - upgrade card/section styling
- `src/components/ContactSection.tsx` - may integrate into Contact page

