import React from "react";

const MT5IntroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#030404] via-[#07120f] to-[#0a1a15] text-white py-24 px-6 overflow-hidden">
      {/* Background lighting glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-green-400/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* --- Left: Text Content --- */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Understanding MT5 and How It Benefits Brokers
          </h2>

          <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
            MetaTrader​‍​‌‍​‍‌​‍​‌‍​‍‌ 5 (MT5) is a trading platform with
            multi-asset capabilities that works with forex, CFDs, commodities,
            indices, and cryptocurrencies. Brokers using MT5 trading technology
            have the option to implement white-label solutions, liquidity bridge
            integration, API connectivity, and backend management to facilitate
            trade execution and multi-asset trading capabilities without any
            hiccups. We at Capyngen Technologies are doing the work of setting
            up the MT5 infrastructure for brokers, platform integration, and
            plugin development. Our offerings are like a perfect fit for both
            startups and mature brokerages in helping them to have a trading
            infrastructure that is not only secure, scalable, and of high
            performance but is also available ​‍​‌‍​‍‌​‍​‌‍​‍‌globally.
          </div>
        </div>

        {/* --- Right: Image / Visual --- */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative bg-white/5 backdrop-blur-xl border border-emerald-500/10 rounded-3xl shadow-2xl shadow-emerald-500/10 overflow-hidden max-w-md">
            <img
              src="https://picsum.photos/id/1064/600/400"
              alt="MT5 Global Trading Platform"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a15]/80 to-transparent"></div>
          </div>
          {/* Glow effect */}
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-emerald-400/20 blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default MT5IntroSection;
