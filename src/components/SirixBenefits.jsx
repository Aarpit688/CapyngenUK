import React from "react";
import {
  Rocket,
  CheckCircle,
  Server,
  Users,
  Settings,
  Play,
} from "lucide-react";

const SirixBenefits = () => {
  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content Side */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              How Startups and Global Brokers Benefit from{" "}
              <span className="text-amber-500">Sirix</span>
            </h2>

            <div className="prose prose-invert prose-lg">
              <p className="text-slate-300 leading-relaxed text-lg">
                Sirix is the ideal tool that provides startup brokers with the
                just right mix of ease and sophistication features. With the
                help of a white-label solution, a broker using Sirix can simply
                and quickly enter a new market without encountering any hidden
                or rise infrastructure costs.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                Capyngen takes care of hosting, server management, integration,
                and onboarding, thus making setting up a location a breeze.
              </p>
            </div>

            {/* Managed Services Checklist */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/50">
                <div className="p-1 bg-amber-500/20 rounded-full">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-slate-300 text-sm font-medium">
                  Hosting Included
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/50">
                <div className="p-1 bg-amber-500/20 rounded-full">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-slate-300 text-sm font-medium">
                  Server Mgmt
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/50">
                <div className="p-1 bg-amber-500/20 rounded-full">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-slate-300 text-sm font-medium">
                  Full Integration
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/50">
                <div className="p-1 bg-amber-500/20 rounded-full">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-slate-300 text-sm font-medium">
                  Easy Onboarding
                </span>
              </div>
            </div>
          </div>

          {/* Visual Side - "Launchpad" Concept */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-bl from-amber-600/20 to-orange-600/10 rounded-full blur-3xl opacity-40"></div>

            <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl group hover:border-amber-500/30 transition-colors duration-500">
              {/* Top Header Bar */}
              <div className="h-12 bg-slate-950 border-b border-slate-800 flex items-center px-4 justify-between">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  LAUNCH_CONTROLS.EXE
                </div>
              </div>

              <div className="p-8 space-y-6">
                {/* Status Indicator */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">
                      Deployment Status
                    </div>
                    <div className="text-white font-bold text-xl flex items-center gap-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                      </span>
                      READY TO LAUNCH
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/30 animate-pulse">
                    <Play className="w-6 h-6 text-amber-400 fill-amber-400" />
                  </div>
                </div>

                {/* Progress Bars / Modules */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Server className="w-3 h-3" /> Infrastructure Setup
                      </span>
                      <span className="text-emerald-400">100%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-emerald-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Settings className="w-3 h-3" /> White-Label Config
                      </span>
                      <span className="text-emerald-400">100%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-emerald-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Users className="w-3 h-3" /> Client Onboarding
                      </span>
                      <span className="text-amber-400">Active</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-amber-500 rounded-full animate-[pulse_2s_infinite]"></div>
                    </div>
                  </div>
                </div>

                {/* Cost Efficiency Badge */}
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 flex items-center gap-4 mt-4">
                  <div className="text-2xl font-bold text-white">0%</div>
                  <div className="text-sm text-slate-400 leading-tight">
                    Hidden infrastructure
                    <br />
                    or unexpected costs
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

export default SirixBenefits;
