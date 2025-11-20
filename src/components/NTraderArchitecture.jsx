import React from "react";
import { Server, Shield, Zap, Database, Globe, Cpu } from "lucide-react";
import { assets } from "../assets/assets";

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
            {/* LEFT CONTENT */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                How Capyngen Builds a Complete{" "}
                <span className="text-red-500">
                  nTrader Trading Architecture
                </span>
              </h2>

              <p className="text-slate-300 leading-relaxed text-lg">
                Capyngen Technologies UK Limited offers all the nTrader
                components required for a fully functional ecosystem such as:
              </p>

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

            {/* RIGHT SIDE — REPLACED ILLUSTRATION WITH IMAGE */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl rounded-md overflow-hidden shadow-2xl border border-slate-800">
                <img
                  src={assets.nt06}
                  alt="Trading Servers"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NTraderArchitecture;
