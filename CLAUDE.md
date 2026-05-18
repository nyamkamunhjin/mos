# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website for the Mongolian Ornithological Society (MOS) — a bird conservation organization. Built with Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, and shadcn/ui.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npm start` — Serve production build

## Architecture

- **Next.js App Router** with pages under `app/`. Routes: `/` (landing), `/overview`, `/members`, `/message` (director's message).
- **Layout**: `app/layout.tsx` wraps all pages with `ClientHeader` and `Footer`. The header switches between absolute/static positioning based on route (absolute on homepage).
- **Component organization**:
  - `components/ui/` — shadcn/ui primitives (Button, Card, Carousel, Input, NavigationMenu, Icons)
  - `components/` — shared layout components (Header, Footer)
  - `app/components/` — app-specific client components (e.g., `client-header.tsx`)
- **Path aliases**: `@/*` maps to the project root (e.g., `@/components`, `@/lib`).
- **Styling**: Tailwind CSS with CSS variables for theming (`hsl(var(--*))` pattern from shadcn/ui). Responsive design is required — use mobile-first breakpoints (`sm:`, `md:`, `lg:`).
- **shadcn/ui**: Configured via `components.json`. Add new components with `npx shadcn@latest add <component>`. Uses Radix UI primitives, `class-variance-authority`, and `lucide-react` icons.
- **Fonts**: Local Geist Sans and Geist Mono fonts loaded via `next/font/local`.
- **Images**: `next/image` with all remote hostnames allowed. Static bird images in `public/birds/`.
