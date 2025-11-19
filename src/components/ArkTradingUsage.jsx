import React from "react";
import {
  Rocket,
  Building2,
  Check,
  TrendingUp,
  Zap,
  Sliders,
  Globe,
  Layers,
  Server,
} from "lucide-react";

const ArkTradingUsage = () => {
  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            How Startups and Large Brokers Use{" "}
            <span className="text-rose-500">Ark Trading</span>
          </h2>
          <div className="w-24 h-1 bg-rose-500/50 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Startup Companies Card */}
          <div className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-rose-500/40 transition-all duration-500 flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 to-transparent pointer-events-none"></div>

            <div className="p-8 md:p-12 flex-1">
              <div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-8 h-8 text-rose-400" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-8">
                Startup Companies
              </h3>

              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
                    <Zap className="w-4 h-4 text-rose-400" />
                  </div>
                  <span className="text-slate-300 font-medium">
                    Fast launch
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
                    <Check className="w-4 h-4 text-rose-400" />
                  </div>
                  <span className="text-slate-300 font-medium">
                    Cost-effective setup
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
                    <Sliders className="w-4 h-4 text-rose-400" />
                  </div>
                  <span className="text-slate-300 font-medium">
                    Easy operations
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
                    <Server className="w-4 h-4 text-rose-400" />
                  </div>
                  <span className="text-slate-300 font-medium">
                    Pre-configured trading environment
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Global Tier 1 Broker Card */}
          <div className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-rose-500/40 transition-all duration-500 flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 to-transparent pointer-events-none"></div>

            <div className="p-8 md:p-12 flex-1">
              <div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-8 h-8 text-rose-400" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-8">
                Global Tier 1 Broker
              </h3>

              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
                    <Layers className="w-4 h-4 text-rose-400" />
                  </div>
                  <span className="text-slate-300 font-medium">
                    Support for multiple asset classes
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
                    <Sliders className="w-4 h-4 text-rose-400" />
                  </div>
                  <span className="text-slate-300 font-medium">
                    Custom integration
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
                    <Globe className="w-4 h-4 text-rose-400" />
                  </div>
                  <span className="text-slate-300 font-medium">
                    Liquidity bridge and routing
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
                    <Zap className="w-4 h-4 text-rose-400" />
                  </div>
                  <span className="text-slate-300 font-medium">
                    High-volume, low-latency execution
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
                    <Server className="w-4 h-4 text-rose-400" />
                  </div>
                  <span className="text-slate-300 font-medium">
                    Robust backend architecture
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conclusion Banner */}
        <div className="mt-12 bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 flex items-center justify-center text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-500/5 to-transparent"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-4">
            <TrendingUp className="w-8 h-8 text-rose-400" />
            <p className="text-slate-200 text-lg leading-relaxed font-light">
              "Ark Trading is compatible with a natural business progression and
              increase in trading ​‍​‌‍​‍‌​‍​‌‍​‍‌volume,"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArkTradingUsage;
