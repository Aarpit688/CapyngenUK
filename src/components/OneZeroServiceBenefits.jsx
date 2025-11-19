import React from "react";
import {
  Rocket,
  Building2,
  BarChart2,
  CheckCircle,
  Zap,
  TrendingUp,
  PieChart,
} from "lucide-react";

const OneZeroServiceBenefits = () => {
  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="text-center mb-16 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            How Startups and Established Brokers Benefit from OneZero
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed max-w-5xl mx-auto">
            Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ is the one-stop solution for any needs of
            custom technology that OneZero can fulfill whether you are starting
            a brokerage afresh or upgrading an existing platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Startups Card */}
          <div className="group relative bg-slate-900/60 border border-slate-800 p-8 hover:border-sky-500/40 transition-all duration-500 flex flex-col overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl -mr-20 -mt-20 transition-colors group-hover:bg-sky-500/10"></div>

            <div className="relative z-10 mb-6">
              <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 group-hover:border-sky-500/30 transition-colors shadow-lg mb-6">
                <Rocket className="w-7 h-7 text-sky-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Startups</h3>
              <p className="text-slate-300 leading-relaxed text-lg min-h-[84px]">
                Startups are in a position to quickly deploy OneZero setup
                solutions thus a rapid market entry with less technical
                complexity is made possible.
              </p>
            </div>

            <div className="relative z-10 mt-auto space-y-3">
              <div className="flex items-center gap-3 p-3 bg-slate-800/40 rounded-xl border border-slate-700/50">
                <Zap className="w-5 h-5 text-sky-400" />
                <span className="text-slate-200 text-sm font-medium">
                  Quick Deployment
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-800/40 rounded-xl border border-slate-700/50">
                <CheckCircle className="w-5 h-5 text-sky-400" />
                <span className="text-slate-200 text-sm font-medium">
                  Low Complexity
                </span>
              </div>
            </div>
          </div>

          {/* Established Brokers Card */}
          <div className="group relative bg-slate-900/60 border border-slate-800 p-8 hover:border-blue-500/40 transition-all duration-500 flex flex-col overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-20 -mt-20 transition-colors group-hover:bg-blue-500/10"></div>

            <div className="relative z-10 mb-6">
              <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 group-hover:border-blue-500/30 transition-colors shadow-lg mb-6">
                <Building2 className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Established Brokers
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg min-h-[84px]">
                On the other hand, established brokers can make use of
                enterprise-grade infrastructure to enhance the volume of
                trading, liquidity of their multi-assets, and execution
                performance.
              </p>
            </div>

            <div className="relative z-10 mt-auto space-y-3">
              <div className="flex items-center gap-3 p-3 bg-slate-800/40 rounded-xl border border-slate-700/50">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span className="text-slate-200 text-sm font-medium">
                  Enhanced Volume
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-800/40 rounded-xl border border-slate-700/50">
                <PieChart className="w-5 h-5 text-blue-400" />
                <span className="text-slate-200 text-sm font-medium">
                  Multi-Asset Liquidity
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 p-8 md:p-10 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-[0.03]"></div>
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-slate-800 border border-sky-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.15)]">
                <BarChart2 className="w-10 h-10 text-sky-400" />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold text-white mb-3">
                Worldwide Analytics Platform
              </h4>
              <p className="text-slate-300 leading-relaxed text-lg">
                Our worldwide analytics platform permits brokers to follow
                market activity, customer behavior, and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OneZeroServiceBenefits;
