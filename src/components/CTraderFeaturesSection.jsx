import React from "react";
import {
  FaTachometerAlt,
  FaMobileAlt,
  FaChartLine,
  FaCogs,
  FaEye,
} from "react-icons/fa";

const CTraderFeaturesSection = () => {
  const features = [
    {
      icon: <FaTachometerAlt />,
      title: "Faster Execution Speed",
      desc: "Built on a modern, optimized architecture, cTrader ensures lightning-fast order execution — ideal for scalpers, professionals, and global institutions.",
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      icon: <FaCogs />,
      title: "Clean & Modern Interface",
      desc: "Its minimalist design and intuitive layout reduce screen clutter, allowing traders to focus entirely on the market and their strategies.",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: <FaEye />,
      title: "True Market Depth (Level II Data)",
      desc: "cTrader gives traders a transparent view of liquidity through Level II market depth, offering complete visibility into order books and price tiers.",
      gradient: "from-blue-400 to-red-400",
    },
    {
      icon: <FaMobileAlt />,
      title: "Superior Web & Mobile Performance",
      desc: "Optimized for global access — cTrader performs seamlessly on web, desktop, and mobile across regions and devices.",
      gradient: "from-red-400 to-pink-500",
    },
    {
      icon: <FaChartLine />,
      title: "Enhanced Transparency",
      desc: "By showing data directly from liquidity providers, cTrader enhances trust and transparency — key for global professional traders.",
      gradient: "from-pink-500 to-purple-500",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#0b0c13] via-[#0d0f19] to-[#10121b] text-white py-28 px-6 overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -left-20 w-[700px] h-[700px] bg-red-600/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-14">
        {/* Header */}
        <header className="space-y-5">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-red-400">
              A Modern Platform
            </span>{" "}
            Built for Professional and Retail Traders
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            cTrader redefines modern trading by combining next-gen speed,
            transparency, and simplicity — empowering professionals and retail
            users alike across global markets.
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 max-w-6xl mx-auto">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="relative group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg shadow-blue-500/5 hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} text-white text-2xl shadow-lg shadow-blue-500/20`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-blue-300 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-base leading-relaxed">
                {item.desc}
              </p>

              {/* Glow Accent */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-blue-400 to-red-400 blur-2xl transition"></div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="max-w-4xl mx-auto mt-16 bg-white/5 backdrop-blur-xl border border-blue-500/10 rounded-3xl p-10 text-center shadow-lg shadow-blue-500/10">
          <p className="text-lg text-gray-300 leading-relaxed">
            The cTrader platform, with its unparalleled{" "}
            <span className="text-cyan-400">transparency</span> and{" "}
            <span className="text-cyan-400">performance</span>, is built for
            global traders who demand{" "}
            <span className="text-blue-400 font-medium">speed</span>,{" "}
            <span className="text-blue-400 font-medium">accuracy</span>, and{" "}
            <span className="text-blue-400 font-medium">intuitive tools</span>{" "}
            that make trading simple, efficient, and rewarding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTraderFeaturesSection;
