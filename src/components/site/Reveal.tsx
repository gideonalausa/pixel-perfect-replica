import { useEffect, useRef, type ElementType, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Fades content up when it scrolls into view. Content is visible in the server HTML;
 * only elements below the fold are hidden (after hydration) and revealed on scroll.
 * `immediate` plays a CSS entrance on first paint instead (for above-the-fold content).
 * Reduced motion is respected via CSS.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
  immediate = false,
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
  immediate?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || immediate || typeof IntersectionObserver === "undefined") return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) return;
    el.dataset["reveal"] = "hidden";
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset["reveal"] = "shown";
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [immediate]);

  return (
    <Tag
      ref={ref}
      className={cn(immediate && "animate-rise", className)}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
