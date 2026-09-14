"use client";

import { useActionState, useState } from "react";
import { useRouter } from "next/navigation";
import {
  changeJourneyIdAction,
  changeJourneyPasscodeAction,
  deleteJourneyAction,
  exitJourneyAction,
  resetJourneyAction,
  type JourneyActionState,
} from "./actions";
import { PasscodeInput } from "./PasscodeInput";
import styles from "./save-progress.module.css";

const initialJourneyActionState: JourneyActionState = { status: "idle" };

export function ManageJourneyClient({ returnTo = "/journey" }: { returnTo?: string }) {
  const router = useRouter();
  const [mode, setMode] = useState<"menu" | "passcode" | "journeyId" | "reset" | "delete">("menu");
  const [passcodeState, passcodeAction, passcodePending] = useActionState(changeJourneyPasscodeAction, initialJourneyActionState);
  const [idState, idAction, idPending] = useActionState(changeJourneyIdAction, initialJourneyActionState);
  const [resetState, resetAction, resetPending] = useActionState(resetJourneyAction, initialJourneyActionState);
  const [deleteState, deleteAction, deletePending] = useActionState(deleteJourneyAction, initialJourneyActionState);

  if (passcodeState.status === "success" || idState.status === "success") {
    const message = passcodeState.status === "success" ? passcodeState.message : idState.message;
    return (
      <section className={styles.createdCard} aria-live="polite">
        <h2>Saved Journey credentials updated</h2>
        <p>{message}</p>
        <button className={styles.primaryButton} type="button" onClick={() => router.replace(`/journey/save-progress?returnTo=${encodeURIComponent(returnTo)}`)}>
          Access My Journey
        </button>
      </section>
    );
  }

  if (mode === "menu") {
    return (
      <section className={styles.managePanel}>
        <div className={styles.manageHeader}>
          <div><p className={styles.eyebrow}>Saved Journey active</p><h2>Manage My Journey</h2><p>Your saved progress is connected on this device. You can continue your Journey, update credentials, reset progress, or permanently delete your Journey.</p></div>
          <form action={exitJourneyAction}><button className={styles.secondaryButton} type="submit">Exit My Journey</button></form>
        </div>
        <div className={styles.manageGrid}>
          <button className={styles.manageChoice} type="button" onClick={() => setMode("passcode")}><strong>Change Passcode</strong><span>Use your current 4-digit passcode to choose a new one.</span></button>
          <button className={styles.manageChoice} type="button" onClick={() => setMode("journeyId")}><strong>Change Journey ID</strong><span>Choose a new private Journey ID. The old ID becomes invalid immediately.</span></button>
          <button className={styles.manageChoice} type="button" onClick={() => setMode("reset")}><strong>Start My Journey Over</strong><span>Clear personal progress and earned acknowledgments while keeping your credentials.</span></button>
          <button className={`${styles.manageChoice} ${styles.dangerChoice}`} type="button" onClick={() => setMode("delete")}><strong>Permanently Delete My Journey</strong><span>Delete your Journey ID, saved progress, earned milestones, and active Journey sessions.</span></button>
        </div>
        <button className={styles.primaryButton} type="button" onClick={() => router.replace(returnTo)}>Continue My Journey</button>
      </section>
    );
  }

  if (mode === "passcode") {
    return (
      <section className={styles.formPanel}>
        <h3>Change Passcode</h3>
        <p>Changing your passcode ends all active Journey sessions. You will sign in again with the same Journey ID and your new passcode.</p>
        <form action={passcodeAction} className={styles.formStack}>
          <PasscodeInput name="currentPasscode" label="Current 4-digit passcode" autoComplete="current-password" />
          <PasscodeInput name="newPasscode" label="New 4-digit passcode" autoComplete="new-password" />
          <PasscodeInput name="confirmPasscode" label="Confirm new passcode" autoComplete="new-password" />
          {passcodeState.status === "error" && <p className={styles.errorMessage} role="alert">{passcodeState.message}</p>}
          <button className={styles.primaryButton} type="submit" disabled={passcodePending}>{passcodePending ? "Changing…" : "Change Passcode"}</button>
        </form>
        <button className={styles.textButton} type="button" onClick={() => setMode("menu")}>← Back to Manage My Journey</button>
      </section>
    );
  }

  if (mode === "journeyId") {
    return (
      <section className={styles.formPanel}>
        <h3>Change Journey ID</h3>
        <p>Use at least 12 characters with an uppercase letter, a lowercase letter, at least two numbers, and one approved symbol: ! @ # $ % &amp; * - _</p>
        <form action={idAction} className={styles.formStack}>
          <label>New Journey ID<input name="newJourneyId" minLength={12} required autoCapitalize="none" autoCorrect="off" spellCheck={false} /></label>
          {idState.status === "error" && <p className={styles.errorMessage} role="alert">{idState.message}</p>}
          <button className={styles.primaryButton} type="submit" disabled={idPending}>{idPending ? "Changing…" : "Change Journey ID"}</button>
        </form>
        <p className={styles.warning}><strong>Important:</strong> Save the new Journey ID before leaving this page. FCE cannot recover it if it is lost.</p>
        <button className={styles.textButton} type="button" onClick={() => setMode("menu")}>← Back to Manage My Journey</button>
      </section>
    );
  }

  if (mode === "reset") {
    if (resetState.status === "success") {
      return (
        <section className={styles.formPanel} aria-live="polite">
          <h3>Start My Journey Over</h3>
          <p className={styles.successMessage} role="status">{resetState.message}</p>
          <button className={styles.primaryButton} type="button" onClick={() => router.replace(returnTo)}>
            Continue My Journey
          </button>
          <button className={styles.textButton} type="button" onClick={() => setMode("menu")}>← Back to Manage My Journey</button>
        </section>
      );
    }

    return (
      <section className={styles.formPanel}>
        <h3>Start My Journey Over</h3>
        <p>This clears your personal lesson states, timestamps, current coverage, and earned completion acknowledgments. Your Journey ID and passcode stay the same. This cannot be undone.</p>
        <form action={resetAction} className={styles.formStack}>
          <label>Type RESET to confirm<input name="confirmation" required autoComplete="off" /></label>
          {resetState.status === "error" && <p className={styles.errorMessage} role="alert">{resetState.message}</p>}
          <button className={styles.secondaryButton} type="submit" disabled={resetPending}>{resetPending ? "Resetting…" : "Reset My Saved Progress"}</button>
        </form>
        <button className={styles.textButton} type="button" onClick={() => setMode("menu")}>← Back to Manage My Journey</button>
      </section>
    );
  }

  return (
    <section className={`${styles.formPanel} ${styles.dangerPanel}`}>
      <h3>Permanently Delete My Journey</h3>
      <p>This permanently deletes your Journey ID record, all saved Journey progress, earned milestones, and active Journey sessions. Aggregate, non-identifying website and ministry statistics are separate and are not linked to your Journey ID. This action cannot be undone.</p>
      <form action={deleteAction} className={styles.formStack}>
        <PasscodeInput name="passcode" label="4-digit passcode" autoComplete="current-password" />
        <label>Type DELETE to confirm<input name="confirmation" required autoComplete="off" /></label>
        {deleteState.status === "error" && <p className={styles.errorMessage} role="alert">{deleteState.message}</p>}
        <button className={styles.dangerButton} type="submit" disabled={deletePending}>{deletePending ? "Deleting…" : "Permanently Delete My Journey"}</button>
      </form>
      <button className={styles.textButton} type="button" onClick={() => setMode("menu")}>← Cancel and return to Manage My Journey</button>
    </section>
  );
}
