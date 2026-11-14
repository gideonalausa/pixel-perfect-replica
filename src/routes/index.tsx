import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { About } from "@/components/site/sections/About";
import { Contact } from "@/components/site/sections/Contact";
import { CtaBand } from "@/components/site/sections/CtaBand";
import { Hero } from "@/components/site/sections/Hero";
import { Process } from "@/components/site/sections/Process";
import { Projects } from "@/components/site/sections/Projects";
import { Services } from "@/components/site/sections/Services";
import { TechStack } from "@/components/site/sections/TechStack";
import { Testimonials } from "@/components/site/sections/Testimonials";
import { WhyMe } from "@/components/site/sections/WhyMe";

const title = "Gideon Alausa — AI Automation Developer & AI Agent Builder";
const description =
  "I build AI voice agents, chatbots, CRM integrations, lead generation systems and custom business automations with n8n, Make.com, Zapier, OpenAI and Vapi.";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): { service?: string } => {
    const service = search["service"];
    return typeof service === "string" && service ? { service: service.slice(0, 120) } : {};
  },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <Process />
        <WhyMe />
        <Testimonials />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
