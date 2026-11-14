import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { Wordmark } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-border bg-background/75 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" hash="home" aria-label="Gideon Alausa — home">
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.hash}
              to="/"
              hash={item.hash}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface-raised hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="pill" className="hidden sm:inline-flex">
            <Link to="/" hash="contact">
              Let's Work Together
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="glass"
                size="icon"
                className="rounded-full lg:hidden"
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[82vw] max-w-sm border-border bg-background">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="mt-2">
                <Wordmark />
              </div>
              <nav aria-label="Mobile" className="mt-10 flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.hash}
                    to="/"
                    hash={item.hash}
                    onClick={() => setOpen(false)}
                    className="border-b border-border py-4 font-display text-lg text-foreground/90 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Button asChild variant="hero" size="xl" className="mt-8 w-full">
                <Link to="/" hash="contact" onClick={() => setOpen(false)}>
                  Let's Work Together
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
