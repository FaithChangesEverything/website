"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export type PrayerFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitPrayerRequest(
  _previousState: PrayerFormState,
  formData: FormData,
): Promise<PrayerFormState> {
  const supabase = await createClient();
  const rawName = String(formData.get("name") ?? "").trim();
  const prayerRequest = String(formData.get("prayer_request") ?? "").trim();
  const acknowledged = formData.get("acknowledgment") === "on";

  if (!acknowledged) {
    return { status: "error", message: "Please read and accept the acknowledgment before submitting your prayer request." };
  }

  if (!prayerRequest || prayerRequest.length > 10000) {
    return { status: "error", message: "Please enter a prayer request of 10,000 characters or fewer." };
  }

  if (rawName.length > 100) {
    return { status: "error", message: "Please keep the optional name to 100 characters or fewer." };
  }

  const { error } = await supabase.from("prayer_requests").insert({
    name: rawName || null,
    prayer_request: prayerRequest,
    status: "new",
    prayed_at: null,
  });

  if (error) {
    console.error("Prayer request submission failed:", error.code);
    return { status: "error", message: "We were unable to submit your prayer request. Please try again." };
  }

  return {
    status: "success",
    message: "Your prayer request has been received. Thank you for trusting Faith Changes Everything to pray with you.",
  };
}

export async function markPrayerRequestPrayedFor(formData: FormData) {
  const supabase = await createClient();
  const requestId = String(formData.get("request_id") ?? "");

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login?next=/admin/prayer-requests");

  const { data: admin } = await supabase
    .from("fce_admins")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!admin) redirect("/");

  if (requestId) {
    const { error } = await supabase.from("prayer_requests").delete().eq("id", requestId);
    if (error) throw new Error("Unable to permanently delete the prayer request.");
  }

  revalidatePath("/admin/prayer-requests");
}
