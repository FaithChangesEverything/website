"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export type DailyAffirmation = {
  title: string;
  affirmation: string;
  scripture: string;
  scripture_reference: string;
  related_url: string | null;
};

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

export default function LandingPageClient({
  dailyAffirmation,
}: {
  dailyAffirmation: DailyAffirmation;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lighthouseMotionPaused, setLighthouseMotionPaused] = useState(false);
  const [systemReducedMotion, setSystemReducedMotion] = useState(false);

  useEffect(() => {
    const savedPreference = window.localStorage.getItem("fce-lighthouse-motion");
    if (savedPreference === "paused") {
      setLighthouseMotionPaused(true);
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncReducedMotion = () => setSystemReducedMotion(reducedMotionQuery.matches);

    syncReducedMotion();
    reducedMotionQuery.addEventListener("change", syncReducedMotion);

    return () => reducedMotionQuery.removeEventListener("change", syncReducedMotion);
  }, []);

  const animationPaused = systemReducedMotion || lighthouseMotionPaused;

  const toggleLighthouseMotion = () => {
    if (systemReducedMotion) return;

    setLighthouseMotionPaused((paused) => {
      const nextPaused = !paused;
      window.localStorage.setItem(
        "fce-lighthouse-motion",
        nextPaused ? "paused" : "running",
      );
      return nextPaused;
    });
  };

  return (
    <main className="landing-page">
      <section className={`hero ${animationPaused ? "is-lighthouse-paused" : ""}`} aria-label="Faith Changes Everything">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />

        <div className="lighthouse-sweep" aria-hidden="true">
          <span className="lighthouse-sweep-beam" />
          <span className="lighthouse-sweep-glow" />
        </div>

        <header className="site-header">
          <Link className="header-brand" href="/" aria-label="Faith Changes Everything home">
            <span className="header-brand-faith">FAITH</span>
            <span className="header-brand-sub">CHANGES EVERYTHING</span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Link className="prayer-button" href="/prayer">
              <span aria-hidden="true">🙏</span>
              <span>Request Prayer</span>
            </Link>

            <button
              className="lighthouse-motion-toggle desktop-motion-control"
              type="button"
              aria-label={
                systemReducedMotion
                  ? "Lighthouse animation is disabled by your system Reduce Motion setting"
                  : animationPaused
                    ? "Resume lighthouse animation"
                    : "Pause lighthouse animation"
              }
              title={
                systemReducedMotion
                  ? "Lighthouse animation is disabled by Reduce Motion"
                  : animationPaused
                    ? "Resume lighthouse"
                    : "Pause lighthouse"
              }
              aria-pressed={animationPaused}
              disabled={systemReducedMotion}
              onClick={toggleLighthouseMotion}
            >
              <span aria-hidden="true">{animationPaused ? "▶" : "Ⅱ"}</span>
            </button>

            <button
              className="mobile-menu-toggle"
              type="button"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <span className="menu-icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>

          <nav
            id="mobile-navigation"
            className={`mobile-nav ${mobileMenuOpen ? "is-open" : ""}`}
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <button
              className="mobile-motion-control"
              type="button"
              aria-pressed={animationPaused}
              disabled={systemReducedMotion}
              onClick={toggleLighthouseMotion}
            >
              <span aria-hidden="true">{animationPaused ? "▶" : "Ⅱ"}</span>
              <span>
                {systemReducedMotion
                  ? "Lighthouse Motion: System Reduced"
                  : animationPaused
                    ? "Resume Lighthouse"
                    : "Pause Lighthouse"}
              </span>
            </button>
          </nav>
        </header>

        <div className="hero-content">
          <Image
            className="hero-logo"
            src="/images/fce-logo-white.png"
            width={1536}
            height={1024}
            priority
            alt="Faith Changes Everything"
          />
          <p className="hero-script">A Light in Any Storm</p>
          <p className="hero-tagline">Hope. Truth. Love. Found in Jesus.</p>
        </div>
      </section>

      <section className="daily-affirmation-section" aria-labelledby="daily-affirmation-title">
        <div className="daily-affirmation-card">
          <div className="daily-affirmation-heading">
            <span className="daily-affirmation-rule" aria-hidden="true" />
            <p className="daily-affirmation-eyebrow">Today&apos;s Daily Affirmation</p>
            <span className="daily-affirmation-rule" aria-hidden="true" />
          </div>

          <h2 id="daily-affirmation-title">{dailyAffirmation.title}</h2>

          <p className="daily-affirmation-text">{dailyAffirmation.affirmation}</p>

          <div className="daily-affirmation-divider" aria-hidden="true">
            <span />
            <span className="daily-affirmation-diamond" />
            <span />
          </div>

          <blockquote className="daily-affirmation-scripture">
            &ldquo;{dailyAffirmation.scripture}&rdquo;
          </blockquote>
          <p className="daily-affirmation-reference">{dailyAffirmation.scripture_reference}</p>
        </div>
      </section>
    </main>
  );
}
