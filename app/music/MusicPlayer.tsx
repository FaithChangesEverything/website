"use client";

import Image from "next/image";
import type { RefObject } from "react";
import type { Song } from "./data";
import styles from "./music.module.css";

export type RepeatMode = "off" | "all" | "one";

function clock(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const whole = Math.floor(seconds);
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, "0")}`;
}

type PlayerProps = {
  audioRef: RefObject<HTMLAudioElement | null>;
  song: Song | null;
  currentIndex: number;
  queueLength: number;
  sourceLabel: string;
  isPlaying: boolean;
  time: number;
  duration: number;
  volume: number;
  shuffled: boolean;
  repeat: RepeatMode;
  error: string;
  onToggle: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onSeek: (seconds: number) => void;
  onVolume: (value: number) => void;
  onShuffle: () => void;
  onRepeat: () => void;
  onEnded: () => void;
  onPlaying: () => void;
  onPause: () => void;
  onTimeUpdate: (seconds: number) => void;
  onDuration: (seconds: number) => void;
  onError: () => void;
};

export default function MusicPlayer(props: PlayerProps) {
  const {
    audioRef, song, currentIndex, queueLength, sourceLabel,
    isPlaying, time, duration, volume, shuffled, repeat, error,
    onToggle, onPrevious, onNext, onSeek, onVolume, onShuffle, onRepeat,
    onEnded, onPlaying, onPause, onTimeUpdate, onDuration, onError,
  } = props;

  return (
    <aside className={styles.musicPlayer} aria-label="FCE Music Player">
      <audio
        ref={audioRef}
        preload="none"
        controlsList="nodownload"
        onPlay={onPlaying}
        onPause={onPause}
        onEnded={onEnded}
        onTimeUpdate={e => onTimeUpdate(e.currentTarget.currentTime)}
        onLoadedMetadata={e => onDuration(e.currentTarget.duration)}
        onDurationChange={e => onDuration(e.currentTarget.duration)}
        onError={onError}
      />
      {song ? (
        <div className={styles.playerContent}>
          <div className={styles.nowPlaying}>
            <div className={styles.miniCover}>
              <Image src={song.coverUrl} alt="" fill sizes="56px" />
            </div>
            <div className={styles.nowPlayingText}>
              <p>NOW PLAYING · {sourceLabel}</p>
              <strong>{song.title}</strong>
              <span>{queueLength > 1 ? `Track ${currentIndex + 1} of ${queueLength}` : song.kind}</span>
            </div>
          </div>
          <div className={styles.playback}>
            <div className={styles.transport}>
              <button type="button" onClick={onShuffle} aria-pressed={shuffled}
                title="Shuffle queue" aria-label="Shuffle queue" className={shuffled ? styles.enabledControl : ""}>⇄</button>
              <button type="button" onClick={onPrevious} aria-label="Previous track" title="Previous track">|◀</button>
              <button type="button" className={styles.mainPlay} onClick={onToggle}
                aria-label={isPlaying ? "Pause playback" : "Resume playback"}>
                {isPlaying ? "Ⅱ" : "▶"}
              </button>
              <button type="button" onClick={onNext} aria-label="Next track" title="Next track">▶|</button>
              <button type="button" onClick={onRepeat} aria-label={`Repeat: ${repeat}`}
                title={`Repeat: ${repeat}`} className={repeat !== "off" ? styles.enabledControl : ""}>
                {repeat === "one" ? "↻¹" : "↻"}
              </button>
            </div>
            <div className={styles.timeline}>
              <span>{clock(time)}</span>
              <input aria-label="Seek within song" type="range" min="0" max={Math.max(duration || 0, 1)}
                step="1" value={Math.min(time, duration || 1)}
                onChange={e => onSeek(Number(e.target.value))} />
              <span>{clock(duration)}</span>
            </div>
          </div>
          <label className={styles.volumeControl}>Volume
            <input type="range" aria-label="Music volume" min="0" max="1" step="0.05"
              value={volume} onChange={e => onVolume(Number(e.target.value))} />
          </label>
          {error && <p className={styles.playbackError} role="status">{error}</p>}
        </div>
      ) : (
        <div className={styles.playerEmpty}>
          <span aria-hidden="true">♫</span>
          <p><strong>FCE Music Player</strong> — select Play Song, Play All Singles, Play Album, or a saved song list to begin listening.</p>
        </div>
      )}
    </aside>
  );
}
