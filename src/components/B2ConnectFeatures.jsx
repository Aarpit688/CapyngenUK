import React from "react";

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
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text 
                         bg-gradient-to-r from-indigo-300 to-purple-400 tracking-tight pb-5"
          >
            Why Brokers Choose B2Connect for Liquidity & Execution
          </h2>

          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            B2Connect​‍​‌‍​‍‌​‍​‌‍​‍‌ is a multi-asset liquidity bridge of the
            future designed to merge crypto, forex, and CFD liquidity streams
            into one execution system. It offers quick pricing, low-latency
            order routing, intelligent aggregation, and connectivity to Tier-1,
            crypto, and institutional LPs.
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
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-indigo-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2"
                />
              </svg>
            }
            title="Multi-Asset Liquidity Bridge Implementation"
          >
            The bridge was configured to enable trading of forex, crypto,
            commodities, indices, and synthetics.
          </FeatureCard>

          {/* CARD 2 */}
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-indigo-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8"
                />
              </svg>
            }
            title="Crypto-Native Execution Technology"
          >
            B2Connect provides extensive integration with digital-asset
            exchanges, crypto LPs, and OTC desks.
          </FeatureCard>

          {/* CARD 3 */}
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-indigo-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.7 13.3A3 3 0 118.7 9.7m0 3.6l6.6 3.3m-6.6-6l6.6-3.3"
                />
              </svg>
            }
            title="Smart Order Routing & Price Aggregation"
          >
            Orders are executed through the smartest channels for lowest
            spreads, best pricing, and least slippage.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default B2ConnectFeatures;
