import {
  JOURNAL_SCHEMA_VERSION,
  emptyJournalFields,
  type JournalFieldName,
  type JournalFields,
  type JournalStore,
  type JournalStudy,
} from "./journalModel";

export const JOURNAL_STORAGE_KEY = "fce:bible-journal:v1";

export interface JournalStorageAdapter {
  load(): JournalStore;
  save(store: JournalStore): void;
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function normalizeFields(value: unknown): JournalFields {
  const defaults = emptyJournalFields();

  if (!value || typeof value !== "object") {
    return defaults;
  }

  const source = value as Record<string, unknown>;

  for (const field of Object.keys(defaults) as JournalFieldName[]) {
    if (isString(source[field])) {
      defaults[field] = source[field];
    }
  }

  return defaults;
}

function normalizeStudy(value: unknown): JournalStudy | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const source = value as Record<string, unknown>;

  if (
    !isString(source.id) ||
    !isString(source.createdAt) ||
    !isString(source.updatedAt)
  ) {
    return null;
  }

  return {
    id: source.id,
    createdAt: source.createdAt,
    updatedAt: source.updatedAt,
    fields: normalizeFields(source.fields),
  };
}

export function emptyJournalStore(): JournalStore {
  return {
    version: JOURNAL_SCHEMA_VERSION,
    activeStudyId: null,
    studies: [],
  };
}

export function createBrowserJournalStorage(
  storage: Storage,
): JournalStorageAdapter {
  return {
    load() {
      const raw = storage.getItem(JOURNAL_STORAGE_KEY);

      if (!raw) {
        return emptyJournalStore();
      }

      try {
        const parsed = JSON.parse(raw) as Record<string, unknown>;
        const studies = Array.isArray(parsed.studies)
          ? parsed.studies
              .map(normalizeStudy)
              .filter((study): study is JournalStudy => Boolean(study))
          : [];

        const activeStudyId = isString(parsed.activeStudyId)
          ? parsed.activeStudyId
          : null;

        return {
          version: JOURNAL_SCHEMA_VERSION,
          activeStudyId,
          studies,
        };
      } catch {
        return emptyJournalStore();
      }
    },

    save(store) {
      storage.setItem(
        JOURNAL_STORAGE_KEY,
        JSON.stringify({
          version: JOURNAL_SCHEMA_VERSION,
          activeStudyId: store.activeStudyId,
          studies: store.studies,
        }),
      );
    },
  };
}
