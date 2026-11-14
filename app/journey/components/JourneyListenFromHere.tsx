"use client";

import { J2H_AUDIO_SEEK_EVENT } from "./JourneyAudioPlayer";
import styles from "../journey-fixes.module.css";

export function JourneyListenFromHere({
  playerId,
  seconds,
}: {
  playerId: string;
  seconds: number;
}) {
  const seek = () => {
    window.dispatchEvent(
      new CustomEvent(J2H_AUDIO_SEEK_EVENT, {
        detail: { playerId, seconds },
      }),
    );

    document.getElementById(`audio-${playerId}`)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <button className={styles.listenFromHere} type="button" onClick={seek}>
      ▶ Listen from here
    </button>
  );
}
