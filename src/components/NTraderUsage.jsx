import React from "react";
import {
  Rocket,
  Building,
  ShieldCheck,
  Zap,
  GitMerge,
  BarChart2,
  Server,
} from "lucide-react";

const NTraderUsage = () => {
  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            How Startups & Large Institutions Use{" "}
            <span className="text-red-500">nTrader</span>
          </h2>
          <div className="w-24 h-1 bg-red-500/50 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Startups Card */}
          <div className="group relative bg-slate-900 border border-slate-800 rounded-md overflow-hidden hover:border-red-500/40 transition-all duration-500 flex flex-col shadow-xl">
            {/* Image Area */}
            <div className="h-64 relative overflow-hidden">
              <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20"></div>
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop"
                alt="Startup Team"
                className="w-full h-full object-cover transform transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-8 z-30 flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/20">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Startups</h3>
              </div>
            </div>

            <div className="p-8 md:p-10 flex-1 flex flex-col relative z-10">
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                New​‍​‌‍​‍‌​‍​‌‍​‍‌ brokers opt for nTrader as it offers a fully
                operational infrastructure with features like instant
                deployment, high security, and quick integration, thus, making
                the startup cost and time minimal.
              </p>

              <div className="mt-auto grid grid-cols-3 gap-2">
                <div className="bg-slate-800/50 p-2 rounded-lg text-center border border-slate-700">
                  <Zap className="w-5 h-5 text-red-400 mx-auto mb-1" />
                  <span className="text-xs text-slate-400">Instant</span>
                </div>
                <div className="bg-slate-800/50 p-2 rounded-lg text-center border border-slate-700">
                  <ShieldCheck className="w-5 h-5 text-red-400 mx-auto mb-1" />
                  <span className="text-xs text-slate-400">Secure</span>
                </div>
                <div className="bg-slate-800/50 p-2 rounded-lg text-center border border-slate-700">
                  <GitMerge className="w-5 h-5 text-red-400 mx-auto mb-1" />
                  <span className="text-xs text-slate-400">Integrated</span>
                </div>
              </div>
            </div>
          </div>

          {/* Established Brokers Card */}
          <div className="group relative bg-slate-900 border border-slate-800 rounded-md overflow-hidden hover:border-red-500/40 transition-all duration-500 flex flex-col shadow-xl">
            {/* Image Area */}
            <div className="h-64 relative overflow-hidden">
              <div className="absolute inset-0 bg-red-900/20 mix-blend-multiply z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20"></div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
                alt="Fintech Skyscraper"
                className="w-full h-full object-cover transform transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-8 z-30 flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/20">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Established Brokers & Fintech
                </h3>
              </div>
            </div>

            <div className="p-8 md:p-10 flex-1 flex flex-col relative z-10">
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                Big enterprises are attracted to nTrader because of its
                multi-layer architecture, algorithmic routing, worldwide
                hosting, and state-of-the-art liquidity bridges.
              </p>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5">
                <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  That facilitates:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Server className="w-4 h-4 text-red-400" /> Stable execution
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-red-400" /> Compliance
                    ready
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <GitMerge className="w-4 h-4 text-red-400" /> Automated
                    routing
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <BarChart2 className="w-4 h-4 text-red-400" /> Reporting
                    tools
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion Banner */}
        <div className="mt-12 relative bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05]"></div>
          <div className="relative z-10 flex flex-col items-center gap-4">
            <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed">
              "The most suitable for trading activities with a very high
              ​‍​‌‍​‍‌​‍​‌‍​‍‌volume."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NTraderUsage;
