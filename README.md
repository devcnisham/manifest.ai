# Manifest AI

A pre-launch Next.js App Router site for Manifest AI. The current visual direction is inspired by the supplied justski.it reference: a cinematic dark hero, original cinematic brand artwork, floating pill navigation, self-hosted Inter Tight typography, and large editorial sections. The app preview remains removed. Individual, Teams, Students, and Hackathons are proposed pricing audiences; all product capabilities are labeled as planned.

## Stack

Next.js 16, React, TypeScript, Tailwind CSS 4, shadcn-style Button (Radix Slot + CVA), lucide-react, Framer Motion, `@supabase/ssr`, Supabase Auth and PostgreSQL. Exact dependency versions and `package-lock.json` are included. Node.js 22 LTS or newer is recommended.

## Run locally

```sh
cd ~/Desktop/manifest-ai-agent
npm ci
cp .env.example .env.local
npm run dev -- --port 3001
```

Open http://localhost:3001. The landing page works without Supabase. Forms show an honest unavailable message until configured. No credentials are included, and the application never simulates a successful signup.

## Create and configure Supabase

1. Create a project at https://supabase.com/dashboard. Use a dedicated project, not an unrelated existing database.
2. Run `supabase/schema.sql` in that project's SQL Editor. It creates the `waitlist` table, constraints, unique email index, and RLS. The `anon` and `authenticated` roles have no privileges or policies. Only the server's secret/service-role client can insert; browsers cannot read the table.
3. Fill `.env.local` from Project Settings → API / Connect:
   - `NEXT_PUBLIC_SUPABASE_URL`: your project's HTTPS URL.
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`: public `sb_publishable_...` key (a legacy anon key also works).
   - `SUPABASE_SECRET_KEY`: server-only `sb_secret_...` key (or legacy service-role key). **Never prefix this with `NEXT_PUBLIC_`, put it in client components, or commit it.**
   - `NEXT_PUBLIC_SITE_URL`: the exact public origin, e.g. `http://localhost:3001` locally. Required for correct production sitemap and social metadata.
4. Under Authentication → Providers, enable Email and **Confirm email**. Set the minimum password length to at least 8.
5. Under Authentication → URL Configuration, set Site URL and allow these redirect URLs for each environment:
   - `http://localhost:3001/auth/callback`
   - `http://localhost:3001/auth/callback?next=/reset-password`
   - `https://YOUR-DOMAIN/auth/callback`
   - `https://YOUR-DOMAIN/auth/callback?next=/reset-password`
6. Configure custom SMTP before public signup. Supabase's development mail service is limited; see https://supabase.com/docs/guides/auth/auth-smtp.
7. Restart Next.js after changing environment variables. Public environment variables are embedded during the production build.

### Email confirmations and recovery

The standard Supabase confirmation links use PKCE and return through `/auth/callback`, which exchanges the code for an SSR cookie session. Open the email link in the same browser where signup/recovery started.

For links that work across browsers/devices, customize Supabase email templates to use token hashes:

Confirmation template link:

```html
<a href="{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email"
  >Confirm email</a
>
```

Recovery template link:

```html
<a href="{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=recovery"
  >Reset password</a
>
```

Set Site URL to the current environment when using these templates. Auth tokens are verified by Supabase, recovery opens `/reset-password`, and other successful confirmations open `/dashboard`. Invalid links lead to a clear sign-in notice. Redirect destinations are allowlisted; arbitrary external URLs are rejected.

### Optional Google sign-in

The Google button is implemented and hidden until configured. Enable Google in Supabase Auth, configure the OAuth client credentials and the Supabase callback URL in Google Cloud, then set `NEXT_PUBLIC_GOOGLE_AUTH_ENABLED=true` and rebuild. No Google secrets belong in this app's public environment variables.

## Routes

- `/`: full landing page, two waitlist forms, native keyboard-accessible FAQ.
- `POST /api/waitlist`: client/server validation, lowercase email, bounded body (8 KiB), bounded idea (1,000 characters), same-origin browser submissions, five attempts per IP per minute, duplicate handling, and safe errors.
- `/signup`, `/signin`, `/forgot-password`, `/reset-password`: Supabase email/password flows and optional Google OAuth.
- `/auth/callback`, `/auth/confirm`: PKCE exchange and token-hash verification.
- `/dashboard`: verified-email-only early-access placeholder and sign out. `proxy.ts` is the Next.js 16 name for middleware; it refreshes cookies and redirects signed-out users. The page also independently checks the user with Supabase. Private responses are not cached.
- `/privacy`, `/terms`: explicitly labeled pre-launch placeholders.
- `/sitemap.xml`, `/robots.txt`, `/opengraph-image`, `/icon.svg`: SEO and social assets.

