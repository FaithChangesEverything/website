import "server-only";

import { createHash } from "node:crypto";

import { createServiceClient } from "@/utils/supabase/service";
import {
  isValidJourneyPasscode,
  validateJourneyId,
} from "./rules";
import { exitJourney, getCurrentJourneyUuid } from "./server";

function normalizeJourneyId(value: string) {
  return value.trim().normalize("NFKC");
}

function toByteaDigest(value: string) {
  const hex = createHash("sha256").update(value, "utf8").digest("hex");
  return `\\x${hex}`;
}

export async function changeJourneyPasscode(
  currentPasscode: string,
  newPasscode: string
) {
  if (!isValidJourneyPasscode(currentPasscode) || !isValidJourneyPasscode(newPasscode)) {
    return false;
  }

  const journey = await getCurrentJourneyUuid();
  if (!journey) return false;

  const supabase = createServiceClient();
  const { data, error } = await supabase.rpc("j2h_change_passcode", {
    p_journey: journey,
    p_current_passcode: currentPasscode,
    p_new_passcode: newPasscode,
  });

  if (error || data !== true) return false;

  // Credential changes invalidate all Journey sessions. Clear this browser too;
  // the visitor can immediately Access My Journey using the new passcode.
  await exitJourney();
  return true;
}

export async function changeJourneyId(newJourneyId: string) {
  const normalized = normalizeJourneyId(newJourneyId);
  if (!validateJourneyId(normalized).valid) return false;

  const journey = await getCurrentJourneyUuid();
  if (!journey) return false;

  const supabase = createServiceClient();
  const { data, error } = await supabase.rpc("j2h_change_journey_id", {
    p_journey: journey,
    p_new_journey_id_digest: toByteaDigest(normalized),
  });

  if (error || data !== true) return false;

  await exitJourney();
  return true;
}

export async function resetSavedJourney() {
  const journey = await getCurrentJourneyUuid();
  if (!journey) return false;

  const supabase = createServiceClient();
  const { data, error } = await supabase.rpc("j2h_reset_journey", {
    p_journey: journey,
  });

  return !error && data === true;
}

export async function deleteSavedJourney(passcode: string) {
  if (!isValidJourneyPasscode(passcode)) return false;

  const journey = await getCurrentJourneyUuid();
  if (!journey) return false;

  const supabase = createServiceClient();
  const { data, error } = await supabase.rpc("j2h_delete_journey", {
    p_journey: journey,
    p_passcode: passcode,
  });

  if (error || data !== true) return false;

  await exitJourney();
  return true;
}
