import React from "react";
import {
  Zap,
  Layout,
  Cpu,
  Globe,
  BarChart3,
  ArrowRight,
  Activity,
} from "lucide-react";

const NTraderIntro = () => {
  return (
    <div className="w-full bg-black py-20">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <div className="order-2 lg:order-1 relative flex justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-orange-600/20 rounded-full blur-3xl opacity-40"></div>

            {/* Abstract Platform Card */}
            <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl group hover:border-red-500/30 transition-colors duration-500">
              {/* Top Bar */}
              <div className="h-14 bg-slate-950 border-b border-slate-800 flex items-center px-6 justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-900/20">
                    <Zap className="w-4 h-4 text-white fill-white" />
                  </div>
                  <span className="font-bold text-white tracking-tight">
                    nTrader
                  </span>
                </div>
                <div className="px-2 py-1 rounded bg-red-500/10 border border-red-500/20 text-[10px] text-red-400 font-mono">
                  LIVE
                </div>
              </div>

              {/* Dashboard Visual */}
              <div className="p-6 relative min-h-[300px] flex flex-col gap-4">
                {/* Grid Background */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 p-4 rounded-xl group-hover:border-red-500/30 transition-colors">
                    <div className="text-slate-400 text-xs mb-1">
                      Execution Speed
                    </div>
                    <div className="text-xl font-bold text-white flex items-center gap-2">
                      12ms <Zap className="w-3 h-3 text-red-500" />
                    </div>
                  </div>
                  <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 p-4 rounded-xl group-hover:border-red-500/30 transition-colors">
                    <div className="text-slate-400 text-xs mb-1">
                      Active Assets
                    </div>
                    <div className="text-xl font-bold text-white flex items-center gap-2">
                      500+ <Globe className="w-3 h-3 text-red-500" />
                    </div>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="flex-1 bg-slate-800/50 border border-slate-700/50 rounded-xl relative overflow-hidden p-4 flex items-end gap-1">
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent"></div>

                  {[30, 45, 35, 55, 45, 70, 60, 85, 75, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-red-500/80 rounded-t-sm hover:bg-red-400 transition-colors"
                      style={{ height: `${h}%`, opacity: 0.6 + i * 0.04 }}
                    ></div>
                  ))}

                  {/* Floating Pulse */}
                  <div className="absolute top-4 right-4">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  </div>
                </div>

                {/* Smart Routing Badge */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Cpu className="w-3 h-3" />
                    <span>Smart Routing Active</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Activity className="w-3 h-3" />
                    <span>API Connected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Why <span className="text-red-500">nTrader</span> Is Becoming a
              Preferred Platform in the Industry
            </h2>

            <div className="prose prose-invert prose-lg">
              <p className="text-slate-300 leading-relaxed text-lg">
                nTrader​‍​‌‍​‍‌​‍​‌‍​‍‌ trading platform is a great fit for
                brokers who require a fast performance environment, quick
                execution, multi-asset as well as smart routing technology.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg border-l-2 border-red-500/30 pl-4">
                By using nTrader with its contemporary design, live statistics,
                and robust APIs, brokers are empowered to carry out trading
                activities efficiently in forex, CFDs, indices, and crypto
                markets.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-red-500/30 transition-all group">
                <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                  <Layout className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    Contemporary Design
                  </h4>
                  <p className="text-slate-400 text-xs">
                    Modern, intuitive interface for traders.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-red-500/30 transition-all group">
                <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                  <BarChart3 className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    Live Statistics
                  </h4>
                  <p className="text-slate-400 text-xs">
                    Real-time data analysis and reporting.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-red-500/30 transition-all group">
                <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                  <Cpu className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Robust APIs</h4>
                  <p className="text-slate-400 text-xs">
                    Powerful integration capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NTraderIntro;
