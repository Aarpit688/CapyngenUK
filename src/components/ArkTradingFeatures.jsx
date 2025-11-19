import React from "react";
import {
  MonitorSmartphone,
  Zap,
  Webhook,
  ShieldAlert,
  Cloud,
  ArrowUpRight,
} from "lucide-react";

const ArkTradingFeatures = () => {
  const features = [
    {
      number: "1",
      title: "Ark Trading White-Label Platform",
      description:
        "A fully branded Ark Trading white-label solution is what we present. This enables brokers to swiftly launch with a customized interface, advanced functionality, and multi-device accessibility.",
      icon: <MonitorSmartphone className="w-6 h-6 text-rose-400" />,
    },
    {
      number: "2",
      title: "Ark Liquidity Tools & Real-Time Connectivity",
      description:
        "The team is enthusiastic about the integration of the advanced Ark Trading liquidity tools which is the main reason for ensuring that there are tight spreads, deep liquidity, and fast order execution.",
      icon: <Zap className="w-6 h-6 text-rose-400" />,
    },
    {
      number: "3",
      title: "Ark Trading API Integration",
      description:
        "By using Ark Trading API integration, brokers are able to connect CRMs, PSPs, KYC tools, client portals, or any external system in a way that is fully automated and scalable.",
      icon: <Webhook className="w-6 h-6 text-rose-400" />,
    },
    {
      number: "4",
      title: "Ark Risk Management System",
      description:
        "We set up the incorporated Ark risk management and dealer room module, which assists brokers in limiting their exposure, handling risk limits, and keeping an eye on trading activities in the real-time environment.",
      icon: <ShieldAlert className="w-6 h-6 text-rose-400" />,
    },
    {
      number: "5",
      title: "Cloud-Based Ark Trading Infrastructure",
      description:
        "The cloud hosting that we provide is the reason for the speed, security, redundancy, and trouble-free operation that has made it possible for brokers to use Ark Trading with low latency and high availability.",
      icon: <Cloud className="w-6 h-6 text-rose-400" />,
    },
  ];

  return (
    <div className="w-full bg-black py-20">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-500/30 to-transparent -z-10"></div>
          <div className="inline-block bg-slate-950 px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Core Features of Our{" "}
              <span className="text-rose-500">Ark Trading Solutions</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-slate-900 border border-slate-800 rounded-md p-8 hover:border-rose-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <div className="relative z-10 mb-6 flex justify-between items-start">
                <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-rose-500/20 group-hover:border-rose-500/30 transition-colors duration-300 shadow-lg">
                  {feature.icon}
                </div>
                <div className="text-4xl font-black text-slate-800 group-hover:text-rose-500/10 transition-colors duration-300 select-none">
                  {feature.number}
                </div>
              </div>

              <div className="relative z-10 flex-grow">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-rose-200 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArkTradingFeatures;
