"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { Sermon } from "./data";
import { streamBase } from "./data";
import styles from "./sermons.module.css";

type Props = { sermons: Sermon[] };

const seriesOptions = [
  { value: "all", label: "All sermons" },
  { value: "Knowing the Heart of God", label: "Knowing the Heart of God" },
  { value: "What Remains", label: "What Remains" },
  { value: "Characteristics of Christ", label: "Characteristics of Christ" },
  { value: "standalone", label: "Standalone sermons" },
  { value: "Testimony", label: "Testimony" },
];

function matchesSeries(sermon: Sermon, choice: string) {
  if (choice === "all") return true;
  if (choice === "standalone") return sermon.series === null;
  return sermon.series === choice;
}

export default function SermonLibrary({ sermons }: Props) {
  const [search, setSearch] = useState("");
  const [series, setSeries] = useState("all");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Visiting a Journey to Hope sermon link should always reveal its card.
    const revealHash = () => {
      const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      if (!id || !sermons.some((sermon) => sermon.slug === id)) return;
      setSeries("all");
      setSearch("");
      setShowAll(true);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: "center", behavior: "auto" });
      });
    };
    revealHash();
    window.addEventListener("hashchange", revealHash);
    return () => window.removeEventListener("hashchange", revealHash);
  }, [sermons]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    const found = sermons.filter((sermon) => {
      if (!matchesSeries(sermon, series)) return false;
      if (!query) return true;
      return [sermon.title, sermon.description, sermon.scripture, sermon.series ?? ""]
        .some((text) => text.toLowerCase().includes(query));
    });
    // Keep three-part series together and their messages in series order.
    if (series === "all" && !query) {
      return [...found].sort((a, b) => {
        const rank = (s: Sermon) => s.series === "Knowing the Heart of God" ? 0 :
          s.series === "What Remains" ? 1 : s.series === "Characteristics of Christ" ? 2 : 3;
        return rank(a) - rank(b) || (
          a.series && b.series && a.series === b.series
            ? (a.part ?? 0) - (b.part ?? 0)
            : a.title.localeCompare(b.title)
        );
      });
    }
    return found;
  }, [sermons, search, series]);

  const visible = !showAll && search.trim() === "" && series === "all"
    ? filtered.slice(0, 9)
    : filtered;

  function resetFilters() {
    setSearch("");
    setSeries("all");
    setShowAll(false);
    setActiveVideo(null);
  }

  return (
    <section className={styles.library} aria-labelledby="browse-sermons-heading">
      <div className={styles.libraryHeader}>
        <div>
          <p className={styles.eyebrow}>LISTEN, WATCH, AND GROW</p>
          <h2 id="browse-sermons-heading">Explore the Messages</h2>
          <p>Each message has its own Scripture focus. Written sermons open in a new tab so you can return to your place here.</p>
        </div>
      </div>

      <div className={styles.controls}>
        <label className={styles.searchLabel} htmlFor="sermon-search">
          Search messages
          <input id="sermon-search" type="search" placeholder="Search title, Scripture, or topic"
            value={search} onChange={(e) => { setSearch(e.target.value); setShowAll(true); }} />
        </label>
        <label className={styles.seriesLabel} htmlFor="sermon-series">
          Filter by series
          <select id="sermon-series" value={series} onChange={(e) => { setSeries(e.target.value); setShowAll(true); }}>
            {seriesOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </label>
        <div className={styles.resultCount} role="status" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "message" : "messages"}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className={styles.empty}>
          <h3>No matching sermons</h3>
          <p>Try another phrase or choose a different series.</p>
          <button type="button" onClick={resetFilters}>Clear filters</button>
        </div>
      ) : (
        <>
          <div className={styles.grid}>
            {visible.map((sermon) => {
              const opened = activeVideo === sermon.id;
              const hasPdf = Boolean(sermon.pdf);
              return (
                <article className={styles.card} key={sermon.id} id={sermon.slug}
                  aria-labelledby={"heading-" + sermon.slug}>
                  <div className={styles.cardImage}>
                    <Image src={sermon.image} alt={"Artwork for " + sermon.title} fill
                      sizes="(max-width: 680px) 100vw, (max-width: 1050px) 50vw, 33vw" />
                  </div>
                  <div className={styles.cardBody}>
                    <p className={styles.category}>
                      {sermon.series ?? "FCE Sermon"}
                      {sermon.part ? " • Part " + sermon.part : ""}
                    </p>
                    <h3 id={"heading-" + sermon.slug}>{sermon.title}</h3>
                    <p className={styles.attribution}>Pastor Richard{sermon.series === "Testimony" ? " • Guest testimony" : ""}</p>
                    <p className={styles.scripture}>{sermon.scripture}</p>
                    <p className={styles.description}>{sermon.description}</p>
                    <div className={styles.actions}>
                      <button className={styles.watch} type="button"
                        aria-expanded={opened}
                        aria-controls={"player-" + sermon.slug}
                        onClick={() => setActiveVideo(opened ? null : sermon.id)}>
                        {opened ? "Close Video" : "▶ Watch Video"}
                      </button>
                      {hasPdf && (
                        <a className={styles.read} href={sermon.pdf!} target="_blank" rel="noopener noreferrer"
                          aria-label={"Read " + sermon.title + " PDF in a new tab"}>
                          Read Sermon (PDF) <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                    {opened && (
                      <div className={styles.player} id={"player-" + sermon.slug}>
                        <iframe
                          title={"Watch " + sermon.title}
                          src={streamBase + "/" + sermon.videoId + "/iframe"}
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="strict-origin-when-cross-origin"
                        />
                        <p>Close this video to continue exploring the library.</p>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
          {series === "all" && search.trim() === "" && (
            <div className={styles.more}>
              <button type="button" onClick={() => setShowAll((value) => !value)}>
                {showAll ? "Show Fewer Sermons" : "Show All " + sermons.length + " Sermons"}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
