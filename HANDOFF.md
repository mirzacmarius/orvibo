# ORVIBO.ro handoff

Snapshot: **2026-10-25, about 16:30 UTC.** Written by Claude, the AI agent that
has worked on this project in Marius's Claude project so far, so that a
different AI agent can continue. The file is self-contained: you need no access
to Claude's memory, threads or links. "The kit" means
`orvibo-handoff-kit.tar.gz` (tools, page scripts, data and the commits that are
not on GitHub yet), described in §5. Marius has it in his Claude project files.

Owner: **Marius** (GitHub `mirzacmarius`). He writes short messages in English,
answers best when given two or three options to pick from, and merges pull
requests himself.

## Contents

0. Read me first
1. Goal, decisions and plan
2. Systems: repos, deploy, media, the Mac
3. Status at the snapshot
4. Next steps in detail
5. Workspace setup (the kit)
6. The per-page pipeline
7. Code map and conventions in `apps/web`
- Appendix A: translation conventions and glossary
- Appendix B: image recipes
- Appendix C: page notes and orvibo.com defects (for PR bodies)
- Appendix D: films
- Appendix E: live-site leftovers and open issues
- Appendix F: links and identifiers

---

## 0. Read me first

### 0.1 The project in one paragraph

Marius wants to launch **orvibo.ro**, an online shop that sells ORVIBO
smart-home products in Romania, in Romanian, with prices in RON. The storefront
will be the existing live site **www.orvibo.ro** (repo `mirzacmarius/orvibo`,
Next.js 14 on Vercel), which today is a brochure-style clone of orvibo.com with
no shop. A Medusa backend for products, cart and checkout comes later. Done so
far: a cleanup of the live site (PR #7, merged) and most of a rebuild of every
orvibo.com/cn product page on that site in Romanian (the default) and English,
with every Chinese line translated, including the text baked into images.
**35 of the 48 planned product pages are built:** 27 are in the open PR #8, and
8 more are in follow-up commits that exist **only in a git bundle in the kit**,
not on GitHub. The shop itself (Medusa, checkout, legal pages) has not been
started.

### 0.2 What to do next, in order

1. **Make sure only one agent works on a branch.** At the snapshot a Claude
   agent was still building pages: it had just committed the camera page
   (`camera_4`), was starting the pan-tilt camera (`yuntai`), and was watching
   PR #8. Its unfinished work lives only in its own workspace until it commits a
   page and saves a new `followup.bundle` and the page's scripts. Ask Marius
   whether to let it finish its current page, or to stop it, before you touch the
   product-page branches. If it keeps going, take a separate stream (the shop
   backend in `orvibo.ro`, or the legal footer) so you don't edit the same files.
2. **Get PR #8 merged.** This needs Marius's Mac (§4.1): copy the VOD films into
   the repo clone, run the R2 upload, then Marius merges.
3. **Open the follow-up PR** (§4.2): replay the follow-up commits onto the new
   `main`, push, open the PR with the prepared body, have Marius run the R2
   upload (it now includes `public/html/`), and he merges.
4. **Finish the remaining 13 product pages** (§3.4, §4.3): batch 4's pan-tilt
   camera, batch 5 (6 pages), batch 6 (6 HVAC pages), then one site-wide phone
   pass.
5. **Fix the live-site leftovers** (Appendix E), above all the Chinese legal
   footer, which needs Marius's company details.
6. **Build the shop** (steps 2 to 4 of the plan in §1.3).

### 0.3 Rules that are not negotiable

- **Ask Marius before pushing or opening a PR.** He merges PRs himself. (His
  rule since 2026-10-24.)
- **Never upload to the production R2 bucket without his go-ahead.** The R2
  keys exist only on his Mac, in `apps/web/.env.local` (gitignored). Don't print,
  copy or commit them.
- **Every new media file must be on R2 before its PR merges.** In production
  every image and video path gets the R2 URL in front of it, so a file that is
  only in git is a broken image (§2.3).
- **Don't re-ask settled decisions** (§1.2): Romanian and English, desktop
  first, films left as they are.
- **No secrets** in git, docs, PR bodies or logs.
- **Run the CI checks before every push** (§2.1).
- **Tailwind:** never write arbitrary `duration-[…]`, `delay-[…]` or `ease-[…]`
  classes; this repo drops them silently (§7.3).
- **Bun only** in the `orvibo` repo (1.3.14). No npm, yarn or pnpm there; keep
  `bun.lock` in sync. Don't wire the site to Convex.

### 0.4 Check the snapshot is still true

```bash
git clone https://github.com/mirzacmarius/orvibo && cd orvibo   # or git fetch in a clone you have
git log --oneline -3 origin/main          # snapshot: 32924f7, the squash merge of PR #7
git log --oneline origin/main..origin/claude/project-thread-ax1wgl | wc -l   # snapshot: 39 (PR #8)
gh pr list --repo mirzacmarius/orvibo --state all --limit 5   # snapshot: #8 open, #7 merged, #5 stale draft
```

If PR #8 is merged already, skip §4.1. If the follow-up commits (`03f0f11` to
`15f9c57`, or newer ones) are on a GitHub branch by now, use that branch instead
of the bundle.

---

## 1. Goal, decisions and plan

### 1.1 Goal

Confirmed by Marius on 2026-10-24: launch the orvibo.ro online shop selling
ORVIBO smart-home products in Romania, in Romanian, priced in RON.

### 1.2 Decisions already made (don't ask again)

| When (UTC) | Decision |
| --- | --- |
| 2026-10-24 | The live `orvibo` site stays the storefront. Medusa (from the `orvibo.ro` repo) becomes a headless backend behind it later. |
| 2026-10-24 | Rebuild every product page of https://www.orvibo.com/cn/index.html on the site, styled with Tailwind, with all text translated, including text inside images. |
| 2026-10-24 07:22 | Two languages: Romanian at `/ro` (the default) and English at `/en`. Every page and every redrawn image exists in both. |
| 2026-10-24 08:38 | Desktop first. One site-wide phone pass after all pages are built. orvibo.com's phone pages (`www.orvibo.com/mobile/cn/...`) were not mirrored. |
| 2026-10-24 | Scope is 48 pages: the 43 current orvibo.com/cn products the site didn't have, plus 5 older products the site's menu links to (`mixpad_s_flagship`, `t1c`, `yuntai`, `mixpad_mirror`, `robot_r2`). The other 13 older CN products are out unless Marius asks. |
| 2026-10-24 | Ask Marius before pushing or opening a PR. |
| 2026-10-25 11:59 | "Leave the films as they are": films with Chinese burned in are not re-edited; their posters are translated. |
| 2026-10-25 12:06 | "Push and open the PR": PR #8 carries batches 1 to 3 and three locks. Later pages go in a follow-up PR, so #8's upload list stays exact. |

### 1.3 The plan (agreed 2026-10-24) and open questions

1. **Clean up the live site and add Romanian.** In progress: PR #7 merged; the
   product pages come with PR #8 and the follow-up.
2. **Medusa backend** hosted in the EU, with a Romania region, RON and about 30
   products. Source: the `mirzacmarius/orvibo.ro` repo (§2.4).
3. **Connect the site to Medusa:** product data, cart and checkout with PayU
   (card), bank transfer and cash on delivery; one courier at fixed rates first.
4. **Legal pages and launch:** privacy (GDPR), cookies, terms, returns, ANPC
   information; test orders; launch.

Open questions for Marius (not answered yet):
- Which courier comes first (the PRD lists Sameday, Cargus, DPD and Fan Courier).
- Whether he has ORVIBO's permission to use its brand, copy and media, and his
  Romanian company details for the footer and the legal pages.
- Whether any of the 13 older CN products should be added.
- His own service and warranty terms. The pages translate orvibo.com's Chinese
  service promises as they are (Appendix C lists them).

---

## 2. Systems

### 2.1 Repo `mirzacmarius/orvibo` (the live site)

