# Manifest AI — launch studio redesign

## Purpose

Make Manifest immediately understandable to people building with AI coding tools and invite them to join the early-access waitlist. Manifest is in development: it helps connect project scope, plans, checks, and launch preparation around implementation tools.

## Approved direction

The user selected a mix of all three directions, then requested pitch black throughout. The final surface palette is #000000 with #0D0D0D cards, silver type, and restrained copper accents. Structural contrast comes from scale and imagery rather than light backgrounds. Original direction: cinematic imagery, bright editorial sections, and the focused launch-studio structure. Use fixed intentional section palettes without a landing-page theme toggle. Reuse locally bundled Inter Tight for display and Geist for body.

A calm, premium launch studio. Replace the long sequence of similar dark cards with deliberate changes in scale: a contained photographic opening, a clear editorial explanation, a compact process, a few expressive capability panels, and a focused closing invitation.

Palette: midnight #101927, ink #080D15, silver #E5EAF0, slate #93A0B2, copper #CF9C78, blue #8AA9C6. Copper is reserved for workflow connections and selected interaction states. It is not an all-page glow.

Typography: a locally bundled condensed sans-serif display treatment for large section headings, a readable sans-serif for body and controls, and the existing monospace utility face for workflow labels. Use available local font assets; no runtime external-font dependency. Headings carry concise product meaning. Captions are restrained.

The signature is one continuous copper path connecting the three real stages of a launch: scope, build direction, and release preparation. It belongs to the process section rather than becoming an ornamental motif everywhere.

## Structure

1. Persistent compact navigation with brand, Features, How it works, Pricing, FAQ, sign-in, and waitlist action. Accessible mobile menu with the same destinations.
2. A contained visual hero using the existing geometric Manifest artwork and a single waitlist action. Keep the previously removed visible hero heading block removed; retain a meaningful screen-reader H1. Avoid the current full-height close crop and competing navigation dock.
3. A short product introduction explaining what Manifest contributes around AI coding tools. Keep planned tool compatibility clearly labeled.
4. Three connected process steps: define a focused first release, carry direction into implementation, and prepare for launch. Each step has a concrete intended output.
5. Four capability groups: scope and backlog, architecture and specs, task handoffs, and security and launch preparation. These consolidate overlapping content while retaining the substance of the current planned capabilities.
6. A MacBook editorial spread using the existing generated images. Prefer the geometric-mark workspace photo for the primary image to match the real brand. Keep secondary photography subordinate. No fabricated dashboard, app interface, or product screenshot.
7. Four compact proposed plans: Individual, Teams, Students, Hackathons. Preserve audience distinctions, pricing-coming-soon status, and waitlist actions. No invented amounts, usage limits, checkout, or recommendations implying finalized offers.
8. Five concise FAQ items covering product purpose, coding tools, availability, pricing, and early-access expectations.
9. One primary closing email-only waitlist form with clear loading, error, success, and duplicate states. Existing anchor destinations continue to work.
10. Compact footer with sign-in, privacy, terms, and development status. Keep Back to top removed.

## Motion and interaction

Use one coordinated opening reveal and small staggered reveals in the process. Restrained image zoom and button/card hover states. No scroll hijacking or endless marquee. Reduced-motion users receive static imagery and immediate readable content. Keyboard focus remains visible. Forms and mobile menus remain usable without pointer hover.

## Implementation boundaries

Rebuild the landing page composition and its scoped styles. Split the page into a few focused components for navigation, visual opening, process, capabilities, plans, and FAQ where helpful. Reuse the existing waitlist submission logic and server endpoint. Preserve auth routes, dashboard protection, privacy and terms routes, metadata, and database behavior.

Remove obsolete landing style imports from the redesigned page so legacy selectors do not compete with the new design. Keep shared styles needed by account and legal pages. Theme controls must keep working where retained; the landing design needs intentional light and dark treatments if a theme switch is exposed.

## Verification

Run lint and the production build in the canonical Desktop project. Run existing tests if shared behavior changes. Inspect desktop and mobile layouts, image loading, navigation destinations, FAQ disclosure behavior, mobile menu, focus states, form validation, and reduced-motion handling. Keep the local page on port 3001 current with the final build. Supabase credentials are still required to verify live waitlist persistence and account emails.

## Alternatives considered

- Bright editorial: pale blue surfaces and expansive type. More approachable, but a greater departure from the user's cinematic references and existing photography.
- Cinematic: fullscreen photography and more scroll motion. Strong first impression, but competes with clear product explanation and recreates the visual-heavy opening the user has already revised.

## Scope review

This is a landing-page redesign. It does not add working agent functionality, finalized pricing, invented proof, or a new backend. Earlier requested removals remain removed. Generated photographs are conceptual brand imagery rather than evidence of a released product.
