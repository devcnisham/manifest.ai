"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, LoaderCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "./ui/button";
export function SignOut() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  async function signOut() {
    setPending(true);
    setError("");
    try {
      const supabase = createClient();
      if (!supabase) throw new Error("unavailable");
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      router.replace("/signin");
      router.refresh();
    } catch {
      setError("We couldn’t sign you out. Please try again.");
      setPending(false);
    }
  }
  return (
    <>
      <Button onClick={signOut} disabled={pending} variant="outline">
        {pending ? (
          <LoaderCircle size={16} className="spin" />
        ) : (
          <LogOut size={16} />
        )}{" "}
        {pending ? "Signing out…" : "Sign out"}
      </Button>
      {error && (
        <p className="auth-message error" role="alert">
          {error}
        </p>
      )}
    </>
  );
}
