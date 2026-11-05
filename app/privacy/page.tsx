import Link from "next/link";
import { Brand } from "@/components/brand";
export const metadata = {
  title: "Privacy policy",
  description:
    "The final Manifest AI privacy policy will be published before launch.",
};
export default function Privacy() {
  return (
    <main id="main" className="legal-page">
      <Brand />
      <h1>Privacy policy</h1>
      <p>The final privacy policy is coming before launch.</p>
      <p>
        Manifest AI is in pre-launch development. We’ll publish details about
        data handling, code access, retention, and your privacy choices before
        early access opens.
      </p>
      <p>
        Please avoid sharing confidential information in the optional “What are
        you building?” field.
      </p>
      <Link href="/">← Back to Manifest</Link>
    </main>
  );
}
