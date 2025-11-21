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
    <div className="relative w-full overflow-hidden bg-black/80">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <picture>
          <source media="(min-width:1024px)" srcSet={bgImageDesktop} />
          <img
            src={bgImageMobile}
            alt="background"
            className="w-full object-cover opacity-90"
          />
        </picture>
      </div>

      {/* Content */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold sm:text-5xl xl:text-6xl text-white leading-tight">
          {titleGradient}
        </h1>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>

        {/* CTA Button */}
        <div className="mt-10 sm:mt-14">
          <a
            href={ctaLink}
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg shadow-lg border border-white/10 hover:from-green-700 hover:to-emerald-700 hover:shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 focus:ring-2 focus:ring-emerald-500/30 focus:outline-none"
          >
            {ctaText}
            <svg
              className="w-6 h-6"
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
        {features.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16 max-w-4xl mx-auto">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start justify-start text-left"
              >
                <div
                  className="min-w-[24px]"
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
                <p className="ml-3 text-sm sm:text-base text-gray-100">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Banner6;
