export const EMAIL_MAX_LENGTH = 254;
export const IDEA_MAX_LENGTH = 1000;
export function normalizeEmail(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const email = value.trim().toLowerCase();
  if (
    email.length > EMAIL_MAX_LENGTH ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  )
    return null;
  return email;
}
export function validateWaitlist(
  value: unknown,
): { email: string; idea: string | null } | { error: string } {
  if (!value || typeof value !== "object" || Array.isArray(value))
    return { error: "Please enter your email address." };
  const { email: rawEmail, idea: rawIdea } = value as Record<string, unknown>;
  const email = normalizeEmail(rawEmail);
  if (!email) return { error: "Please enter a valid email address." };
  if (rawIdea != null && typeof rawIdea !== "string")
    return { error: "Please describe your idea using text." };
  const idea = typeof rawIdea === "string" ? rawIdea.trim() : "";
  if (idea.length > IDEA_MAX_LENGTH)
    return { error: "Please keep your idea to 1,000 characters." };
  return { email, idea: idea || null };
}
