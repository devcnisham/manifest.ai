"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { Button } from "./ui/button";
import { createClient } from "@/lib/supabase/client";
import { authErrorMessage } from "@/lib/auth";
import { normalizeEmail } from "@/lib/validation";
export type AuthMode =
  "signup" | "signin" | "forgot-password" | "reset-password";
const content = {
  signup: {
    title: "Your next launch starts here.",
    description: "Create your Manifest account. Early access is coming soon.",
    button: "Create account",
  },
  signin: {
    title: "Welcome back.",
    description: "Sign in to your Manifest account.",
    button: "Sign in",
  },
  "forgot-password": {
    title: "A fresh start.",
    description: "Enter your email and we’ll send you a password reset link.",
    button: "Send reset link",
  },
  "reset-password": {
    title: "Set a new password.",
    description: "Choose a strong password for your Manifest account.",
    button: "Update password",
  },
};
export function AuthForm({
  mode,
  notice,
  recoveryAllowed = true,
}: {
  mode: AuthMode;
  notice?: string;
  recoveryAllowed?: boolean;
}) {
  const copy = content[mode];
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const isReset = mode === "reset-password";
  const showPassword = mode !== "forgot-password";
  const googleEnabled = process.env.NEXT_PUBLIC_GOOGLE_AUTH_ENABLED === "true";
  async function submit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");
    const data = new FormData(event.currentTarget);
    const email = normalizeEmail(data.get("email"));
    const password = String(data.get("password") || "");
    if (!isReset && !email) {
      setError("Please enter a valid email address.");
      return;
    }
    if (showPassword && mode !== "signin" && password.length < 8) {
      setError("Use a password with at least 8 characters.");
      return;
    }
    if (isReset && password !== data.get("confirm-password")) {
      setError("Your passwords don’t match.");
      return;
    }
    const supabase = createClient();
    if (!supabase) {
      setError("Accounts aren’t available just yet. Please try again later.");
      return;
    }
    setPending(true);
    try {
      if (mode === "signup") {
        const { error: authError } = await supabase.auth.signUp({
          email: email!,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback`,
          },
        });
        if (authError) {
          setError(authErrorMessage(authError.code));
          return;
        }
        setMessage(
          "Check your inbox. If this email is eligible, you’ll receive a confirmation link to finish creating your account.",
        );
      } else if (mode === "signin") {
        const { data: authData, error: authError } =
          await supabase.auth.signInWithPassword({ email: email!, password });
        if (authError) {
          setError(authErrorMessage(authError.code));
          return;
        }
        if (!authData.user?.email_confirmed_at) {
          await supabase.auth.signOut();
          setError("Please confirm your email before signing in.");
          return;
        }
        router.replace("/dashboard");
        router.refresh();
      } else if (mode === "forgot-password") {
        const { error: authError } = await supabase.auth.resetPasswordForEmail(
          email!,
          {
            redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
          },
        );
        if (authError) {
          setError(authErrorMessage(authError.code));
          return;
        }
        setMessage(
          "If an account uses this email, you’ll receive a password reset link. Check your inbox and spam folder.",
        );
      } else {
        const { error: authError } = await supabase.auth.updateUser({
          password,
        });
        if (authError) {
          setError(authErrorMessage(authError.code));
          return;
        }
        const { error: signOutError } = await supabase.auth.signOut();
        if (signOutError) {
          router.replace("/dashboard");
          router.refresh();
          return;
        }
        router.replace("/signin?notice=password-updated");
        router.refresh();
      }
    } catch {
      setError(
        "We couldn’t connect. Please check your connection and try again.",
      );
    } finally {
      setPending(false);
    }
  }
  async function googleSignIn() {
    setError("");
    const supabase = createClient();
    if (!supabase) {
      setError("Accounts aren’t available just yet. Please try again later.");
      return;
    }
    setPending(true);
    try {
      const { error: authError } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: `${window.location.origin}/auth/callback` },
      });
      if (authError) {
        setError(authErrorMessage(authError.code));
        setPending(false);
      }
    } catch {
      setError("We couldn’t connect to Google. Please try again.");
      setPending(false);
    }
  }
  return (
    <div className="auth-card">
      <h1>{copy.title}</h1>
      <p>{copy.description}</p>
      {notice && (
        <p role="status" className="auth-message">
          {notice}
        </p>
      )}
      {isReset && !recoveryAllowed ? (
        <>
          <p className="auth-message error" role="alert">
            This reset link is missing or has expired. Request a new one to
            continue.
          </p>
          <Button asChild>
            <Link href="/forgot-password">
              Request a reset link <ArrowRight size={15} />
            </Link>
          </Button>
        </>
      ) : message ? (
        <p className="auth-message" role="status">
          {message}
        </p>
      ) : (
        <form onSubmit={submit}>
          {!isReset && (
            <div className="auth-field">
              <label htmlFor="auth-email">Email address</label>
              <input
                id="auth-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                maxLength={254}
                required
                disabled={pending}
              />
            </div>
          )}
          {showPassword && (
            <div className="auth-field">
              <label htmlFor="auth-password">
                {isReset ? "New password" : "Password"}
              </label>
              <input
                id="auth-password"
                name="password"
                type="password"
                autoComplete={
                  mode === "signin" ? "current-password" : "new-password"
                }
                minLength={mode === "signin" ? 1 : 8}
                maxLength={128}
                placeholder={
                  mode === "signin" ? "Your password" : "At least 8 characters"
                }
                required
                disabled={pending}
              />
            </div>
          )}
          {isReset && (
            <div className="auth-field">
              <label htmlFor="confirm-password">Confirm new password</label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                minLength={8}
                maxLength={128}
                required
                disabled={pending}
              />
            </div>
          )}
          {error && (
            <p className="auth-message error" role="alert">
              {error}
            </p>
          )}
          <Button type="submit" disabled={pending}>
            {pending ? (
              <>
                <LoaderCircle size={16} className="spin" /> Please wait…
              </>
            ) : (
              <>
                {copy.button}
                <ArrowRight size={15} />
              </>
            )}
          </Button>
        </form>
      )}
      {googleEnabled &&
        (mode === "signin" || mode === "signup") &&
        !message && (
          <>
            <div className="auth-divider">or</div>
            <Button
              type="button"
              variant="outline"
              disabled={pending}
              onClick={googleSignIn}
            >
              Continue with Google
            </Button>
          </>
        )}
      <div className="auth-links">
        {mode === "signin" ? (
          <>
            <Link href="/forgot-password">Forgot your password?</Link>
            <span>
              New here? <Link href="/signup">Create an account</Link>
            </span>
          </>
        ) : mode === "signup" ? (
          <span>
            Already have an account? <Link href="/signin">Sign in</Link>
          </span>
        ) : (
          <Link href="/signin">Back to sign in</Link>
        )}
        <Link href="/">Back to Manifest</Link>
      </div>
    </div>
  );
}
