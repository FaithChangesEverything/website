"use server";

import { revalidatePath } from "next/cache";

import {
  changeJourneyId,
  changeJourneyPasscode,
  deleteSavedJourney,
  resetSavedJourney,
} from "../progress/account";
import {
  accessJourney,
  createCustomJourney,
  createGeneratedJourney,
  exitJourney,
  finalizePendingJourneySession,
} from "../progress/server";

export type JourneyActionState = {
  status: "idle" | "success" | "error";
  message?: string;
  journeyId?: string;
};

function text(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value : "";
}

function checked(formData: FormData, name: string) {
  return formData.get(name) === "on";
}

function refreshJourney() {
  revalidatePath("/journey", "layout");
  revalidatePath("/journey/save-progress");
}

function logJourneyActionFailure(action: string, error: unknown) {
  console.error("[J2H_ACTION_FAILURE]", {
    action,
    errorName: error instanceof Error ? error.name : "UnknownError",
    errorMessage: error instanceof Error ? error.message : "Unknown server error",
  });
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

    return {
      status: "success",
      message: "Your Journey ID has been created. Save it somewhere safe before continuing.",
      journeyId: result.journeyId,
    };
  } catch (error) {
    logJourneyActionFailure("createGeneratedJourney", error);
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

    return {
      status: "success",
      message: "Your Journey ID has been created. Save it somewhere safe before continuing.",
      journeyId: result.journeyId,
    };
  } catch (error) {
    logJourneyActionFailure("createCustomJourney", error);
    return {
      status: "error",
      message: "Saved Journey progress is temporarily unavailable. You can still continue through Journey to Hope without saving.",
    };
  }
}

export async function acknowledgeJourneyCreationAction(): Promise<JourneyActionState> {
  try {
    const finalized = await finalizePendingJourneySession();
    if (!finalized) {
      return {
        status: "error",
        message: "Your Journey could not be activated. Please use Access My Journey with the ID and passcode you saved.",
      };
    }
    refreshJourney();
    return { status: "success", message: "Your saved Journey is now active on this device." };
  } catch (error) {
    logJourneyActionFailure("acknowledgeJourneyCreation", error);
    return {
      status: "error",
      message: "Your Journey could not be activated right now. Please use Access My Journey with the ID and passcode you saved.",
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

    refreshJourney();
    return {
      status: "success",
      message: "Your saved Journey is ready on this device.",
    };
  } catch (error) {
    logJourneyActionFailure("accessJourney", error);
    return {
      status: "error",
      message: "Saved Journey progress is temporarily unavailable. You can still continue through Journey to Hope without saving.",
    };
  }
}

export async function changeJourneyPasscodeAction(
  _previous: JourneyActionState,
  formData: FormData
): Promise<JourneyActionState> {
  const currentPasscode = text(formData, "currentPasscode");
  const newPasscode = text(formData, "newPasscode");
  const confirmPasscode = text(formData, "confirmPasscode");

  if (newPasscode !== confirmPasscode) {
    return { status: "error", message: "The new passcode entries do not match." };
  }

  try {
    const changed = await changeJourneyPasscode(currentPasscode, newPasscode);
    if (!changed) return { status: "error", message: "The passcode could not be changed. Check your current passcode and try again." };
    refreshJourney();
    return { status: "success", message: "Your passcode was changed. For security, all Journey sessions were ended. Access My Journey again with the new passcode." };
  } catch {
    return { status: "error", message: "Your passcode could not be changed right now." };
  }
}

export async function changeJourneyIdAction(
  _previous: JourneyActionState,
  formData: FormData
): Promise<JourneyActionState> {
  const newJourneyId = text(formData, "newJourneyId");
  try {
    const changed = await changeJourneyId(newJourneyId);
    if (!changed) return { status: "error", message: "The Journey ID could not be changed. Check the required format or choose a different ID." };
    refreshJourney();
    return { status: "success", message: "Your Journey ID was changed. The old ID is no longer valid, and all Journey sessions were ended. Access My Journey again using the new ID." };
  } catch {
    return { status: "error", message: "Your Journey ID could not be changed right now." };
  }
}

export async function resetJourneyAction(
  _previous: JourneyActionState,
  formData: FormData
): Promise<JourneyActionState> {
  if (text(formData, "confirmation").trim().toUpperCase() !== "RESET") {
    return { status: "error", message: "Type RESET to confirm that you want to clear your saved Journey progress." };
  }

  try {
    const reset = await resetSavedJourney();
    if (!reset) return { status: "error", message: "Your saved Journey could not be reset right now." };
    refreshJourney();
    return { status: "success", message: "Your saved Journey progress has been reset. Your Journey ID and passcode are unchanged." };
  } catch {
    return { status: "error", message: "Your saved Journey could not be reset right now." };
  }
}

export async function deleteJourneyAction(
  _previous: JourneyActionState,
  formData: FormData
): Promise<JourneyActionState> {
  if (text(formData, "confirmation").trim().toUpperCase() !== "DELETE") {
    return { status: "error", message: "Type DELETE to confirm permanent deletion of your saved Journey." };
  }

  try {
    const deleted = await deleteSavedJourney(text(formData, "passcode"));
    if (!deleted) return { status: "error", message: "The saved Journey could not be deleted. Check your passcode and try again." };
    refreshJourney();
    return { status: "success", message: "Your saved Journey has been permanently deleted from FCE's reconnectable progress system." };
  } catch {
    return { status: "error", message: "The saved Journey could not be deleted right now." };
  }
}

export async function exitJourneyAction() {
  try {
    await exitJourney();
  } finally {
    refreshJourney();
  }
}
