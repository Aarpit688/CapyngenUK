import React from "react";
import { motion } from "framer-motion";

export default function ForexExpertise({
  title = "Our Expertise as a Forex Technology Provider",
  subtitle = "",
  expertise = [],
  outroText = "",
}) {
  return (
    <section className="relative bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-100 py-20 overflow-hidden">
      {/* Soft gradient lights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.12),transparent_60%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>

          {subtitle && (
            <p className="text-lg md:text-xl text-gray-400 max-w-5xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {expertise.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-md bg-gray-900 border border-gray-800 shadow-xl group"
            >
              {/* Image */}
              <div className="relative h-[320px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-black/50 hover:bg-black/30 transition-all duration-500">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl font-semibold text-white mb-3"
                >
                  {item.title}
                </motion.h3>

                {item.desc && (
                  <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                )}
              </div>

              {/* Glow Accent */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-to-br from-indigo-600 to-pink-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition"></div>
            </motion.div>
          ))}
        </div>

        {/* Outro CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-28"
        >
          {outroText && (
            <p className="text-gray-300 text-xl max-w-5xl mx-auto leading-relaxed mb-10">
              {outroText}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
