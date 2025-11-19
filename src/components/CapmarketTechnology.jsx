import React from "react";
import { Zap, ArrowRightLeft, Cable } from "lucide-react";

const CapmarketTechnology = () => {
  return (
    <section className="w-full py-20 bg-black">
      <div className="max-w-[90vw] mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
            Why Brokers Trust Capmarket Technology
          </h2>
          <div className="max-w-6xl mx-auto glass-panel p-8 rounded-2xl border border-slate-700/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"></div>
            <p className="text-slate-300 text-lg leading-relaxed">
              Capmarket has been created with the attributes of fastness,
              dependability, and worldwide scalability in mind. Capmarket
              customers have access to a potent trading engine, steady liquidity
              routing, and a sophisticated backend architecture. In contrast to
              conventional systems, Capmarket pays more attention to execution
              quality, infrastructure reliability, and integration depth.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-16 bg-slate-700 mr-4"></div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white text-center">
              Major Benefits of Choosing Capmarket for Your Brokerage
            </h3>
            <div className="h-px w-16 bg-slate-700 ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 p-8 rounded-xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full -mr-12 -mt-12 group-hover:bg-cyan-500/10 transition-colors"></div>
              <div className="w-14 h-14 bg-cyan-900/30 border border-cyan-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Zap className="w-7 h-7 text-cyan-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                High-speed worldwide network
              </h4>
              <p className="text-slate-400 leading-relaxed">
                Tailored for extremely low latency and steady connection.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 p-8 rounded-xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full -mr-12 -mt-12 group-hover:bg-blue-500/10 transition-colors"></div>
              <div className="w-14 h-14 bg-blue-900/30 border border-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <ArrowRightLeft className="w-7 h-7 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                Strong Liquidity & Bridge Integration
              </h4>
              <p className="text-slate-400 leading-relaxed">
                Access various liquidity sources without any trouble.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 p-8 rounded-xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full -mr-12 -mt-12 group-hover:bg-indigo-500/10 transition-colors"></div>
              <div className="w-14 h-14 bg-indigo-900/30 border border-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Cable className="w-7 h-7 text-indigo-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                Versatile API Connection
              </h4>
              <p className="text-slate-400 leading-relaxed">
                Easily integrate CRMs, PSPs, KYC systems, and analytics.
              </p>
            </div>
          </div>

          {/* Closing Sentence */}
          <div className="mt-20 text-center">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
              <p className="relative text-lg md:text-2xl text-blue-100 font-light max-w-4xl mx-auto leading-normal">
                "Such benefits enable brokers to expand their trading platforms
                in an effective manner throughout international markets."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapmarketTechnology;
