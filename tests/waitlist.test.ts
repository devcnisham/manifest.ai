import assert from "node:assert/strict";
import test from "node:test";
import { normalizeEmail, validateWaitlist } from "../lib/validation";
import { RateLimiter } from "../lib/rate-limit";
test("normalizes email casing and outer whitespace", () => {
  assert.equal(normalizeEmail("  Builder@Example.COM "), "builder@example.com");
});
test("rejects missing, malformed, and oversized emails", () => {
  for (const input of [
    null,
    22,
    "",
    "a@b",
    "a b@site.com",
    "x@@site.com",
    "x".repeat(250) + "@a.com",
  ])
    assert.equal(normalizeEmail(input), null);
});
test("validates and bounds optional ideas without stripping project text", () => {
  assert.deepEqual(
    validateWaitlist({ email: "A@example.com", idea: " Build a thing " }),
    { email: "a@example.com", idea: "Build a thing" },
  );
  assert.deepEqual(validateWaitlist({ email: "a@example.com", idea: " " }), {
    email: "a@example.com",
    idea: null,
  });
  for (const input of [
    null,
    [],
    { email: "a@example.com", idea: {} },
    { email: "a@example.com", idea: "x".repeat(1001) },
  ])
    assert.ok("error" in validateWaitlist(input));
});
test("blocks repeated attempts, isolates IPs, and resets after expiry", () => {
  const limiter = new RateLimiter(2, 60_000);
  assert.equal(limiter.check("one", 0).allowed, true);
  assert.equal(limiter.check("one", 10).allowed, true);
  assert.deepEqual(limiter.check("one", 20), {
    allowed: false,
    retryAfter: 60,
  });
  assert.equal(limiter.check("two", 20).allowed, true);
  assert.equal(limiter.check("one", 60_000).allowed, true);
});
test("bounds limiter memory and fails closed until expired entries clear", () => {
  const limiter = new RateLimiter(2, 60_000, 1);
  assert.equal(limiter.check("one", 0).allowed, true);
  assert.equal(limiter.check("two", 0).allowed, false);
  assert.equal(limiter.check("two", 60_000).allowed, true);
});
