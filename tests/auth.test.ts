import assert from "node:assert/strict";
import test from "node:test";
import { safeAuthDestination, authErrorMessage } from "../lib/auth";
test("callback destinations reject external and unexpected redirects", () => {
  for (const path of [
    null,
    "//evil.example",
    "https://evil.example",
    "/\\evil.example",
    "/api/waitlist",
    "/dashboard?external=true",
  ])
    assert.equal(safeAuthDestination(path), "/dashboard");
  assert.equal(safeAuthDestination("/reset-password"), "/reset-password");
});
test("authentication failures give safe actionable messages", () => {
  assert.match(authErrorMessage("invalid_credentials"), /don’t match/);
  assert.match(authErrorMessage("email_not_confirmed"), /confirm your email/);
  assert.match(authErrorMessage("over_request_rate_limit"), /wait/);
  assert.equal(
    authErrorMessage("unexpected_backend_details"),
    authErrorMessage(),
  );
});
