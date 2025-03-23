import Logo from "./logo-footer";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer className="bg-transparent">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer Illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>

        {/* Footer Content */}
        <div className="flex flex-col items-center gap-6 py-8 md:flex-row md:justify-between md:pt-12">
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Center - Links */}
          <nav className="space-x-6 text-sm font-medium text-gray-200">
            <a className="hover:text-orange-500" href="https://joinus.inboundtribe.com/" target="_blank">
              Join Us
            </a>
            <a className="hover:text-orange-500" href="https://inboundtribeagency.notion.site/Terms-and-conditions-1549245f9bf58016bed5d5ed73876776?pvs=4" target="_blank">
              Terms & Conditions
            </a>
            <a className="hover:text-orange-500" href="https://inboundtribeagency.notion.site/Privacy-Policy-1549245f9bf58077aaf0edb2b0de267c?pvs=4" target="_blank">
              Privacy Policy
            </a>
          </nav>

          {/* Right - Newsletter Signup */}
          <div className="flex flex-col items-center space-y-3 md:items-end">
            <div className="flex items-center space-x-3">
              <input
                type="email"
                placeholder="Your email"
                className="rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-800"
              />
              <button className="rounded-md bg-gradient-to-t from-orange-700 to-orange-600 bg-[length:100%_100%] bg-[bottom] hover:bg-[length:100%_150%] px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600 ">
                Join Newsletter
              </button>
            </div>

           
          </div>
        </div>

        {/* Affiliate Disclaimer */}
        <div className="text-center text-xs text-gray-400 pb-12">
          <p>
          Our service is designed to provide flexibility and ease for businesses, content creators, and non-profits looking for ongoing creative support. Subscription 
          fees are non-refundable, and cancellation will take effect at the end of the current billing cycle. While we strive to deliver high-quality work efficiently, 
          urgent requests may require additional add-ons for priority handling. If you have any questions or legal disputes, please 
            <a className="text-orange-500 hover:underline" href="/contact"> contact us.</a>
          </p>
        </div>
      </div>
    </footer>
  );
}