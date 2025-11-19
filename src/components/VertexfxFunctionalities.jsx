import React from "react";
import {
  Route,
  Bot,
  Percent,
  FileBarChart,
  Sliders,
  CloudLightning,
  CheckCircle2,
  Activity,
} from "lucide-react";

const VertexFxFunctionalities = () => {
  const features = [
    {
      icon: <Route className="w-6 h-6 text-violet-400" />,
      title: "Smart Order Routing",
      description: "Intelligent routing for optimal execution paths.",
    },
    {
      icon: <Bot className="w-6 h-6 text-violet-400" />,
      title: "Algorithmic Trading",
      description: "Advanced support for automated trading strategies.",
    },
    {
      icon: <Percent className="w-6 h-6 text-violet-400" />,
      title: "Dynamic Markup Tools",
      description: "Flexible pricing management capabilities.",
    },
    {
      icon: <FileBarChart className="w-6 h-6 text-violet-400" />,
      title: "Real-time Reporting",
      description: "Instant insights into trading activities.",
    },
    {
      icon: <Sliders className="w-6 h-6 text-violet-400" />,
      title: "Advanced Dealer Room",
      description: "Sophisticated controls for market management.",
    },
    {
      icon: <CloudLightning className="w-6 h-6 text-violet-400" />,
      title: "Disaster Recovery",
      description: "Cloud hosting with failover configuration.",
    },
  ];

  return (
    <div className="bg-black w-full py-20">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="relative bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-16 overflow-hidden shadow-2xl">
          {/* Background Image & Effects */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
              alt="Global Tech Background"
              className="w-full h-full object-cover opacity-10 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/90"></div>
          </div>

          {/* Decorative Gradients */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-500 z-10"></div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl z-10"></div>
          <div className="absolute right-0 top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay z-0"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                  Key Functionalities That Make VertexFX a Leading Platform
                </h2>

                <div className="prose prose-invert prose-lg">
                  <p className="text-slate-300 leading-relaxed text-lg border-l-4 border-violet-500 pl-4">
                    Among​‍​‌‍​‍‌​‍​‌‍​‍‌ the features that VertexFX has are
                    smart order routing, algorithmic trading, dynamic markup
                    tools, real-time reporting, and advanced dealer room
                    controls.
                  </p>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    In addition, the company offers precise pricing, quick
                    execution, minimal slippage, and a system that is stable
                    most of the time. With its cloud hosting and
                    disaster-recovery configuration, VertexFX is ideal for
                    global ​‍​‌‍​‍‌​‍​‌‍​‍‌expansion.
                  </p>
                </div>
              </div>

              {/* Feature Checkmarks */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 hover:bg-slate-800/80 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-slate-200 font-medium">
                    Precise Pricing
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 hover:bg-slate-800/80 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-slate-200 font-medium">
                    Quick Execution
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 hover:bg-slate-800/80 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-slate-200 font-medium">
                    Minimal Slippage
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 bg-slate-900/80 border border-slate-800 rounded-2xl 
                hover:border-violet-500/40 hover:bg-slate-800 transition-all duration-300 
                shadow-lg hover:shadow-violet-500/10 backdrop-blur-sm"
                >
                  <div
                    className="w-12 h-12 bg-slate-950 border border-slate-800 rounded-xl 
                flex items-center justify-center mb-4 group-hover:border-violet-500/30 
                group-hover:scale-110 transition-all duration-300"
                  >
                    {feature.icon}
                  </div>

                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-violet-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-snug group-hover:text-slate-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VertexFxFunctionalities;
