import React from "react";
import {
  Server,
  Link,
  Database,
  Cable,
  Settings,
  Shield,
  Activity,
  Layers,
  Lock,
  Cpu,
  Globe,
  CheckCircle2,
} from "lucide-react";

const ArkTradingInfrastructure = () => {
  const managementItems = [
    {
      text: "Server deployment",
      icon: <Server className="w-5 h-5 text-rose-400" />,
    },
    {
      text: "Liquidity bridge setup",
      icon: <Link className="w-5 h-5 text-rose-400" />,
    },
    {
      text: "Data feed integration",
      icon: <Database className="w-5 h-5 text-rose-400" />,
    },
    {
      text: "API connectivity",
      icon: <Cable className="w-5 h-5 text-rose-400" />,
    },
    {
      text: "Backend configuration",
      icon: <Settings className="w-5 h-5 text-rose-400" />,
    },
    {
      text: "Security and compliance layers",
      icon: <Shield className="w-5 h-5 text-rose-400" />,
    },
    {
      text: "24/7 uptime monitoring",
      icon: <Activity className="w-5 h-5 text-rose-400" />,
    },
  ];

  return (
    <div className="py-20 w-full bg-black">
      {" "}
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="relative bg-slate-900 border border-slate-800 rounded-lg overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Content Side */}
            <div className="lg:col-span-5 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10 bg-slate-900/95 backdrop-blur-sm border-r border-slate-800">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-pink-600 to-rose-500"></div>

              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                How Capyngen Builds a Complete{" "}
                <span className="text-rose-500">
                  Ark Trading Infrastructure
                </span>
              </h2>

              <div className="prose prose-invert prose-lg mb-8">
                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                  Capyngen Technologies UK Limited is an end-to-end technology
                  provider for Ark Trading that takes care of the entire setup
                  process.
                </p>
                <div className="mt-4 flex items-center gap-2 text-rose-300 font-medium">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>We manage everything end-to-end:</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {managementItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-3 rounded-md bg-slate-800/40 border border-slate-700/50 hover:border-rose-500/30 hover:bg-slate-800/60 transition-all duration-300 group"
                  >
                    <div className="p-2 bg-rose-500/10 rounded-lg group-hover:bg-rose-500/20 transition-colors flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-slate-300 text-sm md:text-base font-medium group-hover:text-white transition-colors">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-800">
                <p className="text-slate-400 italic leading-relaxed text-sm">
                  "We guarantee the platform runs steadily for brokers working
                  at any scale through optimized routing, secure hosting, and a
                  worldwide network."
                </p>
              </div>
            </div>

            {/* Right Visual Side */}
            <div className="lg:col-span-7 relative min-h-[700px] bg-slate-950 overflow-hidden group-hover-container">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1558494949-efc52728101c?q=80&w=2000&auto=format&fit=crop"
                  alt="Data Center Infrastructure"
                  className="w-full h-full object-cover opacity-20 scale-105 hover:scale-110 transition-transform duration-[20s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/30"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] mix-blend-overlay"></div>
              </div>

              {/* Layered Visualization */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 md:p-12 z-10">
                {/* Layer 4 */}
                <div className="w-full max-w-md transform hover:-translate-y-2 transition-all duration-500 mb-3 relative group z-40">
                  <div className="absolute inset-0 bg-rose-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-slate-900/80 backdrop-blur-md border border-rose-500/40 p-5 rounded-lg flex items-center justify-between shadow-2xl">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-md bg-gradient-to-br from-rose-600 to-rose-800 flex items-center justify-center shadow-lg border border-white/10">
                        <Lock className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-rose-400 font-bold uppercase tracking-widest mb-1">
                          Layer 4
                        </div>
                        <h4 className="text-white font-bold text-lg md:text-xl">
                          Security & Compliance
                        </h4>
                        <p className="text-xs text-slate-400 mt-1">
                          DDoS Protection • Encryption
                        </p>
                      </div>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_10px_#f43f5e]"></div>
                  </div>
                </div>

                <div className="h-6 w-0.5 bg-gradient-to-b from-rose-500/50 to-slate-700 z-0"></div>

                {/* Layer 3 */}
                <div className="w-full max-w-md transform hover:-translate-y-2 transition-all duration-500 mb-3 ml-8 md:ml-12 relative group z-30">
                  <div className="relative bg-slate-900/70 backdrop-blur-md border border-slate-600 p-5 rounded-lg flex items-center justify-between shadow-xl group-hover:border-rose-500/30 group-hover:bg-slate-900/90 transition-all">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-slate-700 transition-colors shadow-inner">
                        <Settings className="w-7 h-7 text-rose-300" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">
                          Layer 3
                        </div>
                        <h4 className="text-white font-bold text-lg md:text-xl">
                          Backend Core
                        </h4>
                        <p className="text-xs text-slate-400 mt-1">
                          Configuration • API • Logic
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-6 w-0.5 bg-slate-700 z-0"></div>

                {/* Layer 2 */}
                <div className="w-full max-w-md transform hover:-translate-y-2 transition-all duration-500 mb-3 -ml-8 md:-ml-12 relative group z-20">
                  <div className="relative bg-slate-900/70 backdrop-blur-md border border-slate-600 p-5 rounded-lg flex items-center justify-between shadow-xl group-hover:border-rose-500/30 group-hover:bg-slate-900/90 transition-all">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-slate-700 transition-colors shadow-inner">
                        <Globe className="w-7 h-7 text-rose-300" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">
                          Layer 2
                        </div>
                        <h4 className="text-white font-bold text-lg md:text-xl">
                          Global Routing
                        </h4>
                        <p className="text-xs text-slate-400 mt-1">
                          Liquidity Bridge • Data Feeds
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-6 w-0.5 bg-gradient-to-b from-slate-700 to-rose-500/50 z-0"></div>

                {/* Layer 1 */}
                <div className="w-full max-w-md transform hover:-translate-y-2 transition-all duration-500 relative group z-10">
                  <div className="absolute inset-0 bg-rose-900/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-slate-900/80 backdrop-blur-md border border-rose-500/30 p-5 rounded-lg flex items-center justify-between shadow-2xl">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-md bg-slate-800 border border-rose-500/20 flex items-center justify-center shadow-inner">
                        <Cpu className="w-7 h-7 text-rose-500" />
                      </div>
                      <div>
                        <div className="text-xs text-rose-400 font-bold uppercase tracking-widest mb-1">
                          Layer 1
                        </div>
                        <h4 className="text-white font-bold text-lg md:text-xl">
                          Physical Infrastructure
                        </h4>
                        <p className="text-xs text-slate-400 mt-1">
                          Enterprise Servers • Cloud
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse"></div>
                      <div className="w-1.5 h-1.5 bg-rose-500/50 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-rose-500/30 rounded-full"></div>
                    </div>
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

export default ArkTradingInfrastructure;
