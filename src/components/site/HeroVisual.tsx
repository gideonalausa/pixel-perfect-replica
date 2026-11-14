import { Bot, CalendarCheck, PhoneIncoming, UserCheck } from "lucide-react";

import { ToolIcon } from "@/components/brand/ToolIcon";

const orbit = ["n8n", "OpenAI", "Vapi", "HubSpot", "Airtable", "Zapier", "Make"];

const RADIUS = 38;
const nodes = orbit.map((name, i) => {
  const angle = (i / orbit.length) * Math.PI * 2 - Math.PI / 2;
  return {
    name,
    x: 50 + Math.cos(angle) * RADIUS,
    y: 50 + Math.sin(angle) * RADIUS,
    delay: i * 0.35,
  };
});

/** Animated diagram: an AI agent at the core, orchestrating connected business tools. */
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px]">
      {/* ambient glow */}
      <div className="glow-orb inset-[18%] bg-primary/30" />
      <div className="glow-orb right-[10%] bottom-[12%] size-40 bg-violet/30" />

      {/* rings */}
      <div className="absolute inset-[12%] rounded-full border border-border" />
      <div className="absolute inset-[30%] rounded-full border border-dashed border-border" />

      {/* connections */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true">
        <defs>
          <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--cyan)" />
            <stop offset="1" stopColor="var(--violet)" />
          </linearGradient>
        </defs>
        {nodes.map((n) => (
          <line
            key={n.name}
            x1="50"
            y1="50"
            x2={n.x}
            y2={n.y}
            stroke="url(#hero-line)"
            strokeOpacity="0.55"
            strokeWidth="0.35"
            className="flow-line"
            style={{ animationDelay: `${n.delay}s` }}
          />
        ))}
      </svg>

      {/* core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute inset-0 rounded-3xl bg-primary/40 animate-pulse-ring" />
        <span
          className="absolute inset-0 rounded-3xl bg-cyan/30 animate-pulse-ring"
          style={{ animationDelay: "1.4s" }}
        />
        <div className="surface-card relative flex size-24 flex-col items-center justify-center gap-1 rounded-3xl shadow-glow sm:size-28">
          <Bot className="size-8 text-cyan sm:size-9" aria-hidden="true" />
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
            AI Agent
          </span>
        </div>
      </div>

      {/* tool nodes */}
      {nodes.map((n) => (
        <div
          key={n.name}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <div className="animate-float" style={{ animationDelay: `${n.delay}s` }}>
            <div className="surface-card flex size-12 items-center justify-center rounded-2xl text-foreground sm:size-14">
              <ToolIcon name={n.name} className="size-5 sm:size-6" />
            </div>
            <p className="mt-1.5 text-center font-mono text-[0.6rem] tracking-wide text-muted-foreground">
              {n.name}
            </p>
          </div>
        </div>
      ))}

      {/* live event cards */}
      <EventCard
        className="top-[4%] -left-2 sm:-left-8"
        icon={<PhoneIncoming className="size-3.5 text-cyan" />}
        label="Incoming call answered"
        delay="0s"
      />
      <EventCard
        className="top-[40%] -right-2 sm:-right-6"
        icon={<UserCheck className="size-3.5 text-success" />}
        label="Lead qualified → CRM"
        delay="1.2s"
      />
      <EventCard
        className="bottom-[2%] left-[6%]"
        icon={<CalendarCheck className="size-3.5 text-primary" />}
        label="Appointment booked"
        delay="2.4s"
      />
    </div>
  );
}

function EventCard({
  className,
  icon,
  label,
  delay,
}: {
  className: string;
  icon: React.ReactNode;
  label: string;
  delay: string;
}) {
  return (
    <div className={`absolute hidden sm:block ${className}`}>
      <div
        className="flex items-center gap-2 rounded-full border border-border bg-popover/85 px-3 py-1.5 text-xs shadow-soft backdrop-blur animate-float"
        style={{ animationDelay: delay }}
      >
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full rounded-full bg-success animate-pulse-ring" />
          <span className="relative inline-flex size-1.5 rounded-full bg-success" />
        </span>
        {icon}
        <span className="text-foreground/90">{label}</span>
      </div>
    </div>
  );
}
