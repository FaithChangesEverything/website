"use client";

import { useActionState, useRef, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { submitContactMessage, type ContactFormState } from "./actions";

const initialState: ContactFormState = { status: "idle", message: "" };
const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function ContactForm() {
  const [reason, setReason] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // Handle successful submissions inside the form action rather than updating
  // React state from an effect. Keep Turnstile single-use tokens refreshed on
  // *every* response so a visitor can send again or retry without reloading.
  const [state, formAction, pending] = useActionState(
    async (previousState: ContactFormState, formData: FormData) => {
      const result = await submitContactMessage(previousState, formData);

      const turnstile = (window as Window & {
        turnstile?: { reset: () => void };
      }).turnstile;
      turnstile?.reset();

      if (result.status === "success") {
        formRef.current?.reset();
        setReason("");
      }
      return result;
    },
    initialState,
  );

  return (
    <>
      {siteKey ? (
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      ) : null}
      <form className="contact-form" action={formAction} ref={formRef}>
        <div className="contact-field">
          <label htmlFor="contact-name">Name <span>(optional)</span></label>
          <input id="contact-name" name="name" type="text" maxLength={100} autoComplete="name" placeholder="Your name" />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-email">Email Address <span>(required)</span></label>
          <input id="contact-email" name="email" type="email" required maxLength={180} autoComplete="email" placeholder="you@example.com" />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-reason">Reason for Contact <span>(required)</span></label>
          <select id="contact-reason" name="reason" required value={reason} onChange={(event) => setReason(event.target.value)}>
            <option value="">Please select an option</option>
            <option value="general">General Question</option>
            <option value="prayer">Prayer Request</option>
            <option value="help">I Need Help Right Now</option>
            <option value="resources">Bible Studies or Ministry Resources</option>
            <option value="technical">Website or Technical Issue</option>
            <option value="other">Something Else / Other Question</option>
          </select>
          <p className="contact-field-tip">
            This helps us direct your message, but you&rsquo;re always welcome to ask
            anything in your own words.
          </p>
        </div>

        {reason === "prayer" && (
          <div className="contact-guidance" role="status">
            <strong>We&rsquo;re here to pray with you.</strong>
            <p>Our dedicated Prayer Request page is the best place to share your prayer need.</p>
            <Link href="/prayer">Go to Prayer Request →</Link>
          </div>
        )}

        {reason === "help" && (
          <div className="contact-guidance contact-guidance-urgent" role="status">
            <strong>Help is available right now.</strong>
            <p>
              This contact form is not monitored for emergencies. If you are in immediate danger,
              call 911 or your local emergency number. In the United States, call or text 988
              for suicide and mental health crisis support.
            </p>
            <Link href="/help-support">View Need Help Now Resources →</Link>
          </div>
        )}

        <div className="contact-field">
          <label htmlFor="contact-message">Message <span>(required)</span></label>
          <textarea id="contact-message" name="message" rows={6} required maxLength={5000} placeholder="How can we help? Please share your message here…" />
        </div>

        <div className="contact-honeypot" aria-hidden="true">
          <label htmlFor="contact-website">Leave this field blank</label>
          <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        {siteKey ? (
          <div className="contact-turnstile">
            <div className="cf-turnstile" data-sitekey={siteKey} data-theme="light" />
          </div>
        ) : (
          <p className="contact-setup-notice">
            Online message delivery is being configured. In the meantime, please use
            the direct ministry email address on this page.
          </p>
        )}

        <button className="contact-send-button" type="submit" disabled={pending || !siteKey}>
          {pending ? "Sending…" : "Send Message"} <span aria-hidden="true">→</span>
        </button>

        {state.message ? (
          <p className={"contact-form-feedback " + state.status} role="status" aria-live="polite">{state.message}</p>
        ) : null}
      </form>
    </>
  );
}
