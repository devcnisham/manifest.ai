import { Brand } from "./brand";
export function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <main id="main" className="simple-page">
      <Brand />
      {children}
      <p className="simple-footer">
        From prompt to production. · <a href="/privacy">Privacy</a> ·{" "}
        <a href="/terms">Terms</a>
      </p>
    </main>
  );
}
