import type { ProjectStatus } from "@/content/site";
import { cn } from "@/lib/utils";

const tone: Record<ProjectStatus, string> = {
  "Client Project": "border-success/40 text-success",
  Prototype: "border-cyan/40 text-cyan",
  Demonstration: "border-primary/40 text-primary",
  Concept: "border-violet/40 text-violet",
};

export function StatusBadge({ status, className }: { status: ProjectStatus; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border bg-background/60 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em]",
        tone[status],
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
