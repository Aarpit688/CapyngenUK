import React, { useEffect } from "react";
import { motion } from "framer-motion";

/* ---------------- Floating Particles ---------------- */
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <span
          key={i}
          className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-60 blur-[2px] animate-floatParticle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        ></span>
      ))}
    </div>
  );
};

/* ---------------- Feature Icon ---------------- */
const FeatureIcon = ({ path }) => (
  <div className="flex-shrink-0 bg-cyan-900/30 text-cyan-300 rounded-xl h-14 w-14 flex items-center justify-center border border-cyan-500/20 backdrop-blur-md shadow-[0_0_12px_rgba(0,200,255,0.15)]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  </div>
);

/* ---------------- Main Component ---------------- */

const B2CopyFeatures = () => {
  const features = [
    {
      title: "B2Copy White-Label Copy Trading Platform",
      description:
        "B2Copy offers a fully branded white-label solution that allows brokers to launch a full social and copy trading experience with custom branding and flexible configurations.",
      iconPath:
        "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17",
    },
    {
      title: "Multi-Account & Multi-Asset Copy Trading",
      description:
        "B2Copy is a multi-asset copy trading platform that supports forex, crypto, commodities, indices, and CFDs. This enables brokers to offer multi-asset copy trading with exact trade mirroring across accounts.",
      iconPath:
        "M4 7v10m16-10v10M6 7h2m10 0h2M6 17h2m10 0h2M12 7v10M10 7h4m-4 5h4m-4 5h4",
    },
    {
      title: "Real-Time Copy Execution Engine",
      description:
        "Capyngen is upgrading B2Copy's high-speed execution engine with the integration that allows for instant trade syncing, accurate lot allocation, and minimal ​‍​‌‍​‍‌​‍​‌‍​‍‌slippage.",
      iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
    },
  ];

  return (
    <section className="relative py-20 px-6 bg-[#05070d] text-white overflow-hidden">
      {/* Floating particle background */}
      <FloatingParticles />

      <div className="absolute inset-0 bg-gradient-to-b from-cyan-200/5 via-transparent to-blue-300/5 pointer-events-none"></div>

      {/* Container */}
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            What Makes B2Copy Essential for Brokers?
          </h2>

          <p className="mt-6 text-xl text-gray-300 leading-relaxed">
            B2Copy​‍​‌‍​‍‌​‍​‌‍​‍‌ platform is a trading system with copying
            functionality. B2Copy can be integrated with a trading platform or
            CRM product to provide your clients with automated and synchronized
            trading.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed text-xl">
            B2copy is built on the fast, low latencies matching engine of
            B2Broker to offer multiaccount control with advanced role management
            and seamless integration with broker CRM and trading platforms.
          </p>
        </motion.div>
        {/* Feature List */}
        <div className="mt-16 space-y-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 items-start group"
            >
              {/* 3D tilt + glow hover wrapper */}
              <motion.div
                whileHover={{ rotateX: 8, rotateY: -8, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="transform-gpu"
              >
                <FeatureIcon path={feature.iconPath} />
              </motion.div>

              <div>
                <h4 className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h4>
                <p className="mt-2 text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Animations */}
      <style>{`
        @keyframes floatParticle {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.7; }
          100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
};

export default B2CopyFeatures;
