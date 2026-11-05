import { type NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { waitlistLimiter } from "@/lib/rate-limit";
import { validateWaitlist } from "@/lib/validation";
export const runtime = "nodejs";
const MAX_BODY_BYTES = 8192;
function reply(
  body: object,
  status = 200,
  headers: Record<string, string> = {},
) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
}
export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && origin !== request.nextUrl.origin)
    return reply({ error: "Please submit the form from this website." }, 403);
  if (
    !request.headers
      .get("content-type")
      ?.toLowerCase()
      .startsWith("application/json")
  )
    return reply({ error: "Please send a JSON request." }, 415);
  // Vercel overwrites x-vercel-forwarded-for. Other hosting must normalize forwarding headers.
  const forwarded = process.env.VERCEL
    ? request.headers.get("x-vercel-forwarded-for")
    : request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";
  const rate = waitlistLimiter.check(ip);
  if (!rate.allowed)
    return reply(
      { error: "A few too many attempts. Please try again in a minute." },
      429,
      { "Retry-After": String(rate.retryAfter) },
    );
  let payload: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader)
      return reply({ error: "Please enter your email address." }, 400);
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY_BYTES) {
        await reader.cancel();
        return reply({ error: "Your submission is too long." }, 413);
      }
      chunks.push(value);
    }
    payload = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return reply({ error: "Please check your submission and try again." }, 400);
  }
  const validated = validateWaitlist(payload);
  if ("error" in validated) return reply(validated, 400);
  const supabase = createAdminClient();
  if (!supabase)
    return reply(
      {
        error:
          "The waitlist is temporarily unavailable. Please try again later.",
      },
      503,
    );
  try {
    const { error } = await supabase.from("waitlist").insert(validated);
    if (error?.code === "23505")
      return reply({ success: true, duplicate: true });
    if (error)
      return reply(
        { error: "We couldn’t save your spot. Please try again shortly." },
        503,
      );
    return reply({ success: true, duplicate: false }, 201);
  } catch {
    return reply(
      { error: "We couldn’t connect. Please try again shortly." },
      503,
    );
  }
}
