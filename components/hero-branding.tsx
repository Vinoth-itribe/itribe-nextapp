import Image from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";
import PricingBranding from "@/components/pricing-branding";

export default function HeroBranding() {
  return (
    <section className="">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="text-center">
            <h1 className="text-white pb-12 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              Transform Your Vision Into a <br/>Visual Identity
            </h1>
          </div>
          <div className="relative">
            {/* Secondary illustration */}
            <div
              className="pointer-events-none absolute bottom-28 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2"
              aria-hidden="true"
            >
              <Image
                className="md:max-w-none"
                src={SecondaryIllustration}
                width={1165}
                height={1012}
                alt="Secondary illustration"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Full-width white section */}
      <div className="bg-white w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-2">
          <PricingBranding />
        </div>
      </div>
    </section>
  );
}