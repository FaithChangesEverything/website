import Link from "next/link";
import fixes from "../journey-fixes.module.css";

type ResourceKind = "sermons" | "music" | "studies" | "resources";

function ResourceIcon({ kind }: { kind: ResourceKind }) {
  const common = {
    width: 60,
    height: 60,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.65,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };
  switch (kind) {
    case "sermons":
      return <svg {...common}><path d="M12 19v3"/><path d="M8 22h8"/><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="m16 4 3-2"/><path d="m17 7 4-1"/></svg>;
    case "music":
      return <svg {...common}><path d="M3 14v-3a9 9 0 0 1 18 0v3"/><path d="M3 14a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Z"/><path d="M16 14a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-5Z"/><path d="M21 19c0 2-2 3-5 3"/></svg>;
    case "studies":
      return <svg {...common}><path d="M12 7v14"/><path d="M3 18V4a2 2 0 0 1 2-2h3a4 4 0 0 1 4 4 4 4 0 0 1 4-4h3a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2h-3a4 4 0 0 0-4 4 4 4 0 0 0-4-4H5a2 2 0 0 0-2 2Z"/><path d="M6 7h3"/><path d="M15 7h3"/></svg>;
    case "resources":
      return <svg {...common}><path d="M4 6h16v14H4z"/><path d="M7 6V3h10v3"/><path d="M8 10h2v6H8z"/><path d="M12 10h2v6h-2z"/><path d="M16 10h2v6h-2z"/><path d="M3 20h18"/></svg>;
  }
}

const resources: { kind: ResourceKind; label: string; href: string }[] = [
  { kind: "sermons", label: "Sermons", href: "/sermons" },
  { kind: "music", label: "Music Library", href: "/music" },
  { kind: "studies", label: "Bible Studies", href: "/bible-studies" },
  { kind: "resources", label: "Ministry Resources", href: "/resources" },
];

export function Step5ResourceTiles() {
  return (
    <nav className={fixes.step5ResourceTiles} aria-label="Additional ministry resources">
      {resources.map(({ kind, label, href }) => (
        <Link key={kind} href={href} className={`${fixes.step5ResourceTile} ${fixes[`step5ResourceTile_${kind}`]}`} aria-label={`Explore ${label}`}>
          <span className={fixes.step5ResourceTileIcon}><ResourceIcon kind={kind} /></span>
          <span className={fixes.step5ResourceTileLabel}>{label}</span>
        </Link>
      ))}
    </nav>
  );
}
