import React from "react";
import { motion } from "framer-motion";

export default function ForexConclusion() {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-100 py-20 px-6 overflow-hidden flex items-center">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-indigo-600/30 via-pink-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-pink-600/30 via-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl sm:text-5xl font-bold text-white leading-tight"
        >
          Conclusion: Elevate Your Brokerage with Capyngen’s IT Solutions
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8 text-lg sm:text-xl text-gray-300 max-w-6xl leading-relaxed"
        >
          Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ Technologies UK Limited is not only a
          software provider—it is your strategic technology partner in the forex
          brokerage area. We deliver end-to-end services from forex broker
          software solutions to CRM integration and digital marketing strategies
          that ensure your brokerage is running at peak efficiency.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8 text-lg sm:text-xl text-gray-300 max-w-6xl leading-relaxed"
        >
          Make the move to a brokerage that is ready for tomorrow’s challenges.
          Collaborate with Capyngen and feel how easy and effective tech
          solutions can be when they are innovative, dependable, and in line
          with global ​‍​‌‍​‍‌​‍​‌‍​‍‌standards.
        </motion.p>
      </div>
    </section>
  );
}
