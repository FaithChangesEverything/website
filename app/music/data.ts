import rawSingles from "./singles.json";
import rawTracks from "./tracks.json";
import rawAlbum from "./album.json";

// SongMetadata REV1.3, worksheet "songmetadata", rows 4–27 only.
// Lyrics links use the PDF URLs in column M; column L retains archival Word filenames.
// The stored R2 audio/cover file basenames and complete approved stories are preserved.
// Rows 28 onward are deliberately excluded until their future publication.
type SourceRow = [
  id: string,
  title: string,
  story: string,
  scripture: string,
  theme: string,
  audioFile: string,
  coverFile: string,
  lyricsPdfPath: string,
];

export type Song = {
  id: string;
  title: string;
  story: string;
  scripture: string;
  theme: string;
  audioUrl: string;
  coverUrl: string;
  lyricsUrl: string;
  kind: "Single" | "Album Track";
  trackNumber?: number;
};

const r2 = "https://resources.faithchangeseverything.org";
export const artistLinks = {
  spotify: "https://open.spotify.com/artist/5VccgwHF7MJCcBhOWsM161",
  apple: "https://music.apple.com/us/artist/richard-ball/6792113130",
};

function fromRow(row: SourceRow, kind: Song["kind"], trackNumber?: number): Song {
  const [id, title, story, scripture, theme, audioFile, coverFile, lyricsPdfPath] = row;
  return {
    id, title, story, scripture, theme, kind, trackNumber,
    audioUrl: `${r2}/audio/music/listening/${audioFile}`,
    coverUrl: `${r2}/images/music-covers/square/${coverFile}`,
    lyricsUrl: `${r2}/documents/fce-music-lyrics/${lyricsPdfPath}`,
  };
}

export const singles: Song[] = (rawSingles as SourceRow[]).map(row => fromRow(row, "Single"));
export const albumTracks: Song[] = (rawTracks as SourceRow[]).map((row, index) => fromRow(row, "Album Track", index + 1));

export const musicAlbum = rawAlbum;
export const allLaunchSongs: Song[] = [...singles, ...albumTracks];
