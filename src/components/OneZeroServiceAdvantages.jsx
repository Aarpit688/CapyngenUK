import React from "react";

export default function OneZeroServiceAdvantages() {
  const advantages = [
    {
      title: "Seamless​‍​‌‍​‍‌​‍​‌‍​‍‌ Connectivity",
      description:
        "Easily connect with various liquidity providers and integrate your trading platforms.",
      image: "https://picsum.photos/seed/onezero-adv1/600/400",
    },
    {
      title: "High-Performance Trading",
      description:
        "Make your trading activities at ultra-low latency level with the trusted set-up of the system.",
      image: "https://picsum.photos/seed/onezero-adv2/600/400",
    },
    {
      title: "Turnkey Infrastructure",
      description:
        "Solutions that are ready for use and designed for brokers as well as financial institutions of any size.",
      image: "https://picsum.photos/seed/onezero-adv3/600/400",
    },
  ];

  return (
    <div className="py-20 bg-black w-full ">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Advantages of OneZero Solutions for Brokers
          </h2>
          <div className="w-24 h-1 bg-sky-500/50 mx-auto rounded-full"></div>
        </div>

        {/* Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {advantages.map((adv, index) => (
            <div
              key={index}
              className="group bg-slate-900 border border-slate-800 overflow-hidden hover:border-sky-500/40 hover:-translate-y-2 transition-all duration-300 shadow-xl"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={adv.image}
                  alt={adv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-200 transition-colors">
                  {adv.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {adv.description}
                </p>

                {/* Accent Line */}
                <div className="mt-6 w-0 h-1 bg-sky-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Statement Card */}
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50  p-10 text-center overflow-hidden shadow-xl">
          {/* Background accents */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-[0.04]"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-5xl mx-auto">
            <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed italic">
              "OneZero is the technology that a broker needs to provide him with
              scalable and high-performance trading, and therefore these are the
              advantages that make OneZero a broker's most trusted
              ​‍​‌‍​‍‌​‍​‌‍​‍‌technology."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
