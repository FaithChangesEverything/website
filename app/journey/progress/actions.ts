"use server";

import { revalidatePath } from "next/cache";
import { completeJourneyItem, reverseJourneyItemCompletion } from "./operations";

export async function completeJourneyItemAction(contentKey: string, path: string): Promise<void> {
  await completeJourneyItem(contentKey);
  revalidatePath(path);
}

export async function reverseJourneyItemAction(contentKey: string, path: string): Promise<void> {
  await reverseJourneyItemCompletion(contentKey);
  revalidatePath(path);
}
