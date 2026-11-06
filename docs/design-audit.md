# Manifest AI design audit and fixes

Applied the frontend-design skill to the landing page in `/Users/nishhaamm/Desktop/manifest-ai-agent`.

## Direction

Pitch-black surfaces, silver typography, warm accents, restrained motion, MacBook brand photography, and a shorter product narrative. Earlier removed app previews, hero heading block, optional idea fields, Back to top, and decorative small labels remain removed.

## Fixes

- Replaced competing legacy landing styles with an isolated studio layout.
- Consolidated duplicate sections and simplified capability descriptions.
- Removed decorative microcopy; increased supporting text for readability.
- Made navigation and form controls easier to operate on touch screens.
- Aligned both MacBook images to the same geometric visual identity.
- Simplified the proposed plan cards, gave each audience equal visual weight, and kept one shared pricing disclaimer.
- Retained visible keyboard focus, responsive navigation, native FAQ disclosures, and reduced-motion handling.
- Preserved waitlist submission, account routes, legal links, and pre-launch availability disclosures.

## Image update

Built-in imagegen edit mode; the original image remains intact.

Final asset: `/Users/nishhaamm/Desktop/manifest-ai-agent/public/images/manifest-macbook-studio-v2.webp`

Prompt: Image 1 is the dark MacBook studio photo edit target. Image 2 is the workspace brand reference. Change only the laptop screen artwork in image 1. Replace the serif M, orbital ring, and widely tracked serif Manifest wordmark with the bold angular geometric ivory M and compact sans-serif Manifest wordmark shown in image 2. Keep laptop, keyboard, framing, desk, background, lighting, reflections, and physical details unchanged. Screen remains black with only the geometric M and Manifest below. No serif, orbital ring, app interface, extra words, or watermark. Match perspective and screen illumination.

## Final hero and brand strips

The MacBook image fills the opening viewport behind the top navigation. One unboxed sliding strip shows Claude, Codex, Gemini, Cursor, Windsurf, GitHub Copilot, and v0, with local vector symbols and wordmarks, hover pause, and a static reduced-motion layout. These identify the AI-tool ecosystem; they do not announce partnerships or live integrations.

Vector sources: [LobeHub Icons](https://github.com/lobehub/lobe-icons/tree/master/packages/static-svg/icons), distributed under the [MIT license](https://github.com/lobehub/lobe-icons/blob/master/LICENSE). Brand trademarks belong to their respective owners. The license is included at `public/brands/LICENSE-lobe-icons.txt`.
