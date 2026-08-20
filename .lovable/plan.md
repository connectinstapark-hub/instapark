# InstaPark Marketing Website

A single-page B2B SaaS marketing site for InstaPark, a multi-tenant valet management platform for hotels, event grounds, and commercial venues. Public marketing only — no login or dashboard.

## Brand direction

- Deep purple `#3F0163` for headers, dark sections, nav; gold `#FCBF00` reserved for CTAs, icons, stat callouts and active states (never long body text on purple).
- Cream `#FAF7F2` section backgrounds to break up white; near-black purple-tinted `#1A1025` body text.
- Geometric sans headlines (Space Grotesk) with Inter body copy, loaded via a font link in the app shell.
- Folded-ribbon motif reused as angular clipped section edges, diagonal dividers and connector lines in the workflow timeline.
- All colors registered as semantic design tokens so nothing is hardcoded in components.

## Sections (top to bottom, one page)

1. Sticky nav — logo left, links (Platform, How It Works, Interfaces, Pricing, Contact), gold "Book a Demo" button. Mobile: slide-out menu.
2. Hero — real-time valet ops headline, differentiator subheadline, gold "Book a Demo" + outlined "See How It Works", stylized illustrated composite mockup (driver app, guest QR pass, live map) built in CSS/SVG, plus use-case tag row.
3. Problem vs. InstaPark — 3 contrast cards, manual paper ticketing against real-time digital intake.
4. Platform Overview — six interface cards (Superadmin Web, Provider Web, Provider & Admin Mobile, Supervisor Mobile, Driver Mobile, Guest Web) each with icon, role label, bullets; expand-on-click for extra detail.
5. How It Works — 5-phase numbered stepper (Setup, Digital Check-In, Live Tracking, Retrieval, Audit & Analytics) linked by a ribbon-fold line.
6. Differentiators — 4 tiles: GPS spot tagging, driver tracking, condition photo logs, override workflows.
7. Who It's For — 4 segment cards with pain-point one-liners.
8. Social proof — placeholder logo row, testimonial block, 3 metric callouts, clearly labeled as sample content.
9. Pricing teaser — Standard / Enterprise / Multi-Venue, "Contact Sales" CTAs, no fixed prices.
10. Final CTA — full-width purple band with gold CTA and inline email capture.
11. Footer — logo, tagline, Product / Company / Legal / Contact link groups, social icons, copyright.

Contact/demo form: name, company, email, venue type, message. Validated client-side with a success state; front-end only, ready to wire to a backend later.

## Logo

You'll upload the folded-ribbon "P" mark. Until then the navbar, hero and footer use a styled "InstaPark" wordmark placeholder in the brand type; swapping in the real asset is a one-line change once uploaded.

## Technical notes

- TanStack Start route at `/` (replacing the placeholder index), section components under `src/components/`.
- Tailwind v4 tokens in `src/styles.css`; shadcn primitives for buttons, cards, accordion, form inputs.
- Subtle scroll-reveal animations via an intersection-observer hook, respecting reduced-motion.
- SEO: unique title/description/og/twitter tags in the route `head()`, single H1, semantic sections, alt text.
- Mobile-first responsive across all sections.
