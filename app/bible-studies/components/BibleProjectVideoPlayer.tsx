"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "../lesson-page.module.css";

type BibleProjectVideoPlayerProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  streamSrc: string;
  endPosterSrc?: string;
  endPosterAlt?: string;
};

type PlayerMode = "idle" | "playing" | "poster" | "returning";

export default function BibleProjectVideoPlayer({
  title,
  imageSrc,
  imageAlt,
  streamSrc,
  endPosterSrc,
  endPosterAlt = "BibleProject study poster",
}: BibleProjectVideoPlayerProps) {
  const [mode, setMode] = useState<PlayerMode>("idle");
  const timers = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timers.current.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  const handleEnded = () => {
    if (!endPosterSrc) {
      setMode("idle");
      return;
    }

    setMode("poster");

    const fadeTimer = window.setTimeout(() => {
      setMode("returning");

      const resetTimer = window.setTimeout(() => {
        setMode("idle");
      }, 700);

      timers.current.push(resetTimer);
    }, 2800);

    timers.current.push(fadeTimer);
  };

  if (mode === "playing") {
    return (
      <div className={styles.videoPanel}>
        <video
          className={styles.inlineVideo}
          src={streamSrc}
          controls
          autoPlay
          playsInline
          onEnded={handleEnded}
          aria-label={title}
        >
          Your browser does not support embedded video playback.
        </video>
      </div>
    );
  }

  if ((mode === "poster" || mode === "returning") && endPosterSrc) {
    return (
      <div className={styles.videoPanel}>
        <img
          src={endPosterSrc}
          alt={endPosterAlt}
          className={`${styles.endPoster} ${mode === "returning" ? styles.endPosterFade : ""}`}
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className={`${styles.videoPanel} ${styles.videoLaunch}`}
      onClick={() => setMode("playing")}
      aria-label={`Play ${title}`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 760px) 100vw, 900px"
        className={styles.videoBackdrop}
      />
      <span className={styles.videoOverlay} aria-hidden="true" />
      <span className={styles.videoAction}>
        <span className={styles.playIcon} aria-hidden="true">▶</span>
        <strong>Watch Teaching Video</strong>
        <span>Play the BibleProject teaching here on Faith Changes Everything.</span>
      </span>
    </button>
  );
}
