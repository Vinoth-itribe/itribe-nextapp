export default function PricingBranding() {
    return (
        <section className="relative">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    {/* Section header */}
                    <div className="mb-12 text-center md:text-left">
                        <div className="mb-3">
                            <span className="text-orange-500 font-medium">Pricing</span>
                        </div>
                        <h2 className="pb-6 font-nacelle text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
                            Simple, Transparent Pricing for <br className="hidden sm:block" /> Complete Branding
                        </h2>
                    </div>

                    {/* Pricing table */}
                    <div className="border border-gray-100 divide-y divide-gray-200 rounded-xl overflow-hidden">
                        {/* Row 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            {/* Left - Icon + Title */}
                            <div className="flex items-center gap-4 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-gray-200">
                                <div className="flex h-12 w-12 items-center justify-center shrink-0">
                                    <svg
                                        className="mb-3 fill-orange-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                    >
                                        <path
                                            fillOpacity=".48"
                                            d="m3.031 9.05-.593-.805 1.609-1.187.594.804a6.966 6.966 0 0 1 0 8.276l-.594.805-1.61-1.188.594-.805a4.966 4.966 0 0 0 0-5.9Z"
                                        />
                                        <path d="m7.456 6.676-.535-.845 1.69-1.07.534.844a11.944 11.944 0 0 1 0 12.789l-.535.845-1.69-1.071.536-.845a9.944 9.944 0 0 0 0-10.647Z" />
                                        <path
                                            d="m11.888 4.35-.514-.858 1.717-1.027.513.858a16.9 16.9 0 0 1 2.4 8.677 16.9 16.9 0 0 1-2.4 8.676l-.513.859-1.717-1.028.514-.858A14.9 14.9 0 0 0 14.003 12a14.9 14.9 0 0 0-2.115-7.65Z"
                                            opacity=".48"
                                        />
                                        <path d="m16.321 2-.5-.866 1.733-1 .5.866A22 22 0 0 1 21 12c0 3.852-1.017 7.636-2.948 10.97l-.502.865-1.73-1.003.501-.865A19.878 19.878 0 0 0 19 12a20 20 0 0 0-2.679-10Z" />
                                    </svg>
                                </div>
                                <h3 className="font-nacelle text-lg sm:text-xl font-semibold text-gray-900">
                                    Branding Package
                                </h3>
                            </div>

                            {/* Middle - Features */}
                            <div className="p-6 sm:p-8 border-b md:border-b-0 md:border-r border-gray-200">
                                <h4 className="mb-4 text-sm font-medium text-gray-900">Includes</h4>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    {[
                                        "Brand strategy consultation",
                                        "Custom logo design (3 initial concepts, Unlimited revisions)",
                                        "Color palette & usage guidelines",
                                        "Typography selection and font pairing",
                                        "Iconography, Brand symbols, Pattern & texture design",
                                        "Digital assets (Business card, letter heads, packaging design (if product based)",

                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <svg
                                                className="mr-3 mt-0.5 h-3 w-3 shrink-0 fill-current text-orange-500"
                                                viewBox="0 0 12 12"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right - Price */}
                            <div className="p-6 sm:p-8 bg-gray-100 border-l-1 border-orange-500 flex flex-col justify-center">
                                <div className="text-center md:text-right">
                                    <div className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">$100</div>
                                    <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                        one-time fee <br />
                                        (includes all assets, project files and other deliverables)
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Spacer row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 h-6">
                            <div className="border-b md:border-b-0 md:border-r border-gray-100" />
                            <div />
                            <div />
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            {/* Left */}
                            <div className="flex items-center gap-4 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-gray-200">
                                <div className="flex h-12 w-12 items-center justify-center shrink-0">
                                    <svg
                                        className="fill-orange-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                    >
                                        <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
                                        <path
                                            fillOpacity=".48"
                                            d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="font-nacelle text-lg sm:text-xl font-semibold text-gray-900">
                                    Social Media Branding Add-On
                                </h3>
                            </div>

                            {/* Middle - Features */}
                            <div className="p-6 sm:p-8 border-b md:border-b-0 md:border-r border-gray-200">
                                <h4 className="mb-4 text-sm font-medium text-gray-900">Includes</h4>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    {[
                                        "Custom social media profile & cover designs (Instagram, LinkedIn, Facebook, etc.)",
                                        "Highlight icons & story covers",
                                        "Post templates for consistent branding",
                                        "Simple motion graphics (intro/outro, GIFs, micro-animations)",
                                        "Branded social media graphics & banners",

                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <svg
                                                className="mr-3 mt-0.5 h-3 w-3 shrink-0 fill-current text-orange-500"
                                                viewBox="0 0 12 12"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right */}
                            <div className="p-6 sm:p-8 bg-gray-50 border-l-1 border-orange-500 flex flex-col justify-center">
                                <div className="text-center md:text-right">
                                    <div className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">$180</div>
                                    <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                        (includes all source files and full commercial rights)
                                    </div>
                                    <div className="mt-2 flex justify-between items-center bg-green-100 text-green-800 text-xs sm:text-sm px-3 py-2 rounded">
                                        <span className="flex-1">
                                            You get 1 month free on our Unlimited Social Media Content Plan when you purchase this add-on.
                                        </span>
                                        <svg
                                            className="w-4 h-4 flex-shrink-0 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
                                        </svg>
                                    </div>


                                </div>
                            </div>
                        </div>

                        {/* Spacer row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 h-6">
                            <div className="border-b md:border-b-0 md:border-r border-gray-100" />
                            <div />
                            <div />
                        </div>

                        {/* Row 3 */}
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            {/* Left */}
                            <div className="flex items-center gap-4 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-gray-200">
                                <div className="flex h-12 w-12 items-center justify-center shrink-0">
                                    <svg
                                        className="mb-3 fill-orange-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                    >
                                        <path
                                            fillOpacity=".48"
                                            d="M19 8h5v2h-5V8Zm-4 5h9v2h-9v-2Zm9 5H11v2h13v-2Z"
                                        />
                                        <path d="M19.406 3.844 6.083 20.497.586 15 2 13.586l3.917 3.917L17.844 2.595l1.562 1.25Z" />
                                    </svg>
                                </div>
                                <h3 className="font-nacelle text-lg sm:text-xl font-semibold text-gray-900">
                                    Website & Online Identity
                                </h3>
                            </div>

                            {/* Middle */}
                            <div className="p-6 sm:p-8 border-b md:border-b-0 md:border-r border-gray-200">
                                <p className="text-sm text-gray-600 max-w-md">
                                    This add-on provides a complete set of web-ready assets, including website style guides, hero banners, and graphics
                                    tailored for your site.
                                </p>
                            </div>

                            {/* Right */}
                            <div className="p-6 sm:p-8 bg-gray-50 border-l-1 border-orange-500 flex flex-col justify-center">
                                <div className="text-center md:text-right">
                                    <div className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">$300</div>
                                    <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                        (includes all source files and commercial rights)
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    {/* end table */}
                </div>
            </div>
        </section>
    )
}
