import { Cpu, Globe, Settings } from "lucide-react";
import React from "react";
import { assets } from "../assets/assets";

const MT5ServiceUnderstanding = () => {
  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE — IMAGE (Replaced Illustration) */}
          <div className="order-2 lg:order-1 relative flex justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-emerald-600/20 rounded-full blur-3xl opacity-40"></div>

            <div className="relative w-full max-w-md overflow-hidden rounded-md border border-slate-800 shadow-2xl">
              <img
                src={assets.mtService7}
                alt="MT5 Trading Infrastructure"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE — CONTENT */}
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Understanding <span className="text-green-500">MT5</span> and How
              It Enhances Broker Operations
            </h2>

            <div className="prose prose-invert prose-lg">
              <p className="text-slate-300 leading-relaxed text-lg">
                MetaTrader​‍​‌‍​‍‌​‍​‌‍​‍‌ 5 (MT5) is a multi-asset trading
                platform suitable for forex, CFD, and other financial
                instruments with features like advanced charting, quick
                execution, and automated trading capability.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg border-l-2 border-green-500/30 pl-4">
                Brokers utilizing MT5 offerings get access to white-label
                configurations, liquidity bridges, backend infrastructure, and
                API integration—facilitating smooth trade execution and strong
                client management.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                Capyngen Technologies specializes in MT5 server setup,
                integration with liquidity providers, and deployment of custom
                plugins. Our solutions ensure brokers maintain strong trading
                performance, global reach, and high-volume stability.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-sm text-slate-300">
                <Globe className="w-4 h-4 text-green-400" /> Global Capacity
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-sm text-slate-300">
                <Cpu className="w-4 h-4 text-green-400" /> Automated Trading
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-sm text-slate-300">
                <Settings className="w-4 h-4 text-green-400" /> White-Label
                Config
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MT5ServiceUnderstanding;
