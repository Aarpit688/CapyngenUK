import React from "react";
import { motion } from "framer-motion";

export default function ForexEmpowerment({
  title,
  description,
  sectionTitle,
  sectionDescription,
  cards = [],
  outroText,
}) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-100 antialiased">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            {title}
          </h1>
          <p className="text-white max-w-7xl mx-auto text-lg leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-tr from-gray-800/70 to-gray-900/50 border border-gray-800 rounded-sm p-8 shadow-2xl max-w-7xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl font-semibold mb-6"
          >
            {sectionTitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-gray-300 mb-6"
          >
            {sectionDescription}
          </motion.p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {cards.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true, amount: 0.3 }}
                className="p-6 bg-gray-900/80 hover:-translate-y-1 duration-300 border border-gray-800 shadow-md hover:shadow-lg transition rounded-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-800 grid place-items-center border border-gray-700">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-md text-white leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-white mt-10 text-base leading-relaxed text-center"
          >
            {outroText}
          </motion.p>
        </motion.section>
      </div>
    </main>
  );
}
