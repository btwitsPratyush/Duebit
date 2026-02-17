# Duebit brand colours

Use this palette so the site feels consistent and classy.

## Primary (bright red) – CTAs & links
- **Use for:** Buttons, links, underlines, icons, “Get Early Access”, “View Demo”, checkmarks, focus states.
- **Token:** `primary` (Tailwind) / `hsl(var(--primary))` ≈ `#EF4444`.
- **On light:** Use as-is. On dark red: use white text on primary.

## Brand deep (classy red) – premium / dark sections
- **Use for:** Footer, dark sections, premium blocks, subtle nav border when scrolled.
- **Tokens:**  
  - `brand-deep` → `#1a0808` (top of gradient)  
  - `brand-deep-mid` → `#0f0404`  
  - `brand-deep-dark` → `#0a0202` (bottom)
- **Tailwind:** `bg-brand-deep`, `from-brand-deep`, `to-brand-deep-dark`, etc.
- **Text on brand-deep:** White or `white/70` for body, `white` for headings.

## Recommendation
- **Primary red** = action and emphasis (buttons, links, key UI).
- **Brand deep** = trust and depth (footer, optional dark strips or “premium” sections).
- **White / light grey** = main content and clarity.
- Keep accents and glows in the same red family so it all feels one brand.

No black: use brand-deep instead of `#000` for dark areas.
