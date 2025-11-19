import React from "react";
import { Server, Cpu, Globe, Users, Clock } from "lucide-react";

export default function MT5ServiceIntro() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-[90vw] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-900/40 rounded-md  border border-slate-800 overflow-hidden shadow-xl">
          {/* LEFT — CONTENT */}
          <div className="p-10 lg:p-14 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
              Scale Your Brokerage with{" "}
              <span className="text-cyan-400">MT5 Technology</span>
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">
              Capyngen Technologies UK Limited delivers complete MetaTrader 5
              solutions — platform integration, server setup, liquidity bridges,
              API connectivity, plugin development, and long-term support.
              Designed for performance, scalability, and low-latency execution.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-full text-sm">
                <Server className="w-4 h-4 text-cyan-400" />
                Server Setup
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-full text-sm">
                <Globe className="w-4 h-4 text-indigo-400" />
                Global Connectivity
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-full text-sm">
                <Users className="w-4 h-4 text-cyan-400" />
                Multi-Asset Support
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-full text-sm">
                <Clock className="w-4 h-4 text-indigo-400" />
                24/7 Support
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-cyan-400 to-indigo-500 text-black shadow-lg hover:scale-[1.02] transition">
                Deploy MT5 Platform
              </button>

              <button className="px-5 py-3 rounded-full border border-slate-600 text-slate-200 hover:bg-slate-800 transition">
                Request a Demo
              </button>
            </div>
          </div>

          {/* RIGHT — CARD */}
          <div className="p-10 flex justify-center items-center bg-slate-900/30">
            <div className="w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-lg space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xl font-bold">99.99%</p>
                  <p className="text-xs text-slate-400">Uptime SLA</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-cyan-400">1–3</p>
                  <p className="text-xs text-slate-400">Setup Days</p>
                </div>
                <div>
                  <p className="text-xl font-bold">&lt;250ms</p>
                  <p className="text-xs text-slate-400">Latency</p>
                </div>
              </div>

              {/* Feature List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <Server className="w-5 h-5 text-cyan-400" />
                  Hardened servers & DDoS protection
                </div>

                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <Globe className="w-5 h-5 text-indigo-400" />
                  Multi-region global connectivity
                </div>

                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                  Custom MT5 plugins & integrations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
