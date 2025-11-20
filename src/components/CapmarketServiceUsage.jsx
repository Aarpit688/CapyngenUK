import React from "react";
import {
  Rocket,
  Building,
  Zap,
  Server,
  Sliders,
  BarChart2,
  Globe,
  ArrowRight,
} from "lucide-react";

const CapmarketServiceUsage = () => {
  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            How Startups and Established Brokers Benefit from{" "}
            <span className="text-blue-400">Capmarket</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500/50 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* New Businesses Card */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/40 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-20 -mt-20 transition-colors group-hover:bg-blue-500/10"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 group-hover:border-blue-500/30 transition-colors">
                  <Rocket className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  New Businesses
                </h3>
              </div>

              <p className="text-slate-300 leading-relaxed text-lg mb-8 min-h-[84px]">
                New​‍​‌‍​‍‌​‍​‌‍​‍‌ businesses are able to rapidly implement
                complete Capmarket offerings that encompass platform setup,
                server hosting, and ready-to-use liquidity.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <Zap className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-200 text-sm font-medium">
                    Rapid Implementation
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <Server className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-200 text-sm font-medium">
                    Server Hosting Included
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-200 text-sm font-medium">
                    Ready-to-Use Liquidity
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Existing Brokerage Firms Card */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/40 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -mr-20 -mt-20 transition-colors group-hover:bg-cyan-500/10"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 group-hover:border-cyan-500/30 transition-colors">
                  <Building className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Existing Brokerage Firms
                </h3>
              </div>

              <p className="text-slate-300 leading-relaxed text-lg mb-8 min-h-[84px]">
                Additionally, the existing brokerage firms can take advantage of
                features such as customized platform development, API
                integration, and multi-asset support to improve execution, risk
                management, and analytics.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <Sliders className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-200 text-sm font-medium">
                    Custom Development
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <BarChart2 className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-200 text-sm font-medium">
                    Advanced Analytics
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <ArrowRight className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-200 text-sm font-medium">
                    Improved Execution
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapmarketServiceUsage;
