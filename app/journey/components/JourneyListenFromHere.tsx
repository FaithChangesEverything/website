"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  J2H_AUDIO_SEEK_EVENT,
  J2H_AUDIO_SEEK_DIAGNOSTIC_EVENT,
} from "./JourneyAudioPlayer";
import styles from "../journey-fixes.module.css";

type SeekDiagnostic = {
  playerId?: string;
  requestId: string;
  requestedSeconds: number;
  reportedSeconds: number;
  stage: "received" | "seeked" | "playing";
};

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "—";
  const minutes = Math.floor(seconds / 60);
  return `${minutes}:${Math.floor(seconds % 60).toString().padStart(2, "0")}.${Math.floor((seconds % 1) * 10)}`;
}

export function JourneyListenFromHere({
  playerId,
  seconds,
}: {
  playerId: string;
  seconds: number;
}) {
  const instanceId = useId();
  const sequence = useRef(0);
  const lastRequestId = useRef<string | null>(null);
  const [diagnostic, setDiagnostic] = useState<SeekDiagnostic | null>(null);

  useEffect(() => {
    const onDiagnostic = (event: Event) => {
      const detail = (event as CustomEvent<SeekDiagnostic>).detail;
      if (detail?.playerId !== playerId || detail.requestId !== lastRequestId.current) return;
      setDiagnostic(detail);
    };
    window.addEventListener(J2H_AUDIO_SEEK_DIAGNOSTIC_EVENT, onDiagnostic);
    return () => window.removeEventListener(J2H_AUDIO_SEEK_DIAGNOSTIC_EVENT, onDiagnostic);
  }, [playerId]);

  const seek = () => {
    const requestId = `${instanceId}:${++sequence.current}`;
    lastRequestId.current = requestId;
    setDiagnostic({ playerId, requestId, requestedSeconds: seconds, reportedSeconds: NaN, stage: "received" });
    window.dispatchEvent(
      new CustomEvent(J2H_AUDIO_SEEK_EVENT, {
        detail: { playerId, seconds, requestId },
      }),
    );
  };

  const difference = diagnostic ? diagnostic.reportedSeconds - diagnostic.requestedSeconds : NaN;

  return (
    <div className={styles.listenDiagnosticWrap}>
      <button className={styles.listenFromHere} type="button" onClick={seek}>
        ▶ Listen from here
      </button>
      {diagnostic && (
        <div className={styles.listenDiagnostic} role="status" aria-live="polite">
          <strong>Temporary audio diagnostic</strong>
          <span>Requested: {formatTime(diagnostic.requestedSeconds)}</span>
          <span>Browser reported: {formatTime(diagnostic.reportedSeconds)}</span>
          <span>Difference: {Number.isFinite(difference) ? `${difference >= 0 ? "+" : ""}${difference.toFixed(2)} s` : "waiting…"}</span>
          <span>Status: {diagnostic.stage === "playing" ? "Playing" : diagnostic.stage === "seeked" ? "Seek completed" : "Seeking…"}</span>
          <small>These are browser-reported times, not proof of the spoken-audio position.</small>
        </div>
      )}
    </div>
  );
}
