"use client";
import { useId, useState } from "react";
import { ArrowRight, Check, LoaderCircle, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { trackEvent } from "@/lib/analytics";
import { normalizeEmail } from "@/lib/validation";
export function WaitlistForm({ id }: { id?: string }) {
  const uid = useId();
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  async function submit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    const data = new FormData(event.currentTarget);
    const email = normalizeEmail(data.get("email"));
    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }
    setPending(true);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, idea: data.get("idea") }),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(
          result.error || "Something went wrong. Please try again.",
        );
      if (!result.duplicate) trackEvent("waitlist_signup");
      setSuccess(true);
      setMessage(
        result.duplicate
          ? "You’re already on the list."
          : "You’re on the list!",
      );
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to connect. Please try again.",
      );
    } finally {
      setPending(false);
    }
  }
  if (success)
    return (
      <div id={id} className="waitlist-success" role="status">
        <span className="success-icon">
          <Check size={24} />
        </span>
        <h3>{message}</h3>
        <p>
          We’ll email you when early access opens. Your next launch starts here.
        </p>
      </div>
    );
  return (
    <div id={id} className="waitlist-wrap">
      <form onSubmit={submit} className="waitlist-form">
        <div className="prompt-card">
          <div className="email-row">
            <Sparkles size={22} aria-hidden="true" />
            <label className="sr-only" htmlFor={`${uid}-email`}>
              Email address
            </label>
            <input
              id={`${uid}-email`}
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email to get early access"
              required
              maxLength={254}
              disabled={pending}
            />
          </div>
          <div className="prompt-card-bottom">
            <span className="enter-hint">
              <kbd>Enter</kbd> to join
            </span>
            <Button type="submit" disabled={pending}>
              {pending ? (
                <>
                  <LoaderCircle size={16} className="spin" /> Joining…
                </>
              ) : (
                <>
                  Join the waitlist <ArrowRight size={17} />
                </>
              )}
            </Button>
          </div>
        </div>
        <div className="idea-row">
          <label htmlFor={`${uid}-idea`}>
            What are you building? <span>(optional)</span>
          </label>
          <input
            id={`${uid}-idea`}
            name="idea"
            placeholder="A habit tracker, a booking app…"
            maxLength={1000}
            disabled={pending}
          />
        </div>
      </form>
      {message && (
        <p className="form-error" role="alert">
          {message}
        </p>
      )}
      <p className="form-note">
        No spam. We’ll email you when early access opens.
      </p>
    </div>
  );
}
