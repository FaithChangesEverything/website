type SupportIconName =
  | "counseling"
  | "mental-health"
  | "grief"
  | "family"
  | "recovery"
  | "bible"
  | "church";

type SupportIconProps = {
  name: SupportIconName;
  className?: string;
};

const common = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  focusable: "false",
  "aria-hidden": true,
};

export default function SupportIcon({ name, className }: SupportIconProps) {
  if (name === "counseling") {
    return (
      <svg {...common} className={className}>
        <path d="M7.8 15.8H5.2A3.2 3.2 0 0 1 2 12.6V7.7a3.2 3.2 0 0 1 3.2-3.2h7.1a3.2 3.2 0 0 1 3.2 3.2v4.9a3.2 3.2 0 0 1-3.2 3.2H10l-3.5 2.8 1.3-2.8Z" />
        <path d="M14.7 9.2h4.1A3.2 3.2 0 0 1 22 12.4v2.8a3.2 3.2 0 0 1-3.2 3.2h-.9l.9 2-2.9-2h-3.1a3.1 3.1 0 0 1-2.8-1.7" />
        <path d="M6.1 9.3h5.3M6.1 12h3.8" />
      </svg>
    );
  }

  if (name === "mental-health") {
    return (
      <svg {...common} className={className}>
        <path d="M9.5 20.2H7.7a3.4 3.4 0 0 1-3.4-3.4v-1.2a4 4 0 0 1 .4-1.7A6.7 6.7 0 0 1 9.7 3h.8a6.7 6.7 0 0 1 6.7 6.7v1.1l2.3 3.1-2.3.6v2.7a3 3 0 0 1-3 3h-1.5" />
        <path d="M10.5 8.1c-1.5-1.3-3.7.7-2.2 2.2l2.2 2.2 2.2-2.2c1.5-1.5-.7-3.5-2.2-2.2Z" />
      </svg>
    );
  }

  if (name === "grief") {
    return (
      <svg {...common} className={className}>
        <path d="M12 21s-7-4.5-7-10.1C5 7.2 7.3 5 10 5c1.1 0 2.1.4 3 1.2C13.9 5.4 14.9 5 16 5c2.7 0 5 2.2 5 5.9C21 16.5 14 21 14 21" />
        <path d="M3 14.8c1.8.2 3.4 1 4.6 2.3M21 14.8c-1.8.2-3.4 1-4.6 2.3" />
      </svg>
    );
  }

  if (name === "family") {
    return (
      <svg {...common} className={className}>
        <path d="m3 10 9-7 9 7" />
        <path d="M5.5 9.2V21h13V9.2" />
        <circle cx="9" cy="12" r="1.6" />
        <circle cx="15" cy="12" r="1.6" />
        <path d="M7.2 18.2c.4-2 1.7-3 3.4-3M16.8 18.2c-.4-2-1.7-3-3.4-3" />
      </svg>
    );
  }

  if (name === "recovery") {
    return (
      <svg {...common} className={className}>
        <path d="M6.2 15.2 10 19l7.8-8" />
        <path d="M4.5 12a7.5 7.5 0 0 1 12.8-5.3L19 8.4" />
        <path d="M19 4.5v3.9h-3.9" />
        <path d="M19.5 12A7.5 7.5 0 0 1 6.7 17.3L5 15.6" />
      </svg>
    );
  }

  if (name === "bible") {
    return (
      <svg {...common} className={className}>
        <path d="M3.5 5.3A3.3 3.3 0 0 1 6.8 2H12v18H6.8a3.3 3.3 0 0 0-3.3 2V5.3Z" />
        <path d="M20.5 5.3A3.3 3.3 0 0 0 17.2 2H12v18h5.2a3.3 3.3 0 0 1 3.3 2V5.3Z" />
        <path d="M15.2 7.2h2.6M16.5 5.9v2.6" />
      </svg>
    );
  }

  return (
    <svg {...common} className={className}>
      <path d="M4 21h16" />
      <path d="M6 21V10.5L12 6l6 4.5V21" />
      <path d="M9.2 21v-5h5.6v5" />
      <path d="M12 3v7M9.5 5.5h5" />
    </svg>
  );
}

export type { SupportIconName };
