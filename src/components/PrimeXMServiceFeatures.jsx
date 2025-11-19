import React from "react";
import { Globe2 } from "lucide-react";

const PrimeXMServiceFeatures = () => {
  const features = [
    {
      title: "Ultra-Low Latency Technology",
      desc: "Trading execution within milliseconds, reducing slippage even during high-volume operations.",
      image: "https://picsum.photos/seed/pxm1/600/400",
    },
    {
      title: "Liquidity Aggregation Network",
      desc: "Connect seamlessly with multiple liquidity providers through a unified institutional-grade engine.",
      image: "https://picsum.photos/seed/pxm2/600/400",
    },
    {
      title: "Reliable Data Connectivity",
      desc: "High-speed and highly stable data feeds ensure accurate pricing and dependable market depth.",
      image: "https://picsum.photos/seed/pxm3/600/400",
    },
  ];

  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Key Features of PrimeXM X-Core Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto opacity-60"></div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {features.map((item, index) => (
            <div
              key={index}
              className=" bg-slate-900 border border-slate-800 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion Banner */}
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800  p-12 text-center overflow-hidden shadow-xl">
          {/* Background accents */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="p-3 rounded-full bg-yellow-500/10 border border-yellow-500/20">
              <Globe2 className="w-8 h-8 text-yellow-500" />
            </div>

            <p className="text-lg md:text-xl text-slate-200 leading-relaxed italic max-w-3xl">
              "By employing these features, brokers can efficiently handle high
              volumes, maintain institutional-grade performance, and expand
              operations across global markets."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrimeXMServiceFeatures;
