import React from "react";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaCloud,
  FaSync,
  FaPalette,
  FaChartBar,
  FaUserShield,
} from "react-icons/fa";

const PammConclusion = () => {
  const features = [
    {
      icon: <FaChartBar className="text-blue-500 text-3xl" />,
      text: "Enterprise precision-built allocation engine",
    },
    {
      icon: <FaCogs className="text-blue-500 text-3xl" />,
      text: "High-level scalability for global trade volumes",
    },
    {
      icon: <FaUserShield className="text-blue-500 text-3xl" />,
      text: "Ultra-secure cloud & on-prem deployment options",
    },
    {
      icon: <FaSync className="text-blue-500 text-3xl" />,
      text: "Real-time synchronization built for speed",
    },
    {
      icon: <FaPalette className="text-blue-500 text-3xl" />,
      text: "Customizable UI/UX for brokerage branding",
    },
    {
      icon: <FaCloud className="text-blue-500 text-3xl" />,
      text: "Exceptional onboarding, support & lifecycle management",
    },
  ];

  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#05070C] text-white overflow-hidden">
      {/* Ambient Background Lights */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[130px]"></div>
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-600/10 blur-[150px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-center">
            Why Capyngen Technologies UK Limited Leads the Industry
          </h2>
          {/* Accent Bar */}
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 mt-6 rounded-full"></div>
        </motion.div>

        {/* FEATURE CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="
                group p-7 rounded-2xl 
                bg-white/[0.05] backdrop-blur-xl
                border border-white/10 
                shadow-[0_0_20px_rgba(0,200,255,0.1)]
                hover:shadow-[0_0_40px_rgba(0,200,255,0.25)]
                hover:bg-white/[0.08]
                transition-all duration-300
                flex flex-col gap-4
              "
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 shadow-inner">
                {item.icon}
              </div>

              {/* Text */}
              <p className="text-gray-300 group-hover:text-white transition-colors text-xl leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PammConclusion;
