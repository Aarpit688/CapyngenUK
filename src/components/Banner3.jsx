import React from "react";

const Banner3 = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black py-16 lg:py-20 xl:pt-40">
        {/* Background Image with Glass Effect (Desktop) */}
        <div className="absolute inset-0 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
          <div className="relative bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-3xl m-4 overflow-hidden">
            <img
              className="object-cover object-right-bottom w-full h-full opacity-90"
              src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/background.png"
              alt="Background"
            />
          </div>
        </div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 sm:text-4xl xl:text-5xl xl:leading-tight">
              Build SaaS Landing Page without Writing a Single Code
            </h1>

            <p className="mt-8 text-base font-normal leading-7 text-gray-300 lg:max-w-md xl:pr-0 lg:pr-16">
              Create stunning SaaS landing pages with our no-code solution.
              Professional templates, easy customization, and lightning-fast
              deployment.
            </p>

            {/* CTA Buttons with Glass Effect */}
            <div className="flex items-center justify-center mt-8 space-x-5 xl:mt-16 lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center justify-center px-3 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gradient-to-r from-cyan-600 to-purple-600 backdrop-blur-lg border border-cyan-500/30 rounded-md sm:px-6 hover:from-cyan-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 shadow-lg shadow-cyan-500/20"
              >
                Get UI Kit Now
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center px-2 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-800/60 backdrop-blur-lg border border-gray-600/50 rounded-md sm:px-4 hover:bg-gray-700/60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-500 shadow-lg shadow-gray-900/20"
              >
                Check live preview
              </a>
            </div>
          </div>
        </div>

        {/* Background Image with Glass Effect (Mobile) */}
        <div className="mt-8 lg:hidden">
          <div className="relative bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-3xl mx-4 overflow-hidden">
            <img
              className="object-cover w-full h-full opacity-90"
              src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/bg.png"
              alt="Background mobile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
