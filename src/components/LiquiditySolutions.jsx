import React from "react";
import { motion } from "framer-motion";
import { FaCodeBranch, FaNetworkWired, FaPlug } from "react-icons/fa";

const LiquiditySolutions = () => {
  const items = [
    {
      number: "01",
      icon: <FaCodeBranch className="text-blue-400 text-3xl" />,
      title: "Liquidity Bridge & Aggregation Solutions",
      desc: "Create a single liquidity source by combining multiple liquidity sources so that better spreads and a deeper market depth can be ensured.",
    },
    {
      number: "02",
      icon: <FaNetworkWired className="text-blue-400 text-3xl" />,
      title: "Broker Liquidity Solutions",
      desc: "A full package of services for brokers who want to integrate institutional-grade liquidity into their trading platforms.",
    },
    {
      number: "03",
      icon: <FaPlug className="text-blue-400 text-3xl" />,
      title: "Liquidity Provider API Integration Service",
      desc: "Make a smooth connection between your trading systems and the external liquidity providers for real-time execution.",
    },
  ];

  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 bg-[#05070c] text-white overflow-hidden">
      {/* Light streaks */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent rotate-12"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/5 via-transparent to-transparent -rotate-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE: Title Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          {/* Vertical Accent Line */}
          <div className="w-2 h-24 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full mb-6"></div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-cyan-300 to-blue-500 text-transparent bg-clip-text">
            Comprehensive Liquidity Provider Technology Solutions
          </h2>

          {/* Intro Paragraph */}
          <p className="text-gray-300 mt-6 text-lg leading-relaxed max-w-xl">
            Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ is providing liquidity solutions through
            end-to-end means to brokers which are essentially designed to
            satisfy the requirements of the modern trading environment. Our
            knowledge embraces:
          </p>
        </motion.div>

        {/* RIGHT SIDE: Premium Numbered Cards */}
        <div className="space-y-10">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="
                relative p-8 rounded-2xl bg-[#0c1220]/50 backdrop-blur-xl
                border border-white/10 shadow-xl overflow-hidden
                hover:border-blue-400/30 hover:shadow-blue-500/20
                transition-all duration-300
              "
            >
              {/* Number in Background */}
              <span className="absolute -top-4 right-4 text-7xl font-black text-white/5 select-none">
                {item.number}
              </span>

              {/* Icon */}
              <div className="mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-blue-300 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Outro */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center text-gray-300 text-lg mt-20 leading-relaxed"
      >
        We cooperate with your team in coming up with integration strategies
        which are not only tailored to your needs but also ensure smooth
        connectivity and operational efficiency. Our solutions are a good fit
        for both startups and mature brokers, thus, offering them the liquidity
        provider connectivity which is flexible, dependable, and
        ​‍​‌‍​‍‌​‍​‌‍​‍‌scalable.
      </motion.p>
    </section>
  );
};

export default LiquiditySolutions;
