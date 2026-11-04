"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import type { Song } from "./data";
import MusicPlayer, { type RepeatMode } from "./MusicPlayer";
import PlaylistManager from "./PlaylistManager";
import { createPlaylist, readSavedPlaylists, writeSavedPlaylists, type SavedPlaylist } from "./playlistStorage";
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

function SongCard({ song, onDetails, onPlay, onAdd, isCurrent, isPlaying }: {
  song: Song;
  onDetails: (song: Song) => void;
  onPlay: (id: string) => void;
  onAdd: (id: string) => void;
  isCurrent: boolean;
  isPlaying: boolean;
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
        <div className={styles.cardControls}>
          <button type="button" className={styles.songPlayButton} onClick={() => onPlay(song.id)}
            aria-label={isCurrent && isPlaying ? `Pause Song: ${song.title}` :
              isCurrent ? `Resume Song: ${song.title}` : `Play Song: ${song.title}`}>
            {isCurrent && isPlaying ? "Ⅱ Pause Song" : isCurrent ? "▶ Resume Song" : "▶ Play Song"}
          </button>
          <button type="button" className={styles.addSongButton} onClick={() => onAdd(song.id)}
            aria-label={`Add ${song.title} to playlist`}>+ Add to Playlist</button>
          <button type="button" className={styles.detailsButton} onClick={() => onDetails(song)}
            aria-haspopup="dialog" aria-label={`Full description for ${song.title}`}>
            Full Description <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default function MusicLibrary({ singles, tracks, album, artistLinks }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const passageRequest = useRef(0);
  const [selected, setSelected] = useState<Song | null>(null);
  const [passage, setPassage] = useState<Passage>({ status: "unavailable", text: "" });
  const allSongs = useMemo(() => [...singles, ...tracks], [singles, tracks]);
  const lookup = useMemo(() => Object.fromEntries(allSongs.map(song => [song.id, song])) as Record<string, Song>, [allSongs]);
  const knownIds = useMemo(() => new Set(allSongs.map(song => song.id)), [allSongs]);
  const [playlists, setPlaylists] = useState<SavedPlaylist[]>([]);
  const [playlistsReady, setPlaylistsReady] = useState(false);
  const [storageWarning, setStorageWarning] = useState(false);
  const [activePlaylistId, setActivePlaylistId] = useState<string | null>(null);
  const [pendingSongId, setPendingSongId] = useState<string | null>(null);
  const [newListName, setNewListName] = useState("");
  const addDialogRef = useRef<HTMLDialogElement>(null);

  const audioRef = useRef<HTMLAudioElement>(null);
  const [queue, setQueue] = useState<string[]>([]);
  const [queueIndex, setQueueIndex] = useState(0);
  const [queueLabel, setQueueLabel] = useState("Song");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [shuffled, setShuffled] = useState(false);
  const [repeat, setRepeat] = useState<RepeatMode>("off");
  const [playbackError, setPlaybackError] = useState("");
  const currentId = queue[queueIndex] ?? null;
  const currentSong = currentId ? lookup[currentId] ?? null : null;

  // Hydrate browser-only playlists after server rendering to avoid an SSR mismatch.
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const restored = readSavedPlaylists(knownIds);
      setPlaylists(restored);
      setActivePlaylistId(restored[0]?.id ?? null);
      setPlaylistsReady(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [knownIds]);

  function saveLists(nextLists: SavedPlaylist[]) {
    setPlaylists(nextLists);
    if (!writeSavedPlaylists(nextLists)) setStorageWarning(true);
  }

  function addNewList(name: string, songId?: string) {
    if (!playlistsReady || !name.trim() || playlists.length >= 40) return;
    const newList = createPlaylist(name, songId);
    saveLists([...playlists, newList]);
    setActivePlaylistId(newList.id);
  }

  function removeList(id: string) {
    const next = playlists.filter(p => p.id !== id);
    saveLists(next);
    if (activePlaylistId === id) setActivePlaylistId(next[0]?.id ?? null);
  }

  function updateList(id: string, updater: (ids: string[]) => string[]) {
    saveLists(playlists.map(p => p.id === id ? { ...p, songIds: updater(p.songIds) } : p));
  }

  function removeSongFromList(id: string, songId: string) {
    updateList(id, ids => ids.filter(value => value !== songId));
  }

  function moveSongInList(id: string, index: number, direction: -1 | 1) {
    updateList(id, ids => {
      const next = [...ids];
      const target = index + direction;
      if (index < 0 || index >= ids.length || target < 0 || target >= ids.length) return next;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  function openAddToPlaylist(id: string) {
    if (!playlistsReady) return;
    setPendingSongId(id);
    setNewListName("");
    addDialogRef.current?.showModal();
  }

  function addToExistingList(id: string) {
    if (!pendingSongId) return;
    updateList(id, ids => ids.includes(pendingSongId) ? ids : [...ids, pendingSongId]);
    setActivePlaylistId(id);
    addDialogRef.current?.close();
  }

  function createFromPicker(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!pendingSongId || !newListName.trim()) return;
    addNewList(newListName, pendingSongId);
    setNewListName("");
    addDialogRef.current?.close();
  }

  function activateTrack(ids: string[], index: number, label: string) {
    const validIds = ids.filter(id => Boolean(lookup[id]));
    const song = lookup[validIds[index]];
    if (!song) return;
    const audio = audioRef.current;
    setQueue(validIds);
    setQueueIndex(index);
    setQueueLabel(label);
    setCurrentTime(0);
    setDuration(0);
    setPlaybackError("");
    if (audio) {
      audio.src = song.audioUrl;
      audio.load();
      audio.volume = volume;
      void audio.play().catch(() => {
        setIsPlaying(false);
        setPlaybackError("Playback could not start. Select Play again or check your connection.");
      });
    }
  }

  function startSong(id: string) {
    activateTrack([id], 0, "Single song");
  }

  function playList(id: string, start = 0) {
    const list = playlists.find(p => p.id === id);
    if (!list?.songIds.length) return;
    activateTrack(list.songIds, start, list.name);
  }

  function playAlbum() {
    activateTrack(tracks.map(song => song.id), 0, album.title);
  }

  function playAllSingles() {
    activateTrack(singles.map(song => song.id), 0, "All Singles");
  }

  function togglePlayback() {
    const audio = audioRef.current;
    if (!audio || !currentSong) return;
    if (audio.paused) {
      setPlaybackError("");
      void audio.play().catch(() => {
        setIsPlaying(false);
        setPlaybackError("Playback could not resume. Please try again.");
      });
    } else {
      audio.pause();
    }
  }

  function nextTrack(automatic = false) {
    if (!queue.length) return;
    if (automatic && repeat === "one") {
      activateTrack(queue, queueIndex, queueLabel);
      return;
    }
    let next = queueIndex + 1;
    if (shuffled && queue.length > 1) {
      const randomOffset = window.crypto.getRandomValues(new Uint32Array(1))[0] % (queue.length - 1);
      next = (queueIndex + 1 + randomOffset) % queue.length;
    } else if (next >= queue.length) {
      if (repeat === "all" || !automatic) next = 0;
      else { setIsPlaying(false); return; }
    }
    activateTrack(queue, next, queueLabel);
  }

  function previousTrack() {
    if (!queue.length) return;
    const audio = audioRef.current;
    if (audio && audio.currentTime > 3) {
      audio.currentTime = 0;
      return;
    }
    const previous = (queueIndex - 1 + queue.length) % queue.length;
    activateTrack(queue, previous, queueLabel);
  }

  function seekTo(seconds: number) {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(seconds)) return;
    audio.currentTime = Math.max(0, Math.min(seconds, Number.isFinite(audio.duration) ? audio.duration : seconds));
    setCurrentTime(audio.currentTime);
  }

  function adjustVolume(value: number) {
    const level = Math.max(0, Math.min(1, value));
    if (audioRef.current) audioRef.current.volume = level;
    setVolume(level);
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

      <PlaylistManager
        playlists={playlists}
        activeId={activePlaylistId}
        isReady={playlistsReady}
        storageWarning={storageWarning}
        lookup={lookup}
        onCreate={name => addNewList(name)}
        onSelect={setActivePlaylistId}
        onPlay={playList}
        onDelete={removeList}
        onRemove={removeSongFromList}
        onMove={moveSongInList}
      />

      <section className={styles.collection} id="singles" aria-labelledby="singles-heading">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionEyebrow}>ORIGINAL SONGS</p>
            <h2 id="singles-heading">Singles</h2>
            <p>Each song has its own message. Select a cover, listen, and explore its story.</p>
          </div>
          <div className={styles.headingActions}>
            <button type="button" className={styles.playCollectionButton} onClick={playAllSingles}>▶ Play All Singles</button>
            <span className={styles.count}>{singles.length} songs</span>
          </div>
        </div>
        <div className={styles.songGrid}>
          {singles.map(song => (
            <SongCard key={song.id} song={song} onDetails={openDescription}
              onPlay={id => currentId === id ? togglePlayback() : startSong(id)} onAdd={openAddToPlaylist}
              isCurrent={currentId === song.id} isPlaying={isPlaying} />
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
          <button type="button" className={styles.albumPlayButton} onClick={playAlbum}>
            ▶ Play the Whole Album · {tracks.length} Tracks
          </button>
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
            <p>Ten songs presented in the album&apos;s intended listening order.</p>
          </div>
          <div className={styles.headingActions}>
            <button type="button" className={styles.playCollectionButton} onClick={playAlbum}>▶ Play Album</button>
            <span className={styles.count}>{tracks.length} tracks</span>
          </div>
        </div>
        <div className={styles.songGrid}>
          {tracks.map(song => (
            <SongCard key={song.id} song={song} onDetails={openDescription}
              onPlay={id => currentId === id ? togglePlayback() : startSong(id)} onAdd={openAddToPlaylist}
              isCurrent={currentId === song.id} isPlaying={isPlaying} />
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
              <div className={styles.dialogPlayback}>
                <button type="button" onClick={() => {
                  if (currentId === selected.id) togglePlayback();
                  else startSong(selected.id);
                }}>
                  {currentId === selected.id && isPlaying ? "Ⅱ Pause Song" : "▶ Play Song"}
                </button>
                <button type="button" onClick={() => openAddToPlaylist(selected.id)}>+ Add to Playlist</button>
              </div>
              <div className={styles.dialogActions}>
                <a href={selected.lyricsUrl} target="_blank" rel="noopener noreferrer">View Lyrics (PDF) ↗</a>
                <a href={artistLinks.spotify} target="_blank" rel="noopener noreferrer">Artist on Spotify ↗</a>
                <a href={artistLinks.apple} target="_blank" rel="noopener noreferrer">Artist on Apple Music ↗</a>
              </div>
              <p className={styles.dialogFootnote}>Streaming links open the artist profile while individual song links are being collected.</p>
            </div>
          </div>
        )}
      </dialog>

      <dialog ref={addDialogRef} className={styles.addDialog} aria-labelledby="add-song-heading"
        onClose={() => setPendingSongId(null)}>
        <div className={styles.addDialogContent}>
          <div className={styles.dialogHeader}>
            <div>
              <p className={styles.sectionEyebrow}>CREATE YOUR LISTENING JOURNEY</p>
              <h2 id="add-song-heading">Add to Playlist</h2>
            </div>
            <button type="button" className={styles.closeButton}
              onClick={() => addDialogRef.current?.close()} aria-label="Close playlist picker">×</button>
          </div>
          <div className={styles.addDialogBody}>
            {pendingSongId && <p>Add <strong>{lookup[pendingSongId]?.title}</strong> to one of your saved song lists.</p>}
            {playlists.length > 0 && <div className={styles.pickerLists}>
              {playlists.map(p => (
                <button key={p.id} type="button" onClick={() => addToExistingList(p.id)}
                  disabled={Boolean(pendingSongId && p.songIds.includes(pendingSongId))}>
                  <span>{p.name} <small>· {p.songIds.length} songs</small></span>
                  <span>{pendingSongId && p.songIds.includes(pendingSongId) ? "Already added" : "Add +"}</span>
                </button>
              ))}
            </div>}
            <form className={styles.pickerCreate} onSubmit={createFromPicker}>
              <label htmlFor="picker-new-list">Or create a new list</label>
              <div>
                <input id="picker-new-list" value={newListName} maxLength={60}
                  placeholder="New list name" onChange={e => setNewListName(e.target.value)} />
                <button type="submit" disabled={!newListName.trim() || playlists.length >= 40}>Create & Add</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
      <MusicPlayer
        audioRef={audioRef}
        song={currentSong}
        currentIndex={queueIndex}
        queueLength={queue.length}
        sourceLabel={queueLabel}
        isPlaying={isPlaying}
        time={currentTime}
        duration={duration}
        volume={volume}
        shuffled={shuffled}
        repeat={repeat}
        error={playbackError}
        onToggle={togglePlayback}
        onPrevious={previousTrack}
        onNext={() => nextTrack()}
        onShuffle={() => setShuffled(value => !value)}
        onRepeat={() => setRepeat(value => value === "off" ? "all" : value === "all" ? "one" : "off")}
        onSeek={seekTo}
        onVolume={adjustVolume}
        onEnded={() => nextTrack(true)}
        onPlaying={() => { setIsPlaying(true); setPlaybackError(""); }}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={setCurrentTime}
        onDuration={setDuration}
        onError={() => setPlaybackError("This audio file could not be loaded. Please try again later.")}
      />
    </>
  );
}
