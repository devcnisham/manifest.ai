import { AuthShell } from "@/components/auth-shell";
import { AuthForm } from "@/components/auth-form";
export const metadata = {
  title: "Sign in",
  robots: { index: false, follow: false },
};
export default async function Signin({
  searchParams,
}: {
  searchParams: Promise<{ notice?: string }>;
}) {
  const { notice } = await searchParams;
  const message =
    notice === "invalid-link"
      ? "This link is invalid or has expired. Request a new link or sign in."
      : notice === "password-updated"
        ? "Your password was updated. Sign in with your new password."
        : undefined;
  return (
    <AuthShell>
      <AuthForm mode="signin" notice={message} />
    </AuthShell>
  );
}
