"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { TabGroup, Tab, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import CarouselImg01 from "@/public/images/carousel-07.png";
import CarouselImg02 from "@/public/images/carousel-08.png";
import CarouselImg03 from "@/public/images/carousel-09.png";
import SmallTestimonialImg from "@/public/images/testimonial-11.jpg";

const tabs = [
  {
    title: "Social Media Advertising",
    description:
      "Targeted ad campaigns on Facebook, Instagram, TikTok, and more to boost engagement and sales.",
    img: CarouselImg01,
    imgAlt: "Carousel image 01",
  },
  {
    title: "Google & YouTube Ads",
    description:
      "Search, display, and video ads designed to increase visibility and conversions.",
    img: CarouselImg02,
    imgAlt: "Carousel image 02",
  },
  {
    title: "Ad Creatives & Copywriting",
    description:
      "High-quality visuals and persuasive copy that grab attention and drive clicks.",
    img: CarouselImg03,
    imgAlt: "Carousel image 03",
  },
];


export default function AdServices() {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <section>
       <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="py-6 md:py-4">
      </div>
      </div>
      <TabGroup selectedIndex={selectedTab} onChange={setSelectedTab} vertical>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">

          <div className="flex flex-col items-center justify-between pb-12 md:flex-row md:gap-8 md:pb-20 lg:gap-16">
            {/* Left content */}
            <div className="shrink-0 md:w-[500px] *:pl-7">
              <div className="relative mb-6 border-l [border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-400/.25),transparent)1] after:absolute after:left-0 after:top-0 after:h-4 after:w-px after:origin-bottom after:-translate-y-full after:animate-shine after:bg-[linear-gradient(180deg,transparent,--theme(--color-orange-500/.5)_25%,--theme(--color-orange-500)_50%,--theme(--color-orange-500/.5)_75%,transparent)] after:opacity-0">
                <div className="mb-4">
                  <h2 className="text-white pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                    Paid Media Ads That Convert
                  </h2>
                  <p className="text-gray-100/90">
                  Create and manage high-performing ad campaigns that attract the right audience and drive real results for your business.
                  </p>
                </div>

                {/* Buttons */}
                <TabList className="space-y-2">
                  {tabs.map((tab, index) => (
                    <Tab key={index} as={Fragment}>
                      <button
                        className={`-mx-2 flex gap-2 p-2 text-left transition-opacity focus-visible:outline-hidden ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-orange-300 ${selectedTab !== index ? "opacity-50 hover:opacity-70" : ""}}`}
                      >
                        <svg
                          className={`shrink-0 ${selectedTab !== index ? "fill-gray-600" : "fill-orange-500"}`}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                        >
                          <path d="m14.092 5.207-8.207 8.207-3.592-3.591 1.414-1.415 2.178 2.178 6.793-6.793 1.414 1.414Z" />
                        </svg>
                        <span>
                          <span className="font-medium text-orange-500">
                            {tab.title}
                          </span>
                          <span className="text-white"> - </span>
                          <span className="text-gray-300">
                            {tab.description}
                          </span>
                        </span>
                      </button>
                    </Tab>
                  ))}
                </TabList>
              </div>
              <div>
                <p className="mb-4 font-nacelle text-gray-200">
                  “Inboundtribe helped me run Facebook 
                  ads for my business, and it’s been great! 
                  They explained everything clearly and handled the entire setup.”
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    className="inline-flex shrink-0 rounded-full"
                    src={SmallTestimonialImg}
                    width={24}
                    height={24}
                    alt="Small testimonial"
                  />
                  <div className="text-sm font-medium text-gray-200">
                    <span>Matthew S.</span>
                    <span className="text-gray-700"> - </span>
                    <a
                      className="text-orange-500/65 transition-colors hover:text-orange-500"
                      href="#0"
                    >
                      Matthew & Co.
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right content */}
            <TabPanels className="shrink-0 md:w-[540px]" data-aos="fade-up">
              <div className="relative flex flex-col">
                {tabs.map((tab, index) => (
                  <Transition
                    key={index}
                    as="div"
                    show={selectedTab === index}
                    className={`transform transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-closed:absolute data-enter:data-closed:-translate-y-6 data-leave:data-closed:translate-y-12 data-closed:opacity-0 data-enter:duration-500 data-leave:duration-300`}
                    unmount={false}
                    appear={true}
                  >
                    <TabPanel as={Fragment} static={true}>
                      <Image
                        width={540}
                        height={520}
                        src={tab.img}
                        alt={tab.imgAlt}
                      />
                    </TabPanel>
                  </Transition>
                ))}
              </div>
            </TabPanels>
          </div>

        </div>
      </TabGroup>



    </section>
  );
}