- **What it is:** the open-source "Create v1" starter (Midday's v1 ported to
  Convex) whose marketing app was replaced by a clone of orvibo.com. A Bun and
  Turborepo monorepo. Until 2026-10-24 all ORVIBO work in it was done by Cursor
  agents (PRs #1 to #6, May 2026).
- **`apps/web`** is the only deployed app: Next.js 14.2.7 (App Router), React
  18, TypeScript strict with `noUncheckedIndexedAccess`, Tailwind 3.4 with shadcn
  (from `packages/ui`) and tailwindcss-animate, Swiper 12, Biome 1.8.3. Dev
  server: `bun dev:web` (port 3001).
- **Leftovers that are not deployed and not imported by the site:** `apps/app`
  (a SaaS dashboard), `packages/backend` (Convex), `packages/email`. Leave them
  alone unless Marius decides to delete them.
- **Read the repo's `README.md` and `AGENTS.md`** (rewritten in PR #7). On `main`
  they still say the only locale is `en`. PR #8 makes `ro` the default, so update
  both after #8 merges.
- **Checks**, the same as CI (`.github/workflows/check.yml`, about 70 to 90 s):

  ```bash
  bun install --frozen-lockfile
  bun run lint
  bun run typecheck
  bunx turbo run build --filter=@v1/web
  ```

  If the GitHub `check` job fails within about 3 seconds with no log, Marius's
  GitHub Actions billing is blocking it (that happened on 2026-10-24), not the
  code.
- **Merging:** the repo squash-merges PRs. A push to `main` deploys production.
- **Branches:** `main`; `claude/project-thread-ax1wgl` (PR #8);
  `claude/project-thread-3u2t4z` (this handoff file).

### 2.2 Deploy (Vercel)

- Team `orvibo`, project `orvibo`. Root Directory `apps/web`; the build command
  comes from `apps/web/vercel.json` (`cd ../.. && turbo run build --filter=@v1/web`).
  The root `vercel.json` is dead config. Node 24.x; Vercel builds with Bun
  1.3.14.
- Domains: `www.orvibo.ro` (primary), `orvibo.ro` (308 to www),
  `orvibo.vercel.app`. Preview and deployment URLs need a Vercel login; the
  custom domain is public.
- PR #8's preview:
  https://orvibo-git-claude-project-thread-ax1wgl-orvibo.vercel.app/ro/product/t1c
  (Vercel login needed). Previews get no R2 variables, so they serve media from
  `public/`, and the gitignored films are missing there.
- Production environment variable **names** (the values are in Vercel; never
  print them): `NEXT_PUBLIC_ORVIBO_ASSETS_URL` (the public r2.dev bucket URL),
  `ORVIBO_ASSETS_ORIGIN`, `NEXT_PUBLIC_APP_URL`, plus unused
  `NEXT_PUBLIC_CONVEX_URL`, `CONVEX_DEPLOYMENT` and Better Stack / Logtail
  integration variables. `NEXT_PUBLIC_OPENPANEL_CLIENT_ID` is not set, so
  analytics stays off.

### 2.3 Media and R2 (read before merging anything with images)

- `assetUrl()` and `localizedAssetUrl()` (`apps/web/src/lib/orvibo/assetUrl.ts`,
  `localizedAsset.ts`) put `NEXT_PUBLIC_ORVIBO_ASSETS_URL` in front of **every**
  media path in production, images committed in `public/` included. A file that
  is not on R2 is a 404 in production.
- Upload with `bun run orvibo:upload-r2` (dry run: `orvibo:upload-r2:dry`; also
  `orvibo:r2-preflight` and `orvibo:verify-r2`). It uploads
  `public/guanwang_second`, `public/orvibo` and `public/8f4239b1vodgzp1251222210`,
  and from follow-up commit `6370139` also `public/html`. It needs
  `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY` and `R2_BUCKET_NAME`
  (bucket `orvibo-assets`) in `apps/web/.env.local`, which exists only on
  Marius's Mac. The setup steps are in `apps/web/.env.example`.
- `public/media/` is gitignored and never uploaded. Films from orvibo.com's
  `website-static.orvibo.com/media/` go to `public/orvibo/videos/` (committed
  when small). QuickTime `.mov` films are re-encoded first (the MixPad 10 film
  went from 96 MB to 14.6 MB):

  ```bash
  ffmpeg -i in.mov -c:v libx264 -crf 22 -maxrate 6M -bufsize 12M -pix_fmt yuv420p \
         -c:a aac -b:a 128k -movflags +faststart out.mp4
  ```

  VOD films (`/8f4239b1vodgzp1251222210/...`) stay gitignored and live on R2
  only.
- Translated images live at `public/orvibo/i18n/<ro|en>/<original path>.webp`.
  `src/lib/orvibo/localized-assets.generated.ts` lists them, and
  `localizedAssetUrl(path, locale)` picks the right copy, falling back to the
  original.

### 2.4 Repo `mirzacmarius/orvibo.ro` (the future shop backend)

- The untouched Agilo "fashion starter": a Medusa 2 backend in `medusa/` and a
  Next.js 15 storefront in `storefront/`, plus planning docs in `docs/` from May
  2025 (product brief, draft PRD v0.2, epics 1 to 5 and 7, UI/UX spec). No
  customisation yet.
- PRD V1 scope: the top ~30 products; PayU card, bank transfer and cash on
  delivery; shipping by Sameday, Cargus, DPD or Fan Courier; static Romanian
  pages in code (no CMS); shadcn/ui. A room configurator and an Italian version
  are deferred.
- Plan: use only its Medusa backend, headless, behind the `orvibo` site; the
  starter's storefront is not the front end.
- It runs locally on Marius's Mac with the starter's demo seed (12 sofas, EUR,
  EU regions; the storefront redirects to `/hr`). See §2.5.

### 2.5 Marius's Mac (MacBook Pro)

The Mac holds the orvibo.com mirror, the films, the R2 keys and Docker. An agent
running there can do every step; a cloud agent can't upload media or fetch
films.

| Path | What it is |
| --- | --- |
| `~/Developer/orvibo/cn-mirror/` | Offline mirror of orvibo.com/cn captured on 2026-10-24: 99 pages, 1,837 images, 138 videos, 4.2 GB. It is the **only** copy of the films. Tar parts of it sit next to it in `~/Developer/orvibo/`. Layout: `pages.json`, `manifest.json`, `html/<slug>.html` (rendered), `raw/<slug>.html`, `screens/<slug>.jpg` (full-page screenshots), `files/<host>/<path>` (every asset). |
| `~/Developer/orvibo/repo/` | A clone of the site repo for local runs and the R2 upload. Its `public/` already holds 19 VOD folders and a copy of `public/media/`. Fetch the branch you need before a run or an upload. Run: `cd ~/Developer/orvibo/repo/apps/web && bun run next dev -p 3010` (port 3001 is taken by another project on that Mac), then open `http://localhost:3010/ro/product/<slug>`. |
| `~/Developer/orvibo.ro/` | The Medusa starter. Docker comes from OrbStack; `yarn` is not on PATH, so use `corepack yarn`. Local-only changes, not committed: `medusa/docker-compose.override.yml` swaps the unpullable `minio/minio` and `minio/mc` images for `bitnamilegacy/minio:2024.10.13` and creates the public `medusa` bucket (the file is listed in `.git/info/exclude`; MinIO is required because the seed uploads product photos); `storefront/.env.local` sets `NEXT_PUBLIC_STRIPE_KEY=pk_test_placeholder`, without which the storefront won't start (card checkout fails until real test keys are added). Start: `cd medusa && docker-compose up -d && corepack yarn dev`, then `cd storefront && corepack yarn dev`. Stop: end the dev servers, then `docker-compose stop` (`down -v` wipes the database). URLs: storefront :8000, admin :9000/app (the starter's default demo admin login, local only), MinIO console :9001, Meilisearch :7700. Logs: `~/Developer/orvibo.ro/.logs/`. |

### 2.6 Network limits seen so far

orvibo.com's hosts and the r2.dev bucket were blocked from the cloud machines
used so far, so all CN work ran from the mirror. Your environment may differ,
but treat the mirror as the reference: orvibo.com may have changed since
2026-10-24.

---

## 3. Status at the snapshot

### 3.1 PR #7, merged

"Fix live-site leftovers: placeholder copy, 404s, social card, CI build",
squash-merged on 2026-10-25 at about 11:57 UTC as `32924f7`. It added a
coming-soon card with `noindex` for placeholder pages, upcoming-product slugs,
real 404s, working home-page buttons, an ORVIBO social card and icons,
`metadataBase` www.orvibo.ro, OpenPanel only when configured, robots.txt and a
sitemap, removed dead starter code, added a build step to CI, pinned Bun 1.3.14,
and rewrote README and AGENTS.md.

### 3.2 PR #8, open, CI green

https://github.com/mirzacmarius/orvibo/pull/8, "Rebuild the orvibo.com/cn
product pages in Romanian and English (batches 1–3 and the first locks)". Head
`01a699e` on `claude/project-thread-ax1wgl`, base `main` at `32924f7`, 39
commits, no conflicts. Its body is `pr-body.md` in the kit.

It adds: Romanian as the default locale next to English
(`apps/web/src/lib/orvibo/i18n.ts`, the middleware, `dictionaries/ro.json`);
translated images through `localizedAssetUrl`; one shared spec tab view plus
custom tables where orvibo.com has them; the 404 page in the visitor's
language; films served from `/orvibo/videos`; orvibo.com's scroll effects and
carousels rebuilt without jQuery, as shared components in
`apps/web/src/components/orvibo/product/` (§7.2).

Commits, oldest first:

```
44c7a55 feat(web): add Romanian as the default locale next to English
b26c2e3 feat(web): translate Chinese text in MixStation and MixPad 7 images
c425b8d feat(web): add the MixPad 12 product page in Romanian and English
7695673 feat(web): add the MixPad 12 specifications tab
997233c feat(web): add the MixPad 10 product page in Romanian and English
4bdf3af feat(web): add the MixPad 4 product page in Romanian and English
4794c26 refactor(web): share one spec tab view across product pages
a0b3bae feat(web): add the MixPad S flagship product page in Romanian and English
c9a5f3b feat(web): add the MixPad Elf product page in Romanian and English
e0e4676 fix(web): show the 404 page in the visitor's locale
eb921a9 fix(web): serve the MixPad 10 and MixPad 4 films from /orvibo/videos
a48d27d feat(web): add the Bach product page in Romanian and English
c0761f1 feat(web): add the Defy product page in Romanian and English
69252aa feat(web): add the Gauss smart switch page in Romanian and English
c31ea9b feat(web): add the MixSwitch smart switch page in Romanian and English
304bfff feat(web): add the MixPad Extra sections to the MixPad 7 page
8af5cb9 fix(web): run the MixSwitch bedroom fade over 3 seconds
99269bf feat(web): add the S3 anti-glare downlight page in Romanian and English
30eca7d feat(web): add the Downlight page and its spec tab in Romanian and English
0f7890d fix(web): keep the line height on the Bach protection heading
1ef7b7f feat(web): add the Cangqiong Pro natural light page in Romanian and English
8d67953 fix(web): centre the MixSwitch feature icons over their labels
a781e3b feat(web): add the Q3 eye-care downlight page in Romanian and English
ec05884 feat(web): add the Smart Spotlight S5 page in Romanian and English
8ec1d51 feat(web): add the Bauhaus smart ambient lights page in Romanian and English
dd119d0 feat(web): add the Blade magnetic track light page in Romanian and English
dc92b05 feat(web): add the SOPRO Q Series lighting page in Romanian and English
40db54f feat(web): add the SOPRO S Series lighting page in Romanian and English
cbae841 feat(web): add the 3D Light & Shadow smart curtain page in Romanian and English
f2c6718 feat(web): add the DB28 ultra-quiet curtain motor page in Romanian and English
cc846b5 fix(web): show the Blade film's translated poster
b27e25f feat(web): add the Elf ultra-quiet curtain motor page in Romanian and English
13fb322 feat(web): add the Super Smart curtain page in Romanian and English
ad16ec2 feat(web): add the Chocolate curtain kit page in Romanian and English
ae849b2 fix(web): restore four transition timings Tailwind dropped
3210c31 feat(web): add the ultra-quiet Zigbee curtain motor page in Romanian and English
8dfa1f8 feat(web): add the S2 smart lock page in Romanian and English
c2e5a13 feat(web): add the V5 smart lock page in Romanian and English
01a699e feat(web): add the T1C smart lock page and its spec tab in Romanian and English
```

### 3.3 Follow-up commits (only in the kit's git bundle)

Ten commits after `01a699e`, meant for the follow-up PR. They were **not on
GitHub** at the snapshot. The kit holds them in
`orvibo-product-pages/repo/followup.bundle` (branch
`refs/heads/claude/project-thread-ax1wgl`, tip `15f9c57`; it needs `01a699e`,
which is on GitHub). The Claude agent refreshes this bundle in Claude's project
files after each page, so a newer copy may have more commits.

```
03f0f11 feat(web): add the motion sensor page and its spec tab in Romanian and English
6370139 chore(web): serve orvibo.com's /html/ images from R2 like the other media
71c01de feat(web): add the door and window sensor page and its spec tab in Romanian and English
3839b74 feat(web): add the security kit page in Romanian and English
8191009 fix(web): set the motion sensor's spec list in regular weight
6fb2d9c feat(web): add the Zigbee Mini gateway page in Romanian and English
e3c77f1 feat(web): add the emergency button page in Romanian and English
5531296 feat(web): add the temperature & humidity sensor page in Romanian and English
992f70d feat(web): add the water leak sensor page in Romanian and English
15f9c57 feat(web): add the S1 2K camera page in Romanian and English
```

To restore them:

```bash
git fetch origin claude/project-thread-ax1wgl
git bundle verify /path/to/kit/orvibo-product-pages/repo/followup.bundle
git fetch /path/to/kit/orvibo-product-pages/repo/followup.bundle \
    refs/heads/claude/project-thread-ax1wgl:refs/remotes/bundle/followup
git log --oneline origin/claude/project-thread-ax1wgl..bundle/followup   # the follow-up commits
```

The follow-up PR's draft body is `pr-body-2.md` in the kit (fill in the upload
counts, and add any page finished later).

### 3.4 All 48 pages

Paths are `/ro/product/<slug>` and `/en/product/<slug>`. "Spec" means the page
has a specifications tab at `/product/<slug>/spec` (orvibo.com keeps it at
`<slug>_install.html`).

