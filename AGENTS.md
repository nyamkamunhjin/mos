## repos

Two repos in `../mos/`:
- `mos-frontend` — Next.js 16 App Router + React 19 + Tailwind v4 + shadcn/ui
- `mos-api` — Strapi 5 CMS (SQLite default; Strapi Cloud in prod)

Frontend fetches bird data from Strapi via REST API (`lib/strapi.ts`).

## setup

### mos-frontend
```
pnpm install
pnpm dev           # localhost:3000
pnpm build         # static + SSG + dynamic routes
pnpm lint          # ESLint flat config
pnpm add <pkg>     # install (pnpm, not npm)
```
Env vars (`.env.local`):
```
STRAPI_URL=<strapi-cloud-url>
STRAPI_API_TOKEN=<full-access-token>
```

### mos-api
```
npm install
cp .env.example .env   # generate fresh APP_KEYS/JWT_SECRET/SALTS
npm run develop         # localhost:1337/admin — create admin on first visit
npm run seed:example    # optional: loads placeholder blog seed data
npm run build           # admin panel build
```
API runs on port 1337. DB at `.tmp/data.db` (SQLite). Create content types in Admin → Content-Type Builder.

## routes (mos-frontend)

```
/                          → landing page (9 section components)
/introduction/overview     → MOS overview, research projects, partners
/introduction/message      → Director's letter
/introduction/members      → team bios
/birds                     → Strapi bird listing (search, family, status filters)
/birds/[slug]              → species detail page
```

## data flow

- `lib/strapi.ts` — REST client using native `fetch`, ISR (`revalidate: 3600`), Strapi v5 flat format
- `lib/types/bird.ts` — `StrapiBird`, `StrapiMedia`, `StrapiFamily`, `BirdFilters`
- `/birds` is dynamic (searchParams), `/birds/[slug]` is SSG via `generateStaticParams`
- No Bird/Family content types exist in mos-api yet — frontend types are ahead of backend

## design

Editorial/magazine aesthetic.

**Palette** (Tailwind v4 `@theme` in `globals.css`):
- `mos-navy` `#001f6e` — titles, buttons, hero overlays
- `mos-blue` `#1a368d` — secondary accent
- `mos-accent` `#4a1800` — burnt umber section labels
- `mos-surface` `#faf8ff` — page background
- `mos-section` `#f4f2fb` — alternate bg
- `mos-periwinkle` `#dce1ff` — decorative blur orbs
- `mos-text` `#1a1b21`, `mos-muted` `#444652`, `mos-border` `#c5c5d4`

**Typography**: Newsreader (serif) for headings, Manrope (sans-serif) for body. Loaded via `<link>` in `layout.tsx` (Google Fonts).

**Patterns**:
- `py-24 md:py-28` vertical rhythm
- Alternating `bg-mos-surface` / `bg-mos-section`
- Blur orbs (`rounded-full blur-3xl opacity-[0.05]`)
- `rounded-2xl` cards with `border-mos-border/30`
- `tracking-widest text-xs uppercase font-bold` section eyebrows (accent color)
- Fixed nav `bg-black/20 backdrop-blur-sm`, mobile slide-in from right `w-80`

## graphify

Knowledge graph at `graphify-out/`. Run `graphify update .` after edits.
When user types `/graphify`, invoke skill before anything else.
Use `graphify query "..."`, `graphify path "A" "B"`, `graphify explain "..."`.
Read `graphify-out/wiki/index.md` for navigation, `GRAPH_REPORT.md` for architecture.

## key facts

- Font `[Newsreader,serif]` and `[Manrope,sans-serif]` referenced via inline `font-*` classes directly
- `import Image from 'next/image'` — all remote hosts allowed in `next.config.mjs`
- Path alias `@/*` maps to root
- shadcn/ui components in `components/ui/`. Add with `npx shadcn@latest add <name>`
- Mobile images use `aspect-[3/4]` for portrait member photos
- Bird placeholder images in `public/birds/`, landing images in `public/test-landing/`
- `public/members/` has 10 member photos; profiles w/o photos use placeholder.svg
