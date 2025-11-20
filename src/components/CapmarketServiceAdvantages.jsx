import React from "react";
import { Layers, Wifi, Package, Globe } from "lucide-react";

const CapmarketServiceAdvantages = () => {
  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Key Advantages of{" "}
            <span className="text-blue-400">Capmarket Services</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500/50 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300 group hover:-translate-y-2 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-colors"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                <Layers className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                Seamless​‍​‌‍​‍‌​‍​‌‍​‍‌ Multi-Asset Trading
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Let customers trade forex, CFDs, commodities, and crypto through
                a single platform.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-2 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-cyan-500/10 transition-colors"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-cyan-900/20 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                <Wifi className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors">
                Reliable Connectivity & Execution
              </h3>
              <p className="text-slate-400 leading-relaxed">
                The use of low-latency servers and integrated liquidity bridges
                helps to keep trading operations running smoothly.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500/40 transition-all duration-300 group hover:-translate-y-2 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-indigo-500/10 transition-colors"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-indigo-900/20 rounded-xl flex items-center justify-center mb-6 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                <Package className="w-7 h-7 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-200 transition-colors">
                Turnkey Infrastructure & White-Label Services
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Fully customizable and branded platforms that are ready for
                immediate use.
              </p>
            </div>
          </div>
        </div>

        <div className="relative bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 md:p-12 text-center overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-blue-500/5"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

          <div className="relative z-10 flex flex-col items-center gap-6">
            <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-4xl italic">
              "The facilities provided by Capmarket turn out to be a perfect
              technological solution for brokers who are in need of reliable,
              scalable, and globally connected ​‍​‌‍​‍‌​‍​‌‍​‍‌technology."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapmarketServiceAdvantages;
