export function safeAuthDestination(next: string | null) {
  return next === "/reset-password" ? "/reset-password" : "/dashboard";
}
export function authErrorMessage(code?: string) {
  switch (code) {
    case "invalid_credentials":
      return "That email and password don’t match. Please try again.";
    case "email_not_confirmed":
      return "Please confirm your email using the link in your inbox before signing in.";
    case "user_already_exists":
    case "email_exists":
      return "An account may already use this email. Try signing in or resetting your password.";
    case "weak_password":
      return "Please choose a stronger password with at least 8 characters.";
    case "same_password":
      return "Choose a password different from your current password.";
    case "over_request_rate_limit":
    case "over_email_send_rate_limit":
      return "Too many attempts. Please wait a few minutes and try again.";
    case "otp_expired":
      return "This link has expired. Please request a new one.";
    default:
      return "We couldn’t complete that request. Please try again shortly.";
  }
}
