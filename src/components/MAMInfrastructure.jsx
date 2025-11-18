import React from "react";
import { motion } from "framer-motion";
import {
  FaServer,
  FaPlug,
  FaCogs,
  FaRoute,
  FaChartLine,
  FaHeadset,
} from "react-icons/fa";

export default function MAMInfrastructure() {
  const features = [
    { icon: <FaServer />, text: "Setting up a white-label platform" },
    { icon: <FaRoute />, text: "Integrating liquidity bridge & routing" },
    { icon: <FaCogs />, text: "Managing backend & server" },
    { icon: <FaPlug />, text: "API and CRM connectivity" },
    { icon: <FaChartLine />, text: "Multi-asset trading platform" },
    { icon: <FaHeadset />, text: "24/7 support & infrastructure monitoring" },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 bg-[#06080D] text-white relative overflow-hidden">
      {/* BG Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-0 w-[480px] h-[480px] bg-cyan-400/10 blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-blue-500/10 blur-[170px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* HEADING SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
            Build a Complete MAM-Based Brokerage Infrastructure
          </h2>

          {/* Accent Line */}
          <div className="mx-auto mt-6 w-40 h-[3px] rounded-full bg-gradient-to-r from-cyan-300 to-blue-500"></div>

          <p className="text-gray-300 max-w-3xl mx-auto mt-8 text-lg leading-relaxed">
            Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ offers a comprehensive MAM system to cover
            all client needs, such as:
          </p>
        </motion.div>

        {/* NEW SECTION — Image + Content Pair 1 */}
        <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=80"
              className="rounded-2xl border border-white/10 shadow-2xl shadow-black/40"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent blur-xl pointer-events-none"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold mb-5 text-white">
              Institutional-Grade MAM Architecture
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              The MAM deployment includes enterprise-grade infrastructure —
              secure routing, multi-server redundancy, global routing paths, and
              a powerful allocation engine designed for high-volume brokerages.
            </p>
          </motion.div>
        </div>

        {/* NEW SECTION — Image + Content Pair 2 (Reversed) */}
        <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h3 className="text-3xl font-bold mb-5 text-white">
              Optimized for Multi-Account Trading
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              Brokers rely on the MAM system for adaptive allocation methods,
              real-time execution, and scalable account management — ensuring
              traders, money-managers, and institutions operate seamlessly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-1 md:order-2"
          >
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1100&q=80"
              className="rounded-2xl border border-white/10 shadow-2xl shadow-black/40"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent blur-xl pointer-events-none"></div>
          </motion.div>
        </div>

        {/* FEATURE CARDS — redesigned, sharper */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="
                relative p-8 rounded-2xl bg-[#0B1018]/90 
                border border-white/10 shadow-xl shadow-black/40
                backdrop-blur-xl
                hover:shadow-cyan-500/20 hover:border-cyan-400/30
                transition-all duration-300 group
              "
            >
              {/* Glow */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-80 transition-all duration-500"></div>

              <div className="text-3xl text-cyan-300 mb-4">{feature.icon}</div>

              <p className="text-gray-200 text-lg leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* OUTRO */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mt-20"
        >
          We provide MAM technology to brokers that form the basis of a sound,
          scalable and efficient environment for global expansion and
          multi-account ​‍​‌‍​‍‌​‍​‌‍​‍‌trading.
        </motion.p>
      </div>
    </section>
  );
}
