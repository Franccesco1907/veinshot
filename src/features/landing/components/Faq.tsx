import type { LandingContent } from "../types";

export function Faq({ content }: { content: LandingContent["faq"] }) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-arterial">
        {content.eyebrow}
      </p>
      <h2 className="mt-4 max-w-[16ch] text-balance text-3xl font-extrabold tracking-tighter sm:text-5xl">
        {content.headline.lead} <span className="text-arterial">{content.headline.accent}</span>
      </h2>
      <p className="mt-5 max-w-[52ch] text-pretty text-base text-muted">{content.subline}</p>
      <dl className="mt-12 grid gap-x-8 sm:grid-cols-2">
        {content.items.map((item) => (
          <div key={item.question} className="border-t border-line py-6">
            <dt className="text-base font-bold tracking-tight">{item.question}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</dd>
          </div>
        ))}
      </dl>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
