import React from "react";
import { motion } from "framer-motion";

export default function RiskDisclosure() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-white text-slate-800 py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-sans antialiased">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-b border-slate-200 pb-8 text-center"
        >
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-3">
            Aynzenix Technology Limited
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Risk Disclosure
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Financial Technology and Trading Risk Disclosure
          </p>
        </motion.header>

        {/* Body */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >

          {/* Section 1 */}
          <motion.section
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8"
          >
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">01</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Trading Risk
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">
              <p>
                Trading forex, CFDs and cryptocurrencies is very risky. If you
                use trading infrastructure you need to know the risks of
                markets.
              </p>
              <br />
              <p>
                Aynzenix provides the technology. Does not promise good trading
                results.
              </p>
            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 2 */}
          <motion.section
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8"
          >
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">02</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Market Risks
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">
              <p>
                Financial markets can change quickly. Prices go up and down fast
                because of the economy, politics or market news.
              </p>
            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 3 */}
          <motion.section
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8"
          >
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">03</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Technology Risks
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">
              <p>
                Trading platforms need the internet and servers to work. Some
                risks are:
              </p>
              <br />

              <ul className="list-none pl-0 space-y-4">
                <li className="pl-4 border-l-2 border-slate-200">
                  delays in the system
                </li>
                <li className="pl-4 border-l-2 border-slate-200">
                  internet connection problems
                </li>
                <li className="pl-4 border-l-2 border-slate-200">
                  software errors
                </li>
              </ul>
            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 4 */}
          <motion.section
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8"
          >
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">04</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Liquidity Risks
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">
              <p>
                Sometimes there are no buyers or sellers in the market. This can
                make trades happen slowly and at prices.
              </p>
            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 5 */}
          <motion.section
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8"
          >
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">05</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Regulatory Risks
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">
              <p>
                Changes in laws and regulations can affect how brokerages work
                in some countries.
              </p>
            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 6 */}
          <motion.section
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8"
          >
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">06</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                No Investment Advice
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">
              <p>
                Aynzenix does not give advice on investments. Tell you what to
                do with your money.
              </p>
            </div>
          </motion.section>

        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-24 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm"
        >
          <p>
            &copy; {new Date().getFullYear()} Aynzenix Technology Limited. All
            rights reserved.
          </p>
        </motion.div>

      </div>
    </main>
  );
}