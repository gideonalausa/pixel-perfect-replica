import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown } from "lucide-react";

import { ToolIcon } from "@/components/brand/ToolIcon";
import { HeroVisual } from "@/components/site/HeroVisual";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

const marqueeTools = [
  "n8n",
  "Make.com",
  "Zapier",
  "OpenAI",
  "Vapi",
  "Retell AI",
  "Airtable",
  "HubSpot",
  "GoHighLevel",
  "Twilio",
  "ElevenLabs",
  "Google Sheets",
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36">
      <div className="grid-backdrop absolute inset-0" aria-hidden="true" />
      <div className="glow-orb -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 bg-primary/20" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <div>
          <Reveal immediate>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cyan backdrop-blur">
              <span className="size-1.5 rounded-full bg-success" />
              Hello, I'm Gideon Alausa
            </p>
          </Reveal>
          <Reveal immediate delay={80}>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.6rem]">
              I Build <span className="text-gradient">AI Agents & Automations</span> That Make
              Businesses Run Smarter.
            </h1>
          </Reveal>
          <Reveal immediate delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
              I'm an AI Automation Developer specializing in intelligent workflows, AI voice agents,
              CRM integrations, lead generation systems, and custom business automation. I help
              businesses eliminate repetitive tasks, capture more opportunities, and build systems
              that work even when they're offline.
            </p>
          </Reveal>
          <Reveal immediate delay={220}>
            <p className="mt-5 font-mono text-sm text-foreground/80">
              Less manual work. Smarter systems. More room to grow.
            </p>
          </Reveal>
          <Reveal immediate delay={280} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <Link to="/" hash="projects">
                Explore My Projects
                <ArrowDown />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/" hash="contact">
                Let's Discuss Your Project
                <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>

        <Reveal immediate delay={200}>
          <HeroVisual />
        </Reveal>
      </div>

      {/* tool marquee */}
      <div className="relative mx-auto mt-16 max-w-7xl px-5 sm:px-8">
        <p className="text-center font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
          Building with the tools your business already uses
        </p>
        <div className="mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <ul className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
            {[...marqueeTools, ...marqueeTools].map((tool, i) => (
              <li
                key={`${tool}-${i}`}
                aria-hidden={i >= marqueeTools.length}
                className="flex items-center gap-2.5 text-muted-foreground/80"
              >
                <ToolIcon name={tool} className="size-5" />
                <span className="text-sm font-medium">{tool}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
