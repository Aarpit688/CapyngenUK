import React from "react";
import { motion } from "framer-motion";
import {
  FaServer,
  FaShieldAlt,
  FaCogs,
  FaExchangeAlt,
  FaRoute,
  FaSyncAlt,
} from "react-icons/fa";

export default function MAMStackBuild() {
  const steps = [
    { icon: <FaServer />, text: "Platform deployment" },
    { icon: <FaCogs />, text: "Backend infrastructure" },
    { icon: <FaShieldAlt />, text: "Security & risk controls" },
    { icon: <FaRoute />, text: "Liquidity routing" },
    { icon: <FaExchangeAlt />, text: "Allocation engine configuration" },
    { icon: <FaSyncAlt />, text: "Ongoing system optimization" },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-[#090C12] text-white relative overflow-hidden">
      {/* Background Lights */}
      <div className="absolute -top-16 -left-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-6">
            How We Build a Complete MAM Technology Stack
          </h2>

          <p className="text-gray-300 max-w-6xl mx-auto text-lg leading-relaxed">
            Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ Technologies UK Limited is ready to provide
            you with a full MAM setup journey that comprises:
          </p>
        </motion.div>

        {/* ***********  NEW CARD SECTION (REPLACEMENT) *********** */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="bg-[#0f141b]/80 border border-cyan-500/20 rounded-xl p-8
                        shadow-[0_0_25px_rgba(0,200,255,0.12)]
                        hover:shadow-[0_0_35px_rgba(0,200,255,0.25)]
                        transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#101722] border border-cyan-500/30 flex items-center justify-center text-cyan-300 text-2xl shadow-[0_0_18px_rgba(0,200,255,0.3)]">
                  {step.icon}
                </div>
              </div>

              <p className="text-white text-xl leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
        {/* *********** END OF NEW CARD SECTION *********** */}

        {/* Outro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-gray-300 text-lg leading-relaxed max-w-6xl mx-auto mt-10"
        >
          We make available a comprehensive MAM hosting solution that is
          inclusive of enterprise servers, global routing, redundancy systems,
          and disaster recovery. This is what guarantees uninterrupted trade
          allocation and stable multi-account ​‍​‌‍​‍‌​‍​‌‍​‍‌management.
        </motion.p>
      </div>
    </section>
  );
}
