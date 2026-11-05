import { AuthShell } from "@/components/auth-shell";
import { AuthForm } from "@/components/auth-form";
export const metadata = {
  title: "Reset your password",
  robots: { index: false, follow: false },
};
export default function ForgotPassword() {
  return (
    <AuthShell>
      <AuthForm mode="forgot-password" />
    </AuthShell>
  );
}
