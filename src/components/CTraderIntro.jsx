import React from "react";
import {
  Activity,
  Settings,
  Zap,
  Globe,
  Layers,
  DollarSign,
} from "lucide-react";
import { assets } from "../assets/assets";

const CTraderIntro = () => {
  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ------------------------------ */}
          {/* LEFT SIDE — REPLACED WITH IMAGE */}
          {/* ------------------------------ */}
          <div className="order-2 lg:order-1 relative flex justify-center">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/20 to-emerald-600/20 rounded-full blur-3xl opacity-40"></div>

            {/* Large Image Container */}
            <div className="relative w-full max-w-lg overflow-hidden rounded-md shadow-2xl border border-slate-800 group">
              <img
                src={assets.cTrader2}
                alt="Trading Dashboard"
                className="w-full h-full object-cover rounded-md opacity-90 group-hover:opacity-100 transition duration-500"
              />

              {/* Fade Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>

          {/* ------------------------------ */}
          {/* RIGHT SIDE — ORIGINAL CONTENT */}
          {/* ------------------------------ */}
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Understanding <span className="text-teal-500">cTrader</span> and
              How It Enhances Broker Operations
            </h2>

            <div className="prose prose-invert prose-lg">
              <p className="text-slate-300 leading-relaxed text-lg">
                cTrader is a multi-asset trading platform that allows trading in
                forex, CFDs, and other financial markets and features
                user-friendly interfaces, speedy trade execution, and
                sophisticated charting instruments.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                cTrader technology-powered brokers can access a full ecosystem
                that features white label arrangements, platform customization,
                API integration, and strong hosting solutions besides their
                platform.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg border-l-2 border-teal-500/30 pl-4">
                We at Capyngen Technologies, assist brokers in integrating and
                setting up the cTrader platform, customizing the software to
                match the business requirements, and providing reliable
                connectivity for smooth trading.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                Our offerings are valuable to both brokerage aspirants and those
                already in the market, thus enabling them to deliver a
                high-performance trading experience with a low operational cost.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-sm text-slate-300">
                <Globe className="w-4 h-4 text-teal-400" /> Multi-Asset
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-sm text-slate-300">
                <Zap className="w-4 h-4 text-teal-400" /> Speedy Execution
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-sm text-slate-300">
                <Settings className="w-4 h-4 text-teal-400" /> Customization
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-sm text-slate-300">
                <DollarSign className="w-4 h-4 text-teal-400" /> Low Ops Cost
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTraderIntro;
