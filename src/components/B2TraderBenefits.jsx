import React from "react";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaGlobe,
  FaKey,
  FaChartPie,
  FaExchangeAlt,
  FaLayerGroup,
  FaPlug,
} from "react-icons/fa";

const B2TraderBenefits = () => {
  const benefits = [
    {
      icon: <FaBolt className="text-cyan-300 text-xl" />,
      text: "Super-fast order execution",
    },
    {
      icon: <FaLayerGroup className="text-cyan-300 text-xl" />,
      text: "Multi-asset trading — forex, crypto, CFDs, commodities, indices",
    },
    {
      icon: <FaKey className="text-cyan-300 text-xl" />,
      text: "Safe and secure white-label platform",
    },
    {
      icon: <FaChartPie className="text-cyan-300 text-xl" />,
      text: "Real-time reporting & analytics",
    },
    {
      icon: <FaExchangeAlt className="text-cyan-300 text-xl" />,
      text: "Smart routing & pricing engine",
    },
    {
      icon: <FaGlobe className="text-cyan-300 text-xl" />,
      text: "Deep liquidity connectivity",
    },
    {
      icon: <FaPlug className="text-cyan-300 text-xl" />,
      text: "Simple integration with fintech systems",
    },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-[#0A0D14] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* TOP HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Major Benefits of B2Trader for Brokers
          </h2>

          <div className="mx-auto mt-6 w-24 h-[3px] bg-gradient-to-r from-cyan-300 to-blue-500 rounded-full"></div>
        </motion.div>

        {/* BENEFIT STRIP LIST */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 relative">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="
                group flex items-start gap-4 
                border-l-[3px] border-cyan-400/30 pl-4
                hover:border-cyan-300 transition-all duration-300
              "
            >
              <div
                className="
                p-3 rounded-full bg-white/5 border border-white/10 
                shadow-[0_0_12px_rgba(0,255,255,0.1)]
                group-hover:border-cyan-400/40 
                transition-all duration-300
              "
              >
                {item.icon}
              </div>

              <p className="text-gray-300 text-[15.5px] leading-relaxed group-hover:text-white transition-all duration-300">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* OUTRO */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-gray-300 mt-20 max-w-4xl mx-auto text-lg leading-relaxed"
        >
          With B2Trader, brokers get a modern, scalable, multi-asset trading
          engine built for performance, reliability, and global market
          readiness.
        </motion.p>
      </div>
    </section>
  );
};

export default B2TraderBenefits;
