import React from "react";
import { MonitorPlay, Link2, TerminalSquare, ArrowRight } from "lucide-react";

const NTraderFeatures = () => {
  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Core Features Included in Our{" "}
            <span className="text-red-500">nTrader Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto opacity-60"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-red-500/40 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            {/* Background Large Number */}
            <div className="absolute -top-6 -right-6 text-[120px] font-black text-slate-800/50 group-hover:text-red-500/5 transition-colors select-none z-0">
              1
            </div>

            {/* IMAGE ADDED */}
            <div className="h-40 w-full rounded-xl overflow-hidden mb-6 relative z-10">
              <img
                src="https://picsum.photos/600/400?random=31"
                alt="nTrader White Label"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-100 transition-colors">
                nTrader White-Label Platform Setup
              </h3>

              <p className="text-slate-400 leading-relaxed mb-6 text-sm md:text-base">
                We present a totally branded nTrader white-label platform that
                includes your logo, design, hosting with security, and access
                from multiple devices.
              </p>
            </div>

            <div className="relative z-10 mt-auto border-t border-slate-800 pt-4 flex items-center text-red-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>Full Branding</span> <ArrowRight className="w-4 h-4 ml-1" />
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>

          {/* Feature 2 */}
          <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-red-500/40 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute -top-6 -right-6 text-[120px] font-black text-slate-800/50 group-hover:text-red-500/5 transition-colors select-none z-0">
              2
            </div>

            {/* IMAGE ADDED */}
            <div className="h-40 w-full rounded-xl overflow-hidden mb-6 relative z-10">
              <img
                src="https://picsum.photos/600/400?random=32"
                alt="nTrader Liquidity Bridge"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-100 transition-colors">
                nTrader Liquidity Bridge & Market Connectivity
              </h3>

              <p className="text-slate-400 leading-relaxed mb-6 text-sm md:text-base">
                Our crew installs the nTrader liquidity bridge which enables
                brokers to get access to deep liquidity, low spreads, and
                instant execution.
              </p>
            </div>

            <div className="relative z-10 mt-auto border-t border-slate-800 pt-4 flex items-center text-red-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>Deep Liquidity</span>{" "}
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>

          {/* Feature 3 */}
          <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-red-500/40 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute -top-6 -right-6 text-[120px] font-black text-slate-800/50 group-hover:text-red-500/5 transition-colors select-none z-0">
              3
            </div>

            {/* IMAGE ADDED */}
            <div className="h-40 w-full rounded-xl overflow-hidden mb-6 relative z-10">
              <img
                src="https://picsum.photos/600/400?random=33"
                alt="nTrader API Integration"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-100 transition-colors">
                nTrader API Integration & Automated Systems
              </h3>

              <p className="text-slate-400 leading-relaxed mb-6 text-sm md:text-base">
                By using nTrader’s API, brokers may integrate CRMs, risk
                management tools, analytics, payment systems, and fintech
                platforms to achieve full ​‍​‌‍​‍‌​‍​‌‍​‍‌automation.
              </p>
            </div>

            <div className="relative z-10 mt-auto border-t border-slate-800 pt-4 flex items-center text-red-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>Full Automation</span>{" "}
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NTraderFeatures;
