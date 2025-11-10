import React, { useState } from "react";

const HomeHero = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="overflow-hidden bg-black pt-8">
      <section className="pt-12 bg-black sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="px-6 text-lg text-gray-300 font-inter">
              Smart email campaign builder, made for Developers
            </h1>
            <p className="mt-5 text-4xl font-bold leading-tight text-white sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
              Turn your visitors into profitable
              <span className="relative inline-flex sm:inline">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative"> business </span>
              </span>
            </p>

            <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Get more customers
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 bg-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Watch free demo
              </a>
            </div>

            <p className="mt-8 text-base text-gray-500 font-inter">
              60 Days free trial · No credit card required
            </p>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="pb-12 bg-black">
          <div className="relative flex justify-center items-end">
            {/* Left image (blurred, smaller, behind) */}
            <img
              src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
              alt="Left visual"
              className="hidden sm:block absolute sm:-bottom-12 md:-bottom-15 lg:-bottom-20 xl:-bottom-30 -left-60 blur-xs transform scale-80 opacity-50 z-0"
            />

            {/* Right image (blurred, smaller, behind) */}
            <img
              src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
              alt="Right visual"
              className="hidden sm:block absolute sm:-bottom-12 md:-bottom-15 lg:-bottom-20 xl:-bottom-30 -right-60 blur-xs transform scale-80 opacity-50 z-0"
            />

            {/* Center image (main focus) */}
            <div className="relative z-10 lg:max-w-6xl">
              <img
                className="transform scale-110"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
                alt="Main visual"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeHero;
