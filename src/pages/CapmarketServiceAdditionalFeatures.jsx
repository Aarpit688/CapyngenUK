import React from "react";
import {
  ShieldCheck,
  Globe2,
  Activity,
  BarChart4,
  Lock,
  Cpu,
} from "lucide-react";

const CapmarketServiceAdditionalFeatures = () => {
  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-16 overflow-hidden shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 z-10"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] mix-blend-overlay pointer-events-none"></div>
          <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Additional Features That Make{" "}
                <span className="text-blue-400">Capmarket</span> Stand Out
              </h2>

              <div className="prose prose-invert prose-lg">
                <p className="text-slate-300 leading-relaxed text-lg">
                  Capyngen maintains the system stable for high volumes, ensures
                  security of operations, and provides global connectivity,
                  which gives brokers the opportunity to grow their business in
                  a way that is not limited by capacity.
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-center hover:border-blue-500/30 transition-colors group">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Activity className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-white font-medium text-sm">
                    Volume Stability
                  </h4>
                </div>
                <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-center hover:border-blue-500/30 transition-colors group">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Lock className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-white font-medium text-sm">Security</h4>
                </div>
                <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-center hover:border-blue-500/30 transition-colors group">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Globe2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-white font-medium text-sm">
                    Global Conn.
                  </h4>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-2xl">
                <p className="text-blue-100 text-lg font-light italic leading-relaxed">
                  "The flexibility, security, and complete customizability of
                  our solutions make Capmarket the first-choice brand of brokers
                  from different parts of the ​‍​‌‍​‍‌​‍​‌‍​‍‌world."
                </p>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              {/* World Growth Concept */}
              <div className="relative w-full max-w-sm bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl group">
                {/* Map Background */}
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
                    alt="Global Connectivity"
                    className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-[20s]"
                  />
                  <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
                </div>

                {/* Foreground UI */}
                <div className="relative z-10 p-6 flex flex-col justify-between h-[320px]">
                  <div className="flex justify-between items-start">
                    <div className="bg-slate-900/80 backdrop-blur-sm p-3 rounded-xl border border-blue-500/30">
                      <div className="text-xs text-slate-400 uppercase mb-1">
                        Capacity
                      </div>
                      <div className="text-xl font-bold text-white flex items-center gap-2">
                        Unlim. <BarChart4 className="w-4 h-4 text-blue-400" />
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
                  </div>

                  <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <ShieldCheck className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">
                          First-Choice Brand
                        </div>
                        <div className="text-[10px] text-slate-400">
                          Preferred by global brokers
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full w-full rounded-full animate-[shimmer_2s_infinite]"></div>
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

export default CapmarketServiceAdditionalFeatures;
