import React from "react";
import { Activity } from "lucide-react";

const ArkTradingHighPerformance = () => {
  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="relative bg-gradient-to-br from-rose-900/20 to-slate-900 border border-rose-500/20 rounded-xl p-12 md:p-20 overflow-hidden text-center">
          {/* Background Effects */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-rose-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-pink-600/20 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05]"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Build a High-Performance Brokerage with{" "}
              <span className="text-rose-500">Ark Trading</span>
            </h2>

            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
              Our solutions give brokers a stable, secure, and scalable
              foundation for global expansion.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArkTradingHighPerformance;
