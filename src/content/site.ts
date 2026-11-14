/**
 * Everything editable on the site lives in this file:
 * profile details, external links, services, projects (incl. status), tech stack and testimonials.
 * Leave a link as null to hide it. Keep `testimonials` empty to hide that section.
 */

export const profile = {
  name: "Gideon Alausa",
  initials: "GA",
  role: "AI Automation Developer",
  roles: ["AI Automation Developer", "AI Agent Builder", "Business Solutions"],
  footerTagline: "Building intelligent systems for businesses ready to work smarter.",
  /** Portrait in the About section. Set to null to show the logo placeholder instead. */
  portraitUrl: "/images/gideon-portrait.webp" as string | null,
  /** Small round photo next to the greeting in the hero. Set to null to hide it. */
  avatarUrl: "/images/gideon-avatar.webp" as string | null,
  availability:
    "Available for freelance projects, ongoing collaborations, and custom AI automation solutions.",
};

export type LinkKey = "fiverr" | "upwork" | "linkedin" | "github" | "email" | "booking";

/** External links. null = hidden until you add the real URL. */
export const links: Record<LinkKey, string | null> = {
  fiverr: null,
  upwork: null,
  linkedin: null,
  github: null,
  email: null, // e.g. "hello@yourdomain.com"
  booking: null, // e.g. a Calendly link
};

export const navItems = [
  { label: "Home", hash: "home" },
  { label: "About", hash: "about" },
  { label: "Services", hash: "services" },
  { label: "Projects", hash: "projects" },
  { label: "Tech Stack", hash: "stack" },
  { label: "Contact", hash: "contact" },
] as const;

export type ServiceIcon = "voice" | "workflow" | "chat" | "crm" | "leads" | "custom";

export interface Service {
  id: string;
  icon: ServiceIcon;
  title: string;
  description: string;
  capabilities: string[];
  tools: string[];
}

export const services: Service[] = [
  {
    id: "voice-agents",
    icon: "voice",
    title: "AI Voice Agents & Virtual Receptionists",
    description:
      "I build conversational AI voice agents that answer incoming calls, respond to customer questions, qualify leads, book appointments, and route important requests to the right people.",
    capabilities: [
      "24/7 AI call answering",
      "Appointment scheduling",
      "Lead qualification",
      "Intelligent call transfers",
      "CRM and calendar integrations",
      "Automated call summaries and follow-ups",
    ],
    tools: ["Vapi", "Retell AI", "OpenAI", "Twilio", "ElevenLabs"],
  },
  {
    id: "workflow-automation",
    icon: "workflow",
    title: "Business Workflow Automation",
    description:
      "I design and implement automated workflows that connect business applications, eliminate repetitive tasks, and keep information flowing between systems.",
    capabilities: [
      "Make.com and n8n workflows",
      "Zapier integrations",
      "API and webhook integrations",
      "Automated notifications",
      "Data synchronization",
      "Error handling and workflow monitoring",
    ],
    tools: ["Make.com", "n8n", "Zapier", "REST APIs", "Webhooks", "Google Apps Script"],
  },
  {
    id: "chatbots",
    icon: "chat",
    title: "AI Chatbots & Customer Support Automation",
    description:
      "I develop intelligent AI chatbots that help businesses respond to customers, answer questions, collect information, and manage inquiries across websites and messaging platforms.",
    capabilities: [
      "Website AI chatbots",
      "WhatsApp automation",
      "Instagram and Facebook messaging workflows",
      "Knowledge-based AI assistants",
      "Customer support workflows",
      "Conversation-to-CRM integrations",
    ],
    tools: ["OpenAI", "Intercom", "WhatsApp Business API", "n8n", "Make.com"],
  },
  {
    id: "crm",
    icon: "crm",
    title: "CRM & Sales Pipeline Automation",
    description:
      "I build organized CRM systems that help businesses track leads, manage customer relationships, and automate sales activities.",
    capabilities: [
      "CRM setup and customization",
      "Automated lead assignment",
      "Sales pipeline tracking",
      "Email and SMS follow-ups",
      "Calendar and scheduling integrations",
      "Customer data synchronization",
    ],
    tools: ["HubSpot", "GoHighLevel", "Zoho", "Airtable", "Google Sheets"],
  },
  {
    id: "lead-generation",
    icon: "leads",
    title: "Lead Generation & Data Automation",
    description:
      "I create automated systems that discover potential customers, organize prospect information, enrich business data, and support personalized outreach.",
    capabilities: [
      "Business lead research",
      "Web data extraction",
      "Lead enrichment",
      "Automated email campaigns",
      "Lead scoring and filtering",
      "Google Sheets and CRM integrations",
    ],
    tools: ["Apify", "Apollo", "Make.com", "n8n", "Google Sheets", "OpenAI"],
  },
  {
    id: "custom-ai",
    icon: "custom",
    title: "Custom AI Solutions & Web Integrations",
    description:
      "I develop custom technology solutions that connect websites, AI applications, business tools, and internal processes.",
    capabilities: [
      "Custom automation dashboards",
      "API-driven integrations",
      "AI-powered content workflows",
      "Automated reporting",
      "Website and CRM integrations",
      "Custom business management workflows",
    ],
    tools: ["WordPress", "OpenAI", "JavaScript", "Google Apps Script", "Airtable", "n8n"],
  },
];

