import React from "react";
import { motion } from "framer-motion";

export default function ForexConclusion({
  heading = "Conclusion: Elevate Your Brokerage with Capyngen’s IT Solutions",
  paragraphs = [],
  sectionBg = "bg-gradient-to-b from-gray-950 via-black to-gray-900",
  headingColor = "text-white",
  textColor = "text-gray-300",
  blob1 = "bg-gradient-to-tr from-indigo-600/30 via-pink-500/20 to-transparent",
  blob2 = "bg-gradient-to-bl from-pink-600/30 via-purple-500/20 to-transparent",
}) {
  return (
    <section
      className={`relative min-h-[80vh] ${sectionBg} text-gray-100 py-20 px-6 overflow-hidden flex items-center`}
    >
      {/* Animated background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute -top-32 left-0 w-[700px] h-[700px] ${blob1} rounded-full blur-3xl animate-pulse`}
        ></div>

        <div
          className={`absolute bottom-0 right-0 w-[500px] h-[500px] ${blob2} rounded-full blur-3xl animate-pulse`}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className={`text-4xl sm:text-5xl font-bold leading-tight ${headingColor}`}
        >
          {heading}
        </motion.h2>

        {/* Dynamic Paragraphs */}
        {paragraphs.map((text, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className={`mt-8 text-lg sm:text-xl max-w-6xl leading-relaxed ${textColor}`}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
