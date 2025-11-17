import React from "react";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaCogs,
  FaServer,
  FaSyncAlt,
  FaCloud,
  FaShieldAlt,
  FaPlug,
} from "react-icons/fa";

const B2CopyLaunch = () => {
  const items = [
    { icon: <FaGlobe />, text: "Full white-label deployment" },
    { icon: <FaSyncAlt />, text: "Copy trading engine configuration" },
    { icon: <FaPlug />, text: "Integration of trading platform & CRM" },
    { icon: <FaCogs />, text: "Liquidity routing & pricing setup" },
    {
      icon: <FaServer />,
      text: "Hosting infrastructure and backend management",
    },
    { icon: <FaShieldAlt />, text: "API connectivity and security layers" },
    { icon: <FaCloud />, text: "24/7 monitoring and technical support" },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 bg-[#0B0E15] text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start">
        {/* ---------------- LEFT CONTENT ---------------- */}
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Launch a Complete
            <span className="block text-cyan-300">
              B2Copy Platform with Capyngen
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-gray-300 text-lg mt-6 max-w-2xl leading-relaxed"
          >
            Capyngen Technologies UK Limited provides an end-to-end B2Copy copy
            trading setup that includes infrastructure, integrations, execution
            configuration, and continuous support for a complete system rollout.
          </motion.p>

          {/* ---------------- LIST WITHOUT BOXES ---------------- */}
          <div className="mt-12 space-y-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="text-cyan-300 text-2xl mt-1">{item.icon}</div>
                <p className="text-gray-200 text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Outro */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-gray-400 text-lg mt-14 max-w-xl"
          >
            Once a broker adopts a copy trading system, the next move is to
            decide how to expand into global markets and scale efficiently.
          </motion.p>
        </div>

        {/* ---------------- RIGHT IMAGE (Clean, No Box) ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <div className="w-full h-[420px] rounded-2xl overflow-hidden">
            <img
              src="https://picsum.photos/seed/b2global/1200/800"
              alt="Global trading technology"
              className="w-full h-full object-cover opacity-90 rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default B2CopyLaunch;
