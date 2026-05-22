import React, { useState, useEffect } from "react";

const Banner3 = ({
  title = "Build SaaS Landing Page without Writing a Single Code",
  description = "Create stunning SaaS landing pages with our no-code solution. Professional templates, easy customization, and lightning-fast deployment.",
  primaryCtaText = "Get UI Kit Now",
  primaryCtaLink = "#",
  secondaryCtaText = "Check live preview",
  secondaryCtaLink = "#",
  desktopBgImage = "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/background.png",
  mobileBgImage = "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/bg.png",
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section>
      {/* Hero Section */}
      <div className="relative min-h-[85vh] lg:h-[85vh] overflow-hidden bg-black flex flex-col lg:flex-row items-center justify-center py-12 lg:py-0">

        {/* Background Image with Glass Effect (Desktop) */}
        <div
          className={`absolute inset-0 hidden lg:block transition-all duration-1000 ease-out transform z-0 ${isMounted ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>

          <div className="relative border border-gray-700/30 rounded-3xl m-4 overflow-hidden h-[calc(100%-2rem)]">
            {/* Background Image */}
            <img loading="lazy"
              className="object-cover object-right-bottom w-full h-full opacity-90"
              src={desktopBgImage}
              alt="Background"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </div>

        <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div
            className={`max-w-xl mx-auto text-center lg:max-w-md xl:max-w-3xl lg:text-left lg:mx-0 transition-all duration-1000 delay-150 ease-out transform ${isMounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
          >
            <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-6xl xl:leading-tight tracking-tight">
              {title}
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg font-normal leading-relaxed sm:leading-8 text-gray-300 lg:max-w-xl xl:pr-0 lg:pr-16">
              {description}
            </p>

            {/* CTA Buttons with Glass Effect */}
            <div className="flex flex-col sm:flex-row items-center justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-5 xl:mt-12 lg:justify-start">
              {/* Primary CTA */}
              <a
                href={primaryCtaLink}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 text-base font-bold leading-7 text-white transition-all duration-300 bg-gradient-to-r from-cyan-600 to-purple-600 backdrop-blur-lg border border-cyan-500/30 rounded-lg hover:from-cyan-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 shadow-[0_0_20px_rgba(8,145,178,0.25)] hover:shadow-[0_0_25px_rgba(8,145,178,0.45)] hover:scale-105"
              >
                {primaryCtaText}
              </a>

              {/* Secondary CTA */}
              <a
                href={secondaryCtaLink}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 text-base font-bold leading-7 text-white transition-all duration-300 bg-gray-800/60 backdrop-blur-lg border border-gray-600/50 rounded-lg hover:bg-gray-700/60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-500 shadow-lg shadow-gray-900/20 hover:scale-105"
              >
                {secondaryCtaText}
              </a>
            </div>
          </div>
        </div>

        {/* Background Image with Glass Effect (Mobile) */}
        <div
          className={`mt-10 lg:hidden w-full transition-all duration-1000 delay-300 ease-out transform z-10 ${isMounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="relative bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-3xl mx-4 overflow-hidden h-[300px] sm:h-[400px]">
            <img loading="lazy"
              className="object-cover w-full h-full opacity-90"
              src={mobileBgImage}
              alt="Background mobile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;