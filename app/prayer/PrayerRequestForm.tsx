"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitPrayerRequest, type PrayerFormState } from "./actions";

const initialState: PrayerFormState = { status: "idle", message: "" };

export default function PrayerRequestForm() {
  const [state, formAction, pending] = useActionState(submitPrayerRequest, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

  return (
    <form ref={formRef} action={formAction} className="prayer-form">
      <div>
        <label htmlFor="name">Name <span>(optional)</span></label>
        <input id="name" name="name" type="text" maxLength={100} autoComplete="name" />
      </div>

      <div>
        <label htmlFor="prayer_request">Prayer Request <span aria-hidden="true">*</span></label>
        <textarea id="prayer_request" name="prayer_request" required maxLength={10000} rows={9} />
      </div>

      <p className="prayer-form-caution">
        Please do not include highly sensitive personal information such as passwords, financial information, Social Security numbers, or medical records.
      </p>

      <label className="prayer-acknowledgment">
        <input name="acknowledgment" type="checkbox" required />
        <span>
          <strong>I understand and agree:</strong> This prayer request is provided for prayer and spiritual support and is not an emergency or crisis service or a substitute for medical, psychological, legal, or other professional care. Submitting a prayer request does not establish a professional counselor-client, medical, or legal relationship with Faith Changes Everything.
          <br /><br />
          Faith Changes Everything uses reasonable measures to protect prayer requests while they are temporarily stored, but no Internet-based system can guarantee absolute security. Your prayer request and any optional name you provide will be retained only until the request has been prayed over and will then be deleted from our system.
          <br /><br />
          Faith Changes Everything may take appropriate action or disclose information when required by law or when reasonably necessary to address an immediate threat to someone&apos;s safety.
        </span>
      </label>

      <button className="prayer-submit" type="submit" disabled={pending}>
        {pending ? "Submitting…" : "Submit Prayer Request"}
      </button>

      {state.message && (
        <p className={`prayer-form-message ${state.status}`} role="status" aria-live="polite">
          {state.message}
        </p>
      )}
    </form>
  );
}
