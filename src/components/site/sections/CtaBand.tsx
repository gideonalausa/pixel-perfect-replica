import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/site";

export function CtaBand() {
  return (
    <section className="relative px-5 py-12 sm:px-8 sm:py-16">
      <Reveal className="bg-cta relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-border px-6 py-16 text-center sm:px-12 sm:py-24">
        <div className="grid-backdrop absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Your Business Could Be Running Smarter.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            Have an idea, a repetitive process, or a business challenge you'd like to automate?
            Let's explore what's possible.
          </p>
          <Button asChild variant="hero" size="xl" className="mt-10">
            <Link to="/" hash="contact">
              Start a Conversation
              <ArrowRight />
            </Link>
          </Button>
          <p className="mt-6 text-sm text-muted-foreground">{profile.availability}</p>
        </div>
      </Reveal>
    </section>
  );
}
