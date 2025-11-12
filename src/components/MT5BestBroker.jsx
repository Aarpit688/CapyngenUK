import React from "react";
import {
  FaShieldAlt,
  FaBolt,
  FaPercent,
  FaGlobe,
  FaServer,
} from "react-icons/fa";

const MT5BestBroker = () => {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Regulation and Compliance",
      desc: "A UK-regulated institution provides extra assurance for global traders — ensuring transparency, investor protection, and long-term trust.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <FaPercent />,
      title: "Spreads and Trading Costs",
      desc: "Global clients seek competitive spreads, low commissions, and transparent cost structures — making trading efficient and fair worldwide.",
      color: "from-teal-400 to-cyan-500",
    },
    {
      icon: <FaBolt />,
      title: "Execution Quality",
      desc: "With markets operating across time zones, speed is everything. MT5 enables ultra-fast and stable execution across all regions.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <FaGlobe />,
      title: "Trading Conditions",
      desc: "Global traders expect diversity, flexibility, and reliability — leverage options, multi-asset access, fast deposits, and strong 24/7 support.",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: <FaServer />,
      title: "Platform Stability",
      desc: "MT5 should perform flawlessly across desktop, web, and mobile versions — ensuring a smooth trading experience globally.",
      color: "from-pink-400 to-purple-500",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#050706] via-[#08100e] to-[#091c18] text-white py-28 px-6 overflow-hidden">
      {/* Background glows */}
      <div className="absolute -top-48 -left-32 w-[500px] h-[500px] bg-emerald-400/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-600/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <header className="text-center space-y-5">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
              Choosing the Best MT5 Forex Broker Globally
            </span>{" "}
            (Key Factors)
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Selecting the right MetaTrader 5 broker requires precision —
            balancing trust, technology, and global performance for traders
            worldwide.
          </p>
        </header>

        {/* Feature Cards Layout */}
        <div className="space-y-12">
          {/* Row 1 — Three cards */}
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {features.slice(0, 3).map((item, idx) => (
              <FeatureCard key={idx} item={item} idx={idx} />
            ))}
          </div>

          {/* Row 2 — Two centered cards */}
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 justify-center max-w-5xl mx-auto">
            {features.slice(3).map((item, idx) => (
              <FeatureCard key={idx + 3} item={item} idx={idx + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* === Feature Card Component === */
const FeatureCard = ({ item, idx }) => {
  return (
    <div className="relative group rounded-2xl bg-white/5 backdrop-blur-xl border border-gray-800/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10">
      {/* Glowing circle */}
      <div
        className={`absolute -top-10 right-6 w-24 h-24 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition`}
      ></div>

      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-2xl mb-6 shadow-lg shadow-emerald-400/20`}
      >
        {item.icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-3 text-emerald-300">
        {idx + 1}. {item.title}
      </h3>
      <p className="text-gray-300 leading-relaxed text-base">{item.desc}</p>
    </div>
  );
};

export default MT5BestBroker;
