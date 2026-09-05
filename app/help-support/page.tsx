import Image from "next/image";
import Link from "next/link";
import NeedHelpNow from "./NeedHelpNow";
import SupportIcon from "./SupportIcon";
import { supportCategories } from "./resources";
import styles from "./helpSupport.module.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Journey to Hope", href: "/journey" },
  { label: "Music", href: "/music" },
  { label: "Sermons", href: "/sermons" },
  { label: "Prayer", href: "/prayer" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const cardImages: Record<string, { src: string; alt: string }> = {
  "christian-counseling": {
    src: "/images/help-support/christian-counseling.jpg",
    alt: "Two people having a supportive conversation.",
  },
  "mental-health": {
    src: "/images/help-support/mental-health.jpg",
    alt: "A person looking toward a peaceful sunrise.",
  },
  "grief-recovery": {
    src: "/images/help-support/grief-recovery.jpg",
    alt: "A white lily beside a cross in warm evening light.",
  },
  "marriage-family": {
    src: "/images/help-support/marriage-family.jpg",
    alt: "A family walking together at sunset.",
  },
  "addiction-recovery": {
    src: "/images/help-support/addiction-recovery.jpg",
    alt: "Broken chains representing freedom and recovery.",
  },
  "bible-study": {
    src: "/images/help-support/bible-study.jpg",
    alt: "An open Bible in warm natural light.",
  },
  "find-a-church": {
    src: "/images/help-support/finding-a-church.jpg",
    alt: "A welcoming church at sunset.",
  },
};

export const metadata = {
  title: "Help & Support Resources | Faith Changes Everything",
  description:
    "Immediate crisis support and trusted help resources from Faith Changes Everything.",
};

export default function HelpSupportPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/">
          <strong>FAITH</strong>
          <span>CHANGES EVERYTHING</span>
        </Link>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className={styles.prayerButton} href="/prayer">
          🙏 Request Prayer
        </Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Help & Support Resources</p>
          <h1>Need Help Right Now?</h1>
          <span className={styles.goldRule} />
          <h2>You are not alone. Help is available right now.</h2>
          <p>
            If you or someone you care about is experiencing a crisis, feeling
            overwhelmed, or unsure where to turn, this page is here to help you
            find immediate support and trusted resources. Whether you need to
            talk with someone now, connect with professional services, or learn
            about next steps, you are in the right place.
          </p>
        </div>
        <div className={styles.heroHope}>
          <span>There is Hope</span>
          <small>A LIGHT IN ANY STORM</small>
        </div>
      </section>

      <NeedHelpNow />

      <section className={styles.resourcesSection}>
        <div className={styles.sectionHeading}>
          <p>Find the Help You Need</p>
          <h2>Other Support Resources</h2>
          <span className={styles.goldRule} />
          <p>
            Choose the resource area that best matches what you are facing. If
            you are unsure where to start, a qualified professional or crisis
            service can help you identify the next step.
          </p>
        </div>

        <div className={styles.resourceGrid}>
          {supportCategories.map((category) => {
            const cardImage = cardImages[category.id];

            return (
              <article
                className={styles.resourceCard}
                key={category.id}
                id={category.id}
              >
                {cardImage ? (
                  <div className={styles.cardPhoto}>
                    <Image
                      src={cardImage.src}
                      alt={cardImage.alt}
                      fill
                      sizes="(max-width: 720px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    />
                  </div>
                ) : null}

                <div className={styles.cardContent}>
                  <span className={styles.categoryIcon} aria-hidden="true">
                    <SupportIcon name={category.icon} />
                  </span>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <details>
                    <summary>View Resources</summary>
                    <div className={styles.resourceLinks}>
                      {category.resources.map((resource) => {
                        const external = resource.href.startsWith("http");

                        return (
                          <div key={resource.title}>
                            {external ? (
                              <a
                                href={resource.href}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {resource.title} ↗
                              </a>
                            ) : (
                              <Link href={resource.href}>
                                {resource.title} →
                              </Link>
                            )}
                            <p>{resource.description}</p>
                            {resource.note ? (
                              <small>{resource.note}</small>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  </details>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.encouragement}>
        <article>
          <span aria-hidden="true">♡</span>
          <div>
            <h2>Reaching Out Takes Courage</h2>
            <p>
              Reaching out can feel difficult, but you do not have to handle
              this alone. Support is available, and taking one step—making a
              call, sending a text, or clicking a link—can connect you with
              someone who is ready to help.
            </p>
          </div>
        </article>
        <article>
          <span aria-hidden="true">↟</span>
          <div>
            <h2>Faith Changes Everything Can Walk With You, Too</h2>
            <p>
              We&apos;re here to provide biblical encouragement, prayer, and
              practical resources as you continue your journey. You matter to
              God. You matter here.
            </p>
            <Link href="/prayer">Request Prayer →</Link>
          </div>
        </article>
      </section>

      <section className={styles.disclaimer}>
        <span aria-hidden="true">ⓘ</span>
        <div>
          <h2>About These Resources</h2>
          <p>
            This page is provided to help connect people with crisis resources
            and support. Faith Changes Everything provides these resources for
            informational and supportive purposes and does not provide medical,
            mental health, legal, or emergency services. The information on
            this page is not a substitute for care or advice from a qualified
            professional.
          </p>
          <p>
            Faith Changes Everything is not affiliated with or responsible for
            the services, content, availability, or privacy practices of
            third-party organizations linked from this page.
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div>
          <strong>⚓</strong>
          <em>A light in any storm.</em>
        </div>
        <div>
          <p className={styles.scripture}>
            “God is our refuge and strength, a very present help in trouble.”
          </p>
          <p>
            <strong>Psalm 46:1 (KJV)</strong>
          </p>
          <small>HOPE. TRUTH. LOVE. FOUND IN JESUS.</small>
        </div>
        <div className={styles.footerLinks}>
          <Link href="/">Home</Link>
          <Link href="/prayer">Prayer</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
