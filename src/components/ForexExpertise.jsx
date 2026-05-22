import React from "react";
import { motion } from "framer-motion";

export default function ForexExpertise({
  title = "Our Expertise as a Forex Technology Provider",
  subtitle = "",
  expertise = [],
  outroText = "",
}) {
  return (
    <section className="relative bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-100 py-16 sm:py-20 overflow-hidden">
      {/* Light accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.12),transparent_70%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            {title}
          </h2>

          {subtitle && (
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {expertise.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.025 }}
              className="relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 shadow-xl group"
            >
              {/* Image */}
              <div className="relative h-[260px] sm:h-[300px] lg:h-[340px] overflow-hidden">
                <img loading="lazy"
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover will-change-transform group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent group-hover:opacity-70 transition duration-500"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7">
                <motion.h3
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-xl sm:text-2xl font-semibold text-white"
                >
                  {item.title}
                </motion.h3>

                {item.desc && (
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-2 max-w-md">
                    {item.desc}
                  </p>
                )}
              </div>

              {/* Glow blob */}
              <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-gradient-to-br from-indigo-600 to-pink-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-all"></div>
            </motion.div>
          ))}
        </div>

        {/* Outro Text */}
        {outroText && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="text-center mt-14 sm:mt-20"
          >
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {outroText}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
