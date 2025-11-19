import React from "react";
import {
  Activity,
  ShieldAlert,
  Link,
  BarChart4,
  TrendingDown,
  Crosshair,
  Zap,
} from "lucide-react";

const PrimeXMServiceAdditionalFeatures = () => {
  const features = [
    {
      name: "Streaming Market Data",
      icon: <Activity className="w-5 h-5 text-yellow-500" />,
    },
    {
      name: "Automated Risk Management",
      icon: <ShieldAlert className="w-5 h-5 text-yellow-500" />,
    },
    {
      name: "Integration Capabilities",
      icon: <Link className="w-5 h-5 text-yellow-500" />,
    },
    {
      name: "Large Volume Handling",
      icon: <BarChart4 className="w-5 h-5 text-yellow-500" />,
    },
    {
      name: "Lower Operational Risks",
      icon: <TrendingDown className="w-5 h-5 text-yellow-500" />,
    },
    {
      name: "Accurate Pricing",
      icon: <Crosshair className="w-5 h-5 text-yellow-500" />,
    },
  ];

  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="relative bg-slate-900 border border-slate-800 rounded-md p-8 md:p-16 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] mix-blend-overlay pointer-events-none"></div>
          <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-yellow-900/20 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-yellow-500 via-amber-500 to-yellow-500 z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Additional Features That Make{" "}
                <span className="text-yellow-500">PrimeXM X-Core</span> Stand
                Out
              </h2>

              <div className="prose prose-invert prose-lg">
                <p className="text-slate-300 leading-relaxed text-lg">
                  PrimeXM​‍​‌‍​‍‌​‍​‌‍​‍‌ X-Core technology is packed with
                  advanced features that significantly elevate the performance
                  of the brokerage. It offers streaming market data, automated
                  risk management tools, and also integration capabilities to
                  the trading platforms and CRMs that are already in use.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg">
                  Brokers are able to handle large trading volumes without any
                  problems, lower the operational risks, and also keep the
                  pricing accurate.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-sm bg-slate-800/50 border border-slate-700/50 hover:border-yellow-500/30 transition-colors group"
                  >
                    <div className="p-2 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                      {f.icon}
                    </div>
                    <span className="text-slate-200 font-medium text-sm">
                      {f.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 p-6 rounded-sm mt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-emerald-500/10 rounded-sm border border-emerald-500/20">
                    <Zap className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    "Additionally, Capyngen makes sure that the entire system is
                    not only scalable but also high-performance optimized for
                    the ultra-high-volume trading environment of the
                    ​‍​‌‍​‍‌​‍​‌‍​‍‌future."
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-amber-500/20 rounded-md blur-3xl opacity-30"></div>

                <div className="relative bg-slate-950 border border-slate-800 rounded-md overflow-hidden shadow-2xl p-6 flex flex-col gap-6 group hover:border-yellow-500/30 transition-colors duration-500 min-h-[400px]">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                    <span className="text-xs text-slate-400 font-mono">
                      X-CORE.SYS
                    </span>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-4 bg-yellow-500 rounded-sm"></div>
                      <div className="w-1.5 h-4 bg-yellow-500/50 rounded-sm"></div>
                      <div className="w-1.5 h-4 bg-yellow-500/30 rounded-sm"></div>
                    </div>
                  </div>

                  <div className="space-y-2 relative h-40 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950 z-10"></div>

                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="flex justify-between text-[10px] font-mono text-slate-500 animate-[slideUp_4s_linear_infinite]"
                        style={{ animationDelay: `${i * 0.5}s` }}
                      >
                        <span>DATA_STREAM_{100 + i}</span>
                        <span className="text-emerald-500">
                          {(Math.random() * 100).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto grid grid-cols-2 gap-3">
                    <div className="bg-slate-900 p-3 rounded-sm border border-slate-800 flex flex-col items-center justify-center text-center">
                      <span className="text-2xl font-bold text-white">∞</span>
                      <span className="text-[10px] text-slate-400 uppercase">
                        Scalability
                      </span>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-sm border border-slate-800 flex flex-col items-center justify-center text-center">
                      <span className="text-xl font-bold text-white">0%</span>
                      <span className="text-[10px] text-slate-400 uppercase">
                        Risk
                      </span>
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

export default PrimeXMServiceAdditionalFeatures;
