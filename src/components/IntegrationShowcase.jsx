import React from "react";
import { useInView } from "react-intersection-observer";
import { assets } from "../assets/assets"; // your image asset imports here

// -- Top & Bottom Decorative Curves (unchanged) --
const TopCurve = () => (
  <svg
    viewBox="0 0 1920 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-0 -top-12 sm:-top-16 md:-top-20 w-full h-24 sm:h-32 md:h-40 pointer-events-none"
    preserveAspectRatio="none"
  >
    <path d="M0,60 C480,0 1440,140 1920,40 L1920,160 L0,160 Z" fill="#111827" />
  </svg>
);

// -- Main Component --
export default function IntegrationShowcase() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative bg-[#111827] overflow-visible flex items-center px-0">
      <TopCurve />

      {/* Main Content */}
      <div
        ref={ref}
        className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto min-h-[520px] px-6 sm:px-8 py-16 md:py-20 gap-10 md:gap-12"
      >
        <div
          className={`flex-1 transition-all duration-1000 ease-out transform ${inView ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
        >
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 sm:mb-6">
            Seamless, Limitless Integration for Your Brokerage
          </h2>
          <p className="text-slate-100 text-base sm:text-lg md:text-xl max-w-[520px]">
            Aynzenix’s ultra-advanced SiriX-based trading infrastructure
            delivers limitless integration with leading forex distribution
            systems, next-gen CRM solutions, payment gateways, liquidity
            providers, and essential fintech apps — ensuring brokers experience
            a fast, smooth, secure, and fully hassle-free setup from day one.
          </p>
          <button className="mt-6 sm:mt-8 bg-linear-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Right Side Image with subtle reflection */}
        <div
          className={`flex-1 flex justify-center items-center w-full transition-all duration-1000 delay-300 ease-out transform ${inView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
        >
          <img
            src={assets.sirixTradingPlatform}
            alt="Integration Preview"
            className="w-full max-w-[340px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}