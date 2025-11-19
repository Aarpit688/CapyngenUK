import React from "react";

const PrimeXMServiceConclusion = () => {
  const services = [
    {
      text: "An infrastructure setup with ultra-low latency",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    },
    {
      text: "Aggregation of liquidity and connectivity solutions",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
    },
    {
      text: "Integration and optimization of data feed",
      image:
        "https://images.unsplash.com/photo-1605902711622-cfb43c44367e?auto=format&fit=crop&w=800&q=80",
    },
    {
      text: "High-volume trading with an institutional-grade performance",
      image:
        "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="relative bg-slate-900 border border-slate-800 p-8 md:p-16 overflow-hidden shadow-2xl">
          {/* Background Decorations */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 z-10"></div>
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>

          {/* Heading */}
          <div className="relative text-center max-w-4xl mx-auto mb-14 z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Conclusion: Achieve Ultra-Low Latency and High-Volume Trading
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Brokers, by using Capyngen Technologies UK Limited, get full
              access to PrimeXM X-Core services including:
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12 relative z-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-slate-800/40 border border-slate-700/50 rounded-sm overflow-hidden hover:border-yellow-500/40 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="h-50 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt="service visual"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="p-5">
                  <p className="text-slate-200 text-sm md:text-base font-medium leading-snug group-hover:text-white transition-colors">
                    {service.text}
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="h-1 w-0 bg-yellow-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Final Banner */}
          <div className="relative bg-gradient-to-r from-slate-800/50 via-slate-800/80 to-slate-800/50 border border-slate-700/50 p-8 rounded-md text-center backdrop-blur-sm z-10">
            <div className="absolute inset-0 bg-yellow-500/5 rounded-md"></div>

            <p className="relative text-slate-300 text-lg leading-relaxed max-w-4xl mx-auto italic">
              “Working with Capyngen equips your brokerage with the speed,
              stability, and cutting-edge PrimeXM X-Core technology needed to
              compete in global markets — while delivering exceptional trading
              experiences.”
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrimeXMServiceConclusion;
