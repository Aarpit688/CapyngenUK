import React from "react";
import {
  Rocket,
  Building2,
  Clock,
  Shield,
  Zap,
  BarChart2,
  Lock,
  Settings,
} from "lucide-react";

const VertexFxUses = () => {
  return (
    <div className="bg-black w-full lg:py-20">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            How Startups and Global Brokers Use VertexFX
          </h2>
          <div className="w-24 h-1 bg-violet-500/50 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Startups / New Brokers Card */}
          <div className="group relative rounded-xl overflow-hidden border border-slate-800 hover:border-violet-500/40 transition-all duration-500 min-h-[500px] flex flex-col">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop"
                alt="Startup Team Working"
                className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-950"></div>
              <div className="absolute inset-0 bg-violet-500/5 group-hover:bg-violet-500/10 transition-colors duration-500"></div>
            </div>

            <div className="relative z-10 p-8 md:p-12 flex flex-col h-full">
              <div className="mb-auto">
                <div className="w-16 h-16 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:border-violet-500/30 transition-colors">
                  <Rocket className="w-8 h-8 text-violet-400" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  New Brokers & Startups
                </h3>

                <p className="text-slate-300 leading-relaxed text-lg mb-8">
                  New​‍​‌‍​‍‌​‍​‌‍​‍‌ brokers market to select VertexFX as it
                  provides them with a structure that is ready to be launched
                  without the need for heavy infrastructure investment. Since
                  hosting and connectivity are already set up, they start
                  operations quickly and with minimal risk.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-800/50">
                <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-700/30">
                  <div className="p-1.5 bg-violet-500/10 rounded-md">
                    <Clock className="w-4 h-4 text-violet-300" />
                  </div>
                  <span className="text-sm text-slate-300 font-medium">
                    Short launch time
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-700/30">
                  <div className="p-1.5 bg-violet-500/10 rounded-md">
                    <Shield className="w-4 h-4 text-violet-300" />
                  </div>
                  <span className="text-sm text-slate-300 font-medium">
                    Minimum risk
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Big Brokers Card */}
          <div className="group relative rounded-xl overflow-hidden border border-slate-800 hover:border-indigo-500/40 transition-all duration-500 min-h-[500px] flex flex-col">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
                alt="Modern Corporate Skyscraper"
                className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-950"></div>
              <div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors duration-500"></div>
            </div>

            <div className="relative z-10 p-8 md:p-12 flex flex-col h-full">
              <div className="mb-auto">
                <div className="w-16 h-16 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:border-indigo-500/30 transition-colors">
                  <Building2 className="w-8 h-8 text-indigo-400" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Big & Global Brokers
                </h3>

                <p className="text-slate-300 leading-relaxed text-lg mb-8">
                  Big brokers utilize VertexFX for fast/high-volume order
                  execution, sophisticated risk management, multi-asset trading,
                  secure hosting, and full backend
                  ​‍​‌‍​‍‌​‍​‌‍​‍‌administration.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-800/50">
                <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-700/30">
                  <div className="p-1.5 bg-indigo-500/10 rounded-md">
                    <Zap className="w-4 h-4 text-indigo-300" />
                  </div>
                  <span className="text-sm text-slate-300 font-medium">
                    High-volume execution
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-700/30">
                  <div className="p-1.5 bg-indigo-500/10 rounded-md">
                    <BarChart2 className="w-4 h-4 text-indigo-300" />
                  </div>
                  <span className="text-sm text-slate-300 font-medium">
                    Risk management
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-700/30">
                  <div className="p-1.5 bg-indigo-500/10 rounded-md">
                    <Lock className="w-4 h-4 text-indigo-300" />
                  </div>
                  <span className="text-sm text-slate-300 font-medium">
                    Secure hosting
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-700/30">
                  <div className="p-1.5 bg-indigo-500/10 rounded-md">
                    <Settings className="w-4 h-4 text-indigo-300" />
                  </div>
                  <span className="text-sm text-slate-300 font-medium">
                    Backend admin
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VertexFxUses;
