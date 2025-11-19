import React from "react";
import { Settings, Code2, Server, Zap, Palette, PenTool } from "lucide-react";

const CTraderSolutions = () => {
  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content Side */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              How Capyngen Delivers End-to-End{" "}
              <span className="text-teal-500">cTrader Solutions</span>
            </h2>

            <div className="prose prose-invert prose-lg">
              <p className="text-slate-300 leading-relaxed text-lg">
                Capyngen offers full cTrader implementation services that
                include installation, integration, and modification. We take
                care of the cTrader software modification and development by
                changing the platform to the broker's different needs, e.g.
                branding, minor changes in the user interface, and feature
                improvements.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg border-l-2 border-teal-500/30 pl-4">
                Our cTrader hosting and connectivity packages are what you need
                to ensure fast, stable, and high-speed execution.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 bg-slate-900/30 p-4 rounded-xl border border-slate-800 hover:border-teal-500/30 transition-colors">
                <div className="p-2 bg-teal-500/10 rounded-lg mt-0.5">
                  <Palette className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">
                    Custom Branding
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Tailored UI/UX design
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900/30 p-4 rounded-xl border border-slate-800 hover:border-teal-500/30 transition-colors">
                <div className="p-2 bg-teal-500/10 rounded-lg mt-0.5">
                  <Code2 className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">
                    Feature Dev
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Platform modifications
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900/30 p-4 rounded-xl border border-slate-800 hover:border-teal-500/30 transition-colors">
                <div className="p-2 bg-teal-500/10 rounded-lg mt-0.5">
                  <Server className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">
                    Stable Hosting
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Optimized infrastructure
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900/30 p-4 rounded-xl border border-slate-800 hover:border-teal-500/30 transition-colors">
                <div className="p-2 bg-teal-500/10 rounded-lg mt-0.5">
                  <Zap className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">
                    Fast Execution
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    High-speed connectivity
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-bl from-teal-600/20 to-emerald-600/10 rounded-full blur-3xl opacity-40"></div>

            <div className="relative w-full max-w-md group">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative z-20 transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="h-10 bg-slate-950 border-b border-slate-800 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <div className="ml-4 text-[10px] text-slate-500 font-mono">
                    config.json — cTrader Setup
                  </div>
                </div>

                <div className="p-6 font-mono text-xs text-slate-300 space-y-2 bg-slate-900/95">
                  <div className="flex">
                    <span className="text-slate-600 w-6">1</span>
                    <span className="text-purple-400">branding</span>:{" "}
                    <span className="text-white">{`{`}</span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 w-6">2</span>
                    <span className="pl-4 text-teal-400">"theme"</span>:{" "}
                    <span className="text-emerald-300">"custom_dark"</span>,
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 w-6">3</span>
                    <span className="pl-4 text-teal-400">"logo_url"</span>:{" "}
                    <span className="text-emerald-300">
                      "/assets/broker_logo.png"
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 w-6">4</span>
                    <span className="text-white">{`}`}</span>,
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 w-6">5</span>
                    <span className="text-purple-400">modules</span>:{" "}
                    <span className="text-white">{`[`}</span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 w-6">6</span>
                    <span className="pl-4 text-emerald-300">
                      "liquidity_bridge"
                    </span>
                    ,
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 w-6">7</span>
                    <span className="pl-4 text-emerald-300">
                      "risk_management"
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 w-6">8</span>
                    <span className="text-white">{`]`}</span>
                  </div>
                  <div className="flex mt-4 border-t border-slate-800 pt-4">
                    <span className="text-slate-500 text-[10px]">
                      // System initialized successfully...
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 -right-4 w-full h-full bg-slate-800 border border-slate-700 rounded-2xl -z-10 flex items-end justify-end p-6">
                <div className="grid grid-cols-4 gap-2 w-full h-full opacity-20">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-teal-500 rounded-sm animate-pulse"
                      style={{ animationDelay: `${i * 100}ms` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTraderSolutions;
