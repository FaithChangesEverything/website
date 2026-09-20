import Link from "next/link";
import { crisisSupport } from "./crisisSupport";
import styles from "./helpSupport.module.css";
import enhancements from "./helpSupportEnhancements.module.css";

type NeedHelpNowProps = {
  compact?: boolean;
  context?: string;
};

export default function NeedHelpNow({
  compact = false,
  context,
}: NeedHelpNowProps) {
  if (compact) {
    return (
      <aside className={styles.compactHelp} aria-label="Need help right now">
        <div>
          <strong>Need Help Right Now?</strong>
          <span>If you are in crisis or need immediate help, you are not alone.</span>
        </div>
        <Link href={crisisSupport.pageHref}>
          Get Help Now <span aria-hidden="true">→</span>
        </Link>
      </aside>
    );
  }

  return (
    <section className={styles.crisisSection} aria-labelledby="need-help-heading">
      {context ? <p className={styles.context}>{context}</p> : null}

      <h2 id="need-help-heading" className={styles.srOnly}>
        Immediate crisis support
      </h2>

      <p className={enhancements.crisisOpening}>{crisisSupport.opening}</p>

      <div className={styles.emergencyBanner}>
        <span className={styles.warningIcon} aria-hidden="true">!</span>
        <div>
          <p>If this is an emergency or there is immediate danger,</p>
          <a className={enhancements.emergencyCall} href={crisisSupport.emergency.callHref}>
            {crisisSupport.emergency.callLabel}
          </a>
          <p>or go to the nearest emergency room.</p>
        </div>
        <p className={styles.lifeMatters}>
          {crisisSupport.pastoralClosing.map((line) => (
            <span className={enhancements.lifeMattersLine} key={line}>
              {line}
            </span>
          ))}
        </p>
      </div>

      <div className={styles.crisisGrid}>
        <article className={styles.crisisCard}>
          <span className={styles.flag} aria-hidden="true">🇺🇸</span>
          <div>
            <h3>{crisisSupport.us.country}</h3>
            <p className={styles.crisisName}>{crisisSupport.us.name}</p>
            <p>{crisisSupport.us.availability}</p>
            <div className={styles.actionRow}>
              <a href={crisisSupport.us.callHref}>☎ Call 988</a>
              <a href={crisisSupport.us.textHref}>✉ Text 988</a>
              <a href={crisisSupport.us.chatHref} target="_blank" rel="noopener noreferrer">
                Chat Online ↗
              </a>
            </div>
          </div>
        </article>

        <article className={styles.crisisCard}>
          <span className={styles.flag} aria-hidden="true">🇨🇦</span>
          <div>
            <h3>{crisisSupport.canada.country}</h3>
            <p className={styles.crisisName}>{crisisSupport.canada.name}</p>
            <p>{crisisSupport.canada.availability}</p>
            <div className={styles.actionRow}>
              <a href={crisisSupport.canada.callHref}>☎ Call 9-8-8</a>
              <a href={crisisSupport.canada.textHref}>✉ Text 9-8-8</a>
              <a href={crisisSupport.canada.websiteHref} target="_blank" rel="noopener noreferrer">
                Visit 9-8-8 ↗
              </a>
            </div>
          </div>
        </article>
      </div>

      <p className={styles.international}>{crisisSupport.international}</p>
    </section>
  );
}
