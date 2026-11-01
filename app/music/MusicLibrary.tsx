"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Song } from "./data";
import styles from "./music.module.css";

type Album = { title: string; cover: string; story: string; spotify: string; apple: string };
type ArtistLinks = { spotify: string; apple: string };
type Props = { singles: Song[]; tracks: Song[]; album: Album; artistLinks: ArtistLinks };
type Passage = { status: "loading" | "ready" | "unavailable"; text: string };

function scriptureDestination(scripture: string) {
  const match = scripture.match(/^(.+?)\s+(\d+):(\d+)(?:-(\d+))?\s+\(KJV\)$/);
  if (!match) return null;
  const book = match[1] === "Psalm" ? "psalms" : match[1].toLowerCase().replace(/\s+/g, "-");
  const chapter = Number(match[2]);
  const first = Number(match[3]);
  const last = Number(match[4] || match[3]);
  return {
    api: `/api/bible/${book}/${chapter}`,
    reader: `/bible/${book}/${chapter}#v${first}`,
    first,
    last,
  };
}

function summarize(story: string) {
  const clean = story.trim().replace(/\s+/g, " ");
  const sentence = clean.match(/^.*?[.!?](?=\s|$)/)?.[0];
  return sentence || clean.slice(0, 220);
}

function SongCard({ song, onDetails, onPlay }: {
  song: Song; onDetails: (song: Song) => void; onPlay: (id: string) => void;
}) {
  return (
    <article className={styles.songCard} id={song.id} aria-labelledby={`heading-${song.id}`}>
      <div className={styles.artwork}>
        <Image
          src={song.coverUrl}
          alt={`Cover artwork for ${song.title}`}
          fill
          sizes="(max-width: 640px) 88vw, (max-width: 1000px) 45vw, 28vw"
          className={styles.coverImage}
        />
      </div>
      <div className={styles.cardBody}>
        <p className={styles.typeLabel}>
          {song.kind === "Album Track" ? `Album Track · ${String(song.trackNumber).padStart(2, "0")}` : "Single"}
        </p>
        <h3 id={`heading-${song.id}`}>{song.title}</h3>
        <p className={styles.theme}>{song.theme}</p>
        <p className={styles.teaser}>{summarize(song.story)}</p>
        <div className={styles.playerArea}>
          <p className={styles.listenLabel}>Listen to this song</p>
          <audio
            data-fce-audio={song.id}
            src={song.audioUrl}
            preload="none"
            controls
            controlsList="nodownload"
            aria-label={`Play ${song.title}`}
            onPlay={() => onPlay(song.id)}
          >
            Your browser does not support audio playback.
          </audio>
        </div>
        <button type="button" className={styles.detailsButton} onClick={() => onDetails(song)}
          aria-haspopup="dialog" aria-label={`Full description for ${song.title}`}>
          Full Description <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}

export default function MusicLibrary({ singles, tracks, album, artistLinks }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const passageRequest = useRef(0);
  const [selected, setSelected] = useState<Song | null>(null);
  const [passage, setPassage] = useState<Passage>({ status: "unavailable", text: "" });

  function pauseOtherSongs(id: string) {
    document.querySelectorAll<HTMLAudioElement>("audio[data-fce-audio]").forEach(audio => {
      if (audio.dataset.fceAudio !== id && !audio.paused) audio.pause();
    });
  }

  function closeDescription() {
    dialogRef.current?.close();
  }

  function openDescription(song: Song) {
    const request = ++passageRequest.current;
    setSelected(song);
    setPassage({ status: "loading", text: "" });
    dialogRef.current?.showModal();

    const location = scriptureDestination(song.scripture);
    if (!location) {
      setPassage({ status: "unavailable", text: "" });
      return;
    }

    fetch(location.api)
      .then(async response => {
        if (!response.ok) throw new Error("Scripture unavailable");
        const chapter = await response.json() as {
          paragraphs?: { verses?: { verse: number; text: string }[] }[];
        };
        const verses = (chapter.paragraphs ?? [])
          .flatMap(paragraph => paragraph.verses ?? [])
          .filter(verse => verse.verse >= location.first && verse.verse <= location.last);
        return verses.map(verse => verse.text.trim()).filter(Boolean).join(" ");
      })
      .then(text => {
        if (passageRequest.current !== request) return;
        setPassage(text ? { status: "ready", text } : { status: "unavailable", text: "" });
      })
      .catch(() => {
        if (passageRequest.current === request) setPassage({ status: "unavailable", text: "" });
      });
  }

  const bookLink = selected ? scriptureDestination(selected.scripture)?.reader : null;
  const [albumLead, ...albumParts] = album.story.split(/\n\n/);

  return (
    <>
      <div className={styles.intro}>
        <div>
          <p className={styles.sectionEyebrow}>MUSIC WITH A MESSAGE</p>
          <h2>Listen. Reflect. Be Encouraged.</h2>
          <p>Explore original music inspired by faith in Jesus Christ. Listen here, and discover the stories and Scriptures behind every song.</p>
        </div>
        <nav className={styles.artistLinks} aria-label="Listen on streaming services">
          <a href={artistLinks.spotify} target="_blank" rel="noopener noreferrer">Richard Ball on Spotify <span aria-hidden="true">↗</span></a>
          <a href={artistLinks.apple} target="_blank" rel="noopener noreferrer">Richard Ball on Apple Music <span aria-hidden="true">↗</span></a>
        </nav>
      </div>

      <section className={styles.collection} id="singles" aria-labelledby="singles-heading">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionEyebrow}>ORIGINAL SONGS</p>
            <h2 id="singles-heading">Singles</h2>
            <p>Each song has its own message. Select a cover, listen, and explore its story.</p>
          </div>
          <span className={styles.count}>{singles.length} songs</span>
        </div>
        <div className={styles.songGrid}>
          {singles.map(song => (
            <SongCard key={song.id} song={song} onDetails={openDescription} onPlay={pauseOtherSongs} />
          ))}
        </div>
      </section>

      <section className={styles.albumFeature} aria-labelledby="album-heading" id="album">
        <div className={styles.albumVisual}>
          <Image src={album.cover} alt="On the Frontline for Christ album cover" fill
            sizes="(max-width: 760px) 80vw, 360px" className={styles.albumImage} />
        </div>
        <div className={styles.albumCopy}>
          <p className={styles.sectionEyebrow}>THE ALBUM · 10 TRACKS</p>
          <h2 id="album-heading">{album.title}</h2>
          <p className={styles.albumLead}>{albumLead}</p>
          <details className={styles.albumStory}>
            <summary>Read the Album Story <span aria-hidden="true">⌄</span></summary>
            <div className={styles.albumStoryText}>
              {albumParts.map((part, index) => <p key={index}>{part}</p>)}
            </div>
          </details>
          <div className={styles.albumLinks}>
            <a href={album.spotify} target="_blank" rel="noopener noreferrer">Artist on Spotify ↗</a>
            <a href={album.apple} target="_blank" rel="noopener noreferrer">Artist on Apple Music ↗</a>
          </div>
          <p className={styles.platformNote}>Streaming links currently open the artist profile, not a specific album.</p>
        </div>
      </section>

      <section className={styles.collection} id="album-tracks" aria-labelledby="tracks-heading">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionEyebrow}>ON THE FRONTLINE FOR CHRIST</p>
            <h2 id="tracks-heading">Album Tracks</h2>
            <p>Ten songs presented in the album's intended listening order.</p>
          </div>
          <span className={styles.count}>{tracks.length} tracks</span>
        </div>
        <div className={styles.songGrid}>
          {tracks.map(song => (
            <SongCard key={song.id} song={song} onDetails={openDescription} onPlay={pauseOtherSongs} />
          ))}
        </div>
      </section>

      <dialog ref={dialogRef} className={styles.dialog}
        aria-labelledby="song-dialog-title"
        onClick={event => { if (event.target === dialogRef.current) closeDescription(); }}
        onClose={() => { passageRequest.current += 1; setSelected(null); }}>
        {selected && (
          <div className={styles.dialogContent}>
            <div className={styles.dialogHeader}>
              <div>
                <p className={styles.sectionEyebrow}>THE STORY BEHIND THE SONG</p>
                <h2 id="song-dialog-title">{selected.title}</h2>
              </div>
              <button type="button" className={styles.closeButton} onClick={closeDescription} aria-label="Close song description">×</button>
            </div>
            <div className={styles.dialogBody}>
              <p className={styles.fullStory}>{selected.story}</p>
              <div className={styles.scripturePanel}>
                <p className={styles.dialogLabel}>SUPPORTING SCRIPTURE</p>
                {passage.status === "ready" && <blockquote>{passage.text}</blockquote>}
                {passage.status === "loading" && <p role="status">Loading KJV Scripture…</p>}
                {passage.status === "unavailable" && <p>Read the passage in the FCE Bible Reader.</p>}
                <p className={styles.scriptureReference}>{selected.scripture}</p>
                {bookLink && <a className={styles.readerLink} href={bookLink} target="_blank" rel="noopener noreferrer">Read in FCE Bible Reader ↗</a>}
              </div>
              <p className={styles.dialogLabel}>PRIMARY THEME</p>
              <p className={styles.dialogTheme}>{selected.theme}</p>
              <div className={styles.dialogActions}>
                <a href={selected.lyricsUrl} target="_blank" rel="noopener noreferrer">Open Lyrics (Word) ↗</a>
                <a href={artistLinks.spotify} target="_blank" rel="noopener noreferrer">Artist on Spotify ↗</a>
                <a href={artistLinks.apple} target="_blank" rel="noopener noreferrer">Artist on Apple Music ↗</a>
              </div>
              <p className={styles.dialogFootnote}>Streaming links open the artist profile while individual song links are being collected.</p>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
