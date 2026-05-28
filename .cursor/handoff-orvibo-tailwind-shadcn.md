# Handoff: Orvibo Tailwind + shadcn migration

**For:** Codex agent (next session)  
**Repo:** `/Users/marius/Developer/orvibo`  
**Branch:** `main` @ `0b5c189`  
**Focus:** Execute the incremental migration plan — convert Orvibo marketing pages from legacy CSS/BEM to Tailwind CSS + shadcn components with **pixel-perfect** fidelity.

---

## Goal

Rebuild all Orvibo clone pages in `apps/web` using Tailwind utilities and shadcn primitives (via `@v1/ui`), replacing legacy HTML-class styling. Legacy CSS stays loaded until each route is converted.

**User decisions (locked in):**
- **Visual target:** Pixel-perfect clone of current Orvibo layout/colors — not a redesign.
- **Rollout:** Incremental, page-by-page; shippable slices; no big-bang rewrite.

---

## Authoritative plan

Full phased plan, architecture diagram, component mapping, and PR sequence:

`/Users/marius/.cursor/plans/orvibo_tailwind_shadcn_migration_cea435b7.plan.md`

**Start here.** Do not re-plan unless blocked. First todo: `foundation-tokens`.

---

## Repo snapshot (Orvibo web)

| Item | Location / notes |
|------|------------------|
| Marketing app | `apps/web` (port 3001, `bun dev:web`) |
| Locale routes | `apps/web/src/app/[locale]/` — only `en` today |
| Legacy CSS imports | `apps/web/src/app/[locale]/layout.tsx` → `src/styles/orvibo/*.css` |
| Orvibo components | `apps/web/src/components/orvibo/` — 23 files, ~2.4k LOC |
| shadcn package | `packages/ui` — has `components.json`, exports `button`, `dialog`, etc. **Orvibo pages do not use them** |
| Tailwind | `apps/web/tailwind.config.ts` extends `@v1/ui/tailwind.config` |
| Package manager | **bun** (required) |

### Route maturity

- **Fully built:** `/en`, `/en/product/mixstation`, `/en/product/mixpad_7`
- **Placeholders:** cooperation, store, app, explore, about/*, services/*, product index, unregistered product slugs
- **Non-Orvibo:** `/talk-to-us` (already Tailwind)

### Highest-risk files (convert late / carefully)

- `OrviboHeader.tsx` (~891 LOC) — mega-menus, swiper, underline animation
- `[locale]/page.tsx` (~388 LOC) — home sections with rem-based legacy classes
- Product overviews + per-product CSS under `src/styles/orvibo/products/`

---

## What was done in prior session (not this migration)

Separate work on branch `cursor/setup-dev-environment-8026` (PR #1): dev env setup, `AGENTS.md`, Convex deploy, lint fixes. **Not merged to `main` at handoff time.** See `AGENTS.md` on that branch for Cloud Agent dev notes.

Current session **did not implement** any Tailwind/shadcn migration — planning only.

---

## Recommended next actions (PR1 — Foundation)

1. Extend `apps/web/tailwind.config.ts` with Orvibo tokens (colors, max-width 1760px, header height). **Keep rem scale on `.orvibo-site` until all rem sections converted** — see `base.css` viewport font-size rules.
2. From `packages/ui`: `bunx shadcn@latest add navigation-menu sheet separator badge card tabs accordion -y` — export new components in `package.json`.
3. Scaffold `apps/web/src/components/orvibo/ui/` wrappers (`OrviboButton` for `.new_btn` variants, etc.).
4. Add `layout/SiteShell.tsx` with `chrome="legacy" | "tailwind"` prop; default `legacy` until chrome rebuild lands.

Verify: `bun run lint`, `bun run typecheck`, visual check at 1280/1440/1760px.

---

## Key constraints

- **Do not** remove legacy CSS imports from `[locale]/layout.tsx` until all consumers of that CSS are converted.
- **Do not** globally restyle shadcn — use Orvibo-specific CVA wrappers.
- **Do not** use npm/yarn — use bun.
- Preserve nav hrefs, video triggers (`OrviboWatchTrigger`), R2 asset URLs (`assetUrl`, `ORVIBO_ASSETS_ORIGIN`).
- Run `bun run orvibo:check-links` after chrome/nav changes.

---

## Suggested skills (next session)

| Skill | When |
|-------|------|
| `shadcn` | Adding components to `@v1/ui`, CVA variants, init/add CLI |
| `vercel-react-best-practices` / `nextjs` | RSC vs client boundaries, layout patterns |
| `redesign-existing-projects` or `design-taste-frontend` | Pixel-perfect section rebuilds (use sparingly — user wants clone fidelity, not redesign) |
| `webapp-testing` | Screenshot/visual regression at key breakpoints |

---

## Open questions (none blocking PR1)

- Mobile nav: plan assumes `Sheet` for small screens; confirm against live orvibo.com behavior when implementing header.
- Whether to merge `cursor/setup-dev-environment-8026` before starting migration PRs (optional; unrelated to styling work).

---

## Commands

```bash
cd /Users/marius/Developer/orvibo
bun install
bun dev:web          # marketing site :3001
bun run lint         # monorepo
bun run typecheck
cd apps/web && bun run orvibo:check-links
```
