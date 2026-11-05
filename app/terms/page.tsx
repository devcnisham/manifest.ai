import Link from "next/link";
import { Brand } from "@/components/brand";
export const metadata = {
  title: "Terms of service",
  description:
    "The final Manifest AI terms of service will be published before launch.",
};
export default function Terms() {
  return (
    <main id="main" className="legal-page">
      <Brand />
      <h1>Terms of service</h1>
      <p>Final terms are coming before launch.</p>
      <p>
        Manifest AI is currently in development. The features shown on this site
        are planned or illustrative. Availability, access, and final terms will
        be confirmed before early access opens.
      </p>
      <Link href="/">← Back to Manifest</Link>
    </main>
  );
}
