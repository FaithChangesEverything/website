import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Faith Changes Everything",
  description: "How Faith Changes Everything handles visitor privacy, Journey to Hope progress, prayer requests, analytics, and third-party services.",
};

const sections = [
  ["privacy-approach", "Our Privacy Approach"],
  ["journey-to-hope", "Journey to Hope"],
  ["prayer-requests", "Prayer Requests"],
  ["communications", "Communications With FCE"],
  ["analytics", "Website Analytics"],
  ["church-finder", "Find a Church Home and Google Maps"],
  ["media", "Video and Media"],
  ["service-providers", "Website Hosting, Security, and Service Providers"],
  ["cookies", "Cookies and Similar Technologies"],
  ["children", "Children"],
  ["security", "Security"],
  ["retention", "Data Retention"],
  ["choices", "Your Choices and Privacy Requests"],
  ["sale-advertising", "No Sale or Advertising Use"],
  ["changes", "Changes to This Privacy Policy"],
  ["contact", "Contact"],
] as const;

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.hero} aria-labelledby="privacy-title">
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>FAITH CHANGES EVERYTHING</p>
          <h1 id="privacy-title">Privacy Policy</h1>
          <p className={styles.heroLead}>
            We believe privacy is part of treating people with care and respect. Our goal is to collect as little personal information as reasonably possible while providing a useful, secure, and trustworthy ministry website.
          </p>
          <p className={styles.updated}>Last Updated: September 14, 2026</p>
        </div>
      </section>

      <div className={styles.content}>
        <section className={styles.introCard}>
          <p>
            Faith Changes Everything ("FCE," "we," "us," or "our") operates faithchangeseverything.org. This Privacy Policy explains what information may be processed when you use the FCE website, why it is used, how it is protected, and the choices available to you.
          </p>
        </section>

        <nav className={styles.toc} aria-label="Privacy Policy sections">
          <h2>On this page</h2>
          <div className={styles.tocGrid}>
            {sections.map(([id, label], index) => (
              <a key={id} href={`#${id}`}>{index + 1}. {label}</a>
            ))}
          </div>
        </nav>

        <div className={styles.policy}>
          <section id="privacy-approach" className={styles.policySection}>
            <h2>1. Our Privacy Approach</h2>
            <p>You do not need to create a personal account, provide your name, provide an email address, or give us other identifying information simply to browse the FCE website or use Journey to Hope.</p>
            <p>FCE does not build advertising profiles about visitors, does not use visitor information for targeted advertising, and does not sell personal information.</p>
            <p>Limited information may be processed when you voluntarily communicate with FCE, submit a prayer request, choose to save Journey to Hope progress, use certain third-party website features, or when technical information is processed as necessary to operate, secure, and understand the use of the website.</p>
          </section>

          <section id="journey-to-hope" className={styles.policySection}>
            <h2>2. Journey to Hope</h2>
            <p>Journey to Hope may be used without saving progress.</p>
            <p>Visitors who choose to save their progress are provided a Journey ID and use a four-digit passcode. A Journey ID is not an FCE membership account, ministry account, or traditional user account. FCE does not require a name, email address, telephone number, or other identifying information in connection with a Journey ID.</p>
            <p>FCE stores a protected representation of the Journey ID and passcode together with the progress associated with that Journey. The raw Journey ID and passcode are not stored in readable form in the FCE database.</p>
            <p>A session cookie is used so the website can recognize an active saved Journey. If a visitor chooses to remember the Journey on the device, that session may remain available for up to approximately 30 days of inactivity. Visitors may also exit the Journey, which ends the active session while preserving the Journey ID and progress so that the Journey may be resumed later.</p>
            <p>Visitors may permanently delete their saved Journey through the <strong>Permanently Delete My Journey</strong> feature. Permanent deletion requires confirmation and the Journey passcode. When deletion is completed, the Journey record, saved progress, earned Journey milestones, and associated Journey sessions are removed and cannot be restored through Journey to Hope.</p>
            <p>FCE does not send Journey IDs to its website analytics provider and does not use Journey IDs to create visitor profiles or track individual browsing activity.</p>
          </section>

          <section id="prayer-requests" className={styles.policySection}>
            <h2>3. Prayer Requests</h2>
            <p>Visitors may choose to submit a prayer request. A name may be provided but is optional. The prayer-request text itself is required.</p>
            <p>Because visitors decide what to include in a prayer request, the request may contain personal or sensitive information. We ask visitors not to submit highly sensitive information such as passwords, financial account information, Social Security numbers, or medical records.</p>
            <p>Prayer requests are temporarily stored securely so they can be prayed over by the authorized FCE administrator. They are not used for marketing, mailing lists, advertising, or visitor profiling.</p>
            <p>Prayer requests and any optional name provided with them are normally deleted after the request has been prayed over. Information may be retained longer when reasonably necessary because of an immediate safety concern, legal obligation, or other exceptional circumstance requiring continued retention.</p>
            <p>FCE may take appropriate action or disclose information when required by law or when reasonably necessary to address an immediate threat to someone&apos;s safety.</p>
          </section>

          <section id="communications" className={styles.policySection}>
            <h2>4. Communications With FCE</h2>
            <p>If you voluntarily contact FCE by email or through a website communication feature that FCE makes available, we may receive the information you choose to provide, such as your email address, name, message, and any information contained in your communication.</p>
            <p>Ordinary correspondence is generally retained only as long as reasonably necessary to respond to or resolve the matter. Communications may be retained longer when reasonably necessary for an ongoing ministry matter, safety concern, legal obligation, recordkeeping need, or similar legitimate purpose.</p>
            <p>FCE does not currently operate a general visitor mailing list or weekly encouragement email program and does not collect visitor email addresses for those purposes.</p>
          </section>

          <section id="analytics" className={styles.policySection}>
            <h2>5. Website Analytics</h2>
            <p>FCE has selected <strong>Cloudflare Web Analytics</strong> for launch to understand whether the website and its resources are being used. As of the Last Updated date above, that analytics service has not yet been enabled.</p>
            <p>When enabled, the purpose of analytics will be to understand overall website usage, such as page views, visits, traffic patterns, referral sources, and website performance. FCE will use this information to evaluate whether the ministry is reaching and serving visitors and to improve the website.</p>
            <p>FCE will not use website analytics to identify individual visitors, build advertising profiles, or connect website activity to Journey IDs.</p>
            <p>Cloudflare Web Analytics is designed as a privacy-focused, cookie-free analytics service and states that it does not collect or use visitors&apos; personal data.</p>
            <p className={styles.notice}><strong>Standing FCE rule:</strong> before enabling or materially changing an analytics service, FCE will review this Privacy Policy and update it when necessary.</p>
          </section>

          <section id="church-finder" className={styles.policySection}>
            <h2>6. Find a Church Home and Google Maps</h2>
            <p>The Find a Church Home feature allows visitors to enter a ZIP code, city, or address to locate nearby churches.</p>
            <p>FCE does not intentionally store the location entered into this feature. The search location is not added to a Journey ID, stored as Journey progress, placed in the website URL as an FCE visitor record, or sent to FCE&apos;s website analytics as an identifying profile.</p>
            <p>The search uses Google Maps Platform services. Information necessary to perform the search is therefore processed by Google. Google may receive technical information associated with Maps requests, including an IP address and other request information, according to Google&apos;s own privacy practices and Google Maps Platform terms.</p>
            <p>Church results are geographic search results and should not be understood as an endorsement by FCE.</p>
          </section>

          <section id="media" className={styles.policySection}>
            <h2>7. Video and Media</h2>
            <p>FCE may use <strong>Cloudflare Stream</strong> to deliver video content directly through the website. Cloudflare may process technical information necessary to transmit and operate video services.</p>
            <p>FCE may also provide links to external services such as YouTube, Spotify, Apple Music, Amazon Music, and other third-party websites. If you choose to visit an external service, that service&apos;s own privacy policy and terms apply. FCE does not control the privacy practices of third-party websites.</p>
          </section>

          <section id="service-providers" className={styles.policySection}>
            <h2>8. Website Hosting, Security, and Service Providers</h2>
            <p>FCE uses third-party service providers to operate and protect the website. These currently include Vercel for website hosting and delivery, Cloudflare for website infrastructure and security, Supabase for protected database functionality, and Google Maps Platform for church-location searches. Cloudflare Web Analytics and Cloudflare Stream are described separately above and apply when those services are enabled.</p>
            <p>These providers may process limited technical information necessary to provide their services, such as IP addresses, browser or device information, request logs, security information, and performance information.</p>
            <p>FCE seeks to configure these services using privacy-conscious and secure settings and limits the information provided to third parties to what is reasonably necessary for the service being used.</p>
          </section>

          <section id="cookies" className={styles.policySection}>
            <h2>9. Cookies and Similar Technologies</h2>
            <p>FCE does not use advertising cookies.</p>
            <p>Journey to Hope uses necessary session cookies when a visitor chooses to save or access Journey progress. These cookies enable the website to maintain an active Journey session and, when requested by the visitor, remember the Journey on that device.</p>
            <p>Cloudflare Web Analytics is designed to operate without analytics cookies when enabled.</p>
            <p>Other essential infrastructure providers may use technical mechanisms necessary to deliver, secure, or operate their services.</p>
          </section>

          <section id="children" className={styles.policySection}>
            <h2>10. Children</h2>
            <p>The FCE website is a general Christian ministry website and is not specifically directed toward children under the age of 13.</p>
            <p>FCE does not knowingly solicit personal information from children under 13. Because most FCE content can be used without providing identifying information, children may view publicly available ministry content without creating an FCE account.</p>
            <p>If FCE learns that personal information from a child under 13 has been submitted in a manner that should not have occurred, we may delete that information as appropriate.</p>
          </section>

          <section id="security" className={styles.policySection}>
            <h2>11. Security</h2>
            <p>FCE uses reasonable administrative and technical measures intended to protect information handled through the website. These include measures such as restricted database access, protected server-side operations, secure connections, limited administrative access, and privacy-conscious system design.</p>
            <p>However, no Internet-based service, computer system, or method of electronic storage can guarantee absolute security.</p>
            <p>Visitors should avoid submitting information that is unnecessary for the ministry service they are using.</p>
          </section>

          <section id="retention" className={styles.policySection}>
            <h2>12. Data Retention</h2>
            <p>FCE&apos;s general policy is to retain information only as long as reasonably necessary for the purpose for which it was received.</p>
            <p>Journey information remains available until the visitor permanently deletes the Journey or FCE is otherwise required to remove it. Prayer requests are normally deleted after they have been prayed over. Ordinary communications are normally removed after the matter has been resolved unless there is a legitimate reason to retain them.</p>
            <p>Limited technical, security, backup, aggregate, or system-operational records may remain for reasonable periods when necessary to maintain website security, integrity, reliability, or legal compliance.</p>
            <p>Aggregate information that does not identify an individual may be retained for ministry planning and statistical purposes.</p>
          </section>

          <section id="choices" className={styles.policySection}>
            <h2>13. Your Choices and Privacy Requests</h2>
            <p>Visitors may browse most of the FCE website without providing identifying information.</p>
            <p>Visitors who save Journey to Hope progress may permanently delete their Journey through the Journey management controls.</p>
            <p>If you have a question about privacy, believe FCE has information concerning you that should be corrected or deleted, or need assistance with a privacy request, you may contact FCE using the email address below.</p>
            <p>Because FCE intentionally avoids collecting identifying information in many areas of the website, there may be situations in which FCE cannot identify or locate information as belonging to a particular visitor.</p>
            <div className={styles.contactBox}>
              <p><strong>Faith Changes Everything</strong></p>
              <p><a href="mailto:faithchangeseverythingministry@gmail.com">faithchangeseverythingministry@gmail.com</a></p>
            </div>
          </section>

          <section id="sale-advertising" className={styles.policySection}>
            <h2>14. No Sale or Advertising Use of Personal Information</h2>
            <p>FCE does not sell visitors&apos; personal information.</p>
            <p>FCE does not use personal information for targeted advertising and does not provide visitor information to advertisers so they can build profiles about FCE visitors.</p>
          </section>

          <section id="changes" className={styles.policySection}>
            <h2>15. Changes to This Privacy Policy</h2>
            <p>FCE may update this Privacy Policy as the ministry, website, technology, or legal requirements change.</p>
            <p>When the policy is materially changed, the <strong>Last Updated</strong> date will be revised. When appropriate, additional notice may be provided on the website.</p>
            <p>Before FCE activates a new feature that materially changes how visitor information is collected, used, stored, or disclosed, FCE intends to review and update this Privacy Policy as appropriate.</p>
            <p>This includes future services such as online donations, payment processing, merchandise purchases, new communication systems, additional analytics tools, mobile applications, or other features that may involve additional information.</p>
          </section>

          <section id="contact" className={styles.policySection}>
            <h2>16. Contact</h2>
            <p>Questions regarding this Privacy Policy may be directed to:</p>
            <div className={styles.contactBox}>
              <p><strong>Faith Changes Everything</strong></p>
              <p><a href="mailto:faithchangeseverythingministry@gmail.com">faithchangeseverythingministry@gmail.com</a></p>
            </div>
          </section>
        </div>

        <div className={styles.backRow}>
          <Link href="/">← Back to Faith Changes Everything</Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
