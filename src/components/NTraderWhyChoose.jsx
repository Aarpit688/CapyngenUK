import React from "react";
import {
  Router,
  DollarSign,
  Map,
  Clock,
  Gauge,
  Globe,
  Server,
} from "lucide-react";

const NTraderWhyChoose = () => {
  const focusPoints = [
    {
      text: "Intelligent order routing",
      icon: <Router className="w-5 h-5 text-red-400" />,
    },
    {
      text: "Correct pricing",
      icon: <DollarSign className="w-5 h-5 text-red-400" />,
    },
    {
      text: "Effective liquidity mapping",
      icon: <Map className="w-5 h-5 text-red-400" />,
    },
    {
      text: "Availability of service for most of the time",
      icon: <Clock className="w-5 h-5 text-red-400" />,
    },
  ];

  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="relative bg-slate-900/40 border border-slate-800 rounded-3xl p-8 md:p-16 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 opacity-50"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Why Brokers Choose{" "}
                <span className="text-red-500">nTrader Technology</span>
              </h2>

              <div className="prose prose-invert prose-lg">
                <p className="text-slate-300 leading-relaxed text-lg">
                  nTrader​‍​‌‍​‍‌​‍​‌‍​‍‌ is created with speed, stability, and
                  scalability in mind, catering to any kind of broker. Also, it
                  facilitates multi-asset execution, has tight connectivity, and
                  an efficient backend engine.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg border-l-2 border-red-500/30 pl-4">
                  In contrast to the systems of the past, nTrader concentrates
                  on:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {focusPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-red-500/40 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:bg-red-500/20 transition-colors flex-shrink-0">
                      {point.icon}
                    </div>
                    <span className="text-slate-200 font-medium text-sm">
                      {point.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Visual Representation */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-orange-500/20 rounded-full blur-3xl opacity-30"></div>

                <div className="relative bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-6 flex flex-col gap-6 group hover:border-red-500/30 transition-colors duration-500">
                  {/* Speed Visual */}
                  <div className="relative h-32 w-full bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent"></div>
                    <div className="text-center z-10">
                      <Gauge className="w-10 h-10 text-red-500 mx-auto mb-2 animate-pulse" />
                      <div className="text-2xl font-bold text-white tracking-tighter">
                        ULTRA LOW
                      </div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-widest">
                        Latency Execution
                      </div>
                    </div>

                    {/* Speed Lines */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
                      <div className="absolute top-0 left-1/2 h-full w-px bg-gradient-to-b from-transparent via-red-500/30 to-transparent"></div>
                    </div>
                  </div>

                  {/* Features Badges */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex flex-col items-center text-center gap-2 hover:bg-slate-800 transition-colors">
                      <Globe className="w-6 h-6 text-red-400" />
                      <span className="text-xs font-bold text-white">
                        Global Reach
                      </span>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex flex-col items-center text-center gap-2 hover:bg-slate-800 transition-colors">
                      <Server className="w-6 h-6 text-orange-400" />
                      <span className="text-xs font-bold text-white">
                        Stable Engine
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion Text */}
          <div className="mt-12 pt-8 border-t border-slate-800 text-center">
            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-4xl mx-auto">
              "Therefore, brokers can move into the international market with
              the possibility of keeping latency at a minimum and their
              performance being stable and ​‍​‌‍​‍‌​‍​‌‍​‍‌trustworthy."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NTraderWhyChoose;
