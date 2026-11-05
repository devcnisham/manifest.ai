import { AuthShell } from "@/components/auth-shell";
import { AuthForm } from "@/components/auth-form";
import { createClient } from "@/lib/supabase/server";
export const metadata = {
  title: "Set a new password",
  robots: { index: false, follow: false },
};
export const dynamic = "force-dynamic";
export default async function ResetPassword() {
  const supabase = await createClient();
  let recoveryAllowed = false;
  try {
    if (supabase) {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      recoveryAllowed = !!user;
    }
  } catch {
    /* Invalid sessions show the request-new-link state. */
  }
  return (
    <AuthShell>
      <AuthForm mode="reset-password" recoveryAllowed={recoveryAllowed} />
    </AuthShell>
  );
}
