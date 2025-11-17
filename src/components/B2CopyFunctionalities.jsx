import React from "react";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaExchangeAlt,
  FaChartPie,
  FaLink,
  FaLayerGroup,
  FaDollarSign,
  FaCloud,
  FaCogs,
} from "react-icons/fa";

const B2CopyFunctionalities = () => {
  const features = [
    { icon: <FaExchangeAlt />, title: "Instant Trade Copying" },
    { icon: <FaCogs />, title: "Automatic Lot & Risk Adjustment" },
    { icon: <FaChartPie />, title: "KPI-Based Performance Reporting" },
    { icon: <FaLink />, title: "Master–Follower Account Linking" },
    { icon: <FaLayerGroup />, title: "Multi-Asset Strategy Support" },
    { icon: <FaDollarSign />, title: "Subscription & Fee Models" },
    { icon: <FaBolt />, title: "Open Banking Compatible API" },
    { icon: <FaCloud />, title: "Cloud-Optimized Infrastructure" },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 bg-[#0B0F17] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading Block */}
        <div className="lg:flex lg:items-end lg:justify-between gap-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Key Functionalities of
              <span className="block text-cyan-300">
                B2Copy Copy Trading Platform
              </span>
            </h2>

            <p className="text-gray-300 text-lg mt-5 max-w-2xl">
              A powerful system enabling brokers to deliver a complete, stable
              and high-performance social trading experience for
              ‌‍​‍‍​‍‍‌​‍​‍‌​‍​‍‌retail & professional users.
            </p>
          </div>

          {/* Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block w-[320px] h-[220px] flex-shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-lg"
          >
            <img
              src="https://picsum.photos/seed/b2copy/800/500"
              alt="Copy trading dashboard"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-[#101623] rounded-xl p-8 border border-white/5 
                         hover:border-cyan-400/40 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.25)]"
            >
              {/* Icon Container */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-lg 
                              bg-cyan-500/10 text-cyan-300 text-2xl mb-6 group-hover:bg-cyan-500/20 
                              transition-all"
              >
                {feat.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {feat.title}
              </h3>

              {/* Decorative Label */}
              <div className="h-0.5 w-10 bg-cyan-400/50 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Full Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-2xl overflow-hidden border border-white/10 shadow-xl"
        >
          <img
            src="https://picsum.photos/seed/trading/1200/600"
            alt="Trading analytics"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* OUTRO */}
        <p className="text-gray-300 text-lg mt-10 text-center mx-auto max-w-4xl leading-relaxed">
          B2Copy allows brokers to create a stable, efficient, and seamless
          social trading environment—helping users copy experienced traders and
          mirror strategies without ‌‍​‍‍​‍‍‌​‍​‍‌​‍​‍‌complex setups or delays.
        </p>
      </div>
    </section>
  );
};

export default B2CopyFunctionalities;
