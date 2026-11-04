"use client";

import { useState, type FormEvent } from "react";
import type { Song } from "./data";
import type { SavedPlaylist } from "./playlistStorage";
import styles from "./music.module.css";

type Props = {
  playlists: SavedPlaylist[];
  activeId: string | null;
  isReady: boolean;
  storageWarning: boolean;
  lookup: Record<string, Song>;
  onCreate: (name: string) => void;
  onSelect: (id: string) => void;
  onPlay: (id: string, start?: number) => void;
  onDelete: (id: string) => void;
  onRemove: (id: string, songId: string) => void;
  onMove: (id: string, index: number, direction: -1 | 1) => void;
};

export default function PlaylistManager({
  playlists, activeId, isReady, storageWarning, lookup,
  onCreate, onSelect, onPlay, onDelete, onRemove, onMove,
}: Props) {
  const [name, setName] = useState("");
  const active = playlists.find(p => p.id === activeId) ?? null;

  function create(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    onCreate(trimmed);
    setName("");
  }

  return (
    <section className={styles.playlistsSection} id="my-playlists" aria-labelledby="playlists-heading">
      <div className={styles.playlistHeading}>
        <div>
          <p className={styles.sectionEyebrow}>BUILD YOUR OWN LISTENING JOURNEY</p>
          <h2 id="playlists-heading">My Song Lists</h2>
          <p>Mix singles and album tracks, arrange them in your preferred order, and play them continuously.</p>
        </div>
      </div>
      <div className={styles.playlistLayout}>
        <div className={styles.playlistSidebar}>
          <form onSubmit={create} className={styles.createPlaylist}>
            <label htmlFor="new-playlist-name">Create a song list</label>
            <div>
              <input id="new-playlist-name" value={name} maxLength={60}
                placeholder="Name your list" onChange={e => setName(e.target.value)} disabled={!isReady} />
              <button type="submit" disabled={!isReady || !name.trim()}>Create</button>
            </div>
          </form>
          {playlists.length ? (
            <nav className={styles.savedLists} aria-label="Your saved song lists">
              {playlists.map(p => (
                <button key={p.id} type="button" onClick={() => onSelect(p.id)}
                  className={p.id === activeId ? styles.selectedPlaylist : ""}
                  aria-current={p.id === activeId ? "true" : undefined}>
                  <strong>{p.name}</strong>
                  <span>{p.songIds.length} {p.songIds.length === 1 ? "song" : "songs"}</span>
                </button>
              ))}
            </nav>
          ) : (
            <p className={styles.noPlaylists}>{isReady ? "You haven't made a song list yet. Start with a name, then use Add to Playlist on any song card." : "Loading saved song lists…"}</p>
          )}
          <p className={styles.storageNote}>
            Lists are saved automatically in this browser, on this device. No account is required.
            Clearing browser data or switching devices will not carry your saved lists over.
          </p>
          {storageWarning && <p className={styles.storageWarning} role="status">Your browser blocked saving. Changes to lists may not remain after you leave this page.</p>}
        </div>
        <div className={styles.playlistEditor}>
          {active ? (
            <>
              <div className={styles.editorHeading}>
                <div><p className={styles.sectionEyebrow}>YOUR SONG LIST</p><h3>{active.name}</h3></div>
                <div className={styles.editorActions}>
                  <button type="button" onClick={() => onPlay(active.id)} disabled={!active.songIds.length}>▶ Play List</button>
                  <button type="button" className={styles.deleteList} onClick={() => {
                    if (window.confirm(`Delete song list "${active.name}"? This will not remove any songs from the Music Library.`)) onDelete(active.id);
                  }}>Delete List</button>
                </div>
              </div>
              {active.songIds.length ? (
                <ol className={styles.orderedSongs}>
                  {active.songIds.map((id, index) => {
                    const song = lookup[id];
                    if (!song) return null;
                    return <li key={id}>
                      <button type="button" className={styles.playRow} onClick={() => onPlay(active.id, index)}
                        aria-label={`Play ${song.title} from ${active.name}`}>▶</button>
                      <span className={styles.songRowName}>{song.title}<small>{song.kind}</small></span>
                      <div className={styles.reorderButtons}>
                        <button type="button" onClick={() => onMove(active.id, index, -1)} disabled={index === 0}
                          aria-label={`Move ${song.title} up`}>↑</button>
                        <button type="button" onClick={() => onMove(active.id, index, 1)} disabled={index === active.songIds.length - 1}
                          aria-label={`Move ${song.title} down`}>↓</button>
                        <button type="button" className={styles.removeSong} onClick={() => onRemove(active.id, id)}
                          aria-label={`Remove ${song.title} from ${active.name}`}>×</button>
                      </div>
                    </li>;
                  })}
                </ol>
              ) : <p className={styles.emptyList}>This list is empty. Find a song below and select <strong>Add to Playlist</strong>.</p>}
            </>
          ) : (
            <div className={styles.playlistWelcome}>
              <span aria-hidden="true">♫</span>
              <h3>Your music, your listening order</h3>
              <p>Create a list to arrange your favorite FCE songs. Add any Single or Album Track, then return here to play or reorder it.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
