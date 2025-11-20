import React from "react";
import {
  Rocket,
  Building2,
  Code2,
  Server,
  Zap,
  BarChart,
  ShieldCheck,
  Plug,
  Layers,
} from "lucide-react";
import { assets } from "../assets/assets";

const MT5ServiceBenefits = () => {
  return (
    <div className="bg-black w-full py-20">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            How Startups and Established Brokers Benefit from{" "}
            <span className="text-green-500">MT5</span>
          </h2>
          <div className="w-24 h-1 bg-green-500/50 mx-auto rounded-full"></div>
        </div>

        {/* Startups vs Established Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Startups Card */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-sm overflow-hidden hover:border-green-500/40 transition-all duration-300 group relative">
            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={assets.mtService12}
                alt="Startup MT5 Setup"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">
                Startups
              </h3>

              <p className="text-slate-300 leading-relaxed mb-6 min-h-[80px]">
                Startups​‍​‌‍​‍‌​‍​‌‍​‍‌ can use Capyngen to quickly set up
                their MT5 account with a fully branded platform and
                pre-integrated liquidity which enables a fast market entry.
              </p>

              <div className="flex items-center gap-3 mt-auto pt-6 border-t border-slate-800">
                <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs text-green-400 font-medium">
                  Fast Entry
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs text-green-400 font-medium">
                  Pre-integrated
                </div>
              </div>
            </div>
          </div>

          {/* Established Brokers Card */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-sm overflow-hidden hover:border-emerald-500/40 transition-all duration-300 group relative">
            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={assets.mtService13}
                alt="Established Broker Setup"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">
                Established Brokers
              </h3>

              <p className="text-slate-300 leading-relaxed mb-6 min-h-[80px]">
                Custom plugin development, multi-asset integration, and backend
                optimization are some of the ways performance and trading
                capabilities can be enhanced by an existing broker with the help
                of Capyngen.
              </p>

              <div className="flex items-center gap-3 mt-auto pt-6 border-t border-slate-800">
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-medium">
                  Custom Plugins
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-medium">
                  Optimization
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="relative bg-slate-900 border border-slate-800 rounded-sm overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 md:p-16 relative z-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Additional Features That Make{" "}
                <span className="text-green-500">MT5</span> Stand Out
              </h2>

              <div className="prose prose-invert prose-lg">
                <p className="text-slate-300 leading-relaxed text-lg">
                  MT5​‍​‌‍​‍‌​‍​‌‍​‍‌ offers sophisticated charting, algorithmic
                  trading, risk management, and multi-asset support. Capyngen
                  helps brokers to combine these functionalities while still
                  enabling safe hosting, fast execution, and convenient
                  liquidity access.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg">
                  In addition to the MT5 plugin creation, server optimization,
                  API integration, and white-label deployment, our company
                  provides the full range of services necessary for brokers to
                  be able to offer clients exceptional trading experiences.
                </p>
              </div>

              {/* Feature List Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <Plug className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300 text-sm font-medium">
                    Plugin Creation
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <Server className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300 text-sm font-medium">
                    Server Optimization
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <Code2 className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300 text-sm font-medium">
                    API Integration
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <Layers className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300 text-sm font-medium">
                    White-Label Deployment
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-green-500/20 rounded-sm blur-3xl opacity-20"></div>

                <div className="relative bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl group">
                  {/* Code Editor Header */}
                  <div className="h-10 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-auto text-[10px] text-slate-500 font-mono">
                      mql5_plugin.cpp
                    </div>
                  </div>

                  {/* Code Area */}
                  <div className="p-6 font-mono text-xs space-y-2 bg-slate-900/95 text-slate-400">
                    <div>
                      <span className="text-purple-400">class</span>{" "}
                      <span className="text-yellow-200">CTradingPlugin</span> :{" "}
                      <span className="text-purple-400">public</span>{" "}
                      <span className="text-yellow-200">IMTPlugin</span>
                    </div>
                    <div>{`{`}</div>
                    <div className="pl-4">
                      <span className="text-purple-400">public</span>:
                    </div>
                    <div className="pl-8">
                      <span className="text-slate-500">
                        // Initialize high-performance execution
                      </span>
                    </div>
                    <div className="pl-8">
                      <span className="text-blue-400">void</span>{" "}
                      <span className="text-green-400">OnTick</span>() {`{`}
                    </div>
                    <div className="pl-12">
                      <span className="text-purple-400">if</span>{" "}
                      (Capyngen::IsConnected()) {`{`}
                    </div>
                    <div className="pl-16">
                      <span className="text-yellow-200">
                        ExecuteSmartRouting
                      </span>
                      ();
                    </div>
                    <div className="pl-16">
                      <span className="text-yellow-200">OptimizeLiquidity</span>
                      ();
                    </div>
                    <div className="pl-12">{`}`}</div>
                    <div className="pl-8">{`}`}</div>
                    <div>{`};`}</div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute bottom-4 right-4 bg-slate-800 border border-green-500/30 p-3 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-3 z-20 animate-[float_4s_ease-in-out_infinite]">
                    <div className="p-1.5 bg-green-500/20 rounded-lg">
                      <Zap className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-xs">
                        Performance Boost
                      </div>
                      <div className="text-[10px] text-slate-400">
                        Server-side optimization
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MT5ServiceBenefits;
