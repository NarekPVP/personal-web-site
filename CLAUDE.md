# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Narek Hovhannisyan (full-stack developer, Yerevan, Armenia). Displays bio, projects, and contact info with bilingual support (English/Armenian) and light/dark theming.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui (Radix UI primitives)
- **i18n**: next-intl
- **Theming**: next-themes
- **Package manager**: pnpm

## Key Directories

| Path | Purpose |
|---|---|
| `src/app/[locale]/` | Pages — all routes live under the locale segment |
| `src/components/ui/` | shadcn/ui components (generated, avoid manual edits) |
| `src/components/` | Feature components (welcome, project-card, settings-sheet, etc.) |
| `src/config/` | Central config: site info (`site.ts`), locales (`locale.ts`), nav icons (`navigation.tsx`) |
| `src/data/` | Static content: `projects.ts` (typed `TProject[]`), `posts.ts` (currently empty) |
| `src/layouts/` | `header.tsx` (fixed top), `footer.tsx` (fixed bottom) |
| `src/i18n/` | next-intl wiring: `routing.ts` and `request.ts` |
| `messages/` | Translation JSON files — `en.json` and `am.json` |

## Build & Dev Commands

```bash
pnpm dev        # Start dev server (http://localhost:3000)
pnpm build      # Production build
pnpm start      # Run production build locally
pnpm lint       # ESLint via next lint
```

There are no tests in this project.

## Additional Documentation

Check these when relevant:

- [`.claude/docs/architectural_patterns.md`](.claude/docs/architectural_patterns.md) — i18n patterns, locale cookie, data layer, layout constraints, component conventions
