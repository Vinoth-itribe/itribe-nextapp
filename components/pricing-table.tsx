"use client"

import { useState } from "react"
import Spotlight from "./spotlight"

export default function PricingTable() {
  const [annual, setAnnual] = useState<boolean>(true)

  return (
    <div>
      {/* Pricing toggle */}
      <label className="mb-16 flex cursor-pointer items-center justify-center gap-4 text-gray-100/70">
        <span className="flex-1 text-right" aria-hidden="true">
          Billed Monthly
        </span>
        <span className="sr-only">Billed Monthly</span>
        <input
          role="switch"
          type="checkbox"
          className="peer sr-only"
          checked={annual}
          onChange={() => setAnnual(!annual)}
        />
        <div
          className="peer relative h-6 w-11 rounded-full bg-gray-800 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-gray-200 after:transition-all peer-checked:bg-orange-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus-visible:ring-4 peer-focus-visible:ring-orange-200"
          aria-hidden="true"
        />
        <span className="flex-1 text-left" aria-hidden="true">
          Billed Quarterly <span className="text-orange-500"> (Save 15%)</span>
        </span>
      </label>
      <div className="mx-auto grid max-w-xs items-start gap-8 md:max-w-2xl md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:max-w-none">
        {/* Pricing table 1 */}
        <div className="relative flex h-full flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ">
          <div className="relative mb-4 border-b pb-5 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
            <div className="mb-2 font-nacelle font-semibold md:text-3xl text-gray-200">Starter</div>
            <div className="mb-1.5 flex items-baseline font-nacelle">
              <span className="text-2xl text-gray-100/70">$</span>
              <span className="text-4xl font-semibold tabular-nums text-gray-200">{annual ? "169" : "199"}</span>
            </div>
            <div className="mb-4 grow text-xs text-gray-100/70"><span className="">{annual ? "Billed quarterly, No automatic renewals" : "Billed monthly, No automatic renewals"}</span></div>
            <a
              className="btn-sm relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] hover:scale-102"
              href="/portal-auth"
            >
              Test 3 days for free
            </a>
          </div>
          <p className="mb-4 text-sm italic text-gray-200">No minimum commitment. Pause or cancel anytime.</p>
          <ul className="grow space-y-2 text-sm text-gray-100/70">
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>1 active task at a time</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Average 1-3 day delivery</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Upto 10 deliveries /month</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Unlimited requests</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Unlimited revisions</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Custom dashboards for tracking</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Add upto 5 team members</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Dedicated project manager</span>
            </li>
          </ul>
        </div>
        {/* Pricing table 2 */}
        <div className="relative flex h-full flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,--theme(--color-orange-500/.5),--theme(--color-orange-500),--theme(--color-orange-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          <div className="relative mb-4 border-b pb-5 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
            <div className="mb-2 font-nacelle font-semibold md:text-3xl text-gray-200">Essential</div>
            <div className="mb-1.5 flex items-baseline font-nacelle">
              <span className="text-2xl text-gray-100/70">$</span>
              <span className="text-4xl font-semibold tabular-nums text-gray-200">{annual ? "339" : "399"}</span>
            </div>
            <div className="mb-4 grow text-xs text-gray-100/70"><span className="">{annual ? "Billed quarterly, No automatic renewals" : "Billed monthly, No automatic renewals"}</span></div>
            <a
              className="btn-sm w-full bg-gradient-to-t from-orange-700 to-orange-600 bg-[length:100%_100%] bg-[bottom] text-white hover:bg-[length:100%_150%] shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] hover:scale-102"
              href="/portal-auth"
            >
              Test 3 days for free
            </a>
          </div>
          <p className="mb-4 text-sm italic text-gray-200">No minimum commitment. Pause or cancel anytime.</p>
          <ul className="grow space-y-2 text-sm text-gray-100/70">
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>2 active task at a time</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Average 1-3 day delivery</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Upto 20 deliveries /month</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Unlimited requests</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Unlimited revisions</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Custom dashboards for tracking</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Add upto 5 team members</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Dedicated project manager</span>
            </li>
          </ul>
        </div>
        {/* Pricing table 3 */}
        <div className="relative flex h-full flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          <div className="relative mb-4 border-b pb-5 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
            <div className="absolute right-0 top-0 inline-flex items-center rounded-full bg-orange-500/[.15] px-2 py-0.5 text-xs font-medium text-orange-500 shadow-xs">
              Popular
            </div>
            <div className="mb-2 font-nacelle font-semibold md:text-3xl text-gray-200">Premium</div>
            <div className="mb-1.5 flex items-baseline font-nacelle">
              <span className="text-2xl text-gray-100/70">$</span>
              <span className="text-4xl font-semibold tabular-nums text-gray-200">{annual ? "765" : "899"}</span>
            </div>
            <div className="mb-4 grow text-xs text-gray-100/70"><span className="">{annual ? "Billed quarterly, No automatic renewals" : "Billed monthly, No automatic renewals"}</span></div>
            <a
              className="btn-sm relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] hover:scale-102"
              href="/portal-auth"
            >
              Test 3 days for free
            </a>
          </div>
          <p className="mb-4 text-sm italic text-gray-200">No minimum commitment. Pause or cancel anytime.</p>
          <ul className="grow space-y-2 text-sm text-gray-100/70">
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>3 active tasks at a time</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Average 1-3 day delivery</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Upto 40 deliveries /month</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Unlimited requests</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Unlimited revisions</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Custom dashboards for tracking</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Add upto 5 team members</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Dedicated project manager</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Full-width pricing table */}
      <div className="mt-8 mx-auto max-w-xs md:max-w-2xl lg:max-w-none">
        <div className="relative flex flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <div className="mb-2 font-nacelle font-semibold md:text-3xl text-gray-200">Website Development | One-off</div>
              <div className="text-sm text-gray-100/70">
                No minimum commitment. <span className="text-orange-500">2 spots left!</span>
              </div>
              <div className="mt-2 flex items-baseline font-nacelle">
                <span className="text-4xl font-semibold tabular-nums text-gray-200">$850 <span className="text-sm">/onwards</span></span>
              </div>
            </div>
            <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3">
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-t from-orange-700 to-orange-600 bg-[length:100%_100%] bg-[bottom] text-white hover:bg-[length:100%_150%] px-6 py-3 font-medium sm:mb-0 sm:w-auto h-[48px] transition-transform duration-300 hover:scale-105"
                  href="https://calendar.notion.so/meet/vinoth-itribe/1e95p4lar" target="_blank" rel="noopener noreferrer"
                >
                  <img
                    src="/images/avatar-01.jpg"
                    alt="Sehan Avatar"
                    className="h-8 w-8 rounded-full border border-white"
                  />
                  <span className="">Book a call with Vinoth</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span className="text-sm text-gray-100/70">Custom website designs</span>
            </div>
            <div className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span className="text-sm text-gray-100/70">Ecommerce setup & management</span>
            </div>
            <div className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span className="text-sm text-gray-100/70">Personal websites</span>
            </div>
            <div className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span className="text-sm text-gray-100/70">Optimized for SEO</span>
            </div>
            <div className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span className="text-sm text-gray-100/70">Advanced UI/UX research</span>
            </div>
            <div className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span className="text-sm text-gray-100/70">High converting copy writing</span>
            </div>
            <div className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span className="text-sm text-gray-100/70">Chatbot development</span>
            </div>
            <div className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span className="text-sm text-gray-100/70">Scalable websites</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full width table 02 */}
      <div className="mt-8 mx-auto max-w-xs md:max-w-2xl lg:max-w-none">
        <div className="relative flex flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <div className="mb-2 font-nacelle font-semibold md:text-3xl text-gray-200">Social Media Ads | Monthly</div>
              <div className="text-sm text-gray-100/70">
                No minimum commitment. <span className="text-orange-500">6 spots left!</span>
              </div>
              <div className="mt-2 flex items-baseline font-nacelle">
                <span className="text-4xl font-semibold tabular-nums text-gray-200">$400 <span className="text-sm">/onwards</span></span>
              </div>
            </div>
            <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3">
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-t from-orange-700 to-orange-600 bg-[length:100%_100%] bg-[bottom] text-white hover:bg-[length:100%_150%] px-6 py-3 font-medium sm:mb-0 sm:w-auto h-[48px] transition-transform duration-300 hover:scale-105"
                  href="https://calendar.notion.so/meet/vinoth-itribe/1e95p4lar" target="_blank" rel="noopener noreferrer"
                >
                  <img
                    src="/images/avatar-01.jpg"
                    alt="Sehan Avatar"
                    className="h-8 w-8 rounded-full border border-white"
                  />
                  <span className="">Book a call with Vinoth</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span className="text-sm text-gray-100/70">Targeted ad campaigns</span>
            </div>
            <div className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span className="text-sm text-gray-100/70">High-converting ad copy</span>
            </div>
            <div className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span className="text-sm text-gray-100/70">Visual ad design</span>
            </div>
            <div className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span className="text-sm text-gray-100/70">Performance tracking & analytics</span>
            </div>
            <div className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span className="text-sm text-gray-100/70">A/B testing for optimization</span>
            </div>
            <div className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span className="text-sm text-gray-100/70">Audience segmentation & retargeting</span>
            </div>
            <div className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span className="text-sm text-gray-100/70">Facebook, Instagram, Google Ads</span>
            </div>
            <div className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-orange-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span className="text-sm text-gray-100/70">Scalable solutions for growth</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

