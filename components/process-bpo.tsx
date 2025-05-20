"use client"
import dynamic from "next/dynamic"

// Dynamically import the LottieIcon component with SSR disabled
const LottieIcon1 = dynamic(() => import("@/components/Lottie/LottieIcon1"), { ssr: false })
const LottieIcon2 = dynamic(() => import("@/components/Lottie/LottieIcon2"), { ssr: false })
const LottieIcon3 = dynamic(() => import("@/components/Lottie/LottieIcon3"), { ssr: false })



export default function ProcessSectionBPO() {
  return (
    <section className="bg-gray-950 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-orange-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-orange-200/50">
              <span className="inline-flex bg-linear-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">
                How it works
              </span>
            </div>
            <h2 className="text-white pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Simple, Fast, and Scalable!
            </h2>
            <p className="text-lg text-gray-100/90">
            Ready to delegate like a pro? We’ve made outsourcing effortless. Just follow a few quick steps, and your remote team will handle the rest.            </p>
          </div>

          {/* Process steps */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 h-16 w-16">
                <LottieIcon1 />
              </div>
              <h3 className="mb-3 text-2xl font-medium">Onboard & Align</h3>
              <p className="text-gray-400 max-w-60">Kick off with a quick onboarding call to map your goals, tools, and workflows.</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 h-16 w-16">
                <LottieIcon2 />
              </div>
              <h3 className="mb-3 text-2xl font-medium">Share Docs & SOPs</h3>
              <p className="text-gray-400 max-w-60">
              Send over your existing docs or we’ll help build custom SOPs from scratch.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 h-16 w-16">
                <LottieIcon3 />
              </div>
              <h3 className="mb-3 text-2xl font-medium">Build & Scale</h3>
              <p className="text-gray-400 max-w-60">
                We match you with the right team, launch in days, and grow with your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

