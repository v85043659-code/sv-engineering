# Design Brief

**SV Engineering** — Industrial B2B supplier of pneumatic and automation components. Clean, professional, grid-based layout prioritizes product discovery and lead generation via quote requests. Tone: trustworthy, efficient, approachable.

## Tone & Differentiation
Industrial minimalism with strategic blue accents. Precision and reliability drive every choice. Low chroma, high contrast. Product cards are focal—image-driven, specs visible. No transaction friction; "Request Quote" is the primary interaction. Efficient, not cutting-edge.

## Palette
| Role | OKLCH (Light) | OKLCH (Dark) | Usage |
|------|---------------|-------------|-------|
| Primary | 0.6 0.18 260 | 0.72 0.20 260 | Professional blue; CTA buttons, links, highlights |
| Secondary | 0.78 0 0 | 0.25 0 0 | Warm grey; accents, dividers, card backgrounds |
| Background | 0.99 0 0 | 0.12 0 0 | White (light), near-black (dark) |
| Foreground | 0.2 0 0 | 0.96 0 0 | Dark grey (light), light grey (dark); body text |
| Accent | 0.58 0.22 260 | 0.70 0.22 260 | Deeper blue for hover states, secondary CTAs |
| Border | 0.92 0 0 | 0.25 0 0 | Subtle dividers; grid separators |
| Muted | 0.94 0 0 | 0.22 0 0 | Disabled states, secondary labels |

## Typography
| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Display | General Sans | 700–800 | Headlines, company name, section titles |
| Body | DM Sans | 400–600 | Paragraphs, product descriptions, UI labels |
| Mono | Geist Mono | 400–500 | Product specs, technical details, codes |

Type scale: 12px, 14px, 16px, 18px, 20px, 24px, 32px, 48px.

## Structural Zones
| Zone | Background | Border | Purpose |
|------|------------|--------|---------|
| Header/Nav | bg-background | border-b border-border | Clean horizontal divider; logo, nav links, contact CTA |
| Hero | bg-background | none | Company intro, tagline, primary "Request Quote" CTA |
| Product Grid | bg-background | none | 6–8 product cards (responsive: 1–2 cols mobile, 2–3 tablet, 3–4 desktop) |
| Product Card | bg-card | border border-border | Image, category badge, specs, "Request Quote" button |
| Trust Section | bg-secondary/5 | none | Four badges: Quality, Fast Delivery, Pricing, Since 2021 |
| Footer | bg-secondary/10 | border-t border-border | Contact info, WhatsApp link, copyright |

## Spacing & Rhythm
Generous whitespace. Grid gap 1.5rem (24px) desktop, 1rem mobile. Card padding 1.5rem. Section padding 3rem vertical. Hierarchy via size, weight, and negative space—not color.

## Component Patterns
- **CTA Button**: bg-primary text-primary-foreground, rounded-sm, 12px padding, font-600. Hover: bg-accent. Focus: ring-2 ring-ring.
- **Product Card**: flex column, bg-card with subtle shadow, image placeholder (aspect 4:3), specs in mono 12px, card-foreground text.
- **Badge**: inline-block, bg-muted text-muted-foreground, rounded-sm, px-2 py-1, font-mono 11px.
- **Link**: text-primary underline, hover:text-accent no-underline transition-smooth.

## Motion
Minimal, purposeful. Transitions: 0.3s cubic-bezier(0.4, 0, 0.2, 1). Use on hover states (button color shift, link underline), focus rings, and card elevation on hover. No animation loops or decorative flourishes.

## Constraints
- Never use raw color literals; all colors via CSS variables.
- Maintain AA+ contrast in both light and dark modes.
- No decoration beyond grid structure and product imagery.
- Mobile-first: stacked layouts < 640px, grid columns expand at breakpoints.
- Fast-loading: optimize images, defer non-critical scripts.
- Lead generation mindset: every page ends with contact CTA or "Request Quote" button.

## Signature Detail
Product cards anchor the experience. Each displays a 4:3 image, category badge, inline specs (pressure, material, size), and a prominent "Request Quote" button. The card hierarchy guides users from discovery to action without decision paralysis.
