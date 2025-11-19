import React from "react";
import { Check, Gift } from "lucide-react";

export default function Careers3() {
  const benefits = [
    "Performance bonuses",
    "Remote and hybrid work models",
    "Health and wellness support",
    "Exposure to international projects",
    "Programs for employee growth",
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* --- Aurora Background --- */}
      <div className="absolute inset-0 -z-10">
        <div className="aurora-bg opacity-40"></div>
      </div>

      {/* Slight Glass Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent/20 to-black/60 backdrop-blur-xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1 mt-12 lg:mt-0">
            {/* Soft Glow Background */}
            <div className="absolute top-4 -left-4 w-full h-full bg-blue-500/20 blur-xl rounded-3xl -z-10"></div>

            <img
              src="https://picsum.photos/800/600?random=10"
              alt="Employee wellbeing and growth"
              className="shadow-2xl w-full object-cover h-80 lg:h-full border border-white/10"
            />

            {/* Decorative badge */}
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl mb-8 leading-tight">
              Competitive Compensation & Benefits
            </h2>

            <div className="bg-white/10 backdrop-blur-xl shadow-xl border border-white/10 p-6 sm:p-8">
              <ul className="space-y-5">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <span className="ml-4 text-lg text-gray-200 font-medium">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* --- Aurora CSS --- */}
      <style>{`
        .aurora-bg {
          background: radial-gradient(circle at 20% 20%, #4f46e5, transparent 40%),
                      radial-gradient(circle at 80% 10%, #06b6d4, transparent 40%),
                      radial-gradient(circle at 50% 80%, #ec4899, transparent 50%);
          filter: blur(120px);
          width: 100%;
          height: 100%;
        }
      `}</style>
    </section>
  );
}
