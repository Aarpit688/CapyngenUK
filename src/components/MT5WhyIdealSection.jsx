import React from "react";
import { assets } from "../assets/assets";

const MT5WhyIdealSection = () => {
  const features = [
    {
      title: "Advanced Analytical Tools",
      desc: `MT5 is equipped with 21 timeframes, more than 80 indicators, and several analytical objects. These instruments enable worldwide clients to perform deep technical analysis of any market sector, be it forex, commodities, or other.`,
      img: assets.arkTrading4,
    },
    {
      title: "Multi-Asset Trading Environment",
      desc: `Global traders shouldn't rely on one market. MT5 lets them trade in different markets — Forex, Indices, Commodities, Metals, Energy markets, Stocks (CFDs), and Crypto CFDs.`,
      img: "https://picsum.photos/id/1028/600/400",
    },
    {
      title: "Secure Forex Trading on MT5",
      desc: `Among international clients, security is always a top concern. MT5 implements cutting-edge data encryption, secure communication protocols, and robust server architecture — ensuring a safe trading environment that builds global trader confidence.`,
      img: "https://picsum.photos/id/1035/600/400",
    },
    {
      title: "Automated and Algorithmic Trading",
      desc: `With Expert Advisors (EAs), MT5 allows users to automate their strategies. Automation ensures continuous, timezone-independent trading — essential for global traders who operate 24/7.`,
      img: "https://picsum.photos/id/1047/600/400",
    },
    {
      title: "Fast Execution and Global Connectivity",
      desc: `International data centres enable UK-based MT5 operations to achieve low latency, minimal slippage, and seamless execution across all regions — vital for high-frequency traders and scalpers.`,
      img: "https://picsum.photos/id/1069/600/400",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#0b0e0e] via-[#0c1715] to-[#08201D] text-white py-24 px-6 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <header className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Why MT5 Is Ideal for a UK-Based Global Trading Company
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Discover why MetaTrader 5 stands as the global benchmark for
            flexibility, performance, and security in modern trading operations.
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

// Reusable Feature Card Component
const FeatureCard = ({ item, idx }) => (
  <div className="relative group bg-gray-800/40 backdrop-blur-xl border border-gray-700/40 rounded-md shadow-lg overflow-hidden transition hover:-translate-y-1 duration-300 max-w-[420px] mx-auto">
    {/* Image */}
    <div className="h-44 overflow-hidden">
      <img
        src={item.img}
        alt={item.title}
        className="object-cover w-full h-full transition-transform duration-700 ease-in-out"
      />
    </div>

    {/* Content */}
    <div className="p-6 sm:p-7">
      <h3 className="text-xl font-bold text-green-400 mb-2">
        {idx + 1}. {item.title}
      </h3>
      <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
    </div>
  </div>
);

export default MT5WhyIdealSection;
