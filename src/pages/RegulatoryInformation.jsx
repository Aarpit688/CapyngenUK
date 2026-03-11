import React from "react";
import { motion } from "framer-motion";

export default function RegulatoryInformation() {
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
            Regulatory Information
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Aynzenix. Regulatory Disclosure
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
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">01</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Company Status
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">
              <p>
                Aynzenix Technology Limited is a company that provides technology to institutions and brokerage firms. Aynzenix Technology Limited does this work. The Aynzenix Technology Limited company does not do things. For example Aynzenix Technology Limited is not:
              </p>
              <br />

              <ul className="list-none pl-0 space-y-4">
                <li className="pl-4 border-l-2 border-slate-200">a broker</li>
                <li className="pl-4 border-l-2 border-slate-200">an investment advisor</li>
                <li className="pl-4 border-l-2 border-slate-200">a liquidity provider</li>
              </ul>
            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 2 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">02</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Compliance Commitment
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">

              <p>
                Aynzenix Technology Limited has rules that it follows.
              </p>
              <br />

              <p>
                These rules include things like:
              </p>
              <br />

              <ul className="list-none pl-0 space-y-4">
                <li className="pl-4 border-l-2 border-slate-200">procedures to stop money laundering</li>
                <li className="pl-4 border-l-2 border-slate-200">standards, for cybersecurity</li>
                <li className="pl-4 border-l-2 border-slate-200">policies to protect data</li>
              </ul>

            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 3 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">03</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Client Responsibility
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">
              <p>
                Clients of Aynzenix Technology Limited have to make sure they are following the laws. These are the laws that apply to what the clients are doing with brokerage. The clients have to do this in the places where they are operating.
              </p>
            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 4 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">04</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Legal Cooperation
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">
              <p>
                Aynzenix Technology Limited may work with authorities.
              </p>
              <br />

              <p>
                Aynzenix Technology Limited may also work with law enforcement agencies.
              </p>
              <br />

              <p>
                This happens when the law says Aynzenix Technology Limited has to do it.
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
            &copy; {new Date().getFullYear()} Aynzenix Technology Limited. All rights reserved.
          </p>
        </motion.div>

      </div>
    </main>
  );
}