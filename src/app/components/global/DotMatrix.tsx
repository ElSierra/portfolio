export default function DotMatrix({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`dot-matrix pointer-events-none absolute -z-10 ${className}`}
    />
  );
}
