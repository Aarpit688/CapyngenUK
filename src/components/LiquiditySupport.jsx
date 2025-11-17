import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaBuilding } from "react-icons/fa";

const LiquiditySupport = () => {
  const blocks = [
    {
      icon: <FaRocket className="text-cyan-400 text-3xl" />,
      title: "For Startups",
      desc: "As a consequence of the simple setup of a liquidity provider, scalable APIs, and pre-integrated trading technology, startups are enabled to have a shorter time-to-market.",
    },
    {
      icon: <FaBuilding className="text-blue-400 text-3xl" />,
      title: "For Established Brokers",
      desc: "Established brokers, through liquidity bridges, aggregation solutions, and connectivity enhancements, can energize execution, lessen operational risks, and keep competitive spreads at a level of their choice.",
    },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 bg-[#06090f] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 blur-[160px] top-10 right-20"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-700/10 blur-[190px] bottom-10 left-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: IMAGE BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl shadow-black/40 border border-white/10">
            <img
              src="https://picsum.photos/seed/liquiditySupport/800/900"
              alt="Capyngen Liquidity Support"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Subtle glow behind image */}
          <div className="absolute -z-10 inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-2xl"></div>
        </motion.div>

        {/* RIGHT: TEXT + CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-cyan-300 to-blue-500 text-transparent bg-clip-text">
            How Capyngen Supports Startups and Established Brokers
          </h2>

          {/* Paragraph */}
          <p className="text-gray-300 text-lg leading-relaxed">
            In​‍​‌‍​‍‌​‍​‌‍​‍‌ each case where you are either creating a
            brand-new brokerage or enhancing the existing system, Capyngen
            delivers tailored solutions for liquidity providers that meet your
            requirements.
          </p>

          {/* CARDS */}
          <div className="grid gap-6">
            {blocks.map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
                  p-6 bg-[#0c1521]/60 backdrop-blur-xl rounded-xl
                  border border-white/10 shadow-lg
                  hover:border-cyan-400/30 hover:shadow-cyan-500/10
                  transition-all duration-300
                "
              >
                <div className="flex items-center gap-4 mb-3">
                  {block.icon}
                  <h3 className="text-xl font-semibold text-cyan-300">
                    {block.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {block.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Outro */}
          <p className="text-gray-300 text-lg leading-relaxed mt-6">
            Moreover, we offer brokerage firms with liquidity solutions of the
            highest institutional-grade level, thereby ensuring that every
            single trade is carried out with accuracy and stability, thus
            providing your clients a top-notch trading
            ​‍​‌‍​‍‌​‍​‌‍​‍‌experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LiquiditySupport;
