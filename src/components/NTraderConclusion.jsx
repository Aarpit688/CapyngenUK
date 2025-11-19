import React from "react";

const NTraderConclusion = () => {
  const components = [
    {
      text: "nTrader white-label platform",
      img: "https://picsum.photos/300/200?random=91",
    },
    {
      text: "Liquidity bridge & routing setup",
      img: "https://picsum.photos/300/200?random=92",
    },
    {
      text: "Backend management & server hosting",
      img: "https://picsum.photos/300/200?random=93",
    },
    {
      text: "API integration with CRMs and PSPs",
      img: "https://picsum.photos/300/200?random=94",
    },
    {
      text: "Multi-asset execution setup",
      img: "https://picsum.photos/300/200?random=95",
    },
    {
      text: "24/7 monitoring & support",
      img: "https://picsum.photos/300/200?random=96",
    },
  ];

  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-xl p-12 md:p-20 overflow-hidden text-center">
          {/* Removed old hero image */}

          {/* Background Effects */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600"></div>
          <div className="absolute -right-20 top-20 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Build a Complete{" "}
              <span className="text-red-500">nTrader-Based Brokerage</span> with
              Capyngen
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              We​‍​‌‍​‍‌​‍​‌‍​‍‌ provide all the necessary components for a
              complete nTrader setup such as:
            </p>

            {/* Cards With Images (Icons Removed) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {components.map((comp, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors group flex flex-col gap-3"
                >
                  {/* IMAGE BLOCK */}
                  <div className="w-full h-28 overflow-hidden">
                    <img
                      src={comp.img}
                      alt={comp.text}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <span className="text-slate-200 font-medium text-sm text-left">
                    {comp.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Quote Box */}
            <div className="inline-block p-6 rounded-2xl bg-slate-800/30 border border-slate-700 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <p className="text-lg text-slate-300 font-light italic">
                  "The nTrader solutions from us work as an instrument for
                  brokers to have a strong, safe, and flexible trading system
                  that is suitable for worldwide ‌ ‍ ​‍​‌‍​‍‌​‍​‌‍​‍‌growth."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NTraderConclusion;
