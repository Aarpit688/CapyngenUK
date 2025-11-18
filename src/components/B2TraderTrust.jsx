import React from "react";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
  FaExchangeAlt,
  FaPlug,
} from "react-icons/fa";

const B2TraderTrust = () => {
  const points = [
    {
      icon: <FaBolt className="text-cyan-300 text-2xl" />,
      text: "Enable high-frequency order execution",
    },
    {
      icon: <FaChartLine className="text-cyan-300 text-2xl" />,
      text: "Provide real-time market data and liquidity routing",
    },
    {
      icon: <FaExchangeAlt className="text-cyan-300 text-2xl" />,
      text: "Allow seamless crypto + forex trading",
    },
    {
      icon: <FaPlug className="text-cyan-300 text-2xl" />,
      text: "Fast integration with third-party systems",
    },
    {
      icon: <FaShieldAlt className="text-cyan-300 text-2xl" />,
      text: "Intelligent risk tools and compliance support",
    },
    {
      icon: <FaCloud className="text-cyan-300 text-2xl" />,
      text: "Globally scalable with minimal downtime",
    },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-[#090C12] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Why Brokers Trust B2Trader Technology
          </h2>

          <div className="h-[2px] w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mt-6 mb-10" />

          <div className="space-y-8">
            {points.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
              >
                <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-cyan-400/40 transition-all duration-300 shadow-[0_0_12px_rgba(0,255,255,0.08)]">
                  {item.icon}
                </div>

                <p className="text-gray-300 text-[15.5px] leading-relaxed group-hover:text-white transition-all duration-300">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-300 mt-10 text-lg leading-relaxed">
            Moreover, its multi-asset features and sophisticated trading engine
            position it as a perfect solution for brokers, whether they are new
            or have been around for a ​‍​‌‍​‍‌​‍​‌‍​‍‌while.
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* soft glow */}
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-cyan-500/10 blur-3xl"></div>
          <div className="absolute bottom-0 -right-10 w-64 h-64 bg-blue-500/10 blur-3xl"></div>

          <img
            src="https://picsum.photos/seed/b2ttrust/900/600"
            alt="B2Trader Technology"
            className="rounded-2xl w-full object-cover border border-white/10 shadow-[0_0_40px_rgba(0,255,255,0.12)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default B2TraderTrust;
