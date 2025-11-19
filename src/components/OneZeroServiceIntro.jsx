import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Activity,
  Server,
  Globe,
  Zap,
  ChevronRight,
} from "lucide-react";

export default function OneZeroServiceIntro() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // simple mount reveal
    setIsVisible(true);
  }, []);

  return (
    <div className="py-20 bg-black text-white overflow-hidden flex flex-col items-center justify-center">
      {/* Navigation */}

      {/* Main Section */}
      <main className="relative z-10 max-w-[90vw] mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Text Column */}
        <div
          className={`flex-1 space-y-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="font-heading text-5xl font-extrabold leading-[1.1] tracking-tight">
            Transform Your Brokerage with OneZero Technology
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl border-l-2 border-slate-700 pl-6">
            Capyngen Technologies UK Limited is a global leader in the delivery
            of OneZero technology solutions to brokers and financial
            institutions. Our offerings include multi-asset trading
            infrastructure, API & bridge technology, and high-performance
            connectivity for high-volume trading.
          </p>

          <div className="pt-4">
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg transition-all hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.24)] hover:scale-105 active:scale-95 overflow-hidden">
              <span className="relative z-10">
                Start Your OneZero Technology Platform Today
              </span>
              <ArrowRight className="relative z-10 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="mt-4 text-sm text-slate-500 font-medium ml-4">
              Talk with our experts for a consultation.
            </p>
          </div>
        </div>

        {/* Right Column - image (local) */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none relative flex items-center justify-center">
          <div
            className={`relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900/30 backdrop-blur-xl transition-all duration-700 max-w-[520px] w-full ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            role="img"
            aria-label="OneZero Technology preview"
          >
            {/* Image */}
            <img
              src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
              alt="OneZero Technology"
              className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-3xl"
              loading="eager"
            />

            {/* Optional overlay card inside the image container */}
          </div>
        </div>
      </main>
    </div>
  );
}
