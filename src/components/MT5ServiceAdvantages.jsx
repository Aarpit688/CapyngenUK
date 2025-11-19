import React from "react";
import { Layers, Zap, Server } from "lucide-react";

export default function MT5ServiceAdvantages() {
  const title = "Key Advantages of MT5 Services for Brokers";

  const advantagesList = [
    {
      title: "Seamless Multi-Asset Trading",
      desc: "Combine forex, CFDs, commodities, and cryptocurrencies into a single platform.",
      icon: <Layers className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Fast Execution and Connectivity",
      desc: "Low-latency servers and liquidity bridges ensure seamless trading experiences.",
      icon: <Zap className="w-6 h-6 text-amber-400" />,
    },
    {
      title: "Turnkey Infrastructure",
      desc: "Complete MT5 hosting, backend management, and operational support.",
      icon: <Server className="w-6 h-6 text-emerald-400" />,
    },
  ];

  const conclusion =
    "These features turn MT5 into the ideal technology platform for brokers seeking reliability, scalability, and global connectivity.";

  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto">
        {/* HEADER */}
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-slate-400 text-center text-lg leading-relaxed">
            MT5 gives brokers performance, speed, and multi-asset capability —
            all backed by Capyngen’s secure infrastructure and technology stack.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantagesList.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col gap-4 hover:border-blue-500/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center">
                {item.icon}
              </div>

              <h3 className="text-white text-lg font-semibold">{item.title}</h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* VISUAL ROW */}
        <div className="mt-16 flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Image */}
          <div className="lg:w-1/2 w-full">
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
              <img
                src="https://picsum.photos/seed/mt5adv1/900/600"
                alt="Multi-Asset Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Conclusion */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <h4 className="text-xl font-semibold text-white mb-4">
                Final Takeaway
              </h4>
              <p className="text-slate-400 leading-relaxed">{conclusion}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
