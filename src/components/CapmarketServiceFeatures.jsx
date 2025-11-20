import React from "react";
import { Server, Zap, Monitor } from "lucide-react";
import { assets } from "../assets/assets";

export default function CapmarketServiceFeatures() {
  return (
    <section className="overflow-hidden bg-black py-20">
      <div className="p-8 md:p-14">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* LEFT CONTENT */}
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Key Features of Capmarket Services
            </h2>

            <div className="space-y-8">
              {/* FEATURE 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-amber-400 border border-slate-700">
                    <Zap className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Capmarket Liquidity Bridge
                  </h3>
                  <p className="text-slate-400 mt-1">
                    Quickly connect your brokerage to multiple liquidity
                    providers for optimal spreads and stable execution.
                  </p>
                </div>
              </div>

              {/* FEATURE 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-indigo-400 border border-slate-700">
                    <Server className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Server Hosting & Infrastructure
                  </h3>
                  <p className="text-slate-400 mt-1">
                    High-performance backend, secure hosting, and low-latency
                    architecture built for global brokers.
                  </p>
                </div>
              </div>

              {/* FEATURE 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-emerald-400 border border-slate-700">
                    <Monitor className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    White-Label & Platform Development
                  </h3>
                  <p className="text-slate-400 mt-1">
                    Customizable trading platforms with full branding,
                    integrations, and multi-asset support.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-slate-900 rounded-md border border-slate-800">
              <p className="text-slate-300 leading-relaxed">
                By leveraging these technologies, brokers deliver stable,
                scalable, and professional trading environments — reducing
                operational complexity while strengthening competitive edge.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE — SINGLE LARGE IMAGE */}
          <div className="w-full lg:w-5/12 order-1 lg:order-2">
            <div className="relative h-96 lg:h-[32rem] overflow-hidden border border-slate-800 rounded-md">
              <img
                src={assets.capmarketService7}
                alt="Capmarket Services"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                <span className="text-white text-xl font-semibold">
                  Enterprise-Grade Infrastructure
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
