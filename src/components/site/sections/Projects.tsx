import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { StatusBadge } from "@/components/site/StatusBadge";
import { MiniWorkflow } from "@/components/site/WorkflowDiagram";
import { projects } from "@/content/site";

export function Projects() {
  return (
    <section id="projects" className="relative border-y border-border bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Projects & Automation Solutions."
          subtitle="A closer look at the types of intelligent systems I design and develop."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={(i % 2) * 100}
              as="article"
              className="surface-card surface-card-interactive group flex flex-col p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-sm text-muted-foreground">Project {project.number}</span>
                <StatusBadge status={project.status} />
              </div>

              <MiniWorkflow steps={project.workflow} className="mt-6" />

              <p className="mt-6 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-cyan">
                {project.category}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.overview}</p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {project.features.slice(0, 4).map((f) => (
                  <li key={f} className="rounded-md bg-surface-raised px-2 py-1 text-xs text-foreground/75">
                    {f}
                  </li>
                ))}
                {project.features.length > 4 && (
                  <li className="rounded-md px-2 py-1 text-xs text-muted-foreground">
                    +{project.features.length - 4} more
                  </li>
                )}
              </ul>

              <div className="mt-auto flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-xs text-sm text-foreground/80">
                  <span className="text-muted-foreground">Value: </span>
                  {project.businessValue}
                </p>
                <Link
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-surface-raised px-4 py-2 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
                >
                  View Details
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
