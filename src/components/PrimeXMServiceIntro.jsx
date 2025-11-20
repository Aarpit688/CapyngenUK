import React from "react";
import { Zap, Layers, Network } from "lucide-react";
import { assets } from "../assets/assets";

export default function PrimeXMServiceIntro() {
  return (
    <section className="w-full bg-black py-20">
      <div className="max-w-[90vw] mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ─── Left: Image Section ─────────────────────────────── */}
        <div className="order-2 lg:order-1 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 blur-3xl rounded-full"></div>

          <div className="relative overflow-hidden border border-slate-800 shadow-2xl">
            <img
              src={assets.p2}
              alt="PrimeXM X-Core Infrastructure"
              className="w-full h-[480px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"></div>

            <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
              <p className="text-sm text-white font-medium">
                Institutional-Grade X-Core Engine
              </p>
            </div>
          </div>
        </div>

        {/* ─── Right: Content Section ───────────────────────────── */}
        <div className="order-1 lg:order-2 flex flex-col gap-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Maximize Your Brokerage Performance with PrimeXM X-Core
          </h2>

          <div className="text-slate-300 text-lg leading-relaxed space-y-5">
            <p>
              Capyngen Technologies UK Limited is a major provider of PrimeXM
              X-Core technology to brokers worldwide. The offering includes
              ultra-low latency infrastructure, liquidity aggregation, and
              seamless data connectivity.
            </p>
            <p className="border-l-4 border-yellow-500/40 pl-4">
              Our solutions enable brokers to scale their operations in a
              cost-effective manner while maintaining institutional-grade
              performance.
            </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 pt-2">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm text-slate-200 hover:border-yellow-500/40 transition">
              <Zap className="w-4 h-4 text-yellow-400" />
              Ultra-Low Latency
            </div>

            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm text-slate-200 hover:border-yellow-500/40 transition">
              <Layers className="w-4 h-4 text-yellow-400" />
              Liquidity Aggregation
            </div>

            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm text-slate-200 hover:border-yellow-500/40 transition">
              <Network className="w-4 h-4 text-yellow-400" />
              Seamless Connectivity
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
