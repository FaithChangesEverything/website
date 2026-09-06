import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
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
          <Image
            src="/images/fce-main-logo.png"
            alt="Faith Changes Everything"
            width={320}
            height={190}
            priority
          />
        </Link>
        <nav aria-label="Primary navigation">
          {navItems.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
        </nav>
      </header>

      <section className="prayer-hero" aria-labelledby="prayer-title">
        <div className="prayer-hero-overlay" />
        <div className="prayer-hero-content">
          <p className="prayer-eyebrow">PRAYER REQUEST</p>
          <h1 id="prayer-title">Prayer Request</h1>
          <h2>You are not alone.</h2>
          <p>No matter what you&apos;re facing, you can bring it to God in prayer. Share your prayer request below, and Faith Changes Everything will faithfully lift you up in prayer.</p>
          <blockquote>&ldquo;The effectual fervent prayer of a righteous man availeth much.&rdquo;</blockquote>
          <p className="prayer-reference">James 5:16 (KJV)</p>
        </div>
      </section>

      <section className="prayer-content-wrap">
        <section className="prayer-content">
          <div>
            <div className="prayer-form-card">
              <p className="section-eyebrow">SHARE YOUR REQUEST</p>
              <h2>Share Your Prayer Request</h2>
              <p>Tell us what&apos;s on your heart. You may include your name if you would like, but it is completely optional.</p>
              <PrayerRequestForm />
            </div>

            <section className="after-submit-card">
              <div className="concept-icon" aria-hidden="true">➤</div>
              <div>
                <h2>After You Submit</h2>
                <p>You will see a confirmation message letting you know your request was received. Then you can move forward knowing that your prayer request is waiting in the protected FCE administration area to be prayed over.</p>
              </div>
            </section>
          </div>

          <aside className="prayer-sidebar">
            <section className="pastor-note concept-blue-card">
              <div className="concept-icon" aria-hidden="true">🙏</div>
              <h2>We Will Pray for You</h2>
              <p>Thank you for trusting Faith Changes Everything with your prayer request. I count it a privilege to pray for the people who reach out to this ministry.</p>
              <p>Your request will be kept only until it has been prayed over and will then be deleted from our system.</p>
            </section>

            <section className="help-now">
              <div className="concept-icon danger" aria-hidden="true">✚</div>
              <h2>Need Help Now?</h2>
              <p>This prayer form is not monitored as an emergency or crisis service.</p>
              <p>If you or someone you know is in immediate danger, call 911 or your local emergency services. In the United States, call or text 988 for suicide and crisis support.</p>
              <Link href="/need-help-now">Get Help Now →</Link>
            </section>

            <section className="you-matter concept-blue-card">
              <div className="concept-icon" aria-hidden="true">♥</div>
              <h2>You Matter</h2>
              <p>Whatever you&apos;re going through, God cares about you, and so do we. Thank you for trusting Faith Changes Everything with your prayer request.</p>
            </section>
          </aside>
        </section>
      </section>

      <Footer />
    </main>
  );
}
