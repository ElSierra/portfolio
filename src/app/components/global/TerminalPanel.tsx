export default function TerminalPanel({
  title,
  lines,
  className = "",
}: {
  title: string;
  lines: string[];
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`terminal-card terminal-mini pointer-events-none overflow-hidden rounded-lg border border-zinc-200 bg-zinc-950 text-zinc-100 shadow-xl shadow-black/10 dark:border-zinc-800 ${className}`}
    >
      <div className="flex h-7 items-center gap-2 border-b border-white/10 px-3">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate text-[10px] text-zinc-400">{title}</span>
      </div>
      <div className="space-y-1.5 p-3 font-mono text-[11px] leading-relaxed">
        {lines.map((line, index) => (
          <p
            key={`${line}-${index}`}
            className={index === lines.length - 1 ? "terminal-cursor text-zinc-300" : "text-zinc-400"}
          >
            {index === 0 ? <span className="text-[#28c840]">$ </span> : null}
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
