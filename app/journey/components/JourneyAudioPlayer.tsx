"use client";

import { useRef } from "react";

import styles from "../step-overview-sequence9.module.css";

export function JourneyAudioPlayer({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const restart = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = 0;
    try {
      await audio.play();
    } catch {
      // Browser playback restrictions may require the user to press Play manually.
    }
  };

  return (
    <div className={styles.windowAudio}>
      <strong>Listen to this section</strong>
      <audio
        ref={audioRef}
        controls
        preload="metadata"
        controlsList="nodownload"
        aria-label={`Listen to ${title}`}
      >
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button className={styles.windowAudioRestart} type="button" onClick={restart}>
        ↺ Restart
      </button>
    </div>
  );
}
