/**
 * Server-side FCE reading-plan content access.
 *
 * Editorial source of truth: the three approved FCE DOCX master manuscripts.
 * Website display should not reword the lessons or generate new Scripture text.
 * This module uses Node's Brotli decoder and must remain on the server.
 */
import { brotliDecompressSync } from "node:zlib";
import { findBibleBook, bibleHref } from "@/lib/bible/books";
import { APPROVED_FCE_READING_PLANS_BROTLI_BASE64 } from "./source-bundle";
import type {
  ReadingPlan,
  ReadingPlanCatalog,
  ReadingPlanDay,
  ReadingPlanDuration,
} from "./types";

export type { ReadingPlan, ReadingPlanCatalog, ReadingPlanDay, ReadingPlanDuration } from "./types";

function parseCatalog(): ReadingPlanCatalog {
  const encoded = APPROVED_FCE_READING_PLANS_BROTLI_BASE64;
  const text = brotliDecompressSync(Buffer.from(encoded, "base64")).toString("utf8");
  const catalog = JSON.parse(text) as ReadingPlanCatalog;
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

/**
 * Opens the FIRST citation's book/chapter (and verse when one is specified).
 * Multi-passage assignments must retain their complete display text; a future
 * reader UI may expose a separate link for each passage.
 */
export function primaryReadingFirstBibleHref(reading: string): string | null {
  const match = reading.match(/^((?:[1-3]\s+)?[A-Za-z]+(?:\s+[A-Za-z]+)*)\s+(\d+)(?::(\d+))?/);
  if (!match) return null;
  const bookName = match[1] === "Psalm" ? "Psalms" : match[1];
  const bookSlug = bookName.toLowerCase().replace(/\s+/g, "-");
  const book = findBibleBook(bookSlug);
  const chapter = Number(match[2]);
  const verse = match[3] ? Number(match[3]) : undefined;
  if (!book || chapter < 1 || chapter > book.chapters || !Number.isSafeInteger(chapter)) return null;
  return bibleHref(bookSlug, chapter, verse);
}