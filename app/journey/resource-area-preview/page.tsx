import type { Metadata } from "next";
import { JourneyFrame } from "../components/JourneyShell";
import { ResourceAreaPreview } from "../components/ResourceArea";
import type {
  JourneyResourceReference,
  ResolvedResource,
} from "../resources/types";
import styles from "../components/ResourceArea.module.css";

export const metadata: Metadata = {
  title: "J2H Resource Area Reconciliation Preview",
  robots: {
    index: false,
    follow: false,
  },
};

const previewItems: Array<{
  reference: JourneyResourceReference;
  resource: ResolvedResource;
}> = [
  {
    reference: {
      id: "preview-music",
      type: "song",
      category: "related-song",
    },
    resource: {
      id: "preview-music",
      type: "song",
      title: "FCE Music",
      description:
        "A sample Related Song card using the current FCE music destination.",
      href: "/music",
      actionLabel: "Explore Music",
    },
  },
  {
    reference: {
      id: "preview-sermons",
      type: "sermon",
      category: "related-sermon",
    },
    resource: {
      id: "preview-sermons",
      type: "sermon",
      title: "Sermons & Messages",
      description:
        "A sample Related Sermon card using the current FCE sermons destination.",
      href: "/sermons",
      actionLabel: "Explore Sermons",
    },
  },
  {
    reference: {
      id: "preview-bible-study",
      type: "document",
      category: "bible-study",
    },
    resource: {
      id: "preview-bible-study",
      type: "document",
      title: "Character of God",
      description:
        "A sample Bible Study card using the completed Character of God series.",
      href: "/bible-studies/character-of-god",
      actionLabel: "Open Bible Study",
    },
  },
  {
    reference: {
      id: "preview-prayer",
      type: "prayer",
      category: "prayer",
    },
    resource: {
      id: "preview-prayer",
      type: "prayer",
      title: "Prayer Support",
      description:
        "A sample prayer card using the current FCE Prayer Request destination.",
      href: "/prayer",
      actionLabel: "Request Prayer",
    },
  },
];

export default function ResourceAreaPreviewPage() {
  return (
    <JourneyFrame>
      <main className={styles.previewPage}>
        <div className={styles.previewIntro}>
          <strong>Journey to Hope Resource Area</strong>
          <span>
            Reconciled Sequence 1 preview using the current Journey architecture.
          </span>
        </div>

        <aside className={styles.previewNotice}>
          This is a temporary review page. The cards below use verified current
          FCE destinations only; no legacy YouTube links have been restored.
        </aside>

        <ResourceAreaPreview
          items={previewItems}
          introduction="Contextual resources can be presented consistently at the close of a Journey step while the Journey itself references authoritative FCE resource IDs rather than duplicating link and title data."
        />
      </main>
    </JourneyFrame>
  );
}
