import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaLayerGroup, FaChartBar, FaShieldAlt } from "react-icons/fa";

const LiquidityIntegration = () => {
  const features = [
    {
      icon: <FaLayerGroup className="text-cyan-400 text-3xl" />,
      title: "Multiple liquidity sources connected with low latency",
      desc: "Connect with several liquidity sources simultaneously without execution delays.",
    },
    {
      icon: <FaChartBar className="text-cyan-400 text-3xl" />,
      title: "Management of pricing and market depth in real-time",
      desc: "Maintain accuracy and market-depth visibility with instant pricing updates.",
    },
    {
      icon: <FaShieldAlt className="text-cyan-400 text-3xl" />,
      title: "Broker risk and exposure management through advanced tools",
      desc: "Advanced risk management controls ensure optimal exposure handling.",
    },
    {
      icon: <FaBolt className="text-cyan-400 text-3xl" />,
      title:
        "Systems designed for evolution that are able to process trading volumes of the institutional market type",
      desc: "Infrastructure capable of handling large-scale, professional-grade trade loads.",
    },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 bg-[#070b12] text-white relative overflow-hidden">
      {/* Soft Ambient Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute w-[420px] h-[420px] bg-cyan-500/10 blur-[180px] top-10 left-10"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-600/10 blur-[200px] bottom-10 right-10"></div>
      </div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Why Choose Capyngen for Liquidity Provider Integration
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            Brokers​‍​‌‍​‍‌​‍​‌‍​‍‌ have to overcome several problems when they
            combine liquidity. These problems are latency, inconsistent pricing,
            and high technical complexity. Capyngen Technologies UK Limited
            solves these problems by offering a complete set of solutions for
            liquidity provider integration with the following features:
          </p>
        </motion.div>

        {/* RIGHT FEATURE CARDS — 2x2 GRID */}
        <div className="grid sm:grid-cols-2 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                p-6 bg-[#0d1522]/60 backdrop-blur-xl rounded-xl border border-white/10 
                shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-400/20 
                transition-all duration-300
              "
            >
              <div className="flex items-center gap-3 mb-4">
                {item.icon}
                <h3 className="text-lg font-semibold text-cyan-300 leading-snug">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* OUTRO TEXT */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center text-gray-300 text-lg mt-20 leading-relaxed"
      >
        As a result of a partnership with us, brokers enjoy the advantages of
        liquidity solutions that are secure, reliable, and fully integrated.
        These solutions lead to the improvement of the execution quality, risk
        minimization, and the increase of the client satisfaction
        ​‍​‌‍​‍‌​‍​‌‍​‍‌level.
      </motion.p>
    </section>
  );
};

export default LiquidityIntegration;
