import "server-only";

import { createClient } from "@supabase/supabase-js";

/**
 * Privileged Supabase client for narrowly scoped server-only operations.
 * Never import this module into Client Components or expose its key to NEXT_PUBLIC_*.
 * Prefer Supabase's modern secret key; retain legacy service_role support during migration.
 */
export function createServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serverSecret =
    process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serverSecret) {
    throw new Error("J2H server configuration is unavailable.");
  }

  return createClient(url, serverSecret, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  });
}
