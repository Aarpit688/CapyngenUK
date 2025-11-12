import React from "react";
import { assets } from "../assets/assets";

const Banner8 = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      {/* Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center max-w-[90vw] mx-auto  py-16 sm:py-20 gap-6 lg:gap-16">
        {/* Left Image */}
        <div className="relative w-full flex justify-center">
          <div className="relative w-full">
            <img
              src={assets.ai1}
              alt="Samuel Abera"
              className="lg:min-h-[80vh] object-cover shadow-2xl"
            />
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-green-500/20 rounded-2xl blur-3xl"></div>
          </div>
        </div>

        {/* Right Content Card */}
        <div className="relative lg:-ml-20 w-full max-w-xl bg-gray-800/30 backdrop-blur-2xl border border-gray-700/50 shadow-2xl p-8 sm:p-10 lg:p-12">
          <p className="text-green-400 text-sm font-medium tracking-wide mb-2">
            FullStack Developer
          </p>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Samuel Abera
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
            I'm a passionate FullStack Developer focused on crafting impactful,
            user-friendly digital experiences. My work blends design and
            engineering — transforming ideas into functional, elegant, and
            scalable solutions.
          </p>
          <button className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 border border-gray-700/50 rounded-full transition-all duration-300 hover:from-green-700 hover:to-emerald-700 backdrop-blur-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            View More
          </button>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Banner8;
