import "server-only";

import { createHash, randomBytes, randomInt } from "node:crypto";
import { cookies } from "next/headers";

import { createServiceClient } from "@/utils/supabase/service";
import {
  JOURNEY_ID_MIN_LENGTH,
  JOURNEY_SESSION_INACTIVITY_DAYS,
} from "./rules";

const SESSION_COOKIE = "fce_j2h_session";
const GENERATED_ID_LENGTH = 12;
const ALLOWED_SYMBOLS = "!@#$%&*-_";
const UPPER = "ABCDEFGHJKLMNPQRSTUVWXYZ";
const LOWER = "abcdefghijkmnopqrstuvwxyz";
const DIGITS = "23456789";
const ALL = UPPER + LOWER + DIGITS + ALLOWED_SYMBOLS;

export type JourneyCredentialsResult =
  | { ok: true; journeyId?: string }
  | { ok: false; message: string };

function normalizeJourneyId(value: string) {
  return value.trim().normalize("NFKC");
}

function toByteaDigest(value: string) {
  const hex = createHash("sha256").update(value, "utf8").digest("hex");
  return `\\x${hex}`;
}

function sessionToken() {
  return randomBytes(32).toString("base64url");
}

function randomChar(source: string) {
  return source[randomInt(0, source.length)];
}

function shuffle(chars: string[]) {
  for (let index = chars.length - 1; index > 0; index -= 1) {
    const swap = randomInt(0, index + 1);
    [chars[index], chars[swap]] = [chars[swap], chars[index]];
  }
  return chars.join("");
}

export function validateJourneyId(value: string) {
  const id = normalizeJourneyId(value);
  if (id.length < JOURNEY_ID_MIN_LENGTH) return false;
  if (!/^[A-Za-z0-9!@#$%&*_\-]+$/.test(id)) return false;
  if (!/[A-Z]/.test(id) || !/[a-z]/.test(id)) return false;
  if ((id.match(/[0-9]/g) ?? []).length < 2) return false;
  if (!/[!@#$%&*_\-]/.test(id)) return false;
  return true;
}

export function validatePasscode(value: string) {
  return /^[0-9]{4}$/.test(value);
}

export function generateJourneyId() {
  const required = [
    randomChar(UPPER),
    randomChar(LOWER),
    randomChar(DIGITS),
    randomChar(DIGITS),
    randomChar(ALLOWED_SYMBOLS),
  ];
  while (required.length < GENERATED_ID_LENGTH) required.push(randomChar(ALL));
  return shuffle(required);
}

async function establishSession(journeyUuid: string, remember: boolean) {
  const rawToken = sessionToken();
  const tokenDigest = toByteaDigest(rawToken);
  const supabase = createServiceClient();

  const { error } = await supabase.rpc("j2h_create_session", {
    p_journey: journeyUuid,
    p_token_digest: tokenDigest,
    p_remember: remember,
  });
  if (error) throw new Error("Unable to establish Journey session.");

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, rawToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    ...(remember
      ? { maxAge: JOURNEY_SESSION_INACTIVITY_DAYS * 24 * 60 * 60 }
      : {}),
  });
}

async function createJourneyRecord(journeyId: string, passcode: string) {
  const supabase = createServiceClient();
  const digest = toByteaDigest(normalizeJourneyId(journeyId));
  const { data, error } = await supabase.rpc("j2h_create_journey", {
    p_journey_id_digest: digest,
    p_passcode: passcode,
  });
  if (error || typeof data !== "string") return null;
  return data;
}

export async function createCustomJourney(
  journeyId: string,
  passcode: string,
  remember = false
): Promise<JourneyCredentialsResult> {
  const normalized = normalizeJourneyId(journeyId);
  if (!validateJourneyId(normalized)) {
    return { ok: false, message: "That Journey ID does not meet the required format." };
  }
  if (!validatePasscode(passcode)) {
    return { ok: false, message: "Your passcode must be exactly four numbers." };
  }

  const journeyUuid = await createJourneyRecord(normalized, passcode);
  if (!journeyUuid) {
    return { ok: false, message: "That Journey ID is unavailable. Please choose another." };
  }

  await establishSession(journeyUuid, remember);
  return { ok: true, journeyId: normalized };
}

export async function createGeneratedJourney(
  passcode: string,
  remember = false
): Promise<JourneyCredentialsResult> {
  if (!validatePasscode(passcode)) {
    return { ok: false, message: "Your passcode must be exactly four numbers." };
  }

  for (let attempt = 0; attempt < 5; attempt += 1) {
    const journeyId = generateJourneyId();
    const journeyUuid = await createJourneyRecord(journeyId, passcode);
    if (!journeyUuid) continue;
    await establishSession(journeyUuid, remember);
    return { ok: true, journeyId };
  }

  return { ok: false, message: "A Journey ID could not be created right now. Please try again." };
}

export async function accessJourney(
  journeyId: string,
  passcode: string,
  remember = false
): Promise<JourneyCredentialsResult> {
  const normalized = normalizeJourneyId(journeyId);
  if (!normalized || !validatePasscode(passcode)) {
    return { ok: false, message: "The Journey ID or passcode could not be verified." };
  }

  const supabase = createServiceClient();
  const { data, error } = await supabase.rpc("j2h_verify_credentials", {
    p_journey_id_digest: toByteaDigest(normalized),
    p_passcode: passcode,
  });

  if (error || typeof data !== "string") {
    return { ok: false, message: "The Journey ID or passcode could not be verified." };
  }

  await establishSession(data, remember);
  return { ok: true };
}

export async function getCurrentJourneyUuid() {
  const cookieStore = await cookies();
  const rawToken = cookieStore.get(SESSION_COOKIE)?.value;
  if (!rawToken) return null;

  const supabase = createServiceClient();
  const { data, error } = await supabase.rpc("j2h_resolve_session", {
    p_token_digest: toByteaDigest(rawToken),
  });

  if (error || typeof data !== "string") {
    cookieStore.delete(SESSION_COOKIE);
    return null;
  }

  return data;
}

export async function exitJourney() {
  const cookieStore = await cookies();
  const rawToken = cookieStore.get(SESSION_COOKIE)?.value;
  if (rawToken) {
    const supabase = createServiceClient();
    await supabase.rpc("j2h_invalidate_session", {
      p_token_digest: toByteaDigest(rawToken),
    });
  }
  cookieStore.delete(SESSION_COOKIE);
}
