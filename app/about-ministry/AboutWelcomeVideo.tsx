"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./about-ministry.module.css";

const streamEmbed = "https://customer-r3nvd2sbu94qp82j.cloudflarestream.com/df9bc76b1f8ec8a154d02bfbd48be588/iframe";

export default function AboutWelcomeVideo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.videoCard}>
        <div className={styles.portraitWrap}>
          <div className={styles.portrait}>
            <Image src="/images/about-ministry/pastor-richard.png" alt="Pastor Richard" fill sizes="(max-width: 760px) 190px, 235px" style={{ objectFit: "cover" }} />
          </div>
        </div>
        <div className={styles.videoDetails}>
          <h3>A Personal Welcome from Pastor Richard about the heart and purpose of this ministry</h3>
          {!open && (
            <button className={styles.videoButtonActive} type="button" onClick={() => setOpen(true)} aria-expanded={false} aria-controls="about-welcome-video">
              <span aria-hidden="true">▶ </span>Watch Welcome Video
            </button>
          )}
          {open && <p className={styles.videoIsOpen}>The welcome video is open below.</p>}
        </div>
      </div>
      {open && (
        <div id="about-welcome-video" className={styles.inlineVideo} aria-label="A Personal Welcome from Pastor Richard video">
          <div className={styles.inlineVideoFrame}>
            <iframe
              key="about-video"
              className={styles.streamFrame}
              src={streamEmbed}
              title="A Personal Welcome from Pastor Richard"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <button type="button" className={styles.inlineVideoClose} onClick={() => setOpen(false)}>Close Video</button>
        </div>
      )}
    </>
  );
}
