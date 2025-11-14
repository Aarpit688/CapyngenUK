import React from "react";
import { motion } from "framer-motion";
import {
  FaChartBar,
  FaUsers,
  FaGlobe,
  FaCreditCard,
  FaTools,
} from "react-icons/fa";

export default function ForexSolutions() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-100 antialiased">
      <div className="container mx-auto px-6 py-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Comprehensive Forex Broker Software Solutions
          </h1>
          <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
            Our​‍​‌‍​‍‌​‍​‌‍​‍‌ company provides numerous forex broker software
            solutions that are suitable for any type of business:
          </p>
        </motion.div>

        {/*
  CHANGED: Solutions Grid
  - Replaced 'grid' with 'flex flex-wrap justify-center' to center all items.
  - Replaced 'gap-4' with '-m-2' (a negative margin) to create the gap.
*/}
        <div className="flex flex-wrap justify-center -m-2 max-w-7xl mx-auto">
          {[
            {
              imgSrc: "https://picsum.photos/id/1064/600/400",
              alt: "Trading Platforms",
              title: "Trading Platforms",
              desc: "Sophisticated platforms that can be automated for trading, include risk management features, and have integrated analytics.",
            },
            {
              imgSrc: "https://picsum.photos/id/1048/600/400",
              alt: "CRM Software Solutions",
              title: "CRM Software Solutions",
              desc: "Designed systems for the efficient management of leads, clients, and campaigns.",
            },
            {
              imgSrc: "https://picsum.photos/id/1059/600/400",
              alt: "Website & App Development",
              title: "Website & App Development",
              desc: "Easily accessible websites and mobile applications to offer clients an effortless trading experience.",
            },
            {
              imgSrc: "https://picsum.photos/id/1075/600/400",
              alt: "Payment Gateway Integration",
              title: "Payment Gateway Integration",
              desc: "Systems that are secure and free of any problems for the deposit and withdrawal of funds.",
            },
            {
              imgSrc: "https://picsum.photos/id/1082/600/400",
              alt: "Back-Office Solutions",
              title: "Back-Office Solutions",
              desc: "Tools for efficient reporting, compliance management, and operational control.",
            },
          ].map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              // CHANGED: These classes create the responsive columns
              // - `w-full sm:w-1/2 lg:w-1/3`: Replaces grid-cols-*
              // - `p-2`: This padding (0.5rem) on each side creates the 1rem (gap-4)
              className="w-full sm:w-1/2 lg:w-1/3 p-2"
            >
              {/*
        ADDED: An inner div to hold the card styling.
        - We moved the card styles from motion.div onto this new div.
        - `h-full` ensures all cards in a row are the same height.
      */}
              <div className="bg-gray-900/80 border border-gray-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition rounded-lg overflow-hidden flex flex-col h-full">
                <div className="w-full h-48 bg-gray-800 overflow-hidden">
                  <img
                    src={solution.imgSrc}
                    alt={solution.alt}
                    // Use `object-cover` to fill the space
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-100 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {solution.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Outro Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-gray-300 mt-16 text-center text-base max-w-4xl mx-auto leading-relaxed"
        >
          By offering these solutions, Capyngen is a forex technology provider
          that changes your brokerage to a globally competitive enterprise with
          high ​‍​‌‍​‍‌​‍​‌‍​‍‌performance.
        </motion.p>
      </div>
    </main>
  );
}
