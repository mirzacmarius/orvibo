# ORVIBO website

The English-language ORVIBO smart-home site, live at **https://www.orvibo.ro**.

It is a Next.js 14 app in a Bun + Turborepo monorepo. The monorepo started from
the open-source [Create v1](https://github.com/get-convex/v1) starter kit (Midday's
v1 ported to Convex). Only `apps/web` is deployed; the rest of the starter is still
in the repo but unused by the site.

## What's in the repo

| Path | What it is | Used by the live site |
| --- | --- | --- |
| `apps/web` | The ORVIBO site: Next.js 14 App Router, Tailwind, shadcn/ui | Yes, this is the site |
| `packages/ui` | Shared shadcn/ui components and Tailwind preset | Yes |
| `packages/analytics` | OpenPanel analytics provider | Only when `NEXT_PUBLIC_OPENPANEL_CLIENT_ID` is set |
| `packages/logger` | Small logger used by `packages/analytics` | Indirectly |
| `apps/app` | Starter-kit SaaS dashboard (auth, billing, settings) | No, not deployed |
| `packages/backend` | Starter-kit Convex backend | No |
| `packages/email` | Starter-kit React Email templates | No |
| `tooling/typescript` | Shared TypeScript configs | Build tooling |

## Getting started

You need [Bun](https://bun.sh) 1.3.14 (pinned in `package.json`, the same version
Vercel uses).

```bash
bun install
bun dev:web        # http://localhost:3001/en
```

The site needs no environment variables to build or run. Optional ones, set in
`apps/web/.env.local` locally and in the Vercel project for production:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_ORVIBO_ASSETS_URL` | Public URL of the R2 media bucket. When set, images and videos load from it. |
| `ORVIBO_ASSETS_ORIGIN` | Same origin; Next.js rewrites media paths that are missing from `public/` to it. |
| `NEXT_PUBLIC_OPENPANEL_CLIENT_ID` | OpenPanel client id. Analytics only loads when this is set. |

Without the two media variables, the videos that are too large for git are missing
locally. See "Media and the CDN" below.

## Checks

```bash
bun run lint                          # Biome + sherif
bun run typecheck                     # tsc in every package that has a typecheck script
bunx turbo run build --filter=@v1/web # production build of the site
```

The GitHub Action in `.github/workflows/check.yml` runs all three on every push.

## How the site is put together

- **Routes** live under `apps/web/src/app/[locale]`. The only locale is `en`.
  `src/middleware.ts` redirects `/` and any path without the `/en` prefix to
  `/en/...`, and maps legacy orvibo.com `*.html` URLs to the new paths.
- **Copy** lives in `apps/web/src/app/[locale]/dictionaries/en.json`. Read it with
  `getDictionary`, `getPageCopy`, `getAboutPageCopy`, `getServicePageCopy` and
  `getProductCopy` from `dictionaries.ts`.
- **Product pages** are registered in `apps/web/src/lib/orvibo/products/registry.ts`
  (currently MixStation and MixPad 7). Products the menus already link to but that
  have no page yet are listed in `products/upcoming.ts` and show a "coming soon"
  page. Any other product slug returns 404. When you build a product page, add it
  to the registry and remove it from `upcoming.ts`.
- **Placeholder pages.** Routes without real content render `OrviboPageShell`'s
  "coming soon" card, are marked `noindex` with `PLACEHOLDER_ROBOTS` and are left
  out of `app/sitemap.ts`. When a page gets real content, drop the robots setting
  and add the route to the sitemap.
- **Site URL** for metadata, `robots.txt` and the sitemap is `SITE_URL` in
  `apps/web/src/lib/orvibo/site.ts`.
- **Social images and icons** are file-based metadata in `apps/web/src/app`:
  `opengraph-image.jpg`, `twitter-image.jpg`, `favicon.ico`, `icon.png` and
  `apple-icon.png`.

## Media and the CDN

Most images and videos are committed under `apps/web/public` (about 165 MB). The
same files, plus the videos over GitHub's 100 MB limit, are hosted on the
Cloudflare R2 bucket `orvibo-assets`. In production `NEXT_PUBLIC_ORVIBO_ASSETS_URL`
points image URLs at R2.

The `orvibo:*` scripts in the root `package.json` manage this:

- `bun run orvibo:sync-assets` downloads assets from orvibo.com into `public/`.
- `bun run orvibo:upload-r2` uploads `public/` media to R2 (dry run with
  `orvibo:upload-r2:dry`), and `bun run orvibo:verify-r2` checks them.
- `bun run orvibo:check-links` and `bun run orvibo:extract-i18n` help with links
  and copy.

The R2 setup steps and credentials are described in `apps/web/.env.example`.

## Deployment

Vercel deploys the site from this repository:

- The Vercel project's Root Directory is `apps/web`, and its build command comes
  from `apps/web/vercel.json` (`cd ../.. && turbo run build --filter=@v1/web`).
- Pushes to `main` deploy to production at www.orvibo.ro. Other branches get
  preview deployments.
- Turborepo runs in strict env mode, so a build only sees the variables declared in
  `turbo.json`, `NEXT_PUBLIC_*` variables and a few system ones.

## Starter-kit code

`apps/app`, `packages/backend` and `packages/email` come from the Create v1 starter
and are not deployed. Their setup (Convex, Polar, Resend, Sentry and so on) is
documented in the [upstream README](https://github.com/get-convex/v1#readme).

## License

`LICENSE.md` covers the starter-kit code. It does not cover the ORVIBO brand,
product copy or media in `apps/web`.
