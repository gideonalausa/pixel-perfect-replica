import { Fragment } from "react";

import { ToolIcon } from "@/components/brand/ToolIcon";
import type { WorkflowStep } from "@/content/site";
import { cn } from "@/lib/utils";

/** Miniature animated workflow used on project cards. */
export function MiniWorkflow({ steps, className }: { steps: WorkflowStep[]; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl border border-border bg-background/60 px-4 py-6", className)}>
      <div className="grid-backdrop absolute inset-0" aria-hidden="true" />
      <div className="relative flex items-start">
        {steps.map((step, i) => (
          <Fragment key={step.label}>
            <div className="flex w-14 shrink-0 flex-col items-center text-center sm:w-16">
              <div
                className={cn(
                  "flex size-10 items-center justify-center rounded-xl border bg-surface-raised text-foreground transition-colors",
                  i === 0 ? "border-cyan/50 text-cyan" : "border-border",
                  i === steps.length - 1 && "border-primary/50 text-primary",
                )}
              >
                <ToolIcon name={step.tool ?? step.label} className="size-4.5" />
              </div>
              <span className="mt-2 text-[0.65rem] leading-tight text-muted-foreground">{step.label}</span>
            </div>
            {i < steps.length - 1 && <Connector delay={i * 0.6} />}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Connector({ delay }: { delay: number }) {
  return (
    <div className="relative mt-5 h-px flex-1 bg-gradient-to-r from-border via-primary/40 to-border">
      <span
        className="absolute top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan shadow-glow animate-travel"
        style={{ animationDelay: `${delay}s` }}
      />
    </div>
  );
}

/** Full workflow used on case-study pages. Horizontal on desktop, vertical on mobile. */
export function FullWorkflow({ steps }: { steps: WorkflowStep[] }) {
  return (
    <ol className="relative grid gap-4 md:grid-cols-4 md:gap-0">
      {steps.map((step, i) => (
        <li key={step.label} className="relative flex gap-4 md:flex-col md:items-center md:px-3 md:text-center">
          {/* connectors */}
          {i < steps.length - 1 && (
            <>
              <div className="absolute top-12 left-6 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary/50 to-border md:hidden" />
              <div className="absolute top-6 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-primary/50 via-cyan/40 to-border md:block">
                <span
                  className="absolute top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan shadow-glow animate-travel"
                  style={{ animationDelay: `${i * 0.7}s` }}
                />
              </div>
            </>
          )}
          <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface-raised text-foreground shadow-soft">
            <ToolIcon name={step.tool ?? step.label} className="size-5" />
          </div>
          <div className="pb-4 md:mt-4 md:pb-0">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-cyan">Step {i + 1}</p>
            <p className="mt-1 font-display font-semibold">{step.label}</p>
            <p className="mt-1 text-sm text-muted-foreground">{step.detail}</p>
            {step.tool && <p className="mt-2 font-mono text-xs text-foreground/60">{step.tool}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
