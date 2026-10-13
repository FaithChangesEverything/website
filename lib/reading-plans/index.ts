/**
 * Server-side FCE reading-plan content access.
 *
 * Editorial source of truth: the three approved FCE DOCX master manuscripts.
 * Website display should not reword the lessons or generate new Scripture text.
 * Import only from Server Components or other server-side code.
 */
import { findBibleBook, bibleHref } from "@/lib/bible/books";
import approvedContent from "./content.json";
import type {
  ReadingPlan,
  ReadingPlanCatalog,
  ReadingPlanDay,
  ReadingPlanDuration,
} from "./types";

export type { ReadingPlan, ReadingPlanCatalog, ReadingPlanDay, ReadingPlanDuration } from "./types";

function parseCatalog(): ReadingPlanCatalog {
  const catalog = approvedContent as unknown as ReadingPlanCatalog;
  if (catalog.schemaVersion !== 1 || catalog.translation !== "KJV") {
    throw new Error("Unsupported FCE Reading Plans catalog schema or translation.");
  }
  if (catalog.plans.length !== 22 || catalog.planCount !== 22 || catalog.lessonCount !== 322) {
    throw new Error("FCE Reading Plans catalog is incomplete.");
  }
  const seen = new Set<string>();
  let lessonCount = 0;
  for (const plan of catalog.plans) {
    if (seen.has(plan.id) || plan.lessons.length !== plan.days || plan.lessonCount !== plan.days) {
      throw new Error(`Invalid or repeated FCE plan: ${plan.id}`);
    }
    seen.add(plan.id);
    for (let i = 0; i < plan.lessons.length; i++) {
      const lesson = plan.lessons[i];
      if (
        lesson.day !== i + 1 || !lesson.primaryReading ||
        !lesson.keyVerse.text || !lesson.keyVerse.reference ||
        !(lesson.readingFocus || lesson.devotionalThought)
      ) {
        throw new Error(`Invalid FCE lesson: ${plan.id}, day ${i + 1}`);
      }
      lessonCount++;
    }
  }
  if (lessonCount !== 322) throw new Error("FCE lesson-count mismatch.");
  return catalog;
}

let cachedCatalog: ReadingPlanCatalog | undefined;
export function getReadingPlanCatalog(): ReadingPlanCatalog {
  return (cachedCatalog ??= parseCatalog());
}
export function listReadingPlans(duration?: ReadingPlanDuration): ReadingPlan[] {
  const plans = getReadingPlanCatalog().plans;
  return duration ? plans.filter((plan) => plan.days === duration) : plans;
}
export function findReadingPlan(slugOrId: string): ReadingPlan | undefined {
  return getReadingPlanCatalog().plans.find((p) => p.slug === slugOrId || p.id === slugOrId);
}
export function findReadingPlanDay(slugOrId: string, day: number): ReadingPlanDay | undefined {
  if (!Number.isSafeInteger(day) || day < 1) return undefined;
  return findReadingPlan(slugOrId)?.lessons[day - 1];
}

/** Each assigned passage gets its own link, including repeated ranges within a chapter. */
export function primaryReadingBibleLinks(reading: string): { label: string; href: string }[] {
  const results: { label: string; href: string }[] = [];
  // References may be joined by "and", semicolons, or a continuation after a comma.
  const chunks = reading.split(/\s+(?:and)\s+|\s*;\s*/i);
  let previousBook = "";
  let previousChapter = 0;
  for (const chunk of chunks) {
    const pieces = chunk.split(/,\s*(?=\d+(?:[–-]\d+)?(?:\s*,|$))/);
    for (const piece of pieces) {
      const citation = piece.trim();
      const m = citation.match(/^((?:[1-3]\s+)?[A-Za-z]+(?:\s+[A-Za-z]+)*)\s+(\d+)(?::(\d+))?/);
      let bookName = previousBook;
      let chapter = previousChapter;
      let verse: number | undefined;
      if (m) {
        bookName = m[1] === "Psalm" ? "Psalms" : m[1];
        chapter = Number(m[2]);
        verse = m[3] ? Number(m[3]) : undefined;
      } else {
        const continuation = citation.match(/^(\d+)(?:[–-]\d+)?$/);
        if (!continuation || !bookName || !chapter) continue;
        verse = Number(continuation[1]);
      }
      const book = findBibleBook(bookName.toLowerCase().replace(/\s+/g, "-"));
      if (!book || !Number.isSafeInteger(chapter) || chapter < 1 || chapter > book.chapters) continue;
      previousBook = bookName;
      previousChapter = chapter;
      results.push({ label: m ? citation : `${bookName} ${chapter}:${citation}`, href: bibleHref(book.slug, chapter, verse) });
    }
  }
  return results;
}

export function primaryReadingFirstBibleHref(reading: string): string | null {
  return primaryReadingBibleLinks(reading)[0]?.href ?? null;
}

/** Return the exact KJV key verse in the FCE Bible Reader. */
export function keyVerseBibleHref(reference: string): string | null {
  return primaryReadingFirstBibleHref(reference);
}
