"use server";

import { revalidatePath } from "next/cache";
import { completeJourneyItem, reverseJourneyItemCompletion } from "./operations";

export async function completeJourneyItemAction(contentKey: string, path: string) {
  const result = await completeJourneyItem(contentKey);
  revalidatePath(path);
  return result;
}

export async function reverseJourneyItemAction(contentKey: string, path: string) {
  const result = await reverseJourneyItemCompletion(contentKey);
  revalidatePath(path);
  return result;
}
