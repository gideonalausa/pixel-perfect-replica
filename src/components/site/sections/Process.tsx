import { Code2, Compass, PenTool, Rocket } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { processSteps } from "@/content/site";

const icons = [Compass, PenTool, Code2, Rocket];

export function Process() {
  return (
    <section id="process" className="relative border-y border-border bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="How I work" title="From Business Challenge to Working Automation." />

        <ol className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {/* connecting rail */}
          <div className="absolute top-7 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-cyan/50 via-primary/50 to-violet/50 lg:block" aria-hidden="true">
            <span className="absolute top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan shadow-glow animate-travel [animation-duration:6s]" />
          </div>

          {processSteps.map((step, i) => {
            const Icon = icons[i] ?? Compass;
            return (
              <Reveal key={step.number} delay={i * 110} as="li" className="relative lg:px-5">
                <div className="relative z-10 mx-0 flex size-14 items-center justify-center rounded-2xl border border-border bg-background text-primary shadow-soft lg:mx-auto">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <div className="mt-6 lg:text-center">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Step {step.number}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
