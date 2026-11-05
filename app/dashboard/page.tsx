import { redirect } from "next/navigation";
import { Rocket } from "lucide-react";
import { AuthShell } from "@/components/auth-shell";
import { SignOut } from "@/components/sign-out";
import { createClient } from "@/lib/supabase/server";
export const metadata = {
  title: "Your workspace",
  robots: { index: false, follow: false },
};
export const dynamic = "force-dynamic";
export default async function Dashboard() {
  const supabase = await createClient();
  if (!supabase) redirect("/signin");
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error || !user || !user.email_confirmed_at) redirect("/signin");
  return (
    <AuthShell>
      <section className="auth-card dashboard-card">
        <span className="cta-symbol">
          <Rocket size={32} />
        </span>
        <h1>
          Welcome to Manifest.
          <br />
          Early access is coming soon.
        </h1>
        <p>
          You’re signed in. We’re building a clearer path from your first idea
          to your next launch.
        </p>
        <p className="auth-message">{user.email}</p>
        <SignOut />
      </section>
    </AuthShell>
  );
}
