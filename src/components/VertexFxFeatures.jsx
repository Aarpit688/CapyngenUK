import React from "react";
import { MonitorSmartphone, ArrowLeftRight, Code2 } from "lucide-react";
import { assets } from "../assets/assets";

const VertexFxFeatures = () => {
  return (
    <div className="w-full bg-black py-20">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-20 relative">
          <div className="inline-block py-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Core Features of VertexFX Trading Solutions
            </h2>
          </div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Feature 1 */}
          <div className="relative z-10 flex flex-col h-full">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-violet-500/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-all duration-500 group flex-1 h-full">
              {/* Image */}
              <img
                src={assets.vertexFX5}
                alt="White label platform"
                className="w-full h-40 object-cover rounded-xl mb-6 opacity-80 group-hover:opacity-100 transition"
              />

              <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-violet-300 transition-colors">
                VertexFX White-Label Setup
              </h3>

              <p className="text-slate-400 leading-relaxed text-center text-sm md:text-base">
                We set up a fully branded white-label VertexFX platform with
                user interface customization to the last detail, a safe
                infrastructure, and support for all desktop, web, and mobile
                clients.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="relative z-10 flex flex-col h-full md:mt-12">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-violet-500/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-all duration-500 group flex-1 h-full">
              {/* Image */}
              <img
                src={assets.vertexFX6}
                alt="Liquidity bridge"
                className="w-full h-40 object-cover rounded-xl mb-6 opacity-80 group-hover:opacity-100 transition"
              />

              <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-violet-300 transition-colors">
                VertexFX Liquidity Bridge Connectivity
              </h3>

              <p className="text-slate-400 leading-relaxed text-center text-sm md:text-base">
                Our experts install the VertexFX liquidity bridge to get deep
                liquidity, lower spreads, and a stable global execution.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="relative z-10 flex flex-col h-full">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-violet-500/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-all duration-500 group flex-1 h-full">
              {/* Image */}
              <img
                src={assets.vertexFX7}
                alt="API integration"
                className="w-full h-40 object-cover rounded-xl mb-6 opacity-80 group-hover:opacity-100 transition"
              />

              <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-violet-300 transition-colors">
                VertexFX API Integration
              </h3>

              <p className="text-slate-400 leading-relaxed text-center text-sm md:text-base">
                Through the VertexFX API, we link CRMs, PSPs, KYC systems,
                analytics, and fintech apps for a fully automated and scalable
                ​‍​‌‍​‍‌​‍​‌‍​‍‌system.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VertexFxFeatures;
