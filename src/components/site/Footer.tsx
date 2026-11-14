import { Link } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";

import { Monogram } from "@/components/brand/Logo";
import { SocialIconRow } from "@/components/site/SocialLinks";
import { navItems, profile } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_auto]">
        <div>
          <div className="flex items-center gap-3">
            <Monogram className="size-11" />
            <div>
              <p className="font-display text-lg font-semibold tracking-tight">{profile.name}</p>
              <p className="text-sm text-muted-foreground">{profile.roles.join(" | ")}</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-muted-foreground">"{profile.footerTagline}"</p>
          <SocialIconRow className="mt-6" />
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow">Navigate</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {navItems.map((item) => (
              <li key={item.hash}>
                <Link
                  to="/"
                  hash={item.hash}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-start lg:justify-end">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0 })}
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            Back to top
            <ArrowUp className="size-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.18em]">
            AI Agents · Automation · Integrations
          </p>
        </div>
      </div>
    </footer>
  );
}
