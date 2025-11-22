import React from "react";
import {
  FaPlayCircle,
  FaMobileAlt,
  FaMousePointer,
  FaChartBar,
} from "react-icons/fa";
import { assets } from "../assets/assets";

const MT5ForBeginners = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#0a0d0c] via-[#0e1916] to-[#0a1e1a] text-white py-28 overflow-hidden">
      {/* Background visuals */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-600/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-[90vw] mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Image Showcase */}
        <div className="relative lg:w-1/2 flex justify-center">
          <div className="relative w-[90%]">
            <img
              src={assets.mt15}
              alt="MT5 Platform Interface for Beginners"
              className="w-full rounded-3xl shadow-2xl border border-emerald-500/20 backdrop-blur-xl"
            />

            {/* Floating glass highlight */}
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Right Text Content */}
        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
              MetaTrader 5 for Beginners
            </span>{" "}
            (Global Beginner-Friendly Design)
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            MT5 develops a{" "}
            <span className="text-emerald-300">stable environment</span> ideal
            for beginners from any part of the world — blending simplicity,
            speed, and accessibility to help traders learn effectively.
          </p>

          {/* Feature Highlights */}
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-emerald-500/10 border border-emerald-400/30 flex-shrink-0">
                <FaMousePointer className="text-emerald-400 text-lg" />
              </div>
              <p className="text-gray-300 text-lg">
                <span className="text-green-400 font-semibold">
                  Easy to Operate:
                </span>{" "}
                An intuitive interface that helps beginners navigate
                confidently.
              </p>
            </li>

            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-emerald-500/10 border border-emerald-400/30 flex-shrink-0">
                <FaChartBar className="text-emerald-400 text-lg" />
              </div>
              <p className="text-gray-300 text-lg">
                <span className="text-green-400 font-semibold">
                  Built-in Indicators:
                </span>{" "}
                Explore the markets with preloaded analytical tools and chart
                features.
              </p>
            </li>

            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-emerald-500/10 border border-emerald-400/30 flex-shrink-0">
                <FaMobileAlt className="text-emerald-400 text-lg" />
              </div>
              <p className="text-gray-300 text-lg">
                <span className="text-green-400 font-semibold">
                  Mobile Access:
                </span>{" "}
                Trade on the go — MT5 runs smoothly on mobile, desktop, and web.
              </p>
            </li>
          </ul>

          {/* Supporting Text */}
          <div className="pt-4 border-t border-gray-700/50">
            <p className="text-gray-400 text-lg leading-relaxed">
              A UK-based global broker can enhance this beginner experience by
              offering{" "}
              <span className="text-emerald-300 font-medium">
                tutorials, mentorship, and interactive learning sessions
              </span>{" "}
              — helping new traders gain confidence and master MT5 efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MT5ForBeginners;
