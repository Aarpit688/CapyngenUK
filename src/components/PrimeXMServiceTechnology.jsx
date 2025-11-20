import React from "react";
import {
  Handshake,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  ServerCrash,
} from "lucide-react";
import { assets } from "../assets/assets";

const PrimeXMServiceTechnology = () => {
  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="relative bg-slate-900 border border-slate-800 p-8 md:p-12 overflow-hidden">
          {/* Soft Background Glow */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-500/10 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-600/10 blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            {/* LEFT CONTENT */}
            <div className="space-y-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Why Capyngen Is Your Trusted PrimeXM X-Core Technology Partner
              </h2>

              {/* CHALLENGE BLOCK */}
              <div className="bg-slate-800/40 border border-slate-700/50 p-6 hover:bg-slate-800/60 transition-colors">
                <div className="flex gap-4">
                  <div className="p-2 bg-rose-500/10 border border-rose-500/20 h-fit">
                    <AlertTriangle className="w-5 h-5 text-rose-400" />
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-sm mb-2">
                      Common Broker Challenges
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Brokers ‌​‍​‌‍​‍‌​‍​‌‍​‍‌ face challenges during
                      high-volume trading: connectivity issues, fragmented
                      liquidity, and latency-driven delays.
                    </p>
                  </div>
                </div>
              </div>

              {/* SOLUTION BLOCK */}
              <div className="bg-slate-800/40 border border-slate-700/50 p-6 border-l-4 border-yellow-500/60 hover:bg-slate-800/60 transition-colors">
                <div className="flex gap-4">
                  <div className="p-2 bg-yellow-500/10 border border-yellow-500/20 h-fit">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-sm mb-2">
                      The Capyngen Solution
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Capyngen solves these issues with tailored PrimeXM X-Core
                      setups engineered for reliability, ultra-low latency and
                      global scale.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT VISUAL (FULL IMAGE CARD) */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-md overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
                {/* Full Image */}
                <img
                  src={assets.p8}
                  alt="PrimeXM Institutional Infrastructure"
                  className="w-full h-80 md:h-[420px] object-cover"
                />

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                  <h4 className="text-white font-semibold text-lg">
                    Institutional X-Core Infrastructure
                  </h4>
                  <p className="text-slate-300 text-sm">
                    Ultra-low latency | Aggregated liquidity | Global
                    connectivity
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FINAL FULL-WIDTH STATEMENT */}
          <div className="mt-14 pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row items-start gap-4 bg-yellow-500/5 border border-yellow-500/10 p-6">
              <div className="p-3 bg-yellow-500/10 border border-yellow-500/20">
                <ShieldCheck className="w-6 h-6 text-yellow-400" />
              </div>
              <p className="text-slate-300 text-base leading-relaxed">
                As a global PrimeXM X-Core technology partner, Capyngen provides
                continuous support, post-deployment assistance and optimization
                — ensuring your infrastructure remains stable under the most
                demanding market ​‍​‌‍​‍‌​‍​‌‍​‍‌conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrimeXMServiceTechnology;
