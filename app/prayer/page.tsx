import Link from "next/link";
import PrayerRequestForm from "./PrayerRequestForm";
import "./prayer.css";

const navItems = [
  ["Home", "/"], ["Journey to Hope", "/journey"], ["Music", "/music"], ["Sermons", "/sermons"],
  ["Prayer", "/prayer"], ["Resources", "/resources"], ["About", "/about"], ["Contact", "/contact"],
];

export const metadata = {
  title: "Prayer Request | Faith Changes Everything",
  description: "Share a prayer request with Faith Changes Everything.",
};

export default function PrayerPage() {
  return (
    <main className="prayer-page">
      <header className="prayer-header">
        <Link className="prayer-brand" href="/" aria-label="Faith Changes Everything home">
          <span>FAITH</span><small>CHANGES EVERYTHING</small>
        </Link>
        <nav aria-label="Primary navigation">
          {navItems.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
        </nav>
      </header>

      <section className="prayer-hero" aria-labelledby="prayer-title">
        <div className="prayer-hero-overlay" />
        <div className="prayer-hero-content">
          <p className="prayer-eyebrow">PRAYER REQUEST</p>
          <h1 id="prayer-title">We&apos;re Here to Pray With You</h1>
          <p>Whatever you&apos;re facing, you don&apos;t have to carry it alone. Share your prayer request with us, and we will faithfully lift you up in prayer.</p>
          <blockquote>&ldquo;The effectual fervent prayer of a righteous man availeth much.&rdquo;</blockquote>
          <p className="prayer-reference">James 5:16 (KJV)</p>
        </div>
      </section>

      <section className="prayer-content">
        <div className="prayer-form-card">
          <p className="section-eyebrow">SHARE YOUR REQUEST</p>
          <h2>Prayer Request</h2>
          <p>We would be honored to pray with you. You may share as much or as little as you feel comfortable sharing.</p>
          <PrayerRequestForm />
        </div>

        <aside className="prayer-sidebar">
          <section className="pastor-note">
            <p className="section-eyebrow">A NOTE FROM</p>
            <h2>Pastor Richard</h2>
            <p>Thank you for trusting Faith Changes Everything with your prayer request. I count it a privilege to pray for the people who reach out to this ministry.</p>
            <p>Your request will be kept only until it has been prayed over and will then be deleted from our system.</p>
          </section>

          <section className="help-now">
            <h2>Need Help Now?</h2>
            <p>This prayer form is not monitored as an emergency or crisis service.</p>
            <p>If you or someone you know is in immediate danger, call 911 or your local emergency services. In the United States, call or text 988 for suicide and crisis support.</p>
            <Link href="/need-help-now">Need Help Now →</Link>
          </section>

          <section className="contact-note">
            <h2>Need to Contact FCE?</h2>
            <p>For general ministry, website, or resource questions, please use our Contact page.</p>
            <Link href="/contact">Contact Faith Changes Everything →</Link>
          </section>
        </aside>
      </section>

      <section className="prayer-reassurance">
        <h2>You&apos;re Not Alone.</h2>
        <p>We believe in the power of prayer and the faithfulness of God. Prayer requests are treated with care and respect and are retained only until they have been prayed over.</p>
      </section>

      <footer className="prayer-footer">
        <strong>Faith Changes Everything</strong>
        <span>© {new Date().getFullYear()} Faith Changes Everything. All Rights Reserved.</span>
      </footer>
    </main>
  );
}
