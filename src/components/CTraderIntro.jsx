import React from "react";
import {
  Activity,
  Settings,
  Zap,
  Globe,
  Layers,
  DollarSign,
} from "lucide-react";

const CTraderIntro = () => {
  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <div className="order-2 lg:order-1 relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/20 to-emerald-600/20 rounded-full blur-3xl opacity-40"></div>

            <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl group hover:border-teal-500/30 transition-colors duration-500">
              <div className="h-12 bg-slate-950 border-b border-slate-800 flex items-center px-5 justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-teal-500 flex items-center justify-center text-[10px] font-bold text-black">
                    cT
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
                    cTrader Web
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                </div>
              </div>

              <div className="p-6 relative">
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="flex gap-4 mb-6">
                  <div className="bg-slate-800/50 border border-teal-500/20 rounded-lg p-3 flex-1">
                    <div className="text-[10px] text-slate-400 uppercase">
                      EURUSD
                    </div>
                    <div className="text-lg font-bold text-teal-400">
                      1.0842
                    </div>
                  </div>
                  <div className="bg-slate-800/50 border border-rose-500/20 rounded-lg p-3 flex-1">
                    <div className="text-[10px] text-slate-400 uppercase">
                      GBPUSD
                    </div>
                    <div className="text-lg font-bold text-rose-400">
                      1.2650
                    </div>
                  </div>
                </div>

                <div className="h-40 w-full bg-slate-800/30 rounded-xl border border-slate-700 relative overflow-hidden flex items-end px-2 gap-1 pb-2">
                  {[40, 60, 45, 70, 55, 80, 65, 50, 75, 90, 85, 95].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 flex flex-col justify-end items-center group/candle"
                      >
                        <div
                          style={{ height: `${h}%` }}
                          className={`w-2 rounded-sm ${
                            i % 3 === 0 ? "bg-rose-500" : "bg-teal-500"
                          } opacity-80 group-hover/candle:opacity-100 transition-opacity relative`}
                        >
                          <div
                            className={`absolute -top-2 left-1/2 -translate-x-1/2 w-0.5 h-full ${
                              i % 3 === 0 ? "bg-rose-500" : "bg-teal-500"
                            } -z-10 opacity-50`}
                          ></div>
                        </div>
                      </div>
                    )
                  )}

                  <div className="absolute top-2 right-2 bg-slate-900/90 backdrop-blur-md border border-slate-600 px-2 py-1 rounded text-[10px] text-teal-400 font-mono">
                    EXECUTION: 5ms
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <div className="flex gap-2">
                    <div className="p-2 bg-teal-500/10 rounded-lg border border-teal-500/20">
                      <Activity className="w-4 h-4 text-teal-400" />
                    </div>
                    <div className="p-2 bg-slate-800 rounded-lg border border-slate-700">
                      <Settings className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold rounded-lg transition-colors shadow-lg shadow-teal-900/20">
                    QUICK TRADE
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
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
