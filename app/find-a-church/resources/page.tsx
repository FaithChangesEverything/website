import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "../find-a-church.module.css";

export const metadata: Metadata = {
  title: "Finding a Church Home Resources | Faith Changes Everything",
  description: "Faith Changes Everything resources for prayerfully evaluating and finding a healthy church home.",
};

export default function FindAChurchResourcesPage() {
  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.hero} aria-labelledby="church-resources-page-title">
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <h1 id="church-resources-page-title">Finding a Church Home Resources</h1>
          <p className={styles.heroLead}>
            Additional biblical guidance and FCE resources will be collected here to help you continue researching, evaluating, and prayerfully considering a church home.
          </p>
        </div>
      </section>

      <div className={styles.content}>
        <section className={styles.resourcesCta}>
          <p className={styles.eyebrow}>FCE RESOURCE COLLECTION</p>
          <h2>Resources Are Being Prepared</h2>
          <p>
            Pastor Richard’s approved guidance and additional carefully selected resources will be added here as they are prepared for publication. The church-search page remains available now while this resource collection is being completed.
          </p>
          <Link className={styles.resourcesButton} href="/find-a-church">
            ← Return to Find a Church Home
          </Link>
        </section>
      </div>

      <Footer />
    </main>
  );
}