/**
 * Project status labels. Set each project's `status` to the one that is accurate:
 * - "Client Project": delivered for a real client
 * - "Prototype": working build, not yet in production
 * - "Demonstration": built to show how the solution works
 * - "Concept": designed / planned solution
 */
export type ProjectStatus = "Client Project" | "Prototype" | "Demonstration" | "Concept";

export interface WorkflowStep {
  label: string;
  detail: string;
  tool?: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  status: ProjectStatus;
  overview: string;
  challenge: string;
  solution: string;
  workflow: WorkflowStep[];
  features: string[];
  technology: string[];
  businessValue: string;
  benefits: string[];
  /** Optional screenshots — add image URLs + captions. Section hides when empty. */
  screenshots: { src: string; caption: string }[];
  /** Optional demo video URL (YouTube/Loom embed URL or .mp4). Hidden when null. */
  demoVideoUrl: string | null;
  /** Optional verified results. Hidden when empty — only add real, measured outcomes. */
  results: string[];
  /** Service to pre-select in the contact form. */
  inquiryService: string;
}

export const projects: Project[] = [
  {
    slug: "ai-receptionist-real-estate",
    number: "01",
    title: "AI Receptionist for Real Estate Agencies",
    category: "AI Voice Agent / Real Estate Automation",
    status: "Demonstration",
    overview:
      "An intelligent AI receptionist solution designed to help property businesses manage incoming inquiries without relying entirely on human reception staff.",
    challenge:
      "Property businesses receive a steady stream of calls about viewings, valuations, and listings — often outside office hours or while the team is busy with clients. Calls that go unanswered can mean lost opportunities, and manually logging every caller's details takes time away from higher-value work.",
    solution:
      "A conversational AI voice agent that answers calls, understands what the caller needs, collects their details, books appointments directly into the calendar, and escalates urgent matters to a human. Every call is summarized and shared with the team automatically.",
    workflow: [
      { label: "Incoming call", detail: "Caller reaches the agency number", tool: "Vapi" },
      {
        label: "AI conversation",
        detail: "Agent identifies intent and answers questions",
        tool: "OpenAI",
      },
      {
        label: "Book or transfer",
        detail: "Schedules viewings or routes urgent calls",
        tool: "Google Calendar",
      },
      { label: "Summary & CRM", detail: "Caller details logged and summary sent", tool: "n8n" },
    ],
    features: [
      "Automated incoming call handling",
      "Viewing and valuation inquiries",
      "Caller information collection",
      "Property-related question handling",
      "Appointment and calendar integration",
      "Urgent call transfers",
      "Automated email or SMS call summaries",
    ],
    technology: ["Vapi", "OpenAI", "Google Calendar", "CRM", "Make.com", "n8n"],
    businessValue: "Improves inquiry handling and reduces missed lead opportunities.",
    benefits: [
      "Inquiries are answered even when the team is unavailable",
      "Caller details are captured consistently on every call",
      "Staff receive organized summaries instead of scattered notes",
      "Urgent requests still reach a human quickly",
    ],
    screenshots: [],
    demoVideoUrl: null,
    results: [],
    inquiryService: "AI Voice Agents & Virtual Receptionists",
  },
  {
    slug: "ai-booking-roofing",
    number: "02",
    title: "AI Appointment Booking for a Roofing Business",
    category: "AI Voice Automation / Service Business",
    status: "Demonstration",
    overview:
      "A voice AI solution tailored to a roofing company, designed to handle customer inquiries and offer no-obligation property inspections.",
    challenge:
      "Roofing businesses depend on converting inquiries into on-site inspections. When technicians are on roofs and office staff are stretched, potential customers can wait too long for a response — or call a competitor instead.",
    solution:
      "A natural-sounding voice agent that discusses roofing services, captures customer and property details, offers a no-obligation inspection, and books it straight into the technicians' calendar with automatic notifications for everyone involved.",
    workflow: [
      { label: "Customer calls", detail: "Inquiry about a roofing issue", tool: "Vapi" },
      { label: "Qualify need", detail: "AI captures property and issue details", tool: "OpenAI" },
      {
        label: "Offer inspection",
        detail: "Finds an open slot for a technician",
        tool: "Google Calendar",
      },
      {
        label: "Notify team",
        detail: "Booking confirmations sent automatically",
        tool: "Make.com",
      },
    ],
    features: [
      "Natural AI call conversations",
      "Roofing service inquiries",
      "Customer information capture",
      "No-obligation inspection scheduling",
      "Calendar integration",
      "Automated booking notifications",
      "Technician appointment management",
    ],
    technology: ["Vapi", "OpenAI", "Automation Workflows", "Calendar APIs"],
    businessValue:
      "Simplifies customer inquiry management and helps convert inquiries into inspection bookings.",
    benefits: [
      "Every caller is offered a clear next step",
      "Inspection bookings land directly in the schedule",
      "Technicians and office staff stay informed automatically",
      "Less back-and-forth to arrange appointments",
    ],
    screenshots: [],
    demoVideoUrl: null,
    results: [],
    inquiryService: "AI Voice Agents & Virtual Receptionists",
  },
  {
    slug: "lead-generation-outreach",
    number: "03",
    title: "Automated Lead Generation & Outreach System",
    category: "Lead Generation / Sales Automation",
    status: "Demonstration",
    overview:
      "An automated B2B prospecting solution for discovering businesses, organizing contact data, and streamlining personalized outreach.",
    challenge:
      "Finding the right prospects, gathering their contact information, removing duplicates, and writing personalized emails is slow, repetitive work. Done manually, it leaves little time for actual conversations with potential clients.",
    solution:
      "An end-to-end pipeline that discovers businesses matching a target profile, extracts and cleans contact data, uses AI to evaluate fit and draft personalized emails, and runs follow-up sequences from a single centralized lead database.",
    workflow: [
      { label: "Discover", detail: "Find businesses matching the target profile", tool: "Apify" },
      {
        label: "Clean & store",
        detail: "Deduplicate and organize contacts",
        tool: "Google Sheets",
      },
      { label: "AI evaluation", detail: "Score fit and draft personalized emails", tool: "OpenAI" },
      { label: "Outreach", detail: "Send emails and automated follow-ups", tool: "n8n" },
    ],
    features: [
      "Business prospect discovery",
      "Contact information collection",
      "Duplicate removal",
      "AI-assisted lead evaluation",
      "Personalized email generation",
      "Automated follow-up sequences",
      "Centralized lead database",
    ],
    technology: ["Apify", "Google Sheets", "OpenAI", "Make.com", "n8n"],
    businessValue: "Reduces manual prospect research and improves outreach organization.",
    benefits: [
      "Less time spent on manual research",
      "A clean, deduplicated prospect list",
      "Personalized messages without writing each from scratch",
      "Follow-ups that don't slip through the cracks",
    ],
    screenshots: [],
    demoVideoUrl: null,
    results: [],
    inquiryService: "Lead Generation & Data Automation",
  },
  {
    slug: "automated-reporting-analytics",
    number: "04",
    title: "Automated Business Reporting & Analytics",
    category: "Reporting Automation / Data Analytics",
    status: "Demonstration",
    overview:
      "A custom reporting workflow designed to transform assessment data into structured, readable individual and company-level reports.",
    challenge:
      "Turning raw assessment data into polished reports by hand is time-consuming and error-prone — especially when each person and each organization needs their own version with comparisons over time.",
    solution:
      "An automated pipeline that processes the data, applies scoring and normalization, compares baseline and progress results, renders dynamic charts into HTML templates, and generates finished PDF reports at both individual and group level.",
    workflow: [
      {
        label: "Collect data",
        detail: "Assessment responses are gathered",
        tool: "Automation Tools",
      },
      {
        label: "Score & compare",
        detail: "Normalize and compare baseline vs progress",
        tool: "JavaScript",
      },
      { label: "Visualize", detail: "Render dynamic charts into templates", tool: "Chart.js" },
      { label: "Generate PDF", detail: "Produce individual and group reports", tool: "PDF.co" },
    ],
    features: [
      "Automated data processing",
      "Baseline and progress comparisons",
      "Scoring and normalization",
      "Dynamic charts",
      "HTML report templates",
      "PDF generation",
      "Group-level reporting",
    ],
    technology: ["JavaScript", "Chart.js", "HTML", "CSS", "PDF.co", "Automation Tools"],
    businessValue: "Makes recurring reporting more consistent and less labor-intensive.",
    benefits: [
      "Consistent formatting across every report",
      "Repeatable process for each reporting cycle",
      "Clear visual comparisons for readers",
      "Less manual copy-and-paste work",
    ],
    screenshots: [],
    demoVideoUrl: null,
    results: [],
    inquiryService: "Custom AI Solutions & Web Integrations",
  },
  {
    slug: "reservation-management",
    number: "05",
    title: "Intelligent Reservation Management System",
    category: "Booking Automation / Business Management",
    status: "Concept",
    overview:
      "An integrated reservation management concept for appointment-based businesses, including golf clubs and service providers.",
    challenge:
      "Appointment-based businesses juggle bookings arriving by website, chat, and phone. Without one connected system, confirmations, reminders, and status updates become manual tasks — and double bookings or missed reminders become more likely.",
    solution:
      "A connected reservation system where online bookings, AI chatbot inquiries, and AI phone bookings all flow into one central CRM, with automatic confirmations, reminders, and real-time reservation status tracking.",
    workflow: [
      { label: "Booking request", detail: "Via website, chat, or phone", tool: "AI Voice APIs" },
      {
        label: "Check availability",
        detail: "Matches requests to open slots",
        tool: "Calendar Integrations",
      },
      { label: "Central CRM", detail: "Reservation recorded in one place", tool: "CRM" },
      { label: "Confirm & remind", detail: "Automated confirmations and reminders", tool: "n8n" },
    ],
    features: [
      "Online reservation management",
      "AI chatbot inquiries",
      "AI phone booking assistance",
      "Centralized CRM",
      "Booking confirmations",
      "Automated reminders",
      "Reservation status tracking",
    ],
    technology: ["n8n", "Make.com", "AI Voice APIs", "CRM", "Calendar Integrations"],
    businessValue:
      "Creates a more organized customer booking experience while reducing administrative effort.",
    benefits: [
      "One source of truth for every reservation",
      "Customers can book through the channel they prefer",
      "Reminders and confirmations go out automatically",
      "Staff spend less time on admin",
    ],
    screenshots: [],
    demoVideoUrl: null,
    results: [],
    inquiryService: "Business Workflow Automation",
  },
  {
    slug: "ai-content-ecommerce",
    number: "06",
    title: "AI Content & E-commerce Automation",
    category: "AI Content / E-commerce Workflows",
    status: "Demonstration",
    overview:
      "Automation workflows for assisting businesses with product content, catalog information, and repetitive e-commerce operations.",
    challenge:
      "Keeping product listings accurate and well-written across platforms involves a lot of repetitive work — formatting data, writing descriptions, and preparing listings one by one.",
    solution:
      "Scheduled workflows that take structured product data, use AI to help generate content, prepare listings in the right format, and push them to external platforms through APIs.",
    workflow: [
      {
        label: "Product data",
        detail: "Structured catalog info in a sheet",
        tool: "Google Sheets",
      },
      { label: "AI content", detail: "Descriptions and copy drafted with AI", tool: "OpenAI" },
      { label: "Prepare listing", detail: "Format data for each platform", tool: "Make.com" },
      { label: "Publish", detail: "Sync to external platforms via API", tool: "REST APIs" },
    ],
    features: [
      "AI-assisted content generation",
      "Product information processing",
      "Automated listing preparation",
      "External platform integrations",
      "Structured data management",
      "Workflow scheduling",
    ],
    technology: ["OpenAI", "Make.com", "n8n", "REST APIs", "Google Sheets"],
    businessValue: "Simplifies repetitive product and content operations.",
    benefits: [
      "Faster preparation of product content",
      "Consistent structure across listings",
      "Fewer manual updates between platforms",
      "Workflows that run on a schedule",
    ],
    screenshots: [],
    demoVideoUrl: null,
    results: [],
    inquiryService: "Custom AI Solutions & Web Integrations",
  },
];

