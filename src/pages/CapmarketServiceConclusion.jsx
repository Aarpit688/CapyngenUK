import React from "react";
import {
  Server,
  Link,
  MonitorSmartphone,
  LifeBuoy,
  TrendingUp,
} from "lucide-react";

const CapmarketServiceConclusion = () => {
  const services = [
    {
      text: "Installation of platform and server hosting",
      icon: <Server className="w-5 h-5 text-cyan-400" />,
    },
    {
      text: "Liquidity bridge solutions and API connectivity",
      icon: <Link className="w-5 h-5 text-cyan-400" />,
    },
    {
      text: "Development of white-label platform and multi-asset support",
      icon: <MonitorSmartphone className="w-5 h-5 text-cyan-400" />,
    },
    {
      text: "Continuous maintenance, support, and analytics tools",
      icon: <LifeBuoy className="w-5 h-5 text-cyan-400" />,
    },
  ];

  return (
    <section className="bg-black w-full py-20">
      <div className="max-w-[90vw] mx-auto">
        {/* Header */}
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
            Conclusion: Build a High-Performance Brokerage with{" "}
            <span className="text-cyan-400">Capmarket</span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed max-w-4xl mx-auto">
            By​‍​‌‍​‍‌​‍​‌‍​‍‌ working with Capyngen Technologies UK Limited,
            brokers are able to enjoy the full range of Capmarket services which
            include:
          </p>
        </div>

        {/* Services List */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-colors"
            >
              <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
                {service.icon}
              </div>

              <p className="text-slate-300 text-base leading-relaxed">
                {service.text}
              </p>
            </div>
          ))}
        </div>

        {/* Final Statement */}
        <div className="bg-slate-900 border border-slate-800 p-10 flex flex-col items-center text-center max-w-7xl mx-auto">
          <p className="text-slate-300 text-lg leading-relaxed">
            "The collaboration with Capyngen makes it possible for brokers to be
            equipped with the technology, throughput, and scalability needed to
            provide excellent trading experiences and at the same time, extend
            their global ​‍​‌‍​‍‌​‍​‌‍​‍‌presence."
          </p>
        </div>
      </div>
    </section>
  );
};

export default CapmarketServiceConclusion;
