# AnyImmi Bundle — Marketing Site

The goldmine of Canadian immigration assets for RCICs, sold one-time as three tiers: **$197 / $397 / $697**.

This repo is a standalone mirror of the marketing site living at `apps/marketing-bundle/` in the private monorepo. Kept public so design tools (Google Stitch, Framer, v0) can consume it for independent design passes.

---

## What this site sells

| Tier | Price | What's in |
|---|---|---|
| **THE ESSENTIALS** | **$197** | 305 production-ready immigration assets · 27 categories · 4 free AI tools · lifetime updates · 30-day refund |
| **THE FIRM** | **$397** | Everything + custom branding on every asset + 50 social designs + 1-3 day delivery |
| **THE FOUNDER ★** | **$697** | Everything + done-for-you website + Million Dollar Vault + 90-day trial of AI Tools + CRM + DOSSIAR + 1-on-1 onboarding + VIP Slack + lifetime price lock |

**Order-bump upsells at checkout:**
- Add custom branding — $200 (Essentials buyers)
- Add 90-day trial of AI + CRM + DOSSIAR — $300 (Essentials + Firm buyers)

**Launching July 1, 2026 — Canada Day.** Founder-tier is capped at 500 seats. Current count: 287 / 500.

---

## Pages

| Route | What |
|---|---|
| `/` | Primary landing — clean Stripe/Notion/Ramp style, 20 sections, direct-response sales pitch |
| `/variant` | Alternative landing — Turnkey Investment Club style (dark navy + gold, editorial, membership feel) |
| `/categories` | Gallery of all 27 categories |
| `/categories/[slug]` | Category detail with Gumroad-style blurred asset previews |
| `/preview` | Curated random glimpse of ~36 blurred samples across all categories |
| `/pricing` | Dedicated pricing page (full-width Essentials + 2 upsell cards) |
| `/thank-you` | Post-checkout "Welcome inside" page with 90-day trial countdown |
| `/about`, `/contact`, `/faq`, `/blog` | Standard content pages |

---

## Stack

- **Next.js 16.1.6** (App Router, Turbopack)
- **React 19.2.3**
- **TypeScript 5** strict
- **Tailwind CSS 4** (native, no trexa vendor CSS)
- **lucide-react** for icons
- **Fraunces** serif font (scoped to `/variant`)
- **Inter** sans-serif as primary

No jQuery. No legacy vendor JS. Sub-1-second page loads.

---

## Run locally

```bash
npm install
npm run dev
# → http://localhost:3030
```

Requires backend running at `http://localhost:5050` (see companion repo `anyimmi-website-backend`). If backend is offline, every page gracefully falls back to hand-written defaults so visual design passes keep working.

Environment:
- `NEXT_PUBLIC_API_URL` — backend URL (default `http://localhost:5050`)
- `NEXT_PUBLIC_PRODUCT_URL_AI_TOOLS` — AI Portal site URL
- `NEXT_PUBLIC_PRODUCT_URL_CRM` — CRM site URL
- `NEXT_PUBLIC_PRODUCT_URL_DOSSIAR` — DOSSIAR site URL

---

## Design system

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#FAFAF7` | Warm off-white page bg |
| `--color-text` | `#0F172A` | Primary navy text |
| `--color-accent` | `#4F46E5` | Deep indigo CTAs, links |
| `--color-gold` | `#D4AF37` | Vault, Founder accents, luxury cues |
| `--color-success` | `#10B981` | Guarantee checkmarks |
| `--color-danger` | `#DC2626` | Canada Day banner only |
| Dark variant (`/variant`) | `#0A0E1A` | Turnkey-style deep navy bg |

**Typography:**
- Primary: **Inter** 400 / 500 / 700 / 800
- Display (variant): **Fraunces** 500 / 600 / 700 / 800
- Mono: JetBrains Mono

**Layout:**
- Max content width 1280px
- Section padding 96px desktop / 48px mobile
- Rounded 16px on cards, 8px on buttons
- No animations (per user spec — clean and fast)

---

## Language direction

Always use **"assets"** not "files". The bundle is framed as "the goldmine of Canadian immigration assets" — templates, playbooks, vault, arsenal. Avoid generic SaaS vocabulary like "downloads", "templates" (except where unavoidable), "digital products".

---

## Backend API contract

All data is fetched from a companion Express backend. See `src/lib/api.ts` for the typed client. Endpoints:

| Method | Path | Returns |
|---|---|---|
| GET | `/api/payments/bundle-plans` | 3 tiers (Essentials $197, Firm $397, Founder $697) |
| GET | `/api/assets/categories` | 26 categories with asset counts and locked flags |
| GET | `/api/content/categories/:slug/items` | Blurred asset list for a category |
| GET | `/api/content/items/:id` | Single asset detail |
| GET | `/api/content/testimonials` | 12 real RCIC quotes |
| GET | `/api/content/founder-counter` | `{current, target, remaining}` — 287/500 |
| GET | `/api/content/bonus-countdown` | Expiry timestamp for pre-launch bonuses |
| POST | `/api/payments/bundle-checkout` | Creates Stripe checkout session |

---

## For design tools (Google Stitch, v0, Framer)

This repo is a clean, buildable reference for agents or humans designing variants. Key things to preserve when redesigning:

1. **Hero headline promise** — "Look like a $50,000/month Practice. For $197."
2. **Goldmine framing** — "goldmine of Canadian immigration assets"
3. **Pricing architecture** — full-width $197 hero card + two smaller $397 / $697 upsell cards side by side
4. **Blurred asset previews** — Gumroad-style, lock icon overlay, "Unlock at $197" chip
5. **Canada Day launch banner** at top (July 1, 2026)
6. **Founder counter scarcity** (287 / 500)
7. **Clean, fast, no animations** — sub-1-second page loads

For the complete design brief (every section, copy, visual direction, what NOT to do), see `GOOGLE_STITCH_BRIEF.md` in the monorepo's `~/Downloads/AnyImmi/` folder.

---

## License

Proprietary. © 2026 AnyImmi.
