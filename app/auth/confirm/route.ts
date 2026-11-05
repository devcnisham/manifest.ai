import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
export async function GET(request: NextRequest) {
  const token_hash = request.nextUrl.searchParams.get("token_hash");
  const type = request.nextUrl.searchParams.get("type");
  if (
    token_hash &&
    (type === "email" || type === "signup" || type === "recovery")
  ) {
    try {
      const supabase = await createClient();
      if (supabase) {
        const { error } = await supabase.auth.verifyOtp({ token_hash, type });
        if (!error)
          return NextResponse.redirect(
            new URL(
              type === "recovery" ? "/reset-password" : "/dashboard",
              request.url,
            ),
            { headers: { "Cache-Control": "private, no-store" } },
          );
      }
    } catch {
      /* Expired/invalid token has a clear destination. */
    }
  }
  return NextResponse.redirect(
    new URL("/signin?notice=invalid-link", request.url),
    { headers: { "Cache-Control": "private, no-store" } },
  );
}
