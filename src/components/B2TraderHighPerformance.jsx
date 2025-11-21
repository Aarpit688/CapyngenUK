import React from "react";
import { motion } from "framer-motion";
import {
  FaServer,
  FaChartLine,
  FaPlug,
  FaCloud,
  FaShieldAlt,
  FaNetworkWired,
  FaTools,
} from "react-icons/fa";
import { assets } from "../assets/assets";

const B2TraderHighPerformance = () => {
  const features = [
    {
      icon: <FaServer className="text-cyan-300 text-3xl" />,
      title: "Setting up a white-label platform",
      desc: "",
    },
    {
      icon: <FaChartLine className="text-cyan-300 text-3xl" />,
      title: "Liquidity bridge & pricing integration",
      desc: "",
    },
    {
      icon: <FaCloud className="text-cyan-300 text-3xl" />,
      title: "Backend hosting and cloud deployment",
      desc: "",
    },
    {
      icon: <FaShieldAlt className="text-cyan-300 text-3xl" />,
      title: " Secure infrastructure and routing",
      desc: "",
    },
    {
      icon: <FaPlug className="text-cyan-300 text-3xl" />,
      title: " API integration with CRMs and fintech systems",
      desc: "",
    },
    {
      icon: <FaNetworkWired className="text-cyan-300 text-3xl" />,
      title: " Multi-asset trading configuration",
      desc: "",
    },
    {
      icon: <FaTools className="text-cyan-300 text-3xl" />,
      title: " 24/7 monitoring and support",
      desc: "",
    },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-[#070A0F] text-white relative overflow-hidden">
      {/* BG Glow Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-[350px] h-[350px] bg-cyan-500/10 blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-600/10 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Build a High-Performance Brokerage with B2Trader
          </h2>

          <p className="text-gray-300 text-lg mt-6 leading-relaxed">
            Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ is a one-stop provider of B2Trader advanced
            technology solutions. Their comprehensive technology services
            include:
          </p>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative mb-24"
        >
          {/* Main big image */}
          <img
            src={assets.b2Trader6}
            alt="B2Trader Engine"
            className="rounded-2xl w-full object-cover border border-white/10 shadow-[0_0_45px_rgba(0,200,255,0.12)]"
          />

          {/* Floating image left */}
          <motion.img
            src={assets.b2Trader7}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute -left-10 -bottom-12 hidden md:block w-60 rounded-xl border border-white/10 shadow-[0_0_25px_rgba(0,200,255,0.15)]"
          />

          {/* Floating image right */}
          <motion.img
            src={assets.b2Trader8}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute -right-10 -top-12 hidden md:block w-60 rounded-xl border border-white/10 shadow-[0_0_25px_rgba(0,200,255,0.15)]"
          />
        </motion.div>

        {/* FEATURE CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="p-7 rounded-xl bg-[#0E121A]/80 backdrop-blur-md border border-white/10
                         hover:border-cyan-400/30 hover:shadow-[0_0_25px_rgba(0,200,255,0.25)]
                         transition-all duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-[15px] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* OUTRO */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-gray-300 text-lg leading-relaxed mt-20 max-w-4xl mx-auto"
        >
          With Capyngen + B2Trader, brokers achieve fast execution, stable
          operations, and global-ready trading performance.
        </motion.p>
      </div>
    </section>
  );
};

export default B2TraderHighPerformance;
