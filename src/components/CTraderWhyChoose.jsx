import React from "react";
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Globe2,
  Server,
  MonitorCheck,
  Settings2,
} from "lucide-react";

const CTraderWhyChoose = () => {
  const benefits = [
    {
      text: "A full cTrader white label solution to quickly initiate brokerages",
      icon: <MonitorCheck className="w-5 h-5 text-teal-400" />,
    },
    {
      text: "Turnkey multi-asset trading infrastructure",
      icon: <Globe2 className="w-5 h-5 text-teal-400" />,
    },
    {
      text: "Customizable platform technology to fit branding and business needs",
      icon: <Settings2 className="w-5 h-5 text-teal-400" />,
    },
    {
      text: "State-of-the-art hosting and connectivity for speed trading",
      icon: <Server className="w-5 h-5 text-teal-400" />,
    },
  ];

  return (
    <div className="py-20 bg-black w-full">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="relative bg-slate-900/60 border border-slate-800 rounded-lg p-8 md:p-16 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-900/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-600 opacity-50"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            {/* Left: Problem/Solution Narrative */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Why Brokers Choose Capyngen for{" "}
                <span className="text-teal-500">
                  cTrader Technology Solutions
                </span>
              </h2>

              <div className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-lg space-y-4">
                <div className="flex gap-3 items-start">
                  <AlertCircle className="w-5 h-5 text-rose-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-slate-200 font-medium text-sm mb-1">
                      The Challenge
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Brokers are confronted with difficulties such as the
                      complexity of platform deployment, latency problems, and
                      liquidity integration.
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-slate-700/50"></div>

                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-slate-200 font-medium text-sm mb-1">
                      The Capyngen Solution
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      These problems are resolved by Capyngen Technologies UK
                      Limited through tailor-made cTrader solutions that are
                      intended to deliver a trading infrastructure that is
                      stable, scalable, and interconnected worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Benefits List */}
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-2 text-teal-200 font-medium pt-2">
                <span>By collaborating with us, brokers will be able to:</span>
                <ArrowRight className="w-4 h-4 hidden md:block" />
              </div>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-slate-900 border border-slate-800 hover:border-teal-500/40 hover:bg-slate-800/80 transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center border border-teal-500/20 group-hover:bg-teal-500/20 transition-colors flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <p className="text-slate-300 text-sm md:text-base font-medium group-hover:text-white transition-colors">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Conclusion Text */}
          <div className="mt-12 pt-8 border-t border-slate-800 text-center">
            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-4xl mx-auto">
              "Through Capyngen, brokers are able to concentrate on client
              acquisition and their business growth while the technical
              installation and support are entrusted to the professionals."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTraderWhyChoose;
