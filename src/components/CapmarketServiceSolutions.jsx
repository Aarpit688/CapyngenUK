import React from "react";
import { CheckCircle2, Workflow, Zap } from "lucide-react";
import { assets } from "../assets/assets";

export default function CapmarketServiceSolutions() {
  const title = "How Capyngen Delivers Complete Capmarket Solutions";
  const content =
    "Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ is the one-stop-shop for all things Capmarket-related, covering tasks such as platform setup, infrastructure deployment, liquidity management, and ongoing support. Our specialists make sure that the Capmarket is seamlessly connected with trading platforms such as MT5, multi-asset support is enabled, and strong API connectivity is in place for liquidity bridges.";

  return (
    <section className="bg-black py-20 overflow-hidden text-white">
      <div className="flex flex-col md:flex-row">
        {/* IMAGE SECTION */}
        <div className="md:w-1/2 relative min-h-[360px] md:min-h-[480px]">
          <img
            src={assets.capmarketService8}
            alt="Capmarket Solutions Architecture"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Subtle Professional Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-slate-900"></div>
        </div>

        {/* CONTENT SECTION */}
        <div className="md:w-1/2 p-8 md:p-14 flex flex-col justify-center space-y-7">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            {title}
          </h2>

          {/* Body */}
          <p className="text-slate-300 text-lg leading-relaxed">{content}</p>

          {/* HIGHLIGHTS */}
          <div className="space-y-5 pt-2">
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">One-Stop Shop</h4>
                <p className="text-sm text-slate-400">
                  Platform setup, infrastructure, and continuous support.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">Seamless Connectivity</h4>
                <p className="text-sm text-slate-400">
                  Direct MT5 integration, liquidity aggregation, and strong
                  APIs.
                </p>
              </div>
            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="pt-4">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 flex items-center gap-2 shadow-md border border-blue-500/30">
              <span>Explore Solutions</span>
              <Zap className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
