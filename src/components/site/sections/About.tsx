import { Briefcase, Headset, ShieldCheck } from "lucide-react";

import { Monogram } from "@/components/brand/Logo";
import { Reveal } from "@/components/site/Reveal";
import { profile } from "@/content/site";

const principles = [
  {
    icon: Briefcase,
    title: "Business-focused solutions",
    text: "Every build starts from a real operational problem.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable, scalable automation",
    text: "Error handling and monitoring built in from day one.",
  },
  {
    icon: Headset,
    title: "Clear communication and support",
    text: "Plain-language updates and a proper handover.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <Portrait />
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">About me</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Building Smarter Systems for Modern Businesses.
            </h2>
          </Reveal>
          <Reveal
            delay={100}
            className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]"
          >
            <p>
              I'm Gideon, an AI automation specialist passionate about helping businesses simplify
              operations through technology.
            </p>
            <p>
              My work focuses on connecting systems, developing intelligent AI agents, and building
              workflows that reduce unnecessary manual effort.
            </p>
            <p>
              I work with tools like Make.com, n8n, Zapier, OpenAI, Vapi, Retell AI, and modern CRM
              platforms to develop practical solutions for real business challenges.
            </p>
            <p className="text-foreground/90">
              Whether it's an AI receptionist handling customer calls, a lead generation system
              identifying potential customers, or a complete workflow connecting multiple platforms,
              my approach remains the same: understand the business, identify the bottlenecks, and
              build a system that solves them.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={150 + i * 80} className="surface-card p-5">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <p.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-[0.95rem] font-semibold leading-snug">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Portrait() {
  return (
    <div className="relative mx-auto max-w-xs sm:max-w-sm lg:max-w-md">
      <div className="glow-orb inset-10 bg-primary/25" aria-hidden="true" />
      <div className="surface-card relative aspect-[4/5] overflow-hidden rounded-[2rem] p-2">
        {profile.portraitUrl ? (
          <img
            src={profile.portraitUrl}
            alt={`Portrait of ${profile.name}`}
            width={960}
            height={1200}
            className="size-full rounded-[1.6rem] object-cover object-top"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="relative flex size-full flex-col items-center justify-center overflow-hidden rounded-[1.6rem] bg-surface">
            <div className="grid-backdrop absolute inset-0" aria-hidden="true" />
            <Monogram className="relative size-28" />
            <p className="relative mt-6 font-display text-xl font-semibold">{profile.name}</p>
            <p className="relative mt-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {profile.role}
            </p>
          </div>
        )}
      </div>
      <div className="absolute right-2 -bottom-5 rounded-2xl border border-border bg-popover/90 px-4 py-3 shadow-soft backdrop-blur sm:-right-8">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
          Focus
        </p>
        <p className="mt-0.5 text-sm font-medium">AI agents · Workflows · CRM</p>
      </div>
    </div>
  );
}
