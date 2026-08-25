import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { StatementBand } from "@/components/statement-band";
import { About } from "@/components/about";
import { FacadeTransition } from "@/components/facade-transition";
import { Professionals } from "@/components/professionals";
import { CareJourney } from "@/components/care-journey";
import { Spaces } from "@/components/spaces";
import { AgeGroups } from "@/components/age-groups";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { MobileCtaBar } from "@/components/mobile-cta-bar";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
        <StatementBand />
        <FacadeTransition>
          <About />
        </FacadeTransition>
        <Professionals />
        <CareJourney />
        <Spaces />
        <AgeGroups />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  );
}
