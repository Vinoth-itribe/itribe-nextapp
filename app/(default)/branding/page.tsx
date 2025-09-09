export const metadata = {
  title: "Branding package - Inboundtribe",
  description: "Check out our simple, flat-rate branding package get unlimited creative power!",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-branding";
import Cta from "@/components/cta";

export default function Pricing() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Cta />
    </>
  );
}
