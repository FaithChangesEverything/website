export const JOURNAL_SCHEMA_VERSION = 1 as const;

export type JournalFieldName =
  | "book"
  | "chapter"
  | "verses"
  | "theme"
  | "keyVerse"
  | "memoryVerse"
  | "historicalContext"
  | "wordStudy"
  | "crossReferences"
  | "godTeaching"
  | "application"
  | "prayer"
  | "fceMoment"
  | "actionStep"
  | "additionalNotes"
  | "relatedStudy";

export type JournalFields = Record<JournalFieldName, string>;

export type JournalStudy = {
  id: string;
  createdAt: string;
  updatedAt: string;
  fields: JournalFields;
};

export type JournalStore = {
  version: typeof JOURNAL_SCHEMA_VERSION;
  activeStudyId: string | null;
  studies: JournalStudy[];
};

export const emptyJournalFields = (): JournalFields => ({
  book: "",
  chapter: "",
  verses: "",
  theme: "",
  keyVerse: "",
  memoryVerse: "",
  historicalContext: "",
  wordStudy: "",
  crossReferences: "",
  godTeaching: "",
  application: "",
  prayer: "",
  fceMoment: "",
  actionStep: "",
  additionalNotes: "",
  relatedStudy: "",
});

export function createJournalStudy(id: string, timestamp: string): JournalStudy {
  return {
    id,
    createdAt: timestamp,
    updatedAt: timestamp,
    fields: emptyJournalFields(),
  };
}

export function getJournalStudyLabel(study: JournalStudy): string {
  const passage = [study.fields.book.trim(), study.fields.chapter.trim()]
    .filter(Boolean)
    .join(" ");

  if (passage) {
    return passage;
  }

  return "Journal Study";
}
