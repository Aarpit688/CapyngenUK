import React, { useEffect } from "react";
import { assets } from "../assets/assets";

// Simple 3D hover tilt handler
const useTilt = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".tilt-card");

    cards.forEach((card) => {
      const handleMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((centerX - x) / centerX) * 10;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };

      const reset = () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
      };

      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", reset);

      return () => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", reset);
      };
    });
  }, []);
};

const B2ConnectImplementation = () => {
  useTilt();

  const features = [
    "Configuration of the liquidity provider",
    "Setup of smart order routing",
    "Bridge-to-platform connection",
    "Price feed activation",
    "Risk & exposure management",
    "Execution flow enhancement",
    "Performance tracking",
  ];

  return (
    <section className="relative w-full py-14 md:py-20 px-4 sm:px-6 lg:px-10 bg-black">
      <div
        className="relative max-w-7xl mx-auto rounded-xl p-[2px] 
        bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 
        animate-[neonBorder_8s_linear_infinite]"
      >
        {/* Content Container */}
        <div
          className="rounded-xl bg-[#070b12]/90 backdrop-blur-xl 
          border border-emerald-500/20 shadow-[0_0_50px_rgba(0,255,200,0.15)]
          overflow-hidden"
        >
          <div className="grid md:grid-cols-2 items-center">
            {/* LEFT SIDE CONTENT */}
            <div className="p-6 sm:p-8 lg:p-12 tilt-card transition-transform duration-300">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug text-white">
                How Aynzenix Implements AynX Connect for Brokers
              </h2>

              <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
                Aynzenix takes care of every aspect of your bridge deployment:
              </p>

              <ul className="mt-6 space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-emerald-400 mr-3 mt-1 flex-shrink-0 drop-shadow-[0_0_6px_#00ffb3]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-white text-sm sm:text-base lg:text-lg">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-base sm:text-lg lg:text-xl text-gray-300 font-medium text-center md:text-left">
                We ensure brokers receive a stable, optimized, enterprise-grade
                liquidity environment.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full h-[260px] sm:h-[340px] md:h-full tilt-card transition-transform duration-300">
              <img
                src={assets.b2Connect03}
                alt="Technical Implementation"
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 
                bg-gradient-to-t md:bg-gradient-to-l 
                from-[#070b12]/95 via-[#070b12]/40 to-transparent"
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes neonBorder {
            0% { filter: hue-rotate(0deg);}
            100% { filter: hue-rotate(360deg);}
          }
        `}
      </style>
    </section>
  );
};

export default B2ConnectImplementation;
