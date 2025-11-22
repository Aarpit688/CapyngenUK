import React from "react";
import { FaGlobe, FaChartLine, FaMobileAlt, FaShieldAlt } from "react-icons/fa";
import { assets } from "../assets/assets";

const MT5GlobalStandard = () => {
  const points = [
    { icon: <FaShieldAlt />, text: "Strong framework" },
    { icon: <FaChartLine />, text: "Access to the market in real-time" },
    { icon: <FaMobileAlt />, text: "Work on any device" },
    { icon: <FaGlobe />, text: "Users from different countries globally" },
    { icon: <FaChartLine />, text: "Advanced charting tools" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#030404] via-[#07120f] to-[#0a1e18] text-white py-28 px-6 overflow-hidden">
      {/* Background glows */}
      <div className="absolute -top-40 -right-32 w-[500px] h-[500px] bg-emerald-400/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -left-32 w-[600px] h-[600px] bg-green-600/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Section */}
        <div className="space-y-8">
          <header>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
                MT5 Online Trading:
              </span>{" "}
              A Global Standard
            </h2>
          </header>

          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            MT5 is the worldwide standard that other online trading platforms
            are compared to — offering a powerful, real-time, multi-device
            experience for traders across all regions. As a UK-based company
            serving global clients, we believe MT5 ensures seamless, efficient
            operations and continuous market access worldwide.
          </p>

          {/* Feature list */}
          <ul className="grid sm:grid-cols-2 gap-5 mt-8">
            {points.map((point, idx) => (
              <li
                key={idx}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-gray-800/50 rounded-xl p-4 hover:bg-white/10 transition"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 text-white text-xl">
                  {point.icon}
                </div>
                <p className="text-gray-200 font-medium">{point.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual Section */}
        <div className="relative flex justify-center items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/5 blur-3xl rounded-full"></div>
          <div className="relative bg-white/5 border border-emerald-500/10 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full shadow-xl shadow-emerald-400/10">
            <img
              src={assets.mt16}
              alt="Global MT5 Trading Illustration"
              className="w-full rounded-2xl object-cover"
            />
            <p className="text-center text-sm text-gray-400 mt-4">
              MT5 – the universal gateway to global markets
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MT5GlobalStandard;
