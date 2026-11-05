import { ImageResponse } from "next/og";
export const alt =
  "Manifest AI — From prompt to production. Your mission control for AI-built projects.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(120deg,#ffdfc5,#f8f7ee 45%,#ccecff)",
        color: "#14151e",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 25, marginBottom: 35 }}>
        Manifest AI · Early access coming soon
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: 90,
          fontWeight: 700,
          letterSpacing: -5,
          lineHeight: 1.05,
        }}
      >
        <span>From prompt</span>
        <span>to production.</span>
      </div>
      <div style={{ display: "flex", fontSize: 25, marginTop: 38 }}>
        Your AI-built project. Scoped, secure, and ready to ship.
      </div>
    </div>,
    size,
  );
}
