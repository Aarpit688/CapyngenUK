import React from "react";
import { assets } from "../assets/assets";

const MT5IntroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#030404] via-[#07120f] to-[#0a1a15] text-white py-24 px-6 overflow-hidden">
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
          <div className="relative bg-black backdrop-blur-xl  rounded-md shadow-2xl shadow-emerald-500/10 overflow-hidden max-w-md">
            <img
              src={assets.arkTrading3}
              alt="MT5 Global Trading Platform"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a15]/80 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MT5IntroSection;
