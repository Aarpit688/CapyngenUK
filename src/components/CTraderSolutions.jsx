import React from "react";
import { Settings, Code2, Server, Zap, Palette } from "lucide-react";
import { assets } from "../assets/assets";

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

          {/* Right Side — Replaced Illustration with a Clean Image */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-bl from-teal-600/20 to-emerald-600/10 rounded-full blur-3xl opacity-40"></div>

            <div className="relative w-full max-w-lg rounded-md overflow-hidden shadow-2xl border border-slate-800 group">
              <img
                src={assets.cTrader6}
                alt="cTrader Setup"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTraderSolutions;
