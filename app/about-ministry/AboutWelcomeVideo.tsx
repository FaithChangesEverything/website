"use client";

import { useRef, useState } from "react";
import styles from "./about-ministry.module.css";

const streamEmbed = "https://customer-r3nvd2sbu94qp82j.cloudflarestream.com/df9bc76b1f8ec8a154d02bfbd48be588/iframe";

export default function AboutWelcomeVideo() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [playing, setPlaying] = useState(false);

  function openVideo() {
    setPlaying(true);
    dialogRef.current?.showModal();
  }

  function closeVideo() {
    dialogRef.current?.close();
    setPlaying(false);
  }

  return (
    <>
      <button className={styles.videoButtonActive} type="button" onClick={openVideo}>
        <span aria-hidden="true">▶ </span>Watch Welcome Video
      </button>
      <dialog
        className={styles.videoDialog}
        ref={dialogRef}
        aria-label="A Personal Welcome from Pastor Richard — video"
        onClose={() => setPlaying(false)}
        onClick={(event) => { if (event.target === dialogRef.current) closeVideo(); }}
      >
        <div className={styles.videoDialogInner}>
          <button type="button" className={styles.videoClose} onClick={closeVideo} aria-label="Close video">✕</button>
          {playing && (
            <iframe
              className={styles.streamFrame}
              src={streamEmbed}
              title="A Personal Welcome from Pastor Richard"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          )}
        </div>
      </dialog>
    </>
  );
}
