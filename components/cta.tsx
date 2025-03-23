import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-orange-400),var(--color-gray-50),var(--color-orange-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Smash our contact button so hard your cursor needs an ice pack.
            </h2>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-t from-orange-700 to-orange-600 bg-[length:100%_100%] bg-[bottom] text-white hover:bg-[length:100%_150%] px-6 py-3 font-medium sm:mb-0 sm:w-auto h-[48px] transition-transform duration-300 hover:scale-105"
                    href="https://calendar.notion.so/meet/vinoth-itribe/1e95p4lar" target="_blank" rel="noopener noreferrer"
                  >
                    <img
                      src="/images/avatar-01.jpg"
                      alt="Sehan Avatar"
                      className="h-8 w-8 rounded-full border border-white"
                    />
                    <span className="">Book a call with Vinoth</span>
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
