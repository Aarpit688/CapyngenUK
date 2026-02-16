import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const HomeHero = () => {
  const [expanded, setExpanded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Trigger animations on component mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="overflow-hidden bg-black">
      <section className="pt-12 bg-black">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div
            className={`max-w-7xl mx-auto text-center transition-all duration-1000 ease-out transform ${isMounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
          >
            <h1 className="px-6 text-lg text-gray-300 font-inter">
              Convert your traffic into a profitable brokerage business
            </h1>
            <p className="mt-5 text-4xl font-bold leading-tight text-white sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
              Smart brokerage technology suite, built for Global Brokers
              <span className="relative inline-flex sm:inline">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0 animate-pulse"></span>
                <span className="relative"> business </span>
              </span>
            </p>

            <div
              className={`px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9 transition-all duration-1000 delay-300 ease-out transform ${isMounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
            >
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Get more customers
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="pb-12 bg-black mt-8 sm:mt-0">
          <div className="relative flex justify-center items-end max-w-full overflow-hidden sm:overflow-visible">
            {/* Left image (blurred, smaller, behind) */}
            <img
              src={assets.home1}
              alt="Left visual"
              className={`hidden sm:block absolute sm:-bottom-8 md:-bottom-12 lg:-bottom-20 xl:-bottom-30 sm:-left-32 md:-left-48 lg:-left-60 blur-xs scale-80 opacity-50 z-0 pointer-events-none transition-all duration-1000 delay-500 ease-out transform ${isMounted ? "translate-x-0 opacity-50" : "-translate-x-12 opacity-0"
                }`}
            />

            {/* Right image (blurred, smaller, behind) */}
            <img
              src={assets.home1}
              alt="Right visual"
              className={`hidden sm:block absolute sm:-bottom-8 md:-bottom-12 lg:-bottom-20 xl:-bottom-30 sm:-right-32 md:-right-48 lg:-right-60 blur-xs scale-80 opacity-50 z-0 pointer-events-none transition-all duration-1000 delay-500 ease-out transform ${isMounted ? "translate-x-0 opacity-50" : "translate-x-12 opacity-0"
                }`}
            />

            {/* Center image */}
            <div
              className={`relative z-10 w-full lg:max-w-6xl pointer-events-none px-4 sm:px-0 transition-all duration-1000 delay-700 ease-out transform ${isMounted ? "translate-y-0 opacity-100 scale-100 sm:scale-110" : "translate-y-12 opacity-0 scale-95 sm:scale-100"
                }`}
            >
              <img
                className="w-full h-auto object-contain mx-auto"
                src={assets.home1}
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