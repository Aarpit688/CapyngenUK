import React from "react";
import { useInView } from "react-intersection-observer";

export default function TurnkeySolutions() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const solutions = [
    {
      title: "Forex Broker",
      desc: "",
      points: ["Full MT5 Setup", "Brokerage CRM", "Trading Tools"],
      icon: "↻",
    },
    {
      title: "Crypto Exchange",
      desc: "",
      points: [
        "Secure Exchange Suite",
        "Crypto Wallet Infra",
        "Token Listing Support",
      ],
      icon: "▶",
    },
    {
      title: "Crypto Broker",
      desc: "",
      points: ["Multi-Asset Desk", "Crypto Risk Tools", "Leverage Management"],
      icon: "★",
    },
    {
      title: "Liquidity Provider",
      desc: "",
      points: [
        "Deep Market Feeds",
        "Tier-1 Aggregation",
        "Low-Latency Routing",
      ],
      icon: "≡",
    },
  ];

  return (
    <section className="w-full bg-black text-white pt-10 pb-20 overflow-hidden">
      <div className="max-w-[90vw] mx-auto" ref={ref}>
        {/* Heading */}
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-12 transition-all duration-700 ease-out transform ${inView ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
            }`}
        >
          Smarter Brokerage Launch with Our Turnkey Solutions
        </h2>

        {/* Row with scroll for mobile, grid for tablet/desktop */}
        <div className="flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible pb-8 scrollbar-hide snap-x snap-mandatory">
          {solutions.map((item, i) => (
            <div
              key={i}
              className={`min-w-[280px] w-full md:min-w-0 snap-start rounded-2xl p-px bg-gradient-to-br from-fuchsia-500/70 via-indigo-500/70 to-cyan-400/70 hover:shadow-[0_10px_35px_rgba(99,102,241,0.5)] transition-all duration-700 hover:duration-300 ease-out hover:-translate-y-2 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
                }`}
              style={{ transitionDelay: inView ? `${i * 150}ms` : "0ms" }}
            >
              <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full flex flex-col">
                {/* Icon */}
                <div className="text-4xl mb-4">{item.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>

                {/* Description */}
                {item.desc && <p className="text-gray-300 mb-4">{item.desc}</p>}

                {/* Points */}
                {item.points && (
                  <ul className="text-gray-300 space-y-2 mb-6">
                    {item.points.map((pt, j) => (
                      <li key={j} className="flex gap-2 items-start">
                        <span className="text-cyan-400">•</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA Button */}
                <button className="mt-auto bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-white px-4 py-2 rounded-full font-medium hover:opacity-90 shadow-[0_6px_18px_rgba(99,102,241,0.35)] transition-all hover:scale-[1.05]">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hide Scrollbar Utility */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}