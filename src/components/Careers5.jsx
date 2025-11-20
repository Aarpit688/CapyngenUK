import React from "react";
import { assets } from "../assets/assets";

export const Careers5 = () => {
  const values = [
    "Innovation",
    "Transparency",
    "Diversity",
    "Collaboration",
    "Ownership",
    "Excellence",
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden text-white">
      {/* 🌌 Aurora Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[900px] h-[900px] bg-gradient-to-br from-blue-600/40 to-purple-600/40 rounded-full blur-[150px] animate-pulse -top-48 -left-48" />
        <div className="absolute w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/40 to-indigo-500/40 rounded-full blur-[150px] animate-ping bottom-0 right-0" />
      </div>

      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* LEFT: Content */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Life at Capyngen
            </h2>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Working at Capyngen means being in a vibrant, rapid-paced, and
              supportive environment where every voice is valued. Our culture is
              built on:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-500/20 text-green-300 mr-3 backdrop-blur-xl border border-green-400/20">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-white">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-gray-300 leading-relaxed border-l-4 border-cyan-400 pl-6 italic">
              We make a habit of recognizing accomplishments, allowing for trial
              and error, and supporting the personal and professional growth of
              each team member.
            </p>
          </div>

          {/* RIGHT: Media Grid */}
          <div className="grid grid-cols-2 gap-4 h-full">
            {/* Left Column */}
            <div className="space-y-4 mt-8">
              {/* Image */}
              <div className="rounded-md overflow-hidden backdrop-blur-xl bg-white/10 border border-white/10 shadow-[0_8px_30px_rgba(255,255,255,0.1)]">
                <img
                  src={assets.careers5}
                  alt="Capyngen team collaboration"
                  className="object-cover h-64 w-full"
                />
              </div>

              {/* Card */}
              <div className="rounded-md p-6 text-white bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl flex flex-col justify-center h-40">
                <span className="text-4xl font-bold block mb-1">10+</span>
                <span className="text-cyan-200 text-sm font-medium">
                  Global Locations
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {/* Card */}
              <div className="rounded-md p-6 text-white bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl flex flex-col justify-center h-40">
                <span className="text-4xl font-bold block mb-1">24/7</span>
                <span className="text-cyan-200 text-sm font-medium">
                  Innovation Cycle
                </span>
              </div>

              {/* Image */}
              <div className="rounded-md overflow-hidden backdrop-blur-xl bg-white/10 border border-white/10 shadow-[0_8px_30px_rgba(255,255,255,0.1)]">
                <img
                  src={assets.careers6}
                  alt="Office culture and events"
                  className="object-cover h-80 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Careers5;
