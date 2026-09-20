"use client";

import { useState } from "react";

import styles from "../step-overview-sequence9.module.css";

export function PastorMessageVideo({
  title,
  embedUrl,
}: {
  title: string;
  embedUrl: string;
}) {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button
        className={styles.stepPastorVideoButton}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded="false"
      >
        ▶ Watch Pastor Richard&apos;s Message
      </button>
    );
  }

  return (
    <div className={styles.stepPastorPlayer}>
      <div className={styles.stepPastorVideoFrame}>
        <iframe
          src={`${embedUrl}?autoplay=true`}
          title={title}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
        />
      </div>
      <button
        className={styles.stepPastorCloseButton}
        type="button"
        onClick={() => setOpen(false)}
        aria-expanded="true"
      >
        Close Video
      </button>
    </div>
  );
}
