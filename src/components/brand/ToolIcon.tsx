import {
  siAirtable,
  siChartdotjs,
  siClaude,
  siCss,
  siElevenlabs,
  siGmail,
  siGoogleappsscript,
  siGooglecalendar,
  siGooglesheets,
  siHtml5,
  siHubspot,
  siIntercom,
  siJavascript,
  siMake,
  siN8n,
  siNotion,
  siWhatsapp,
  siWordpress,
  siZapier,
  siZoho,
} from "simple-icons";
import { Braces, CalendarClock, FileText, Workflow, Webhook, Database, Phone } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

import { extraIcons, extraShapes } from "@/components/brand/extra-icons";
import { cn } from "@/lib/utils";

type SimpleIcon = { path: string; title: string };

const brandIcons: Record<string, SimpleIcon> = {
  airtable: siAirtable,
  "chart.js": siChartdotjs,
  claude: siClaude,
  css: siCss,
  elevenlabs: siElevenlabs,
  gmail: siGmail,
  "google apps script": siGoogleappsscript,
  "google calendar": siGooglecalendar,
  "google sheets": siGooglesheets,
  html: siHtml5,
  hubspot: siHubspot,
  intercom: siIntercom,
  javascript: siJavascript,
  make: siMake,
  "make.com": siMake,
  n8n: siN8n,
  notion: siNotion,
  openai: extraIcons.openai,
  slack: extraIcons.slack,
  twilio: extraIcons.twilio,
  "whatsapp business api": siWhatsapp,
  whatsapp: siWhatsapp,
  wordpress: siWordpress,
  zapier: siZapier,
  zoho: siZoho,
};

const brandShapes: Record<string, { viewBox: string; paths: string[] }> = {
  vapi: extraShapes.vapi,
  "retell ai": extraShapes.retell,
  apify: extraShapes.apify,
};

const genericIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  "rest apis": Braces,
  apis: Braces,
  webhooks: Webhook,
  "pdf.co": FileText,
  "automation tools": Workflow,
  "automation workflows": Workflow,
  "calendar apis": CalendarClock,
  "calendar integrations": CalendarClock,
  crm: Database,
  "ai voice apis": Phone,
};

/** Recognizable tool logo when available, otherwise a clean monogram tile. */
export function ToolIcon({ name, className }: { name: string; className?: string }) {
  const key = name.toLowerCase();
  const brand = brandIcons[key];
  if (brand) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-5", className)} aria-hidden="true">
        <path d={brand.path} fill="currentColor" />
      </svg>
    );
  }
  const shape = brandShapes[key];
  if (shape) {
    return (
      <svg viewBox={shape.viewBox} className={cn("size-5", className)} aria-hidden="true">
        {shape.paths.map((d) => (
          <path key={d.slice(0, 24)} d={d} fill="currentColor" />
        ))}
      </svg>
    );
  }
  const Generic = genericIcons[key];
  if (Generic) return <Generic className={cn("size-5", className)} aria-hidden="true" />;

  const letters = name
    .replace(/[^A-Za-z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex size-5 items-center justify-center rounded-[0.3em] bg-foreground/10 font-mono text-[0.55rem] font-semibold leading-none tracking-tight",
        className,
      )}
    >
      {letters}
    </span>
  );
}

export function ToolChip({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/80 px-2.5 py-1 text-xs text-muted-foreground">
      <ToolIcon name={name} className="size-3.5 text-foreground/80" />
      {name}
    </span>
  );
}
