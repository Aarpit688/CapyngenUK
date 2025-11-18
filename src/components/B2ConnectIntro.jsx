import React from "react";

const B2ConnectIntro = () => {
  return (
    <section className="bg-black py-10">
      <div
        className="relative w-full max-w-[90vw] mx-auto 
      bg-[#0b0f17]/80 backdrop-blur-xl 
      border border-cyan-400/20 
       
      shadow-[0_0_40px_rgba(0,255,255,0.15)] 
      overflow-hidden 
      transition-all duration-500"
      >
        <div className="grid md:grid-cols-2 items-center">
          {/* LEFT CONTENT */}
          <div className="p-8 md:p-12 lg:p-16 text-white order-2 md:order-1">
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-normal text-white">
              A Complete Liquidity Connectivity System for Forex, Crypto &
              Multi-Asset Brokers
            </h1>

            <p className="mt-6 text-base lg:text-lg text-slate-300 leading-relaxed drop-shadow">
              Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ Technologies UK Limited offers a strong
              B2Connect Liquidity Bridge Solution to brokers that are in need of
              quick execution, efficient liquidity routing, and multi-asset
              trading support.
            </p>

            <p className="mt-4 text-slate-400 leading-relaxed">
              Our services include launching the bridge, setting up the
              liquidity sources, integrating the execution venues, and linking
              the whole trading ecosystem of your business without any
              ​‍​‌‍​‍‌​‍​‌‍​‍‌interruption.
            </p>

            <div
              className="mt-10 p-5 
            bg-gradient-to-r from-cyan-500/20 to-blue-600/20 
            border border-cyan-400/30 
            rounded-2xl 
            shadow-[0_0_25px_rgba(0,255,255,0.1)] 
            text-center 
            transform hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,255,0.35)] 
            transition-all duration-300 ease-in-out"
            >
              <h2 className="text-xl lg:text-2xl font-bold tracking-wide">
                Connect Your Brokerage With High-Performance B2Connect Liquidity
                Today.
              </h2>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-64 md:h-full order-1 md:order-2 overflow-hidden">
            <img
              src="https://picsum.photos/800/1000?random=1"
              alt="Global Financial Network"
              className="w-full h-full object-cover md:absolute md:inset-0 scale-105 
            opacity-80 transition-all duration-500 hover:scale-110 hover:opacity-100"
            />

            {/* Overlays */}
            <div
              className="absolute inset-0 bg-gradient-to-t 
            from-[#0b0f17] via-[#0b0f17]/40 to-transparent md:bg-gradient-to-r"
            ></div>

            {/* Neon Glow Edge */}
            <div className="absolute inset-y-0 right-0 w-2 bg-gradient-to-b from-cyan-400/40 to-blue-500/40 blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2ConnectIntro;
