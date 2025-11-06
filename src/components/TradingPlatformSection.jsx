import React from "react";
import { ArrowRight } from "lucide-react";

const TradingPlatformSection = ({
  title,
  highlight,
  description,
  buttonText = "Learn More",
  image,
  reverse = false,
}) => {
  return (
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden bg-linear-to-br from-fuchsia-500/70 via-indigo-500/70 to-cyan-400/70 shadow-[0_8px_24px_rgba(99,102,241,0.35)]">
      <div
        className={`max-w-[90vw] mx-auto flex flex-col md:flex-row items-center justify-between ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Left Content */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0">
          <div className="rounded-3xl p-px ">
            <h1 className="text-4xl md:text-5xl font-semibold leading-normal mb-6">
              {title}{" "}
              <span className="font-bold text-gray-200">{highlight}</span>
            </h1>
            <div className="text-gray-300 mb-8 text-base md:text-lg max-w-lg">
              {description}
            </div>
            <button className="bg-linear-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 hover:opacity-90 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition-all duration-300 shadow-[0_8px_24px_rgba(99,102,241,0.35)]">
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
          <img
            src={image}
            alt={highlight || "Trading Platform Preview"}
            className="w-[320px] md:w-[400px] lg:w-[460px] rounded-3xl"
          />
        </div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute -top-10 -left-10 w-[420px] h-[420px] bg-fuchsia-500/20 opacity-40 blur-[180px] rounded-full"></div>
      <div className="absolute -bottom-10 right-0 w-[420px] h-[420px] bg-indigo-500/20 opacity-30 blur-[170px] rounded-full"></div>
      <div className="absolute top-1/2 -translate-y-1/2 left-1/3 w-[360px] h-[360px] bg-cyan-400/20 opacity-20 blur-[160px] rounded-full"></div>
    </section>
  );
};

export default TradingPlatformSection;
