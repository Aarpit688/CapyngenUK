import React from "react";
import { Box, Layers, Zap, ShieldCheck, Activity } from "lucide-react";

const VertexFXIntro = () => {
  return (
    <div className="w-full bg-black py-20">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
          {/* Background Gradient and Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-slate-900 to-slate-900 z-0"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:p-16 items-center">
            {/* Text Content Side */}
            <div className="space-y-8">
              <h2 className="pt-8 px-2 md:pt-0 md:px-0 text-center lg:text-left text-3xl md:text-5xl font-bold text-white leading-tight">
                Power Your Brokerage with Advanced VertexFX Technology
              </h2>

              <div className="px-8 md:px-0 prose prose-invert prose-lg">
                <p className="text-slate-300 leading-relaxed">
                  VertexFX​‍​‌‍​‍‌​‍​‌‍​‍‌ is a complete trading platform
                  solution provided by Capyngen Technologies UK Limited for
                  brokers who desire quick execution, strong multi-asset
                  features, and a safe worldwide infrastructure. Our services
                  enable forex, CFD, and multi-asset brokers to implement
                  VertexFX, API integration, liquidity connection, and their
                  trading ecosystem growth with operational
                  ​‍​‌‍​‍‌​‍​‌‍​‍‌management.
                </p>
              </div>

              {/* Feature Tags */}
              <div className="px-8 md:px-0 flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-700/50">
                  <Zap className="w-4 h-4 text-violet-400" />
                  <span className="text-sm text-slate-300">
                    Quick Execution
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-700/50">
                  <Layers className="w-4 h-4 text-violet-400" />
                  <span className="text-sm text-slate-300">
                    Multi-Asset Features
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-700/50">
                  <ShieldCheck className="w-4 h-4 text-violet-400" />
                  <span className="text-sm text-slate-300">
                    Safe Infrastructure
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Representation Side */}
            <div className="px-8 pb-8 md:pb-0 md:px-0 relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                {/* Center Core */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-32 h-32 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl shadow-2xl shadow-violet-500/20 flex items-center justify-center border border-white/10">
                    <Activity className="w-16 h-16 text-white" />
                  </div>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-xs font-bold text-slate-400">
                      Forex
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-xs font-bold text-slate-400">
                      CFD
                    </span>
                  </div>
                  <div className="absolute left-0 top-1/2 -translate-x-6 -translate-y-1/2 w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-xs font-bold text-slate-400">
                      API
                    </span>
                  </div>
                  <div className="absolute right-0 top-1/2 translate-x-6 -translate-y-1/2 w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-xs font-bold text-slate-400">
                      Liq
                    </span>
                  </div>
                </div>

                {/* Rings */}
                <div className="absolute inset-8 border border-slate-700/50 rounded-full"></div>
                <div className="absolute inset-24 border border-dashed border-violet-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VertexFXIntro;
