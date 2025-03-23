export const metadata = {
  title: "About us - Inboundtribe",
  description: "We’re the creative minds behind the ads, designs, and websites that actually work. No fluff, just results. Get to know us!",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-about";
import Timeline from "@/components/timeline";
import Team from "@/components/team";
import Benefits from "@/components/benefits";
import Career from "@/components/career";
import Clients from "@/components/clients";
import Cta from "@/components/cta";

export default function About() {
  return (
    <>
      <PageIllustration multiple />
      <Hero />
      <Timeline />
      <Team />
      <Benefits />
      <Career />
      <Clients />
      <Cta />
    </>
  );
}
