import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function MT5ServiceSolutions() {
  const title = "How Capyngen Provides Complete MT5 Solutions";

  const content =
    "Capyngen offers full end-to-end MT5 services including server setup, integration, and support. To quickly start a brokerage, we install a MetaTrader 5 white-label for you, provide plugin development services if you want to extend the platform functionality, and supply a powerful MT5 backend infrastructure for secure and scalable operations. Our team can also provide liquidity bridge solutions that enable brokers to connect to several liquidity providers to get better spreads and depth. Moreover, API integration allows your platform to communicate with other trading tools, analytics platforms, and CRM systems in a straightforward manner. By using Capyngen’s MT5 services, brokers can deliver institutional-grade performance, have optimized execution, and carry minimal technical risk.";

  const ctaText =
    "Integrate Liquidity and Multi-Asset Trading Seamlessly – Schedule a demo now.";

  return (
    <section className="bg-black text-white py-20 overflow-hidden">
      <div className="p-10 lg:p-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              {title}
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">{content}</p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 px-5 py-2.5 rounded-full text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                White-Label Installation
              </div>

              <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 px-5 py-2.5 rounded-full text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Plugin Development
              </div>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative w-full h-[500px] flex justify-center items-center">
            {/* Back image */}
            <div className="absolute top-0 right-0 w-[75%] h-[75%] rounded-2xl overflow-hidden shadow-xl border border-slate-700">
              <img
                src="https://picsum.photos/seed/mt5sol_main/600/800"
                alt="MT5 Infrastructure"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <span className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1.5 text-xs rounded-md border border-slate-700">
                Scalable Infrastructure
              </span>
            </div>

            {/* Front image */}
            <div className="absolute bottom-0 left-0 w-[55%] h-[55%] rounded-2xl overflow-hidden shadow-xl border border-slate-700 group">
              <img
                src="https://picsum.photos/seed/mt5sol_secondary/500/500"
                alt="Trading Integration"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
