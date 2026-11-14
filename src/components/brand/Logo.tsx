import { cn } from "@/lib/utils";

/** "GA" monogram — the personal brand mark. */
export function Monogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={cn("size-9", className)} aria-hidden="true">
      <defs>
        <linearGradient id="ga-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--cyan)" />
          <stop offset="0.55" stopColor="var(--primary)" />
          <stop offset="1" stopColor="var(--violet)" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="11" fill="var(--surface-raised)" />
      <rect x="1" y="1" width="38" height="38" rx="11" fill="none" stroke="url(#ga-grad)" strokeOpacity="0.7" />
      <text
        x="20"
        y="26"
        textAnchor="middle"
        fontFamily="Geist, ui-sans-serif, system-ui"
        fontWeight="700"
        fontSize="16"
        letterSpacing="-0.5"
        fill="url(#ga-grad)"
      >
        GA
      </text>
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Monogram />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.95rem] font-semibold tracking-tight">Gideon Alausa</span>
        <span className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
          AI Automation
        </span>
      </span>
    </span>
  );
}
