import React from "react";
import { Layers, Cable, Zap, Globe } from "lucide-react";

const OneZeroServiceFeatures = () => {
  return (
    <div className="bg-black w-full py-20">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Key Features of{" "}
            <span className="text-sky-500">OneZero Technology Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-sky-500/50 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Feature 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-sky-500/40 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-sky-500/10 transition-colors"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 border border-slate-700 group-hover:border-sky-500/30 transition-colors shadow-lg">
                <Layers className="w-7 h-7 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-sky-200 transition-colors">
                Multi-Asset​‍​‌‍​‍‌​‍​‌‍​‍‌ Trading Infrastructure
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Make trades in forex, crypto, commodities, and indices from a
                single consolidated platform.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-sky-500/40 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-sky-500/10 transition-colors"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 border border-slate-700 group-hover:border-sky-500/30 transition-colors shadow-lg">
                <Cable className="w-7 h-7 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-sky-200 transition-colors">
                API & Bridge Technology
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Connect liquidity providers, trading systems, and third-party
                applications without any interruption.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-sky-500/40 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-sky-500/10 transition-colors"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 border border-slate-700 group-hover:border-sky-500/30 transition-colors shadow-lg">
                <Zap className="w-7 h-7 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-sky-200 transition-colors">
                High-Volume Execution and Connectivity
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Facilitate low-latency trading and ensure reliable market access
                worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-12 text-center overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/10 via-slate-900/50 to-sky-900/10"></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
            <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-4xl italic">
              "By having such features, brokers can provide clients with various
              markets, quicker executions, and trouble-free trading experiences,
              thus positioning OneZero as a perfect technology
              ​‍​‌‍​‍‌​‍​‌‍​‍‌partner."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OneZeroServiceFeatures;
