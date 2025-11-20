import React from "react";
import {
  Building2,
  Landmark,
  Database,
  Zap,
  Globe,
  Monitor,
  Megaphone,
  Rocket,
} from "lucide-react";

export const AboutUs5 = () => {
  const steps = [
    {
      title: "Company Incorporation",
      duration: "7 Days",
      icon: <Building2 className="w-5 h-5 text-white" />,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Banking Setup",
      duration: "5 Days",
      icon: <Landmark className="w-5 h-5 text-white" />,
      color: "from-indigo-500 to-indigo-700",
    },
    {
      title: "CRM Development",
      duration: "15 Days",
      icon: <Database className="w-5 h-5 text-white" />,
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Liquidity Setup",
      duration: "2 Days",
      icon: <Zap className="w-5 h-5 text-white" />,
      color: "from-cyan-500 to-cyan-700",
    },
    {
      title: "Website Development",
      duration: "7 Days",
      icon: <Globe className="w-5 h-5 text-white" />,
      color: "from-teal-500 to-teal-700",
    },
    {
      title: "Trading Platform",
      duration: "3 Days",
      icon: <Monitor className="w-5 h-5 text-white" />,
      color: "from-emerald-500 to-emerald-700",
    },
    {
      title: "Marketing",
      duration: "3 Months",
      icon: <Megaphone className="w-5 h-5 text-white" />,
      color: "from-orange-500 to-orange-700",
    },
    {
      title: "Testing & Launch",
      duration: "3 Days",
      icon: <Rocket className="w-5 h-5 text-white" />,
      color: "from-rose-500 to-rose-700",
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Soft Background Glows */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-600/20 blur-[150px] opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-purple-600/20 blur-[150px] opacity-30 -z-10"></div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.13] mix-blend-soft-light pointer-events-none"></div>

      <div className="max-w-[90vw] mx-auto relative">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Project Timeline & Operational Excellence
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Capyngen ensures a seamless, fast, and structured step-by-step
            deployment:
          </p>
        </div>

        {/* TIMELINE WRAPPER */}
        <div className="relative">
          {/* Glowing Center Line (Desktop) */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] 
                          bg-gradient-to-b from-blue-500/40 via-slate-700/40 to-purple-500/40 
                          shadow-[0_0_25px_rgba(59,130,246,0.3)] rounded-full"
          ></div>

          {/* Left Timeline Line (Mobile) */}
          <div className="absolute left-10 md:hidden top-0 bottom-0 w-[2.5px] bg-slate-700 rounded-full"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative md:flex items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 md:w-1/2"></div>

                {/* Node Icon */}
                <div className="absolute left-10 md:left-1/2 transform -translate-x-1/2 z-20">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color}
                    shadow-[0_0_25px_rgba(255,255,255,0.2)]
                    border-4 border-black flex items-center justify-center`}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* CARD */}
                <div className="flex-1 md:w-1/2 pl-20 md:pl-0">
                  <div
                    className={`relative bg-slate-900/80 backdrop-blur-xl p-7 rounded-2xl 
                    border border-slate-800 shadow-xl hover:shadow-blue-500/20 
                    transition-all duration-300 group 
                    ${index % 2 === 0 ? "md:mr-16" : "md:ml-16"}`}
                  >
                    {/* Animated Border Glow */}
                    <div
                      className="absolute inset-0 rounded-2xl border border-transparent 
                                    group-hover:border-blue-500/30 transition-all duration-500"
                    ></div>

                    {/* Connecting Line */}
                    <div
                      className={`absolute top-8 w-10 h-[2px] bg-slate-700 hidden md:block 
                      ${index % 2 === 0 ? "-right-10" : "-left-10"}`}
                    ></div>

                    {/* Card Content */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {step.title}
                      </h3>

                      <span
                        className={`px-4 py-1 rounded-full text-sm font-semibold text-white 
                        bg-gradient-to-r ${step.color} shadow-lg`}
                      >
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Box */}
        <div
          className="mt-20 bg-slate-900/80 backdrop-blur-xl rounded-3xl p-10 md:p-12 
                        text-center max-w-7xl mx-auto border border-slate-800 shadow-xl"
        >
          <p className="text-xl text-slate-300 font-medium leading-relaxed">
            We deliver complete brokerage setups with unmatched speed,
            precision, compliance, and security — ensuring your business
            launches flawlessly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs5;
