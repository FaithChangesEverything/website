"use client";
import { useCallback, useEffect, useState } from "react";

const prefix = "fce-reading-plan-progress-v1:";
function readSaved(slug: string, total: number): number[] {
  try {
    const parsed: unknown = JSON.parse(window.localStorage.getItem(prefix + slug) ?? "[]");
    if (!Array.isArray(parsed)) return [];
    return Array.from(new Set(parsed.filter((n): n is number => Number.isSafeInteger(n) && n >= 1 && n <= total))).sort((a,b)=>a-b);
  } catch { return []; }
}
/** Browser-only, device-local completion storage. No account or server requests. */
export function useReadingProgress(slug: string, total: number) {
  const [days, setDays] = useState<number[]>([]);
  const [ready, setReady] = useState(false);
  const refresh = useCallback(() => setDays(readSaved(slug, total)), [slug,total]);
  useEffect(() => {
    refresh(); setReady(true);
    const onStorage = (event: StorageEvent) => {
      if (event.key === prefix + slug || event.key === null) refresh();
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [refresh, slug]);
  const toggle = (day: number) => {
    if (!Number.isSafeInteger(day) || day < 1 || day > total) return;
    const current = readSaved(slug,total);
    const next = current.includes(day) ? current.filter(n=>n!==day) : [...current,day].sort((a,b)=>a-b);
    try { window.localStorage.setItem(prefix+slug,JSON.stringify(next)); } catch {/* private storage may be disabled */}
    setDays(next);
  };
  const reset = () => {
    try { window.localStorage.removeItem(prefix+slug); } catch {}
    setDays([]);
  };
  return {days, ready, toggle, reset, count: days.length, percent:Math.round(days.length/total*100)};
}
export function PrivacyNotice() {
  return <aside className="fce-rp-privacy" aria-label="Your progress and privacy">
    <strong>🛡 Your Progress &amp; Your Privacy</strong>
    <p>Your completed readings are stored only in this browser on this device. No account is required, and FCE does not collect your reading-progress history on its servers.</p>
    <p>Refreshing or reopening the page will not erase saved progress. <strong>Clearing website data, using private browsing, or switching browsers or devices may cause progress to be lost.</strong></p>
    <p>We designed this approach to protect your privacy and minimize collection of personal information.</p>
  </aside>;
}
