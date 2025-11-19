import React from "react";
import { Check, TrendingUp, ShieldCheck } from "lucide-react";

export default function MT5ServiceWhyChoose() {
  const title = "Why Brokers Choose Capyngen for MT5 Services";
  const intro =
    "Brokers​‍​‌‍​‍‌​‍​‌‍​‍‌ are put in a position where they have to deal with latency, fragmented liquidity, and a complicated infrastructure that is difficult to manage. Capyngen Technologies UK Limited solves these problems by offering MT5 platform solutions customized to the operational needs of the broker. By availing of our services, brokers are entitled to:";

  const benefits = [
    "An entire MT5 white-label solution for a quick brokerage rollout",
    "Top-notch server configuration and backend m",
    "Infrastructure Liquidity bridge and API integration for smooth trade execution",
    "Gasoline and technical support continual through hosting and operations uninterrupted",
  ];

  const conclusion =
    "Our offerings enable brokers to concentrate on customer acquisition, trading volume, and entering new markets while the technical deployment and management are handled by Capyngen’s ​‍​‌‍​‍‌​‍​‌‍​‍‌professionals.";

  return (
    <section className="bg-black overflow-hidden py-20">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row">
        {/* Visual Side */}
        <div className="lg:w-5/12 relative min-h-[500px] lg:min-h-auto p-8 flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-[3/4]">
            {/* Photo 1 */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
              <img
                src="https://picsum.photos/seed/mt5why_main/600/800"
                alt="Brokerage Operations"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
            </div>

            {/* Decorative tech elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-blue-500/50 rounded-tl-3xl"></div>
          </div>
        </div>

        {/* Content Side */}
        <div className="lg:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h2>

          <p className="text-gray-300 text-lg mb-8 leading-relaxed border-l-4 border-blue-500 pl-6 bg-blue-500/10 py-2 rounded-r-lg">
            {intro}
          </p>

          {/* Benefits */}
          <div className="grid gap-5 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/50 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400 group-hover:text-white transition-colors" />
                  </div>
                </div>

                <p className="text-gray-300 font-medium leading-relaxed group-hover:text-white transition-colors">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
            <p className="text-gray-200 italic font-medium leading-relaxed text-center lg:text-left">
              {conclusion}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
