import React from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Scale,
  ArrowRightLeft,
  Activity,
} from "lucide-react";

const OneZeroServiceWhyChoose = () => {
  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="relative bg-slate-900/40 border border-slate-800 p-8 md:p-12 overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-900/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-sky-600 via-blue-500 to-sky-600 opacity-50"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
            Why Brokers Choose OneZero Technology Solutions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
            {/* Header & Main Text */}
            <div className="space-y-8">
              {/* Challenge Block */}
              <div className="bg-slate-800/30 border border-slate-700/50 p-6 backdrop-blur-sm group hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-rose-500/10 rounded-lg border border-rose-500/20">
                    <AlertTriangle className="w-5 h-5 text-rose-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    The Challenge
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-base">
                  Brokers,​‍​‌‍​‍‌​‍​‌‍​‍‌ on the other hand, have to deal with
                  the difficulties of juggling various asset classes, linking to
                  different liquidity sources, and carrying out high-volume
                  trades without experiencing latency issues.
                </p>
              </div>

              {/* Solution Block */}
              <div className="bg-slate-800/30 border border-slate-700/50 p-6 backdrop-blur-sm group hover:bg-slate-800/50 transition-colors border-l-4 border-l-sky-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-sky-500/10 rounded-lg border border-sky-500/20">
                    <CheckCircle2 className="w-5 h-5 text-sky-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    The Solution
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-base">
                  Capyngen Technologies UK Limited solves these problems by
                  offering tailored OneZero technology solutions that can be
                  scaled, are dependable, and have a global connection.
                </p>
              </div>
            </div>

            {/* Visual Representation of Challenges vs Solution */}
            <div className="relative">
              <div className="grid grid-cols-1 gap-6">
                {/* Juggling Assets Visual */}
                <div className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 hover:border-sky-500/30 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-sky-500/20 transition-colors">
                    <Scale className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Asset Management</h4>
                    <p className="text-sm text-slate-400">
                      Handling various classes seamlessly
                    </p>
                  </div>
                </div>

                {/* Liquidity Links Visual */}
                <div className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 hover:border-sky-500/30 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-sky-500/20 transition-colors">
                    <ArrowRightLeft className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">
                      Liquidity Aggregation
                    </h4>
                    <p className="text-sm text-slate-400">
                      Connecting diverse sources
                    </p>
                  </div>
                </div>

                {/* High Volume Visual */}
                <div className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 hover:border-sky-500/30 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-sky-500/20 transition-colors">
                    <Activity className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">
                      High-Volume Trading
                    </h4>
                    <p className="text-sm text-slate-400">
                      Zero-latency execution
                    </p>
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

export default OneZeroServiceWhyChoose;
