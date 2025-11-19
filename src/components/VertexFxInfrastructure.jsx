import React from "react";
import { Server, Globe, Shield, Cpu, Wifi, Activity } from "lucide-react";

const VertexFxInfrastructure = () => {
  return (
    <div className="bg-black py-20">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="text-center lg:text-left text-3xl md:text-4xl font-bold text-white leading-tight">
              How Capyngen Builds Complete VertexFX Infrastructure
            </h2>

            <div className="prose prose-invert prose-lg">
              <p className="text-slate-300 leading-relaxed text-lg">
                Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ is in charge of the technical part at
                every level, beginning with the actual hosting, routing, and
                security. On our part, we are setting up the servers, installing
                backend modules, integrating data feeds, and tuning the
                performance for a user-friendly experience.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                We are running our network on top of a host bundle of the best
                available worldwide — enterprise servers, cloud architecture,
                global routing, and multi-zone redundancy for absolute uptime
                and ​‍​‌‍​‍‌​‍​‌‍​‍‌stability.
              </p>
            </div>

            {/* Infrastructure Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <Activity className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-slate-300 font-medium">
                  99.99% Uptime
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Globe className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-slate-300 font-medium">
                  Global Routing
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-violet-500/10 rounded-lg">
                  <Shield className="w-5 h-5 text-violet-400" />
                </div>
                <span className="text-slate-300 font-medium">
                  Multi-Zone Security
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500/10 rounded-lg">
                  <Cpu className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-slate-300 font-medium">
                  Enterprise Hardware
                </span>
              </div>
            </div>
          </div>

          {/* Visual Representation */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-blue-600/20 rounded-full blur-3xl opacity-40"></div>

            <div className="relative w-full max-w-md aspect-[4/5] md:aspect-square bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl group">
              {/* Grid Texture */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(#6366f1 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>

              {/* Server Stack */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                {/* Top Unit */}
                <div className="w-48 h-12 bg-slate-800 border border-slate-700 rounded-t-lg relative mb-1 flex items-center px-4 justify-between shadow-lg group-hover:-translate-y-1 transition-transform duration-500">
                  <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse delay-75"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse delay-150"></div>
                  </div>
                  <div className="h-1 w-12 bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-violet-500/50 animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>

                {/* Middle Unit */}
                <div className="w-48 h-12 bg-slate-800 border border-slate-700 border-l-4 border-l-violet-500 relative mb-1 flex items-center px-4 justify-between shadow-lg z-20 group-hover:scale-105 transition-transform duration-500">
                  <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse delay-100"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-slate-500" />
                    <div className="text-[10px] text-slate-400 font-mono">
                      ACTIVE
                    </div>
                  </div>
                </div>

                {/* Bottom Unit */}
                <div className="w-48 h-12 bg-slate-800 border border-slate-700 rounded-b-lg relative flex items-center px-4 justify-between shadow-lg group-hover:translate-y-1 transition-transform duration-500">
                  <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                  </div>
                  <Cpu className="w-4 h-4 text-slate-600" />
                </div>

                {/* Base */}
                <div className="w-56 h-14"></div>
              </div>

              {/* Floating Nodes */}
              <div className="absolute top-12 right-12 p-3 bg-slate-800/80 border border-slate-700 rounded-xl backdrop-blur-sm shadow-lg animate-[bounce_3s_infinite]">
                <Globe className="w-6 h-6 text-blue-400" />
              </div>

              <div className="absolute bottom-20 left-12 p-3 bg-slate-800/80 border border-slate-700 rounded-xl backdrop-blur-sm shadow-lg animate-[bounce_4s_infinite] delay-700">
                <Shield className="w-6 h-6 text-violet-400" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VertexFxInfrastructure;
