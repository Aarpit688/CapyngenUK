import React from "react";
import { assets } from "../assets/assets";

const MT5Section = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0b0e0e] via-[#0c1715] to-[#08201D] text-white py-24 px-6 overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
              Key Features of Capyngen’s MT5 Services
            </span>
          </h2>

          {/* NEW CONTENT STARTS HERE */}
          <p className="text-gray-300 leading-relaxed text-lg">
            MetaTrader​‍‌‍​‍‌​‍​‌‍​‍‌ 5 White-Label Solution – Get your
            brokerage a fully branded platform up and running in no time.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            Liquidity Bridge & Pricing Solutions – Get connected with multiple
            liquidity providers for better spreads and faster execution.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            Backend Management & Hosting – Quality servers, data feeds, and a
            robust infrastructure for trouble-free operations.
          </p>

          <p className="text-gray-400 leading-relaxed">
            By having these features at their disposal, brokers are capable of
            presenting professional, scalable, and secure trading services to
            their clients, lowering their operational complexity, and being able
            to retain their competitive ​‍‌‍​‍‌​‍​‌‍​‍‌advantage.
          </p>
          {/* NEW CONTENT ENDS HERE */}
        </div>

        {/* Right: Image / Visual */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-green-600/30 to-emerald-600/30 blur-3xl rounded-3xl"></div>
          <div className="relative overflow-hidden rounded-md border border-gray-700/50 backdrop-blur-xl shadow-2xl">
            <img
              src={assets.mt3}
              alt="MetaTrader 5 Trading Dashboard"
              className="object-cover w-full h-full\"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MT5Section;
