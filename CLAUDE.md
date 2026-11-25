# CLAUDE.md — anyimmi-website-frontend (Bundle Marketing Site)

> **Ownership:** Adsol Digital.
> **Status:** **Superseded — content merged into `~/code/anyimmi-platform`** (lives there as `apps/marketing-bundle/`). Don't ship new features from this repo. Treat as a public-mirror snapshot used for design-tool work (Stitch / Framer / v0). **Launch target for the merged build: 2026-07-01 (Canada Day).**

## What this site sells

Direct-response marketing for the AnyImmi Bundle — the goldmine of Canadian immigration assets for RCICs.

| Tier | Price | What's in |
|---|---|---|
| **THE ESSENTIALS** | **$197** | 305 production-ready immigration assets · 27 categories · 4 free AI tools · lifetime updates · 30-day refund |
| **THE FIRM** | **$397** | Everything + custom branding on every asset + 50 social designs + 1-3 day delivery |
| **THE FOUNDER ★** | **$697** | Everything + done-for-you website + Million Dollar Vault + 90-day trial of AI Tools + CRM + DOSSIAR + 1-on-1 onboarding + VIP Slack + lifetime price lock. **Capped at 500 seats.** |

Order-bump upsells at checkout: +$200 custom branding (Essentials) · +$300 90-day AI/CRM/DOSSIAR trial.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.1.6 (App Router) |
| Language | TypeScript 5 |
| React | 19.2.3 |
| Styling | Tailwind CSS 4 (`@tailwindcss/postcss`) |
| Icons | `lucide-react` |
| Dev port | **3030** (`next dev -p 3030`) |

No DB, no auth, no API routes in this repo — it's marketing-only. All checkout/data goes to the backend repo or directly to Stripe.

## Pages

| Route | What |
|---|---|
| `/` | Primary landing — clean Stripe/Notion/Ramp style, 20 sections, direct-response sales pitch |
| `/variant` | Alternative landing — Turnkey Investment Club style (dark navy + gold, editorial, membership feel) |

## Repo layout

```
src/
├── app/              # Next App Router (mostly marketing pages)
├── components/
├── data/             # Static content arrays (testimonials, assets, FAQ, etc.)
└── lib/
```

## Commands

```bash
pnpm dev          # Next 16 on :3030, Turbopack default
pnpm build
pnpm start        # :3030
pnpm lint
pnpm type-check
```

## Conventions

- Server Components default; client only for interactivity
- No emojis in product UI; `lucide-react` for icons
- Design tokens: warm off-white `#F6F4EF`, navy `#1E3A5F`, indigo `#5E54FF`, DRAFT orange `#F28C28` (per AnyImmi DESIGN.md at `~/Downloads/AnyImmi/DESIGN.md`)
- Fonts: **Geist** (product) / **Fraunces** (marketing H1 only) / **Geist Mono** (machine data)

## Don't touch

- Don't drift this from `anyimmi-platform/apps/marketing-bundle/` without syncing both directions
- Don't add a backend in this repo — checkout/lead routes belong in `anyimmi-website-backend`
- Don't change tier prices ($197/$397/$697) without confirming with the platform repo (canonical pricing lives there)
