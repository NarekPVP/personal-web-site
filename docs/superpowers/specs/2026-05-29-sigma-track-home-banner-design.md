# Sigma Track Home Page Banner

**Date:** 2026-05-29  
**Status:** Approved

## Goal

Highlight Sigma Track as a real, production-ready app on the home page and give visitors a direct link to it.

## Change

Add a full-width gradient banner to `src/components/welcome.tsx`, inserted between the last paragraph and the existing CV / GitHub / LinkedIn button row.

## Banner Content

- **Headline:** 🚀 Sigma Track — Live in Production
- **Subline:** Subscription tracking app · sigmatrack.app
- **CTA button:** Visit →
- **Link:** https://sigmatrack.app (opens in new tab)

## Styling

- Tailwind gradient: `bg-gradient-to-r from-emerald-600 to-teal-600`
- Full width, `rounded-xl`, white text throughout
- "Visit →" pill: `bg-white/20 border border-white/40`
- Works in both light and dark mode without additional dark-mode overrides (gradient is opaque)

## Scope

- **One file changed:** `src/components/welcome.tsx`
- No new translation keys (product name and URL are proper nouns, hardcoded)
- No new components, no config changes, no routing changes
