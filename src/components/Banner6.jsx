import React from "react";

const Banner6 = ({
  titleGradient,
  description,
  ctaText,
  ctaLink = "#",
  bgImageDesktop,
  bgImageMobile,
  features = [],
}) => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden min-h-screen bg-gradient-to-b from-[#0b0e0e] via-[#0c1715] to-[#08201D]">
      {/* Decorative Glow Elements */}
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>

      {/* Background Image Layer */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <img
          className="hidden w-full lg:block object-cover object-center opacity-90"
          src={bgImageDesktop}
          alt="background-desktop"
        />
        <img
          className="block w-full lg:hidden object-cover object-center opacity-90"
          src={bgImageMobile}
          alt="background-mobile"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#08201D] via-[#0b1715]/80 to-transparent"></div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28">
        <div className="relative z-20 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Heading */}
            <h1 className="text-4xl font-bold sm:text-5xl xl:text-6xl leading-tight tracking-tight text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-200 to-white">
                {titleGradient}
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              {description}
            </p>

            {/* CTA Button */}
            <div className="mt-10 sm:mt-14 flex justify-center">
              <a
                href={ctaLink}
                className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg shadow-lg border border-white/10 hover:from-green-700 hover:to-emerald-700 hover:shadow-emerald-500/20 focus:ring-2 focus:ring-emerald-500/30 focus:outline-none transition-all duration-300 hover:-translate-y-0.5"
              >
                {ctaText}

                <svg
                  className="w-6 h-6 ml-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-left sm:px-0 px-10">
              {features.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                  <p className="ml-3 text-sm text-gray-100">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner6;
