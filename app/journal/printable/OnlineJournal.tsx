"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import styles from "../page.module.css";
import JournalHeader from "../components/JournalHeader";
import SectionTitle from "../components/SectionTitle";
import GoldDivider from "../components/GoldDivider";
import StudyPageOneBody from "../study/components/StudyPageOneBody";
import StudyPageTwoBody from "../study/components/StudyPageTwoBody";
import StudyPageThreeBody from "../study/components/StudyPageThreeBody";
import {
  createJournalStudy,
  emptyJournalFields,
  getJournalStudyLabel,
  type JournalFieldName,
  type JournalStudy,
  type JournalStore,
} from "../lib/journalModel";
import {
  createBrowserJournalStorage,
  emptyJournalStore,
  type JournalStorageAdapter,
} from "../lib/journalStorage";

const printablePdfUrl =
  "https://resources.faithchangeseverything.org/documents/doc-2026-00003-fce-three-page-bible-study.pdf";

function newStudy(): JournalStudy {
  return createJournalStudy(crypto.randomUUID(), new Date().toISOString());
}

function cloneStudy(study: JournalStudy): JournalStudy {
  return {
    ...study,
    fields: { ...study.fields },
  };
}

export default function OnlineJournal() {
  const storageRef = useRef<JournalStorageAdapter | null>(null);
  const [store, setStore] = useState<JournalStore>(emptyJournalStore);
  const [current, setCurrent] = useState<JournalStudy | null>(null);
  const [ready, setReady] = useState(false);
  const [storageAvailable, setStorageAvailable] = useState(true);
  const [status, setStatus] = useState("");

  useEffect(() => {
    try {
      const adapter = createBrowserJournalStorage(window.localStorage);
      storageRef.current = adapter;

      const loaded = adapter.load();
      const active = loaded.studies.find(
        (study) => study.id === loaded.activeStudyId,
      );

      setStore(loaded);
      setCurrent(active ? cloneStudy(active) : newStudy());
    } catch {
      setStorageAvailable(false);
      setStore(emptyJournalStore());
      setCurrent(newStudy());
    } finally {
      setReady(true);
    }
  }, []);

  const values = current?.fields ?? emptyJournalFields();

  const sortedStudies = useMemo(
    () =>
      [...store.studies].sort((a, b) =>
        b.updatedAt.localeCompare(a.updatedAt),
      ),
    [store.studies],
  );

  function persist(nextStore: JournalStore) {
    storageRef.current?.save(nextStore);
    setStore(nextStore);
  }

  function saveCurrent(): JournalStudy | null {
    if (!current || !storageRef.current) {
      return null;
    }

    const saved: JournalStudy = {
      ...current,
      updatedAt: new Date().toISOString(),
      fields: { ...current.fields },
    };

    const exists = store.studies.some((study) => study.id === saved.id);
    const studies = exists
      ? store.studies.map((study) => (study.id === saved.id ? saved : study))
      : [...store.studies, saved];

    const nextStore: JournalStore = {
      ...store,
      activeStudyId: saved.id,
      studies,
    };

    persist(nextStore);
    setCurrent(saved);
    setStatus("Saved on this device.");
    return saved;
  }

  function handleFieldChange(field: JournalFieldName, value: string) {
    setCurrent((study) =>
      study
        ? {
            ...study,
            fields: {
              ...study.fields,
              [field]: value,
            },
          }
        : study,
    );
    setStatus("Unsaved changes.");
  }

  function handleNewStudy() {
    if (storageAvailable) {
      saveCurrent();
    }

    setCurrent(newStudy());
    setStatus(
      storageAvailable
        ? "Previous study saved. New blank study started."
        : "New blank study started.",
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleOpenStudy(id: string) {
    const study = store.studies.find((item) => item.id === id);

    if (!study) {
      return;
    }

    const nextStore: JournalStore = {
      ...store,
      activeStudyId: id,
    };

    if (storageRef.current) {
      persist(nextStore);
    } else {
      setStore(nextStore);
    }

    setCurrent(cloneStudy(study));
    setStatus("Saved study opened.");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleDeleteStudy(id: string) {
    if (!storageRef.current) {
      return;
    }

    const study = store.studies.find((item) => item.id === id);
    const label = study ? getJournalStudyLabel(study) : "this journal study";

    if (!window.confirm(`Delete ${label} from this device? This cannot be undone.`)) {
      return;
    }

    const studies = store.studies.filter((item) => item.id !== id);
    const deletingCurrent = current?.id === id;
    const activeStudyId =
      store.activeStudyId === id ? studies[0]?.id ?? null : store.activeStudyId;

    const nextStore: JournalStore = {
      ...store,
      activeStudyId,
      studies,
    };

    persist(nextStore);

    if (deletingCurrent) {
      setCurrent(newStudy());
    }

    setStatus("Saved study deleted from this device.");
  }

  function formatDate(timestamp: string) {
    return new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(timestamp));
  }

  return (
    <main className={styles.printableDocument}>
      <section className={styles.journalToolbar} aria-labelledby="online-journal-title">
        <p className={styles.journalToolbarEyebrow}>FCE Bible Journal</p>
        <h1 id="online-journal-title">Your Online Bible Journal</h1>
        <p>
          Type directly into the three study pages below. You may save a study
          in this browser, print or save a completed copy as a PDF, begin
          another study, or open the blank printable PDF.
        </p>

        <div className={styles.journalPrivacyNotice}>
          <strong>Your privacy matters.</strong>
          <span>
            Your saved journal entries stay only in this browser on this device.
            They are not sent to or stored by Faith Changes Everything.
          </span>
        </div>

        <p className={styles.journalStorageCaution}>
          Browser-saved journals are not a permanent backup. Clearing browser
          data, using private browsing, changing devices, or losing access to
          this browser profile can remove them. For anything you want to keep
          long term, use Print / Save as PDF.
        </p>

        {!storageAvailable && (
          <p className={styles.journalStorageWarning} role="alert">
            This browser is not allowing local storage. You can still type,
            print, save as PDF, and use the blank printable PDF, but browser
            saving is unavailable.
          </p>
        )}

        <div className={styles.journalToolbarActions}>
          <button
            type="button"
            onClick={saveCurrent}
            disabled={!ready || !storageAvailable}
            className={styles.journalControlPrimary}
          >
            Save on This Device
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            disabled={!ready}
            className={styles.journalControl}
          >
            Print / Save as PDF
          </button>
          <button
            type="button"
            onClick={handleNewStudy}
            disabled={!ready}
            className={styles.journalControl}
          >
            Start a New Journal Study
          </button>
          <a
            href={printablePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.journalControl}
          >
            Open Blank Printable PDF
          </a>
        </div>

        <p className={styles.journalStatus} aria-live="polite">
          {status}
        </p>

        {sortedStudies.length > 0 && (
          <section className={styles.savedStudies} aria-labelledby="saved-studies-title">
            <h2 id="saved-studies-title">Your Saved Journal Studies</h2>
            <div className={styles.savedStudyList}>
              {sortedStudies.map((study) => (
                <article key={study.id} className={styles.savedStudyCard}>
                  <div>
                    <strong>{getJournalStudyLabel(study)}</strong>
                    <span>Last saved {formatDate(study.updatedAt)}</span>
                  </div>
                  <div className={styles.savedStudyActions}>
                    <button type="button" onClick={() => handleOpenStudy(study.id)}>
                      Open
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteStudy(study.id)}
                      className={styles.savedStudyDelete}
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </section>

      <section className={styles.printablePage}>
        <JournalHeader />
        <SectionTitle title="Bible Study – Page 1" />
        <GoldDivider />
        <StudyPageOneBody values={values} onFieldChange={handleFieldChange} />
      </section>

      <section className={styles.printablePage}>
        <JournalHeader />
        <SectionTitle title="Bible Study – Page 2" />
        <GoldDivider />
        <StudyPageTwoBody values={values} onFieldChange={handleFieldChange} />
      </section>

      <section className={styles.printablePage}>
        <JournalHeader />
        <SectionTitle title="Bible Study – Page 3" />
        <GoldDivider />
        <StudyPageThreeBody values={values} onFieldChange={handleFieldChange} />
      </section>
    </main>
  );
}
