import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MusicLibrary from "./MusicLibrary";
import { singles, albumTracks, musicAlbum, artistLinks } from "./data";
import styles from "./music.module.css";

export const metadata: Metadata = {
  title: "FCE Music Library | Faith Changes Everything",
  description:
    "Listen to original songs of grace, hope, faith and redemption. Explore the stories and Scripture behind the singles and On the Frontline for Christ album.",
};

export default function MusicPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="music-page-heading">
          {/* Approved stage-lights artwork includes its own visible title/subtitle. */}
          <h1 id="music-page-heading" className={styles.visuallyHidden}>FCE Music Library</h1>
          <p className={styles.visuallyHidden}>Original songs of grace, hope, faith and redemption.</p>
        </section>
        <MusicLibrary singles={singles} tracks={albumTracks} album={musicAlbum} artistLinks={artistLinks} />
      </main>
      <Footer />
    </>
  );
}
