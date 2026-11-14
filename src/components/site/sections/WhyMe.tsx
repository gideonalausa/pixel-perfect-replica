import { Handshake, Lightbulb, ShieldCheck, Wrench } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { benefits } from "@/content/site";

const icons = [Lightbulb, Wrench, ShieldCheck, Handshake];

export function WhyMe() {
  return (
    <section id="why" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Why work with me</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            More Than Just <span className="text-gradient">Connecting Apps.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Automation isn't just about connecting two applications. It's about understanding how a
            business works and building technology that makes its operations more efficient.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
            I focus on solutions that are practical, maintainable, and aligned with real business
            needs.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {benefits.map((b, i) => {
            const Icon = icons[i] ?? Lightbulb;
            return (
              <Reveal
                key={b.title}
                delay={i * 90}
                className={`surface-card surface-card-interactive p-7 ${i % 2 === 1 ? "sm:translate-y-10" : ""}`}
              >
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <div className="mt-5 flex size-11 items-center justify-center rounded-xl bg-primary/15 text-cyan">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
