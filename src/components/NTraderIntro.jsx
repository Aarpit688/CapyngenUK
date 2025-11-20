import React from "react";
import { Layout, Cpu, Globe, BarChart3, Activity } from "lucide-react";
import { assets } from "../assets/assets";

const NTraderIntro = () => {
  return (
    <div className="w-full bg-black py-20">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side (REPLACED illustration with an image) */}
          <div className="order-2 lg:order-1 relative flex justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-orange-600/20 rounded-full blur-3xl opacity-40"></div>

            {/* Image Card */}
            <div className="relative w-full max-w-2xl rounded-md overflow-hidden shadow-2xl border border-slate-800 group">
              <img
                src={assets.nt02}
                alt="nTrader Platform"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Why <span className="text-red-500">nTrader</span> Is Becoming a
              Preferred Platform in the Industry
            </h2>

            <div className="prose prose-invert prose-lg">
              <p className="text-slate-300 leading-relaxed text-lg">
                nTrader​‍​‌‍​‍‌​‍​‌‍​‍‌ trading platform is a great fit for
                brokers who require a fast performance environment, quick
                execution, multi-asset as well as smart routing technology.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg border-l-2 border-red-500/30 pl-4">
                By using nTrader with its contemporary design, live statistics,
                and robust APIs, brokers are empowered to carry out trading
                activities efficiently in forex, CFDs, indices, and crypto
                markets.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-red-500/30 transition-all group">
                <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                  <Layout className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    Contemporary Design
                  </h4>
                  <p className="text-slate-400 text-xs">
                    Modern, intuitive interface for traders.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-red-500/30 transition-all group">
                <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                  <BarChart3 className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    Live Statistics
                  </h4>
                  <p className="text-slate-400 text-xs">
                    Real-time data analysis and reporting.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-red-500/30 transition-all group">
                <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                  <Cpu className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Robust APIs</h4>
                  <p className="text-slate-400 text-xs">
                    Powerful integration capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NTraderIntro;
