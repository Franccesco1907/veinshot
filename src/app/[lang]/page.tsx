import { notFound } from "next/navigation";

import { Contact } from "@/features/landing/components/Contact";
import { Faq } from "@/features/landing/components/Faq";
import { Hero } from "@/features/landing/components/Hero";
import { Process } from "@/features/landing/components/Process";
import { PulseDivider } from "@/features/landing/components/PulseDivider";
import { ScrollVein } from "@/features/landing/components/ScrollVein";
import { Services } from "@/features/landing/components/Services";
import { SiteFooter } from "@/features/landing/components/SiteFooter";
import { SiteHeader } from "@/features/landing/components/SiteHeader";
import { getContent, hasLocale } from "@/features/landing/content";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const content = getContent(lang);

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader locale={lang} brand={content.brand} />
      <main className="flex flex-1 flex-col">
        <Hero content={content.hero} />
        <ScrollVein>
          <PulseDivider />
          <Services content={content.services} />
          <Process content={content.process} />
          <Faq content={content.faq} />
          <Contact content={content.contact} brand={content.brand} />
        </ScrollVein>
      </main>
      <SiteFooter brand={content.brand} />
    </div>
  );
}
