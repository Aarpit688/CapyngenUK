import React from "react";
import {
  Network,
  Zap,
  Shield,
  Server,
  ArrowRight,
  Layers,
  Users,
} from "lucide-react";

const PrimeXMXServiceUnderstanding = () => {
  return (
    <div className="py-20 w-full bg-black">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content Side */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Understanding PrimeXM X-Core and How It Helps Brokers
            </h2>

            <div className="prose prose-invert prose-lg">
              <p className="text-slate-300 leading-relaxed text-lg">
                PrimeXM​‍​‌‍​‍‌​‍​‌‍​‍‌ X-Core is an advanced technology
                platform that allows brokers to combine liquidity sources, carry
                out ultra-fast trades, and handle high-volume operations in a
                very efficient manner.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                In the markets of today which are highly competitive, brokers
                require more than just the simple execution of trades. They need
                strong infrastructure, smooth connectivity, and trustworthy
                liquidity as well.
              </p>
              <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-6 rounded-r-lg my-6">
                <p className="text-slate-200 italic">
                  We at Capyngen Technologies are geared up to offer complete
                  infrastructure setup of PrimeXM XCore for brokers, PrimeXM
                  XCore technology for liquidity aggregation, and total
                  connectivity solutions.
                </p>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                The integration of our services enables brokers to offer lower
                spreads, quicker trade execution, and better client experiences
                while at the same time, they decrease their operational
                ​‍​‌‍​‍‌​‍​‌‍​‍‌risks.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="px-3 py-1.5 bg-slate-800 rounded-lg border border-slate-700 flex items-center gap-2 text-slate-300 text-sm">
                <Zap className="w-4 h-4 text-yellow-500" /> Ultra-Fast
              </div>
              <div className="px-3 py-1.5 bg-slate-800 rounded-lg border border-slate-700 flex items-center gap-2 text-slate-300 text-sm">
                <Network className="w-4 h-4 text-yellow-500" /> Smooth
                Connectivity
              </div>
              <div className="px-3 py-1.5 bg-slate-800 rounded-lg border border-slate-700 flex items-center gap-2 text-slate-300 text-sm">
                <Shield className="w-4 h-4 text-yellow-500" /> Lower Risks
              </div>
            </div>
          </div>

          {/* Visual Side: X-Core Aggregation Logic */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Background Halo */}
              <div className="absolute inset-0 bg-yellow-500/10 blur-3xl rounded-full opacity-30"></div>

              <div className="relative bg-slate-950 border border-slate-800 rounded-2xl p-8 shadow-2xl flex flex-col gap-8">
                {/* Diagram Container */}
                <div className="flex flex-col items-center gap-6 relative z-10">
                  {/* Top: Liquidity Sources */}
                  <div className="flex justify-center gap-4 w-full">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shadow-md">
                          <Layers className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="h-8 w-0.5 bg-gradient-to-b from-slate-700 to-yellow-500/50"></div>
                      </div>
                    ))}
                  </div>

                  {/* Center: X-Core Engine */}
                  <div className="w-full bg-slate-900 border border-yellow-500/30 rounded-xl p-6 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-yellow-500/5 group-hover:bg-yellow-500/10 transition-colors"></div>
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-[shimmer_2s_infinite]"></div>

                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-yellow-500/20 rounded-lg border border-yellow-500/20">
                          <Server className="w-6 h-6 text-yellow-500" />
                        </div>
                        <div>
                          <div className="text-white font-bold">
                            PrimeXM X-Core
                          </div>
                          <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                            Aggregation Engine
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-500 font-mono">
                          LATENCY
                        </div>
                        <div className="text-yellow-400 font-bold font-mono">
                          &lt;1ms
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Execution / Clients */}
                  <div className="flex justify-center w-full relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-8 w-0.5 bg-gradient-to-b from-yellow-500/50 to-emerald-500/50"></div>
                    <div className="mt-8 w-full grid grid-cols-2 gap-4">
                      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 flex items-center gap-3">
                        <div className="p-1.5 bg-emerald-500/10 rounded">
                          <ArrowRight className="w-4 h-4 text-emerald-500" />
                        </div>
                        <span className="text-sm text-slate-300">
                          Best Execution
                        </span>
                      </div>
                      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 flex items-center gap-3">
                        <div className="p-1.5 bg-emerald-500/10 rounded">
                          <Users className="w-4 h-4 text-emerald-500" />
                        </div>
                        <span className="text-sm text-slate-300">
                          Happy Clients
                        </span>
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

export default PrimeXMXServiceUnderstanding;
