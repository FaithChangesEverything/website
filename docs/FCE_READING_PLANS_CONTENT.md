# FCE Bible Reading Plans — Website Content Foundation

**Editorial status:** Approved. **Content version:** `approved-2026-10-12`. **Translation:** King James Version (KJV).

This is a **content-data preparation step**, not a public page launch. The approved manuscripts remain the editorial source of truth.

## Inventory

| Collection | Plans | Daily lessons |
| --- | ---: | ---: |
| 7-day plans | 6 | 42 |
| 10-day plans | 10 | 100 |
| 30-day plans | 6 | 180 |
| **Total** | **22** | **322** |

Source documents:
- `FCE_7-Day_Bible_Reading_Plans_Approved_Rev1.docx`
- `FCE_10-Day_Bible_Reading_Plans_Approved_Rev1.docx`
- `FCE_30-Day_Bible_Reading_Plans_Approved_Master_Rev1.docx`

## Code structure

- `lib/reading-plans/types.ts`: typed schema for plans, readings, key verses and each day's approved reflection fields.
- `lib/reading-plans/content.json`: losslessly extracted, **readable** canonical data from the approved DOCX masters. This is **generated content**, not hand-authored text; each daily lesson remains identifiable and diffable in Git.
- `lib/reading-plans/index.ts`: server-only accessor functions with structural checks and an integration helper linking a reading's **first reference** to the existing `/bible/[book]/[chapter]` reader.

### How to use from a Next.js Server Component

```tsx
import { listReadingPlans, findReadingPlan, findReadingPlanDay,
  primaryReadingFirstBibleHref } from "@/lib/reading-plans";

const plans = listReadingPlans(30);
const plan = findReadingPlan("30-days-with-jesus");
const firstDay = findReadingPlanDay("30-days-with-jesus", 1);
const firstReadingLink = firstDay ? primaryReadingFirstBibleHref(firstDay.primaryReading) : null;
```

The module uses `node:zlib` and must **not** be imported into Client Components. If the visitor's progress is stored client-side later, pass only necessary plan metadata from a Server Component to the Client Component. Use namespaced device storage without collecting identifying information by default.

## Editorial safeguards

- Do not silently revise Scripture quotations or devotional text in website code.
- `keyVerse.isExcerpt` reflects only excerpt notices **explicitly present in the source**; it is not a standalone exhaustive KJV textual comparison.
- Display Scripture quotations **red and italic**; Scripture citations **black, bold, nonitalic** in accordance with FCE styles.
- 7-day plans contain **devotionalThought, reflectionQuestion, prayerPrompt, practicalStep** and introduction/closing; 10-day/30-day plans generally use **readingFocus**. Fields not present in the approved source are `null` rather than invented.
- Keep all 30-day plans; don't drop `30 Days of Prayer`.
- 30-day Plan 5 Day 14 includes its approved Romans 4:23–25 supporting reading; Day 18 has the full approved KJV Romans 8:1 wording.
- The reader-link helper intentionally links only the **first** passage. For multi-part assignments the future UI must link to all passages individually; it must not imply that the first link covers the entire day's reading.
- No navigation, database, public routes, or external analytics are added in this branch. Review and approve the UI separately.

## Validation

`node scripts/validate-reading-plans.mjs` checks the committed JSON catalog and its 22/322 inventory, unique IDs, lesson sequences, and required fields. Re-run it whenever content is regenerated.

## Regenerating from the approved Word masters

Install `python-docx` in a local Python environment. Run:

```bash
python scripts/export-fce-reading-plans.py \
  --seven "FCE_7-Day_Bible_Reading_Plans_Approved_Rev1.docx" \
  --ten "FCE_10-Day_Bible_Reading_Plans_Approved_Rev1.docx" \
  --thirty "FCE_30-Day_Bible_Reading_Plans_Approved_Master_Rev1.docx" \
  --output lib/reading-plans/content.json
node scripts/validate-reading-plans.mjs
```

Manuscripts are intentionally not copied into the public website repository. Supply their local file paths to this utility. Any future editorial modifications should be approved in the Word masters **before** regenerating and reviewing the content JSON diff.