import React from "react";
import {
  Server,
  Shield,
  Zap,
  Database,
  Globe,
  Cpu,
  CheckCircle2,
  Activity,
} from "lucide-react";

const NTraderArchitecture = () => {
  const components = [
    {
      text: "Platform deployment",
      icon: <Server className="w-4 h-4 text-red-400" />,
    },
    {
      text: "Global server hosting",
      icon: <Globe className="w-4 h-4 text-red-400" />,
    },
    {
      text: "Security setup",
      icon: <Shield className="w-4 h-4 text-red-400" />,
    },
    {
      text: "Liquidity connection",
      icon: <Zap className="w-4 h-4 text-red-400" />,
    },
    {
      text: "Data feed installation",
      icon: <Database className="w-4 h-4 text-red-400" />,
    },
    {
      text: "Performance optimization",
      icon: <Cpu className="w-4 h-4 text-red-400" />,
    },
  ];

  return (
    <div className="w-full bg-black py-20">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="relative bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1558494949-efc52728101c?q=80&w=2000&auto=format&fit=crop"
              alt="Server Infrastructure"
              className="w-full h-full object-cover opacity-10 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/80"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 p-8 md:p-16 items-center">
            {/* Left Column: Content */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                How Capyngen Builds a Complete{" "}
                <span className="text-red-500">
                  nTrader Trading Architecture
                </span>
              </h2>

              <div className="prose prose-invert prose-lg">
                <p className="text-slate-300 leading-relaxed text-lg">
                  Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ Technologies UK Limited offers all
                  the nTrader components required for a fully functional
                  ecosystem such as:
                </p>
              </div>

              {/* Component Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {components.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-red-500/30 hover:bg-slate-800/80 transition-all duration-300 group"
                  >
                    <div className="p-2 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-slate-800/50 to-transparent border-l-4 border-red-500 p-6 rounded-r-xl">
                <p className="text-slate-300 leading-relaxed italic">
                  "We handle your backend, keep an eye on the trading engines,
                  direct the execution, and take care of all the infrastructure
                  levels."
                </p>
              </div>
            </div>

            {/* Right Column: Visual Representation */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl group">
                {/* Top Header */}
                <div className="h-10 bg-slate-900 border-b border-slate-800 flex items-center px-4 justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                  </div>
                  <div className="text-[10px] font-mono text-slate-500">
                    SYSTEM_MONITOR
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Enterprise Servers Block */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                      <span>Enterprise Servers</span>
                      <span className="text-emerald-400">Online</span>
                    </div>
                    <div className="grid grid-cols-4 gap-1">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="h-8 bg-slate-800 rounded-md border border-slate-700 relative overflow-hidden group/server"
                        >
                          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500/50 group-hover/server:bg-red-500 transition-colors"></div>
                          <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cloud Config Block */}
                  <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-700 flex items-center gap-4">
                    <div className="p-3 bg-red-500/10 rounded-full">
                      <Globe className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-sm">
                        Cloud Architecture
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        Multi-zone redundancy active
                      </div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  </div>

                  {/* Disaster Recovery Block */}
                  <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-700 flex items-center gap-4">
                    <div className="p-3 bg-red-500/10 rounded-full">
                      <Shield className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-sm">
                        Disaster Recovery
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        Failover systems ready
                      </div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  </div>

                  {/* Text Summary */}
                  <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800 pt-4">
                    "We have in place enterprise servers, cloud configurations,
                    redundancies, and disaster recovery as part of our hosting
                    to guarantee the continuation of trading operations without
                    any ​‍​‌‍​‍‌​‍​‌‍​‍‌breaks."
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

export default NTraderArchitecture;
