"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "../series-page.module.css";

type PastorIntroductionCardProps = {
  title: string;
  excerpt: string;
  imageSrc: string;
  videoEmbedUrl?: string;
  compactLayout?: boolean;
};

export default function PastorIntroductionCard({
  title,
  excerpt,
  imageSrc,
  videoEmbedUrl,
  compactLayout = false,
}: PastorIntroductionCardProps) {
  const [videoOpen, setVideoOpen] = useState(false);
  const paragraphs = excerpt.split(/\n\s*\n/).filter(Boolean);

  return (
    <section
      className={`${styles.pastorCard} ${compactLayout ? styles.pastorCardCompact : ""}`}
      aria-labelledby="pastor-series-introduction"
    >
      <div className={styles.pastorPortraitWrap}>
        <Image
          src={imageSrc}
          alt="Pastor Richard"
          width={720}
          height={720}
          className={styles.pastorPortrait}
        />
      </div>

      <div className={styles.pastorCardBody}>
        <p className={styles.cardEyebrow}>SERIES INTRODUCTION</p>
        <h2 id="pastor-series-introduction">{title}</h2>

        <div className={styles.pastorMessage}>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {videoEmbedUrl ? (
          <>
            <button
              type="button"
              className={styles.primaryButton}
              aria-expanded={videoOpen}
              aria-controls="pastor-introduction-video"
              onClick={() => setVideoOpen((open) => !open)}
            >
              {videoOpen ? "Close Introduction" : "Watch Introduction"}
              <span aria-hidden="true">{videoOpen ? "↑" : "→"}</span>
            </button>

            {videoOpen && (
              <div id="pastor-introduction-video" className={styles.videoFrameWrap}>
                <iframe
                  className={styles.videoFrame}
                  src={videoEmbedUrl}
                  title="Series introduction by Pastor Richard"
                  loading="lazy"
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                  allowFullScreen
                />
              </div>
            )}
          </>
        ) : (
          <span className={`${styles.primaryButton} ${styles.disabledButton}`} aria-disabled="true">
            Watch Introduction <span aria-hidden="true">→</span>
          </span>
        )}
      </div>
    </section>
  );
}
