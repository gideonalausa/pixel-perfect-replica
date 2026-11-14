import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Target, Lightbulb, TrendingUp } from "lucide-react";

import { ToolChip } from "@/components/brand/ToolIcon";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import { StatusBadge } from "@/components/site/StatusBadge";
import { FullWorkflow } from "@/components/site/WorkflowDiagram";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const index = projects.findIndex((p) => p.slug === params.slug);
    const project = projects[index];
    if (!project) throw notFound();
    const next = projects[(index + 1) % projects.length] ?? project;
    return { project, next };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project unavailable — Gideon Alausa" }, { name: "robots", content: "noindex" }] };
    }
    const { project } = loaderData;
    const title = `${project.title} — Case Study | Gideon Alausa`;
    return {
      meta: [
        { title },
        { name: "description", content: project.overview },
        { property: "og:title", content: title },
        { property: "og:description", content: project.overview },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: project.overview },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: CaseStudy,
});

function CaseStudy() {
  const { project, next } = Route.useLoaderData();

  return (
    <>
      <Header />
      <main>
        {/* Intro */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36">
          <div className="grid-backdrop absolute inset-0" aria-hidden="true" />
          <div className="glow-orb -top-32 left-1/2 h-96 w-[640px] -translate-x-1/2 bg-primary/20" aria-hidden="true" />
          <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
            <Link
              to="/"
              hash="projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" /> All projects
            </Link>
            <Reveal immediate className="mt-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-sm text-muted-foreground">Project {project.number}</span>
                <StatusBadge status={project.status} />
              </div>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-cyan">{project.category}</p>
              <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">{project.overview}</p>
              <div className="mt-8 flex flex-wrap gap-1.5">
                {project.technology.map((t) => (
                  <ToolChip key={t} name={t} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Challenge / Solution */}
        <section className="mx-auto grid max-w-5xl gap-5 px-5 sm:px-8 md:grid-cols-2">
          <Reveal className="surface-card p-7 sm:p-8">
            <Target className="size-6 text-cyan" aria-hidden="true" />
            <h2 className="mt-4 font-display text-xl font-semibold">The business challenge</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{project.challenge}</p>
          </Reveal>
          <Reveal delay={100} className="surface-card p-7 sm:p-8">
            <Lightbulb className="size-6 text-primary" aria-hidden="true" />
            <h2 className="mt-4 font-display text-xl font-semibold">
              {project.status === "Client Project" ? "The implemented solution" : "The proposed solution"}
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{project.solution}</p>
          </Reveal>
        </section>

        {/* Workflow */}
        <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <Reveal>
            <p className="eyebrow">Automation workflow</p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">How the system flows</h2>
          </Reveal>
          <Reveal delay={100} className="surface-card mt-10 p-6 sm:p-10">
            <FullWorkflow steps={project.workflow} />
          </Reveal>
        </section>

        {/* Features + stack */}
        <section className="mx-auto grid max-w-5xl gap-12 px-5 sm:px-8 md:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <p className="eyebrow">Main features</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Technology stack</p>
            <ul className="mt-6 grid gap-2">
              {project.technology.map((t) => (
                <li key={t} className="flex items-center justify-between rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm">
                  {t}
                  <span className="size-1.5 rounded-full bg-primary" />
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Benefits */}
        <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <Reveal className="surface-card p-7 sm:p-10">
            <TrendingUp className="size-6 text-success" aria-hidden="true" />
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">Business benefits</h2>
            <p className="mt-3 text-lg text-foreground/85">{project.businessValue}</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {project.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan" />
                  {b}
                </li>
              ))}
            </ul>
            {project.results.length > 0 && (
              <div className="mt-10 border-t border-border pt-8">
                <p className="eyebrow">Results</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.results.map((r) => (
                    <li key={r} className="rounded-xl bg-surface-raised px-4 py-3 text-sm">{r}</li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>
        </section>

        {/* Media (optional) */}
        {(project.demoVideoUrl || project.screenshots.length > 0) && (
          <section className="mx-auto max-w-5xl px-5 pb-20 sm:px-8">
            <Reveal>
              <p className="eyebrow">Screenshots & demo</p>
            </Reveal>
            {project.demoVideoUrl && (
              <Reveal className="surface-card mt-6 overflow-hidden p-2">
                {project.demoVideoUrl.endsWith(".mp4") ? (
                  <video src={project.demoVideoUrl} controls className="aspect-video w-full rounded-xl" />
                ) : (
                  <iframe
                    src={project.demoVideoUrl}
                    title={`${project.title} demo`}
                    className="aspect-video w-full rounded-xl"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </Reveal>
            )}
            {project.screenshots.length > 0 && (
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {project.screenshots.map((s) => (
                  <Reveal key={s.src} as="figure" className="surface-card overflow-hidden p-2">
                    <img src={s.src} alt={s.caption} loading="lazy" className="w-full rounded-xl" />
                    <figcaption className="px-2 py-3 text-sm text-muted-foreground">{s.caption}</figcaption>
                  </Reveal>
                ))}
              </div>
            )}
          </section>
        )}

        {/* CTA */}
        <section className="px-5 pb-12 sm:px-8">
          <Reveal className="bg-cta relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-border px-6 py-14 text-center sm:px-12">
            <div className="grid-backdrop absolute inset-0 opacity-70" aria-hidden="true" />
            <div className="relative">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Need a solution like this for your business?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-foreground/80">
                Let's talk about your processes and explore how a similar system could work for you.
              </p>
              <Button asChild variant="hero" size="xl" className="mt-8">
                <Link to="/" hash="contact" search={{ service: project.inquiryService }}>
                  Discuss a Similar Project <ArrowRight />
                </Link>
              </Button>
            </div>
          </Reveal>
        </section>

        {/* Next */}
        <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="surface-card surface-card-interactive group flex items-center justify-between gap-6 p-6 sm:p-8"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Next project</p>
              <p className="mt-2 font-display text-lg font-semibold sm:text-xl">{next.title}</p>
            </div>
            <ArrowRight className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ProjectNotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] items-center justify-center px-5 pt-16">
        <div className="text-center">
          <p className="eyebrow">Not found</p>
          <h1 className="mt-4 font-display text-3xl font-semibold">This project doesn't exist.</h1>
          <Button asChild variant="hero" size="pill" className="mt-8">
            <Link to="/" hash="projects">See all projects</Link>
          </Button>
        </div>
      </main>
    </>
  );
}
