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

        card.style.transform = rotateX(`${rotateX}deg) rotateY(${rotateY}deg`);
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
    <section className="relative w-full min-h-screen py-20 px-6 overflow-hidden bg-black">
      {/* Neon Animated Border Wrapper */}
      <div
        className="relative max-w-7xl w-full mx-auto mt-10 rounded-xl p-[2px] 
                      bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 
                      animate-[neonBorder_8s_linear_infinite]"
      >
        {/* Inner Container */}
        <div
          className="rounded-xl bg-[#070b12]/90 backdrop-blur-xl 
                        border border-emerald-500/20 shadow-[0_0_50px_rgba(0,255,200,0.15)] 
                        overflow-hidden min-h-screen"
        >
          <div className="grid md:grid-cols-2 h-full items-stretch">
            {/* LEFT CONTENT */}
            <div
              className="p-10 md:p-14 text-white tilt-card 
                            transition-transform duration-300 flex flex-col justify-center"
            >
              <h2 className="text-4xl leading-normal font-extrabold text-transparent text-white">
                How Capyngen Implements B2Connect for Brokers
              </h2>

              <p className="mt-6 text-white leading-relaxed text-lg">
                Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ takes care of every aspect of your
                bridge deployment:
              </p>

              <ul className="mt-8 space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start group">
                    <svg
                      className="w-6 h-6 text-emerald-400 mr-3 mt-1 flex-shrink-0 
                                 drop-shadow-[0_0_6px_#00ffb3]"
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
                    <span className="text-white text-xl">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-10 text-center text-xl">
                We ensure brokers receive a stable, optimized, enterprise-grade
                liquidity environment.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative h-full tilt-card transition-transform duration-300">
              <img
                src={assets.b2Connect03}
                alt="Technical Implementation"
                className="w-full h-full object-cover"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l 
                              from-[#070b12]/80 via-transparent to-transparent"
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes neonBorder {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
          }
          @keyframes moveGrid {
            0% { background-position: 0 0; }
            100% { background-position: 1000px 1000px; }
          }
        `}
      </style>
    </section>
  );
};

export default B2ConnectImplementation;
