import { zodResolver } from "@hookform/resolvers/zod";
import { getRouteApi } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  MessageSquareText,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { configuredLinks } from "@/components/site/SocialLinks";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { budgetOptions, serviceOptions } from "@/content/site";
import { supabase } from "@/integrations/supabase/client";
import { inquirySchema, toInquiryRow, type InquiryData, type InquiryInput } from "@/lib/inquiry";
import { cn } from "@/lib/utils";

const routeApi = getRouteApi("/");

const nextSteps = [
  {
    icon: MessageSquareText,
    title: "Share your challenge",
    text: "Tell me what you'd like to automate or improve.",
  },
  {
    icon: PhoneCall,
    title: "Discovery conversation",
    text: "We talk through your processes and goals.",
  },
  {
    icon: Sparkles,
    title: "Practical proposal",
    text: "You get a clear plan for a solution that fits.",
  },
];

export function Contact() {
  const { service: presetService } = routeApi.useSearch();
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<InquiryInput, unknown, InquiryData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      description: "",
    },
    mode: "onTouched",
  });
  const { register, control, handleSubmit, formState, setValue, reset } = form;
  const { errors, isSubmitting } = formState;

  useEffect(() => {
    if (presetService && serviceOptions.includes(presetService)) {
      setValue("service", presetService, { shouldValidate: false });
    }
  }, [presetService, setValue]);

  const onSubmit = async (data: InquiryData) => {
    setServerError(null);
    const { error } = await supabase.from("project_inquiries").insert(toInquiryRow(data));
    if (error) {
      setServerError(
        "Something went wrong while sending your inquiry. Please try again in a moment.",
      );
      return;
    }
    setSubmitted(data.fullName.split(" ")[0] ?? data.fullName);
    reset();
  };

  const links = configuredLinks();

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="glow-orb bottom-0 left-1/4 size-[28rem] bg-primary/15" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Let's Build Something That Works.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tell me about your business and what you're trying to achieve. I'll help you explore a
            practical automation solution.
          </p>

          <ol className="mt-10 space-y-5">
            {nextSteps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-raised text-cyan">
                  <s.icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium">
                    <span className="mr-2 font-mono text-xs text-muted-foreground">0{i + 1}</span>
                    {s.title}
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          {links.length > 0 && (
            <div className="mt-10">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Find me on
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {links.map((l) => (
                  <a
                    key={l.key}
                    href={l.href}
                    target={l.key === "email" ? undefined : "_blank"}
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground/85 transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    {l.icon}
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </Reveal>

        <Reveal delay={120} className="surface-card p-6 sm:p-9">
          {submitted ? (
            <div
              role="status"
              className="flex min-h-[28rem] flex-col items-center justify-center text-center"
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-success/15 text-success">
                <CheckCircle2 className="size-8" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">Thank you, {submitted}.</h3>
              <p className="mt-3 max-w-sm text-muted-foreground">
                Your project inquiry has been received. I'll review the details and get back to you
                with next steps shortly.
              </p>
              <Button
                variant="glass"
                size="pill"
                className="mt-8"
                onClick={() => setSubmitted(null)}
              >
                Send another inquiry
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Full name"
                  htmlFor="fullName"
                  error={errors.fullName?.message}
                  required
                >
                  <Input
                    id="fullName"
                    autoComplete="name"
                    placeholder="Jane Smith"
                    aria-invalid={!!errors.fullName}
                    {...register("fullName")}
                    className={inputCls}
                  />
                </Field>
                <Field
                  label="Business email"
                  htmlFor="email"
                  error={errors.email?.message}
                  required
                >
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane@company.com"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                    className={inputCls}
                  />
                </Field>
              </div>

              <Field
                label="Company name"
                htmlFor="company"
                error={errors.company?.message}
                optional
              >
                <Input
                  id="company"
                  autoComplete="organization"
                  placeholder="Company Ltd."
                  {...register("company")}
                  className={inputCls}
                />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Service interested in"
                  htmlFor="service"
                  error={errors.service?.message}
                  required
                >
                  <Controller
                    control={control}
                    name="service"
                    render={({ field }) => (
                      <Select value={field.value ?? ""} onValueChange={field.onChange}>
                        <SelectTrigger
                          id="service"
                          aria-invalid={!!errors.service}
                          onBlur={field.onBlur}
                          className={inputCls}
                        >
                          <SelectValue placeholder="Choose a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </Field>
                <Field
                  label="Estimated budget"
                  htmlFor="budget"
                  error={errors.budget?.message}
                  optional
                >
                  <Controller
                    control={control}
                    name="budget"
                    render={({ field }) => (
                      <Select value={field.value ?? ""} onValueChange={field.onChange}>
                        <SelectTrigger id="budget" className={inputCls}>
                          <SelectValue placeholder="Select a range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetOptions.map((b) => (
                            <SelectItem key={b} value={b}>
                              {b}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </Field>
              </div>

              <Field
                label="Project description"
                htmlFor="description"
                error={errors.description?.message}
                required
              >
                <Textarea
                  id="description"
                  rows={6}
                  placeholder="What process would you like to automate? Which tools do you use today?"
                  aria-invalid={!!errors.description}
                  {...register("description")}
                  className={cn(inputCls, "h-auto min-h-36 py-3 resize-y")}
                />
              </Field>

              {serverError && (
                <p
                  role="alert"
                  className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                >
                  {serverError}
                </p>
              )}

              <Button
                type="submit"
                variant="hero"
                size="xl"
                disabled={isSubmitting}
                className="mt-1 w-full sm:w-auto sm:justify-self-start"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send Project Inquiry <ArrowRight />
                  </>
                )}
              </Button>
              <p className="text-xs text-muted-foreground">
                Your details are only used to respond to your inquiry.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

const inputCls =
  "h-11 rounded-xl border-input bg-background/60 px-3.5 text-[0.95rem] focus-visible:ring-2 focus-visible:ring-ring/60 aria-[invalid=true]:border-destructive/70";

function Field({
  label,
  htmlFor,
  error,
  required,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string | undefined;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="grid content-start gap-2">
      <Label htmlFor={htmlFor} className="text-sm text-foreground/90">
        {label}
        {required && <span className="text-cyan"> *</span>}
        {optional && <span className="font-normal text-muted-foreground"> (optional)</span>}
      </Label>
      {children}
      {error && (
        <p className="text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
