import React from "react";
import { CheckCircle, Cpu, Globe, Server, Shield } from "lucide-react";
import { assets } from "../assets/assets";

export const AboutUs4 = () => {
  const features = [
    "Web & mobile trading terminals",
    "Client and Admin CRM",
    "Liquidity APIs",
    "Risk & order management tools",
    "Payment systems",
    "Market connectivity modules",
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Light Glow Background */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-blue-600/30 rounded-full blur-[150px] opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-indigo-600/30 rounded-full blur-[150px] opacity-30 -z-10"></div>

      {/* Subtle Noise Layer */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.05] -z-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-[90vw] mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* LEFT SIDE — Content */}
          <div className="mb-16 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6 leading-tight">
              A Complete Infrastructure Engineered for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Broker Success
              </span>
            </h2>

            <div className="prose prose-invert prose-lg mb-8">
              <p className="text-slate-300 text-lg leading-relaxed">
                We​‍​‌‍​‍‌​‍​‌‍​‍‌ have an ecosystem that links exchanges,
                banks, and software to a vault where everything is safe and can
                be easily expanded. Our infrastructure is a network of modern
                interconnected devices and services that enable seamless,
                real-time delivery of trading and asset management
                functionalities.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Our infrastructure links trading platforms, liquidity providers,
                execution engines, and client interfaces, through a secure and
                scalable architecture.
              </p>
            </div>

            <p className="text-white font-bold text-lg mb-6 flex items-center">
              <Server className="w-5 h-5 mr-2 text-blue-500" />
              It features:
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center p-3 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:border-blue-500/40 hover:bg-slate-800/60 transition-all duration-300 group"
                >
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3 group-hover:text-blue-300 transition-colors" />
                  <span className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-lg border border-blue-500/20 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
              <p className="text-slate-200 font-medium italic leading-relaxed relative z-10">
                "This unified ecosystem allows brokers to operate with low
                latency, seamless connectivity, and maximum stability."
              </p>
            </div>
          </div>

          {/* RIGHT SIDE — Full-Bleed Image Mosaic */}
          <div className="relative h-[650px] w-full grid grid-cols-3 grid-rows-3 gap-4">
            {/* Large Left Image (takes 2 rows) */}
            <div className="col-span-2 row-span-2 relative rounded-lg overflow-hidden border border-slate-700 shadow-2xl group">
              <img
                src={assets.aboutUs8}
                alt="Core infrastructure"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white flex items-center gap-2 text-sm font-semibold">
                <Cpu className="w-5 h-5 text-blue-400" /> Core Infrastructure
              </div>
            </div>

            {/* Small Tile 1 */}
            <div className="col-span-1 row-span-1 relative rounded-lg overflow-hidden border border-slate-700 shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
                alt="Analytics"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay"></div>
            </div>

            {/* Small Tile 2 */}
            <div className="col-span-1 row-span-1 relative rounded-lg overflow-hidden border border-slate-700 shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop"
                alt="Security"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-transparent"></div>

              {/* Floating Icon */}
              <div className="absolute top-3 left-3 bg-blue-600 p-2 rounded-xl shadow-lg border border-blue-400">
                <Shield className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Wide Bottom Tile */}
            <div className="col-span-3 row-span-1 relative rounded-lg overflow-hidden border border-slate-700 shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1600&auto=format&fit=crop"
                alt="Global Network"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>

              <div className="absolute bottom-4 left-4 text-white flex items-center gap-2 text-sm font-semibold">
                <Globe className="w-5 h-5 text-blue-300" /> Global Connectivity
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs4;
