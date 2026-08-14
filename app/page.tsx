import LandingPageClient, { type DailyAffirmation } from "./LandingPageClient";
import { createClient as createBrowserlessClient } from "@supabase/supabase-js";
import { createClient as createServerClient } from "@/utils/supabase/server";

const FALLBACK_AFFIRMATION: DailyAffirmation = {
  title: "Faith Gives Me Confidence in What I Hope For",
  affirmation: "I can walk by faith, trusting in what God has revealed even when I cannot yet see what lies ahead.",
  scripture: "Now faith is the substance of things hoped for, the evidence of things not seen.",
  scripture_reference: "Hebrews 11:1 (KJV)",
  related_url: null,
};

function getFceDate(): string {
  const previewDate = process.env.FCE_AFFIRMATION_PREVIEW_DATE;
  if (process.env.NODE_ENV !== "production" && previewDate && /^\d{4}-\d{2}-\d{2}$/.test(previewDate)) {
    return previewDate;
  }

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  if (!year || !month || !day) {
    throw new Error("Unable to determine the FCE publication date.");
  }

  return `${year}-${month}-${day}`;
}

function normalizeReference(reference: string): string {
  return /\(KJV\)\s*$/i.test(reference) ? reference : `${reference} (KJV)`;
}

async function getDailyAffirmation(): Promise<DailyAffirmation> {
  try {
    const today = getFceDate();
    const previewDate = process.env.FCE_AFFIRMATION_PREVIEW_DATE;
    const isLocalPreview =
      process.env.NODE_ENV !== "production" &&
      Boolean(previewDate) &&
      today === previewDate;

    let supabase;

    if (isLocalPreview) {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const secretKey = process.env.SUPABASE_SECRET_KEY;

      if (!supabaseUrl || !secretKey) {
        console.warn(
          "Daily affirmation preview requested, but SUPABASE_SECRET_KEY is not configured. Using fallback."
        );
        return FALLBACK_AFFIRMATION;
      }

      // Development-only server client. The secret key bypasses RLS, so it is
      // used only when NODE_ENV is not production and a preview date is set.
      // Never expose SUPABASE_SECRET_KEY through NEXT_PUBLIC_* or client code.
      supabase = createBrowserlessClient(supabaseUrl, secretKey, {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
          detectSessionInUrl: false,
        },
      });
    } else {
      // Normal production path: uses the publishable key and remains subject
      // to the daily_affirmations RLS policy.
      supabase = await createServerClient();
    }

    const { data, error } = await supabase
      .from("daily_affirmations")
      .select("title, affirmation, scripture, scripture_reference, related_url")
      .eq("publish_date", today)
      .eq("status", "Approved")
      .maybeSingle();

    if (error) {
      console.error("Daily affirmation query failed:", error.message);
      return FALLBACK_AFFIRMATION;
    }

    if (!data) {
      return FALLBACK_AFFIRMATION;
    }

    return {
      title: data.title,
      affirmation: data.affirmation,
      scripture: data.scripture,
      scripture_reference: normalizeReference(data.scripture_reference),
      related_url: data.related_url,
    };
  } catch (error) {
    console.error("Daily affirmation fallback used:", error);
    return FALLBACK_AFFIRMATION;
  }
}

export default async function Home() {
  const dailyAffirmation = await getDailyAffirmation();

  return <LandingPageClient dailyAffirmation={dailyAffirmation} />;
}
