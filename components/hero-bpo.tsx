import Image from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";
import AvatarImg01 from "@/public/images/avatar-01.jpg";
import AvatarImg02 from "@/public/images/avatar-02.jpg";
import AvatarImg03 from "@/public/images/avatar-03.jpg";
import AvatarImg04 from "@/public/images/avatar-04.jpg";
import PricingTableBPO from "@/components/pricing-table-bpo";

export default function HeroBPO() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="text-center">
          <h1 className="text-white pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
          Plug & play BPO teams, Ready when you are
            </h1>
            <div className="mx-auto max-w-3xl pb-10">
              <p className="text-xl text-gray-100/90">
              No Overheads. No Hassle. From customer support and bookkeeping to admin tasks and tech support, we make outsourcing effortless.
              </p>
            </div>
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
            <PricingTableBPO />
          </div>
        </div>
      </div>
    </section>
  );
}
