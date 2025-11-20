import React from "react";
import { assets } from "../assets/assets"; // your image asset imports here

// -- Top & Bottom Decorative Curves (unchanged) --
const TopCurve = () => (
  <svg
    viewBox="0 0 1920 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-0 -top-20 w-full h-40 pointer-events-none"
    preserveAspectRatio="none"
  >
    <path d="M0,60 C480,0 1440,140 1920,40 L1920,160 L0,160 Z" fill="#111827" />
  </svg>
);

// -- Main Component --
export default function IntegrationShowcase() {
  return (
    <section className="relative bg-[#111827] overflow-visible flex items-center px-0">
      <TopCurve />

      {/* Background glows for depth */}
      <span className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-fuchsia-600 opacity-30 blur-[180px] pointer-events-none"></span>
      <span className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-400 opacity-20 blur-[160px] pointer-events-none"></span>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto min-h-[520px] px-8 py-20 gap-12">
        <div className="flex-1 ">
          <h2 className="text-white font-bold text-4xl md:text-5xl leading-tight mb-6">
            Seamless, Limitless Integration for Your Brokerage
          </h2>
          <p className="text-slate-100 text-lg md:text-xl max-w-[520px]">
            Capyngen’s ultra-advanced SiriX-based trading infrastructure
            delivers limitless integration with leading forex distribution
            systems, next-gen CRM solutions, payment gateways, liquidity
            providers, and essential fintech apps — ensuring brokers experience
            a fast, smooth, secure, and fully hassle-free setup from day one.
          </p>
          <button className="mt-8 bg-linear-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Right Side Image with subtle reflection */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={assets.sirixTradingPlatform} // replace with your actual image path
            alt="Integration Preview"
            className="w-[400px] md:w-[480px] lg:w-[520px] rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
