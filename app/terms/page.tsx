import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "../privacy/privacy.module.css";

export const metadata: Metadata = {
  title: "Terms of Use | Faith Changes Everything",
  description: "Terms governing use of the Faith Changes Everything website, ministry resources, Journey to Hope, prayer support, media, and third-party services.",
};

const sections = [
  ["ministry-purpose", "Ministry Purpose"],
  ["professional-emergency-services", "Not Professional or Emergency Services"],
  ["no-guaranteed-outcomes", "No Guaranteed Outcomes"],
  ["intellectual-property", "FCE Content and Intellectual Property"],
  ["downloads-use", "Resources Specifically Offered for Download or Use"],
  ["media-devotional", "Music, Audio, Video, and Devotional Content"],
  ["third-party", "Third-Party Content and Links"],
  ["church-finder", "Find a Church Home"],
  ["journey", "Journey to Hope"],
  ["prayer", "Prayer Requests"],
  ["acceptable-use", "Acceptable Use"],
  ["availability", "Website Availability and Changes"],
  ["accuracy", "Accuracy of Information"],
  ["disclaimers", "Disclaimers"],
  ["liability", "Limitation of Liability"],
  ["privacy", "Privacy"],
  ["future-services", "Future Purchases, Donations, and Services"],
  ["changes", "Changes to These Terms"],
  ["governing-law", "Governing Law"],
  ["severability", "Severability"],
  ["contact", "Contact"],
] as const;

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.hero} aria-labelledby="terms-title">
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>FAITH CHANGES EVERYTHING</p>
          <h1 id="terms-title">Terms of Use</h1>
          <p className={styles.heroLead}>
            These Terms explain the conditions for using the Faith Changes Everything website and its ministry content, resources, tools, and services.
          </p>
          <p className={styles.updated}>Last Updated: September 14, 2026</p>
        </div>
      </section>

      <div className={styles.content}>
        <section className={styles.introCard}>
          <p>
            Welcome to Faith Changes Everything ("FCE," "we," "us," or "our"). These Terms of Use apply to your use of faithchangeseverything.org and the ministry content, tools, resources, and services made available through the website. By using the FCE website, you agree to these Terms. If you do not agree with these Terms, please do not use the website.
          </p>
        </section>

        <nav className={styles.toc} aria-label="Terms of Use sections">
          <h2>On this page</h2>
          <div className={styles.tocGrid}>
            {sections.map(([id, label], index) => (
              <a key={id} href={`#${id}`}>{index + 1}. {label}</a>
            ))}
          </div>
        </nav>

        <div className={styles.policy}>
          <section id="ministry-purpose" className={styles.policySection}>
            <h2>1. Ministry Purpose</h2>
            <p>Faith Changes Everything is a Christian ministry website created to share biblical teaching, encouragement, discipleship resources, music, sermons, devotionals, Bible studies, Journey to Hope, prayer support, and other faith-based resources.</p>
            <p>FCE seeks to present material that is faithful to Scripture and centered on Jesus Christ. Website content is provided for ministry, educational, and informational purposes.</p>
          </section>

          <section id="professional-emergency-services" className={styles.policySection}>
            <h2>2. Not Professional or Emergency Services</h2>
            <p>FCE provides spiritual encouragement and ministry resources. FCE does not provide medical, psychiatric, psychological, legal, financial, or other licensed professional services.</p>
            <p>Information on the website should not be used as a substitute for appropriate professional evaluation, diagnosis, treatment, advice, or care.</p>
            <p>FCE is not an emergency or crisis-response service. If you or another person is in immediate danger, experiencing a medical emergency, or may be at risk of self-harm or harm to others, contact local emergency services or an appropriate crisis service immediately.</p>
            <p>Prayer requests, ministry communications, or other interactions with FCE do not create a doctor-patient, therapist-client, attorney-client, professional counseling, or similar professional relationship.</p>
            <p>FCE also cannot independently verify every counselor, provider, organization, or professional made available through third-party directories or resources.</p>
          </section>

          <section id="no-guaranteed-outcomes" className={styles.policySection}>
            <h2>3. No Guaranteed Outcomes</h2>
            <p>FCE seeks to provide biblical truth, encouragement, prayer, and practical ministry resources.</p>
            <p>FCE does not promise or guarantee particular spiritual, emotional, medical, financial, relational, or other earthly outcomes from using the website, following its resources, submitting a prayer request, or participating in Journey to Hope.</p>
            <p>Faithfulness to biblical teaching does not mean that a particular circumstance will resolve in the way or timing a visitor desires.</p>
          </section>

          <section id="intellectual-property" className={styles.policySection}>
            <h2>4. FCE Content and Intellectual Property</h2>
            <p>Unless otherwise stated, original FCE website content is owned by or licensed to Faith Changes Everything and is protected by applicable copyright and other intellectual-property laws.</p>
            <p>This may include written teaching, devotionals, Bible studies, sermons, music, audio recordings, video, graphics, photographs, downloadable materials, website design, Journey to Hope content, and other original resources.</p>
            <p>Making content available to view or stream on the FCE website does <strong>not</strong> automatically grant permission to download, reproduce, republish, distribute, modify, sell, license, or commercially exploit that content.</p>
          </section>

          <section id="downloads-use" className={styles.policySection}>
            <h2>5. Resources Specifically Offered for Download or Use</h2>
            <p>Some FCE resources may expressly be made available for download, printing, personal use, church use, educational use, or other identified purposes. When FCE grants such permission, the permission shown with that particular resource governs its use.</p>
            <p>Unless the resource specifically states otherwise, permission to download or use an FCE resource does not include permission to sell or commercially redistribute it; claim it as your own work; remove FCE authorship, copyright, attribution, or identifying information; materially alter it and represent the altered version as official FCE material; or use it in a misleading, unlawful, or harmful manner.</p>
            <p>FCE may provide different permissions for different resources.</p>
          </section>

          <section id="media-devotional" className={styles.policySection}>
            <h2>6. Music, Audio, Video, and Devotional Content</h2>
            <p>Music, audio, video, and other media made available for streaming through FCE are for listening or viewing through the methods FCE provides unless download permission is expressly given.</p>
            <p>The ability to technically access, cache, or copy a media file does not constitute permission to download, reproduce, redistribute, upload elsewhere, sell, or commercially use it.</p>
            <p>The <strong>Walking with Christ</strong> devotional and other written works may be made available for reading on the website without being offered as downloadable or freely reproducible works.</p>
            <p>Future books, applications, premium resources, or other products may be subject to additional purchase or license terms when they are introduced.</p>
          </section>

          <section id="third-party" className={styles.policySection}>
            <h2>7. Third-Party Content and Links</h2>
            <p>The FCE website may link to churches, ministries, crisis resources, professional organizations, streaming services, retailers, websites, or other third-party services.</p>
            <p>FCE may select or recommend certain third-party organizations or resources because we believe they may be helpful. However, inclusion does not mean FCE endorses every statement, teaching, provider, product, service, policy, or practice of that organization, and FCE cannot independently verify every individual provider or resource made available through a third party.</p>
            <p>FCE does not control third-party websites and cannot guarantee their availability, accuracy, security, privacy practices, content, or continued suitability.</p>
            <p>Visitors should use appropriate judgment when leaving the FCE website and should review the applicable terms and privacy policies of outside services.</p>
          </section>

          <section id="church-finder" className={styles.policySection}>
            <h2>8. Find a Church Home</h2>
            <p>The Find a Church Home feature is intended to help visitors locate churches geographically.</p>
            <p>Search results are provided through third-party mapping and location services. Appearance in search results does not mean that FCE has reviewed, approved, endorsed, certified, or established a ministry relationship with that church.</p>
            <p>Visitors are encouraged to evaluate any church carefully according to Scripture and the biblical principles provided in FCE&apos;s church-finding resources.</p>
          </section>

          <section id="journey" className={styles.policySection}>
            <h2>9. Journey to Hope</h2>
            <p>Journey to Hope is a voluntary ministry and discipleship resource.</p>
            <p>Visitors may use Journey to Hope without saving progress. Visitors who choose to save progress may use an anonymous Journey ID and passcode as described in the FCE Privacy Policy.</p>
            <p>Journey progress indicators, completion marks, milestones, or similar features are provided only to help a visitor navigate and remember progress. They are not measurements or certifications of a person&apos;s salvation, spiritual maturity, relationship with God, mental health, or personal worth.</p>
            <p>Visitors may permanently delete their saved Journey through the tools provided on the website.</p>
          </section>

          <section id="prayer" className={styles.policySection}>
            <h2>10. Prayer Requests</h2>
            <p>Prayer requests are provided as a ministry service for prayer and spiritual support.</p>
            <p>Submitting a prayer request does not create a professional counseling, medical, legal, pastoral-care contract, or other professional relationship with FCE.</p>
            <p>FCE cannot guarantee that a request will receive an immediate response, that a particular person will respond, or that a requested outcome will occur.</p>
            <p>Visitors should not use the prayer-request system for emergencies or situations requiring immediate professional intervention.</p>
            <p>Prayer-request information is handled according to the FCE Privacy Policy.</p>
          </section>

          <section id="acceptable-use" className={styles.policySection}>
            <h2>11. Acceptable Use</h2>
            <p>You agree not to misuse the FCE website or its services.</p>
            <p>You may not knowingly interfere with or attempt to disrupt the website or its security; attempt to gain unauthorized access to administrative systems, databases, Journey records, or another visitor&apos;s saved Journey; use automated methods to scrape, copy, harvest, or reproduce substantial portions of FCE content without permission; upload, transmit, or submit malicious software or harmful code; impersonate another person or falsely represent your relationship with FCE; use FCE content or systems for unlawful, fraudulent, abusive, threatening, or exploitative purposes; or use the website in a manner that infringes the rights of FCE or another person.</p>
            <p>FCE may take reasonable technical or administrative action to protect the website, visitors, ministry resources, and systems from misuse or security threats.</p>
          </section>

          <section id="availability" className={styles.policySection}>
            <h2>12. Website Availability and Changes</h2>
            <p>FCE seeks to keep the website accurate, available, and useful, but uninterrupted access cannot be guaranteed.</p>
            <p>Features, resources, links, content, or services may occasionally be corrected, updated, replaced, suspended, or discontinued.</p>
            <p>FCE may revise website content when errors are discovered, ministry resources are updated, technology changes, or additional review indicates that a correction is appropriate.</p>
          </section>

          <section id="accuracy" className={styles.policySection}>
            <h2>13. Accuracy of Information</h2>
            <p>FCE seeks to review ministry and biblical content carefully, but the website may occasionally contain typographical errors, broken links, technical errors, outdated third-party information, or other inaccuracies.</p>
            <p>If you believe FCE has published an error, you are encouraged to contact the ministry so it can be reviewed and corrected when appropriate.</p>
          </section>

          <section id="disclaimers" className={styles.policySection}>
            <h2>14. Disclaimers</h2>
            <p>The FCE website and its content are provided on an &quot;as available&quot; basis.</p>
            <p>To the extent permitted by applicable law, FCE does not guarantee that the website will always be uninterrupted, error-free, secure, or free from technical problems.</p>
            <p>Nothing in these Terms limits responsibilities that cannot lawfully be excluded.</p>
          </section>

          <section id="liability" className={styles.policySection}>
            <h2>15. Limitation of Liability</h2>
            <p>To the extent permitted by applicable law, Faith Changes Everything will not be responsible for indirect, incidental, special, consequential, or similar damages resulting from use of, inability to use, or reliance upon the website, its resources, external links, or third-party services.</p>
            <p>This provision is not intended to exclude liability that applicable law does not permit FCE to exclude.</p>
          </section>

          <section id="privacy" className={styles.policySection}>
            <h2>16. Privacy</h2>
            <p>Use of the FCE website is also governed by the <Link href="/privacy"><strong>Faith Changes Everything Privacy Policy</strong></Link>, which explains how information may be processed, stored, protected, and deleted.</p>
            <p>Where a particular feature involves additional information practices, FCE intends to update the Privacy Policy before or when that feature is activated.</p>
          </section>

          <section id="future-services" className={styles.policySection}>
            <h2>17. Future Purchases, Donations, and Services</h2>
            <p>FCE may in the future offer donations, merchandise, books, downloadable products, applications, paid resources, or other services.</p>
            <p>These features are not governed by purchase or payment terms until they are actually made available.</p>
            <p>Before introducing a feature that requires additional terms, payments, personal information, or third-party processing, FCE may update these Terms, the Privacy Policy, or provide additional terms applicable to that particular feature.</p>
          </section>

          <section id="changes" className={styles.policySection}>
            <h2>18. Changes to These Terms</h2>
            <p>FCE may revise these Terms as the ministry, website, resources, technology, or legal requirements change.</p>
            <p>When these Terms are materially updated, the <strong>Last Updated</strong> date will be revised. Additional notice may be provided when appropriate.</p>
            <p>Continued use of the website after revised Terms become effective constitutes acceptance of the revised Terms to the extent permitted by applicable law.</p>
          </section>

          <section id="governing-law" className={styles.policySection}>
            <h2>19. Governing Law</h2>
            <p>These Terms are governed by the laws of the State of Illinois, without regard to conflict-of-law principles, except where applicable law requires otherwise.</p>
          </section>

          <section id="severability" className={styles.policySection}>
            <h2>20. Severability</h2>
            <p>If any provision of these Terms is determined to be invalid or unenforceable, the remaining provisions will continue in effect to the extent permitted by law.</p>
          </section>

          <section id="contact" className={styles.policySection}>
            <h2>21. Contact</h2>
            <p>Questions concerning these Terms of Use may be directed to:</p>
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
