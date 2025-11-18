import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaLayerGroup, FaRoute, FaLock } from "react-icons/fa";

const B2TraderUnderstanding = () => {
  const features = [
    {
      icon: <FaBolt className="text-cyan-300 text-xl" />,
      label: "Rapid Execution",
    },
    {
      icon: <FaLayerGroup className="text-cyan-300 text-xl" />,
      label: "Multi-Asset Trading",
    },
    {
      icon: <FaRoute className="text-cyan-300 text-xl" />,
      label: "Smart Order Routing",
    },
    {
      icon: <FaLock className="text-cyan-300 text-xl" />,
      label: "Automated Risk Control",
    },
  ];

  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 bg-[#03060d] text-white overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute w-[450px] h-[450px] bg-cyan-500/20 blur-[180px] top-0 -left-20"></div>
        <div className="absolute w-[380px] h-[380px] bg-blue-700/20 blur-[150px] bottom-0 right-0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-extrabold leading-snug  text-white">
            Understanding B2Trader and Why Brokers Choose It
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            The​‍​‌‍​‍‌​‍​‌‍​‍‌ B2Trader trading platform is engineered for
            rapid execution, multi-asset trading, and extensive liquidity
            connectivity. It provides a trading engine of industrial grade,
            intelligent order routing, automated risk control, and a variety of
            integration options to brokers.
          </p>

          {/* FEATURE TAGS */}
          <div className="flex flex-wrap gap-4 mt-4">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  flex items-center gap-2 px-4 py-2 
                  rounded-full bg-white/5 backdrop-blur-xl border border-white/10
                  hover:border-cyan-400/40 hover:shadow-cyan-500/30 
                  transition-all duration-300 cursor-default
                "
              >
                {f.icon}
                <span className="text-gray-200 text-lg">{f.label}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            B2Trader is fully compatible with CRMs, liquidity providers, payment
            processors, KYC systems, and fintech tools, thus being the most
            attractive option for brokers who prioritize speed, transparency,
            and easy system ​‍​‌‍​‍‌​‍​‌‍​‍‌automation.
          </p>
        </motion.div>

        {/* RIGHT IMAGE BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://picsum.photos/seed/b2trader/700/900"
            alt="B2Trader Trading Technology"
            className="rounded-md w-full h-full object-cover shadow-2xl shadow-black/40 border border-white/10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default B2TraderUnderstanding;
