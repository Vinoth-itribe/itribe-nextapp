"use client";

import Image from "next/image";
import WorflowImg01 from "@/public/images/clients-pauly.png";
import WorflowImg02 from "@/public/images/clients-ian.png";
import WorflowImg03 from "@/public/images/clients-newformcap.png";
import Spotlight from "@/components/spotlight";
import { useState } from "react";

const videoSources = {
  workflow1: "/videos/paulylong-testimonial.mp4",
  workflow2: "/videos/ian-testimonial.mp4",
  workflow3: "/videos/newform-testimonial.mp4",
};

export default function Workflows() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  // Add proper type for videoSrc parameter
  const openVideo = (videoSrc: string) => {
    setCurrentVideo(videoSrc);
    setIsOpen(true);
  };

  const closeVideo = () => {
    setIsOpen(false);
    setCurrentVideo("");
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-orange-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-orange-200/50">
              <span className="inline-flex bg-linear-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">
                AKA the people making waves
              </span>
            </div>
            <h2 className="text-white pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Who We Work With
            </h2>
            <p className="text-lg text-gray-100/90">
            From viral video stars to world-changers and growing businesses, we team up with those who think big and move fast. If you’ve got ideas, we’ve got the tools to bring them to life.            </p>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <button
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-orange-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-orange-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              onClick={() => openVideo(videoSources.workflow1)}
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950">
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover/card:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-2  bg-gradient-to-t from-orange-700 to-orange-600 bg-[length:100%_100%] bg-[bottom] text-white hover:bg-[length:100%_150%] px-4 py-2 rounded-full text-white text-sm font-medium hover:bg-orange-800 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Play Review
                  </span>
                </div>
                <Image
                  className="inline-flex object-cover"
                  src={WorflowImg01}
                  width={350}
                  height={288}
                  alt="Workflow 01"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">
                        Creators & Influencers
                      </span>
                    </span>
                  </div>
                  <p className="text-gray-100/90">
                  With over <b>2 million</b> fans on TikTok, <b>Pauly Long</b> is one of the trendiest lifestyle creators strutting his stuff on the platform! 
                  </p>
                </div>
              </div>
            </button>

            {/* Card 2 */}
            <button
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-orange-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-orange-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              onClick={() => openVideo(videoSources.workflow2)}
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950">
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover/card:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-2  bg-gradient-to-t from-orange-700 to-orange-600 bg-[length:100%_100%] bg-[bottom] text-white hover:bg-[length:100%_150%] px-4 py-2 rounded-full text-white text-sm font-medium hover:bg-orange-800 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Play Review
                  </span>
                </div>
                <Image
                  className="inline-flex object-cover"
                  src={WorflowImg02}
                  width={350}
                  height={288}
                  alt="Workflow 01"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">
                        Non Profit Orgs
                      </span>
                    </span>
                  </div>
                  <p className="text-gray-100/90">
                  Ian McCall, <b>a former UFC champ,</b> is now championing change with his nonprofit,<b> Athletes Journey Home!</b>
                  </p>
                </div>
              </div>
            </button>

            {/* Card 3 */}
            <button
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-orange-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-orange-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              onClick={() => openVideo(videoSources.workflow3)}
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950">
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover/card:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-2  bg-gradient-to-t from-orange-700 to-orange-600 bg-[length:100%_100%] bg-[bottom] text-white hover:bg-[length:100%_150%] px-4 py-2 rounded-full text-white text-sm font-medium hover:bg-orange-800 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Play Review
                  </span>
                </div>
                <Image
                  className="inline-flex object-cover"
                  src={WorflowImg03}
                  width={350}
                  height={288}
                  alt="Workflow 01"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">
                        Small & Medium Businesses
                      </span>
                    </span>
                  </div>
                  <p className="text-gray-100/90">
                  Newform Capital backs <b>early-stage teams </b>innovating at the intersection of <b>blockchain & financial markets,</b> shaping the future.
                  </p>
                </div>
              </div>
            </button>
          </Spotlight>
        </div>
      </div>

      {/* Video Lightbox/Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={closeVideo}>
          <div className="relative max-w-4xl w-full mx-4">
            <button
              className="absolute -top-12 right-0 text-white hover:text-orange-200"
              onClick={closeVideo}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video
              className="w-full rounded-lg"
              src={currentVideo}
              autoPlay
              controls
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}