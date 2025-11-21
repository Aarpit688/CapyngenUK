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
import { assets } from "../assets/assets";

const B2CopyFunctionalities = () => {
  const features = [
    { icon: <FaExchangeAlt />, title: "Precise on the Spot Copying of Trades" },
    { icon: <FaCogs />, title: "Automatic Adjustment of Lot Size and Risk" },
    { icon: <FaChartPie />, title: "Detailed Reporting Through KPIs" },
    { icon: <FaLink />, title: "Linking Master Accounts to Follower Ones" },
    { icon: <FaLayerGroup />, title: "Multi-Asset Trading Platform" },
    { icon: <FaDollarSign />, title: "Subscription and Follower Fee Models" },
    { icon: <FaBolt />, title: "Open Banking Fintech Systems Compatible API" },
    { icon: <FaCloud />, title: "Trusted Cloud Infrastructure and Analytics" },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 bg-[#0B0F17] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading Block */}
        <div className="lg:flex lg:items-end lg:justify-between gap-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center">
              Key Functionalities of B2Copy Copy Trading Platform
            </h2>
          </div>
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
          className="mt-20 lg:h-150 rounded-2xl overflow-hidden"
        >
          <img
            src={assets.b2copy05}
            alt="Trading analytics"
            className="w-full h-full object-contain object-center"
          />
        </motion.div>

        {/* OUTRO */}
        <p className="text-gray-300 text-xl mt-10 text-center mx-auto max-w-7xl leading-relaxed">
          B2Copy enables brokers to create an environment of social trading that
          is free from hassle and is stable for the ​‍​‌‍​‍‌​‍​‌‍​‍‌users.
        </p>
      </div>
    </section>
  );
};

export default B2CopyFunctionalities;
