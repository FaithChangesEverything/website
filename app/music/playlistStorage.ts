export type SavedPlaylist = {
  id: string;
  name: string;
  songIds: string[];
};

// Playlists are stored on the listener's device. No FCE account or database.
export const PLAYLIST_STORAGE_KEY = "fce-music-playlists-v1";

export function readSavedPlaylists(validSongIds: Set<string>): SavedPlaylist[] {
  try {
    const raw = window.localStorage.getItem(PLAYLIST_STORAGE_KEY);
    if (!raw) return [];
    const data: unknown = JSON.parse(raw);
    if (!Array.isArray(data)) return [];
    const seen = new Set<string>();
    return data.slice(0, 40).flatMap((item: unknown) => {
      if (!item || typeof item !== "object") return [];
      const p = item as Record<string, unknown>;
      if (typeof p.id !== "string" || typeof p.name !== "string" || !Array.isArray(p.songIds)) return [];
      const id = p.id.slice(0, 100);
      const name = p.name.trim().slice(0, 60);
      if (!id || !name || seen.has(id)) return [];
      seen.add(id);
      const songs = new Set<string>();
      for (const value of p.songIds) {
        if (typeof value === "string" && validSongIds.has(value)) songs.add(value);
      }
      return [{ id, name, songIds: [...songs] }];
    });
  } catch {
    // Browser settings, private mode or invalid stored JSON can block storage.
    return [];
  }
}

export function writeSavedPlaylists(playlists: SavedPlaylist[]) {
  try {
    window.localStorage.setItem(PLAYLIST_STORAGE_KEY, JSON.stringify(playlists));
    return true;
  } catch {
    return false;
  }
}

export function createPlaylist(name: string, songId?: string): SavedPlaylist {
  return {
    id: `fce-list-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    name: name.trim().slice(0, 60),
    songIds: songId ? [songId] : [],
  };
}
