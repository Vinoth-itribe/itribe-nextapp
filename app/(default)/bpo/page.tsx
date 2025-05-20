export const metadata = {
  title: "BPO Services - Inboundtribe",
  description: "Check out our simple, flat-rate pricing and get your team running without overheads!",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-bpo";
import Faqs from "@/components/faqs";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import ProcessSectionBPO from "@/components/process-bpo";

export default function BPO() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <ProcessSectionBPO />
      <Testimonials />
      <Cta />
    </>
  );
}
