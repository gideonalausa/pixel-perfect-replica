import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Bot, Check, MessagesSquare, Puzzle, Radar, Users, Workflow } from "lucide-react";

import { ToolChip } from "@/components/brand/ToolIcon";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { services, type ServiceIcon } from "@/content/site";

const icons: Record<ServiceIcon, typeof Bot> = {
  voice: Bot,
  workflow: Workflow,
  chat: MessagesSquare,
  crm: Users,
  leads: Radar,
  custom: Puzzle,
};

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="glow-orb top-40 -left-40 size-96 bg-violet/15" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Solutions I Build for Businesses."
          subtitle="From intelligent AI agents to fully connected business systems, I develop solutions that help teams work more efficiently."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal
                key={service.id}
                delay={(i % 3) * 90}
                as="article"
                className="surface-card surface-card-interactive group flex flex-col p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="relative flex size-12 items-center justify-center rounded-2xl bg-brand text-primary-foreground shadow-glow">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold leading-snug tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>

                <ul className="mt-6 grid gap-2 text-sm">
                  {service.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-foreground/85">
                      <Check className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {service.tools.map((t) => (
                    <ToolChip key={t} name={t} />
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  <Link
                    to="/"
                    hash="contact"
                    search={{ service: service.title }}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-cyan"
                  >
                    Discuss This Solution
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
