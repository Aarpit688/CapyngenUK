import React from "react";
import {
  Network,
  Server,
  Settings2,
  CheckCircle2,
  TrendingUp,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

const PrimeXMServiceInfrastructure = () => {
  const services = [
    {
      title: "PrimeXM XCore connectivity & liquidity network setup",
      description:
        "Easily link your platform with several liquidity providers.",
      icon: <Network className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "Broker infrastructure setup",
      description:
        "Install powerful and scalable X-Core servers that are customized to your business requirements.",
      icon: <Server className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "Integration and testing",
      description:
        "Facilitate smooth integration with existing trading systems, CRMs, and analytics tools.",
      icon: <Settings2 className="w-6 h-6 text-yellow-500" />,
    },
  ];

  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl text-center mb-10 font-bold text-white leading-tight">
          How Capyngen Enhances PrimeXM X-Core Infrastructure
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="prose prose-invert prose-lg">
              <p className="text-slate-300 leading-relaxed text-lg">
                Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ Technologies offers a full range of
                end-to-end PrimeXM X-Core services to brokers who are in need of
                dependable and scalable trading solutions. We handle:
              </p>
            </div>

            <div className="space-y-4 mt-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-5 rounded-md bg-slate-900 border border-slate-800 hover:border-yellow-500/40 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-md bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-colors">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-yellow-200 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Representation */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 bg-gradient-to-bl from-yellow-600/20 to-orange-600/10 rounded-full blur-3xl opacity-30"></div>

            <div className="relative w-full max-w-md">
              {/* Tech Stack Card */}
              <div className="bg-slate-950 border border-slate-800 rounded-md overflow-hidden shadow-2xl relative z-10">
                {/* Top Bar */}
                <div className="h-12 bg-slate-900 border-b border-slate-800 flex items-center px-4 justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span className="text-xs font-mono text-slate-400">
                      OPTIMIZATION_PROTOCOL
                    </span>
                  </div>
                  <div className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> ACTIVE
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  {/* Metric 1 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-medium text-slate-400">
                      <span>Latency Reduction</span>
                      <span className="text-white">45%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 w-[45%] rounded-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-medium text-slate-400">
                      <span>Execution Efficiency</span>
                      <span className="text-white">92%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 w-[92%] rounded-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Server Rack */}
                  <div className="grid grid-cols-4 gap-2 mt-6 pt-6 border-t border-slate-800">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="h-10 bg-slate-900 border border-slate-700 rounded flex items-end justify-center pb-1 hover:border-yellow-500/50 transition-colors cursor-pointer"
                      >
                        <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="bg-slate-900 p-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-500/10 rounded-lg">
                      <Cpu className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-xs">
                        Institutional Grade
                      </div>
                      <div className="text-[10px] text-slate-500">
                        Hardware Certified
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-600" />
                </div>
              </div>

              {/* Floating Quote */}
              <div className="absolute -bottom-20 -left-6 bg-slate-800/90 backdrop-blur-md border border-slate-700 p-5 rounded-md shadow-xl max-w-xs z-20">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-sm text-slate-300 leading-relaxed">
                    "Through the use of our skills, brokers are able to enjoy
                    increased efficiency, lower latency, and improved trade
                    execution while at the same time having access to
                    institutional-grade PrimeXM XCore
                    ​‍​‌‍​‍‌​‍​‌‍​‍‌solutions."
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

export default PrimeXMServiceInfrastructure;
