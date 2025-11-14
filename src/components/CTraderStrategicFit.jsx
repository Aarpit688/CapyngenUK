import React from "react";
import {
  FaGlobeEurope,
  FaChartBar,
  FaServer,
  FaExchangeAlt,
} from "react-icons/fa";

const CTraderStrategicFit = () => {
  const reasons = [
    {
      icon: <FaChartBar />,
      title: "Strong Transparency Standards",
      desc: `cTrader reveals full market depth, displaying liquidity and multiple pricing tiers — a crucial advantage for institutional-level traders and scalpers seeking clear, transparent pricing.`,
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: <FaExchangeAlt />,
      title: "Multi-Asset Coverage for Worldwide Users",
      desc: `Trade major & minor forex pairs, global indices, metals, energy products, and cryptocurrency CFDs — all through one platform, accessible globally across Europe, Asia, Africa, and the Middle East.`,
      color: "from-red-400 to-pink-500",
    },
    {
      icon: <FaServer />,
      title: "Stability Across Regions",
      desc: `With continuously upgraded global infrastructure, cTrader ensures performance consistency and reliability across jurisdictions — a perfect match for UK companies operating internationally.`,
      color: "from-cyan-400 to-blue-500",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#0b0d12] via-[#0d1019] to-[#11131b] text-white py-28 px-6 overflow-hidden">
      {/* Background world map pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_blank_without_borders.svg')] bg-cover bg-center"
        aria-hidden="true"
      ></div>

      {/* Glow accents */}
      <div className="absolute -top-20 -left-10 w-[600px] h-[600px] bg-blue-600/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-600/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16 text-center">
        {/* Header */}
        <header className="space-y-5">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-red-400">
              Why cTrader is a Strategic Fit
            </span>{" "}
            for a UK Company with Global Reach
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            A UK-regulated organisation operates under some of the most rigorous
            standards worldwide. Paired with cTrader’s advanced technology, this
            synergy creates a globally trusted trading experience.
          </p>
        </header>

        {/* Reason Panels */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 max-w-6xl mx-auto">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg shadow-blue-500/5 hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 mb-6 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white text-2xl shadow-lg shadow-blue-500/20`}
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

              {/* Glow accent */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-blue-400 to-red-400 blur-2xl transition"></div>
            </div>
          ))}
        </div>

        {/* Summary Panel */}
        <div className="relative mt-20 bg-gradient-to-r from-blue-500/10 to-red-500/10 border border-blue-500/10 rounded-3xl backdrop-blur-xl p-12 max-w-5xl mx-auto shadow-xl shadow-blue-500/10">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
            A UK-Based Global Advantage
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            With its focus on transparency, multi-asset functionality, and
            infrastructure resilience,{" "}
            <span className="text-blue-400 font-medium">cTrader</span> aligns
            perfectly with the standards and expectations of a UK-regulated
            financial company — allowing seamless global operations and client
            satisfaction worldwide.
          </p>

          {/* Background glow */}
          <div className="absolute -bottom-10 right-0 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-red-400/10 blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default CTraderStrategicFit;
