import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";
import "./contact.css";

export const metadata = {
  title: "Contact the Ministry | Faith Changes Everything",
  description: "Questions, resource help, and ministry inquiries. We are glad you reached out to Faith Changes Everything.",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <Header />

      <section className="contact-hero" aria-labelledby="contact-title">
        <div className="contact-hero-inner">
          <p className="contact-hero-eyebrow">CONTACT</p>
          <h1 id="contact-title">Contact the Ministry</h1>
          <p className="contact-hero-subtitle">We&rsquo;re Glad You Reached Out</p>
          <p className="contact-hero-intro">
            Whether you have a question, need help finding a resource, or simply want to
            connect, Faith Changes Everything would love to hear from you.
          </p>
        </div>
      </section>

      <section className="contact-main" aria-label="Contact options">
        <div className="contact-left-column">
          <div className="contact-form-card">
            <div className="contact-gold-rule" aria-hidden="true" />
            <h2>Send Us a Message</h2>
            <p className="contact-form-intro">
              We&rsquo;d love to hear from you! Please use the form below to send us a
              message, ask a question, or let us know how we can help.
            </p>
            <ContactForm />
          </div>

          <section className="contact-privacy-card" aria-labelledby="contact-privacy-heading">
            <span className="contact-privacy-icon" aria-hidden="true">♢</span>
            <div>
              <h2 id="contact-privacy-heading">Your Privacy Matters</h2>
              <p>
                Contact form submissions go to our ministry email and are not saved in
                a separate website contact database. Email correspondence is processed
                by our delivery provider and kept in our Gmail inbox, where it can be
                replied to, archived, or deleted. Please avoid including sensitive
                personal information. Read our <Link href="/privacy">Privacy Policy</Link>.
              </p>
            </div>
          </section>
        </div>

        <aside className="contact-sidebar" aria-label="Additional ways we can help">
          <section className="contact-side-card">
            <div className="contact-side-image contact-side-image-prayer" role="img" aria-label="Hands clasped in prayer over an open Bible" />
            <div className="contact-side-body">
              <h2>Need Prayer?</h2>
              <p>If you or someone you love is in need of prayer, we would be honored to pray with you.</p>
              <Link href="/prayer" className="contact-side-button contact-side-button-navy">Go to Prayer Request <span aria-hidden="true">→</span></Link>
            </div>
          </section>

          <section className="contact-side-card">
            <div className="contact-side-image contact-side-image-help" role="img" aria-label="A welcoming shoreline sign reminding visitors they are not alone" />
            <div className="contact-side-body">
              <h2>Need Help Right Now?</h2>
              <p>If you&rsquo;re facing a crisis, struggling, or need immediate support, you&rsquo;re not alone. There is hope, and help is available.</p>
              <Link href="/help-support" className="contact-side-button contact-side-button-red">Get Help Now <span aria-hidden="true">→</span></Link>
            </div>
          </section>

          <section className="contact-side-card">
            <div className="contact-side-image contact-side-image-email" role="img" aria-label="A welcoming note on a desk" />
            <div className="contact-side-body">
              <h2>Prefer to Email Us Directly?</h2>
              <p>You&rsquo;re always welcome to reach out to us at our ministry email address.</p>
              <a className="contact-email-link" href="mailto:faithchangeseverythingministry@gmail.com">
                <span aria-hidden="true">✉</span> faithchangeseverythingministry@gmail.com
              </a>
            </div>
          </section>
        </aside>
      </section>

      <Footer />
    </main>
  );
}
