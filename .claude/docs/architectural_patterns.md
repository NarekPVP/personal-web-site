# Architectural Patterns

## i18n — Two-Layer Localisation

All UI strings use next-intl `useTranslations()` keyed against `messages/en.json` and `messages/am.json`. Project-specific content (titles, descriptions) is handled differently: `TProject` in `src/data/projects.ts:3-15` carries parallel `contentEN`/`contentAM` and `headerLineEN`/`headerLineAM` fields. Components choose the right field at render time via `useCurrentLangCode()` (`src/hooks/useCurrentLangCode.ts`).

**Never put project/post content in the messages JSON** — that's only for UI chrome strings.

## Locale Detection via Cookie (no URL prefix)

The middleware (`src/middleware.ts`) sets `localePrefix: "never"`, so locale is invisible in the URL. The active locale is stored in the `NEXT_LOCALE` cookie, written by `LanguageToggle` (`src/components/language-toggle.tsx:21`):

```
document.cookie = `NEXT_LOCALE=<locale>; path=/; max-age=31536000; SameSite=Lax`;
```

`useCurrentLangCode()` reads this cookie via `getCookie("NEXT_LOCALE")` (`src/utils/getCookie.ts`). This is a client-side-only utility — it references `document.cookie`.

## Centralised Site Config

All personal data (URLs, email, phone, social links, avatar path, CV path) lives in `src/config/site.ts:19-35` as `siteConfig`. Components import from there rather than hardcoding values. Same pattern for social nav icons: `src/config/navigation.tsx` exports a `navigation` array used by both `Header` and `Footer`.

## Static Data Layer

Content is plain TypeScript arrays, not a CMS or database:

- Projects: `src/data/projects.ts` — `TProject[]`
- Posts: `src/data/posts.ts` — currently `[]`

To add a project, append to the `projects` array following the `TProject` type. Images go in `public/<slug>/` and are referenced by path.

## Fixed Header / Footer Layout Constraint

Both `Header` (`src/layouts/header.tsx:23`) and `Footer` (`src/layouts/footer.tsx:11`) use `fixed` positioning. Page content components must include top padding (typically `pt-24` or `pt-36`) and bottom padding (`pb-12` or `pb-36`) to avoid being obscured. See `src/app/[locale]/page.tsx:5` and `src/app/[locale]/projects/page.tsx:10` for examples.

## shadcn/ui + `cn()` Convention

All shadcn components live in `src/components/ui/`. The `cn()` helper (`src/lib/utils.ts:4`) merges Tailwind classes using `clsx` + `tailwind-merge` and is used throughout feature components for conditional class composition.

## Client vs. Server Components

Pages and layouts default to React Server Components. Components are marked `"use client"` when they need hooks or browser APIs:

- `useTranslations()` from next-intl can be used in both server and client contexts.
- `useCurrentLangCode()` calls `document.cookie` — always client-only.
- `useTheme()` (next-themes) — client-only.

The layout (`src/app/[locale]/layout.tsx`) fetches messages server-side via `getMessages()` and passes them down through `NextIntlClientProvider`.