export const techStack: { category: string; tools: string[] }[] = [
  { category: "Automation", tools: ["Make.com", "n8n", "Zapier", "Google Apps Script"] },
  { category: "AI & Voice", tools: ["OpenAI", "Vapi", "Retell AI", "ElevenLabs", "Claude"] },
  {
    category: "CRM & Business Tools",
    tools: ["HubSpot", "GoHighLevel", "Zoho", "Airtable", "Notion"],
  },
  {
    category: "Communication",
    tools: ["Twilio", "WhatsApp Business API", "Gmail", "Slack", "Intercom"],
  },
  {
    category: "Data & Integrations",
    tools: ["Apify", "Google Sheets", "REST APIs", "Webhooks", "PDF.co"],
  },
  { category: "Web & Reporting", tools: ["WordPress", "HTML", "CSS", "JavaScript", "Chart.js"] },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    text: "We discuss your business, current processes, and the areas where automation can make a difference.",
  },
  {
    number: "02",
    title: "Solution Design",
    text: "I map out the workflow, choose suitable technologies, and establish the implementation plan.",
  },
  {
    number: "03",
    title: "Development & Testing",
    text: "I build, integrate, and test the solution to ensure the different systems work together properly.",
  },
  {
    number: "04",
    title: "Launch & Support",
    text: "Once everything is ready, I help deploy the system, explain how it works, and provide agreed post-launch assistance.",
  },
];

export const benefits = [
  {
    title: "Business-first thinking",
    text: "Automation designed around real operational challenges.",
  },
  { title: "Custom solutions", text: "Workflows tailored to how each business operates." },
  {
    title: "Reliable integrations",
    text: "Attention to error handling, data accuracy, and system performance.",
  },
  {
    title: "Clear collaboration",
    text: "Transparent communication throughout development and handover.",
  },
];

/**
 * Genuine testimonials only. The section stays hidden while this list is empty.
 * Example: { quote: "...", name: "Jane Doe", role: "Founder", company: "Acme" }
 */
export const testimonials: { quote: string; name: string; role: string; company?: string }[] = [];

export const budgetOptions = [
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $7,500",
  "$7,500+",
  "Not sure yet",
];

export const serviceOptions = [...services.map((s) => s.title), "Something else / Not sure yet"];
