import React from "react";
import {
  Check,
  Zap,
  Globe,
  BarChart2,
  Layers,
  Bot,
  Code,
  Layout,
} from "lucide-react";
import { assets } from "../assets/assets";

const ArkTradingBenefits = () => {
  const benefits = [
    "The fastest possible connection anywhere in the world",
    "Allows trading in forex, CFDs, crypto, indices, and commodities",
    "Easy-to-use white-label product",
    "Live analytics and reporting",
    "Access to deep liquidity",
    "Trading automation system",
    "Open API & third-party",
  ];

  return (
    <div className="py-20 w-full bg-black">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Visuals */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-rose-600/20 blur-[100px] rounded-full opacity-30 pointer-events-none"></div>

            <div className="relative grid grid-cols-2 gap-4">
              <div className="col-span-2 bg-slate-900 border border-slate-800 rounded-md overflow-hidden shadow-2xl group">
                <div className="relative h-80 w-full overflow-hidden">
                  <img
                    src={assets.arkTrading2}
                    alt="Trading Analytics Dashboard"
                    className="w-full h-full object-cover transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-md p-6 flex flex-col items-center justify-center text-center hover:border-rose-500/40 transition-colors group">
                <div className="w-12 h-12 bg-rose-500/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-rose-500/20 transition-colors">
                  <Bot className="w-6 h-6 text-rose-400" />
                </div>
                <span className="text-slate-300 font-medium text-sm">
                  Automation Ready
                </span>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-md p-6 flex flex-col items-center justify-center text-center hover:border-rose-500/40 transition-colors group">
                <div className="w-12 h-12 bg-rose-500/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-rose-500/20 transition-colors">
                  <Layers className="w-6 h-6 text-rose-400" />
                </div>
                <span className="text-slate-300 font-medium text-sm">
                  Deep Liquidity
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Benefits List */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              Key Benefits of{" "}
              <span className="text-rose-500">Ark Trading Platform</span> for
              Brokers
            </h2>

            <div className="space-y-2">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-3  rounded-xl transition-all duration-300 hover:bg-slate-800/40 border border-transparent hover:border-slate-800 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                  </div>
                  <p className="text-slate-300 text-lg leading-snug group-hover:text-white transition-colors">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 h-1 w-full bg-gradient-to-r from-rose-500/50 via-slate-800 to-transparent rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArkTradingBenefits;
