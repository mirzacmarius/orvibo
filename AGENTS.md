# Agents

## Cursor Cloud specific instructions

### Overview

This is a Turborepo monorepo ("Create v1") — a SaaS starter kit built on Convex + Next.js. It contains:

| Service | Package | Port | Purpose |
|---------|---------|------|---------|
| Main App | `apps/app` | 3000 | SaaS dashboard (auth, billing, settings) |
| Marketing Site | `apps/web` | 3001 | Landing/marketing pages (Orvibo) |
| Backend | `packages/backend` | — | Convex functions (database, auth, storage) |

### Running in development

Standard dev commands are defined in the root `package.json` and can be run with `bun`:

- `bun dev` — starts all apps + backend in parallel via Turborepo
- `bun dev:app` — starts only the main app (port 3000)
- `bun dev:web` — starts only the marketing site (port 3001)
- `bun run lint` — runs Biome lint across all packages
- `bun run typecheck` — runs TypeScript type checking across all packages

### Environment files

Each app needs a `.env` file (not committed). At minimum:

- `apps/app/.env` — requires `NEXT_PUBLIC_CONVEX_URL`
- `apps/web/.env` — requires `NEXT_PUBLIC_CONVEX_URL`

Without a real Convex URL, the Next.js apps start fine but backend API calls will fail.

### Convex backend

The backend dev script (`packages/backend/scripts/convex-dev.mjs`) requires either:
1. An interactive TTY (for `convex dev` login flow), OR
2. `CONVEX_DEPLOY_KEY` set in `packages/backend/.env.local`

In non-interactive Cloud Agent environments without `CONVEX_DEPLOY_KEY`, the backend script gracefully skips and exits 0. The Next.js apps still start and serve pages.

**Important**: `CONVEX_DEPLOY_KEY` enables `convex deploy` (push schema/functions) but `convex dev` still requires interactive login. To deploy schema changes in CI/non-interactive mode, use:
```bash
cd packages/backend && bunx convex deploy --cmd "echo done"
```

The Convex URL for this project is stored in `apps/app/.env` and `apps/web/.env` as `NEXT_PUBLIC_CONVEX_URL`. It can be derived from a successful `convex deploy` output.

### Gotchas

- The `apps/app` uses `@t3-oss/env-nextjs` for env validation. If `NEXT_PUBLIC_CONVEX_URL` is missing, the dev server will fail to start. Set `SKIP_ENV_VALIDATION=true` as a workaround if needed.
- Pre-existing lint errors exist in `apps/web` (Orvibo components — a11y warnings). These are not regressions.
- The `@v1/web` package has `@convex-dev/polar` at a different alpha version (`0.2.0-alpha.3`) than `@v1/app` (`0.2.0-alpha.5`). This is intentional in the repo.
- Bun is the required package manager (specified in `packageManager` field). Do not use npm/yarn/pnpm.
