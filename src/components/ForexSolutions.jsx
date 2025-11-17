import React from "react";
import { motion } from "framer-motion";

export default function ForexSolutions({
  heading = "Comprehensive Forex Broker Software Solutions",
  subheading = "Our company provides numerous forex broker software solutions that are suitable for any type of business:",
  outro = "By offering these solutions, Capyngen is a forex technology provider that changes your brokerage to a globally competitive enterprise with high performance.",
  solutions = [],

  // NEW: Dynamic Colors with defaults
  sectionBg = "bg-gradient-to-b from-gray-900 via-black to-gray-900",
  cardBg = "bg-gray-900/80",
  cardBorder = "border-gray-800",
  cardHoverShadow = "hover:shadow-xl",
  titleColor = "text-white",
  textColor = "text-gray-300",
  hoverTranslate = "hover:-translate-y-1",
  imageBg = "bg-gray-800",
}) {
  return (
    <main className={`min-h-screen ${sectionBg} text-gray-100 antialiased`}>
      <div className="container mx-auto px-6 py-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${titleColor}`}
          >
            {heading}
          </h1>
          <p
            className={`${textColor} max-w-4xl mx-auto text-lg leading-relaxed`}
          >
            {subheading}
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="flex flex-wrap justify-center -m-2 max-w-7xl mx-auto">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full sm:w-1/2 lg:w-1/3 p-2"
            >
              <div
                className={`${cardBg} border ${cardBorder} shadow-md ${cardHoverShadow} ${hoverTranslate} transition rounded-lg overflow-hidden flex flex-col h-full`}
              >
                {/* IMAGE */}
                <div className={`w-full h-48 ${imageBg} overflow-hidden`}>
                  <img
                    src={solution.imgSrc}
                    alt={solution.alt || solution.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 text-center">
                  <h3 className={`text-lg font-semibold ${titleColor} mb-2`}>
                    {solution.title}
                  </h3>
                  <p className={`${textColor} leading-relaxed text-sm`}>
                    {solution.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Outro Text */}
        {outro && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className={`${textColor} mt-16 text-center text-lg max-w-5xl mx-auto leading-relaxed`}
          >
            {outro}
          </motion.p>
        )}
      </div>
    </main>
  );
}
