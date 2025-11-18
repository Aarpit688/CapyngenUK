import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaChartLine, FaServer } from "react-icons/fa";

const LiquidityBenefits = () => {
  const benefits = [
    {
      icon: <FaBolt className="text-cyan-400 text-4xl drop-shadow-lg" />,
      title: "Seamless​‍​‌‍​‍‌​‍​‌‍​‍‌ Liquidity Provider Integration",
      desc: "Easily integrate your trading system with several liquidity providers that cover forex and crypto markets.",
    },
    {
      icon: <FaChartLine className="text-cyan-400 text-4xl drop-shadow-lg" />,
      title: "High-Performance Trading",
      desc: "Keep slippage at a minimum and make sure that the price is correct by using real-time liquidity updates.",
    },
    {
      icon: <FaServer className="text-cyan-400 text-4xl drop-shadow-lg" />,
      title: "Scalable and Flexible Technology",
      desc: "The technology behind our offerings continues to evolve with your brokerage, thus it is capable of managing high trading volumes and the addition of new asset classes.",
    },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#03060c] via-[#0a0f1b] to-[#03060c] text-white relative overflow-hidden">
      {/* Floating Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-cyan-400 rounded-full blur-sm animate-pulse top-10 left-20 opacity-40"></div>
        <div className="absolute w-3 h-3 bg-blue-500 rounded-full blur-md animate-ping bottom-16 right-28 opacity-30"></div>
        <div className="absolute w-2 h-2 bg-cyan-300 rounded-full blur-sm animate-pulse bottom-32 left-1/3 opacity-30"></div>

        {/* Glow Blobs */}
        <div className="absolute w-[380px] h-[380px] bg-cyan-700/20 blur-[180px] -top-20 -left-10"></div>
        <div className="absolute w-[450px] h-[450px] bg-indigo-600/20 blur-[200px] bottom-0 right-0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-white leading-normal"
        >
          Key Benefits of Capyngen’s Liquidity Provider Solutions
        </motion.h2>

        {/* Underline Line */}
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"></div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="
                relative p-7 rounded-2xl bg-[#0f1625]/60 border border-white/10 backdrop-blur-lg 
                shadow-lg overflow-hidden 
                hover:shadow-cyan-500/30 hover:border-cyan-400/40 
                transition-transform duration-300 hover:-translate-y-2 group
              "
            >
              {/* Shine overlay */}
              <div
                className="
                absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 
                group-hover:opacity-10 transition-opacity duration-300
              "
              />

              {/* Circular glow on hover */}
              <div
                className="
                absolute w-32 h-32 rounded-full bg-cyan-400/10 blur-2xl -top-10 -right-10 
                opacity-0 group-hover:opacity-50 transition-opacity duration-300
              "
              />

              <div className="mb-5">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
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
          className="text-gray-300 text-lg max-w-5xl mx-auto text-center mt-16 leading-relaxed"
        >
          The above-mentioned benefits are what brokers need in order to provide
          top-notch client experiences, venture into new markets and be able to
          maintain trading conditions that are ​‍​‌‍​‍‌​‍​‌‍​‍‌competitive.
        </motion.p>
      </div>
    </section>
  );
};

export default LiquidityBenefits;
