import React from "react";
import { Link } from "react-router-dom";

const Banner5 = () => {
  return (
    <section className="bg-gradient-to-br min-h-screen overflow-hidden from-gray-900 to-black py-16 lg:py-24 flex items-center">
      <div className="px-5 xl:pl-24 xl:pr-0">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Section */}
          <div>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl xl:text-6xl">
              Engineered Trading Solutions for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                B2Trader Platforms
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 sm:mt-8">
              Capyngen delivers enterprise-grade technology to optimize,
              integrate, and enhance your B2Trader ecosystem for peak
              performance.
            </p>

            <div className="flex flex-wrap items-center mt-8 sm:mt-10 gap-4">
              <Link
                to={"/contact-us"}
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full shadow-lg hover:from-cyan-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                Start Now
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative">
            <div className="lg:min-w-[60vw] relative backdrop-blur-xl bg-gray-800/30 rounded-3xl border border-gray-700/50 shadow-2xl">
              <img
                className="w-full mx-auto rounded-3xl shadow-xl lg:h-[80vh]"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
                alt="Dashboard Preview"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 -z-10 transform translate-x-6 translate-y-6 blur-2xl"></div>
            </div>

            {/* Additional glass effect elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner5;
