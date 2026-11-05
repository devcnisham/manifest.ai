import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { safeAuthDestination } from "@/lib/auth";
export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const destination = safeAuthDestination(
    request.nextUrl.searchParams.get("next"),
  );
  if (code) {
    try {
      const supabase = await createClient();
      if (supabase) {
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (!error)
          return NextResponse.redirect(new URL(destination, request.url), {
            headers: { "Cache-Control": "private, no-store" },
          });
      }
    } catch {
      /* Failed exchange goes to a recoverable error state. */
    }
  }
  return NextResponse.redirect(
    new URL("/signin?notice=invalid-link", request.url),
    { headers: { "Cache-Control": "private, no-store" } },
  );
}
