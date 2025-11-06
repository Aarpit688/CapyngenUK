import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 500, label: "Professionals" },
  { value: 10, label: "Years" },
  { value: 10, label: "Licenses" },
  { value: 10, label: "Offices" },
  { value: 24, suffix: "/7", label: "Customer Support" },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="w-full bg-black pb-14 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-2xl p-px bg-linear-to-br from-fuchsia-500/70 via-indigo-500/70 to-cyan-400/70 shadow-[0_8px_20px_rgba(99,102,241,0.35)] hover:shadow-[0_8px_26px_rgba(99,102,241,0.5)] transition-transform duration-300 hover:scale-[1.04]"
          >
            <div className="rounded-2xl h-full bg-black/70 backdrop-blur-xl border border-white/10 p-8 flex flex-col items-center justify-center gap-3">
              <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator=","
                  />
                ) : (
                  0
                )}
                {stat.suffix && (
                  <span className="text-5xl md:text-6xl font-extrabold">
                    {stat.suffix}
                  </span>
                )}
              </h2>
              <p className="text-gray-300 text-sm md:text-base font-semibold uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
