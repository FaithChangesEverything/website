const RESEND_ENDPOINT = "https://api.resend.com/emails";
const MINISTRY_INBOX = "faithchangeseverythingministry@gmail.com";

type ContactEmail = {
  name: string;
  email: string;
  reason: string;
  message: string;
};

export async function sendContactEmail(contact: ContactEmail): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_NOTIFICATION_FROM || process.env.PRAYER_NOTIFICATION_FROM;

  if (!apiKey || !from) {
    console.error("FCE contact delivery is not configured.");
    return false;
  }

  // The visitor's address is never the 'from' sender (which must be verified
  // with Resend); reply_to allows normal replies from the ministry Gmail inbox.
  const text = [
    "New Faith Changes Everything contact form message",
    "",
    "Reason: " + contact.reason,
    "Name: " + (contact.name || "Not supplied"),
    "Reply-to: " + contact.email,
    "",
    "Message:",
    contact.message,
    "",
    "The visitor supplied this message through the Contact the Ministry page.",
  ].join("\n");

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [MINISTRY_INBOX],
        reply_to: contact.email,
        subject: "FCE Contact — " + contact.reason,
        text,
      }),
      cache: "no-store",
    });
    if (!response.ok) {
      console.error("FCE contact email provider rejected the message:", response.status);
      return false;
    }
    return true;
  } catch {
    console.error("FCE contact email provider request failed.");
    return false;
  }
}
