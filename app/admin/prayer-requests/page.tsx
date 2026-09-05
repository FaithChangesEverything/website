import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { markPrayerRequestPrayedFor } from "@/app/prayer/actions";
import "./admin-prayer.css";

type PrayerRequest = { id:string; created_at:string; name:string|null; prayer_request:string };

export const metadata = { title: "Prayer Requests | FCE Administration" };

export default async function PrayerRequestsAdminPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/auth/login?next=/admin/prayer-requests");

  const { data: admin } = await supabase
    .from("fce_admins")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!admin) redirect("/");

  const { data, error } = await supabase
    .from("prayer_requests")
    .select("id,created_at,name,prayer_request")
    .order("created_at", { ascending: true });

  const requests = (data ?? []) as PrayerRequest[];

  return (
    <main className="admin-prayer-page">
      <header className="admin-prayer-header">
        <div><p>FAITH CHANGES EVERYTHING</p><h1>Prayer Requests</h1></div>
        <a href="/">Return to FCE Website</a>
      </header>

      <section className="admin-prayer-intro">
        <p className="admin-label">PROTECTED ADMINISTRATION AREA</p>
        <h2>Prayer Requests Awaiting Prayer</h2>
        <p>Only the authorized FCE administrator may view this page. Marking a request <strong>Prayed For</strong> permanently deletes the entire request from the system.</p>
      </section>

      {error ? (
        <p className="admin-error">Prayer requests could not be loaded.</p>
      ) : requests.length === 0 ? (
        <section className="admin-empty"><h2>No prayer requests are waiting.</h2><p>New requests will appear here after they are submitted.</p></section>
      ) : (
        <section className="admin-request-list" aria-label="Prayer requests">
          {requests.map((request) => (
            <article className="admin-request-card" key={request.id}>
              <div className="admin-request-meta">
                <strong>{request.name || "Name not provided"}</strong>
                <time dateTime={request.created_at}>{new Intl.DateTimeFormat("en-US", { dateStyle:"medium", timeStyle:"short" }).format(new Date(request.created_at))}</time>
              </div>
              <p className="admin-request-text">{request.prayer_request}</p>
              <form action={markPrayerRequestPrayedFor}>
                <input type="hidden" name="request_id" value={request.id} />
                <button className="prayed-button" type="submit">Prayed For — Permanently Delete</button>
                <p className="delete-warning">This action permanently deletes the request and cannot be undone.</p>
              </form>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
