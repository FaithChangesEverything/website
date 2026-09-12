import "server-only";

import { createClient } from "@supabase/supabase-js";

const hasSupabaseUrl = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL);
const hasServiceRoleKey = Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);
const hasPublishableKey = Boolean(process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);

console.info("[J2H_CONFIG]", {
  hasSupabaseUrl,
  hasServiceRoleKey,
  hasPublishableKey,
});

/**
 * Privileged Supabase client for narrowly scoped server-only operations.
 * Never import this module into Client Components or expose its key to NEXT_PUBLIC_*.
 */
export function createServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error("J2H server configuration is unavailable.");
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  });
}
