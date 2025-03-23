export default function Clients() {

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
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-8 text-center md:pb-8">
          <h2 className="aos-init aos-animate animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-orange-200),var(--color-gray-50),var(--color-orange-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Our customers span the globe
          </h2>
        </div>
        {/* Centered Logo Wall */}
        <div className="mt-8 bg-gray-950 backdrop-blur-sm w-full flex justify-center" data-aos="fade-up" data-aos-delay={300}>
          <div className="flex justify-center items-center flex-wrap gap-12 w-full max-w-4xl">
            {logos.map((logo, index) => (
              <div key={`logo-${index}`} className="flex items-center justify-center">
                <img
                  src={logo || "/placeholder.svg"}
                  alt={`Client logo ${index + 1}`}
                  className="md:h-20 w-auto md:max-w-[140px] object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-90 transition-all duration-300 h-8 max-w-[80px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
}