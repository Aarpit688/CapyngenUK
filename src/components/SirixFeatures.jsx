import React from "react";
import {
  MonitorSmartphone,
  Users,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";

const SirixFeatures = () => {
  return (
    <div className="w-full py-20 bg-black">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Key Features of{" "}
            <span className="text-amber-500">Capyngen’s Sirix Solutions</span>
          </h2>
          <div className="w-full max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            {/* Number Watermark */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-slate-800/50 rounded-full flex items-center justify-center text-4xl font-black text-slate-800 group-hover:text-amber-500/10 group-hover:bg-slate-800/80 transition-all duration-500">
              01
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 group-hover:border-amber-500/30 transition-colors duration-300">
                <MonitorSmartphone className="w-7 h-7 text-slate-400 group-hover:text-amber-400 transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-100 transition-colors">
                Sirix Platform Setup & White-Label
              </h3>

              <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                We execute the entire Sirix white-label platform installation
                that grants a broker the ability to initiate their branded
                trading system which includes web, desktop, and mobile versions.
              </p>

              <div className="flex items-center text-amber-500 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                <span>Full Customization</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-amber-500 transition-all duration-500 group-hover:w-full rounded-b-2xl"></div>
          </div>

          {/* Feature 2 */}
          <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-slate-800/50 rounded-full flex items-center justify-center text-4xl font-black text-slate-800 group-hover:text-amber-500/10 group-hover:bg-slate-800/80 transition-all duration-500">
              02
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 group-hover:border-amber-500/30 transition-colors duration-300">
                <Users className="w-7 h-7 text-slate-400 group-hover:text-amber-400 transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-100 transition-colors">
                Social Trading System Integration
              </h3>

              <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                One of the key features of Sirix is its integrated social
                trading system that provides the opportunity for traders to
                track the most successful traders and replicate their strategies
                immediately.
              </p>

              <div className="flex items-center text-amber-500 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                <span>Copy Trading</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-0 h-1 bg-amber-500 transition-all duration-500 group-hover:w-full rounded-b-2xl"></div>
          </div>

          {/* Feature 3 */}
          <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-slate-800/50 rounded-full flex items-center justify-center text-4xl font-black text-slate-800 group-hover:text-amber-500/10 group-hover:bg-slate-800/80 transition-all duration-500">
              03
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 group-hover:border-amber-500/30 transition-colors duration-300">
                <LayoutDashboard className="w-7 h-7 text-slate-400 group-hover:text-amber-400 transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-100 transition-colors">
                Multi-Asset Dashboard & Trading Tools
              </h3>

              <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                We provide full capabilities to set up Sirix multi-asset
                dashboards, thus, traders are enabled to access forex, indices,
                stocks, CFDs, and cryptocurrencies all from one interface.
              </p>

              <div className="flex items-center text-amber-500 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                <span>Unified Interface</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-0 h-1 bg-amber-500 transition-all duration-500 group-hover:w-full rounded-b-2xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SirixFeatures;
