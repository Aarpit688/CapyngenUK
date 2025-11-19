import React from "react";
import {
  Rocket,
  Building2,
  LineChart,
  MonitorCheck,
  Puzzle,
  Zap,
} from "lucide-react";

// Dark-themed JSX component for CTrader benefits
// - Tailwind CSS utilities (requires Tailwind in your project)
// - Converted to JSX (no TypeScript types)
// - Dark styling, glassmorphism cards, and improved visual hierarchy

export default function CTraderServiceBenefits() {
  // Content strings provided by user (kept verbatim)
  const titleStartups =
    "How Startups and Established Brokers Benefit from cTrader";
  const contentStartups =
    "To‍‍‌‍​‍‌‍​‌‍​‍‌ quickly access the market with pre-integrated liquidity, branded platforms, and a secure infrastructure, startups are able to utilize turnkey cTrader solutions. By custom platform development, migration support, and multi-asset integration, an established broker can thereby improve execution, risk management, and client services. As a result of cTrader integration with Capyngen as a dependable and trusted partner, brokers acquire trading infrastructure that is scalable, secure, and ‍‍‌‍​‍‌‍​‌‍​‍‌future-ready.";

  const titleFeatures = "Additional Features That Make cTrader Stand Out";
  const contentFeatures =
    "cTrader‍‍‌‍​‍‌‍​‌‍​‍‌ is equipped with multi-asset trading, sophisticated charting, algorithmic trading, liquidity bridge API integration, and platform customization features. Capyngen facilitates trade execution for brokers, server integration with back-office and CRM systems, and trading activity monitoring in real-time. By using fully customizable platforms, brokers are able to adapt the solutions to the needs of the clients while at the same time, retaining institutional-grade performance and scalability ‍‍‌‍​‍‌‍​‌‍​‍‌worldwide.";

  return (
    <section className="space-y-16  bg-black py-20">
      {/* Part 1: Startups & Established Brokers - dark theme */}
      <div className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Visual Side */}
          <div className="relative h-64 lg:h-auto bg-slate-900 group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
              alt="Business Growth"
              className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700 "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

            {/* Floating Cards for Visual Context */}
            <div className="absolute bottom-8 left-8 right-8 flex gap-4">
              <div className="flex-1 bg-white/5 backdrop-blur-md p-4 rounded-lg border border-white/10 transform transition-all hover:-translate-y-1">
                <Rocket className="w-6 h-6 text-emerald-300 mb-2" />
                <div className="text-white text-xs font-bold uppercase tracking-wider">
                  Startups
                </div>
                <div className="text-emerald-200 text-xs mt-1">
                  Fast Market Entry
                </div>
              </div>
              <div className="flex-1 bg-white/5 backdrop-blur-md p-4 rounded-lg border border-white/10 transform transition-all hover:-translate-y-1">
                <Building2 className="w-6 h-6 text-cyan-300 mb-2" />
                <div className="text-white text-xs font-bold uppercase tracking-wider">
                  Established
                </div>
                <div className="text-cyan-200 text-xs mt-1">
                  Scalable Infrastructure
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              {titleStartups}
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">
              {contentStartups}
            </p>
          </div>
        </div>
      </div>

      {/* Part 2: Additional Features - dark theme */}
      <div className="overflow-hidden text-white ">
        <div className="grid lg:grid-cols-12 gap-0">
          {/* Content Side */}
          <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-white">
              {titleFeatures}
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              {contentFeatures}
            </p>

            {/* Feature Highlights (Visual Decoration) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <LineChart className="w-4 h-4 text-emerald-300" />
                <span>Advanced Charting</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Algo Trading</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <MonitorCheck className="w-4 h-4 text-cyan-300" />
                <span>Real-time Monitoring</span>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-slate-800">
            <img
              src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=80"
              alt="Advanced Trading Features"
              className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent" />

            {/* Decorative UI Mockup Effect */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="w-full max-w-md h-64 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="h-8 border-b border-white/10 flex items-center px-4 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="p-6 grid grid-cols-3 gap-4">
                  <div className="col-span-2 h-24 bg-white/6 rounded animate-pulse"></div>
                  <div className="col-span-1 h-24 bg-blue-500/10 rounded"></div>
                  <div className="col-span-3 h-16 bg-white/5 rounded mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
