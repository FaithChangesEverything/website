import type { Metadata } from "next";

import OnlineJournal from "./OnlineJournal";

export const metadata: Metadata = {
  title: "Online Bible Journal | Faith Changes Everything",
  description:
    "Write, save locally, print, and revisit a three-page Faith Changes Everything Bible Journal study.",
};

export default function PrintableJournalPage() {
  return <OnlineJournal />;
}
