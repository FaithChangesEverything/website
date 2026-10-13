/** FCE Bible Reading Plans — editorially approved master-content schema. */
export type ReadingPlanDuration = 7 | 10 | 30;

export interface ScriptureKeyVerse {
  text: string;
  reference: string;
  /** True only when the approved source explicitly identifies the KJV quotation as an excerpt. */
  isExcerpt: boolean;
}

export interface ReadingPlanDay {
  id: string;
  day: number;
  title: string;
  /** The exact approved reading citation(s), including multiple ranges where present. */
  primaryReading: string;
  keyVerse: ScriptureKeyVerse;
  readingFocus: string | null;
  devotionalThought: string | null;
  reflectionQuestion: string | null;
  prayerPrompt: string | null;
  practicalStep: string | null;
}

export interface ReadingPlan {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  days: ReadingPlanDuration;
  lessonCount: number;
  /** Source DOCX filename retained as an audit trail. */
  sourceFile: string;
  /** Editorial introduction as written; used in the 7-Day series. */
  purpose: string[];
  /** Editorial closing section, where present. */
  closing: { heading: string; paragraphs: string[] } | null;
  lessons: ReadingPlanDay[];
}

export interface ReadingPlanCatalog {
  schemaVersion: 1;
  contentRevision: string;
  translation: "KJV";
  planCount: number;
  lessonCount: number;
  plans: ReadingPlan[];
}