export default function Faqs() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-gray-800 py-12 md:py-20 lg:border-0 lg:pt-0">
          {/* Section header */}
          <div className="mb-12">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-orange-200),var(--color-gray-50),var(--color-orange-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-2xl font-semibold text-transparent md:text-3xl">
              Frequently Asked Questions
            </h2>
          </div>
          {/* Faqs */}
          <ul className="grid gap-8 md:grid-cols-2 lg:gap-y-12 xl:gap-x-16">
            <li>
              <h4 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                What counts as a request?
              </h4>
              <p className="text-[1rem] text-gray-100/70">
                A request or a task is any to-do you assign us. 
                It can be to design a logo, do revisions to an existing design, 
                do website maintenance, or anything else. A request is anything that 
                requires someone from our team to work on any of your projects.
              </p>
            </li>
            <li>
              <h4 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
              What's the catch?
              </h4>
              <p className="text-[1rem] text-gray-100/70">
              There is no catch. You can submit unlimited requests for any of our services.
               We will then discuss the priorities with you and start working on these tasks
                in the agreed order as long as you are subscribed to one of the packages.
              </p>
            </li>
            <li>
              <h4 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
              What services do you offer?
              </h4>
              <p className="text-[1rem] text-gray-100/70">
              We offer a wide range of services, including website design and development, 
              graphic design, video editing, e-commerce solutions, branding, 
              motion graphics and more creatives.
              </p>
            </li>
            <li>
              <h4 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
              Can you help with website maintenance and updates?
              </h4>
              <p className="text-[1rem] text-gray-100/70">
              Yes, we offer ongoing website maintenance and support services to ensure that your website remains up-to-date and secure.
              </p>
            </li>
            <li>
              <h4 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                Do you offer a discount for non-profits?
              </h4>
              <p className="text-[1rem] text-gray-100/70">
                Yes, we provide 30% discounted rates for non-profit
                organizations. Please contact our support team with your
                credentials to apply for the discount.
              </p>
            </li>
            <li>
              <h4 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                Can you integrate with my existing tools/softwares?
              </h4>
              <p className="text-[1rem] text-gray-100/70">
              Absolutely! We work with popular tools like [Slack, Asana, Trello, Basecamp] and are always open to integrating with your preferred platform.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
