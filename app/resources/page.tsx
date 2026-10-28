import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { resources, type Resource } from "./resourceData";
import styles from "./resources.module.css";

export const metadata = {
  title: "Resources for Life's Journey | Faith Changes Everything",
  description: "Explore Faith Changes Everything Bible guides, printable resources, Scripture, theological papers, and a clear pathway to trusted Help & Support."
};

const categories = [
  { id: "guides", label: "FCE Guides & Printables", icon: "▤" },
  { id: "scripture", label: "Read the Bible", icon: "✦" },
  { id: "research", label: "Theological Papers", icon: "❧" },
  { id: "support", label: "Help & Support", icon: "♡" }
] as const;

function ResourceAction({ resource }: { resource: Resource }) {
  if (resource.type === "internal") {
    return <Link className={styles.action} href={resource.href}>Read Online <span aria-hidden="true">→</span></Link>;
  }
  return (
    <a className={styles.action} href={resource.href} target="_blank" rel="noopener noreferrer">
      View / Download PDF <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function ResourcesPage() {
  const guides = resources.filter(r => r.type === "pdf" && !r.title.includes("Eschatology"));
  const reader = resources.find(r => r.type === "internal");
  const paper = resources.find(r => r.title.includes("Eschatology"));

  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="resources-title">
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Faith · Guidance · Hope</p>
            <h1 id="resources-title">Resources for<br />Life’s Journey</h1>
            <p>Explore biblical guidance, practical tools for spiritual growth, and trusted support for life’s challenges.</p>
          </div>
        </section>

        <div className={styles.container}>
          <section className={styles.navigation} aria-labelledby="directory-heading">
            <h2 id="directory-heading">Find What You Need</h2>
            <p>Choose a resource area to explore our ministry materials or find additional support.</p>
            <nav className={styles.quickLinks} aria-label="Resource categories">
              {categories.map(c => (
                <a key={c.id} className={c.id === "support" ? styles.supportQuickLink : styles.quickLink} href={`#${c.id}`}>
                  <span aria-hidden="true">{c.icon}</span>{c.label}
                </a>
              ))}
            </nav>
          </section>

          <section className={styles.section} id="guides" aria-labelledby="guides-heading">
            <div className={styles.sectionHeading}>
              <span aria-hidden="true">▤</span>
              <div>
                <h2 id="guides-heading">FCE Guides & Printable Resources</h2>
                <p>Free ministry materials created to help you study Scripture and grow in faith.</p>
              </div>
            </div>
            <div className={styles.guideGrid}>
              {guides.map(resource => (
                <article className={styles.guide} key={resource.id}>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <ResourceAction resource={resource} />
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section} id="scripture" aria-labelledby="scripture-heading">
            <div className={styles.sectionHeading}>
              <span aria-hidden="true">✦</span>
              <div>
                <h2 id="scripture-heading">Read the Bible Online</h2>
                <p>Explore all 66 books of the King James Version through the FCE Bible Reader.</p>
              </div>
            </div>
            {reader && (
              <article className={styles.featureCard}>
                <div>
                  <p className={styles.featureLabel}>The Faith Changes Everything Bible</p>
                  <h3>{reader.title}</h3>
                  <p>{reader.description} Read by book and chapter, or go directly to a passage.</p>
                  <ResourceAction resource={reader} />
                </div>
                <div className={styles.bibleImage} role="img" aria-label="An open Bible in warm natural light" />
              </article>
            )}
          </section>

          <section className={styles.section} id="research" aria-labelledby="research-heading">
            <div className={styles.sectionHeading}>
              <span aria-hidden="true">❧</span>
              <div>
                <h2 id="research-heading">Theological Papers & Research</h2>
                <p>Thoughtful studies exploring Scripture and important questions of Christian faith.</p>
              </div>
            </div>
            {paper && (
              <article className={styles.paper}>
                <p className={styles.featureLabel}>Featured theological paper</p>
                <h3>{paper.title}</h3>
                <p>{paper.description}</p>
                <ResourceAction resource={paper} />
              </article>
            )}
          </section>

          <section className={styles.section} id="support" aria-labelledby="support-heading">
            <div className={styles.sectionHeading}>
              <span aria-hidden="true">♡</span>
              <div>
                <h2 id="support-heading">Help & Support</h2>
                <p>A dedicated place for counseling, mental health, grief, family, and addiction recovery resources.</p>
              </div>
            </div>
            <article className={styles.supportFeature}>
              <div className={styles.supportPhoto} role="img" aria-label="A caring conversation between two people" />
              <div className={styles.supportContent}>
                <p className={styles.featureLabel}>You don’t have to face life’s challenges alone</p>
                <h3>Find Guidance, Encouragement & Practical Help</h3>
                <p>Our Help & Support page brings trusted outside organizations together in one place, including Christian counseling, mental health, grief and recovery, marriage and family, and addiction recovery.</p>
                <Link className={styles.supportButton} href="/help-support">Explore FCE Help & Support <span aria-hidden="true">→</span></Link>
              </div>
            </article>
            <aside className={styles.crisisStrip} aria-label="Immediate crisis support">
              <div><strong>Need Help Right Now?</strong><p>If there is immediate danger, call <a href="tel:911">911</a>. For crisis support in the U.S., call or text <a href="tel:988">988</a>.</p></div>
              <Link href="/help-support">Get Help Now <span aria-hidden="true">→</span></Link>
            </aside>
          </section>
        </div>

        <section className={styles.closing}>
          <h2>You Are Not Alone</h2>
          <p>Whatever you are facing, there is hope, help, and a path forward.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
