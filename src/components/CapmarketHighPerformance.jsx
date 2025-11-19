import React from "react";
import {
  Monitor,
  Globe,
  Server,
  Unplug,
  Layers,
  Clock,
  CheckCircle2,
} from "lucide-react";

const CapmarketHighPerformance = () => {
  const features = [
    {
      icon: <Monitor className="w-6 h-6 text-cyan-400" />,
      text: "Capmarket white-label platform installation",
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      text: "Liquidity bridge and global routing",
    },
    {
      icon: <Server className="w-6 h-6 text-indigo-400" />,
      text: "Backend management and enterprise hosting",
    },
    {
      icon: <Unplug className="w-6 h-6 text-violet-400" />,
      text: "API connectivity and fintech integration",
    },
    {
      icon: <Layers className="w-6 h-6 text-fuchsia-400" />,
      text: "Multi-asset trading setup",
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-400" />,
      text: "Round-the-clock support, monitoring, and maintenance",
    },
  ];

  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full mb-32 animate-fade-in-up">
        <div className="relative bg-slate-900/40 border border-slate-800 rounded-3xl p-8 md:p-16 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-500 opacity-70"></div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="text-center max-w-7xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                Build a High-Performance Brokerage with Capmarket
              </h2>

              <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ Technologies UK Limited implements full
                Capmarket trading platform solutions, which feature the
                following:
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-xl 
                hover:bg-slate-800/60 hover:border-slate-600 transition-all duration-300 
                group flex flex-col items-start gap-4"
                >
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 group-hover:border-slate-600 transition-colors">
                    {feature.icon}
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-200 font-medium leading-snug">
                      {feature.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Conclusion Box */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]"></div>

              <p className="relative text-slate-200 text-lg md:text-xl font-light leading-relaxed">
                Brokers through Capmarket enjoy a robust, safe, and expandable
                trading setting that is ideal for international development and
                large-volume trades.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapmarketHighPerformance;
