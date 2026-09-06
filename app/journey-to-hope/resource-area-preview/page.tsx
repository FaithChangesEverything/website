import type { Metadata } from "next";
import ResourceArea from "../components/ResourceArea";
import type { JourneyResourceReference } from "../resources/types";

export const metadata: Metadata = {
  title: "J2H Resource Area Preview",
  robots: {
    index: false,
    follow: false,
  },
};

const previewResources: JourneyResourceReference[] = [
  { id: "ser-2026-0003", type: "sermon", category: "related-sermon" },
  { id: "ser-2026-0007", type: "sermon", category: "related-sermon" },
  { id: "vid-2026-00182", type: "video", category: "testimony" },
];

export default function ResourceAreaPreviewPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#07111f",
        color: "#ffffff",
        padding: "4rem 1rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{ marginBottom: "1rem", opacity: 0.75 }}>
          Temporary development preview — Sequence #1
        </p>
        <ResourceArea
          resources={previewResources}
          introduction="A representative set of verified Journey to Hope resources rendered through the shared Resource Area component."
        />
      </div>
    </main>
  );
}