**Batch 1: control panels and switches (PR #8)**

| Slug | Page | Spec | Commit |
| --- | --- | --- | --- |
| `mixpad_x` | MixPad 12 | yes | `c425b8d`, `7695673` |
| `mixpad_7_ultra` | MixPad 10 | | `997233c` |
| `mixpad_m2` | MixPad 4 | | `4bdf3af` |
| `mixpad_s_flagship` (older) | MixPad S Flagship | yes | `a0b3bae` |
| `mixpad_elf` | MixPad Elf Smart Switch (Gateway) | yes | `c9a5f3b` |
| `bach` | Bach Smart Switch | yes | `a48d27d` |
| `defy` | Defy Smart Switch | | `c0761f1` |
| `gaosi` | Gauss Voice Control Screen | | `69252aa` |
| `mixpad_switch` | MixSwitch Smart Switch | yes | `c31ea9b` |

Also in PR #8: the MixPad 7 page finished (MixPad Extra sections, `304bfff`) and
MixStation's images translated (`b26c2e3`). Both pages existed before.

**Batch 2: lighting (PR #8)**

| Slug | Page | Spec | Commit |
| --- | --- | --- | --- |
| `s3` | Anti-glare Smart Downlight S3 | | `99269bf` |
| `downlight` | Smart Tunable Light | yes | `30eca7d` |
| `cangqiong` | Cangqiong Pro Natural Light | | `1ef7b7f` |
| `q3` | Eye-care Downlight Q3 | | `a781e3b` |
| `s5` | Smart Spotlight S5 | | `ec05884` |
| `light` | Bauhaus Smart Ambient Lights | | `8ec1d51` |
| `daofeng` | Blade Ultra-thin Magnetic Track Light | | `dd119d0` |
| `q` | SOPRO Smart Lighting Q Series | yes | `dc92b05` |
| `s` | SOPRO Smart Lighting S Series | yes | `40db54f` |

**Batch 3: curtains (PR #8)**

| Slug | Page | Spec | Commit |
| --- | --- | --- | --- |
| `curtain_3d` | 3D Light & Shadow Smart Curtain | yes | `cbae841` |
| `motor_db28` | DB28 Ultra-quiet Curtain Motor | | `f2c6718` |
| `curtain_motor` | Elf Ultra-quiet Curtain Motor | yes | `b27e25f` |
| `chuangliansmart` | Super Smart Curtain | yes | `13fb322` |
| `chuanglian` | Smart Curtain Kit (Chocolate Edition) | yes, with install guide | `ad16ec2` |
| `chuanglian2` | Ultra-quiet Smart Curtain (Zigbee Edition) | yes, with install guide | `3210c31` |

**Batch 4: locks and security**

| Slug | Page | Spec | Where |
| --- | --- | --- | --- |
| `mixpad_s2` | Smart Lock S2 | yes | PR #8, `8dfa1f8` |
| `v5` | Smart Lock V5 | | PR #8, `c2e5a13` |
| `t1c` (older) | Smart Lock T1C | yes | PR #8, `01a699e` |
| `bodysensor` | Motion Sensor | yes | follow-up, `03f0f11` + `8191009` |
| `doorsensor` | Door & Window Sensor | yes | follow-up, `71c01de` |
| `safepackage` | Security Kit | | follow-up, `3839b74` |
| `miniHost` | Zigbee Mini Gateway | | follow-up, `6fb2d9c` |
| `sos` | Emergency Button | | follow-up, `e3c77f1` |
| `temp_hum_sensor` | Temperature & Humidity Sensor | | follow-up, `5531296` |
| `water_alarm` | Water Leak Sensor | | follow-up, `992f70d` |
| `camera_4` | S1 2K Smart Camera (巨目2K智能摄像机S1) | yes (`camera_4_install`) | follow-up, `15f9c57` |
| `yuntai` (older) | 大白智能摄像机 (pan-tilt camera) | yes (`yuntai_install`) | to do; the Claude agent was starting it at the snapshot |

**Batch 5: appliances, audio, intercom (to do)**

| Slug | Page (orvibo.com name) | Spec |
| --- | --- | --- |
| `s30c` | S30c 智能插座 (S30c smart plug) | yes (`s30c_install`) |
| `xiaofang` | 小方智能遥控器 (Xiaofang smart IR remote) | |
| `artisbox_play` | 装饰艺术音箱 ArtisBox Play HiFi版 (decorative speaker) | yes |
| `mixpad_plus` | AI 可视对讲系统 (AI video intercom system) | |
| `mixpad_mirror` (older) | MixPad Mirror 智能浴室镜 (smart bathroom mirror) | yes |
| `robot_r2` (older) | 智能扫拖机器人 R2 (robot vacuum and mop) | yes |

**Batch 6: integrated HVAC, 集成空调 (to do)**

`jidacheng` (欧瑞博·集大成系列), `s350l`, `v180`, `w180`, `w260`, `w300`
(欧瑞博集成空调 S350L / V180 / W180 / W260 / W300). These pages are pictures
only: 90 images, every one with Chinese, 74 of them mostly text, so rebuild
those as HTML. They are not in the site's menu or in `upcoming.ts` yet; ask
Marius where to link them.

Size of the remaining pages, from the kit's `data/inventory.json` (images on the
page / images with Chinese / Chinese characters in the HTML / videos):

| Slug | Images | With Chinese | Chinese chars (spec) | Videos |
| --- | --- | --- | --- | --- |
| `yuntai` | 25 | 13 | 859 (+480) | 0 |
| `s30c` | 16 | 3 | 943 (+304) | 0 |
| `xiaofang` | 14 | 2 | 828 | 0 |
| `artisbox_play` | 29 | 6 | 1,144 (+357) | 3 |
| `mixpad_plus` | 51 | 22 | 2,404 | 0 |
| `mixpad_mirror` | 22 | 13 | 830 (+484) | 8 |
| `robot_r2` | 24 | 19 | 776 (+366) | 0 |
| HVAC (6 pages) | 90 | 90 | ~240 each (chrome only) | 0 |

Out unless Marius asks (13 older CN products): `co_alarm`,
`photoelectric_alarm`, `gas_sensor`, `mixpad_air`, `mixpad_c2`, `mixpad_dhb`,
`mixpad_s`, `lightstripe`, `c1`, `p20`, `artisbox_1`, `mirror`, `roundmirror`.

`apps/web/src/lib/orvibo/products/upcoming.ts` (the menu's "coming soon"
slugs) still lists `yuntai`, `mixpad_plus`, `mixpad_mirror`, `robot_r2`,
`artisbox_play`, `xiaofang` and `s30c` on the follow-up tip; registering a page
removes it from there.

### 3.5 Films, in short

Many films are referenced by the pages but are only on the Mac, so the players
show their poster or a black box until the films are added. Films with Chinese
burned in stay as they are (Marius's decision). Full lists: Appendix D.

---

## 4. Next steps in detail

### 4.1 Get PR #8 merged (on Marius's Mac, with his go-ahead for the upload)

```bash
cd ~/Developer/orvibo/repo
git status                       # no tracked changes expected; public/media and the VOD folders are gitignored
git fetch origin
git switch -C claude/project-thread-ax1wgl origin/claude/project-thread-ax1wgl

# Films the pages reference that are not in public/ yet:
git grep -hoE "/(orvibo/videos|8f4239b1vodgzp1251222210)/[A-Za-z0-9_./-]+\.mp4" -- apps/web/src \
  | sort -u | while read -r p; do [ -f "apps/web/public$p" ] || echo "$p"; done
```

- Copy each missing **VOD** film from the mirror to the same path under
  `apps/web/public/` (find it with
  `find ~/Developer/orvibo/cn-mirror/files -path "*<path>"`). PR #8 needs
  MixSwitch's two, SOPRO Q's three (sec2, sec3, sec8), SOPRO S's banner film
  (`0lwcQ5V5mQEA`) and the T1C film. VOD films stay gitignored.
- The missing `/orvibo/videos/*.mp4` films (Appendix D) are not needed for the
  merge (the pages show posters). Adding them is a separate, later commit:
  their mirror sources are listed in the kit's `gen/<slug>/videos.txt` and
  `videos.auto.txt` (`<site path> <- <mirror path>` when renamed; otherwise
  `files/website-static.orvibo.com/media/<same name>`). Re-encode `.mov` files
  (§2.3) and commit them, or upload them to R2 only if they are large.
- Run `bun run orvibo:upload-r2:dry`, then, with Marius's OK,
  `bun run orvibo:upload-r2`, then `bun run orvibo:verify-r2`. PR #8 adds 750
  translated images, 695 product images, 13 page graphics in
  `public/orvibo/products/` and 10 films in `public/orvibo/videos/`; nothing
  existing changes.
- Marius merges the PR. Then check a few pages on www.orvibo.ro in both
  languages.

### 4.2 Open the follow-up PR (after PR #8 is merged)

```bash
git fetch origin main
git fetch /path/to/followup.bundle refs/heads/claude/project-thread-ax1wgl:refs/remotes/bundle/followup
git switch -c pages-batch4-followup bundle/followup      # any branch name Marius agrees to
git rebase --onto origin/main 01a699e pages-batch4-followup
# #8 is squash-merged, so this replays only the follow-up commits.
bun install --frozen-lockfile && bun run lint && bun run typecheck && bunx turbo run build --filter=@v1/web
```

Then, with Marius's OK: push, open the PR against `main` with `pr-body-2.md`
(drop its first two lines and its last two, which are Claude's attribution, and
fill in the upload counts), and ask Marius to run the R2 upload from the Mac
with this branch checked out. Before the upload, copy the camera page's five
VOD films from the mirror into `public/8f4239b1vodgzp1251222210/` (their paths
are in the kit's `gen/camera_4/videos.txt`; the film check in §4.1 lists them
too). The upload now covers `public/html/` as well (orvibo.com's older pages
keep their images under `/html/images/`). He merges.

### 4.3 Remaining pages

Follow the pipeline in §6 for each page. Notes per page:

- **`yuntai`**: an older page (not in orvibo.com's current lineup, but in the
  mirror), with a spec tab from `yuntai_install`. Start from `pages/camera_4`
  (the same kind of camera app screens, live views and event bubbles); the
  water and climate sensor pages (`pages/water_alarm`, `pages/temp_hum_sensor`)
  have the closest tilted phones and bubbles. If the Claude agent finished it
  after the snapshot, it is in a newer `followup.bundle`.
- **Batch 5**: `mixpad_plus` is the largest page left (2,404 Chinese
  characters, 22 pictures with Chinese). `mixpad_mirror` has 8 films.
- **Batch 6 (HVAC)**: the pages are stacks of pictures. Rebuild text-heavy
  pictures as HTML over cleaned backgrounds (like the Chocolate curtain kit's
  comparison table) and give the rest `role="img"` with a translated
  `aria-label` (like `bodysensor`). The existing `mixstation` page (also HVAC)
  shows the site's style for this category.
- Per page, add the page's terms to `i18n/tr_<slug>.json`, reuse Appendix A,
  and note orvibo.com defects for the PR body (Appendix C shows the style).

### 4.4 Phone pass (after all pages)

The pages are laid out for desktop at orvibo.com's sizes. The root font-size
trick (§7.3) makes rem-based utilities huge on small screens. orvibo.com has
separate phone pages at `https://www.orvibo.com/mobile/cn/...`; they were not
mirrored. Plan this pass with Marius before starting.

### 4.5 Live-site leftovers

See Appendix E. The Chinese legal footer and the missing images are the most
visible ones.

### 4.6 The shop (plan steps 2 to 4)

Not started. Suggested order: settle the open questions in §1.3 with Marius;
set up Medusa from `orvibo.ro`'s `medusa/` with a Romania region, RON, VAT and
the first ~30 products (start from the built product pages); host it in the EU;
add product data, cart and checkout to the `orvibo` site (PayU, bank transfer,
cash on delivery; one courier at fixed rates); then the legal pages, test
orders and launch.

---

## 5. Workspace setup (the kit)

### 5.1 What is in the kit

`orvibo-handoff-kit.tar.gz` unpacks to `orvibo-handoff-kit/`:

| Path | What it is |
| --- | --- |
| `HANDOFF.md` | This file. |
| `orvibo-product-pages/` | The **work root** for the page pipeline (call it `$W`). |
| `$W/tools/` | The pipeline's tools; each starts with a usage docstring. Files named `*.pre-*.py`, `*.v1.py`, `*.v2.py` are older versions kept for reference. `tools/fonts/` has Inter (OFL) and Caveat (OFL). |
| `$W/pages/<slug>/` | Per-page scripts for every page built so far (and the MixPad 7 additions): `patch.py` (hand edits to the generated view), `text.py` (writes the RO/EN text files), `tr.py` (translation table for pictures), `images.py` (hand layout of picture text, writes `overrides.json`), sometimes `clean_sources.py`, `patch_spec.py`, `strips.py`, `spec_gen.py`. |
| `$W/i18n/` | `tr_<slug>.json` (Chinese → `{ro, en}` for pictures), `_merged_<slug>.json` (the same merged over `ui-glossary.json`), `ovr_<slug>.json`, and `ui-glossary.json` (23 shared app labels). |
| `$W/jobs/` | Image jobs: `<slug>.json` (from autojob), `<slug>.final.json` (with overrides, what was published), `*.missing.json` (Chinese strings autojob had no translation for). |
| `$W/ocr/` | OCR results for the batch 4 pages. |
| `$W/gen/<slug>/` | Generated views, `text.zh.json` (the Chinese source of every text key), `assets*.json`, `videos*.txt`, and cleaned source pictures (`*-clean.png`). |
| `$W/data/` | `inventory.json` (all 99 mirror pages: slug, Chinese name, category, live or older, images, videos), `summary.json` (1,242 images: OCR boxes, Chinese chars), `video-info.json` (138 videos: size, duration), `extract_<slug>.json`, `ocr_<slug>.json`, `fast_*.json` (fast whole-image OCR scans). |
| `$W/extra/`, `$W/fonts/` | Two extra Elf motor pictures; Bodoni Moda (OFL). |
| `$W/pr-body.md`, `$W/pr-body-2.md` | PR #8's body as posted, and the follow-up PR's draft. |
| `$W/repo/followup.bundle` | The follow-up commits (§3.3). |
| `notes/` | Claude's original project notes (the source of the appendices), one file per subject. |

Not in the kit: the CN mirror (4.2 GB, on the Mac), the LaMa model (download),
the Python venv, `node_modules`, and `branch.bundle` (an old copy of the PR
branch from before a rebase; don't use it).

### 5.2 Setup

```bash
W=/path/to/orvibo-handoff-kit/orvibo-product-pages
R=/path/to/orvibo                      # a clone of mirzacmarius/orvibo with the branch you work on
cd "$W"

# 1. The mirror. Jobs refer to it as mirror/cn-mirror/... relative to $W.
mkdir -p mirror && ln -s ~/Developer/orvibo/cn-mirror mirror/cn-mirror

# 2. Python 3.10+ venv for the image tools (system Python lacks cv2).
python3 -m venv imgenv && imgenv/bin/pip install -r tools/requirements.txt
#    numpy scipy pillow opencv-python-headless onnxruntime rapidocr-onnxruntime
#    On macOS, `brew install fribidi` gives Pillow's Raqm text layout (else it falls back to basic layout).

# 3. LaMa inpainting model at $W/models/lama.onnx (about 92 MB): the opencv_zoo
#    model inpainting_lama_2025jan.onnx (models/inpainting_lama in github.com/opencv/opencv_zoo).
mkdir -p models   # put the file here as models/lama.onnx

# 4. Node 18+ and Playwright with Chromium for the browser tools.
npm init -y >/dev/null && npm install playwright && npx playwright install chromium

# 5. The site repo.
cd "$R" && bun install
```

Fonts: `tools/imgtext.py` looks in `/usr/share/fonts/opentype/inter` and then
in `tools/fonts/`, which has the Inter OTFs, so nothing to install.

### 5.3 Paths to fix before running

- `tools/withserver.sh` hardcodes Claude's paths
  (`S=/tmp/claude-0/.../scratchpad` and `cd /home/user/orvibo/apps/web`). Set
  `S` to `$W` and the `cd` to `$R/apps/web`. It starts `next dev` on port 3001
  (use 3010 on Marius's Mac), waits for `/ro`, runs your command from `$W`, then
  stops the server.
- `tools/viewocr.py` and a few early job files (`jobs/mixpad7_sec*.json`,
  `jobs/mixpad_7_tail*.json`, `jobs/mixstation_sec*.json`) use absolute
  `/home/user/orvibo/...` and `/tmp/claude...` paths; replace those prefixes
  with your `$R` and `$W` if you rerun them. All later jobs use paths relative
  to `$W`.
- `tools/page_shots.sh` calls `tmp_c/fullshot3.js`; the same file is
  `tools/fullshot3.js`.
- `tools/twcheck.js` loads `tailwind-merge` from the current directory's
  `node_modules`, so run it from `$R/apps/web`.
- Run the Python tools from `$W` (job paths are relative to it). Page scripts
  import from `tools/`: run them as `PYTHONPATH=tools imgenv/bin/python
  pages/<slug>/images.py ...` (not with `-I`, which ignores `PYTHONPATH`).

---

## 6. The per-page pipeline

Settled on MixPad 12 and used for every page since. Run from `$W`, with `PY` =
`imgenv/bin/python`, `WEB` = `$R/apps/web`, `<Name>` = the page's component
name (e.g. `WaterAlarm`). orvibo.com's pages are
`https://www.orvibo.com/cn/product/<slug>.html` with the spec tab at
`<slug>_install.html`, and the mirror uses the same slugs (T1C sits in a folder,
`product/t1c/index.html` and `install.html`, but its mirror slugs are still `t1c`
and `t1c_install`). The dev server is `http://localhost:3001` (3010 on Marius's
Mac). Create output folders (`out/cn`, `gen/<slug>`, …) before writing to them.

1. **Extract** orvibo.com's page from the mirror and generate a first draft:

   ```bash
   node tools/cnextract.js mirror/cn-mirror <slug> data/extract_<slug>.json data/video-info.json
   $PY tools/cn2tsx.py data/extract_<slug>.json mirror/cn-mirror --component <Name>Overview \
       --tsx gen/<slug>/<Name>Overview.tsx --text gen/<slug>/text.zh.json --assets gen/<slug>/assets.json
   node tools/cnrender.js mirror/cn-mirror <slug> out/cn/<slug>.jpg 1920   # reference screenshot
   ```

   The draft uses Tailwind classes on orvibo.com's own rem scale, `next/image`,
   `MarketingVideo` and `ProductReveal`; text goes through `t("key")`.
   Carousels, tabs, marquees, hovers and video modals come out as TODO comments
   to finish by hand. Lazy images are read from `data-original`, and Chinese
   file names become ASCII (`组 16-<hash>.png` becomes `img-16-<hash>.webp`).

2. **Hand edits** go in `pages/<slug>/patch.py GENERATED.tsx OUT.tsx` as
   asserted replacements, so the draft can be regenerated. Text that orvibo.com
   draws as pictures (spec cards, lists, tables) is rebuilt as HTML there. Then:

   ```bash
   $PY pages/<slug>/patch.py gen/<slug>/<Name>Overview.tsx \
       $WEB/src/components/orvibo/products/<slug>/<Name>Overview.tsx
   (cd $WEB && npx biome check --write src/components/orvibo/products/<slug> src/lib/orvibo/products/registry.ts)
   ```

   Use `biome check --write`, not just format: it also sorts imports, which lint
   checks.

3. **Assets**: copy only what the finished view uses, as WebP, to
   `public/<orvibo.com path>.webp` (committed):

   ```bash
   $PY tools/used_assets.py gen/<slug>/assets.json gen/<slug>/assets.used.json $WEB/src/components/orvibo/products/<slug>/*.tsx
   $PY tools/copy_assets.py gen/<slug>/assets.used.json mirror/cn-mirror $WEB/public --quality 86 --videos gen/<slug>/videos.txt
   ```

4. **Text**: `src/lib/orvibo/products/text/<slug>.ro.json` and `.en.json`, flat
   keys such as `sec5.title`, `\n` for a line break, `meta.description` (and
   `meta.spec.description` with a spec tab). The pages done so far generate
   them with `$PY pages/<slug>/text.py $WEB`. Then:

   ```bash
   $PY tools/checktext.py $WEB/src <slug> $WEB/src/components/orvibo/products/<slug>/*.tsx   # must report 0 problems
   node tools/textfit.js http://localhost:3001/ro/product/<slug> 1920                        # copy that overflows its box
   ```

5. **Register** the page (idempotent):

   ```bash
   $PY tools/register_product.py $WEB <slug> --view <Name>Overview \
       --title-en "Water Leak Sensor" --title-ro "Senzor de inundație" [--root-class <slug>] [--spec ProductSpecView|<Name>Spec]
   ```

   It adds the slug to `PRODUCT_SLUGS` and `I18N_SOURCE_ROUTES`
   (`src/app/[locale]/dictionaries/routes.ts`), the definition to
   `src/lib/orvibo/products/registry.ts`, `products.<slug>` to `en.json` and
   `ro.json`, and removes the slug from `upcoming.ts`. Run
   `npx biome check --write` on the touched files afterwards.

6. **Compare** with orvibo.com, section by section, at 1920 px, in both
   languages:

   ```bash
   node tools/pageshots.js http://localhost:3001/ro/product/<slug> out/shots/<slug>/ro 1920   # "#overview > *" by default
   node tools/pageshots.js http://localhost:3001/ro/product/<slug>/spec out/shots/<slug>/ro-spec 1920 '#spec'
   $PY tools/sidebyside.py data/extract_<slug>.json out/cn/<slug>.jpg out/shots/<slug>/ro out/side/<slug> --scale 0.5
   node tools/fullshot3.js http://localhost:3001/ro/product/<slug> out/full/<slug>-ro.jpg 1920   # also writes each section's top and height
   ```

   Scroll-driven parts (sticky choosers, in-view animations, pinned scenes) get
   a live Playwright check; `tools/livecheck_msw.js` is a template. Look for
   off-centre images in the side-by-side.

7. **Pictures with Chinese text**, redrawn once per language:

   ```bash
   $PY tools/ocr_scan.py ocr/<slug>.json --root mirror/cn-mirror files/static.orvibo.com/...   # image paths relative to the mirror; whole image + 2x tiles
   $PY pages/<slug>/tr.py                                                    # writes i18n/tr_<slug>.json (or write it by hand)
   $PY -c "import json; g=json.load(open('i18n/ui-glossary.json')); g.update(json.load(open('i18n/tr_<slug>.json'))); json.dump(g, open('i18n/_merged_<slug>.json','w'), ensure_ascii=False, indent=1)"
   $PY tools/autojob.py ocr/<slug>.json i18n/_merged_<slug>.json jobs/<slug>.json \
       --src-root mirror/cn-mirror --out-root out/i18n --missing jobs/<slug>.missing.json --assets gen/<slug>/assets.json
   PYTHONPATH=tools $PY pages/<slug>/images.py pages/<slug>/overrides.json         # hand layout, if any
   $PY tools/apply_overrides.py jobs/<slug>.json pages/<slug>/overrides.json jobs/<slug>.final.json
   $PY tools/preview_jobs.py jobs/<slug>.final.json out/preview/<slug>                # check every picture by eye
   $PY tools/publish_i18n.py $WEB jobs/<slug>.final.json                            # run from $W
   ```

   `publish_i18n.py` writes `public/orvibo/i18n/<locale>/…webp` and regenerates
   `src/lib/orvibo/localized-assets.generated.ts`. The view then uses
   `localizedAssetUrl(path, locale)` (via the page helpers) for those pictures.
   autojob gets layout wrong often; Appendix B has the fixes.

8. **Checks** before committing, from `$WEB`: `bun run lint`,
   `npx tsc --noEmit` (with `noUncheckedIndexedAccess`, regex groups need
   `?? ""`), and `node $W/tools/twcheck.js <the page's .tsx files>`; then the
   full CI checks from the repo root (§2.1).

Spec tabs: add `spec.*` keys in display order plus `meta.spec.description`, a
`spec` tab and `segmentViews: { spec: ProductSpecView }` (or the page's own
spec view). orvibo.com's `<slug>_install.html` is usually that tab.

Keep the page's scripts in `pages/<slug>/` so the page can be regenerated, and
list orvibo.com's defects you fixed for the PR body.

---

## 7. Code map and conventions in `apps/web`

### 7.1 Where things are

- Routes: `src/app/[locale]/...`; product pages at
  `src/app/[locale]/product/[slug]/...`. `src/middleware.ts` redirects `/` and
  paths without a locale to the default locale (`ro`) and maps orvibo.com's old
  `*.html` URLs to the new paths.
- Locales: `src/lib/orvibo/i18n.ts` (`LOCALES = ["ro", "en"]`,
  `DEFAULT_LOCALE = "ro"`). Site copy: `src/app/[locale]/dictionaries/en.json`
  and `ro.json`. Product page copy: `src/lib/orvibo/products/text/<slug>.<ro|en>.json`,
  loaded by `products/page-text.ts`.
- Product registry: `src/lib/orvibo/products/registry.ts` (slug, title,
  `rootClass`, tabs, `View`, `segmentViews`); types in `products/types.ts`;
  menu-only slugs in `products/upcoming.ts`.
- Views: `src/components/orvibo/products/<slug>/<Name>Overview.tsx`, plus
  `<Name>Spec.tsx` for custom spec tabs.
- Media helpers: `src/lib/orvibo/assetUrl.ts`, `localizedAsset.ts`,
  `localized-assets.generated.ts`, `publicAssetFilter.ts`.
- Public files: `public/guanwang_second/` (orvibo.com's static images),
  `public/html/` (orvibo.com's older pages' images), `public/orvibo/i18n/<ro|en>/`
  (translated pictures), `public/orvibo/products/` (page graphics made here),
  `public/orvibo/videos/` (films).
- Scripts: `apps/web/scripts/orvibo-*.ts` (asset sync, R2 upload and checks,
  i18n report).

### 7.2 Shared product components (`src/components/orvibo/product/`)

`ProductPageShell`, `ProductDetailNav`, `ProductReveal` (fade-up on entering
the viewport), `ProductInView` (sets `data-shown` on a group), `ProductStickyScene`
(sticky 100vh backdrop that sets `data-active`), `ProductScrollFrames` (a sticky
frame that swaps pictures as a tall section scrolls by), `ProductMoreToggle`
(orvibo.com's "more" link that slides a section open), `ProductFocusCarousel`
(looks `films`, `rooms`, `lock`, `products`), `ProductSlideshow` (Swiper;
pagination `bars` or `swatches`, `autoplay`, per-slide `tone`), `ProductSceneTabs`,
`ProductParallaxTitleMask`, `ProductBackgroundSection`, `ProductSpecView` (the
shared one-line-per-spec tab), `ProductSpecSheet`, `ProductSpecScroller` (wide
spec tables with a sticky label column), `ProductSpecificationsSection`,
`BalancedLines` (balances each `\n` part of a text on its own),
`productPageHelpers`. Also `products/chuanglian/CurtainKitSpec` (curtain kit
spec tab with load table and install guide).

A view starts like this:

```tsx
export function WaterAlarmOverview({ locale, text, common }: ProductViewProps) {
  const { t, ts, img, bg, lines } = productPageHelpers(locale, text);
  // t("key") returns a ReactNode (line breaks kept), ts("key") a plain string (for alt/aria),
  // img(path) and bg(path) resolve media through assetUrl/localizedAssetUrl.
```

### 7.3 Gotchas

- **Tailwind drops arbitrary `duration-[…]`, `delay-[…]` and `ease-[…]`**
  (tailwindcss-animate makes them ambiguous; no CSS, no error). Write
  `[transition-duration:600ms]`, `[transition-delay:…]`,
  `[transition-timing-function:…]`. `tools/twcheck.js` flags them.
- `ProductReveal` and friends merge `className` with tailwind-merge, which drops
  a `leading-*` placed before `text-[size]`: put the size first.
- Preflight makes `img` a block; an image centred by its parent's `text-align`
  needs `inline`.
- HTML that replaces words in a picture gets `font-normal`; the site's default
  weight is 500.
- White orvibo.com pages need `bg-white` on `#overview` (the site's background
  is `#f0f2f5`).
- **Root font size:** `src/styles/orvibo.css` copies orvibo.com's rem trick
  (75px below 1360px wide, 100px around 1760px, `83.34vw/16` above 1920px), so
  rem-based utilities are 4 to 6 times their usual size. Use px for chrome, or
  `calc(var(--orvibo-rem-scale)*N)` for sections that scale.
- `.orvibo-site a { color: inherit }` beats `text-*` classes on a link: put the
  colour on the parent.
- Next 14.2.7: `dynamicParams = false` together with this middleware turns
  unknown slugs into 500s (NoFallbackError); `notFound()` during an on-demand
  render sends an empty shell and the 404 page renders only client-side.
- If `tsc` reports missing modules under `apps/web/.next/types` after you delete
  a route, remove `apps/web/.next`.
- Pages drawn as pictures on orvibo.com: each picture gets `role="img"` and
  `aria-label={ts("alt.KEY")}`.

---

## Appendix A: translation conventions and glossary

The machine-readable tables are in the kit: `i18n/ui-glossary.json` (shared app
labels) and `i18n/tr_<slug>.json` (each page's pictures), all
`{"中文": {"ro": "…", "en": "…"}}`. Narrow tiles may use shorter forms than the
glossary (玄关 is "Hall" / "Hol" on tiles).

### A.1 General rules

- Romanian marketing copy addresses the reader as "tu". In-app notifications
  drawn in pictures use the formal form ("Verificați").
- English: American spelling.
- Romanian numbers: decimal comma (3,3 V; 27,2 dB), thousands dot (10.000),
  and "de" from 20 up ("22 de moduri", "15.000 de cicluri", "3000+ de puncte de
  service"). Write "90%" without a space in Romanian, as on the earlier pages.
- Write °C (U+00B0 + C), never ℃. Ranges: "−20…60 °C" (RO) / "−20 to 60 °C"
  (EN); "220 V c.a." / "220 V AC"; "100–240 V~, 50/60 Hz"; "2700–6500 K".
- Write "Zigbee", not "ZigBee".
- Logos that contain Chinese (BOE and similar) stay as they are.
- orvibo.com's disclaimer is `common.productDisclaimer` in the dictionaries.
- orvibo.com's `.show` animations are captured in their final state; sections
  commented out in orvibo.com's HTML stay out.
- Where orvibo.com is plainly wrong (a label on the wrong tile, a repeated
  heading, a wrong battery size), the translation is correct and the fix is
  listed in the PR body.
- Chinese burned into films can't be fixed (Marius chose to leave films as they
  are); posters are translated.
- English-only text in pictures is translated into Romanian too.
- Dates on device screens: "Vineri, 26" / "Friday 26"; "Mie., 23 oct." /
  "Wed, Oct 23"; "Mar., 27 sept." / "Tue, Sep 27"; "Mie. 17" / "Wed 17";
  "17 feb." / "Feb 17". 上午10:02 = "10:02" (RO) / "10:02 AM" (EN).

### A.2 Product and brand names

- MixPad X = "MixPad 12" (RO "Panou inteligent MixPad 12"); MixPad 7 Ultra =
  "MixPad 10"; MixPad M2 = "MixPad 4" ("Comutator vocal inteligent").
- MixPad S flagship: "MixPad S Flagship" in copy.
- 小欧管家 = "ORVIBO Butler" / "Majordomul ORVIBO"; in voice commands "Butler," /
  "Majordomule," ("Butler, turn on the lights." / "Majordomule, aprinde
  lumina.").
- 智家365 and 欧瑞博智家App = "ORVIBO Home".
- MixPad Elf: "Întrerupător inteligent MixPad Elf (gateway)" / "MixPad Elf
  Smart Switch (Gateway)".
- Bach: "Întrerupător inteligent Bach" / "Bach Smart Switch". Defy:
  "Întrerupător inteligent Defy" / "Defy Smart Switch" (app title "Întrerupător
  Defy"). Gauss (slug `gaosi`, 高斯): "Ecran de control vocal Gauss" / "Gauss
  Voice Control Screen". MixSwitch (slug `mixpad_switch`, 智能开关):
  "Întrerupător inteligent MixSwitch" / "MixSwitch Smart Switch" (not "voice
  switch").
- Lighting: 防眩智能筒射灯 S3 = "Anti-glare Smart Downlight S3" / "Spot încastrat
  inteligent antiorbire S3"; Downlight page = "Smart Tunable Light" / "Lumină
  inteligentă reglabilă"; 苍穹 Pro 拟自然光灯 = "Cangqiong Pro Natural Light" /
  "Lumină naturală Cangqiong Pro"; 护眼筒射灯 Q3 = "Eye-care Downlight" / "Spot
  pentru confortul ochilor"; S5 智能射灯 = "Smart Spotlight" / "Spot inteligent";
  Bauhaus (slug `light`) = "Bauhaus Smart Ambient Lights" / "Lumini ambientale
  inteligente Bauhaus"; 刀锋 (slug `daofeng`) = "Blade Ultra-thin Magnetic Track
  Light" / "Lampă pe șină magnetică ultrasubțire Blade"; SOPRO Q = "SOPRO Smart
  Lighting Q Series" / "Iluminat inteligent SOPRO, seria Q"; SOPRO S = "SOPRO
  Smart Lighting S Series" / "Iluminat inteligent SOPRO, seria S".
- Curtains: Chocolate kit = "Smart Curtain Kit, Chocolate Edition" / "Kit de
  draperie inteligentă, ediția Chocolate"; 超级智能窗帘 = "Super Smart Curtain" /
  "Draperie super inteligentă"; 超静音智能窗帘 ZigBee 版 = "Ultra-quiet Smart
  Curtain (Zigbee Edition)" / "Draperie inteligentă ultrasilențioasă (ediția
  Zigbee)"; 超静音智能开合帘电机 = "Ultra-quiet Smart Curtain Motor" / "Motor
  inteligent ultrasilențios pentru draperii"; 超级智能开关 (MixPad C) = "Super
  Smart Switch" / "întrerupător super inteligent"; 智控版 = "Smart Control" /
  "Control inteligent".
- Locks: 智能门锁 S2 = "Smart Lock S2" / "Încuietoare inteligentă S2" (the CN
  nickname 黑武士 is written "S2"). T1C finishes: 玄武黑 "Basalt Black" / "Negru
  bazalt", 铜砂金 "Copper Gold" / "Auriu cupru".
- Sensors: 人体传感器 = "Motion Sensor" / "Senzor de mișcare" ("PIR sensor" /
  "Senzor PIR" in narrow app lists); Mini网关 = "Mini gateway" / "Gateway Mini";
  智能水浸探测器 = "Smart Water Leak Sensor" / "Senzor inteligent de inundație"
  (the menu drops "smart"); 温度探测器 / 湿度探测器 = "Temperature sensor" /
  "Senzor de temperatură", "Humidity sensor" / "Senzor de umiditate".
- MixPad 7 / MixPad Extra: 智能可视对讲门口机 = "Smart video door station" /
  "Post de apel video inteligent"; 门口机 = "Door station" / "Post de apel";
  远程授权开门 = "Remote door opening" / "Deschidere la distanță"; 500W 双摄 =
  "5 MP dual camera" / "Cameră dublă AI de 5 MP"; 全面屏 = "full-screen" / "fără
  margini".

### A.3 Shared app and device-screen labels

- 开/关 = On/Off, Pornit/Oprit (light state: Aprins/Stins); 开/停/关 (curtains) =
  Open, Stop, Close / Deschide, Stop, Închide.
- Rooms: 客厅 = Living room / Living ("Living" in both in a tight app title);
  餐厅 = Dining room / Sufragerie (on app tiles the glossary's RO is "Dining");
  卧室/主卧 = Bedroom /
  Dormitor; 玄关 = Hall / Hol; 书房 = Study / Birou; 浴室/卫生间 = Bathroom / Baie;
  茶室 = Tea room / Camera de ceai; 默认房间 = Default room / Cameră implicită;
  全屋 = All / Toate.
- App tabs: 家/情景/安防/商城/我的 = Home/Scenes/Security/Shop/Profile,
  Acasă/Scene/Securitate/Magazin/Profil. On the sensor pages 智能场景 =
  Scenes / Scenarii and the tabs are Home/Scenes/Security/Profile,
  Acasă/Scenarii/Securitate/Profil. 情景/场景 = Scenes / Scene.
- Scenes: 全开/全关 and 灯全开/灯全关 = All on/All off, Aprinde tot/Stinge tot;
  明亮 = Bright / Luminos; 柔光 = Soft / Blând; 夜光 = Night / Noapte; 照明 =
  Lighting / Iluminat; 睡眠 = Sleep / Somn; 起床 = Wake up / Trezire; 会客 =
  Guests / Oaspeți; 回家 = Home / Acasă; 离家 = Away / Plecare; 就餐 = Dinner /
  Cină; 影院 = Cinema; 娱乐 = Entertainment; 微光 = Dim light; 阅读 = Reading /
  Lectură; 温馨 = Warm or Cozy / Cald or Primitor; 休息 = Rest / Odihnă; 氛围 =
  Ambient / Ambianță; 睡觉/影院/晨起模式 = Sleep/Cinema/Wake-up mode, Modul
  somn/cinema/trezire. "08:00执行" = "Runs at 08:00" / "Rulează la 08:00".
- Security: 离家模式 = Away mode / modul Plecat; 在家布防/外出布防/撤防 = Arm home /
  Arm away / Disarm, Armare acasă / Armare plecat / Dezarmare; 正在报警 = Alarm
  triggered / Alarmă declanșată; 安全 = Safe / În siguranță; 门锁 (group) = Door
  locks / Încuietori; 门 = Door / Ușă; 温湿度 = Climate / Climat.
- Devices: 色温灯 = Tunable light / Lumină reglabilă (on Defy and MixPad 4:
  "Lumină ajustabilă"); 色温灯带 = Light strip / Bandă LED; 灯带 (炫彩) = RGB light
  strip / Bandă LED RGB; 轨道灯 = Track light / Lampă pe șină; 落地灯 = Floor lamp /
  Lampadar; 筒灯 = Downlight / Spot încastrat; 射灯 = Spotlight / Spot; 吸顶灯 =
  Ceiling light / Plafonieră; 吊灯 = Pendant light / Lustră (Bauhaus app:
  Pendant / Pendul); 北美灯 = Lamp / Lampă; 智能插座 = Smart plug / Priză smart;
  风扇 = Fan / Ventilator; 空调 = AC / Clima; 窗帘 = Curtains / Perdele; 百叶帘 =
  Blinds / Jaluzele; 热水器 = Water heater / Boiler; 地暖 = Floor heating /
  Încălzire; 新风 = Fresh air / Ventilație; 人体传感器 = Motion sensor / Senzor
  prezență (S5 panel); 离线 = Offline.
- Climate panel: 温度 = Temperature / Temperatură; 室内温度 = Indoor / Interior;
  模式 = Mode / Mod; 制冷 = Cooling / Răcire; 除湿 = Dry / Uscare; 弱风 = Low fan /
  Viteză mică; 左右风 = Swing / Oscilare; 优 (air quality) = Excellent /
  Excelentă; 亮度 = Brightness / Luminozitate; 色温 = Color temp / Nuanță;
  VRV空调面板 = VRV AC panel / Panou AC VRV.
- Weather and greetings: 下午好 = Good afternoon / Bună ziua; 多云转晴 = Clearing
  up / Se înseninează; thunderstorms = Thunderstorms / Furtuni; "H:30° L:25°" /
  "Max. 30° Min. 25°".
- Other UI: 完成 = Done / Gata; 使用指引 = User guide / Instrucțiuni; 好的 = Sure /
  Sigur; 设备信息 = Device info / Informații dispozitiv; 剩余电量 = Battery level /
  Baterie rămasă; 详细数据 = Details / Detalii; 今天 = Today / Azi; 通知 =
  Notifications / Notificări; 当前温度/湿度 = Current temperature/humidity,
  Temperatura/Umiditatea actuală; 本月节能 = Saved this month / Economie luna
  aceasta; 度 = kWh; energy tip "Energy saving: 5 lights on, turn off" /
  "Economie: 5 lumini aprinse, stinge-le". 第一代 / 第1代 = 1st gen / Generația 1.
  吋 / 英寸 = -inch / inchi (in specs: in / inchi).

### A.4 Panels and switches

- MixPad S finishes 雅灰/钛白/浅金/轻奢灰 = Elegant Gray / Titanium White / Light
  Gold / Luxe Gray, Gri elegant / Alb titan / Auriu deschis / Gri lux (MixSwitch
  uses the same).
- Bach scene keys drop 模式: 日常 Zilnic/Everyday, 夜间 Noapte/Night, 起夜 Lumină
  de noapte/Night light, 观影 Film/Movie, 亲子 Familie/Family, 柔和
  Estompat/Soft, 冥想 Meditație/Meditation, 阅读 Lectură/Reading, 休闲
  Relaxare/Relax, 娱乐 Divertisment/Entertainment, 工作 Lucru/Work, 会客
  Oaspeți/Guests, 明亮 Luminos/Bright, 迎宾 Bun venit/Welcome. Light tiles:
  客厅灯 Living/Lounge, 玄关灯 Hol/Hall. Finishes 御馥金/幽邃蓝/秘境银/铅墨灰 =
  Auriu imperial / Albastru adânc / Argintiu mistic / Gri grafit, Imperial Gold /
  Deep Blue / Mystic Silver / Graphite Gray.
- Defy: 灯 key = Lumină / Light; 卧室灯 key = Dormitor / Bedroom.
- Gauss: 帮我… commands drop "please" („Aprinde lumina” / “Turn on the light”).
- MixSwitch spec: 电池款 = panou cu baterie / battery panel; 一开/二开/三开 = o
  clapă, două clape, trei clape / one-, two-, three-gang; 五孔插座 = priză cu cinci
  orificii / five-hole socket; 零火线/单火线皆可 = Fază și nul sau doar fază / Live +
  neutral or live wire only; 200W/路 = 200 W pe circuit / per circuit; 工作温度/湿度
  = Temperatură/Umiditate de lucru, Operating temperature/humidity. Keys
  卧室灯/睡眠/起床 = Dormitor/Somn/Trezire, Bedroom/Sleep/Wake up; 灯光全关 (spoken)
  = "Stinge luminile." / "All lights off."
- MixPad Elf: 灯全开/灯全关 as above; 吊灯 = Lustră / Pendant light.

### A.5 Lighting

- 防眩 = anti-glare / antiorbire (one word in RO); 筒射灯 = downlight / spot;
  手术室级 = surgical-grade / de nivel chirurgical (banner: „chirurgicală”; keep
  the footnote asterisk); UGR 眩光指数 = UGR glare index / Indice UGR; 光通量 =
  light output / flux luminos (S5 strip: Light output / Flux luminos; SOPRO:
  Luminous flux); 显色 Ra = Ra, "true colors" / "culori fidele"; 显色指数 = color
  rendering / redarea culorilor, or CRI / IRC in spec rows (Blade, SOPRO);
  频闪 = flicker / pâlpâire; 无可视频闪 = no visible flicker / fără pâlpâire
  vizibilă (narrow: Flicker-free / Fără pâlpâire); SPWM dimming = reglaj SPWM;
  色温 = color temperature / temperatura culorii; 万级亮度可调 = 10,000 brightness
  levels / 10.000 de trepte de luminozitate; 普通射灯 = standard spotlight / spot
  obișnuit.
- Downlight page: 智能筒灯 = Smart Downlight / Spot încastrat inteligent; 智能射灯
  = Smart Spotlight / Spot inteligent; 暖白光/冷白光 = Warm white / Cool white, Alb
  cald / Alb rece; 缓亮缓灭 = Soft on/off / Pornire și oprire lină; 产品墙射灯 =
  Spotlight / Spot; 产品区 = Showroom; 如有侵权，请联系删除 = "If infringing,
  contact us to remove" / "Dacă încalcă drepturi, contactați-ne".
- Cangqiong: 有益/有害蓝光 = beneficial (narrow: healthy) / harmful blue light,
  lumină albastră benefică (bună) / nocivă; 无害光 = harmless light / lumină
  inofensivă; 精密零件 = precision parts / piese de precizie.
- Q3: 补充有益红光 = Healthy red light / Lumină roșie bună; RG0 豁免级 = RG0
  risk-free / Lumină albastră RG0; risk table Exempt (no risk) / Fără risc
  (scutit), Low risk / Risc scăzut, Moderate risk / Risc moderat; 低/高显色 pills
  = dull / true colors, culori șterse / fidele; 克尔(KR)微棱镜 = KR micro-prism (no
  "Kerr"); 小山丘 (light on the wall) = arcs of light / arcuri de lumină; 洗墙 =
  wall wash / lumină pe perete; 正白/暖白/暖黄光 = neutral white / warm white / warm
  yellow, alb neutru / alb cald / galben cald (write "5000 K"); 汽车级工艺 =
  automotive-grade craft / execuție de nivel auto.
- S5: Mix-Light™ 万分级调光 = Mix-Light™ 10,000-level dimming / Reglaj Mix-Light™
  cu 10.000 de niveluri; Matrix Group 千灯群控 = Matrix Group control for 1,000
  lights; 灯杯 = cup / cupă (半月 half-moon / semilună, 椭圆 oval / ovală, 小圆 small
  round / rotundă mică); 光束角 = beam angle / unghi de fascicul; 腕表刻度式调角 =
  watch-dial tilt / înclinare gradată ca un cadran de ceas; FERMAT螺线纹透镜 =
  FERMAT spiral lens / lentile cu spirală FERMAT; 防眩指数 = Glare index / Indice
  orbire; 主光 = Main light / Lumina principală; 色温/色彩 = Color temp / Color,
  Nuanță / Culoare; 川流式鳍片 = flow-through fin / radiator cu aripioare în flux;
  汽车工业纳米喷涂 = automotive nano coating / vopsire nano auto; 航空铝材 =
  aerospace aluminum / aluminiu aeronautic; 整灯/驱动 N年质保 = Lamp/Driver: N-year
  warranty, Lampă/Driver: garanție N ani; 尊享VIP服务 = VIP service / Servicii VIP.
- Bauhaus: 包豪斯系列 = Bauhaus Series / Seria Bauhaus; 智能餐吊灯 = Smart Dining
  Pendant / Pendul inteligent pentru masă; 智能落地灯 = Smart Floor Lamp /
  Lampadar inteligent; 智能壁灯 = Smart Wall Lamp / Aplică inteligentă; 手势感应 =
  Gestures / Gesturi; 灯柱(触摸)开关 = Pole (touch) switch / Comutator (tactil) pe
  tijă; 万向灯头 = swivel head / cap rotativ; 格栅防眩 = anti-glare grille / grilă
  antiorbire; 聚光透镜 = focusing lens / lentilă de focalizare; 背部氛围透镜 =
  uplight lenses / lentile spre tavan; 吊灯绳 = cord / cablu.
- Blade: 磁吸轨道 = magnetic track / șină magnetică; 折叠格栅灯 = Folding Grille
  Light / Lampă cu grilaj pliabil; 明眸吊灯 = Bright Eye Pendant / Pendul Bright
  Eye; 超薄磁吸射灯 = Ultra-thin Magnetic Spotlight / Spot magnetic ultrasubțire;
  磁吸格栅灯 = Magnetic Grille Light / Lampă magnetică cu grilaj; 磁吸电源 =
  Magnetic power supply / Sursă magnetică; 超薄轨道 = Ultra-thin track / Șină
  ultrasubțire; I/T/一字L/直角L 连接器 = I/T/Flat L/Corner L connector, Conector
  I/T/L plat/L de colț; 单灯智控 = smart control for every light / fiecare lampă,
  control inteligent; 断网可控 = Works without internet / Funcționează fără
  internet; 千盏 = 1,000 lights / 1.000 de lumini; 睡觉模式 = Sleep mode / Modul
  somn.
- SOPRO Q: Q系列 = Q Series / Seria Q; 柔光系列 = Soft Light series / seria Lumină
  blândă; 无主灯 = no main light / fără lustră; 泛光灯 = Magnetic floodlight / Lampă
  magnetică liniară; 调光灯 = Dimmable light / Lumină dimabilă; 调光模块 = dimming
  module / modul de reglaj; 预埋式 = plaster-in / îngropată în tavan; 嵌入式 =
  recessed / încastrată; 明装 = surface-mounted / aparentă; control modes
  触屏/语音/按键/App = Touch/Voice/Buttons/App, Tactil/Voce/Butoane/App; 小时 =
  hours / ore.
- SOPRO S: 无需唤醒 = no wake word / fără cuvânt de activare; 超人因级极智照明 =
  Human-centric smart lighting / Iluminat inteligent centrat pe om; 极智秒变 =
  Instant smart scenes / Scene inteligente, instant; 100平…300平 = "100 m² that
  live like 300 m²"; 款灯具 = light fittings / corpuri de iluminat; SCC百灯群控 =
  "SCC: 100 lights at once"; 大别墅都超稳 = "Rock-solid in big villas" / "Stabil și
  în vile mari"; figure labels Flicker-free, Low blue light, Deep anti-glare, High
  CRI, Luminous flux, 10-year lifespan / Fără pâlpâire, Lumină albastră redusă,
  Antiorbire profundă, IRC ridicat, Flux luminos, Durată de 10 ani.

### A.6 Curtains

- Motors and parts: 帘片 = slats / lamele; 超强静音 = Ultra quiet /
  Ultrasilențios; 直流无刷电机 = Brushless DC motor / Motor DC fără perii;
  梅花型输出轴 = star-shaped shaft / arbore în stea; 百分级 = By the percent / La
  procent; 超大扭力 = High torque / Cuplu mare; 锌合金 = Zinc alloy / Aliaj de
  zinc; 对开帘 = Split curtain / Draperie dublă; 滑车 = runner(s) /
  cărucior(oare); 双面电泳 = double-sided e-coating / electroforeză pe ambele
  fețe; 副传动箱 = Secondary gearbox / Transmisie secundară; 专用滑轮 = Track
  gliders / Role pentru șină; 电机驱动器头部/尾部 = Motor drive, front/back end /
  Motorul, partea din față/spate; 学码键 / 对码键 = Pairing button / Buton de
  asociere; 干触点接口 = Dry contact port / Port contact uscat; 电源接口 = Power port
  / Port de alimentare; 窗帘盒 = curtain box / nișă (pentru draperii); 有/无窗帘盒 =
  With/Without a curtain box / Cu/Fără nișă pentru draperii; 顶装支架 = Top-mount
  bracket / Suport de montaj superior; 双轴承 = Dual bearings / Rulmenți dubli;
  额定电源 72W = Rated power / Putere nominală.
- Install guide: 一字窗/U型窗/L型窗/梯型窗 = Straight, U-shaped, L-shaped,
  Trapezoid window / Fereastră dreaptă, în U, în L, trapezoidală;
  直轨/L型轨道/梯形轨道/弧形轨道 = Straight, L-shaped, Trapezoid, Curved track /
  Șină dreaptă, în L, trapezoidală, curbată; 单轨/双轨 = Single/Double track /
  Șină simplă/dublă; 单开/双开 = One-way / Split, Simplă / Dublă; 中心点 = Center
  point / Punct central; 做满墙 = Wall to wall / De la perete la perete.
- Copy: 一米阳光 = A sliver of sun / O rază de soare; 午间小憩 = Afternoon nap / Pui
  de somn; 免测量可伸缩导轨 = measure-free telescopic track / șină telescopică fără
  măsurători.

### A.7 Locks and sensors

- Locks: 锁芯 = cylinder / cilindru; 锁体 = lock body / broască; 认假率 = false
  acceptance rate / rată de acceptare falsă.
- Sensors: 吊灯 = Pendant light / Lustră; 除湿剂 = moisture absorber / absorbant
  de umiditate; 水浸探测器 = Water leak sensor / Senzor de inundație; app tiles on
  the security kit: Senzor PIR, Fum/Smoke, CO, Gaz/Gas.
- A child's name in the V5 alert picture (小明) became "Alex".

---

## Appendix B: image recipes

How Chinese text in pictures was redrawn when autojob's first pass was not
enough. Tools are in the kit's `tools/` (usage docstrings); each page's
`pages/<slug>/images.py` holds its hand layout and is the best template for a
similar picture. Start from autojob, then reach for these in order of effort.

### B.1 Overrides (`apply_overrides.py`; full key list in its docstring)

`boxRight` (move a card title's right edge), `keep` (restore an icon inside an
OCR box), `add` + `erase` (labels OCR missed), `src` (draw on a pre-cleaned copy
made by a page script), `resetErase` / `resetTexts` / `resetRows` (lay a
picture out by hand), `paste` (move an icon or chevron around a longer label;
`"locale"` limits it to one language, `"radius"` keeps rounded corners, `"delta":
true` moves only an icon's ink), `addRows`, `rects` (with `"locale"`), `front`
(`[{box, skin: 35}]` puts a finger back over a label), `drop`, `skip`.

### B.2 imgtext features (`tools/imgtext.py`)

- Erase methods `auto|telea|ns|fill|lama|harmonic|clear`; masks `box`, `poly`
  (the OCR polygon, for tilted labels next to digits), `auto` with `thresh`.
  `clone` + `shift` copies background along a straight edge or from clean wall
  below (grainy plaster walls, where harmonic leaves smooth ghosts).
- Text: `frame` redraws a pill (`"fill": true` covers a short one; `"x0"` +
  `"feather"` extends one on a photo; `{"y": [y0, y1], "padX", "fill", "color",
  "radius", "corners": [tl, tr, br, bl]}`); `angle` (clockwise) + `pivot` for
  tilted labels; `mirrorY` for floor reflections; `skew` for perspective
  screens (measure it on a nearby digit); `gradient` `{from, to, angle}` (90 =
  left to right, 180 = top to bottom) or `{"stops": [[t, hex], ...], "span":
  "ink"}` for titles with a baked-in gradient; `opacity`; `shadow`; `tracking`
  (em); `baseline`; `bgColors` (colour glyphs by the background under them). An
  empty locale text is skipped (per-language specs).
- `capline()` in the images.py files centres Latin capitals on the CJK centre:
  top = cy − 0.605 × size; baseline = cy + 0.365 × size (cap height 0.727 em).
- Weights: compare each CN title's ink density before choosing a weight. Newer
  pictures set a title's second phrase in bold: build it as `addRows` items with
  their own font (`title_row()` in `pages/miniHost/images.py`).
- Tiny screen text that OCR misses: colour = the brightest 2 to 3% of glyph
  pixels, blur 0.2 to 0.5; Latin at 4.4 to 6.5 px with blur 0.3; hand erases
  (`harmonic`, pad 1) per label. 5 px button captions on phone screenshots are
  translated too. A 7.7 px label needed SemiBold and a lighter colour to match.
- OCR mistakes seen: an upside-down 空调 missed (check every device screen by
  eye); a TÜV certificate's ☒ read as 区 (drop such pictures from the OCR file or
  `skip` them); 水浸 read as 水漆.
- When autojob drops half the labels of a picture although OCR found them (T1C
  `index_bg2`, `bg6`), rebuild it with `resetTexts` and hand erases.

### B.3 Recurring picture types

- **Chat and speech bubbles** (Defy): erase each with `harmonic` + mask `box` +
  pad 0, redraw as a text `frame` with `fill`, radius just under half the
  height, `corners` with the tail corner 0. With a tail: erase, `keep` the tail,
  redraw the body with a frame around two lines.
- **Translucent bubbles too short for the new text** (MixSwitch, Downlight,
  Bauhaus, SOPRO): a page `clean_sources.py` inpaints the text, un-blends the
  veil right of `x0` and the text's frame `x0` + `opacity` redraws it longer.
  Fit the veil as `out = (1 − a)·photo + a·colour`; for a white veil
  `a = (in − out)/(255 − out)` ≈ 0.12 to 0.13; when the per-channel regression
  is unstable, pool all channels (grey veil `#cfcfcf` a 0.166, white a 0.124).
  Measure a bubble's right end on a luminance profile.
- **Bubbles as HTML** (water leak sensor): draw the bubble picture as a CSS
  border image (`border-l-[74px] border-r-[N px]` +
  `[border-image-slice:0_N_0_74_fill]`, `borderImageSource` from `img()`), so the
  middle stretches with HTML text and both ends and the tail stay.
- **Pills** (curtain pages, V5): erase with a flat fill and redraw with a text
  frame `{fill, color, radius}`, one spec per language with padX =
  max(30, (CN width − text)/2) so the CN width stays unless the text needs more
  (`pill` in `pages/chuanglian/images.py`). Alert pills that need room grow with
  a frame whose `x0` starts in the pill's dark right end (colour sampled there).
  Filled people-card pills: radius = half height, padX = max(21, (150 −
  text)/2).
- **Tilted phone apps** (S3, Blade, water leak sensor): one `Frame(cx, cy,
  angle)` per row (`tools/rotink.py` measures each label's ink in its u/v
  frame; `rotview.py` straightens, `rotmeasure.py` measures); labels are
  rotated texts with `pivot` and blur 0.45, erases are poly masks. Blade's app
  card is S3's photo scaled (x' = 0.88926x + 45.05, y' = 0.88926y + 140.26), so
  it reuses S3's recipe through that transform. A notification that needs a
  second line: move the separator under it (`pages/water_alarm/clean_sources.py`).
- **Text on a tilted phone, simpler cases**: erase with a poly mask from the OCR
  quad, draw level, then angle = the quad's top-edge angle, pivot = centre
  (titles) or left end (rows).
- **Phone status bars**: paint out the carrier name with a flat fill and paste
  the Wi-Fi icon next to the signal bars (`no_carrier` in
  `pages/chuanglian2/images.py`).
- **Gradient titles**: measure the line's gradient in bands and give each text
  its stretch of it (`part()`, `ends()`, `two_tone()` in the Cangqiong and Q3
  scripts); a title split by a badge is two texts, the badge pasted per
  language.
- **Rotated vertical strips** (S2): one rotated Latin line (`angle` 90 reads top
  to bottom), `tracking`, a top-to-bottom gradient; erase only the glyphs (mask
  auto, method `lama`, `thresh`) so wood texture survives.
- **Icon + label groups centred on a card** (S2): erase each icon (harmonic
  box), paste it per language where the translated label's length puts it, and
  draw each language's label as its own `add` spec.
- **A box that needs an extra line**: a page script writes a cleaned copy with
  one inner row and column repeated (numpy); the override's `src` points at it,
  with `resetErase` and the label erases re-added.
- **Digits in pictures** ("800", "50000"): paste the original glyph block per
  language and draw the words around it on the digits' baseline; a Chinese unit
  by a big figure (小时, 3年, 7天) becomes a short Latin word with its cap top level
  with the digits, or a small grey word, or an HTML span (SOPRO Q's SVG).
- **Captions on a transparent band**: erase `clear` + white text with `opacity`
  (0.7 title, 0.5 note).
- **Hand-written slogans** (Bauhaus, Super Smart curtain): redraw in Caveat
  (`tools/fonts/Caveat-Regular.ttf`, placed with `baseline`); a page
  `clean_sources.py` keeps only the swoosh, or blends rows across the stroke.
- **Tooltips too narrow** (S5): rebuild wider around the pointer from pastes of
  the original (left end, right end, a text-free slice repeated), each with
  `locale`.
- **Text with alpha in a PNG**: use the same `opacity` (S5's strip: `#f5d9bd` at
  alpha 179).
- **Tables or lists baked into a background** (Chocolate kit): make them HTML
  and clear the picture (coarse harmonic solve on a 1/8 grid plus 1,500 Jacobi
  steps in `pages/chuanglian/clean_sources.py`; imgtext's harmonic is too slow
  above ~100k px), replacing the shared image in `public/` instead of making
  per-language copies.
- **Strips with names under photos** (Blade, SOPRO): crop to the photos
  (`strips.py`) and make the names HTML. Voice-command chips became HTML with
  faces cut from CN's chip picture.
- **Picture-only pages** (motion sensor, Mini gateway, HVAC): redraw each
  picture per language, give it `role="img"` + `aria-label={ts("alt.KEY")}`; spec
  lists as an HTML `<dl>` at CN's place over a harmonic wipe.
- **Grainy plaster walls** (MixPad 7): erase each line with `clone` + `shift`
  `[0, dy]` from clean wall below.
- **Map labels**: copy a clean dot with `paste`; legend boxes grow left with
  per-language `rects`.
- **Badge + label on a photo seam**: keep the label's far end, move the badge per
  language with `paste {from, to, radius, locale}` (`badge_pair`). Check the
  seam's x and shorten captions (asserts in images.py).
- **Units half behind an object**: fill each row between its ends
  (`pages/curtain_motor/clean_sources.py`).
- **Captions that can't fit**: widen the canvas and the view's Image width.
- **Film posters with translations**: `poster={localizedAssetPath(path, locale)}`.
- Rebuilt as HTML instead of redrawn: text cards on translucent PNGs
  (`pages/mixpad_7_ultra/notext_pic9.py`), voice marquees (MixPad 4), soft-glow
  pills, tags such as Defy's 第一代.

### B.4 Layout recipes (HTML)

- Shared components added along the way: see §7.2. `ProductStickyScene`,
  `ProductMoreToggle`, `ProductScrollFrames` (give the section a height such as
  `h-[20rem]` and the frame `top-[calc(50vh-H/2)] h-[H]`), `ProductFocusCarousel`
  looks `rooms` (11.1rem slides) and `lock` (14.98rem slide, dimmed neighbours),
  `ProductSlideshow` `pagination="bars"` / `"swatches"`, per-slide `tone` (text
  over it uses `group-data-[tone=light]/slideshow:`).
- Tailwind animations `caption-ticker`, `spotlight-dim`, `spotlight-caption`
  port orvibo.com's keyframes (offsets with `[animation-delay:-4s]`);
  `animate-mixpad-marquee` for looping strips; gradient headings use
  `animate-gradient-drift` with `[--drift:X]` and `motion-reduce:animate-none`.
- Hover photo panels (sos, climate sensor): grayscale + veil, the hovered one in
  colour (`group/panel`). Phones that rise in: `ProductInView` + a RISE class
  (100 px, 1 s, 0.6 s delay). Icons that turn in: a TURN class (−350° to 0, 2 s,
  0.6 s delay, ease-out).
- Texts over photos keep orvibo.com's column width (e.g. `max-w-[720px]`,
  headings `max-w-[860px]` + `text-balance`) so longer translations stay off the
  objects in the photo. Each `\n` part of a question is balanced on its own
  (`BalancedLines`).
- Grids where orvibo.com's CDN lost pictures get HTML tiles or recreated
  pictures.
- Wide spec tables scroll in `ProductSpecScroller` with a sticky label column
  and `snap-start scroll-ml-[1.8rem]` on cells.

---

## Appendix C: page notes and orvibo.com defects (for PR bodies)

Marius wants each PR body to say where the page differs from orvibo.com. PR #8's
body (`pr-body.md`) already lists batches 1 to 3 and the three locks; the
follow-up's draft (`pr-body-2.md`) lists the seven sensor pages and the S1
camera. Highlights:

- **Service terms translated as they are** (Marius may want his own): the S2 and
  T1C spec tabs promise free home installation in 3,000+ cities and list a
  Chinese 400 hotline and its hours; the V5 lock promises a one-year
  replace-not-repair warranty for ¥199, the Lock Care plan, and gives Shenzhen
  ORVIBO the final say. The S2 alert picture names a "T1" lock, as on CN.
- **Broken on orvibo.com, fixed here:** S3's and Blade's carousels and S5's
  scene photos (blank or black there); three blank tiles each on the 3D curtain
  and DB28 grids; Gauss's lazy images; MixPad Elf's app labels one tile off;
  MixSwitch's invisible white finish tab; the S2 lock's broken pinned scenes;
  the Super Smart curtain's grey icon and arrows (recreated); two Elf motor
  posters (recreated from film frames); the Zigbee curtain's install guide uses
  the Chocolate kit's translated diagrams (its own are missing or identical),
  except the mounting diagram; S5's Swiper sat 26 px off centre; CN's
  `bg_2_02` (sos) and `bg_02_02` (climate sensor) photos are missing on its
  server, so those panels stay plain grey.
- **Copy mistakes not repeated:** the Q3 note lost "TÜ" (ours names TÜV
  Rheinland); Rf/Rg follow TM-30 (CN swaps them); SOPRO S's card labels both
  values 亮度 (ours Level / Temp); CN repeats one caption on all AISense slides
  (ours one per slide); MixPad 7's headings were one section off; the menu said
  "Voice Switch" for MixSwitch (now "Smart Switch"); the door sensor's kitchen
  section repeats the third heading (ours: the fridge door); its "120° and 8 m"
  claim and WEP/TKIP/AES are kept but flagged; "CR2302" written CR2032; the
  security kit's subtitle repeated its title (ours says what the kit is); the
  Mini gateway's window scene said "on the door" (ours: window) and its closing
  lines named the security kit (ours: the gateway); the water sensor's app row
  showed a camera message (ours: "Level normal"); DB28's spec link points at
  MixPad M2 (left out, no spec tab); Tmall "Buy now" buttons dropped; the S1
  camera page lists the CO alarm twice among the devices around the camera (the
  second is the water leak sensor here), its third live view loses the white
  "live" badge on a bright window (ours has a soft shadow), and its live views'
  times use a Chinese colon (13：30; ours a normal one). The camera's 2K film
  shows the title and paragraph orvibo.com keeps hidden in its markup.
- **Made as HTML instead of pictures:** the Chocolate kit's comparison table,
  SOPRO's strips, chips and spec tables, voice chips, the Mini gateway's spec
  list and closing lines, the sensors' spec lists.
- **Labels:** the Downlight, Bauhaus and SOPRO menu labels equal their page
  titles; the carrier name is painted out of redrawn phone status bars; the
  sensors get short names on app tiles (PIR sensor, Smoke, CO, Gas).
- **Layout:** desktop only for now (phone pass later, as agreed); films as in
  Appendix D.

---

## Appendix D: films

As of 2026-10-25; the Mac was offline from the evening of 2026-10-24, so no film
was checked frame by frame ("Chinese burned in" is judged from CN screenshots).

**Referenced by the pages but only on the Mac (not committed yet)**, served from
`/orvibo/videos/<name>.mp4`:

- Bauhaus: `light1` to `light6`. Blade: `daofeng_spwm`, `daofeng_qiandeng`.
  Cangqiong: `cangqiong2` to `cangqiong5`. Q3: `q3_1`, `q3_3`, `q3_4`. S5:
  `s5_3`, `s5_4`, `s5_6`.
- SOPRO Q: `q_no_glare` (sec4), `q_soft_spots` (sec5), `q_mobile_1` (sec12).
- SOPRO S (renamed from Chinese names): `s_banner`, `s_cct`, `s_living`,
  `s_dining`, `s_bedroom`, `s_fast_response`, `s_wide_cct`, `s_butler_wide`,
  `s_butler_panel`, `s_butler_panel_right`, `s_autolighting`, and `sec15_1`,
  `sec15_4`, `sec15_7`, `sec15_9`, `sec15_13`, `sec15_15`, `sec15_bg`.
- Curtains: `curtain_3d_banner_3`, `curtain_3d_170_2`, `curtain_3d_15_2`,
  `curtain_3d_mode_2`, `curtain_3d_all` (modal); `orvibo_db28_banner`,
  `orvibo_db28_rotate`, `orvibo_db28_100_3`, `orvibo_motor_db28` (full film);
  `curtain_motor_shensuolian`, `curtain_motor_15`, `curtain_motor_home`,
  `curtain_motor_move`, `curtain_motor_sleep`.
- V5: `v5_2` (full film), `v5_3` (sec9), `v5_4` (sec3_1 background).
- The mirror source of each is in the kit's `gen/<slug>/videos.txt` or
  `videos.auto.txt`.

**VOD films (R2 only, never committed)** under `/8f4239b1vodgzp1251222210/`:
MixSwitch's two, SOPRO Q's sec2, sec3 and sec8, SOPRO S's banner film
(`0lwcQ5V5mQEA`), the T1C film (all for PR #8), the S1 camera's five (for the
follow-up PR: `299e8944…/pbpWSLoEuA4A.mp4`, `299e8e2f…/LALY2910OVsA.mp4`,
`29d2b2ca…/aK0xOEl6nlgA.mp4`, `29d2bf09…/ZVyJyzmCtFQA.mp4`,
`2a099092…/WIWQ7kijD0sA.mp4`; full paths in `gen/camera_4/videos.txt`), and the
older pages' films already in the Mac clone.

**Chinese burned in (left as they are, by Marius's choice):** `defy2`,
`gaosi1`, MixSwitch's curtain film, `cangqiong2`, `cangqiong3`, `q3_4` (chart
labels and a paragraph), `q3_1` (title), `q3_3` (the whole room carousel is a
film), `s5_4` (title), `s5_1` (the full S5 film, committed, captions
throughout), `light1` to `light3` (small app overlays), Q's sec3 and sec8 VOD
films (panel screens), `q_no_glare` and `q_soft_spots` (labels), and three Elf
motor films (`curtain_motor_home`, `_move`, `_sleep`, chat bubbles; their
posters are translated). Not seen yet: `s5_3`, `s5_6`, `daofeng_qiandeng`, all
SOPRO S films, the V5 films.

---

## Appendix E: live-site leftovers and open issues

From the inspection of 2026-10-23, minus what PR #7 fixed:

- **10 images missing from git and R2:** the footer's WeChat, Weibo and online
  support icons (6 files), the scroll-to-top background, one mega-menu "Smart
  Camera" thumbnail, and MixPad 7's title and section masks. On the Mac:
  `bun run orvibo:sync-assets`, then `orvibo:upload-r2` restores the first 8
  (orvibo.com must be reachable from there); the 2 MixPad 7 masks need checking
  (the CN mirror may hold them).
- **The footer is still orvibo.com's Chinese legal block**
  (`apps/web/src/components/orvibo/layout/SiteFooter.tsx`): Tmall and JD
  links, a hardcoded 400-060-6050 hotline, Weibo, the ICP filing 粤ICP备12019139号
  linking to beian.miit.gov.cn, a public-security filing link, and a privacy link
  to orvibo.com/cn/privacy_policy.pdf; the dictionaries say "Copyright ©
  2014–2023 Shenzhen ORVIBO Technology Co., Ltd." Needs Marius's Romanian
  company details, privacy, cookie and terms pages, and ANPC links.
- **Shell pages:** store, product list, app, cooperation, estate, conference,
  about and services pages still show the coming-soon card (with `noindex`).
- **Desktop-only layout** (the phone pass, §4.4).
- **164 MB of media in git**; heavy films should move to R2 only.
- **Starter leftovers** `apps/app`, `packages/backend`, `packages/email`
  (delete only if Marius agrees).
- **Accessibility:** the mega-menu opens on hover only (no keyboard path, no
  `aria-expanded`); some pages lack `<main>` and an `<h1>`; autoplaying sliders
  without a pause control.
- **Legacy URLs:** `redirectLegacyOrviboPath` (`src/lib/orvibo/routes.ts`)
  doesn't strip orvibo.com's `/cn/` prefix, so an old link such as
  `/cn/product/s3.html` ends on a 404 (`/ro/cn/product/s3`).
- **Undeclared dependencies** in `apps/web` (lucide-react,
  class-variance-authority, @radix-ui/react-slot, server-only, zod, resolved by
  Bun hoisting) and unused declared ones (convex, @convex-dev/*, wrangler,
  @calcom/embed-react).
- **No tests**; CI runs lint, typecheck and the build only.
- **OpenPanel** has no client id, so analytics is off.
- **PR #5** (a Cursor docs draft from May 2026) is stale.
- **README/AGENTS.md** need the RO locale once PR #8 merges.

---

## Appendix F: links and identifiers

- Site: https://www.orvibo.ro (Vercel team `orvibo`, project `orvibo`).
- Repos: https://github.com/mirzacmarius/orvibo (live site),
  https://github.com/mirzacmarius/orvibo.ro (Medusa starter and planning docs).
- PRs: #7 merged (https://github.com/mirzacmarius/orvibo/pull/7), #8 open
  (https://github.com/mirzacmarius/orvibo/pull/8).
- Source site: https://www.orvibo.com/cn/index.html; product pages at
  `https://www.orvibo.com/cn/product/<slug>.html` (the kit's
  `data/inventory.json` has each page's URL).
- Claude-only documents (Marius can open them in his Claude account; the
  substance is in this file): the plan
  (https://claude.ai/artifact/TwEBb58ZVh4XffddQAaWEK) and the repo inspection of
  2026-10-23 (https://claude.ai/artifact/Dzo8MFJN7Srz6eSbgmZXqd).
- Obsolete in Claude's project files, don't use: `orvibo-quick-wins/` (PR #7's
  patches, merged) and `orvibo-product-pages/repo/branch.bundle` (pre-rebase).
