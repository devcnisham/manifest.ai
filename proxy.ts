// Next.js 16 calls middleware "Proxy". Authentication is also checked inside dashboard.
import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";
import { getSupabaseConfig } from "@/lib/supabase/config";
export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request });
  response.headers.set("Cache-Control", "private, no-store");
  const config = getSupabaseConfig();
  const protectedRoute = request.nextUrl.pathname.startsWith("/dashboard");
  function signInRedirect() {
    const url = request.nextUrl.clone();
    url.pathname = "/signin";
    url.search = "";
    const redirect = NextResponse.redirect(url);
    for (const cookie of response.cookies.getAll())
      redirect.cookies.set(cookie);
    redirect.headers.set("Cache-Control", "private, no-store");
    return redirect;
  }
  if (!config) return protectedRoute ? signInRedirect() : response;
  const supabase = createServerClient(config.url, config.key, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll(cookiesToSet) {
        for (const { name, value } of cookiesToSet)
          request.cookies.set(name, value);
        response = NextResponse.next({ request });
        for (const { name, value, options } of cookiesToSet)
          response.cookies.set(name, value, options);
        response.headers.set("Cache-Control", "private, no-store");
      },
    },
  });
  try {
    // Validate with the Auth server; never trust a raw session cookie.
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (protectedRoute && (!user || !user.email_confirmed_at))
      return signInRedirect();
  } catch {
    if (protectedRoute) return signInRedirect();
  }
  return response;
}
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/signin",
    "/signup",
    "/forgot-password",
    "/reset-password",
    "/auth/:path*",
  ],
};
