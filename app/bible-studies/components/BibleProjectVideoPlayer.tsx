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

type PlayerMode = "idle" | "playing" | "poster" | "poster-fade" | "image-return";

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

  const returnToLessonImage = () => {
    setMode("image-return");

    const resetTimer = window.setTimeout(() => {
      setMode("idle");
    }, 700);

    timers.current.push(resetTimer);
  };

  const handleEnded = () => {
    if (!endPosterSrc) {
      returnToLessonImage();
      return;
    }

    setMode("poster");

    const posterTimer = window.setTimeout(() => {
      setMode("poster-fade");

      const returnTimer = window.setTimeout(() => {
        returnToLessonImage();
      }, 700);

      timers.current.push(returnTimer);
    }, 2800);

    timers.current.push(posterTimer);
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
        <button
          type="button"
          className={styles.closeVideoButton}
          onClick={() => setMode("idle")}
          aria-label={`Close ${title} video`}
        >
          Close Video
        </button>
      </div>
    );
  }

  if ((mode === "poster" || mode === "poster-fade") && endPosterSrc) {
    return (
      <div className={styles.videoPanel}>
        <img
          src={endPosterSrc}
          alt={endPosterAlt}
          className={`${styles.endPoster} ${mode === "poster-fade" ? styles.endPosterFade : ""}`}
        />
      </div>
    );
  }

  if (mode === "image-return") {
    return (
      <div className={styles.videoPanel}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 760px) 100vw, 900px"
          className={`${styles.videoBackdrop} ${styles.lessonImageReturn}`}
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
