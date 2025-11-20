import React from "react";
import { assets } from "../assets/assets";

const CTraderFeatures = () => {
  return (
    <div className="bg-black w-full py-20">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Key Features of Capyngen’s{" "}
            <span className="text-teal-500">cTrader Technology Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto opacity-60"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-teal-500/40 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-teal-500/10 transition-colors"></div>

            {/* IMAGE REPLACING ICON */}
            <div className="w-full rounded-xl overflow-hidden bg-slate-800 mb-6 shadow-lg relative z-10 group-hover:bg-teal-500/20 transition-colors">
              <img
                src={assets.cTrader3}
                alt="White Label Technology"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-200 transition-colors relative z-10">
              White Label Technology Provider
            </h3>

            <p className="text-slate-400 leading-relaxed relative z-10">
              In no time, you can open your brokerage that comes with fully
              branded cTrader solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-teal-500/40 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-teal-500/10 transition-colors"></div>

            {/* IMAGE REPLACING ICON */}
            <div className="w-full rounded-xl overflow-hidden bg-slate-800 mb-6 shadow-lg relative z-10 group-hover:bg-teal-500/20 transition-colors">
              <img
                src={assets.cTrader4}
                alt="Multi Asset Trading"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-200 transition-colors relative z-10">
              Multi-Asset Trading Technology
            </h3>

            <p className="text-slate-400 leading-relaxed relative z-10">
              The platform is to be used for forex trading, CFDs, commodities,
              indices, and cryptocurrencies.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-teal-500/40 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-teal-500/10 transition-colors"></div>

            {/* IMAGE REPLACING ICON */}
            <div className="w-full rounded-xl overflow-hidden bg-slate-800 mb-6 shadow-lg relative z-10 group-hover:bg-teal-500/20 transition-colors">
              <img
                src={assets.cTrader5}
                alt="Hosting & Connectivity"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-200 transition-colors relative z-10">
              Hosting, Bridging & Connectivity Solutions
            </h3>

            <p className="text-slate-400 leading-relaxed relative z-10">
              Be able to provide very-low latency, great execution, and steady
              access to the market anywhere in the world.
            </p>
          </div>
        </div>

        {/* Bottom Highlight Section */}
        <div className="relative bg-slate-900/50 border border-slate-700/50 rounded-2xl p-8 md:p-10 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/10 via-slate-900/50 to-teal-900/10"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent"></div>

          <div className="relative z-10 flex flex-col items-center gap-4">
            <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-4xl">
              "By using these features, brokers can deliver top-notch trading
              services, simplify the technical side of things, and give their
              clients quick, safe, and smooth trading experiences."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTraderFeatures;
