import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  const logos = [
    "/images/client-logo-01.svg",
    "/images/client-logo-02.svg",
    "/images/client-logo-03.svg",
    "/images/client-logo-04.svg",
    "/images/client-logo-05.svg",

  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="text-white pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Unlimited Creative <span className="mr-2">⚡</span>Support,<br></br> One Affordable Price.
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-white"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Request unlimited web, graphic, and video designs with endless revisions. Save time and cut costs with a dedicated design team at your service.
              </p>

              {/* Guarantees */}
              <div data-aos="fade-up" data-aos-delay={400}>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-12">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-orange-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Unlimited Requests</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-orange-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Unlimited Revisions</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-orange-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Flat monthly rate.</span>
                </div>
              </div>
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
             {/* Static Logo Wall */}
             <div className="mt-8 bg-gray-950 backdrop-blur-sm py-8 max-w-3xl" data-aos="fade-up" data-aos-delay={600}>
                <div className="flex justify-center items-center gap-8 flex-wrap">
                  {logos.map((logo, index) => (
                    <div key={`logo-${index}`} className="flex items-center justify-center">
                      <img
                        src={logo || "/placeholder.svg"}
                        alt={`Client logo ${index + 1}`}
                        className="h-12 w-auto max-w-[220px] object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-90 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//hero-demo.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}