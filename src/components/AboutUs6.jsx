import React from "react";
import { Check, Trophy, Star, TrendingUp } from "lucide-react";

export const AboutUs6 = () => {
  const inclusions = [
    "Company Incorporation",
    "Corporate Bank Account",
    "Forex Website",
    "Complete CRM (Admin, User Portal, IB, MAM, PAMM, Copy Trading)",
    "MT5 Admin Server with Broker Branding",
    "Liquidity & Technology Connections",
    "Hybrid A/B Book Setup",
  ];

  const benefits = [
    "Zero Monthly Cost — Lifetime",
    "Sales & Support Staff for 6 Months",
    "Marketing & Lead Generation for 6 Months",
    "Guaranteed Growth: 400–2000 Traders in 3 Months",
    "Guaranteed Income: $1000–$8000 Monthly After 3 Months",
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Smooth Aurora Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[70vw] h-[70vw] bg-purple-600/15 blur-[180px]"></div>
        <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-blue-500/15 blur-[160px]"></div>
        <div className="absolute top-1/2 left-0 w-[50vw] h-[50vw] bg-rose-500/15 blur-[180px]"></div>
      </div>

      <div className="relative max-w-[90vw] mx-auto">
        {/* Main Glass Card */}
        <div className="relative rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden">
          {/* Soft Shine */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none"></div>

          <div className="lg:grid lg:grid-cols-12">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-5 p-10 sm:p-14 border-b lg:border-b-0 lg:border-r border-white/10">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
                Forex Broker Startup Package
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ provides a complete, premium brokerage
                build-out with everything included — an enterprise-grade setup
                valued at:
              </p>

              {/* Price */}
              <div className="flex items-baseline mb-10">
                <span className="text-6xl font-extrabold text-white tracking-tight leading-none">
                  $17,999
                </span>
              </div>

              {/* Image */}
              <div className="relative rounded-xl overflow-hidden mt-auto shadow-lg border border-white/10 group">
                <img
                  src="https://picsum.photos/600/400?random=501"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-medium text-sm tracking-wide">
                    All-Inclusive Setup Package
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-7 p-10 sm:p-14">
              {/* Inclusions */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-5 flex items-center">
                  <div className="bg-white/10 border border-white/20 p-1.5 rounded-md mr-3">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  What’s Included:
                </h3>

                <ul className="space-y-3">
                  {inclusions.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-300 text-lg leading-relaxed"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-yellow-400/20 shadow-[0_0_30px_-10px_rgba(255,215,0,0.2)]">
                <h3 className="text-xl font-bold text-yellow-200 mb-6 flex items-center">
                  <Trophy className="w-6 h-6 text-yellow-300 mr-3" />
                  Additional Benefits
                </h3>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    {benefits.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <Star className="w-4 h-4 text-yellow-300 mt-1 mr-2" />
                        <span className="text-gray-100 text-md">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {benefits.slice(3).map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <TrendingUp className="w-4 h-4 text-green-400 mt-1 mr-2" />
                        <span className="text-gray-100 text-md font-semibold">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="py-8 text-center border-t border-white/10 flex items-center gap-6">
            <p className="text-gray-400 text-lg italic leading-relaxed flex-1">
              This package makes Capyngen one of the most advanced yet
              affordable brokerage technology providers globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs6;
