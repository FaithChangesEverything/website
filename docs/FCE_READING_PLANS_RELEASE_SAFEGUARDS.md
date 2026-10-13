# FCE Reading Plans — Step 2: Production safeguards review (2026-10-13)

## Verified release topology
- Production: GitHub `main`, current recorded SHA `bc0575ac5f1d3c1f03372c487c3fd40d477118c9`; Vercel production deployment READY.
- Draft PR #20: `feature/fce-reading-plans-content-foundation` -> `main`, 11 commits, GitHub mergeable.
- Draft PR #21: `feature/fce-reading-plans-jesus-pilot` -> `feature/fce-reading-plans-content-foundation`, 46 commits, GitHub mergeable.
- Draft PR #22: `security/fce-dev-dependency-patches` -> `feature/fce-reading-plans-jesus-pilot`, 2 commits, GitHub mergeable.
- Branch ancestry: each stacked head is ahead of and not behind the preceding branch. Security branch is 59 commits ahead of main with no commits behind main (at inspection).
- Correct sequence for a **later approved release**: review PR #22 into the pilot branch; review PR #21 into the content foundation branch; review PR #20 into main. Recheck changed-file diffs, checks and preview after each stage. Do not merge based solely on earlier green checks.

## GitHub safeguard gap
- GET `/repos/FaithChangesEverything/website/branches/main` reports `protected: false`; corresponding branch protection shows required checks off.
- GET repository rulesets returns `[]`. This is a verified exposure, not just missing read permission.
- Current GitHub connector offers no branch-protection mutation. Owner must configure in GitHub repository Settings before merges, if their repository plan permits.
- Recommended main rule: require PRs to merge; require status checks (pilot CI + Vercel, using exact context identifiers from a completed run); block force pushes and deletions; restrict bypass; prevent direct pushes. Review requirements and admin enforcement should be chosen per available repository plan and team size. Confirm rules are actually active using GitHub UI/API after changes.
- Consider an additional rule for the content foundation/pilot integration branch while stacked PRs are active; protect main at minimum.

## Vercel status
- Authenticated Vercel project lookup reports `ssoProtection.enabled: true`, `deploymentType: all`; separate `passwordProtection.enabled: false`. Do not confuse these controls.
- Latest security branch commit `6dd764f` has a Vercel preview deployment in READY state, not a production-target deployment.
- Latest production deployment remains from `main`; no release or merge was made.
- A successful Vercel build confirms compilation/deployment, but **not** browser QA against the identical optimized preview. Separate isolated CI performed an optimized Next build, exact KJV checksum check, TypeScript, lint and ten Chromium tests against local Next development server.

## Final release gates
1. Activate and verify GitHub main protection. Ensure correct status check names and bypass rules, no force push/deletion.
2. Preserve preview protection and production access restrictions until Pastor explicitly approves a launch.
3. After reviewing and integrating the security PR into the release candidate, confirm production dependency audit is clean and record remaining development-only advisories.
4. Test the exact optimized release candidate, including Reader chapter and verse navigation, Reader return link, seven visitor acceptance items, shared header desktop/mobile, 7/10/30-day route limitations, browser-only progress and book selection.
5. Check production-equivalent build and deployment against original pinned R2 KJV source; ensure downloadable ZIP remains locked.
6. Recheck final diff, branch lineage, environment/configuration differences and exact commit SHA before the final production merge.
7. Obtain Pastor's explicit release approval before merge to main, production deploy or changing public access.

## Step 2 conclusion
- Merge topology: verified.
- Protected previews/production separation: verified as reported by Vercel, subject to manual public access validation.
- Branch protection: **not configured**; owner action required.
- Preview deployment ready and regression suite passed; testing same optimized deployment still open.
- Production unchanged.
