# FCE Reading Plans — Pilot verification and release gate

## Isolation and published content
- Pilot branch: `feature/fce-reading-plans-jesus-pilot` (draft PR #21; based on approved content foundation PR #20).
- Production site and published Bible Reader Version 1.0 remain unchanged.
- Pilot demonstrates 22 library entries, first plan enabled, all 30 approved lessons, direct links to the released FCE Bible Reader, browser-only localStorage progress.
- Progress does not synchronize between devices or browsers and may disappear when site data are removed. No user sign-in is required.
- The pilot's Vercel preview build links Scripture to `https://faithchangeseverything.org/bible/...`. It deliberately does not generate or replace KJV source data.

## Verified checks
- `node scripts/validate-reading-plans.mjs`: 22 plans, 322 lessons, all schema checks.
- `npx tsc --noEmit`: types compile.
- `npx eslint app/reading-plans components/reading-plans lib/reading-plans`: clean.
- Chromium CI (Playwright) tests library search/filter, all 30 daily routes and Reader URL format, schedule group navigation, device-local progress after reload, Continue Reading, protected reset, and mobile overflow. See the branch's GitHub Actions run history.
- The latest successful Vercel preview deployment from commit 2828e9f: dpl_4NR7UBsTYMtkwAkwMyEFXgMEBPh6, Next.js compiled, generated pages, state READY.

## Outstanding KJV source reproducibility blocker — DO NOT RELEASE
Original pinned KJV source archive:
`https://ebible.org/Scriptures/eng-kjv2006_usfm.zip`
Pinned SHA-256:
`5789dcd000d60a554abb4cf9b37ce10a53628bfc686e11ada2d6c981455239c1`

The October 13 upstream archive download had a different digest:
`77bbe9c78f4f588b1465e49ddad986293a09e7f4b140abe7248232c8c5ae2a5b`.
The KJV importer correctly rejects it before parsing. An archive recovery job tested historical snapshot URLs and did **not** retrieve a matching copy. The old archive has not been recovered.

The preview-only branch-specific `scripts/build_fce.mjs` change bypasses Scripture import **only** on Vercel Preview builds of the exact pilot branch. Production and all other builds still run the normal import and enforce the pinned digest. This is **not** a permanent fix.

## Required release gates
1. Recover the exact, original archive from trusted backup or historical download; verify the original SHA-256, store a fixed copy at an immutable, documented location; change only the **download location**, never the pinned digest. If impossible, conduct a separately approved textual dataset migration with full chapter/verse and verse-text comparisons against the released reader before changing the digest.
2. Use the pinned fixed source in the ordinary build process, without an environment or branch-specific bypass, run complete Vercel preview build with all 66 verified books, 1,189 chapters, 31,102 verses, and exercise KJV Reader routes as well as the plans. Keep SHA/structural checks.
3. Run the browser suite on the identical release-candidate build. Verify a mobile device or viewport, keyboard navigation, privacy storage, and a real Reader return trip. Ensure final normal build reproducibility before merging either PR.
4. Obtain Pastor's approval before merging to main, enabling navigation, or removing production protection.

No production release or claim of completed end-to-end integration is permitted while gate 1 or 2 remains open.
