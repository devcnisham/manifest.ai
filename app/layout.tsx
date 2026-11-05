import type { Metadata } from "next";
import Script from "next/script";
import { siteUrl, siteDescription } from "@/lib/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Manifest AI — From prompt to production.",
    template: "%s | Manifest AI",
  },
  description: siteDescription,
  applicationName: "Manifest AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Manifest AI",
    title: "Manifest AI — From prompt to production.",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Manifest AI — From prompt to production.",
    description: siteDescription,
    images: ["/opengraph-image"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
        >{`try{var t=localStorage.getItem('manifest-theme');document.documentElement.dataset.theme=t==='dark'||t==='light'?t:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}catch{document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}`}</Script>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
