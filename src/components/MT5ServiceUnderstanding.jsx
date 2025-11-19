import React from "react";
import {
  BarChart2,
  Cpu,
  Settings,
  Globe,
  Zap,
  Layers,
  Bot,
} from "lucide-react";

const MT5ServiceUnderstanding = () => {
  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <div className="order-2 lg:order-1 relative flex justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-emerald-600/20 rounded-full blur-3xl opacity-40"></div>

            {/* Abstract Interface Card */}
            <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl group hover:border-green-500/30 transition-colors duration-500">
              {/* Header */}
              <div className="h-12 bg-slate-950 border-b border-slate-800 flex items-center px-5 justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                    <span className="text-xl font-bold text-green-500">5</span>
                  </div>
                  <span className="text-sm text-slate-300 font-bold">
                    MetaTrader 5
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] text-green-400 uppercase font-mono">
                    Connected
                  </span>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-6 relative">
                <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,#22c55e_1px,transparent_1px)] [background-size:20px_20px]"></div>

                {/* Algorithmic Trading Visual */}
                <div className="bg-slate-800/50 border border-green-500/20 rounded-xl p-4 mb-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 opacity-10">
                    <Bot className="w-16 h-16 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center mb-4 relative z-10">
                    <h4 className="text-white font-bold text-sm flex items-center gap-2">
                      <Bot className="w-4 h-4 text-green-400" />
                      Expert Advisor
                    </h4>
                    <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-400 text-[10px] font-mono border border-green-500/30">
                      RUNNING
                    </span>
                  </div>
                  <div className="space-y-2 relative z-10">
                    <div className="flex justify-between text-xs text-slate-400 font-mono">
                      <span>Strategy:</span>
                      <span className="text-white">Trend_Scalper_v5</span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-400 font-mono">
                      <span>Trades:</span>
                      <span className="text-white">1,240</span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-400 font-mono">
                      <span>Profit Factor:</span>
                      <span className="text-green-400">2.45</span>
                    </div>
                  </div>
                </div>

                {/* Execution Stats */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 flex flex-col items-center justify-center group-hover:border-green-500/30 transition-colors">
                    <Zap className="w-5 h-5 text-green-500 mb-1" />
                    <span className="text-xl font-bold text-white">5ms</span>
                    <span className="text-[10px] text-slate-500 uppercase">
                      Latency
                    </span>
                  </div>
                  <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 flex flex-col items-center justify-center group-hover:border-green-500/30 transition-colors">
                    <Layers className="w-5 h-5 text-green-500 mb-1" />
                    <span className="text-xl font-bold text-white">Multi</span>
                    <span className="text-[10px] text-slate-500 uppercase">
                      Asset Class
                    </span>
                  </div>
                </div>

                {/* Bottom Status */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                  <div className="h-1 flex-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    Server Load: 75%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Understanding <span className="text-green-500">MT5</span> and How
              It Enhances Broker Operations
            </h2>

            <div className="prose prose-invert prose-lg">
              <p className="text-slate-300 leading-relaxed text-lg">
                MetaTrader​‍​‌‍​‍‌​‍​‌‍​‍‌ 5 (MT5) is a multi-asset trading
                platform suitable for forex, CFD, and other financial
                instruments with features like advanced charting, quick
                execution, and automated trading capability.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg border-l-2 border-green-500/30 pl-4">
                Brokers utilizing MT5 offerings get access to white-label
                configurations, liquidity bridges, backend infrastructure, and
                API integration, which facilitates smooth trade execution and
                strong client management.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                Capyngen Technologies is where we are perfect in setting up the
                MT5 server for the broker, integrating with liquidity providers,
                and the deployment of the personalized plugins. Our offerings
                make sure that brokers are able to deliver excellent trading
                experiences, maintain high trading volumes, and have the
                capacity to go global with few operational
                ​‍​‌‍​‍‌​‍​‌‍​‍‌difficulties.
              </p>
            </div>

            {/* Key Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-sm text-slate-300">
                <Globe className="w-4 h-4 text-green-400" /> Global Capacity
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-sm text-slate-300">
                <Cpu className="w-4 h-4 text-green-400" /> Automated Trading
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-sm text-slate-300">
                <Settings className="w-4 h-4 text-green-400" /> White-Label
                Config
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MT5ServiceUnderstanding;
