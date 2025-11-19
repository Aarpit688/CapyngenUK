import React from "react";
import {
  Zap,
  Globe,
  Layers,
  Settings,
  ShieldAlert,
  CloudLightning,
} from "lucide-react";

const ArkTradingPreference = () => {
  const preferences = [
    {
      text: "Quick performance",
      icon: <Zap className="w-5 h-5 text-rose-400" />,
    },
    {
      text: "Worldwide low-latency network",
      icon: <Globe className="w-5 h-5 text-rose-400" />,
    },
    {
      text: "Multi-asset trading capability",
      icon: <Layers className="w-5 h-5 text-rose-400" />,
    },
    {
      text: "Adjustable customer integrations",
      icon: <Settings className="w-5 h-5 text-rose-400" />,
    },
    {
      text: "Risk controls in real time",
      icon: <ShieldAlert className="w-5 h-5 text-rose-400" />,
    },
    {
      text: "High-speed cloud architecture",
      icon: <CloudLightning className="w-5 h-5 text-rose-400" />,
    },
  ];

  return (
    <div className="py-20 w-full bg-black">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="bg-slate-900/50 border border-slate-800 rounded-md p-8 md:p-12 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-900/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 opacity-50"></div>

          <div className="relative z-10 text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Brokers Prefer{" "}
              <span className="text-rose-500">Ark Trading Technology</span>
            </h2>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {preferences.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800/40 border border-slate-700/50 p-5 rounded-md flex items-center gap-4 hover:bg-slate-800/80 hover:border-rose-500/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="p-2 bg-slate-900 rounded-lg border border-slate-800 group-hover:border-rose-500/20 transition-colors shadow-sm">
                  {item.icon}
                </div>
                <span className="text-slate-200 font-medium group-hover:text-white transition-colors">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div className="relative z-10 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700 rounded-md p-8 text-center backdrop-blur-md shadow-xl">
            <div className="absolute inset-0 bg-rose-500/5 rounded-2xl pointer-events-none"></div>
            <p className="text-slate-300 text-lg leading-relaxed italic">
              "Moreover, its reliability, safety, and automated features turn it
              into a perfect solution for both startup and already existing
              brokerage firms."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArkTradingPreference;
