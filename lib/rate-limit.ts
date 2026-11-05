// Basic process-local protection. Vercel instances do not share memory;
// add a shared Redis limiter or Vercel WAF rule before a high-traffic launch.
export class RateLimiter {
  private windows = new Map<string, { count: number; expires: number }>();
  constructor(
    private limit = 5,
    private windowMs = 60_000,
    private maxEntries = 10_000,
  ) {}
  check(
    key: string,
    now = Date.now(),
  ): { allowed: boolean; retryAfter: number } {
    for (const [ip, entry] of this.windows)
      if (entry.expires <= now) this.windows.delete(ip);
    let entry = this.windows.get(key);
    if (!entry) {
      // Fail closed at capacity rather than evicting active limits.
      if (this.windows.size >= this.maxEntries)
        return { allowed: false, retryAfter: 60 };
      entry = { count: 0, expires: now + this.windowMs };
      this.windows.set(key, entry);
    }
    const retryAfter = Math.max(1, Math.ceil((entry.expires - now) / 1000));
    if (entry.count >= this.limit) return { allowed: false, retryAfter };
    entry.count++;
    return { allowed: true, retryAfter: 0 };
  }
}
export const waitlistLimiter = new RateLimiter();
