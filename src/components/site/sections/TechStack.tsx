import { ToolIcon } from "@/components/brand/ToolIcon";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { techStack } from "@/content/site";

export function TechStack() {
  return (
    <section id="stack" className="relative py-16 sm:py-24 lg:py-32">
      <div className="glow-orb top-1/3 right-0 size-96 bg-primary/15" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Tech stack"
          title="Technologies Behind My Solutions."
          subtitle="A practical toolkit chosen for reliability, flexibility, and how well it fits each business."
        />

        <div className="mt-10 grid sm:mt-16 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, gi) => (
            <Reveal key={group.category} delay={(gi % 3) * 90} className="surface-card p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-semibold">{group.category}</h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(group.tools.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <li
                    key={tool}
                    className="group/tool flex items-center gap-2.5 rounded-xl border border-border bg-background/50 py-2 pr-3.5 pl-2 transition-colors hover:border-primary/50 hover:bg-surface-raised"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-surface-raised text-muted-foreground transition-colors group-hover/tool:text-cyan">
                      <ToolIcon name={tool} className="size-4" />
                    </span>
                    <span className="text-sm whitespace-nowrap text-foreground/85">{tool}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
