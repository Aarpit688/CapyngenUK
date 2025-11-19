import React from "react";
import {
  Globe,
  Database,
  Zap,
  Activity,
  Shield,
  BarChart4,
  Server,
} from "lucide-react";

const CapmarketFunctionalities = () => {
  return (
    <div className="w-full bg-black py-20">
      <section className="max-w-[90vw] w-full mx-auto relative animate-fade-in-up">
        {/* Decorative background elements */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10"></div>

        <div className="flex flex-col lg:flex-row gap-14 items-center">
          {/* Left Column: Visual Elements */}
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl hover:border-indigo-500/40 transition-all duration-300 transform hover:-translate-y-1 shadow-xl">
                <div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center mb-3">
                  <Database className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-white font-medium text-sm mb-1">
                  Data Connectivity
                </h3>
                <div className="h-1 w-14 bg-indigo-500/50 rounded-full"></div>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/40 transition-all duration-300 transform hover:-translate-y-1 shadow-xl">
                <div className="w-12 h-12 bg-cyan-900/30 rounded-lg flex items-center justify-center mb-3">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-white font-medium text-sm mb-1">
                  Quick Pricing
                </h3>
                <div className="h-1 w-14 bg-cyan-500/50 rounded-full"></div>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-1 shadow-xl">
                <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
                  <BarChart4 className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white font-medium text-sm mb-1">
                  Market Depth
                </h3>
                <div className="h-1 w-14 bg-blue-500/50 rounded-full"></div>
              </div>

              {/* Card 4 */}
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1 shadow-xl">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-white font-medium text-sm mb-1">
                  Secure Hosting
                </h3>
                <div className="h-1 w-14 bg-emerald-500/50 rounded-full"></div>
              </div>
            </div>

            {/* Circles Animation */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-36 h-36 border border-dashed border-slate-700 rounded-full animate-[spin_10s_linear_infinite] opacity-30"></div>
              <div className="absolute w-52 h-52 border border-slate-800 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full lg:w-1/2 space-y-10 order-1 lg:order-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Key Functionalities That Make{" "}
                <span className="gradient-text">Capmarket</span> a Leading
                Platform
              </h2>

              <div className="glass-panel p-8 rounded-xl border border-slate-700/50 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500 transition-all duration-500 group-hover:w-1.5"></div>
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>

                <p className="text-slate-300 text-lg leading-relaxed font-light relative z-10">
                  We, at Capmarket, offer data connectivity solutions that help
                  traders get quick pricing, least slippage, and correct market
                  depth data. When these are combined with forced redundancy,
                  layers of disaster recovery, and secure hosting, Capmarket
                  turns into a next-generation platform for brokers who are
                  looking to expand ​‍​‌‍​‍‌​‍​‌‍​‍‌globally.
                </p>
              </div>
            </div>

            {/* Bottom Points — Added 3rd point */}
            <div className="flex items-center gap-5 md:gap-10 pt-6 border-t border-slate-800/50">
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-2 text-indigo-400">
                  <Activity className="w-5 h-5" />
                  <span className="font-semibold">Next-Gen Platform</span>
                </div>
                <span className="text-slate-500 text-sm">
                  Advanced Architecture
                </span>
              </div>

              <div className="w-px h-10 bg-slate-800"></div>

              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-2 text-purple-400">
                  <Globe className="w-5 h-5" />
                  <span className="font-semibold">Global Reach</span>
                </div>
                <span className="text-slate-500 text-sm">
                  Expand Everywhere
                </span>
              </div>

              <div className="w-px h-10 bg-slate-800"></div>

              {/* NEW THIRD POINT */}
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Server className="w-5 h-5" />
                  <span className="font-semibold">High Reliability</span>
                </div>
                <span className="text-slate-500 text-sm">
                  Redundant Systems
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapmarketFunctionalities;
