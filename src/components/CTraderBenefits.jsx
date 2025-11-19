import React from "react";
import {
  Sprout,
  Building2,
  CheckCircle2,
  BarChart3,
  Shield,
  Globe2,
  Zap,
} from "lucide-react";

const CTraderBenefits = () => {
  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            How Startups and Established Brokers Benefit from{" "}
            <span className="text-teal-500">cTrader</span>
          </h2>
          <div className="w-24 h-1 bg-teal-500/50 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Startups Card */}
          <div className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-teal-500/40 transition-all duration-500 flex flex-col shadow-xl">
            <div className="h-48 relative overflow-hidden bg-slate-800">
              <div className="absolute inset-0 bg-teal-900/20 mix-blend-multiply z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-20"></div>
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop"
                alt="Startup Team"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-60"
              />
              <div className="absolute bottom-6 left-8 z-30 flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20">
                  <Sprout className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  New Businesses
                </h3>
              </div>
            </div>

            <div className="p-8 md:p-10 flex-1 flex flex-col relative z-10">
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                New​‍​‌‍​‍‌​‍​‌‍​‍‌ businesses in the financial sector can take
                advantage of ready-to-use cTrader solutions which enable them to
                have a presence in the market quickly without requiring a large
                capital outlay for infrastructure.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 bg-slate-800/30 p-3 rounded-lg border border-slate-700/50">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">
                    Platform branding
                  </span>
                </div>
                <div className="flex items-start gap-3 bg-slate-800/30 p-3 rounded-lg border border-slate-700/50">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">
                    Client management systems
                  </span>
                </div>
                <div className="flex items-start gap-3 bg-slate-800/30 p-3 rounded-lg border border-slate-700/50">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">
                    Pre-integrated liquidity pool
                  </span>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-800">
                <p className="text-teal-200 text-sm font-medium italic">
                  "thus offering a quick and budget-friendly solution."
                </p>
              </div>
            </div>
          </div>

          {/* Established Brokers Card */}
          <div className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-teal-500/40 transition-all duration-500 flex flex-col shadow-xl">
            <div className="h-48 relative overflow-hidden bg-slate-800">
              <div className="absolute inset-0 bg-emerald-900/20 mix-blend-multiply z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-20"></div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
                alt="Corporate Brokerage"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-60"
              />
              <div className="absolute bottom-6 left-8 z-30 flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Established Brokers
                </h3>
              </div>
            </div>

            <div className="p-8 md:p-10 flex-1 flex flex-col relative z-10">
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                We have cTrader platform solutions for brokers which come with
                the help of analytics instruments, risk management capabilities,
                and the provision of a service that is continuous in nature.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 bg-slate-800/30 p-3 rounded-lg border border-slate-700/50">
                  <BarChart3 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">
                    Advanced analytics instruments
                  </span>
                </div>
                <div className="flex items-start gap-3 bg-slate-800/30 p-3 rounded-lg border border-slate-700/50">
                  <Shield className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">
                    Risk management capabilities
                  </span>
                </div>
                <div className="flex items-start gap-3 bg-slate-800/30 p-3 rounded-lg border border-slate-700/50">
                  <Zap className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">
                    Continuous service provision
                  </span>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-800">
                <p className="text-emerald-200 text-sm font-medium italic">
                  "Efficient, competitive, and high-performing operations."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Operations Banner */}
        <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-lg p-8 md:p-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] opacity-[0.05]"></div>
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-6">
            <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-4xl">
              "Both newly-started and already-established brokers are able to
              run efficient, competitive, and high-performing operations
              ​‍​‌‍​‍‌​‍​‌‍​‍‌worldwide."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTraderBenefits;
