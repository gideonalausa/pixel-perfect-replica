import { useId } from "react";

import { cn } from "@/lib/utils";

/**
 * Brand mark: a "G" drawn as an open loop whose crossbar feeds back to the centre,
 * with a signal node at the tip: an automation that keeps running.
 * Static copies for sharing live in /public (favicon.svg, logo.svg, logo-512.png).
 */
export function Monogram({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 64 64" className={cn("size-9", className)} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="10" y1="10" x2="54" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5ee0f5" />
          <stop offset="0.55" stopColor="#3b8cff" />
          <stop offset="1" stopColor="#9a6bff" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="var(--brand-ink)" />
      <rect
        x="1"
        y="1"
        width="62"
        height="62"
        rx="15"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.08"
        strokeWidth="2"
      />
      <path
        d="M42.37 20.48 A15.5 15.5 0 1 0 47.5 32 H33"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="47.57" cy="14.88" r="3.4" fill="#5ee0f5" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Monogram />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.95rem] font-semibold tracking-tight">
          Gideon Alausa
        </span>
        <span className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
          AI Automation
        </span>
      </span>
    </span>
  );
}
