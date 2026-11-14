"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import { recordJourneyEngagementAction } from "../progress/engagement-actions";
import styles from "../step-overview-sequence9.module.css";

export const J2H_AUDIO_SEEK_EVENT = "j2h-audio-seek";

type StoredAudioState = {
  position: number;
  listenedSeconds: number;
};

type JourneyAudioPlayerProps = {
  src: string;
  title: string;
  playerId?: string;
  resumeKey?: string;
  contentKey?: string;
  path?: string;
  startAtSeconds?: number;
  endAtSeconds?: number;
};

function readStoredState(key: string): StoredAudioState | null {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredAudioState>;
    if (typeof parsed.position !== "number" || typeof parsed.listenedSeconds !== "number") {
      return null;
    }
    return {
      position: parsed.position,
      listenedSeconds: parsed.listenedSeconds,
    };
  } catch {
    return null;
  }
}

export function JourneyAudioPlayer({
  src,
  title,
  playerId,
  resumeKey,
  contentKey,
  path,
  startAtSeconds = 0,
  endAtSeconds,
}: JourneyAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const listenedSecondsRef = useRef(0);
  const lastTimeRef = useRef(startAtSeconds);
  const seekingRef = useRef(false);
  const reportedBucketRef = useRef(0);
  const eligibilityRefreshRef = useRef(false);
  const reportPendingRef = useRef(false);
  const router = useRouter();

  const storageKey = `fce:j2h:audio:${resumeKey ?? contentKey ?? src}`;

  const getClipDuration = () => {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(audio.duration)) return 0;
    const clipEnd = endAtSeconds ?? audio.duration;
    return Math.max(0, clipEnd - startAtSeconds);
  };

  const saveState = (position: number) => {
    try {
      window.localStorage.setItem(
        storageKey,
        JSON.stringify({
          position,
          listenedSeconds: listenedSecondsRef.current,
        } satisfies StoredAudioState),
      );
    } catch {
      // Audio remains fully usable when local storage is unavailable.
    }
  };

  const reportEngagement = async () => {
    if (!contentKey || !path || reportPendingRef.current) return;

    const duration = getClipDuration();
    if (duration <= 0) return;

    const percent = Math.min(100, Math.round((listenedSecondsRef.current / duration) * 100));
    const bucket = Math.floor(percent / 10) * 10;
    if (bucket < 10 || bucket <= reportedBucketRef.current) return;

    reportedBucketRef.current = bucket;
    reportPendingRef.current = true;
    try {
      const result = await recordJourneyEngagementAction(
        contentKey,
        "audio",
        bucket,
        Math.round(listenedSecondsRef.current),
        path,
      );

      if (result.completionEligible && !eligibilityRefreshRef.current) {
        eligibilityRefreshRef.current = true;
        router.refresh();
      }
    } finally {
      reportPendingRef.current = false;
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleSeekRequest = (event: Event) => {
      const detail = (event as CustomEvent<{ playerId?: string; seconds?: number }>).detail;
      if (!detail || detail.playerId !== playerId || typeof detail.seconds !== "number") return;

      const clipEnd = endAtSeconds ?? audio.duration;
      const target = Math.min(Math.max(detail.seconds, startAtSeconds), clipEnd);
      audio.currentTime = target;
      lastTimeRef.current = target;
      saveState(target);

      void audio.play().catch(() => {
        // A browser may still require the visitor to press Play manually.
      });
    };

    window.addEventListener(J2H_AUDIO_SEEK_EVENT, handleSeekRequest);
    return () => window.removeEventListener(J2H_AUDIO_SEEK_EVENT, handleSeekRequest);
  }, [endAtSeconds, playerId, startAtSeconds, storageKey]);

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const clipEnd = endAtSeconds ?? audio.duration;
    const stored = readStoredState(storageKey);
    const storedPosition = stored?.position ?? startAtSeconds;
    const safePosition =
      storedPosition >= startAtSeconds && storedPosition < clipEnd - 0.5
        ? storedPosition
        : startAtSeconds;

    listenedSecondsRef.current = Math.max(0, stored?.listenedSeconds ?? 0);
    lastTimeRef.current = safePosition;
    audio.currentTime = safePosition;

    const duration = Math.max(0, clipEnd - startAtSeconds);
    if (duration > 0) {
      reportedBucketRef.current = Math.floor(
        Math.min(100, (listenedSecondsRef.current / duration) * 100) / 10,
      ) * 10;
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const clipEnd = endAtSeconds ?? audio.duration;
    if (audio.currentTime < startAtSeconds) {
      audio.currentTime = startAtSeconds;
      lastTimeRef.current = startAtSeconds;
      return;
    }

    if (Number.isFinite(clipEnd) && audio.currentTime >= clipEnd) {
      audio.pause();
      audio.currentTime = clipEnd;
    }

    const currentTime = audio.currentTime;
    const delta = currentTime - lastTimeRef.current;

    if (!audio.paused && !seekingRef.current && delta > 0 && delta <= 3) {
      listenedSecondsRef.current += delta;
    }

    lastTimeRef.current = currentTime;
    saveState(currentTime);
    void reportEngagement();
  };

  const restart = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = startAtSeconds;
    lastTimeRef.current = startAtSeconds;
    saveState(startAtSeconds);
    try {
      await audio.play();
    } catch {
      // Browser playback restrictions may require the visitor to press Play manually.
    }
  };

  return (
    <div className={styles.windowAudio} id={playerId ? `audio-${playerId}` : undefined}>
      <strong>Listen to this section</strong>
      <audio
        ref={audioRef}
        controls
        preload="metadata"
        controlsList="nodownload"
        aria-label={`Listen to ${title}`}
        onLoadedMetadata={handleLoadedMetadata}
        onSeeking={() => {
          seekingRef.current = true;
        }}
        onSeeked={() => {
          const audio = audioRef.current;
          if (audio) {
            lastTimeRef.current = audio.currentTime;
            saveState(audio.currentTime);
          }
          seekingRef.current = false;
        }}
        onTimeUpdate={handleTimeUpdate}
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
