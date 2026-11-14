import { Quote } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { testimonials } from "@/content/site";

/** Hidden until genuine testimonials are added in src/content/site.ts. */
export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section id="testimonials" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Testimonials" title="What Clients Say." />
        <div className="mt-10 grid sm:mt-16 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 90}
              as="figure"
              className="surface-card flex flex-col p-7"
            >
              <Quote className="size-6 text-cyan" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-foreground/90">"{t.quote}"</blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold">{t.name}</span>
                <span className="text-muted-foreground">
                  {" "}
                  · {t.role}
                  {t.company ? `, ${t.company}` : ""}
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
