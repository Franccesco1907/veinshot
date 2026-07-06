export const hero = {
  eyebrow: "Software studio",
  headline: {
    lead: "One dose.",
    accent: "No filler.",
  },
  subline:
    "Veinshot builds software that goes straight to the vein: precise scope, senior execution, and nothing you didn't ask for.",
  cta: {
    label: "Start a project",
    href: "mailto:hello@veinshot.com",
  },
} as const;

export const services = {
  eyebrow: "Services",
  headline: {
    lead: "Choose the",
    accent: "treatment.",
  },
  subline:
    "Every engagement is scoped like a prescription: a clear dose, a clear outcome, and nothing you didn't ask for.",
  items: [
    {
      tag: "Full build",
      title: "Product engineering",
      description:
        "End-to-end design and build of web products, whatever the right stack turns out to be. Senior hands from architecture to deploy — no handoffs, no juniors learning on your dime.",
    },
    {
      tag: "Sprint",
      title: "MVP in weeks",
      description:
        "A fixed-scope shot: your idea shipped as a working product in four to six weeks. One goal, one deadline, zero scope creep.",
    },
    {
      tag: "Integration",
      title: "AI features that ship",
      description:
        "LLM-powered features wired into your existing product — agents, retrieval, automation. Pragmatic engineering over hype.",
    },
    {
      tag: "Diagnosis",
      title: "Code audit & rescue",
      description:
        "A clinical read of your codebase: architecture, performance, technical debt. You get the lab report and a treatment plan — and we can operate.",
    },
  ],
} as const;

export const process = {
  eyebrow: "Process",
  headline: {
    lead: "From intake to",
    accent: "discharge.",
  },
  subline:
    "Four steps, no mystery. You know where you stand at every point of the treatment.",
  steps: [
    {
      number: "01",
      name: "Intake",
      description:
        "You describe the problem. We ask the uncomfortable questions early — goals, constraints, budget — so nothing surprises anyone later.",
    },
    {
      number: "02",
      name: "Prescription",
      description:
        "You get a written scope: what we'll build, how long it takes, and what it costs. Fixed, not fuzzy. You approve before anything starts.",
    },
    {
      number: "03",
      name: "Treatment",
      description:
        "We build in short cycles with working software every week. You see progress you can click, not status reports.",
    },
    {
      number: "04",
      name: "Discharge",
      description:
        "You get the keys: code, docs, and a clean handoff. No lock-in, no retainer trap — and we're here if you need us again.",
    },
  ],
} as const;

export const notFound = {
  eyebrow: "404",
  headline: {
    lead: "Flat",
    accent: "line.",
  },
  subline: "This page doesn't exist — or it didn't make the scope.",
  cta: {
    label: "Back to the living",
    href: "/",
  },
} as const;

export const contact = {
  eyebrow: "Contact",
  headline: {
    lead: "Tell us where",
    accent: "it hurts.",
  },
  subline:
    "Describe the problem in one email. You'll get a scoped answer — what we'd do, how long it takes, and what it costs. No sales call.",
  cta: {
    label: "Start a project",
    href: "mailto:hello@veinshot.com",
  },
} as const;

export const brand = {
  contact: {
    label: "hello@veinshot.com",
    href: "mailto:hello@veinshot.com",
  },
} as const;
