import React from "react";
import {
  Network,
  Server,
  Smartphone,
  BarChart,
  Layers,
  CreditCard,
  Database,
  Globe,
  Cpu,
} from "lucide-react";

const SirixEcosystem = () => {
  return (
    <div className="bg-black w-full py-20">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="relative bg-slate-900/60 border border-slate-800 rounded-3xl p-8 md:p-16 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-[0.03]"></div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Content Side */}
            <div className="space-y-8 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                How Capyngen Helps Brokers Build a{" "}
                <span className="text-amber-500">Complete Sirix Ecosystem</span>
              </h2>

              <div className="prose prose-invert prose-lg">
                <p className="text-slate-300 leading-relaxed">
                  Brokers​ with Capyngen have at their disposal a completely
                  managed Sirix trading ecosystem that includes platform
                  integration, server hosting, analytics setup, and mobile
                  trading access.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  We carry out the Sirix API and integration tools, thereby
                  enabling brokers to easily connect liquidity providers, bridge
                  systems, CRMs, payment gateways, and third-party tools.
                </p>
              </div>

              {/* Integration Tags */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 text-slate-300 text-sm flex items-center gap-2 hover:border-amber-500/30 transition-colors">
                  <Globe className="w-4 h-4 text-amber-400" /> Liquidity
                  Providers
                </div>
                <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 text-slate-300 text-sm flex items-center gap-2 hover:border-amber-500/30 transition-colors">
                  <Database className="w-4 h-4 text-amber-400" /> CRMs
                </div>
                <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 text-slate-300 text-sm flex items-center gap-2 hover:border-amber-500/30 transition-colors">
                  <CreditCard className="w-4 h-4 text-amber-400" /> Payment
                  Gateways
                </div>
                <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 text-slate-300 text-sm flex items-center gap-2 hover:border-amber-500/30 transition-colors">
                  <Cpu className="w-4 h-4 text-amber-400" /> Bridge Systems
                </div>
              </div>
            </div>

            {/* Visual Ecosystem Diagram Side */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-md aspect-square">
                {/* Center Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-slate-900 border-2 border-amber-500/50 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.2)] z-20 relative">
                  <div className="absolute inset-0 rounded-full bg-amber-500/5 animate-pulse"></div>
                  <div className="text-center z-10">
                    <div className="font-bold text-white text-xl">SIRIX</div>
                    <div className="text-[10px] text-amber-500 uppercase tracking-wider">
                      Core Hub
                    </div>
                  </div>
                </div>

                {/* Node 1: Hosting */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-slate-800 border border-slate-700 rounded-xl flex flex-col items-center justify-center shadow-lg animate-[float_3s_ease-in-out_infinite] z-20 hover:border-amber-500/50 transition-colors">
                  <Server className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-[8px] text-slate-400 uppercase font-semibold">
                    Hosting
                  </span>
                </div>

                {/* Node 2: Analytics */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-slate-800 border border-slate-700 rounded-xl flex flex-col items-center justify-center shadow-lg animate-[float_3s_ease-in-out_infinite_delay-1000] z-20 hover:border-amber-500/50 transition-colors">
                  <BarChart className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-[8px] text-slate-400 uppercase font-semibold">
                    Analytics
                  </span>
                </div>

                {/* Node 3: Mobile */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-16 h-16 bg-slate-800 border border-slate-700 rounded-xl flex flex-col items-center justify-center shadow-lg animate-[float_4s_ease-in-out_infinite_delay-500] z-20 hover:border-amber-500/50 transition-colors">
                  <Smartphone className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-[8px] text-slate-400 uppercase font-semibold">
                    Mobile
                  </span>
                </div>

                {/* Node 4: Integration */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-16 h-16 bg-slate-800 border border-slate-700 rounded-xl flex flex-col items-center justify-center shadow-lg animate-[float_4s_ease-in-out_infinite_delay-1500] z-20 hover:border-amber-500/50 transition-colors">
                  <Layers className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-[8px] text-slate-400 uppercase font-semibold">
                    API
                  </span>
                </div>

                {/* Connecting Lines & Orbits */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10">
                  <line
                    x1="50%"
                    y1="50%"
                    x2="50%"
                    y2="12%"
                    stroke="#f59e0b"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    strokeDasharray="4 4"
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="50%"
                    y2="88%"
                    stroke="#f59e0b"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    strokeDasharray="4 4"
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="88%"
                    y2="50%"
                    stroke="#f59e0b"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    strokeDasharray="4 4"
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="12%"
                    y2="50%"
                    stroke="#f59e0b"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    strokeDasharray="4 4"
                  />

                  <circle
                    cx="50%"
                    cy="50%"
                    r="38%"
                    stroke="#f59e0b"
                    strokeWidth="1"
                    strokeOpacity="0.1"
                    fill="none"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="38%"
                    stroke="#f59e0b"
                    strokeWidth="4"
                    strokeOpacity="0.1"
                    strokeDasharray="20 60"
                    fill="none"
                    className="animate-[spin_20s_linear_infinite]"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SirixEcosystem;
