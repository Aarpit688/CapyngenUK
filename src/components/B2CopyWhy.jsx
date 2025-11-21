import React from "react";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaUsers,
  FaLayerGroup,
  FaSyncAlt,
  FaChartLine,
  FaLaptopCode,
  FaCogs,
  FaEye,
} from "react-icons/fa";
import { assets } from "../assets/assets";

const B2CopyWhy = () => {
  const features = [
    {
      icon: <FaSyncAlt className="text-cyan-400 text-2xl" />,
      text: "Speedy and accurate trade replication",
    },
    {
      icon: <FaLayerGroup className="text-cyan-400 text-2xl" />,
      text: "Handling of multiple accounts",
    },
    {
      icon: <FaCogs className="text-cyan-400 text-2xl" />,
      text: "Subscription plans with flexibility",
    },
    {
      icon: <FaLaptopCode className="text-cyan-400 text-2xl" />,
      text: "Use of different platforms",
    },
    {
      icon: <FaBolt className="text-cyan-400 text-2xl" />,
      text: "Performance with low latency",
    },
    {
      icon: <FaUsers className="text-cyan-400 text-2xl" />,
      text: "Easy integration of CRM + platform",
    },
    {
      icon: <FaEye className="text-cyan-400 text-2xl" />,
      text: "Intuitive graphical interfaces",
    },
    {
      icon: <FaChartLine className="text-cyan-400 text-2xl" />,
      text: "A full-fledged social trading environment",
    },
  ];

  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 bg-[#03060c] text-white overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-blue-600/20 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[200px]" />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="rounded-md overflow-hidden shadow-[0_0_40px_rgba(0,255,255,0.2)] border border-cyan-400/30">
            <img
              src={assets.b2copy04}
              alt="Copy Trading Technology"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT: TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-7"
        >
          <h2 className="text-4xl font-extrabold text-white leading-normal">
            Why B2Copy Is a Preferred Copy Trading System
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            B2Copy​‍​‌‍​‍‌​‍​‌‍​‍‌ is a broker’s top choice because it offers:
          </p>

          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 
                           hover:border-cyan-400/40 hover:bg-white/10 transition-all duration-300 
                           shadow-lg hover:shadow-cyan-500/20"
              >
                <div>{item.icon}</div>
                <p className="text-gray-200 text-lg leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-300 text-xl max-w-xl leading-relaxed mt-6">
            Clients can track professional traders and onboard their strategies
            ‍‌‍​‍​‌‍​‍‌​‍​‌‍​‍‌automatically.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default B2CopyWhy;
