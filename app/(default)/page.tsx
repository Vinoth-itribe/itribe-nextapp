export const metadata = {
  title: "Home - Inboundtribe",
  description: "Unlimited web, graphic, and video designs with endless revisions—all for a flat monthly fee. Get a dedicated creative team without the overhead!",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Cta from "@/components/cta";
import ProcessSection from "@/components/process";
import CreativeServices from "@/components/creative-services";
import WebsiteServices from "@/components/website-services";
import AdServices from "@/components/ad-services";
import Benefits from "@/components/benefits";
import { Analytics } from '@vercel/analytics/next';


export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <ProcessSection />
      <CreativeServices />
      <WebsiteServices />
      <AdServices />
      <Features />
      <Benefits />
      <Cta />
      <Analytics />
    </>
  );
}
