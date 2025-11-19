import React from "react";
import {
  TrendingUp,
  Activity,
  Award,
  Radio,
  Layout,
  ShieldCheck,
  Users,
} from "lucide-react";

const SirixExtraBenefits = () => {
  const visualFeatures = [
    { name: "Sentiment Indicators", icon: <TrendingUp className="w-5 h-5" /> },
    { name: "Real-time Streams", icon: <Activity className="w-5 h-5" /> },
    { name: "Performance Scoring", icon: <Award className="w-5 h-5" /> },
    { name: "Community Signals", icon: <Radio className="w-5 h-5" /> },
    { name: "Clean UI", icon: <Layout className="w-5 h-5" /> },
    { name: "Secure Execution", icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-16 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 -skew-x-12 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Extra Functionalities That Make{" "}
                <span className="text-amber-500">Sirix</span> Stand Out
              </h2>

              <div className="prose prose-invert prose-lg">
                <p className="text-slate-300 leading-relaxed text-lg">
                  Sirix has modern online interaction features that are pretty
                  much advanced and one can say include such things as trader
                  sentiment indicators, real-time trade streams, performance
                  scoring, community signals, and a user interface that is clean
                  and designed for a higher number of trade participations.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {visualFeatures.map((f, i) => (
                  <div
                    key={i}
                    className="bg-slate-800/40 border border-slate-700/50 p-4 rounded-xl flex flex-col items-center text-center gap-3 hover:bg-slate-800/60 hover:border-amber-500/30 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                      <div className="text-amber-400">{f.icon}</div>
                    </div>
                    <span className="text-slate-300 text-sm font-medium leading-tight group-hover:text-amber-100 transition-colors">
                      {f.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900/50 border-l-4 border-amber-500 p-6 rounded-r-xl backdrop-blur-sm">
                <p className="text-slate-300 leading-relaxed">
                  The provision of order execution is done in a well-secured
                  manner through its apparently trustworthy and stable
                  infrastructure thereby making it a device which is suitable
                  for both new and experienced traders.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent rounded-3xl blur-2xl transform translate-y-4"></div>

                <div className="relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl transform rotate-y-[-5deg] hover:rotate-y-0 transition-transform duration-700 ease-out">
                  <div className="bg-slate-950 p-4 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white font-bold text-xs shadow-lg">
                        S
                      </div>
                      <span className="text-white font-semibold text-sm">
                        Social Stream
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                      <Users className="w-4 h-4 text-slate-500" />
                    </div>
                  </div>

                  <div className="p-4 space-y-4 bg-slate-900/80">
                    <div className="flex gap-3 items-start p-3 rounded-xl bg-slate-800/30 border border-slate-700/30">
                      <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex-shrink-0"></div>
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="h-2 w-20 bg-slate-700 rounded-full"></div>
                          <div className="text-[10px] text-slate-500">
                            2m ago
                          </div>
                        </div>
                        <div className="h-2 w-full bg-slate-800 rounded-full"></div>
                        <div className="flex gap-2 pt-1">
                          <div className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20 flex items-center gap-1">
                            <div className="w-1 h-1 rounded-full bg-emerald-400"></div>{" "}
                            BUY EUR/USD
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start p-3 rounded-xl bg-slate-800/30 border border-slate-700/30">
                      <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex-shrink-0"></div>
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="h-2 w-16 bg-slate-700 rounded-full"></div>
                          <div className="text-[10px] text-slate-500">
                            5m ago
                          </div>
                        </div>
                        <div className="h-2 w-3/4 bg-slate-800 rounded-full"></div>
                        <div className="flex gap-2 pt-1">
                          <div className="px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 text-[10px] font-bold border border-rose-500/20 flex items-center gap-1">
                            <div className="w-1 h-1 rounded-full bg-rose-400"></div>{" "}
                            SELL GBP/USD
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 mt-2 border-t border-slate-800/50">
                      <div className="flex justify-between text-xs mb-2 font-medium">
                        <span className="text-slate-400 flex items-center gap-1">
                          <Activity className="w-3 h-3" /> Market Sentiment
                        </span>
                        <span className="text-emerald-400">68% Bullish</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden flex">
                        <div className="h-full bg-emerald-500 w-[68%] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                        <div className="h-full bg-rose-500 flex-1"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-2 md:-right-6 bg-slate-800/90 border border-amber-500/30 p-4 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-3 animate-[bounce_3s_infinite] z-20">
                  <div className="p-2.5 bg-amber-500/20 rounded-lg">
                    <Award className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">
                      Top Performer
                    </div>
                    <div className="text-xs text-slate-400">
                      Rank #1 this week
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SirixExtraBenefits;
