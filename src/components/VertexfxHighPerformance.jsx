import React from "react";
import {
  MonitorCheck,
  Globe2,
  ServerCog,
  Cable,
  Layers,
  HeartHandshake,
} from "lucide-react";

const VertexFxHighPerformance = () => {
  const offerings = [
    {
      text: "White-label platform VertexFX",
      icon: <MonitorCheck className="w-5 h-5 text-violet-400" />,
    },
    {
      text: "Liquidity bridge and routing setup",
      icon: <Globe2 className="w-5 h-5 text-violet-400" />,
    },
    {
      text: "Backend hosting and security",
      icon: <ServerCog className="w-5 h-5 text-violet-400" />,
    },
    {
      text: "API and fintech integration",
      icon: <Cable className="w-5 h-5 text-violet-400" />,
    },
    {
      text: "Multi-asset trading environment",
      icon: <Layers className="w-5 h-5 text-violet-400" />,
    },
    {
      text: "24/7 monitoring and platform support",
      icon: <HeartHandshake className="w-5 h-5 text-violet-400" />,
    },
  ];

  return (
    <div className="py-20 w-full bg-black">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-violet-600/5 skew-x-12 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-900/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Build a High-Performance Brokerage with{" "}
              <span className="text-violet-400">VertexFX</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ offers a full VertexFX ecosystem to the
              market:
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {offerings.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-700 
              hover:border-violet-500/50 hover:bg-slate-800/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-lg bg-violet-900/20 border border-violet-500/20 
              flex items-center justify-center group-hover:bg-violet-500/20 group-hover:border-violet-500/40 transition-all"
                >
                  {item.icon}
                </div>

                <span className="text-slate-200 font-medium text-sm md:text-base group-hover:text-white transition-colors">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div className="relative z-10 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 md:p-8 text-center max-w-4xl mx-auto backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/5 to-transparent rounded-2xl"></div>

            <p className="relative text-slate-300 text-lg leading-relaxed font-light">
              "Traders get a reliable, expandable, and safe trading environment
              that is open for further ​‍​‌‍​‍‌​‍​‌‍​‍‌development."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VertexFxHighPerformance;
