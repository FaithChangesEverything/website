# FCE Reading Plans — Pilot verification and release gate

## Isolation and published content
- Pilot branch: `feature/fce-reading-plans-jesus-pilot` (draft PR #21; based on approved content foundation PR #20).
- Production site and published Bible Reader Version 1.0 remain unchanged.
- Pilot demonstrates 22 library entries, first plan enabled, all 30 approved lessons, direct links to the released FCE Bible Reader, browser-only localStorage progress.
- Progress does not synchronize between devices or browsers and may disappear when site data are removed. No user sign-in is required.
- The pilot now links Scripture to the same-site `/bible/...` Reader and runs the unchanged KJV import verification with FCE-owned fixed archive.

## Verified checks
- `node scripts/validate-reading-plans.mjs`: 22 plans, 322 lessons, all schema checks.
- `npx tsc --noEmit`: types compile.
- `npx eslint app/reading-plans components/reading-plans lib/reading-plans`: clean.
- Chromium CI (Playwright) tests library search/filter, all 30 daily routes and Reader URL format, schedule group navigation, device-local progress after reload, Continue Reading, protected reset, and mobile overflow. See the branch's GitHub Actions run history.
- The latest successful Vercel preview deployment from commit 2828e9f: dpl_4NR7UBsTYMtkwAkwMyEFXgMEBPh6, Next.js compiled, generated pages, state READY.

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
