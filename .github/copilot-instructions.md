## Repository overview

- Framework: Next.js 13 (app directory). Key entry points: `app/layout.tsx` (root layout) and `app/page.tsx` (home).
- UI: React components under `components/` (mostly `.jsx`) using Tailwind-style classes and some MUI components (Rating, Button).
- Routing: App router dynamic routes live under `app/` — e.g. `app/product/[productId]/layout.jsx` and `app/product/[productId]/page.jsx`.
- Assets: Static images live in `public/` (`banner_img/`, `productitem_img/`, etc.). Note some components use `<img>` while others use `next/image`.

## What an AI coding agent should know first

1. Project layout and conventions
   - Use the Next.js app-router (server components by default). Files in `app/` are the primary routes.
   - Components are colocated in `components/` as presentational pieces (e.g. `Header.jsx`, `ProductItem.jsx`, `ProductDetails.jsx`).
   - TypeScript is configured in the repo (`tsconfig.json`) and path alias `@/*` maps to the project root — use `@/components/...` imports where present.

2. Client vs Server components
   - Most `components/*.jsx` are client-side (no explicit `"use client"` unless interaction is required). When adding interactivity (hooks, state, event listeners), mark files with `"use client"` at top.
   - `app/layout.tsx` and `app/page.tsx` are server components by default (TSX). Be explicit when converting to client components.

3. Styling and UI patterns
   - Styling uses utility classes (Tailwind-like) in `globals.css` and some PostCSS/Tailwind tooling is present in the project (see `postcss.config.mjs`). Keep class naming consistent with existing components.
   - Some components use MUI (imported from `@mui/material`) — prefer MUI components for controls already using them (Rating, Button).

4. Scripts and local workflow
   - Start dev server: `npm run dev` (uses `next dev`).
   - Build: `npm run build`, Serve: `npm run start`.
   - Lint: `npm run lint` (ESLint configured).

5. Things to watch for (project-specific gotchas)
   - Mixed file extensions: app pages are `.tsx` but components are `.jsx`. Preserve existing file extension/style when editing small components.
   - Image handling: components sometimes use raw `<img src="/..."/>` instead of `next/image`. Don't automatically convert all images to `next/image` unless you update layout and imports carefully.
   - Path aliases: imports like `@/components/Header` rely on `tsconfig.json` path mapping — keep using `@/` rather than relative long paths.

6. Examples (callouts to existing files)
   - Home UI: `app/page.tsx` composes `HomeSlider`, `CatSlider`, `PopularProducts`, `Banners`, and `ProductRow`.
   - Header: `components/Header.jsx` uses `next/image`, `Link`, and a `Search` component — header is mounted in `app/layout.tsx`.
   - Product item: `components/ProductItem.jsx` uses MUI `Rating` and `Button`, and shows price layout conventions.

7. How to propose changes and tests
   - Small UI changes: edit the respective `components/*.jsx` file and run `npm run dev` to verify visually.
   - Type edits in route or layout files: prefer `.tsx` and ensure types compile; run `npm run build` or `tsc` (IDE will flag issues).

8. What not to change without confirmation
   - Don't change the Next.js major version or `next.config.ts` without a review — runtime/behavior differences can be subtle.
   - Don't mass-refactor image tags or file extensions across the repo in a single PR. Make targeted changes with examples.

If anything here is incomplete or you'd like more detail about a specific area (data fetching, API integrations, or CI/deploy), tell me which area and I will expand the guidance and add concrete examples.
