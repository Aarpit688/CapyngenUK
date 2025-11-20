import React from "react";
import { ArrowRight } from "lucide-react";

export const AboutUs1 = () => {
  return (
    <section className="relative pt-24 min-h-screen bg-black text-white overflow-hidden">
      {/* 🎨 PREMIUM AURORA BACKGROUND */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Soft multi-layer aurora */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700/30 via-purple-600/20 to-cyan-500/25 opacity-70 blur-2xl animate-aurora"></div>

        <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-blue-500/20 blur-[180px] rounded-full opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[650px] h-[650px] bg-purple-600/20 blur-[180px] rounded-full opacity-50"></div>
        <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-cyan-400/20 blur-[160px] rounded-full opacity-40"></div>
      </div>

      {/* Aurora Animation */}
      <style>
        {`
          @keyframes aurora {
            0% { transform: translateY(0px) scale(1); opacity: 0.75; }
            50% { transform: translateY(-30px) scale(1.05); opacity: 1; }
            100% { transform: translateY(0px) scale(1); opacity: 0.75; }
          }
          .animate-aurora {
            animation: aurora 12s ease-in-out infinite;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-20 items-center">
          {/* ---------------- LEFT SIDE ---------------- */}
          <div className="lg:col-span-6  shadow-2xl relative z-10 ">
            <h1 className="text-4xl lg:text-5xl leading-[1.1] font-bold mb-6 drop-shadow-sm">
              About Us — Capyngen Technologies UK Limited
            </h1>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ Technologies UK Limited is a worldwide
              fintech technology provider mainly focused on Forex and Crypto
              turnkey brokerage solutions, trading platforms, liquidity
              infrastructure, and advanced broker technology systems. Through
              our strong international footprint and team of seasoned industry
              professionals, we enable new and existing brokerages to embark on
              a journey, expand and function in the financial market with a
              complete sense of security, albeit highly competitive.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg mb-10">
              We provide a brokerage with all the necessities wrapped in one
              integrated ecosystem starting from company formation to trading
              platforms, CRM systems, MAM/PAMM modules, liquidity integration,
              and worldwide marketing. Our goal is to equip financial businesses
              with safe, innovative, and scalable ​‍​‌‍​‍‌​‍​‌‍​‍‌technology.
            </p>

            <button className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-base font-medium shadow-lg hover:shadow-blue-500/40 transition-all hover:scale-[1.02] active:scale-[0.99] border border-white/20 backdrop-blur-xl">
              Explore Our Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          {/* ---------------- RIGHT SIDE — NEW PREMIUM COLLAGE ---------------- */}
          <div className="lg:col-span-6 mt-16 lg:mt-0 relative">
            {/* Glow behind collage */}
            <div className="absolute -top-16 -right-16 w-[420px] h-[420px] bg-cyan-400/20 blur-[140px] rounded-full"></div>

            <div className="grid grid-cols-2 gap-6 relative">
              {/* MAIN TALL IMAGE */}
              <div className="col-span-2 sm:col-span-1 sm:row-span-2 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-2xl rounded-md"></div>

                <div className="relative overflow-hidden rounded-md border border-white/10 shadow-2xl h-[360px] sm:h-full group">
                  <img
                    src="https://picsum.photos/600/800?random=601"
                    alt="Fintech HQ"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Glass gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>

              {/* LANDSCAPE IMAGE */}
              <div className="hidden sm:block relative group">
                <div className="overflow-hidden rounded-md border border-white/10 shadow-xl h-48">
                  <img
                    src="https://picsum.photos/600/500?random=602"
                    alt="Trading Technology"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
              </div>

              {/* GLASS INFO IMAGE CARD */}
              <div className="hidden sm:block relative group">
                <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-md overflow-hidden shadow-xl h-48">
                  <img
                    src="https://picsum.photos/600/500?random=603"
                    alt="Statistics / Illustration"
                    className="w-full h-full object-cover rounded-md transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs1;
