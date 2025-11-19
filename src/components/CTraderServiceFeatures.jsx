import React from "react";
import {
  Server,
  Palette,
  Network,
  ArrowRight,
  TrendingUp,
  Cpu,
} from "lucide-react";

// Dark-theme, Tailwind-based single-file React component.
// Drop this file into a React app that uses Tailwind CSS (or adapt classes to your CSS system).

export default function CTraderServiceFeatures() {
  const titleMain = "Understanding cTrader and How It Benefits Brokers";
  const bodyMain =
    "cTrader is a trading platform suitable for multiple assets such as forex, CFDs, and cryptocurrencies. We at Capyngen Technologies are global cTrader broker integration specialists. We offer hosting and backend support, migration services, and platform customization. Our solutions are available to both new and existing brokerages, thus they can deliver high-quality trading anywhere in the world.";

  const titleFeatures = "Key Features of Capyngen’s cTrader Services";
  const feature1 =
    "White-Label Solution – cTrader platforms with complete branding for a fast brokerage market entry.";
  const feature2 =
    "Liquidity Bridge Integration – Have an open connection with several liquidity providers to have the best spreads and execution.";
  const feature3 =
    "Hosting, Maintenance, and Backend Support – Make trading safe and low-latency with good uptime and performance.";
  const summary =
    "Such functionalities empower brokers to provide high-grade, scalable, and dependable trading services to their clients, simplify operational processes, and keep up with the competition in the market.";
  const ctaText =
    "Integrate Multi-Asset Trading and Liquidity Seamlessly – Schedule a demo to see it in action.";

  return (
    <section className="relative overflow-hidden bg-black py-20 text-slate-100">
      <div className="p-8 md:p-12 lg:p-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 leading-tight">
              {titleMain}
            </h2>
          </div>

          <div className="md:w-2/3">
            <p className="text-lg text-slate-300 leading-relaxed bg-gradient-to-r from-transparent via-white/5 to-transparent p-4 rounded-xl ring-1 ring-slate-800">
              {bodyMain}
            </p>
          </div>
        </div>

        <hr className="border-slate-800 mb-12" />

        {/* Features grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center text-slate-100 mb-8">
            {titleFeatures}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card helper function replaced by straight markup for clarity */}

            <article className="transform hover:-translate-y-2 transition-all duration-300 bg-slate-900/60 border border-slate-800 rounded-xl p-6 shadow-[0_6px_30px_rgba(2,6,23,0.6)] hover:shadow-[0_20px_60px_rgba(2,6,23,0.9)]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-tr from-violet-700 to-indigo-400/20 ring-1 ring-slate-800">
                  <Palette className="w-6 h-6 text-violet-300" />
                </div>
                <h4 className="text-slate-100 font-semibold">
                  White-Label cTrader
                </h4>
              </div>
              <p className="text-slate-300 leading-relaxed">{feature1}</p>
              <div className="mt-4 text-sm text-slate-400">
                Branding, user flows, and UI skinning to match your brokerage
                identity.
              </div>
            </article>

            <article className="transform hover:-translate-y-2 transition-all duration-300 bg-slate-900/60 border border-slate-800 rounded-xl p-6 shadow-[0_6px_30px_rgba(2,6,23,0.6)] hover:shadow-[0_20px_60px_rgba(2,6,23,0.9)]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-tr from-cyan-700 to-emerald-400/20 ring-1 ring-slate-800">
                  <Network className="w-6 h-6 text-cyan-200" />
                </div>
                <h4 className="text-slate-100 font-semibold">
                  Liquidity Bridge Integration
                </h4>
              </div>
              <p className="text-slate-300 leading-relaxed">{feature2}</p>
              <div className="mt-4 text-sm text-slate-400">
                Multi-venue liquidity aggregation and best-execution routing
                options.
              </div>
            </article>

            <article className="transform hover:-translate-y-2 transition-all duration-300 bg-slate-900/60 border border-slate-800 rounded-xl p-6 shadow-[0_6px_30px_rgba(2,6,23,0.6)] hover:shadow-[0_20px_60px_rgba(2,6,23,0.9)]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-tr from-rose-700 to-orange-400/20 ring-1 ring-slate-800">
                  <Server className="w-6 h-6 text-rose-300" />
                </div>
                <h4 className="text-slate-100 font-semibold">
                  Hosting & Backend Support
                </h4>
              </div>
              <p className="text-slate-300 leading-relaxed">{feature3}</p>
              <div className="mt-4 text-sm text-slate-400">
                Low-latency hosting, monitoring, and managed upgrades to keep
                you online.
              </div>
            </article>
          </div>
        </div>

        {/* Summary */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-6 text-center bg-gradient-to-b from-white/3 to-transparent ring-1 ring-slate-800">
            <p className="text-slate-200 italic">"{summary}"</p>
          </div>
        </div>
      </div>

      {/* Inline styles for simple keyframe animations used by the component */}
      <style>{`
        @keyframes blob {
          0% { transform: translateY(0px) scale(1); }
          33% { transform: translateY(-12px) scale(1.05); }
          66% { transform: translateY(6px) scale(0.95); }
          100% { transform: translateY(0px) scale(1); }
        }
        .animate-blob { animation: blob 8s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
}
