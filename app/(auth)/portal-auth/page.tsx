export const metadata = {
  title: "Client Portal - Inboundtribe",
  description: "Manage your projects, track requests, and collaborate effortlessly with the Inboundtribe Client Portal. Submit tasks and access deliverables in one place.",
};

import Link from "next/link";
import Footer from "@/components/ui/footer";
import FooterSeparator from "@/components/footer-separator";
import Script from "next/script";

export default function SignUp() {
  return (
    <>
 <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Create an account
            </h1>
          </div>
          
          {/* Tally.so embedded form */}
          <div className="mx-auto max-w-[400px]">
            <iframe 
              data-tally-src="https://tally.so/embed/wLO70z?hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              width="100%" 
              height="565" 
              title="Registration form"
              className="w-full"
            />
            
            {/* Tally.so script */}
            <Script id="tally-js" strategy="afterInteractive">
              {`
                var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};
                if("undefined"!=typeof Tally)v();
                else if(d.querySelector('script[src="'+w+'"]')==null){
                  var s=d.createElement("script");
                  s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);
                }
              `}
            </Script>
          </div>
          
          {/* Bottom link */}
          <div className="mt-6 text-center text-sm text-indigo-200/65">
            Already have an account?{" "}
            <Link className="font-medium text-orange-500" href="https://dash.inboundtribe.com/login" target="_blank">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </section>

    <FooterSeparator />
    <Footer />
    </>
  );
}