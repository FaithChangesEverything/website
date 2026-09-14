import Link from "next/link";
import { JourneyFrame } from "../components/JourneyShell";
import { getJourneyContinueDestination } from "../progress/continue-destination";
import { getCurrentJourneyUuid } from "../progress/server";
import { ManageJourneyClient } from "./ManageJourneyClient";
import { SaveProgressClient } from "./SaveProgressClient";
import styles from "./save-progress.module.css";

export const metadata = {
  title: "Save Your Journey Progress | Journey to Hope",
  description: "Save Journey to Hope progress privately with a Journey ID without creating an FCE account or providing identifying information.",
};

function safeReturnTo(value?: string) {
  return value?.startsWith("/journey") ? value : "/journey";
}

export default async function SaveProgressPage({ searchParams }: { searchParams: Promise<{ returnTo?: string; deleted?: string }> }) {
  const { returnTo, deleted } = await searchParams;
  const deletionConfirmed = deleted === "1";
  const requestedDestination = safeReturnTo(returnTo);
  const activeJourney = deletionConfirmed ? false : Boolean(await getCurrentJourneyUuid());
  const continueDestination = activeJourney ? await getJourneyContinueDestination() : "/journey";
  const destination = activeJourney && !returnTo ? continueDestination : requestedDestination;

  const title = deletionConfirmed
    ? "Journey Permanently Deleted"
    : activeJourney
      ? "Manage My Saved Journey"
      : "Save Your Journey Progress";

  const lead = deletionConfirmed
    ? "Your Journey ID and the saved Journey progress connected to it have been permanently removed."
    : activeJourney
      ? "Your saved Journey is active on this device. Manage it here without adding identifying information to your Journey record."
      : "A Journey ID lets you save your Journey to Hope progress without creating an FCE account or giving us your name, email address, or phone number.";

  return (
    <JourneyFrame>
      <main className={styles.page}>
        <div className={styles.shell}>
          <header className={styles.hero}>
            <p className={styles.eyebrow}>Journey to Hope</p>
            <h1>{title}</h1>
            <p className={styles.lead}>{lead}</p>
          </header>

          <section className={styles.privacyCard} aria-labelledby="privacy-title">
            <div className={styles.privacyHeader}>
              <span className={styles.privacyIcon} aria-hidden="true">✓</span>
              <div>
                <h2 id="privacy-title">Private by design</h2>
                <p>Your Journey remains fully available whether or not you choose to save progress.</p>
              </div>
            </div>

            <div className={styles.points}>
              <article className={styles.point}>
                <strong>No FCE account</strong>
                <p>A Journey ID is not a login, membership, or ministry account.</p>
              </article>
              <article className={styles.point}>
                <strong>No identifying details required</strong>
                <p>Your name, email address, and phone number are not required to save Journey progress.</p>
              </article>
              <article className={styles.point}>
                <strong>You control saved progress</strong>
                <p>You can exit and return later, or permanently delete your Journey ID and saved progress.</p>
              </article>
            </div>

            {deletionConfirmed ? (
              <section className={styles.createdCard} aria-live="polite">
                <h2>Your saved Journey has been permanently deleted</h2>
                <p className={styles.successMessage} role="status">Your Journey ID record, saved progress, earned milestones, and active Journey sessions have been removed. This Journey cannot be restored.</p>
                <Link className={styles.primaryButton} href="/journey">Return to Journey to Hope</Link>
              </section>
            ) : activeJourney ? (
              <ManageJourneyClient returnTo={destination} />
            ) : (
              <SaveProgressClient returnTo={destination} />
            )}
          </section>

          {!deletionConfirmed && (
            <div className={styles.backRow}><Link href={destination}>← {activeJourney ? "Return to my Journey" : "Continue without saving"}</Link></div>
          )}
        </div>
      </main>
    </JourneyFrame>
  );
}
