import React from "react";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaCogs,
  FaChartLine,
  FaTachometerAlt,
  FaRoute,
  FaPlug,
} from "react-icons/fa";

export default function MAMCapabilities() {
  const capabilities = [
    { icon: <FaBolt />, text: "Real-time multi-account allocation" },
    { icon: <FaCogs />, text: "Customizable allocation rules" },
    { icon: <FaChartLine />, text: "Multi-asset execution engine" },
    { icon: <FaTachometerAlt />, text: "Live monitoring & reporting" },
    { icon: <FaRoute />, text: "Trade-routing automation" },
    { icon: <FaPlug />, text: "CRM & fintech API integration" },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-[#081018] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-20 -left-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-blue-500/10 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            Key Capabilities That Make MAM a Top-Tier Solution
          </h2>
        </motion.div>

        {/* Capability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-[#0D141D]/70 backdrop-blur-xl rounded-xl border border-white/10 
                         shadow-[0_0_25px_rgba(0,200,255,0.15)] hover:shadow-[0_0_35px_rgba(0,200,255,0.25)]
                         transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-cyan-300 text-3xl mb-4">{item.icon}</div>
              <p className="text-white text-xl leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Outro text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed"
        >
          MAM is becoming the most attractive option for brokers who are
          spreading their business in the global markets due to its redundancy,
          security layers, and hosting ​‍​‌‍​‍‌​‍​‌‍​‍‌worldwide.
        </motion.p>
      </div>
    </section>
  );
}
