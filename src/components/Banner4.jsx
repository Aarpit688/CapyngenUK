import React, { useState } from "react";
import { Link } from "react-router-dom";

const Banner4 = ({
  badge = "A Hub for Designers, Developers & Marketers",
  gradientText = "Complete nTrader Platform ",
  title = "Technology for Emerging Brokers",
  description = "We provide flexible, modern IT solutions tailored to enhance the nTrader ecosystem for brokers worldwide.",
  buttonText = "Start Exploring Inspiration",
  statsText = "42 new design inspirations added last week",
  image = "https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png",
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-20 xl:py-24">
        <div className="px-4 mx-auto max-w-[90vw]">
          <div className="relative">
            {/* Left Section */}
            <div className="lg:w-2/3">
              <p className="text-sm font-normal tracking-widest text-gray-300 uppercase">
                {badge}
              </p>

              <h1 className="mt-6 text-4xl font-normal sm:mt-10 sm:text-5xl lg:text-6xl leading-normal">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                  {gradientText}
                </span>{" "}
                {title}
              </h1>

              <p className="max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8">
                {description}
              </p>

              <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <Link
                  to="/contact-us"
                  className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full"
                  role="button"
                >
                  {buttonText}
                </Link>
              </div>

              <Link
                to={"/contact-us"}
                className="inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-6"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 7H21M21 7V15M21 7L13 15L9 11L3 17"
                    stroke="url(#a)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="a"
                      x1="3"
                      y1="7"
                      x2="22.2956"
                      y2="12.0274"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="var(--color-cyan-500)" />
                      <stop offset="100%" stopColor="var(--color-purple-500)" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
            </div>

            {/* Right Section */}
            <div className="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
              <img
                className="w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl"
                src={image}
                alt="3D Illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner4;
