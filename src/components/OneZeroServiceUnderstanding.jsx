import React from "react";

export default function OneZeroServiceUnderstanding() {
  return (
    <section className="relative w-full bg-black py-20">
      <div className="relative max-w-[90vw] mx-auto ">
        {/* Heading */}
        <div className="mb-16 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Understanding OneZero and How It Benefits Brokers
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LARGE INTRO CARD */}
          <div className="lg:col-span-12 rounded-sm bg-slate-900/60 border border-slate-800 p-8 lg:p-12 backdrop-blur">
            <div className="relative flex flex-col md:flex-row items-center gap-10">
              {/* LEFT TEXT */}
              <div className="flex-1">
                <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
                  OneZero​‍​‌‍​‍‌​‍​‌‍​‍‌ is a technologically advanced company
                  which is at the forefront of providing robust solutions to
                  brokers as well as banks. By using OneZero integration
                  solutions, brokers are able to link without any hindrance to
                  liquidity providers, take care of different asset classes, and
                  be able to carry out their trades in a very efficient way
                  across the platforms.
                </p>
              </div>

              {/* RIGHT IMAGE */}
              <div className="w-full md:w-1/3 hidden md:block">
                <div className="rounded-md overflow-hidden border border-slate-800 shadow-xl h-40">
                  <img
                    src="https://picsum.photos/seed/onezero-intro/600/400"
                    alt="OneZero Connectivity"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* MULTI-ASSET CARD */}
          <div className="lg:col-span-7 rounded-sm bg-slate-900/60 border border-slate-800 p-8 lg:p-10 backdrop-blur">
            {/* IMAGE */}
            <div className="w-full h-48 rounded-md overflow-hidden mb-6">
              <img
                src="https://picsum.photos/seed/onezero-multiasset/900/600"
                alt="Multi-Asset Infrastructure"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Multi-Asset Infrastructure
            </h3>

            <p className="text-slate-400 leading-relaxed mb-6">
              The multi-asset trading infrastructure is open to forex, crypto,
              commodities, and indices giving clients the opportunity to trade
              in the global markets.
            </p>

            {/* Progress Indicator */}
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 w-3/4"></div>
            </div>

            <p className="text-xs text-right text-cyan-500 mt-2 font-mono">
              MARKET COVERAGE: GLOBAL
            </p>
          </div>

          {/* TURNKEY IMPLEMENTATION */}
          <div className="lg:col-span-5 rounded-sm bg-slate-900/60 border border-slate-800 p-8 lg:p-10 backdrop-blur">
            {/* IMAGE */}
            <div className="w-full h-48 rounded-md overflow-hidden mb-6">
              <img
                src="https://picsum.photos/seed/onezero-turnkey/900/600"
                alt="Turnkey Implementation"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Turnkey Implementation
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Capyngen is the one that provides the solution to brokers on how
              to go about the turnkey implementation of OneZero technology
              giving them the performance and scalability of an
              institution-grade system ‌ ‍.
            </p>

            {/* Highlight */}
            <div className="mt-6 flex items-center gap-3 text-sm font-medium text-white">
              <div className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
              <span>Institution-Grade Performance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
