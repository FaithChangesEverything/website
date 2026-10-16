# Contact the Ministry — approved design implementation (Sequences 26–27)

**Status: DRAFT / NOT READY TO MERGE.** The approved visual reference is the original "Contact the Ministry" coastal harbor mockup reviewed with the ministry on October 13, 2026. The additional alternate generated concept is **not** the visual reference.

## Approved requirements

- Standard existing FCE sitewide Header and Footer (do not replace them with the illustrative navigation/footer in the mockup).
- Warm harbor-town hero with lighthouse in the distant background, matching the original mockup's quiet, welcoming tone.
- Main column: "Send Us a Message" and fields: optional name, required reply email, required reason, required free-form message.
- Contact reason menu: General Question; Prayer Request; I Need Help Right Now; Bible Studies or Ministry Resources; Website or Technical Issue; Something Else / Other Question.
- When prayer or urgent help is selected, show a prominent link to /prayer or /help-support; do not automatically redirect. Keep the message field available.
- Right column: the three approved illustrated cards for Prayer Request, Need Help Right Now, and direct email.
- Ministry email: faithchangeseverythingministry@gmail.com. Expose email on the dedicated contact page, not in the sitewide footer.
- No contact-form records, messages, or visitor data stored in Supabase; no new admin dashboard. Resend delivers to Gmail; the email provider and Gmail necessarily process/retain correspondence under their policies.
- Visible privacy notice and success/failure handling. Only report success after Resend accepts the outbound message. Sender must be a verified Resend address; use visitor address solely as reply-to.

## Required image upload before visual review

Image assets are provided separately in the "FCE_Contact_Ministry_Approved_Assets.zip" handoff. Copy its image files into the repository's **public/images/** directory with these exact filenames:

- contact-harbor-hero.jpg
- contact-harbor-footer.jpg
- contact-prayer.jpg
- contact-help-now.jpg
- contact-direct-email.jpg

These were derived from the approved original mockup. The hero's embedded typography was cleaned out so that the page can display real, responsive, accessible HTML text. The footer reuses the harbor imagery under the real existing Footer component. Check visual fidelity on phones, tablets and desktops. Do not use the alternate mockup's artwork.

## Environment / delivery setup

The feature **must not be merged until these settings are configured and the live delivery has been successfully tested**:

- RESEND_API_KEY — existing Resend credential.
- CONTACT_NOTIFICATION_FROM (or existing PRAYER_NOTIFICATION_FROM) — verified Resend sender; never use an unverified visitor email as from.
- NEXT_PUBLIC_TURNSTILE_SITE_KEY — public Cloudflare Turnstile widget site key.
- TURNSTILE_SECRET_KEY — Turnstile secret for server-side verification (fail closed).

The outgoing message destination is hardcoded to **faithchangeseverythingministry@gmail.com**. No CRM/Supabase integration is used. The Form is intentionally disabled when the public Turnstile key is absent; the action rejects any submission whose token cannot be verified. Users can still use direct email.


## Verified preview tests — October 13, 2026

Pastor Richard personally verified on the Vercel preview:

- Approved original harbor design, sidebar artwork, footer treatment, and form layout visually approved without changes.
- All five image assets available in `public/images/`; preview build READY.
- Cloudflare Turnstile Managed widget: visible Success state after correcting a site-key transcription error and redeploying; valid server-verified token required.
- Test email arrived at `faithchangeseverythingministry@gmail.com`; Gmail Reply populated the visitor-supplied email address.
- Prayer Request and I Need Help Right Now choices displayed the correct guidance and led to `/prayer` and `/help-support`, with no automatic redirect.
- Missing email, invalid email and missing message were rejected by browser validation.
- Two consecutive messages without refreshing (Something Else and Website or Technical Issue), including optional blank name, both arrived at Gmail after a Turnstile-token reset fix.
- Code inspection: form delivery calls Resend and contains no Supabase data write. This is static inspection, not an independent database audit.
- The Privacy Policy was updated on this feature branch to disclose Resend, Gmail, and Cloudflare Turnstile; the update is not yet in production.

## Remaining release gates

- Test on at least one mobile viewport and keyboard navigation; visually approved desktop layout should remain unchanged.
- Explicitly test invalid/expired Turnstile token and Resend failure handling; the code currently returns an error and does not claim delivery, but those failure paths have not been exercised end to end.
- Review/install production-side abuse rate limiting (Turnstile plus honeypot do not by themselves limit repeated legitimate/automated requests); confirm the correct production traffic path before adding an edge rule.
- Configure the Turnstile site and secret keys for Production before a production merge; they are currently Preview-only. Check permitted hostnames and verify a real production-domain test when launch is authorized.
- Review Resend/Gmail message retention and remove temporary test emails if no longer needed.
- Do not merge draft PR or mark Sequence 27 launch-ready until these checks are completed or explicitly resolved.

## Review and acceptance checks

- Verify original visual hierarchy, hero composition, right-column illustration crop, footer background, and standard header/footer; check responsive and accessibility (keyboard, contrast, focus states, reduced motion).
- Confirm /contact appears in the existing header, and the footer now reads "Contact the Ministry".
- Check each reason selection, including on-page link banners for prayer and immediate help; never automatically redirect.
- Check required email, select and message, optional name, validation limits, and empty/invalid submissions.
- In the US, urgent help directs to /help-support and shows 911/988 guidance. Never imply that the contact inbox handles emergencies.
- Test Turnstile human verification and failure. Review production rate limiting/bot protection at the edge (Turnstile does not substitute for rate limiting).
- Send a real test and verify the full message arrives at the correct Gmail account and "Reply" targets the actual visitor-provided address. No visitor message should reach GitHub logs, Supabase or public response payloads.
- Simulate Resend failure/missing credentials: no false "sent" confirmation.
- Confirm appropriate privacy-policy language and Gmail/Resend retention procedures.

**Do not check off Sequence 27 or deploy this feature to production before all of the above pass.**
