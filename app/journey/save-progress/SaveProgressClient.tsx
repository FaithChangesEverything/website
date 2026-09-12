"use client";

import { useActionState, useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  accessJourneyAction,
  acknowledgeJourneyCreationAction,
  createCustomJourneyAction,
  createGeneratedJourneyAction,
  type JourneyActionState,
} from "./actions";
import styles from "./save-progress.module.css";

const initialJourneyActionState: JourneyActionState = { status: "idle" };

function safeReturnTo(value: string | null) {
  if (!value || !value.startsWith("/journey")) return "/journey";
  return value;
}

function PasscodeFields() {
  return (
    <>
      <label>
        4-digit passcode
        <input name="passcode" inputMode="numeric" pattern="[0-9]{4}" minLength={4} maxLength={4} required autoComplete="new-password" />
      </label>
      <label className={styles.checkLabel}>
        <input type="checkbox" name="remember" />
        Remember My Journey on this device
      </label>
    </>
  );
}

export function SaveProgressClient({ returnTo }: { returnTo?: string }) {
  const router = useRouter();
  const destination = safeReturnTo(returnTo ?? null);
  const [mode, setMode] = useState<"choose" | "generated" | "custom" | "access">("choose");
  const [acknowledged, setAcknowledged] = useState(false);
  const [activationError, setActivationError] = useState<string | null>(null);
  const [activationPending, startActivation] = useTransition();
  const [generatedState, generatedAction, generatedPending] = useActionState(createGeneratedJourneyAction, initialJourneyActionState);
  const [customState, customAction, customPending] = useActionState(createCustomJourneyAction, initialJourneyActionState);
  const [accessState, accessAction, accessPending] = useActionState(accessJourneyAction, initialJourneyActionState);

  useEffect(() => {
    if (accessState.status === "success") router.replace(destination);
  }, [accessState.status, destination, router]);

  const createdState = generatedState.status === "success" ? generatedState : customState.status === "success" ? customState : null;

  function beginJourney() {
    if (!acknowledged || activationPending) return;
    setActivationError(null);
    startActivation(async () => {
      const result = await acknowledgeJourneyCreationAction();
      if (result.status !== "success") {
        setActivationError(result.message ?? "Your Journey could not be activated right now.");
        return;
      }
      router.replace(destination);
      router.refresh();
    });
  }

  if (createdState?.journeyId) {
    return (
      <section className={styles.createdCard} aria-live="polite">
        <h2>Your Journey ID is ready</h2>
        <p>Save this Journey ID somewhere safe. Faith Changes Everything cannot recover it for you if it is lost.</p>
        <div className={styles.journeyIdBox}>
          <code>{createdState.journeyId}</code>
          <button type="button" onClick={() => navigator.clipboard?.writeText(createdState.journeyId ?? "")}>Copy Journey ID</button>
        </div>
        <p className={styles.warning}><strong>Important:</strong> Your Journey ID and 4-digit passcode are the only way to return to this saved Journey.</p>
        <label className={styles.checkLabel}>
          <input type="checkbox" checked={acknowledged} onChange={(event) => setAcknowledged(event.target.checked)} />
          I have saved my Journey ID somewhere safe.
        </label>
        {activationError && <p className={styles.errorMessage} role="alert">{activationError}</p>}
        <button className={styles.primaryButton} type="button" disabled={!acknowledged || activationPending} onClick={beginJourney}>
          {activationPending ? "Activating…" : "Begin My Journey"}
        </button>
      </section>
    );
  }

  if (mode === "choose") {
    return (
      <div className={styles.actions} aria-label="Journey ID actions">
        <article className={styles.actionCard}>
          <h3>Create My Journey ID</h3>
          <p>Choose whether FCE generates a secure Journey ID for you or you create your own.</p>
          <button className={styles.primaryButton} type="button" onClick={() => setMode("generated")}>Create a Journey ID</button>
        </article>
        <article className={styles.actionCard}>
          <h3>I Already Have a Journey ID</h3>
          <p>Access the private Journey progress you previously saved.</p>
          <button className={styles.secondaryButton} type="button" onClick={() => setMode("access")}>Access My Journey</button>
        </article>
      </div>
    );
  }

  if (mode === "generated") {
    return (
      <div className={styles.formPanel}>
        <h3>Create My Journey ID</h3>
        <p>FCE can generate a secure 12-character Journey ID for you, or you can create your own.</p>
        <form action={generatedAction} className={styles.formStack}>
          <PasscodeFields />
          {generatedState.status === "error" && <p className={styles.errorMessage} role="alert">{generatedState.message}</p>}
          <button className={styles.primaryButton} type="submit" disabled={generatedPending}>{generatedPending ? "Creating…" : "Generate My Journey ID"}</button>
        </form>
        <button className={styles.textButton} type="button" onClick={() => setMode("custom")}>I want to create my own Journey ID</button>
        <button className={styles.textButton} type="button" onClick={() => setMode("choose")}>← Back</button>
      </div>
    );
  }

  if (mode === "custom") {
    return (
      <div className={styles.formPanel}>
        <h3>Create My Own Journey ID</h3>
        <p>Use at least 12 characters with an uppercase letter, a lowercase letter, at least two numbers, and one of these symbols: ! @ # $ % &amp; * - _</p>
        <form action={customAction} className={styles.formStack}>
          <label>
            Journey ID
            <input name="journeyId" minLength={12} required autoCapitalize="none" autoCorrect="off" spellCheck={false} />
          </label>
          <PasscodeFields />
          {customState.status === "error" && <p className={styles.errorMessage} role="alert">{customState.message}</p>}
          <button className={styles.primaryButton} type="submit" disabled={customPending}>{customPending ? "Creating…" : "Create My Journey ID"}</button>
        </form>
        <button className={styles.textButton} type="button" onClick={() => setMode("generated")}>← Use a generated Journey ID instead</button>
      </div>
    );
  }

  return (
    <div className={styles.formPanel}>
      <h3>Access My Journey</h3>
      <p>Enter the Journey ID and 4-digit passcode you saved. For privacy, FCE cannot recover either credential.</p>
      <form action={accessAction} className={styles.formStack}>
        <label>
          Journey ID
          <input name="journeyId" required autoCapitalize="none" autoCorrect="off" spellCheck={false} autoComplete="username" />
        </label>
        <label>
          4-digit passcode
          <input name="passcode" inputMode="numeric" pattern="[0-9]{4}" minLength={4} maxLength={4} required autoComplete="current-password" />
        </label>
        <label className={styles.checkLabel}>
          <input type="checkbox" name="remember" />
          Remember My Journey on this device
        </label>
        {accessState.status === "error" && <p className={styles.errorMessage} role="alert">{accessState.message}</p>}
        <button className={styles.primaryButton} type="submit" disabled={accessPending}>{accessPending ? "Accessing…" : "Access My Journey"}</button>
      </form>
      <button className={styles.textButton} type="button" onClick={() => setMode("choose")}>← Back</button>
    </div>
  );
}
