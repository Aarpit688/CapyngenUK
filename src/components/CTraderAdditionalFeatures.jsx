import React from "react";
import {
  Layers,
  Cpu,
  PenTool,
  BarChart,
  LineChart,
  Briefcase,
  ShieldCheck,
  Globe,
} from "lucide-react";

const CTraderAdditionalFeatures = () => {
  const features = [
    { name: "Multi-asset features", icon: <Layers className="w-4 h-4" /> },
    { name: "API & bridge integration", icon: <Cpu className="w-4 h-4" /> },
    {
      name: "White label customization",
      icon: <PenTool className="w-4 h-4" />,
    },
    { name: "Sophisticated charting", icon: <LineChart className="w-4 h-4" /> },
    { name: "Enhanced analytics", icon: <BarChart className="w-4 h-4" /> },
    { name: "CRM integration", icon: <Briefcase className="w-4 h-4" /> },
  ];

  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="relative bg-slate-900 border border-slate-800 rounded-xl p-8 md:p-16 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] mix-blend-overlay pointer-events-none"></div>
          <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-teal-900/20 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-teal-500 via-emerald-500 to-teal-500 z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Additional Features That Make{" "}
                <span className="text-teal-500">cTrader</span> Stand Out
              </h2>

              <div className="prose prose-invert prose-lg">
                <p className="text-slate-300 leading-relaxed text-lg">
                  With​‍​‌‍​‍‌​‍​‌‍​‍‌ cTrader technology, brokers can enjoy a
                  plethora of multi-asset features, API & bridge integration,
                  white label customization, sophisticated charting, and
                  enhanced analytics capabilities. Clients of brokers can be
                  given the facility of quick and trustworthy execution while
                  the brokers can also integrate easily with CRM, back-office,
                  and reporting systems.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg">
                  We at cTrader are dedicated to the deployment and support of
                  our software platforms in such a way that even during heavy
                  trading volumes, platforms remain stable thereby giving
                  brokers that much-needed assurance and clients elevated
                  trading experiences.
                </p>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 pt-2">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm text-slate-300 hover:border-teal-500/30 hover:text-teal-200 transition-colors"
                  >
                    <span className="text-teal-500">{f.icon}</span>
                    <span>{f.name}</span>
                  </div>
                ))}
              </div>

              {/* Future Ready */}
              <div className="relative p-6 rounded-2xl bg-gradient-to-r from-teal-900/20 to-emerald-900/20 border border-teal-500/20 flex items-center gap-4">
                <div className="p-3 rounded-full bg-teal-500/10 border border-teal-500/20">
                  <Globe className="w-6 h-6 text-teal-400 animate-pulse" />
                </div>
                <p className="text-slate-200 font-light leading-relaxed">
                  Capyngen takes care of all the brokerage solutions being
                  scalable, secure, and globally connected thus making your
                  brokerage ‌ ‍ ​‍​‌‍​‍‌​‍​‌‍​‍‌future-ready.
                </p>
              </div>
            </div>

            {/* Visual Side */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-emerald-500/20 rounded-full blur-3xl opacity-30"></div>

                <div className="relative bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-6 flex flex-col gap-6 group hover:border-teal-500/30 transition-colors duration-500">
                  {/* Performance Graph */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs text-slate-400 uppercase tracking-wider">
                      <span>Volume Stability</span>
                      <span className="text-teal-400">High Load</span>
                    </div>

                    <div className="h-32 w-full bg-slate-900 rounded-xl border border-slate-800 relative overflow-hidden flex items-end px-1 gap-1">
                      {[30, 45, 35, 60, 50, 75, 65, 90, 80, 95, 85, 100].map(
                        (h, i) => (
                          <div
                            key={i}
                            style={{ height: `${h}%` }}
                            className="flex-1 bg-teal-600/80 rounded-t-sm hover:bg-teal-500 transition-colors"
                          ></div>
                        )
                      )}

                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 100 Q 20 90, 40 70 T 80 40 T 160 20 T 240 10 T 320 5"
                          fill="none"
                          stroke="#34d399"
                          strokeWidth="2"
                          vectorEffect="non-scaling-stroke"
                          className="drop-shadow-[0_0_4px_rgba(52,211,153,0.5)]"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Scalability Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex flex-col items-center text-center gap-2 hover:bg-slate-800 transition-colors">
                      <ShieldCheck className="w-6 h-6 text-teal-400" />
                      <span className="text-xs font-bold text-white">
                        Secure
                      </span>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex flex-col items-center text-center gap-2 hover:bg-slate-800 transition-colors">
                      <Globe className="w-6 h-6 text-emerald-400" />
                      <span className="text-xs font-bold text-white">
                        Connected
                      </span>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                    <span className="text-xs text-slate-500 font-mono">
                      SYS_STATUS
                    </span>

                    <div className="flex items-center gap-2 px-2 py-1 rounded bg-teal-500/10 border border-teal-500/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 absolute"></div>
                      <span className="text-[10px] font-bold text-teal-400 uppercase">
                        Future-Ready
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

export default CTraderAdditionalFeatures;
