export default function TurnkeySolutions() {
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
    <section className="w-full bg-black text-white pt-10 pb-20">
      <div className="max-w-[90vw] mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-12">
          Smarter Brokerage Launch with Our Turnkey Solutions
        </h2>

        {/* Row with scroll for mobile */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {solutions.map((item, i) => (
            <div
              key={i}
              className="min-w-[280px] w-full md:w-[23%] snap-start rounded-2xl p-px bg-gradient-to-br from-fuchsia-500/70 via-indigo-500/70 to-cyan-400/70 hover:shadow-[0_10px_35px_rgba(99,102,241,0.5)] transition-all duration-300"
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
                <button className="mt-auto bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-white px-4 py-2 rounded-full font-medium hover:opacity-90 shadow-[0_6px_18px_rgba(99,102,241,0.35)] transition hover:scale-[1.02]">
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
