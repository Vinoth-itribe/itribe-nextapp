export const metadata = {
  title: "Contact us - Inboundtribe",
  description: "Drop us a message, and let’s make something awesome together.",
};

import PageIllustration from "@/components/page-illustration";
import FooterSeparator from "@/components/footer-separator";

export default function Contact() {
  return (
    <>
      <PageIllustration multiple />
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="pb-12 text-center">
              <h1 className="text-white pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                Contact us
              </h1>
              <div className="mx-auto max-w-3xl">
                <p className="text-xl text-gray-100/80">
                  We have perfect plans to power your business. Tell us your
                  needs, and we'll contact you shortly.
                </p>
              </div>
            </div>
            {/* Contact form */}
            <form
              className="mx-auto max-w-[640px]"
              action="https://formsubmit.co/80b03afa986ec1c8fc66484c0a85f42c"
              method="POST"
            >
              <div className="space-y-5">
                <div className="flex flex-col gap-x-6 gap-y-4 md:flex-row">
                  <div className="flex-1">
                    <label className="mb-1 block text-sm font-medium text-gray-100/70" htmlFor="firstname">
                      First Name
                    </label>
                    <input id="name" type="text" name="name" className="form-input w-full" placeholder="Jason" required />
                  </div>
                  <div className="flex-1">
                    <label className="mb-1 block text-sm font-medium text-gray-100/70" htmlFor="lastname">
                      Last Name
                    </label>
                    <input id="surname" type="text" name="surname" className="form-input w-full" placeholder="Bourne" required />
                  </div>
                </div>
                <div className="flex flex-col gap-x-6 gap-y-4 md:flex-row">
                  <div className="flex-1">
                    <label className="mb-1 block text-sm font-medium text-gray-100/70" htmlFor="email">
                      Email
                    </label>
                    <input id="email" type="email" name="email" className="form-input w-full" placeholder="Enter your email address" required />
                  </div>
                  <div className="flex-1">
                    <label className="mb-1 block text-sm font-medium text-gray-100/70" htmlFor="country">
                      Region
                    </label>
                    <select id="country" name="country" className="form-select w-full text-gray-200" required>
                      <option value="" disabled hidden>Select a country</option>
                      <option>North America</option>
                      <option>South America</option>
                      <option>Europe</option>
                      <option>Asia Pacific</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-x-6 gap-y-4 md:flex-row">
                  <div className="flex-1">
                    <label className="mb-1 block text-sm font-medium text-gray-100/70" htmlFor="topic">
                      Category
                    </label>
                    <select id="topic" name="topic" className="form-select w-full text-gray-200" required>
                      <option value="" disabled hidden>Select a topic</option>
                      <option>General</option>
                      <option>Creators</option>
                      <option>Non Profits</option>
                      <option>Businesses</option>
                      <option>Websites</option>
                      <option>Marketing</option>
                      <option>Advertising</option>
                      <option>Editing</option>
                      <option>Ecommerce</option>
                      <option>Legal</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="mb-1 block text-sm font-medium text-gray-100/70" htmlFor="subject">
                      Subject
                    </label>
                    <input id="subject" type="text" name="subject" className="form-input w-full" placeholder="Let us know how we can help" required />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-100/70" htmlFor="message">
                    Full description
                  </label>
                  <textarea id="message" name="message" rows={5} className="form-textarea w-full text-gray-200" placeholder="Include as much detail as you can" required></textarea>
                </div>
              </div>

              {/* Hidden fields for FormSubmit configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://inboundtribe.com/newsletter" />

              <div className="mt-8 flex w-full flex-col justify-between gap-5 md:flex-row md:items-center">
                <p className="text-sm text-gray-100/70">
                  By continuing, you agree to our <a className="underline hover:no-underline" href="https://inboundtribeagency.notion.site/Terms-and-conditions-1549245f9bf58016bed5d5ed73876776?pvs=4" target="_blank">Terms & Conditions</a> and <a className="underline hover:no-underline" href="https://inboundtribeagency.notion.site/Privacy-Policy-1549245f9bf58077aaf0edb2b0de267c?pvs=4" target="_blank">Privacy Policy</a>.
                </p>
                <div>
                  <button className="btn group w-full bg-linear-to-t from-orange-600 to-orange-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]">
                    <span className="relative inline-flex items-center">
                      Send
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <FooterSeparator />
    </>
  );
}
