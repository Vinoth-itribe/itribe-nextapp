export const metadata = {
  title: "Client Portal - Inboundtribe",
  description: "Manage your projects, track requests, and collaborate effortlessly with the Inboundtribe Client Portal. Submit tasks and access deliverables in one place.",
};

import Link from "next/link";
import Footer from "@/components/ui/footer";
import FooterSeparator from "@/components/footer-separator";

export default function SignUp() {
  return (
    <>
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-orange-200),var(--color-gray-50),var(--color-orange-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Create an account
            </h1>
          </div>
          {/* Sign-up form */}
          <form
            className="mx-auto max-w-[400px]"
            action="https://formsubmit.co/vinothnc039@gmail.com" // Use your FormSubmit URL here
            method="POST"
          >
            <div className="space-y-5">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-orange-200/65"
                  htmlFor="name"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name" // Make sure to give the fields proper names for FormSubmit to work
                  className="form-input w-full"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-orange-200/65"
                  htmlFor="company"
                >
                  Business Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  type="text"
                  name="company" // Make sure to give the fields proper names for FormSubmit to work
                  className="form-input w-full"
                  placeholder="Your business name"
                  required
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-orange-200/65"
                  htmlFor="email"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email" // Name must match the field name for FormSubmit
                  className="form-input w-full"
                  placeholder="Your primary email"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-orange-200/65"
                  htmlFor="password"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  id="password"
                  type="password"
                  name="password" // Name must match the field name for FormSubmit
                  className="form-input w-full"
                  placeholder="Password (at least 10 characters)"
                  required
                />
              </div>
            </div>
            <div className="mt-6 space-y-5">
              <button className="btn w-full bg-linear-to-t from-orange-600 to-orange-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]">
                Register
              </button>
              <div className="flex items-center gap-3 text-center text-sm italic text-gray-600 before:h-px before:flex-1 before:bg-linear-to-r before:from-transparent before:via-gray-400/25 after:h-px after:flex-1 after:bg-linear-to-r after:from-transparent after:via-gray-400/25">
                or
              </div>
            </div>

            {/* Hidden fields for FormSubmit configuration */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://inboundtribe.com/register-success" /> {/* Update this URL for production */}

          </form>
          {/* Bottom link */}
          <div className="mt-6 text-center">
            <button className="btn relative w-[400px] bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]">
              Already have an account?{" "}&nbsp;
              <Link className="font-medium text-orange-500" href="https://app.inboundtribe.com/" target="_blank">
                Sign in
              </Link>
            </button>
          </div>
        </div>
      </div>
   
    </section>

    <FooterSeparator />
    <Footer />
    </>
  );
}