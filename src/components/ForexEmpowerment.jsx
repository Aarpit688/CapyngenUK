import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaUsersCog, FaBullseye, FaGlobe } from "react-icons/fa";

export default function ForexEmpowerment() {
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
            What is a Forex Broker and How We Empower Them
          </h1>
          <p className="text-white max-w-7xl mx-auto text-lg leading-relaxed">
            A‍‍ forex broker is a financial services provider that allows
            traders and investors to purchase and sell currencies in the global
            forex market. Forex brokers are the middlemen who provide trading
            platforms, account management tools, and access to liquidity
            providers. However, in today’s competitive market, merely executing
            trades is not enough—brokers have to use advanced technology, robust
            CRM systems, and innovative platforms not only to attract clients
            but also to ensure compliance and operate efficiently.
          </p>
        </motion.div>

        {/* About Capyngen */}
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
            How Capyngen Empowers Brokers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-gray-300 mb-6"
          >
            Capyngen Technologies UK Limited is the answer to this problem. We,
            as a leading Forex technology provider, offer end-to-end solutions
            for brokers of any size:
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              {
                icon: <FaChartLine className="text-indigo-400 text-2xl" />,
                title: "Custom Forex Trading Platforms",
                desc: "Facilitating seamless execution and offering real-time analytics.",
              },
              {
                icon: <FaUsersCog className="text-pink-400 text-2xl" />,
                title: "Forex CRM Software Solutions",
                desc: "Manage clients, automate workflows, and enhance retention.",
              },
              {
                icon: <FaBullseye className="text-green-400 text-2xl" />,
                title: "Digital Marketing Solutions for Brokers",
                desc: "Extend your global reach and attract quality clients.",
              },
              {
                icon: <FaGlobe className="text-yellow-400 text-2xl" />,
                title: "Full-Stack Forex Broker Technology",
                desc: "Website & app development, back-office management, and payment integration.",
              },
            ].map((item, i) => (
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
            className="text-white mt-10 text-base leading-relaxed"
          >
            Thanks to the combination of profound industry knowledge and
            state-of-the-art technology, we are able to give forex brokers the
            power to globally scale their operations, enhance client experience,
            and keep their competitive advantage in the ‍‍‍market.
          </motion.p>
        </motion.section>
      </div>
    </main>
  );
}
