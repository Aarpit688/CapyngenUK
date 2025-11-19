import React from "react";
import { Rocket, Layers, Wifi, CheckCircle } from "lucide-react";

const CTraderAdvantages = () => {
  const advantages = [
    {
      title: "Rapid​‍​‌‍​‍‌​‍​‌‍​‍‌ White Label Deployment",
      description:
        "Get your brokerage up and running in no time with fully branded solutions.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      icon: <Rocket className="w-6 h-6 text-white" />,
    },
    {
      title: "Multi-Asset Support",
      description:
        "Allow forex, CFD, and cryptocurrency trading to be done from a single platform.",
      image:
        "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=800&auto=format&fit=crop",
      icon: <Layers className="w-6 h-6 text-white" />,
    },
    {
      title: "Reliable Execution & Connectivity",
      description:
        "Trade execution is kept smooth through low-latency hosting and bridging.",
      image:
        "https://images.unsplash.com/photo-1558494949-efc52728101c?q=80&w=800&auto=format&fit=crop",
      icon: <Wifi className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Key Advantages of{" "}
            <span className="text-teal-500">cTrader Solutions</span> for Brokers
          </h2>
          <div className="w-24 h-1 bg-teal-500/50 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {advantages.map((adv, index) => (
            <div
              key={index}
              className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-500/40 transition-all duration-500 hover:-translate-y-2 shadow-lg"
            >
              {/* Image Area */}
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-teal-900/30 mix-blend-multiply z-10 group-hover:bg-teal-900/10 transition-colors duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-20"></div>
                <img
                  src={adv.image}
                  alt={adv.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute top-4 right-4 z-30 w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform duration-300">
                  {adv.icon}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 relative z-20 -mt-6">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-200 transition-colors leading-tight">
                  {adv.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                  {adv.description}
                </p>
              </div>

              {/* Bottom Highlight */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-teal-500 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="bg-slate-900/50 border border-teal-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-[0.03]"></div>
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-light">
              By having these features cTrader becomes the perfect trading
              environment for brokers who want to offer professional trading
              services to their clients while at the same time reducing
              technical risks and their operational ​‍​‌‍​‍‌​‍​‌‍​‍‌costs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTraderAdvantages;
