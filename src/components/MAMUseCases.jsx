import React from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaBuilding,
  FaServer,
  FaGlobe,
  FaShieldAlt,
  FaCogs,
} from "react-icons/fa";
import { assets } from "../assets/assets";

export default function MAMUseCases() {
  const enterpriseBenefits = [
    { icon: <FaServer />, text: "Enterprise routing" },
    { icon: <FaGlobe />, text: "Global hosting" },
    { icon: <FaCogs />, text: "Deep liquidity connectivity" },
    { icon: <FaShieldAlt />, text: "Secure architecture" },
    { icon: <FaBuilding />, text: "Automated monitoring" },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-[#080B12] text-white relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute -top-20 -left-10 w-[400px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-600/10 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            How Brokers of All Sizes Use the MAM System
          </h2>
        </motion.div>

        {/* LEFT → Startups */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src={assets.mam13}
              alt="Startup Brokers"
              className="rounded-2xl shadow-lg shadow-black/30 border border-white/10 w-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <FaRocket className="text-cyan-300 text-3xl" />
              <h3 className="text-3xl font-semibold">For Startups</h3>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Startups employ MAM to facilitate a rapid launch, keep the
              infrastructure costs low, and carry out professional
              fund-management activities right from the first day.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              By a single click of allocation, hosting, and available
              integrations, newly licensed brokers make a smooth entry into the
              market.
            </p>
          </motion.div>
        </div>

        {/* RIGHT → Large Brokerages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <FaBuilding className="text-cyan-300 text-3xl" />
              <h3 className="text-3xl font-semibold">
                Large Brokerages & Institutions
              </h3>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Established brokers implement MAM to enhance their sophisticated
              allocation strategies, multi-portfolio management, and combined
              high-volume and low-frequency execution. They enjoy the advantages
              of:
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {enterpriseBenefits.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-[#0F141C] border border-cyan-400/20 rounded-xl px-5 py-4 shadow-[0_0_18px_rgba(0,200,255,0.15)]"
                >
                  <div className="text-cyan-300 text-xl">{item.icon}</div>
                  <p className="text-gray-300 text-[15px]">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src={assets.mam14}
              alt="Institutional Brokers"
              className="rounded-2xl shadow-lg shadow-black/30 border border-white/10 w-full object-cover"
            />
          </motion.div>
        </div>

        {/* Outro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 text-gray-300 text-lg leading-relaxed max-w-5xl mx-auto"
        >
          Such an arrangement guarantees stability over the long run for
          large-scale ​‍​‌‍​‍‌​‍​‌‍​‍‌operations.
        </motion.p>
      </div>
    </section>
  );
}
