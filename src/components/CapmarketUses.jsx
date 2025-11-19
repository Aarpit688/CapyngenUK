import React from "react";
import { Rocket, Layers, ShieldCheck, PlayCircle } from "lucide-react";

const CapmarketUses = () => {
  return (
    <section className="bg-black py-20 w-full">
      <div className="max-w-[90vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-fade-in-up">
        {/* LEFT SIDE CONTENT */}
        <div className="space-y-8 order-2 lg:order-1">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            How Startups and Global Brokers Use Capmarket
          </h2>

          <div className="prose prose-invert prose-lg">
            <p className="text-slate-300 leading-relaxed text-lg">
              Startups​‍​‌‍​‍‌​‍​‌‍​‍‌ prefer Capmarket as it provides a
              ready-to-go arrangement, thus they can initiate their operations
              in no time without committing heavily to the purchase of the
              necessary physical or technical structures. Thanks to the
              ready-configured hosting, liquidity routing, and API integration,
              the fresh brokers are in a position to make a move into the market
              quickly and with minimum risk.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700 hover:border-emerald-500/30 transition-colors">
              <PlayCircle className="w-5 h-5 text-emerald-400" />
              <span className="text-slate-200 text-sm font-medium">
                Ready-to-go
              </span>
            </div>

            <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700 hover:border-blue-500/30 transition-colors">
              <Layers className="w-5 h-5 text-blue-400" />
              <span className="text-slate-200 text-sm font-medium">
                No Heavy Infrastructure
              </span>
            </div>

            <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700 hover:border-cyan-500/30 transition-colors">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span className="text-slate-200 text-sm font-medium">
                Minimum Risk
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE — CLEAN & SIMPLE */}
        <div className="relative order-1 lg:order-2">
          <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-30"></div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <img
              src="https://picsum.photos/id/1064/600/400"
              alt="Capmarket Visual"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapmarketUses;
