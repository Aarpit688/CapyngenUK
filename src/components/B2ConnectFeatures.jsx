import React from "react";
import { FaProjectDiagram, FaRoute } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";

const FeatureCard = ({ icon, title, children }) => (
  <div
    className="group relative p-7 rounded-2xl bg-[#111522] border border-indigo-500/20 
                  hover:border-indigo-400/40 transition-all duration-300 overflow-hidden"
  >
    {/* Glow hover effect */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 
                    bg-gradient-to-br from-indigo-600/20 to-purple-600/20 
                    blur-xl transition duration-500"
    ></div>

    {/* Content */}
    <div className="relative z-10">
      <div
        className="w-14 h-14 flex items-center justify-center rounded-xl 
                      bg-[#1d2335] border border-indigo-400/30 shadow-inner mb-5"
      >
        {icon}
      </div>

      <h4 className="text-xl font-semibold text-white">{title}</h4>
      <p className="text-slate-400 mt-2 leading-relaxed">{children}</p>
    </div>
  </div>
);

const B2ConnectFeatures = () => {
  return (
    <section className="relative w-full py-20 px-6 bg-black">
      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-normal">
            Why Brokers Choose B2Connect for Liquidity & Execution
          </h2>

          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            B2Connect​‍​‌‍​‍‌​‍​‌‍​‍‌ is a multi-asset liquidity bridge of the
            future designed to merge crypto, forex, and CFD liquidity streams
            into one single execution system. Basically, it offers quick
            pricing, low-latency order routing, intelligent aggregation, as well
            as reliable connectivity to Tier-1, crypto, and institutional
            ​‍​‌‍​‍‌​‍​‌‍​‍‌LPs.
          </p>
        </div>

        {/* Section Divider */}
        <div className="my-8 flex justify-center">
          <div className="w-32 h-1 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500"></div>
        </div>

        {/* Feature Cards Grid */}
        <h3 className="text-2xl font-semibold text-white text-center mb-10 tracking-wide">
          Core Features of B2Connect Liquidity Solutions
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          {/* CARD 1 */}
          <FeatureCard
            icon={<FaProjectDiagram className="h-7 w-7 text-indigo-300" />}
            title="Multi-Asset Liquidity Bridge Implementation"
          >
            The bridge was configured to enable trading of forex, crypto,
            commodities, indices, and synthetics.
          </FeatureCard>

          {/* CARD 2 */}
          <FeatureCard
            icon={<SiBlockchaindotcom className="h-7 w-7 text-indigo-300" />}
            title="Crypto-Native Execution Technology"
          >
            B2Connect provides extensive integration with digital-asset
            exchanges, crypto LPs, and OTC desks.
          </FeatureCard>

          {/* CARD 3 */}
          <FeatureCard
            icon={<FaRoute className="h-7 w-7 text-indigo-300" />}
            title="Smart Order Routing & Price Aggregation"
          >
            Orders are executed through the smartest channels for lowest
            spreads, best pricing, and least ​‍​‌‍​‍‌​‍​‌‍​‍‌slippage.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default B2ConnectFeatures;
