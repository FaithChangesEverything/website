"use server";

import { revalidatePath } from "next/cache";

import {
  accessJourney,
  createCustomJourney,
  createGeneratedJourney,
  exitJourney,
} from "../progress/server";

export type JourneyActionState = {
  status: "idle" | "success" | "error";
  message?: string;
  journeyId?: string;
};

export const initialJourneyActionState: JourneyActionState = { status: "idle" };

function text(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value : "";
}

function checked(formData: FormData, name: string) {
  return formData.get(name) === "on";
}

export async function createGeneratedJourneyAction(
  _previous: JourneyActionState,
  formData: FormData
): Promise<JourneyActionState> {
  try {
    const result = await createGeneratedJourney(
      text(formData, "passcode"),
      checked(formData, "remember")
    );
    if (!result.ok) return { status: "error", message: result.message };

    revalidatePath("/journey", "layout");
    return {
      status: "success",
      message: "Your Journey ID has been created. Save it somewhere safe before continuing.",
      journeyId: result.journeyId,
    };
  } catch {
    return {
      status: "error",
      message: "Saved Journey progress is temporarily unavailable. You can still continue through Journey to Hope without saving.",
    };
  }
}

export async function createCustomJourneyAction(
  _previous: JourneyActionState,
  formData: FormData
): Promise<JourneyActionState> {
  try {
    const result = await createCustomJourney(
      text(formData, "journeyId"),
      text(formData, "passcode"),
      checked(formData, "remember")
    );
    if (!result.ok) return { status: "error", message: result.message };

    revalidatePath("/journey", "layout");
    return {
      status: "success",
      message: "Your Journey ID has been created. Save it somewhere safe before continuing.",
      journeyId: result.journeyId,
    };
  } catch {
    return {
      status: "error",
      message: "Saved Journey progress is temporarily unavailable. You can still continue through Journey to Hope without saving.",
    };
  }
}

export async function accessJourneyAction(
  _previous: JourneyActionState,
  formData: FormData
): Promise<JourneyActionState> {
  try {
    const result = await accessJourney(
      text(formData, "journeyId"),
      text(formData, "passcode"),
      checked(formData, "remember")
    );
    if (!result.ok) return { status: "error", message: result.message };

    revalidatePath("/journey", "layout");
    return {
      status: "success",
      message: "Your saved Journey is ready on this device.",
    };
  } catch {
    return {
      status: "error",
      message: "Saved Journey progress is temporarily unavailable. You can still continue through Journey to Hope without saving.",
    };
  }
}

export async function exitJourneyAction() {
  try {
    await exitJourney();
  } finally {
    revalidatePath("/journey", "layout");
  }
}
