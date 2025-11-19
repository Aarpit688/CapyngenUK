import React from "react";
import { Zap, Waves, Code2, Globe2 } from "lucide-react";

const NTraderAdvantages = () => {
  const advantages = [
    {
      text: "A​‍​‌‍​‍‌​‍​‌‍​‍‌ fast and low-latency global network is used to execute orders.",
      icon: <Zap className="w-6 h-6 text-red-400" />,
      title: "Global Execution",
    },
    {
      text: "Significant liquidity is accessed via the nTrader bridge.",
      icon: <Waves className="w-6 h-6 text-red-400" />,
      title: "Deep Liquidity",
    },
    {
      text: "There is also flexible API support for CRMs, PSPs, KYC, and analytics systems.",
      icon: <Code2 className="w-6 h-6 text-red-400" />,
      title: "Flexible API",
    },
  ];

  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Main Advantages of Using{" "}
            <span className="text-red-500">nTrader Platform</span>
          </h2>
          <div className="w-24 h-1 bg-red-500/50 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {advantages.map((adv, index) => (
            <div
              key={index}
              className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-red-500/10 transition-colors"></div>

              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors shadow-lg border border-slate-700 group-hover:border-red-500/30 relative z-10">
                {adv.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-200 transition-colors relative z-10">
                {adv.title}
              </h3>

              <p className="text-slate-400 leading-relaxed relative z-10">
                {adv.text}
              </p>
            </div>
          ))}
        </div>

        <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center gap-8">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center md:text-left">
            <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed">
              "Such features enable brokers to go on with their operations in a
              trouble-free manner and expand their business in various
              ​‍​‌‍​‍‌​‍​‌‍​‍‌regions."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NTraderAdvantages;
