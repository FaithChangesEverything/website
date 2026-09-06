"use client";

import { useState } from "react";
import { markPrayerRequestPrayedFor } from "@/app/prayer/actions";

type PrayedForFormProps = {
  requestId: string;
};

export default function PrayedForForm({ requestId }: PrayedForFormProps) {
  const [confirming, setConfirming] = useState(false);

  if (!confirming) {
    return (
      <div>
        <button
          className="prayed-button"
          type="button"
          onClick={() => setConfirming(true)}
        >
          Prayed For — Permanently Delete
        </button>
        <p className="delete-warning">This action permanently deletes the request and cannot be undone.</p>
      </div>
    );
  }

  return (
    <div className="prayed-confirmation" role="group" aria-label="Confirm permanent deletion">
      <p className="prayed-confirmation-title">Mark this request as Prayed For?</p>
      <p className="prayed-confirmation-copy">
        This will permanently delete the prayer request and cannot be undone.
      </p>
      <div className="prayed-confirmation-actions">
        <button
          className="cancel-prayed-button"
          type="button"
          onClick={() => setConfirming(false)}
        >
          Cancel
        </button>
        <form action={markPrayerRequestPrayedFor}>
          <input type="hidden" name="request_id" value={requestId} />
          <button className="confirm-prayed-button" type="submit">
            Prayed For — Delete Request
          </button>
        </form>
      </div>
    </div>
  );
}
