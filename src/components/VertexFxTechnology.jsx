import React from "react";
import {
  Globe,
  BarChart3,
  ShieldCheck,
  Zap,
  Layers,
  Code,
  Activity,
  Bitcoin,
  TrendingUp,
} from "lucide-react";

const VertexFxTechnology = () => {
  const benefits = [
    {
      icon: <Globe className="w-6 h-6 text-violet-400" />,
      text: "High-speed​‍​‌‍​‍‌​‍​‌‍​‍‌ global trading network",
    },
    {
      icon: <Activity className="w-6 h-6 text-violet-400" />,
      text: "Stable liquidity bridge connectivity",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-violet-400" />,
      text: "Powerful dealer room and risk tools",
    },
    {
      icon: <Code className="w-6 h-6 text-violet-400" />,
      text: "Strong API and automation support",
    },
    {
      icon: <Layers className="w-6 h-6 text-violet-400" />,
      text: "Multi-asset trading from one platform",
    },
  ];

  return (
    <div className="bg-black w-full py-20">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up relative">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-b from-violet-900/10 to-transparent blur-3xl pointer-events-none"></div>

        {/* Why Brokers Trust Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-center lg:text-left text-3xl md:text-4xl font-bold text-white">
              Why Brokers Trust VertexFX Technology
            </h2>
            <div className="prose prose-invert prose-lg">
              <p className="text-slate-300 leading-relaxed text-lg">
                VertexFX​‍​‌‍​‍‌​‍​‌‍​‍‌ was designed to be fast, dependable,
                and capable of multi-asset trading. It supports forex, CFDs,
                indices, commodities, crypto, and various other instruments. Its
                broker-side configuration can scale globally without additional
                infrastructure.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                Low-latency execution, dependable liquidity routing, and a
                secure backend create the ideal environment for high-volume
                ​‍​‌‍​‍‌​‍​‌‍​‍‌trading.
              </p>
            </div>
          </div>

          {/* Right Visual Side */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group min-h-80 h-full">
              {/* Background Image */}
              <div className="absolute inset-0 bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
                  alt="Global Network Infrastructure"
                  className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-[20s] ease-linear"
                />
                <div className="absolute inset-0 bg-violet-900/20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950"></div>
              </div>

              {/* Floating Glass Cards */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-6 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Multi-Asset Capable
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Trading infrastructure for modern markets
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 relative z-10">
                  {/* Forex */}
                  <div className="p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl hover:bg-slate-800/60 transition-colors flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-slate-200 font-semibold text-sm">
                      Forex
                    </span>
                  </div>

                  {/* CFDs */}
                  <div className="p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl hover:bg-slate-800/60 transition-colors flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/20 rounded-lg">
                      <BarChart3 className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-slate-200 font-semibold text-sm">
                      CFDs & Indices
                    </span>
                  </div>

                  {/* Crypto */}
                  <div className="p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl hover:bg-slate-800/60 transition-colors flex items-center gap-3">
                    <div className="p-2 bg-amber-500/20 rounded-lg">
                      <Bitcoin className="w-5 h-5 text-amber-400" />
                    </div>
                    <span className="text-slate-200 font-semibold text-sm">
                      Crypto
                    </span>
                  </div>

                  {/* Commodities */}
                  <div className="p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl hover:bg-slate-800/60 transition-colors flex items-center gap-3">
                    <div className="p-2 bg-rose-500/20 rounded-lg">
                      <Layers className="w-5 h-5 text-rose-400" />
                    </div>
                    <span className="text-slate-200 font-semibold text-sm">
                      Commodities
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Major Benefits of Choosing VertexFX
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-slate-900/80 border border-slate-800 hover:border-violet-500/50 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/5 flex flex-col h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/5 rounded-full -mr-10 -mt-10 group-hover:bg-violet-500/10 transition-colors"></div>

                <div className="w-12 h-12 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:border-violet-500/30 transition-colors relative z-10">
                  {benefit.icon}
                </div>

                <p className="text-white font-medium text-lg leading-snug flex-1 relative z-10">
                  {benefit.text}
                </p>
              </div>
            ))}

            {/* Closing Statement Card */}
            <div className="lg:col-span-1 relative rounded-xl overflow-hidden flex items-center justify-center text-center p-8 border border-violet-500/30 shadow-lg shadow-violet-900/10 group">
              <img
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop"
                alt="Abstract Tech Background"
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-violet-900/80 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

              <div className="relative z-10 flex flex-col items-center">
                <p className="text-white text-lg font-light italic leading-relaxed mb-4">
                  "With the help of these features, brokers can go worldwide
                  with reliable ​‍​‌‍​‍‌​‍​‌‍​‍‌tech."
                </p>
                <div className="h-1 w-12 bg-violet-400 rounded-full opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VertexFxTechnology;
