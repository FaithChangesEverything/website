"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

export default function Home() {
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

      <section className="homepage-preview" aria-labelledby="coming-next-title">
        <p className="eyebrow">Faith Changes Everything</p>
        <h2 id="coming-next-title">Hope begins here.</h2>
        <p>
          This is the foundation of the new FCE landing page. The Daily Affirmation,
          Journey to Hope, music, sermons, prayer, downloads, and ministry resources
          will continue below this hero.
        </p>
      </section>
    </main>
  );
}
