import { Contact } from "@/features/landing/components/Contact";
import { Hero } from "@/features/landing/components/Hero";
import { PulseDivider } from "@/features/landing/components/PulseDivider";
import { Services } from "@/features/landing/components/Services";
import { SiteFooter } from "@/features/landing/components/SiteFooter";
import { SiteHeader } from "@/features/landing/components/SiteHeader";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <PulseDivider />
        <Services />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
