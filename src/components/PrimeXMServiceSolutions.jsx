import React from "react";
import { Timer, Layers, TrendingUp, CheckCircle2 } from "lucide-react";
import { assets } from "../assets/assets";

const PrimeXMServiceSolutions = () => {
  const reasons = [
    {
      title: "Fast​‍​‌‍​‍‌​‍​‌‍​‍‌ Trade Execution",
      description:
        "Ultra-low latency allows for the trades to be done in milliseconds.",
      image: assets.p9,
    },
    {
      title: "Reliable Liquidity Access",
      description:
        "Aggregated liquidity significantly improves spreads and market depth.",
      image: assets.p10,
    },
    {
      title: "Scalable Infrastructure",
      description:
        "Equipment that your brokerage will use to expand can be of the same standard as institutional-grade volume.",
      image: assets.p11,
    },
  ];

  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            3 Reasons Brokers Choose PrimeXM X-Core Solutions
          </h2>
          <div className="w-24 h-1 bg-yellow-500/50 mx-auto rounded-full"></div>
        </div>

        {/* Feature Cards with Full Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:-translate-y-2 hover:border-yellow-500/40 transition-all duration-300 shadow-xl group"
            >
              {/* Image */}
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {reason.description}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion Banner */}
        <div className="relative bg-slate-900 border border-yellow-500/20 rounded-lg p-8 md:p-12 text-center overflow-hidden shadow-xl">
          {/* Background Texture */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-[0.04]"></div>

          {/* Glow */}
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-4 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed italic">
              "On the one hand, these benefits of PrimeXM X-Core account for its
              being the most suitable option for brokers that want to have a
              great performance, high reliability, and global
              ​‍​‌‍​‍‌​‍​‌‍​‍‌connectivity."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrimeXMServiceSolutions;
