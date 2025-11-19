import React from "react";
import { Zap, Network, BarChart3, ShieldCheck } from "lucide-react";

const PrimeXMServiceBenefits = () => {
  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        {/* Heading */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            How Startups and Established Brokers Benefit from{" "}
            <span className="text-yellow-500">PrimeXM X-Core</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            If​‍​‌‍​‍‌​‍​‌‍​‍‌ you are a newly formed broker or an existing
            company, Capyngen has tailor-made PrimeXM X-Core offerings that are
            specifically designed for your kind of requirements.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10">
          {/* Startups Card */}
          <div className="group relative bg-slate-900 border border-slate-800 rounded-md overflow-hidden hover:border-yellow-500/40 transition-all duration-500 flex flex-col shadow-xl">
            {/* Header Image */}
            <div className="h-48 relative">
              <img
                src="https://picsum.photos/seed/primexm_startup/900/600"
                alt="Startups"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>

              <div className="absolute bottom-6 left-8 z-20 flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/20">
                  <span className="text-black font-bold text-xl">S</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  New Businesses
                </h3>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 md:p-10 flex-1 flex flex-col">
              <p className="text-slate-300 leading-relaxed text-lg mb-8">
                New businesses can take advantage of a speedy infrastructure
                rollout, interconnected liquidity networks, and off-the-shelf
                ultra-low latency systems, thus enabling them to penetrate the
                market in a short span of time and in an efficient manner.
              </p>

              <div className="mt-auto space-y-3">
                <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span className="text-slate-200 text-sm font-medium">
                    Speedy Infrastructure
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <Network className="w-5 h-5 text-yellow-500" />
                  <span className="text-slate-200 text-sm font-medium">
                    Interconnected Liquidity
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mature Brokers Card */}
          <div className="group relative bg-slate-900 border border-slate-800 rounded-md overflow-hidden hover:border-yellow-500/40 transition-all duration-500 flex flex-col shadow-xl">
            {/* Header Image */}
            <div className="h-48 relative">
              <img
                src="https://picsum.photos/seed/primexm_mature/900/600"
                alt="Mature Brokers"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>

              <div className="absolute bottom-6 left-8 z-20 flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <span className="text-black font-bold text-xl">M</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Mature Brokers
                </h3>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 md:p-10 flex-1 flex flex-col">
              <p className="text-slate-300 leading-relaxed text-lg mb-8">
                Mature brokers get extended volume capacity, sophisticated data
                connectivity, and finely tuned execution performance that
                guarantees their competitiveness in the environments of
                high-frequency and institutional trading.
              </p>

              <div className="mt-auto space-y-3">
                <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <BarChart3 className="w-5 h-5 text-amber-500" />
                  <span className="text-slate-200 text-sm font-medium">
                    Extended Volume
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <ShieldCheck className="w-5 h-5 text-amber-500" />
                  <span className="text-slate-200 text-sm font-medium">
                    Finely Tuned Execution
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-md p-8 text-center shadow-lg">
          <div className="absolute inset-0 bg-yellow-500/5 rounded-2xl pointer-events-none"></div>

          <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-4xl mx-auto italic">
            "Our offerings are to the benefit of brokers who want to keep their
            operations stable, provide excellent client experiences, and have
            trouble-free access to the ​‍​‌‍​‍‌​‍​‌‍​‍‌market."
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrimeXMServiceBenefits;
