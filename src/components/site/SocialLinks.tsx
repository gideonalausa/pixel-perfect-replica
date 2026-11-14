import { siFiverr, siGithub, siUpwork } from "simple-icons";
import { CalendarCheck, Linkedin, Mail } from "lucide-react";
import type { ReactNode } from "react";

import { links, type LinkKey } from "@/content/site";
import { cn } from "@/lib/utils";

function SiIcon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path d={path} fill="currentColor" />
    </svg>
  );
}

const meta: Record<LinkKey, { label: string; icon: ReactNode }> = {
  fiverr: { label: "Fiverr", icon: <SiIcon path={siFiverr.path} /> },
  upwork: { label: "Upwork", icon: <SiIcon path={siUpwork.path} /> },
  linkedin: { label: "LinkedIn", icon: <Linkedin className="size-4" aria-hidden="true" /> },
  github: { label: "GitHub", icon: <SiIcon path={siGithub.path} /> },
  email: { label: "Email", icon: <Mail className="size-4" aria-hidden="true" /> },
  booking: {
    label: "Book a Discovery Call",
    icon: <CalendarCheck className="size-4" aria-hidden="true" />,
  },
};

export function hrefFor(key: LinkKey, value: string) {
  return key === "email" && !value.startsWith("mailto:") ? `mailto:${value}` : value;
}

/** Only links that have a real URL in src/content/site.ts are shown. */
export function configuredLinks(
  keys: LinkKey[] = ["fiverr", "upwork", "linkedin", "github", "email", "booking"],
) {
  return keys
    .filter((k) => Boolean(links[k]))
    .map((k) => ({ key: k, href: hrefFor(k, links[k] as string), ...meta[k] }));
}

export function SocialIconRow({ className }: { className?: string }) {
  const items = configuredLinks(["linkedin", "github", "fiverr", "upwork", "email"]);
  if (items.length === 0) return null;
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {items.map((item) => (
        <a
          key={item.key}
          href={item.href}
          target={item.key === "email" ? undefined : "_blank"}
          rel="noreferrer"
          aria-label={item.label}
          className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
