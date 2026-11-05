// Intentionally a no-op. Add a consent-aware analytics provider here.
// Never send the email or project idea as event properties.
export function trackEvent(event: "waitlist_signup"): void {
  void event;
}
