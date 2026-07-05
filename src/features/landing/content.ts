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
        "End-to-end design and build of web products with Next.js, React, and TypeScript. Senior hands from architecture to deploy — no handoffs, no juniors learning on your dime.",
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
