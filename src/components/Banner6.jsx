import React from "react";

const Banner6 = ({
  titleGradient,
  description,
  ctaText,
  ctaLink = "#",
  bgImageDesktop,
  bgImageMobile,
  features = [],
  buttonBg = "bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg shadow-lg border border-white/10 hover:from-green-700 hover:to-emerald-700 hover:shadow-emerald-500/20",
}) => {
  return (
    <div className="relative w-full min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-black/85">
      {/* Background Image */}
      <div className="absolute inset-0 z-10 opacity-50">
        <picture>
          <source media="(min-width:1024px)" srcSet={bgImageDesktop} />
          <img
            src={bgImageMobile}
            alt="background"
            className="w-full h-full object-cover opacity-75 sm:opacity-90 object-center"
          />
        </picture>
      </div>

      {/* Content */}
      <section className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-snug sm:leading-tight px-2">
          {titleGradient}
        </h1>

        {/* Description */}
        <p className="mt-4 sm:mt-6 text-lg text-gray-300 max-w-xl mx-auto px-2">
          {description}
        </p>

        {/* CTA Button */}
        {ctaText && <div className="mt-8 sm:mt-12">
          <a
            href={ctaLink}
            className={`inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 focus:ring-2 focus:ring-emerald-400/50 focus:outline-none ${buttonBg}`}
          >
            {ctaText}
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
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
        </div>}

        {/* Features Grid */}
        {features.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 max-w-3xl mx-auto">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start text-left gap-3 px-4 sm:px-0"
              >
                <div
                  className="min-w-[22px] sm:min-w-[26px]"
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
                <p className="text-sm sm:text-base text-gray-200">
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
