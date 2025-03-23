export const metadata = {
    title: "You're In! - Inboundtribe",
    description: "Thank you for joining InboundTribe! Your registration is complete, and you’re all set to start making requests. Check your email for the next steps.",
  };
  
  import PageIllustration from "@/components/page-illustration";
  import Image from "next/image";
  import AvatarImg01 from "@/public/images/avatar-group-01.jpg";
  import AvatarImg02 from "@/public/images/avatar-group-02.jpg";
  import AvatarImg03 from "@/public/images/avatar-group-03.jpg";
  import AvatarImg04 from "@/public/images/avatar-group-04.jpg";
  import FooterSeparator from "@/components/footer-separator";
  import Footer from "@/components/ui/footer";
  
  export default function Newsletter() {
    return (
      <>
        <PageIllustration multiple />
        <section>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="py-12 md:py-20">
                {/* Section header */}
            <div className="pb-12 text-center">
              <h1 className="text-white pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                Thank you for joining Inboundtribe!
              </h1>
              <div className="mx-auto max-w-3xl">
                <p className="text-xl text-gray-100/80">
                Your account is pending approval. Once an administrator reviews and approves your account, you’ll receive an email with access to your dashboard.
                </p>
              </div>
            </div>
          </div>
          </div>
        </section>
        <FooterSeparator />
        <Footer />
      </>
    );
  }
  