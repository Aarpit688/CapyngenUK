export default function TurnkeySolutions() {
  const solutions = [
    {
      title: "SiRiX Trading Platform",
      desc: "Empower your traders with the ultra-advanced SiRiX Trading Platform, designed for seamless execution and global-grade trading performance.",
      points: [
        "Market, pending, TP & SL orders",
        "Advanced social trading",
        "TradingView charting integration",
        "Intuitive mobile access",
        "Supports both netting & hedging",
      ],
      icon: "↻",
    },
    {
      title: "Broker Portal & CRM",
      desc: "Your all-in-one operational hub — built to simplify compliance, optimize performance, and automate your brokerage workflows.",
      points: [
        "Integrated KYC/AML, IB management & PSP tools",
        "Real-time alerts",
        "Fully customizable CRM",
        "Scalable architecture for global brokerages",
      ],
      icon: "▶",
    },
    {
      title: "Liquidity & Data Feed",
      desc: "Boost your brokerage with high-speed, scalable liquidity and real-time market data across major asset classes — FX, commodities, indices, and crypto.",
      points: [],
      icon: "★",
    },
    {
      title: "Affiliates & IBs",
      desc: "Grow your brokerage with an advanced, multi-tier Affiliate & IB Management System. Track performance, automate rewards, and scale your partner network globally.",
      points: [],
      icon: "≡",
    },
    {
      title: "Risk Management",
      desc: "Take full control of trading and exposure with real-time Risk Management Tools — designed to enhance profitability and streamline broker operations.",
      points: [],
      icon: "◆",
    },
  ];

  return (
    <section className="w-full bg-black text-white pt-10 pb-20">
      <div className="max-w-[90vw] mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-12">
          Launch Smarter with Our Turnkey Solutions
        </h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {solutions.slice(0, 2).map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-px bg-linear-to-br from-fuchsia-500/70 via-indigo-500/70 to-cyan-400/70 shadow-[0_8px_24px_rgba(99,102,241,0.35)] hover:shadow-[0_10px_30px_rgba(99,102,241,0.45)] transition-transform duration-300 hover:scale-[1.03]"
            >
              <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.desc}</p>
                <ul className="text-gray-300 space-y-2 mb-5">
                  {item.points.map((pt, j) => (
                    <li key={j} className="flex gap-2 items-start">
                      <span className="text-cyan-400">•</span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <button className="mt-auto bg-linear-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition shadow-[0_6px_18px_rgba(99,102,241,0.35)]">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10 mt-6">
          {solutions.slice(2).map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-px bg-linear-to-br from-fuchsia-500/70 via-indigo-500/70 to-cyan-400/70 shadow-[0_8px_24px_rgba(99,102,241,0.35)] hover:shadow-[0_10px_30px_rgba(99,102,241,0.45)] transition-transform duration-300 hover:scale-[1.03]"
            >
              <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-6">{item.desc}</p>
                <button className="bg-linear-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition shadow-[0_6px_18px_rgba(99,102,241,0.35)]">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
