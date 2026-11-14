"use client";

import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import { recordJourneyEngagementAction } from "../progress/engagement-actions";
import styles from "../step-overview-sequence9.module.css";

export const J2H_AUDIO_SEEK_EVENT = "j2h-audio-seek";

type PlayedRange = [number, number];

type StoredAudioState = {
  position: number;
  playedRanges: PlayedRange[];
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

function mergeRanges(ranges: PlayedRange[]): PlayedRange[] {
  const sorted = ranges
    .filter(([start, end]) => Number.isFinite(start) && Number.isFinite(end) && end > start)
    .sort((a, b) => a[0] - b[0]);

  const merged: PlayedRange[] = [];
  for (const range of sorted) {
    const previous = merged.at(-1);
    if (!previous || range[0] > previous[1] + 0.25) {
      merged.push([...range]);
      continue;
    }
    previous[1] = Math.max(previous[1], range[1]);
  }
  return merged;
}

function readStoredState(key: string): StoredAudioState | null {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<StoredAudioState>;
    if (typeof parsed.position !== "number" || !Array.isArray(parsed.playedRanges)) {
      return null;
    }

    const ranges = parsed.playedRanges.filter(
      (range): range is PlayedRange =>
        Array.isArray(range) &&
        range.length === 2 &&
        typeof range[0] === "number" &&
        typeof range[1] === "number",
    );

    return {
      position: parsed.position,
      playedRanges: mergeRanges(ranges),
    };
  } catch {
    return null;
  }
}

function rangesFromTimeRanges(
  played: TimeRanges,
  clipStart: number,
  clipEnd: number,
): PlayedRange[] {
  const ranges: PlayedRange[] = [];
  for (let index = 0; index < played.length; index += 1) {
    const start = Math.max(clipStart, played.start(index));
    const end = Math.min(clipEnd, played.end(index));
    if (end > start) ranges.push([start, end]);
  }
  return ranges;
}

function playedSeconds(ranges: PlayedRange[]) {
  return ranges.reduce((total, [start, end]) => total + Math.max(0, end - start), 0);
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
  const storedRangesRef = useRef<PlayedRange[]>([]);
  const reportedBucketRef = useRef(0);
  const eligibilityRefreshRef = useRef(false);
  const reportPendingRef = useRef(false);
  const router = useRouter();

  const storageKey = `fce:j2h:audio:${resumeKey ?? contentKey ?? src}`;

  const clipBounds = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(audio.duration)) {
      return { start: startAtSeconds, end: startAtSeconds, duration: 0 };
    }

    const end = Math.min(endAtSeconds ?? audio.duration, audio.duration);
    return {
      start: startAtSeconds,
      end,
      duration: Math.max(0, end - startAtSeconds),
    };
  }, [endAtSeconds, startAtSeconds]);

  const currentPlayedRanges = useCallback(() => {
    const audio = audioRef.current;
    const bounds = clipBounds();
    if (!audio || bounds.duration <= 0) return storedRangesRef.current;

    return mergeRanges([
      ...storedRangesRef.current,
      ...rangesFromTimeRanges(audio.played, bounds.start, bounds.end),
    ]);
  }, [clipBounds]);

  const saveState = useCallback(
    (position: number) => {
      try {
        const playedRanges = currentPlayedRanges();
        storedRangesRef.current = playedRanges;
        window.localStorage.setItem(
          storageKey,
          JSON.stringify({
            position,
            playedRanges,
          } satisfies StoredAudioState),
        );
      } catch {
        // Audio remains fully usable when local storage is unavailable.
      }
    },
    [currentPlayedRanges, storageKey],
  );

  const reportEngagement = useCallback(async () => {
    if (!contentKey || !path || reportPendingRef.current) return;

    const bounds = clipBounds();
    if (bounds.duration <= 0) return;

    const ranges = currentPlayedRanges();
    storedRangesRef.current = ranges;
    const uniqueSeconds = playedSeconds(ranges);
    const percent = Math.min(100, Math.round((uniqueSeconds / bounds.duration) * 100));
    const bucket = Math.floor(percent / 10) * 10;
    if (bucket < 10 || bucket <= reportedBucketRef.current) return;

    reportedBucketRef.current = bucket;
    reportPendingRef.current = true;
    try {
      const result = await recordJourneyEngagementAction(
        contentKey,
        "audio",
        bucket,
        Math.round(uniqueSeconds),
        path,
      );

      if (result.completionEligible && !eligibilityRefreshRef.current) {
        eligibilityRefreshRef.current = true;
        router.refresh();
      }
    } finally {
      reportPendingRef.current = false;
    }
  }, [clipBounds, contentKey, currentPlayedRanges, path, router]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleSeekRequest = (event: Event) => {
      const detail = (event as CustomEvent<{ playerId?: string; seconds?: number }>).detail;
      if (!detail || detail.playerId !== playerId || typeof detail.seconds !== "number") return;

      const bounds = clipBounds();
      const target = Math.min(Math.max(detail.seconds, bounds.start), bounds.end);
      audio.currentTime = target;
      saveState(target);

      void audio.play().catch(() => {
        // A browser may still require the visitor to press Play manually.
      });
    };

    window.addEventListener(J2H_AUDIO_SEEK_EVENT, handleSeekRequest);
    return () => window.removeEventListener(J2H_AUDIO_SEEK_EVENT, handleSeekRequest);
  }, [clipBounds, playerId, saveState]);

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const bounds = clipBounds();
    const stored = readStoredState(storageKey);
    const storedPosition = stored?.position ?? bounds.start;
    const safePosition =
      storedPosition >= bounds.start && storedPosition < bounds.end - 0.5
        ? storedPosition
        : bounds.start;

    storedRangesRef.current = mergeRanges(stored?.playedRanges ?? []);
    audio.currentTime = safePosition;

    if (bounds.duration > 0) {
      const uniqueSeconds = playedSeconds(
        mergeRanges([
          ...storedRangesRef.current,
          ...rangesFromTimeRanges(audio.played, bounds.start, bounds.end),
        ]),
      );
      reportedBucketRef.current =
        Math.floor(Math.min(100, (uniqueSeconds / bounds.duration) * 100) / 10) * 10;
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const bounds = clipBounds();
    if (audio.currentTime < bounds.start) {
      audio.currentTime = bounds.start;
      return;
    }

    if (bounds.duration > 0 && audio.currentTime >= bounds.end) {
      audio.pause();
      audio.currentTime = bounds.end;
    }

    saveState(audio.currentTime);
    void reportEngagement();
  };

  const restart = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    const bounds = clipBounds();
    audio.currentTime = bounds.start;
    saveState(bounds.start);
    try {
      await audio.play();
    } catch {
      // Browser playback restrictions may require the user to press Play manually.
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
