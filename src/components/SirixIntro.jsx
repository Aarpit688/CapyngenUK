import React from "react";
import {
  Share2,
  BarChart2,
  Smartphone,
  Monitor,
  Layout,
  Shield,
  Users,
  Zap,
} from "lucide-react";

const SirixIntro = () => {
  return (
    <div className="py-20 w-full bg-black">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <div className="order-2 lg:order-1 relative">
            {/* Abstract Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-orange-600/20 rounded-full blur-3xl opacity-30"></div>

            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 overflow-hidden shadow-2xl group hover:border-amber-500/30 transition-all duration-500">
              {/* Pattern Overlay */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-[0.03]"></div>

              {/* Dashboard / Platform Mockup */}
              <div className="relative z-10 space-y-6">
                {/* Header Fake UI */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-2 w-24 bg-slate-800 rounded-full"></div>
                    <div className="h-2 w-8 bg-amber-500/20 rounded-full"></div>
                  </div>
                </div>

                {/* Main Content UI */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Chart Area */}
                  <div className="col-span-2 bg-slate-800/50 rounded-xl p-4 h-48 border border-slate-700/50 relative overflow-hidden flex flex-col justify-between group-hover:bg-slate-800/70 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <div className="h-2 w-16 bg-slate-600 rounded-full"></div>
                      <Zap className="w-4 h-4 text-amber-400" />
                    </div>

                    <div className="relative h-full w-full flex items-end gap-1">
                      {[35, 55, 45, 70, 60, 80, 65, 90, 75, 85].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}%` }}
                          className="flex-1 bg-gradient-to-t from-amber-600/40 to-amber-400/60 rounded-t-sm group-hover:to-amber-400 transition-all duration-500"
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Social Trading Sidebar */}
                  <div className="col-span-1 space-y-3">
                    <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/50 flex items-center gap-3 shadow-lg">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-slate-700 border border-amber-500/30 flex items-center justify-center">
                          <Users className="w-4 h-4 text-amber-400" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-slate-800 rounded-full"></div>
                      </div>

                      <div className="space-y-1 hidden sm:block">
                        <div className="h-1.5 w-12 bg-slate-600 rounded-full"></div>
                        <div className="h-1.5 w-8 bg-emerald-500/50 rounded-full"></div>
                      </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-700 border border-white/5"></div>
                      <div className="space-y-1 hidden sm:block">
                        <div className="h-1.5 w-10 bg-slate-700 rounded-full"></div>
                      </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50 flex items-center gap-3 opacity-60">
                      <div className="w-8 h-8 rounded-full bg-slate-700 border border-white/5"></div>
                    </div>
                  </div>
                </div>

                {/* Platform Icons Row */}
                <div className="flex justify-around pt-4 border-t border-slate-800/50">
                  <div className="flex flex-col items-center gap-2 text-slate-500 group-hover:text-amber-400 transition-colors duration-300">
                    <Smartphone className="w-5 h-5" />
                    <span className="text-[10px] uppercase tracking-wider font-semibold">
                      Mobile
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-2 text-slate-500 group-hover:text-amber-400 transition-colors duration-300 delay-75">
                    <Monitor className="w-5 h-5" />
                    <span className="text-[10px] uppercase tracking-wider font-semibold">
                      Web
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-2 text-slate-500 group-hover:text-amber-400 transition-colors duration-300 delay-150">
                    <Layout className="w-5 h-5" />
                    <span className="text-[10px] uppercase tracking-wider font-semibold">
                      Desktop
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Understanding <span className="text-amber-500">SIRIX</span> and
              Why Brokers Prefer It
            </h2>

            <div className="prose prose-invert prose-lg">
              <p className="text-slate-300 leading-relaxed text-lg border-l-2 border-amber-500/30 pl-4">
                Sirix is a next-generation, simplified, and efficient trading
                system designed for forex and CFD brokers. It combines a safe
                trading environment, built-in social trading, and real-time
                analytics.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                Capyngen helps brokers unlock the full potential of Sirix:
                social dashboards, backend hosting, Sirix Mobile, Sirix
                WebTrader, and the Sirix Desktop Suite.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 bg-slate-900/30 p-3 rounded-lg border border-slate-800">
                <div className="p-2 bg-amber-500/10 rounded-lg mt-0.5">
                  <Shield className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">
                    Safe Environment
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Secure infrastructure
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900/30 p-3 rounded-lg border border-slate-800">
                <div className="p-2 bg-amber-500/10 rounded-lg mt-0.5">
                  <Share2 className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">
                    Social Trading
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Built-in copy trading
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900/30 p-3 rounded-lg border border-slate-800">
                <div className="p-2 bg-amber-500/10 rounded-lg mt-0.5">
                  <BarChart2 className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">
                    Real-time Analytics
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Instant market insights
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900/30 p-3 rounded-lg border border-slate-800">
                <div className="p-2 bg-amber-500/10 rounded-lg mt-0.5">
                  <Layout className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">
                    Multi-Asset
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Unified dashboard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SirixIntro;
