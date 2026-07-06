import type { LandingContent } from "../types";

export const en: LandingContent = {
  meta: {
    title: "Veinshot — One dose. No filler.",
    description:
      "Veinshot is a software studio that ships solutions straight to the vein: precise scope, senior execution, zero bloat.",
    ogImage: "/og-en.png",
    ogAlt: "Veinshot — software studio. One dose. No filler.",
  },
  brand: {
    contact: {
      label: "hello@veinshot.com",
      href: "mailto:hello@veinshot.com",
    },
    homeAriaLabel: "Veinshot home",
    logoAriaLabel: "Veinshot: the wordmark inside a syringe barrel",
  },
  hero: {
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
    veinAriaLabel:
      "A circuit-shaped vein carries tool icons into a wireframe product, lighting it up section by section",
  },
  services: {
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
  },
  process: {
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
  },
  faq: {
    eyebrow: "FAQ",
    headline: {
      lead: "Straight",
      accent: "answers.",
    },
    subline:
      "The things prospects actually want to know, answered the way we'd answer them on a call.",
    items: [
      {
        question: "How do you price projects?",
        answer:
          "Fixed price, tied to a written scope — you know the cost before anything starts. We don't publish rates because no two treatments are the same: describe your problem and you'll get a number, not a range.",
      },
      {
        question: "What if the scope changes mid-project?",
        answer:
          "The prescription is fixed: what we agreed is what we deliver, at the price we agreed. New ideas are welcome — they get scoped and priced as additions, never absorbed as silent creep. That discipline is what keeps deadlines honest.",
      },
      {
        question: "Do you work with existing teams?",
        answer:
          "Both ways. We can own the build end to end, or plug senior hands into your team — your repo, your process, our execution.",
      },
      {
        question: "What happens after delivery?",
        answer:
          "Every build ships with one month of included support: if something we wrote breaks, we fix it. Ongoing maintenance beyond that is available as a separate engagement.",
      },
      {
        question: "Where do you work from?",
        answer:
          "100% remote, in English and Spanish. Async-first, with real-time overlap for the conversations that matter.",
      },
      {
        question: "Is there a minimum project size?",
        answer:
          "No. If the problem is real, it deserves a precise dose — some of the best engagements start small.",
      },
    ],
  },
  contact: {
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
  },
  notFound: {
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
  },
};
