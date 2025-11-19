import React from "react";
import {
  Settings,
  Globe,
  BarChart,
  ShieldCheck,
  CheckCircle2,
  Server,
  Workflow,
} from "lucide-react";

const OneZeroServiceSolutions = () => {
  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="relative bg-slate-900 border border-slate-800 rounded-md p-8 md:p-16 overflow-hidden shadow-2xl">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-600 via-blue-500 to-sky-600 z-10"></div>
          <div className="absolute -left-24 -top-24 w-96 h-96 bg-sky-900/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] mix-blend-overlay pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                How Capyngen Delivers Complete{" "}
                <span className="text-sky-500">OneZero Solutions</span>
              </h2>

              <div className="prose prose-invert prose-lg">
                <p className="text-slate-300 leading-relaxed text-lg">
                  Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ is taking care of the whole process
                  (from setting up the OneZero to integrating the system) for
                  brokers and banks.
                </p>
              </div>

              <div className="space-y-4">
                {/* Service Point 1 */}
                <div className="flex gap-4 p-4 bg-slate-800/40 border border-slate-700/50 rounded-sm hover:bg-slate-800/60 hover:border-sky-500/30 transition-all duration-300 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center border border-sky-500/20 group-hover:bg-sky-500/20 transition-colors">
                      <Globe className="w-5 h-5 text-sky-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">
                      Global Infrastructure Setup
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      We are offering a full range of services starting with the
                      setup of an infrastructure that can support operations
                      globally, thus making it easy for your platform to be
                      connected to liquidity providers and multi-asset markets.
                    </p>
                  </div>
                </div>

                {/* Service Point 2 */}
                <div className="flex gap-4 p-4 bg-slate-800/40 border border-slate-700/50 rounded-sm hover:bg-slate-800/60 hover:border-sky-500/30 transition-all duration-300 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center border border-sky-500/20 group-hover:bg-sky-500/20 transition-colors">
                      <BarChart className="w-5 h-5 text-sky-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">
                      Analytics & Reporting
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      We have brokerages’ analytics platforms that enable
                      insightful reporting and performance tracking.
                    </p>
                  </div>
                </div>

                {/* Service Point 3 */}
                <div className="flex gap-4 p-4 bg-slate-800/40 border border-slate-700/50 rounded-sm hover:bg-slate-800/60 hover:border-sky-500/30 transition-all duration-300 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center border border-sky-500/20 group-hover:bg-sky-500/20 transition-colors">
                      <ShieldCheck className="w-5 h-5 text-sky-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">
                      Advanced Enterprise Systems
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      After embedding the OneZero enterprise trading technology,
                      we assure that brokers will be the ones to benefit from
                      the most advanced, flexible, and safe systems that can
                      support trading.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Visual Process Diagram */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                {/* Abstract Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-bl from-sky-500/20 to-blue-600/20 rounded-md blur-3xl opacity-30"></div>

                <div className="relative bg-slate-950 border border-slate-800 rounded-md overflow-hidden shadow-2xl p-8 flex flex-col gap-8 group hover:border-sky-500/30 transition-colors duration-500">
                  {/* Top Node */}
                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className="w-16 h-16 bg-slate-900 border border-sky-500/50 rounded-md flex items-center justify-center shadow-[0_0_15px_rgba(14,165,233,0.3)] mb-3 transition-transform duration-300">
                      <div className="text-sky-400 font-black text-xl">1Z</div>
                    </div>
                    <h3 className="text-white font-bold text-sm">
                      OneZero Hub
                    </h3>
                    <span className="text-[10px] text-sky-500 uppercase tracking-wider font-semibold">
                      Enterprise Core
                    </span>
                  </div>

                  {/* Connecting Lines */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <svg className="w-full h-full opacity-30">
                      <path
                        d="M190 120 L 100 220"
                        stroke="#0ea5e9"
                        strokeWidth="2"
                        strokeDasharray="5 5"
                        className="animate-[dash_2s_linear_infinite]"
                      />
                      <path
                        d="M190 120 L 280 220"
                        stroke="#0ea5e9"
                        strokeWidth="2"
                        strokeDasharray="5 5"
                        className="animate-[dash_2s_linear_infinite]"
                      />
                      <path
                        d="M190 120 L 190 320"
                        stroke="#0ea5e9"
                        strokeWidth="2"
                        strokeDasharray="5 5"
                        className="animate-[dash_2s_linear_infinite]"
                      />
                    </svg>
                  </div>

                  {/* Middle Layer */}
                  <div className="grid grid-cols-2 gap-4 relative z-10 mt-4">
                    <div className="bg-slate-900 border border-slate-700 rounded-sm p-3 flex flex-col items-center text-center shadow-lg">
                      <Server className="w-6 h-6 text-sky-400 mb-2" />
                      <span className="text-xs text-slate-300 font-medium">
                        Liquidity
                      </span>
                    </div>
                    <div className="bg-slate-900 border border-slate-700 rounded-sm p-3 flex flex-col items-center text-center shadow-lg">
                      <Workflow className="w-6 h-6 text-sky-400 mb-2" />
                      <span className="text-xs text-slate-300 font-medium">
                        Integration
                      </span>
                    </div>
                  </div>

                  {/* Bottom Layer */}
                  <div className="mt-auto bg-slate-900/80 backdrop-blur-sm border border-sky-500/30 rounded-sm p-4 flex items-center gap-3 relative z-10">
                    <div className="p-2 bg-sky-500/20 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-sky-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white text-xs font-bold">
                        System Status
                      </div>
                      <div className="text-[10px] text-slate-400">
                        Optimized for High Performance
                      </div>
                    </div>
                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
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

export default OneZeroServiceSolutions;
