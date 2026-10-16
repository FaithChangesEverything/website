"use server";

import { sendContactEmail } from "@/utils/notifications/contact";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const reasonLabels: Record<string, string> = {
  general: "General Question",
  prayer: "Prayer Request",
  help: "I Need Help Right Now",
  resources: "Bible Studies or Ministry Resources",
  technical: "Website or Technical Issue",
  other: "Something Else / Other Question",
};

async function validateTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret || !token) return false; // Fail closed, including on previews.
  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: new URLSearchParams({ secret, response: token }),
      cache: "no-store",
    });
    if (!response.ok) return false;
    const result: { success?: boolean } = await response.json();
    return result.success === true;
  } catch {
    return false;
  }
}

export async function submitContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const reason = String(formData.get("reason") ?? "");
  const message = String(formData.get("message") ?? "").trim();
  const honeypot = String(formData.get("website") ?? "");
  const captchaToken = String(formData.get("cf-turnstile-response") ?? "");

  if (honeypot) {
    // Do not deliver automated spam; give bots no extra signal.
    return { status: "success", message: "Thank you for reaching out." };
  }

  if (name.length > 100 || email.length > 180 ||
      !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) ||
      /[\r\n]/.test(email) || !Object.hasOwn(reasonLabels, reason) ||
      !message || message.length > 5000) {
    return { status: "error", message: "Please check your email address, contact reason, and message before sending." };
  }

  if (!(await validateTurnstile(captchaToken))) {
    return { status: "error", message: "Please complete the security check and try again. You can also email the ministry directly." };
  }

  try {
    const sent = await sendContactEmail({
      name,
      email,
      reason: reasonLabels[reason],
      message,
    });
    if (!sent) {
      return { status: "error", message: "Your message could not be delivered. Please try again or use our ministry email address." };
    }
  } catch {
    console.error("FCE contact message email delivery failed.");
    return { status: "error", message: "Your message could not be delivered. Please try again or use our ministry email address." };
  }

  // No Supabase write or separate visitor contact database.
  return {
    status: "success",
    message: "Thank you for reaching out! Your message was accepted for delivery to the ministry inbox.",
  };
}
