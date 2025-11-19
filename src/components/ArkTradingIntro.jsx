import React from "react";
import {
  Zap,
  Globe,
  ShieldCheck,
  Cpu,
  Layers,
  Activity,
  ArrowRight,
} from "lucide-react";

const ArkTradingIntro = () => {
  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              What Makes <span className="text-rose-500">Ark Trading</span> a
              Preferred Platform for Brokers
            </h2>

            <div className="prose prose-invert prose-lg">
              <p className="text-slate-300 leading-relaxed text-lg">
                The Ark Trading platform is built for quickness, stability, and
                exporting to the whole world simultaneously.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                It features multi-asset trading and provides speedy execution,
                safe access to deep liquidity, automated order management, and
                advanced analytics instruments.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-md p-6 relative overflow-hidden group hover:border-rose-500/30 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
              <p className="text-slate-300 relative z-10 leading-relaxed">
                By using versatile APIs and a safe cloud setup, Ark Trading
                facilitates the process for brokers in the integration of CRMs,
                risk systems, payment providers, and other fintech applications.
              </p>
            </div>
          </div>

          {/* Visual Side */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-600/20 to-pink-600/20 rounded-full blur-3xl opacity-40"></div>

            <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-md overflow-hidden shadow-2xl group hover:border-rose-500/30 transition-colors duration-500">
              {/* Top Bar */}
              <div className="h-14 bg-slate-950 border-b border-slate-800 flex items-center px-6 justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-rose-500 rotate-45"></div>
                  <span className="font-bold text-white tracking-wide">
                    ARK
                  </span>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-6 relative min-h-[320px]">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(#f43f5e 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-slate-800/50 rounded-full border border-slate-700 flex items-center justify-center backdrop-blur-sm z-10 shadow-lg">
                  <div className="absolute inset-0 rounded-full border border-rose-500/30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                  <Globe className="w-12 h-12 text-rose-500" />
                </div>

                {/* Orbiting Info Boxes */}
                <div className="absolute top-10 left-10 p-3 bg-slate-900 border border-slate-700 rounded-xl shadow-lg animate-[float_3s_ease-in-out_infinite]">
                  <div className="text-[10px] text-slate-400 uppercase mb-1">
                    Integrations
                  </div>
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Layers className="w-4 h-4 text-rose-400" />
                    API
                  </div>
                </div>

                <div className="absolute bottom-10 right-10 p-3 bg-slate-900 border border-slate-700 rounded-xl shadow-lg animate-[float_4s_ease-in-out_infinite_delay-1000]">
                  <div className="text-[10px] text-slate-400 uppercase mb-1">
                    Infrastructure
                  </div>
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-rose-400" />
                    CLOUD
                  </div>
                </div>

                <div className="absolute top-10 right-10 p-3 bg-slate-900 border border-slate-700 rounded-xl shadow-lg animate-[float_5s_ease-in-out_infinite_delay-500]">
                  <div className="text-[10px] text-slate-400 uppercase mb-1">
                    Connectivity
                  </div>
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Globe className="w-4 h-4 text-rose-400" />
                    GLOBAL
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  <path
                    d="M100 80 L 210 160"
                    stroke="#f43f5e"
                    strokeWidth="1"
                    strokeOpacity="0.2"
                  />
                  <path
                    d="M340 80 L 210 160"
                    stroke="#f43f5e"
                    strokeWidth="1"
                    strokeOpacity="0.2"
                  />
                  <path
                    d="M340 260 L 210 160"
                    stroke="#f43f5e"
                    strokeWidth="1"
                    strokeOpacity="0.2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArkTradingIntro;
