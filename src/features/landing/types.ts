export type Locale = "en" | "es";

export interface Headline {
  lead: string;
  accent: string;
}

export interface Cta {
  label: string;
  href: string;
}

export interface SectionIntro {
  eyebrow: string;
  headline: Headline;
  subline: string;
}

export interface ServiceItem {
  tag: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  name: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LandingContent {
  meta: {
    title: string;
    description: string;
    ogImage: string;
    ogAlt: string;
  };
  brand: {
    contact: Cta;
    homeAriaLabel: string;
    logoAriaLabel: string;
  };
  hero: SectionIntro & {
    cta: Cta;
    veinAriaLabel: string;
  };
  services: SectionIntro & {
    items: readonly ServiceItem[];
  };
  process: SectionIntro & {
    steps: readonly ProcessStep[];
  };
  faq: SectionIntro & {
    items: readonly FaqItem[];
  };
  contact: SectionIntro & {
    cta: Cta;
  };
  notFound: {
    eyebrow: string;
    headline: Headline;
    subline: string;
    cta: Cta;
  };
}
