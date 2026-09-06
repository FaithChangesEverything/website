const RESEND_ENDPOINT = "https://api.resend.com/emails";

function getAdminDashboardUrl() {
  if (process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}/admin/prayer-requests`;
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (siteUrl) return `${siteUrl}/admin/prayer-requests`;

  return "https://faithchangeseverything.org/admin/prayer-requests";
}

export async function sendPrayerRequestAdminNotification(requestId: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.PRAYER_NOTIFICATION_TO;
  const from = process.env.PRAYER_NOTIFICATION_FROM;

  if (!apiKey || !to || !from) {
    console.warn("Prayer notification email is not configured.");
    return { sent: false as const, reason: "not_configured" as const };
  }

  const dashboardUrl = getAdminDashboardUrl();

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": `prayer-request/${requestId}`,
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: "New FCE Prayer Request",
      text: `A new prayer request has been submitted to Faith Changes Everything.\n\nA prayer request is waiting for you in the protected FCE administration area.\n\nView Prayer Requests: ${dashboardUrl}\n\nThis notification intentionally does not include the visitor's name or prayer request text.`,
      html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#17263b"><h2 style="color:#102c50">New FCE Prayer Request</h2><p>A new prayer request has been submitted to Faith Changes Everything.</p><p>A prayer request is waiting for you in the protected FCE administration area.</p><p><a href="${dashboardUrl}" style="display:inline-block;padding:12px 18px;border-radius:999px;background:#173a63;color:#ffffff;text-decoration:none;font-weight:700">View Prayer Requests</a></p><p style="font-size:12px;color:#667085">This notification intentionally does not include the visitor's name or prayer request text.</p></div>`,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    console.error("Prayer notification email failed with status:", response.status);
    return { sent: false as const, reason: "provider_error" as const };
  }

  return { sent: true as const };
}
