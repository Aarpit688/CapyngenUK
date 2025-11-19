import React from "react";
import {
  MonitorSmartphone,
  Globe,
  Server,
  Package,
  LifeBuoy,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const CTraderConclusion = () => {
  const services = [
    {
      text: "White label technology and platform customization",
      icon: <MonitorSmartphone className="w-5 h-5 text-teal-400" />,
    },
    {
      text: "Multi-asset trading infrastructure and connectivity",
      icon: <Globe className="w-5 h-5 text-teal-400" />,
    },
    {
      text: "Hosting, bridging, and API integration",
      icon: <Server className="w-5 h-5 text-teal-400" />,
    },
    {
      text: "Turnkey solutions for forex, CFD, and cryptocurrency brokers",
      icon: <Package className="w-5 h-5 text-teal-400" />,
    },
    {
      text: "Ongoing deployment support and analytics platforms",
      icon: <LifeBuoy className="w-5 h-5 text-teal-400" />,
    },
  ];

  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="relative bg-slate-900 border border-slate-800 p-8 md:p-16 overflow-hidden shadow-2xl">
          {/* Background Decorations */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-600 z-10"></div>
          <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Conclusion: Build a High-Performance Brokerage with{" "}
              <span className="text-teal-500">cTrader</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Brokers​‍​‌‍​‍‌​‍​‌‍​‍‌ working with Capyngen Technologies UK
              Limited have the ability to use the full range of cTrader services
              which include:
            </p>
          </div>

          {/* Services Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 justify-center">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 flex items-start gap-4 hover:bg-slate-800/60 hover:border-teal-500/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="mt-1 p-2 bg-teal-500/10 rounded-lg border border-teal-500/10 group-hover:border-teal-500/30 transition-colors flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h4 className="text-slate-200 font-medium text-sm md:text-base group-hover:text-white transition-colors leading-snug">
                    {service.text}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Final Statement Banner */}
          <div className="relative z-10 bg-gradient-to-r from-slate-800/50 via-slate-800/80 to-slate-800/50 border border-slate-700/50 rounded-2xl p-8 text-center backdrop-blur-sm">
            <div className="absolute inset-0 bg-teal-500/5 rounded-2xl pointer-events-none"></div>
            <div className="flex flex-col items-center gap-4">
              <p className="text-slate-300 text-lg leading-relaxed max-w-4xl">
                "Working with Capyngen is the way forward for brokers to have
                the tech, connectivity, and performance needed to deliver
                top-notch trading experiences while expanding their business
                ​‍​‌‍​‍‌​‍​‌‍​‍‌worldwide."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTraderConclusion;
