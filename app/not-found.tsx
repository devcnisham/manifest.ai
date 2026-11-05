import Link from "next/link";
import { AuthShell } from "@/components/auth-shell";
import { Button } from "@/components/ui/button";
export default function NotFound() {
  return (
    <AuthShell>
      <div className="auth-card">
        <p className="section-kicker">404</p>
        <h1>A little off course.</h1>
        <p>That page doesn’t exist. Let’s get you back to your launch.</p>
        <Button asChild>
          <Link href="/">Back to Manifest</Link>
        </Button>
      </div>
    </AuthShell>
  );
}
