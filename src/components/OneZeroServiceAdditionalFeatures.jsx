import React from "react";
import { Layers, Link, ShieldAlert, Activity, Clock, Zap } from "lucide-react";

const OneZeroServiceAdditionalFeatures = () => {
  const features = [
    {
      name: "Multi-asset support",
      icon: <Layers className="w-5 h-5 text-sky-400" />,
    },
    {
      name: "API & bridge integration",
      icon: <Link className="w-5 h-5 text-sky-400" />,
    },
    {
      name: "Advanced risk management",
      icon: <ShieldAlert className="w-5 h-5 text-sky-400" />,
    },
    {
      name: "Real-time analytics",
      icon: <Activity className="w-5 h-5 text-sky-400" />,
    },
  ];

  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="relative bg-slate-900 border border-slate-800 p-8 md:p-16 overflow-hidden shadow-2xl">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] mix-blend-overlay pointer-events-none"></div>
          <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-sky-900/20 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-sky-500 via-blue-500 to-sky-500 z-10"></div>
          <h2 className="text-4xl md:text-5xl mx-auto text-center mb-10 font-bold text-white leading-tight">
            Additional Features That Make OneZero Stand Out
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="prose prose-invert prose-lg">
                <p className="text-slate-300 leading-relaxed text-lg">
                  OneZero​‍​‌‍​‍‌​‍​‌‍​‍‌ is a provider of technology that
                  offers the following features to brokers: multi-asset support,
                  API and bridge integration, advanced risk management, and
                  real-time analytics.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg border-l-4 border-sky-500 pl-4 bg-sky-900/10 py-2 rounded-r-lg">
                  Brokers are in a position to carry out trades over several
                  asset classes without any time lags, be integrations with
                  external systems without any hassles, and also keep an eye on
                  the trading activities on a real-time basis.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-sky-500/30 transition-colors group"
                  >
                    <div className="p-2 bg-sky-500/10 rounded-lg group-hover:bg-sky-500/20 transition-colors">
                      {f.icon}
                    </div>
                    <span className="text-slate-200 font-medium text-sm">
                      {f.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Side */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-blue-500/20 rounded-full blur-3xl opacity-30"></div>

                <div className="relative bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-6 flex flex-col gap-6 group hover:border-sky-500/30 transition-colors duration-500">
                  {/* Top Section: Zero Lag Visual */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs text-slate-400 uppercase tracking-wider">
                      <span>Latency Monitor</span>
                      <span className="text-sky-400 font-bold">0ms Lag</span>
                    </div>
                    <div className="h-32 w-full bg-slate-900 rounded-xl border border-slate-800 relative overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent"></div>

                      {/* Pulse Effect */}
                      <div className="relative">
                        <div className="w-16 h-16 bg-sky-500/10 rounded-full flex items-center justify-center animate-pulse">
                          <div className="w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center">
                            <Zap className="w-5 h-5 text-sky-400 fill-sky-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section: Real-time Monitoring */}
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-500/10 rounded-lg">
                        <Clock className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">
                          Real-Time
                        </div>
                        <div className="text-[10px] text-slate-400">
                          Active Monitoring
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1 h-4 bg-sky-500 rounded-sm animate-[bounce_1s_infinite]"></div>
                      <div className="w-1 h-4 bg-sky-500 rounded-sm animate-[bounce_1s_infinite_0.2s]"></div>
                      <div className="w-1 h-4 bg-sky-500 rounded-sm animate-[bounce_1s_infinite_0.4s]"></div>
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

export default OneZeroServiceAdditionalFeatures;
