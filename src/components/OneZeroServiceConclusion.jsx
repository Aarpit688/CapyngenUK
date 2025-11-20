import React from "react";
import { assets } from "../assets/assets";

export default function OneZeroServiceConclusion() {
  const services = [
    {
      text: "Multi-asset trading infrastructure for the global markets",
      image: assets.oz14,
    },
    {
      text: "API & bridge integration for smooth connectivity",
      image: assets.oz15,
    },
    {
      text: "Turnkey setup for brokers and banks",
      image: assets.oz16,
    },
    {
      text: "High-performance trading systems for MT4/MT5 platforms",
      image: assets.oz17,
    },
    {
      text: "Analytics and monitoring tools to enhance decision-making",
      image: assets.oz18,
    },
  ];

  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up px-4 lg:px-0">
        <div className="relative bg-slate-900 border border-slate-800 p-8 md:p-16 overflow-hidden shadow-2xl">
          {/* Background Decorations */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-600 via-blue-500 to-sky-600 z-10"></div>
          <div className="absolute -right-24 -bottom-24 w-[450px] h-[450px] bg-sky-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.032] pointer-events-none"></div>

          {/* Heading */}
          <div className="relative z-10 max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Conclusion: Achieve High-Volume, Multi-Asset Trading with OneZero
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Brokers​‍​‌‍​‍‌​‍​‌‍​‍‌ through Capyngen Technologies UK Limited
              have access to the full range of OneZero services, which include:
            </p>
          </div>

          {/* Service Cards */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-slate-900/60 border border-slate-800 rounded-sm overflow-hidden shadow-lg hover:shadow-sky-500/10 hover:border-sky-500/40 transition-all duration-300"
              >
                {/* Image */}
                <div className="h-40 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.text}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="p-6">
                  <h4 className="text-slate-100 text-base font-medium leading-relaxed group-hover:text-white transition-colors">
                    {service.text}
                  </h4>

                  {/* Accent Line */}
                  <div className="mt-4 h-1 w-0 bg-sky-500 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Final Statement */}
          <div className="relative bg-gradient-to-r from-slate-800/40 via-slate-800/70 to-slate-800/40 border border-slate-700/50 rounded-sm p-10 text-center backdrop-blur-md shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-sky-500/5 rounded-sm"></div>

            {/* Subtle Image Accent */}
            <div className="absolute -top-10 right-10 w-28 h-28 rounded-full overflow-hidden opacity-30 border border-sky-500/20 shadow-md">
              <img
                src="https://picsum.photos/seed/oz-final/300/300"
                alt="Trading Globe"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10">
              <p className="text-slate-300 text-lg leading-relaxed italic max-w-4xl mx-auto">
                "Working with Capyngen is a guarantee that the brokers will be
                endowed with the technology, connectivity, and performance
                necessary to offer excellent trading experiences while expanding
                ​‍​‌‍​‍‌​‍​‌‍​‍‌globally."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
