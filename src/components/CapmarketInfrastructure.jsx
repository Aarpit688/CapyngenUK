import React, { useEffect, useState } from "react";
import {
  Server,
  ShieldCheck,
  Globe,
  Activity,
  Cpu,
  Cloud,
  Network,
} from "lucide-react";

const CapmarketInfrastructure = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <main className="relative z-10 flex flex-col items-center pt-32 pb-20 px-6">
        {/* Hero */}
        <section className="max-w-6xl w-full text-center mb-10 space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="block text-white">
              How Capyngen Builds a Complete Capmarket Trading Infrastructure
            </span>
          </h1>
        </section>

        {/* First Content Block */}
        <section className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
          {/* Text Block */}
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative glass-panel p-8 md:p-12 rounded-xl overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Network className="w-32 h-32 text-white" />
              </div>
              <p className="text-lg md:text-2xl text-slate-200 leading-relaxed font-light">
                Capyngen Technologies UK Limited is the one-stop provider of the
                entire range of end-to-end Capmarket trading platform solutions
                which are specifically designed for brokers operating globally.
              </p>
            </div>
          </div>

          {/* Visual Grid */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              <div className="absolute inset-0 border border-slate-800 rounded-full animate-[spin_20s_linear_infinite] opacity-30"></div>
              <div className="absolute inset-12 border border-dashed border-cyan-900 rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-40"></div>

              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-2xl flex flex-col items-center justify-center w-32 h-32 hover:border-cyan-500/50 transition-colors duration-300">
                  <Globe className="w-8 h-8 text-cyan-400 mb-2" />
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-widest">
                    Global
                  </span>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-2xl flex flex-col items-center justify-center w-32 h-32 mt-8 hover:border-blue-500/50 transition-colors duration-300">
                  <Activity className="w-8 h-8 text-blue-400 mb-2" />
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-widest">
                    Trading
                  </span>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-2xl flex flex-col items-center justify-center w-32 h-32 -mt-8 hover:border-indigo-500/50 transition-colors duration-300">
                  <Cpu className="w-8 h-8 text-indigo-400 mb-2" />
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-widest">
                    Solutions
                  </span>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-2xl flex flex-col items-center justify-center w-32 h-32 hover:border-sky-500/50 transition-colors duration-300">
                  <Server className="w-8 h-8 text-sky-400 mb-2" />
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-widest">
                    Platform
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second Content Block */}
        <section className="max-w-7xl w-full relative">
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            ></div>

            <div className="">
              {/* Main text */}
              <div className="flex items-center">
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-slate-300 leading-loose text-lg md:text-xl font-light border-l-4 border-cyan-500 pl-6">
                    We, by means of Capmarket backend management, are the ones
                    who keep the system in good working order, protect the
                    execution environments, and engage in the surveillance of
                    all the layers of the infrastructure. Our hosting offerings
                    are composed of enterprise-grade servers, cloud
                    architecture, global routing, and redundancy systems that
                    ensure the trading is free from interruptions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CapmarketInfrastructure;
