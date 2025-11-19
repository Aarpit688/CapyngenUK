import React from "react";
import { Globe, Cpu, Server, ArrowRight, Zap, Activity } from "lucide-react";

export default function CapmarketServiceIntro() {
  const headline = "Empower Your Brokerage with Capmarket Technology";
  const bodyContent =
    "Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ Technologies UK Limited offers Capmarket services which includes foreign exchange, crypto, and multi-asset brokers globally. We are a one-stop technology company for a Capmarket broker offering the latest technology and servers hosting, platform integration, liquidity bridges, and white-label solutions to keep the broker operation running sustainably and the trader experience superb.";

  const ctaText =
    "Launch Your Capmarket Technology Platform Today – Speak with our experts to get started.";

  return (
    <section className="relative overflow-hidden py-20 bg-black">
      <div className="max-w-[90vw] mx-auto flex flex-col lg:flex-row items-start gap-14">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-8">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            {headline}
          </h1>

          <p className="text-base md:text-lg text-white leading-relaxed border-l-4 border-blue-600 pl-5">
            {bodyContent}
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-lg border border-slate-200">
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="text-slate-700">Global Reach</span>
            </div>

            <div className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-lg border border-slate-200">
              <Server className="w-4 h-4 text-blue-600" />
              <span className="text-slate-700">Server Hosting</span>
            </div>

            <div className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-lg border border-slate-200">
              <Cpu className="w-4 h-4 text-blue-600" />
              <span className="text-slate-700">Liquidity Bridges</span>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <p className="text-lg font-semibold text-white mb-4">{ctaText}</p>

            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold transition-all duration-200 shadow-sm flex items-center">
              Get Started Now
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Image Section (replacing grid) */}
        <div className="lg:w-1/2 w-full">
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-white h-full">
            <img
              src="https://picsum.photos/seed/capmarket/900/900"
              alt="Capmarket Technology"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