## Validation

```sh
npm run test
npm run lint
npm run build
npm start -- --port 3001
```

The unit tests cover validation, normalization, idea length, per-IP isolation/expiry/capacity, safe auth redirects, and useful auth errors. Each requested stage passed lint and production build during implementation. Browser QA checks the reference-matched landing page and responsive layout.

With your configured Supabase project, verify the actual integration:

1. Submit a new email, then query `select email, idea, created_at from public.waitlist order by created_at desc;` in the SQL Editor. Check lowercase storage.
2. Submit the same email from the other form; expect “You're already on the list.” Verify there is only one row.
3. Try an invalid email, an oversized idea/body, and more than five submissions in one minute; expect validation errors or HTTP 429 with Retry-After. GET on the insert endpoint should be 405.
4. Using the public key, verify the waitlist cannot be selected or directly inserted.
5. Sign up, confirm email, sign in, visit dashboard, sign out, then visit dashboard again; expect a redirect to sign-in.
6. Request a password reset, follow the emailed link, set a new password, and sign in with it. Also verify an expired link gives the recoverable error state.
7. Test Google if enabled, mobile menu, keyboard navigation, FAQ, system theme, and theme toggle.

**Not verified without project credentials:** live database inserts/duplicates/RLS, delivered confirmation/recovery emails, authenticated dashboard/sign-out, and Google OAuth. No production deployment has been made.

## Deploy to Vercel

1. Commit the source to your own Git repository. `.env.local`, `.next`, and `node_modules` are ignored. Commit `.env.example` and the lockfile.
2. Import the repository into Vercel; choose the Next.js preset. Use `npm ci`, `npm run build`, and the default output directory.
3. Add all `.env.example` variables to the intended Vercel environments. Set `NEXT_PUBLIC_SITE_URL` to the actual HTTPS production origin and keep `SUPABASE_SECRET_KEY` server-only.
4. Update Supabase Site URL and the allowed callback URLs for your production domain. Add intentional preview domains separately if using preview Auth.
5. Deploy and run the integration checks above against that domain.

## Remaining launch tasks

- Supply Supabase credentials, run the schema, configure SMTP, and verify the live flows above.
- Replace Privacy/Terms placeholders with final reviewed text before collecting real public signups.
- `lib/analytics.ts` contains the requested no-op `trackEvent("waitlist_signup")` hook. Connect a consent-aware provider if desired; don't send emails or project ideas as event properties.
- Basic rate limiting is process-local. Vercel instances do not share memory and deployments reset limits. Add a shared Redis limiter or Vercel WAF rule for robust protection before a high-traffic launch. Vercel's trusted forwarding header is used in production; configure trusted proxy headers on other hosts.
- Enable Google OAuth only when its provider is configured.
- The favicon and social card are starter brand assets. Product integrations, pricing, billing, and actual project-building features are intentionally outside this pre-launch site.

## Landing page refinement

The marketing page includes a clearer product story, an editorial build-to-launch path, a three-step workflow, six planned capabilities, a clearly illustrative readiness assessment, grouped planned integrations, builder use cases, explicit early-access expectations, eight FAQ answers, and a full navigation footer. The mock app preview remains removed. The visual system keeps the reference-inspired soft colors and self-hosted typography with consistent responsive spacing and system-aware light/dark mode.

Pricing presents proposed Individual, Teams, Students, and Hackathons plans with amounts and billing terms coming soon. All plan buttons join the waitlist; there is no checkout or paid-plan selection. Final pricing and limits remain to be decided.

## Cinematic design direction

`components/cinematic-hero.tsx` and `app/cinematic.css` contain the reference-inspired hero and visual layer. The hero and editorial illustration are original generated images stored as optimized WebP files under `public/images/`; prompts and provenance are in `docs/generated-visuals.md`. There are no app screenshots. The existing waitlist, account routes, and all four proposed plan cards remain. Motion respects reduced-motion preferences.

The optional idea fields, visible hero heading block, and footer Back to top link were removed following annotated feedback. The hero retains a screen-reader heading. Scroll reveals, staggered pricing cards, image parallax, hover/focus feedback, and button press states respect reduced-motion preferences. The waitlist forms collect only email; the API still accepts an optional idea for compatibility.
