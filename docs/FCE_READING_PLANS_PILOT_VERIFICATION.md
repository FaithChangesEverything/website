# FCE Reading Plans — Pilot verification and release gate

## Isolation and published content
- Pilot branch: `feature/fce-reading-plans-jesus-pilot` (draft PR #21; based on approved content foundation PR #20).
- Production site and published Bible Reader Version 1.0 remain unchanged.
- Pilot demonstrates 22 library entries, first plan enabled, all 30 approved lessons, same-site links to the FCE Bible Reader, browser-only localStorage progress.
- Progress does not synchronize between devices or browsers and may disappear when site data are removed. No user sign-in is required.
- The pilot now links Scripture to the same-site `/bible/...` Reader and runs the unchanged KJV import verification with FCE-owned fixed archive.

## Verified checks
- `node scripts/validate-reading-plans.mjs`: 22 plans, 322 lessons, all schema checks.
- `npx tsc --noEmit`: types compile.
- `npx eslint app/reading-plans components/reading-plans lib/reading-plans`: clean.
- Chromium CI (Playwright) tests library search/filter, all 30 daily routes and Reader URL format, schedule group navigation, device-local progress after reload, Continue Reading, protected reset, and mobile overflow. See the branch's GitHub Actions run history.
- Latest confirmed shared-navigation preview: commit 1468e5ab, Vercel READY. Ten browser tests passed for this version.

## Original KJV source recovered and pinned to FCE Cloudflare R2
- Original archive supplied by Pastor Richard, local `eng-kjv2006_usfm.zip`.
- Local ZIP SHA-256: `5789dcd000d60a554abb4cf9b37ce10a53628bfc686e11ada2d6c981455239c1` (matches existing original pin exactly).
- Local ZIP contains exactly 66 USFM files. Cloudflare R2 lists the uploaded object under `fce-ministry-library/kjv-bible/eng-kjv2006_usfm.zip` with size 2,461,785 bytes matching the uploaded original. R2 ETag is not sufficient evidence of SHA-256 equivalence.
- Permanent source URL: `https://resources.faithchangeseverything.org/kjv-bible/eng-kjv2006_usfm.zip`.
- The importer uses this fixed URL but preserves the original SHA-256 and checks all 66 books, 1,189 chapters and 31,102 verses. The original Vercel build command `node scripts/import_fce_kjv.mjs && next build` is restored.
- The temporary branch-specific import bypass `scripts/build_fce.mjs` has been deleted. Reader links are same-site routes again.
- Confirm successful Cloudflare download and checksum in Vercel build logs before declaring build success. Keep local original ZIP as an independent backup.
- For long-term immutability, operationally restrict writes to `kjv-bible/` and keep a separately backed up copy of the original archive.

## Required release gates
1. Confirm the normal Vercel build downloads the Cloudflare archive and logs the complete KJV validation. Set retention/access controls for the archive; keep a separate backup.
2. Run the normal production-equivalent build, without any branch-specific bypass, and exercise the integrated KJV Reader routes as well as the reading plans.
3. Run the browser suite on the identical release-candidate build. Verify a mobile device or viewport, keyboard navigation, privacy storage, and a real Reader return trip. Ensure final normal build reproducibility before merging either PR.
4. Obtain Pastor's approval before merging to main, enabling navigation, or removing production protection.

No production release until the normal build, full integrated suite and user approval have passed.

## Release-readiness audit, October 13, 2026
- All seven visitor review checks approved for 30 Days with Jesus, including mobile. Shared Bible dropdown also approved.
- Shared navigation originates in components/Header.tsx; Reading Plan and Bible Study links appear on desktop and mobile.
- Bible chapter return links only accept validated local plan destinations. Reading progress is stored in browser-local storage without an account.
- Only the 30 Days with Jesus pilot is enabled; other 21 plans are not yet activated.
- The preview builds with the unchanged pinned KJV checksum and the R2 source. Retain independent ZIP backup and verify R2 write protection separately.
- CI now checks shared-header and Bible-related changes, in addition to plans. Recheck latest CI run after change.
- The test suite runs a development server; Vercel runs an optimized preview build. Final testing against the exact release candidate is still needed.
- npm install reported eight high-severity dependency advisories; evaluate before publication.
- GitHub branch protection could not be inspected through current connector permissions; confirm merge safeguards before production release.
- PR #20 and stacked PR #21 are drafts; verify order and obtain explicit publication approval.
- The /resources page is not implemented in the inspected branch. Treat as wider website launch readiness issue.

## Security dependency and Cloudflare R2 audit — October 13, 2026
### Dependency status (from npm audit with the exact branch package-lock)
- Full install: **8 high**, 0 critical, 0 moderate, 0 low.
- Production-only install (`npm audit --omit=dev`): **0 findings at all severities**.
- Direct Next runtime and React versions: Next 16.4.0, React and React DOM 19.2.4. Direct development linter `eslint-config-next@16.4.0`.
- Eight flagged packages, all tagged `dev: true` in the lockfile: `eslint-config-next@16.4.0`, `@next/eslint-plugin-next@16.4.0`, `fast-glob@3.3.1`, `micromatch@4.0.8`, `braces@3.0.3`, `brace-expansion@1.1.16` and nested `brace-expansion@5.0.7`, `browserslist@4.28.6`, `js-yaml@4.3.0`. The two brace-expansion versions count as **one package** among the eight.
- Main advisory category: potential denial of service from pathological input for glob, brace, Browserslist or YAML parsing in development tooling; assess the exposure of repository scripts to untrusted inputs.
- `npm audit` reports ordinary fixes for `brace-expansion`, `browserslist`, and `js-yaml`. These can receive reviewed patch-level lockfile updates, with audit/typecheck/lint/build/browser regression testing.
- `braces@3.0.3` advisory GHSA-vfj7-8cjw-p6xm has **no patched version** as of this review; it flows through `micromatch` → `fast-glob` → `@next/eslint-plugin-next` → `eslint-config-next`. Do not promise that upgrading one direct package will resolve this chain until patched upstream.
- `npm audit` suggests `eslint-config-next@14.2.35` as a semver-major change for this chain. **Reject that automated downgrade** because FCE runs Next 16.4.0; do not use `npm audit fix --force`.
- CI now **fails** on new high/critical production dependency findings via `npm audit --omit=dev --audit-level=high`, while reporting development-only issues for follow-up. Pin and revisit the advisory chain as patched releases arrive.

### Cloudflare R2 KJV master
- Account's existing shared bucket: `fce-ministry-library`, KJV object key: `kjv-bible/eng-kjv2006_usfm.zip`.
- The importer pins the original SHA-256 `5789dcd000d60a554abb4cf9b37ce10a53628bfc686e11ada2d6c981455239c1`, so tampering with source bytes breaks subsequent builds instead of silently changing Scripture.
- The bucket currently reports **no lock rules**. It therefore does **not** yet prevent an authorized actor from overwriting or deleting the master ZIP.
- Lifecycle configuration has only the default abort-incomplete-multipart-uploads after seven days; there is **no lifecycle rule automatically deleting this ZIP**.
- Public serving via `resources.faithchangeseverything.org` is enabled; the generic `r2.dev` endpoint is disabled. This file is publicly downloadable by intentional design.
- Domain settings report minimum TLS **1.0** for the custom R2 resource domain; review raising this to TLS 1.2 across resource consumers during the broader Cloudflare TLS audit.
- Recommend one R2 bucket-lock rule, prefix **`kjv-bible/eng-kjv2006_usfm.zip`**, to cover only this archive; agree on retention period (e.g. 365 days) before enabling. Cloudflare documents that locks apply to existing objects and prevent overwrites/deletion during retention. Unlike checksum pinning, this prevents accidental destructive storage actions.
- Keep at least one independently held original ZIP backup outside Cloudflare. Review Cloudflare member permissions, API token scope, MFA, and credential access separately: these are not visible from the R2 bucket configuration API.
- **No lock rule, domain TLS setting, or account permission was modified during this audit**; obtain approval before altering retention or shared endpoint behavior.
