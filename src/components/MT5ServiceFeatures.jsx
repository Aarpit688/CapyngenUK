import React from "react";
import { Workflow, Zap, Server, Globe2 } from "lucide-react";

export default function MT5ServiceFeatures() {
  // Exact content strings
  const title = "Key Features of Capyngen’s MT5 Services";

  const features = [
    {
      title: "MetaTrader 5 Platform Integration",
      desc: "Make MT5 work smoothly with liquidity providers, CRMs, and trading systems.",
      icon: <Workflow className="w-6 h-6 text-white" />,
      color: "bg-blue-500",
    },
    {
      title: "MT5 Liquidity Bridge and API Solutions",
      desc: "Enable your platform to access various liquidity providers to get better spreads and quicker execution.",
      icon: <Zap className="w-6 h-6 text-white" />,
      color: "bg-amber-500",
    },
    {
      title: "Backend Infrastructure and Hosting Support",
      desc: "Keep the operations very fast, secure, and with low latency for all the trades.",
      icon: <Server className="w-6 h-6 text-white" />,
      color: "bg-emerald-500",
    },
  ];

  const conclusion =
    "With these features, brokers are able to deliver quick, dependable, and multi-asset trading experiences, lower the technical complexity level, and keep operational efficiency going in the global markets.";

  return (
    <section className="bg-black overflow-hidden py-20">
      <div className="relative z-10 max-w-[90vw] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            {title}
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/3 backdrop-blur-sm border border-white/6 rounded-2xl p-8 hover:bg-white/6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20 group"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 min-h-[64px] flex items-center">
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-900/30 to-slate-900/30 rounded-2xl p-8 border border-blue-500/20 backdrop-blur-md">
          <div className="flex flex-col md:flex-row gap-6 items-center text-center md:text-left">
            <p className="text-xl text-center text-slate-200 font-medium leading-relaxed">
              {conclusion}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
