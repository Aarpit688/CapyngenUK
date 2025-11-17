import React from "react";
import { motion } from "framer-motion";
import { FaPlug, FaExchangeAlt, FaCodeBranch, FaServer } from "react-icons/fa";

const LiquidityConclusion = () => {
  const items = [
    {
      icon: <FaExchangeAlt className="text-cyan-300 text-3xl" />,
      text: "Liquidity integration for forex and crypto brokers",
    },
    {
      icon: <FaPlug className="text-cyan-300 text-3xl" />,
      text: "API connectivity and trading platform integration",
    },
    {
      icon: <FaCodeBranch className="text-cyan-300 text-3xl" />,
      text: "Liquidity bridges and aggregation solutions",
    },
    {
      icon: <FaServer className="text-cyan-300 text-3xl" />,
      text: "Institutional-grade technology for startups and established brokers",
    },
  ];

  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 bg-[#03050a] text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 w-[480px] h-[480px] bg-cyan-500/20 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-blue-700/30 blur-[150px]" />
        <div className="absolute top-1/3 left-[45%] w-[700px] h-[700px] rounded-full border border-cyan-500/10 opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-cyan-300 to-blue-500 text-transparent bg-clip-text">
            Conclusion: Build a Reliable and Scalable Brokerage with Capyngen
          </h2>

          <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
            It​‍​‌‍​‍‌​‍​‌‍​‍‌ is very important for a broker to manage
            liquidity in an effective way. Capyngen Technologies UK Limited
            presents to the market a full range of solutions for a liquidity
            provider, such as:
          </p>

          {/* Glass Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="
                  bg-white/5 backdrop-blur-2xl border border-white/10
                  rounded-xl p-5 shadow-lg group
                  hover:border-cyan-400/40 hover:shadow-cyan-500/20
                  transition-all duration-300 cursor-pointer
                "
              >
                <div className="flex items-start gap-4">
                  <div className="transform group-hover:scale-110 transition">
                    {item.icon}
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SECTION — IMAGE + LIGHT EFFECT */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://picsum.photos/seed/liquidity/700/900"
            alt="Liquidity technology visualization"
            className="rounded-2xl object-cover max-h-150 w-full shadow-2xl shadow-black/40 border border-white/10"
          />
        </motion.div>
      </div>

      {/* OUTRO */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-gray-300 text-lg leading-relaxed max-w-6xl mx-auto mt-20"
      >
        Through the partnership with Capyngen, brokers become the owners of a
        safe, scalable, and fully integrated liquidity system which is able to
        deliver fast execution, low slippage, and a great client trading
        ​‍​‌‍​‍‌​‍​‌‍​‍‌experience.
      </motion.p>
    </section>
  );
};

export default LiquidityConclusion;
