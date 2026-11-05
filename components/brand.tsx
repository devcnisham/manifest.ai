import Link from "next/link";
export function Mark({ small = false }: { small?: boolean }) {
  return (
    <span
      className={`brand-mark ${small ? "brand-mark-small" : ""}`}
      aria-hidden="true"
    >
      <span />
    </span>
  );
}
export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Manifest home">
      <Mark />
      <span>Manifest</span>
    </Link>
  );
}
