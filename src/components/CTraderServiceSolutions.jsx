import React from "react";
import { Check, Globe, ArrowRightLeft, Settings } from "lucide-react";
import { assets } from "../assets/assets";

export default function CTraderServiceSolutions() {
  const title1 = "How Capyngen Delivers Complete cTrader Solutions";
  const content1 =
    "Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ is the one-stop service provider for all cTrader related needs, which includes platform setup, integration as well as support. Our team is in charge of the cTrader platform migration, thus allowing brokers to be able to make a change from MT4/MT5 or any other platforms with a short period of inactivity.";

  const title2 = "Why Brokers Choose Capyngen for cTrader Services";
  const intro2 =
    "Brokers​‍​‌‍​‍‌​‍​‌‍​‍‌ were stuck with issues of latency, platform migration, and fragmented liquidity. To solve the problem Capyngen Technologies UK Limited is providing custom-made cTrader technology solutions that are not only scalable and reliable but also globally connected. Some of the benefits are:";

  const benefits = [
    "The fast implementation of turnkey cTrader white-label solutions",
    "The integration of multi-asset platform with effortless liquidity access",
    "Secure hosting and low-latency backend infrastructure",
    "Support, maintenance, and performance optimization on an ongoing basis",
  ];

  const outro2 =
    "When a broker decides to work with Capyngen he can concentrate solely on business growth and client acquisition while we take care of the technical setup and ongoing ​‍​‌‍​‍‌​‍​‌‍​‍‌operations.";

  return (
    <div className="bg-black py-20 ">
      <section className="relative overflow-hidden max-w-[90vw] mx-auto ">
        {/* HERO BANNER (ultra-premium depth) */}
        <div className="relative w-full mb-12 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-cyan-400/20">
          <img
            src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1400&q=80"
            className="w-full h-72 md:h-96 object-cover opacity-[0.85] hover:opacity-100 transition-all duration-700"
          />

          {/* Dual layered neon overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent mix-blend-screen"></div>
        </div>

        {/* HEADER AREA */}
        <header className="grid gap-10 md:grid-cols-3 items-start mb-14">
          <div className="md:col-span-2">
            {/* Title */}
            <h1 className="mt-4 text-4xl md:text-5xl font-black leading-tight bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,255,255,0.2)]">
              {title1}
            </h1>

            {/* Body */}
            <p className="mt-4 text-slate-300/90 text-lg max-w-2xl leading-relaxed">
              {content1}
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-5 py-3 rounded-lg bg-cyan-400 text-slate-900 font-bold shadow-[0_0_25px_rgba(34,211,238,0.6)] hover:shadow-[0_0_40px_rgba(34,211,238,0.9)] transition-all duration-300 hover:scale-[1.04]">
                Get a Demo
              </button>

              <button className="px-5 py-3 rounded-lg border border-cyan-300/40 text-cyan-200 hover:bg-cyan-300/10 transition-all duration-300">
                Request Pricing
              </button>
            </div>
          </div>

          {/* Quick Stats Card — Now Luxury Neon */}
          <aside className="rounded-2xl p-6 ">
            <img src={assets.cTraderService8} alt="Left visual" className="" />
          </aside>
        </header>

        {/* DEEP DIVE CARD — Elite Glassmorphism */}
        <section className="rounded-xl text-center ">
          <div className="md:flex md:items-start md:justify-between">
            <div className="md:flex-1">
              <h2 className="text-3xl font-extrabold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent drop-shadow-[0_3px_10px_rgba(34,211,238,0.3)]">
                {title2}
              </h2>

              <p className="mt-3 text-slate-300 max-w-6xl mx-auto">{intro2}</p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {benefits.map((b, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#0b0e14] border border-slate-800 hover:border-cyan-300/20 transition"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/40">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-sm text-slate-100">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-6 text-cyan-200/80 italic text-sm">{outro2}</p>
        </section>
      </section>
    </div>
  );
}
