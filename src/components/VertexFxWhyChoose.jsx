import React from "react";
import {
  Puzzle,
  Users,
  Globe,
  Zap,
  Server,
  Settings,
  LayoutGrid,
  Link2,
} from "lucide-react";

const VertexFxWhyChoose = () => {
  return (
    <div className="w-full bg-black py-20">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Diagram */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 aspect-square flex items-center justify-center overflow-hidden group">
              <div
                className="absolute inset-0 bg-violet-500/5"
                style={{
                  backgroundImage:
                    "radial-gradient(#8b5cf6 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                  opacity: 0.1,
                }}
              ></div>

              {/* Central Hub */}
              <div className="relative z-10 w-32 h-32 bg-violet-900/20 border border-violet-500/30 rounded-2xl flex flex-col items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.15)] backdrop-blur-sm">
                <LayoutGrid className="w-10 h-10 text-violet-400 mb-2" />
                <div className="text-violet-200 font-bold text-sm tracking-wide">
                  VertexFX
                </div>
                <div className="text-violet-400/70 text-[10px] uppercase tracking-wider">
                  Core System
                </div>
              </div>

              {/* Connection Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[25%] left-1/2 -translate-x-1/2 h-[25%] w-px bg-gradient-to-t from-violet-500/40 to-transparent"></div>
                <div className="absolute bottom-[25%] left-1/2 -translate-x-1/2 h-[25%] w-px bg-gradient-to-b from-violet-500/40 to-transparent"></div>
                <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[30%] h-px bg-gradient-to-l from-violet-500/40 to-transparent"></div>
                <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-[30%] h-px bg-gradient-to-r from-violet-500/40 to-transparent"></div>
              </div>

              {/* Satellites */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-lg shadow-lg flex items-center gap-2 hover:border-violet-500/30 transition-colors">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="text-xs text-slate-300 font-medium">CRMs</span>
              </div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-lg shadow-lg flex items-center gap-2 hover:border-violet-500/30 transition-colors">
                <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                <span className="text-xs text-slate-300 font-medium">
                  Risk Mgmt
                </span>
              </div>

              <div className="absolute left-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-lg shadow-lg flex items-center gap-2 hover:border-violet-500/30 transition-colors">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                <span className="text-xs text-slate-300 font-medium">
                  Liquidity
                </span>
              </div>

              <div className="absolute right-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-lg shadow-lg flex items-center gap-2 hover:border-violet-500/30 transition-colors">
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <span className="text-xs text-slate-300 font-medium">
                  Fintech
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-center lg:text-left text-3xl md:text-4xl font-bold text-white mb-6">
                Understanding VertexFX and Why Brokers Choose It
              </h2>

              <div className="prose prose-invert prose-lg">
                <p className="text-slate-300 leading-relaxed mb-6 border-l-2 border-violet-500/30 pl-4">
                  VertexFX​‍​‌‍​‍‌​‍​‌‍​‍‌ is an all-inclusive trading platform
                  made for multi-asset trading, flexible trader management, and
                  worldwide brokerage operations. It provides fast order
                  handling, deep liquidity connectivity, and efficient backend
                  control.
                </p>

                <p className="text-slate-300 leading-relaxed">
                  With its modular design, VertexFX connects easily to CRMs,
                  liquidity providers, risk management systems, and fintech
                  applications. Capyngen ensures brokers receive a fully
                  optimized setup with complete management and monitoring.
                </p>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-start gap-2 p-4 rounded-xl bg-slate-800/20 border border-slate-700/40 hover:bg-slate-800/40 hover:border-slate-600 transition-all">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-slate-200 font-medium">
                  Trader Management
                </span>
              </div>

              <div className="flex flex-col items-start gap-2 p-4 rounded-xl bg-slate-800/20 border border-slate-700/40 hover:bg-slate-800/40 hover:border-slate-600 transition-all">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-slate-200 font-medium">
                  Global Operations
                </span>
              </div>

              <div className="flex flex-col items-start gap-2 p-4 rounded-xl bg-slate-800/20 border border-slate-700/40 hover:bg-slate-800/40 hover:border-slate-600 transition-all">
                <Zap className="w-5 h-5 text-amber-400" />
                <span className="text-sm text-slate-200 font-medium">
                  Fast Handling
                </span>
              </div>

              <div className="flex flex-col items-start gap-2 p-4 rounded-xl bg-slate-800/20 border border-slate-700/40 hover:bg-slate-800/40 hover:border-slate-600 transition-all">
                <Server className="w-5 h-5 text-indigo-400" />
                <span className="text-sm text-slate-200 font-medium">
                  Deep Liquidity
                </span>
              </div>

              <div className="flex flex-col items-start gap-2 p-4 rounded-xl bg-slate-800/20 border border-slate-700/40 hover:bg-slate-800/40 hover:border-slate-600 transition-all">
                <Settings className="w-5 h-5 text-emerald-400" />
                <span className="text-sm text-slate-200 font-medium">
                  Backend Control
                </span>
              </div>

              <div className="flex flex-col items-start gap-2 p-4 rounded-xl bg-slate-800/20 border border-slate-700/40 hover:bg-slate-800/40 hover:border-slate-600 transition-all">
                <Link2 className="w-5 h-5 text-violet-400" />
                <span className="text-sm text-slate-200 font-medium">
                  Effortless Connect
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VertexFxWhyChoose;
