import ScriptureReference from "@/components/bible/ScriptureReference";
import { bibleBooks } from "@/lib/bible/books";

/**
 * Keep the lesson's original translation label, while the linked reader
 * displays the corresponding KJV passage.
 */
export function JourneyScriptureReference({ reference }: { reference: string }) {
  const match = reference.match(/^(.+?)\s+(\d+):\s*(\d+)(?:\s*[-–]\s*(\d+))?\s*(?:\((NIV|KJV)\))?\.?$/);
  if (!match) return <strong>{reference}</strong>;

  const [, bookName, chapterText, firstVerseText, lastVerseText] = match;
  const book = bibleBooks.find((item) => item.name.toLowerCase() === (bookName.toLowerCase() === "psalm" ? "psalms" : bookName.toLowerCase()));
  if (!book) return <strong>{reference}</strong>;

  const chapter = Number(chapterText);
  const startVerse = Number(firstVerseText);
  const endVerse = lastVerseText ? Number(lastVerseText) : startVerse;
  if (chapter < 1 || chapter > book.chapters || startVerse < 1 || endVerse < startVerse) {
    return <strong>{reference}</strong>;
  }

  return (
    <strong>
      <ScriptureReference
        book={book.slug}
        chapter={chapter}
        startVerse={startVerse}
        endVerse={endVerse}
        label={reference}
        dialogLabel={`${book.name} ${chapter}:${startVerse}${endVerse !== startVerse ? `–${endVerse}` : ""} (KJV)`}
      />
    </strong>
  );
}
