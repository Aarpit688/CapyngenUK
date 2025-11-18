import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaPlug, FaChartLine, FaShieldAlt } from "react-icons/fa";

const LiquidityKeyFeatures = () => {
  const features = [
    {
      icon: <FaGlobe className="text-cyan-400 text-3xl" />,
      title: "Multi-Asset Coverage",
      desc: "Connect liquidity across fiat forex, crypto, and other financial instruments.",
    },
    {
      icon: <FaPlug className="text-cyan-400 text-3xl" />,
      title: "Customizable Connectivity",
      desc: "Broker-specific flexible integration options.",
    },
    {
      icon: <FaChartLine className="text-cyan-400 text-3xl" />,
      title: "Real-Time Market Data",
      desc: "Precise and up-to-the-minute data for efficient execution and decision-making.",
    },
    {
      icon: <FaShieldAlt className="text-cyan-400 text-3xl" />,
      title: "Risk Management Tools",
      desc: "Keep track of exposure and control trading risks in a timely manner.",
    },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 bg-[#05070d] text-white relative overflow-hidden">
      {/* Ambient glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[350px] h-[350px] bg-cyan-500/15 blur-[150px] top-10 left-20"></div>
        <div className="absolute w-[450px] h-[450px] bg-blue-600/20 blur-[180px] bottom-10 right-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center  text-white"
        >
          Key Features That Set Our Liquidity Solutions Apart
        </motion.h2>

        {/* Features Row */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10
                shadow-xl hover:shadow-cyan-500/20 hover:bg-white/10 hover:border-cyan-400/30
                transition-all duration-300
              "
            >
              <div className="flex items-center gap-4 mb-3">
                {feature.icon}
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Outro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-gray-300 text-lg max-w-4xl mx-auto mt-16 leading-relaxed"
        >
          On their own, these functionalities position Capyngen as the go-to
          technology partner for brokers in search of stable and efficient
          liquidity ​‍​‌‍​‍‌​‍​‌‍​‍‌solutions.
        </motion.p>
      </div>
    </section>
  );
};

export default LiquidityKeyFeatures;
