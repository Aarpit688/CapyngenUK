export default function TurnkeySolutions() {
  const solutions = [
    {
      title: "SiRiX Trading Platform",
      desc: "Give Your Traders the Edge with our SiRiX Trading Platform. powers your brokerage with social trading, Trading View Charts, and advanced order.",
      points: [
        "Market, pending, TP, and stop orders",
        "Intuitive mobile access",
        "Supporting netting and hedging",
      ],
      icon: "↻",
    },
    {
      title: "Broker Portal & CRM",
      desc: "The Broker Portal is your central hub for trading, performance, and compliance. fully customizable and CRM-ready to streamline operations.",
      points: [
        "Integrated KYC/AML, IB management and PSP tools",
        "Built to boost efficiency and scale",
        "Real-time alerts",
      ],
      icon: "▶",
    },
    {
      title: "Liquidity & Data Feed",
      desc: "Power your brokerage with Leverate's fast, scalable liquidity and data across all major asset classes – from FX to crypto.",
      points: [],
      icon: "★",
    },
    {
      title: "Affiliates & IBs",
      desc: "Leverate’s multi-tier system is made for scaling affiliate and IB networks. Track performance, automate rewards, and more.",
      points: [],
      icon: "≡",
    },
    {
      title: "Risk Management",
      desc: "SiRiX Broker Manage every aspect of trading and risk in real time. Built to enhance profitability and streamline operations.",
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
              className="rounded-2xl p-[1px] bg-gradient-to-br from-fuchsia-500/70 via-indigo-500/70 to-cyan-400/70 shadow-[0_8px_24px_rgba(99,102,241,0.35)] hover:shadow-[0_10px_30px_rgba(99,102,241,0.45)] transition-transform duration-300 hover:scale-[1.03]"
            >
              <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
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
                <button className="mt-auto bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition shadow-[0_6px_18px_rgba(99,102,241,0.35)]">
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
              className="rounded-2xl p-[1px] bg-gradient-to-br from-fuchsia-500/70 via-indigo-500/70 to-cyan-400/70 shadow-[0_8px_24px_rgba(99,102,241,0.35)] hover:shadow-[0_10px_30px_rgba(99,102,241,0.45)] transition-transform duration-300 hover:scale-[1.03]"
            >
              <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-6">{item.desc}</p>
                <button className="bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition shadow-[0_6px_18px_rgba(99,102,241,0.35)]">
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
