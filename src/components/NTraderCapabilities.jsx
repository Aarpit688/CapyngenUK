import React from "react";
import {
  CheckCircle2,
  BrainCircuit,
  BarChart3,
  Layers,
  Zap,
  Layout,
  ShieldCheck,
  Cpu,
  Network,
} from "lucide-react";

const NTraderCapabilities = () => {
  const capabilities = [
    {
      text: "Smart order routing",
      icon: <Zap className="w-5 h-5 text-red-400" />,
    },
    {
      text: "Real-time analytics & reporting",
      icon: <BarChart3 className="w-5 h-5 text-red-400" />,
    },
    {
      text: "Multi-asset trading support",
      icon: <Layers className="w-5 h-5 text-red-400" />,
    },
    {
      text: "AI-powered pricing tools",
      icon: <BrainCircuit className="w-5 h-5 text-red-400" />,
    },
    {
      text: "Algorithmic execution",
      icon: <Cpu className="w-5 h-5 text-red-400" />,
    },
    {
      text: "Customizable dashboard",
      icon: <Layout className="w-5 h-5 text-red-400" />,
    },
    {
      text: "Secure global hosting",
      icon: <ShieldCheck className="w-5 h-5 text-red-400" />,
    },
  ];

  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="relative bg-slate-900 border border-slate-800 p-8 md:p-16 overflow-hidden shadow-2xl">
          {/* Background elements */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-red-900/5 to-transparent pointer-events-none"></div>
          <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text & Capabilities List */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Key Capabilities That Make{" "}
                <span className="text-red-500">nTrader</span> a Leading Platform
              </h2>

              <div className="prose prose-invert prose-lg">
                <p className="text-slate-300 leading-relaxed text-lg">
                  nTrader​‍​‌‍​‍‌​‍​‌‍​‍‌ is packed with high tech features such
                  as:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((cap, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-md bg-slate-800/40 border border-slate-700/50 
                             hover:border-red-500/30 hover:bg-slate-800/60 transition-all duration-300 group"
                  >
                    <div className="p-2 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors flex-shrink-0">
                      {cap.icon}
                    </div>
                    <span className="text-slate-200 font-medium text-sm group-hover:text-white transition-colors">
                      {cap.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual / Conclusion Box */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-md p-8 md:p-10 shadow-2xl relative overflow-hidden group hover:border-red-500/30 transition-colors">
                <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10 flex flex-col gap-6">
                  <div className="w-16 h-16 bg-red-600 rounded-md flex items-center justify-center shadow-lg shadow-red-500/20 mb-2">
                    <Network className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    Next-Gen Tech Stack
                  </h3>

                  <p className="text-slate-300 leading-relaxed text-lg font-light">
                    "nTrader is turning into a next-gen tech stack for brokers
                    going global with tight security, strong redundancy, and
                    deep liquidity ​‍​‌‍​‍‌​‍​‌‍​‍‌connectivity."
                  </p>

                  <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden mt-2">
                    <div className="h-full w-3/4 bg-red-500 animate-[pulse_2s_infinite]"></div>
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

export default NTraderCapabilities;
