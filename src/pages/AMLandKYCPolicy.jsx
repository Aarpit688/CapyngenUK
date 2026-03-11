import React from "react";
import { motion } from "framer-motion";

export default function AMLPolicy() {
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
            AML & KYC Policy
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Anti-Money Laundering and Know Your Customer Policy
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
              <h2 className="text-xl font-bold text-slate-900 mt-1">Purpose</h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">

              <p>
                Aynzenix Technology Limited has strict rules in place to stop bad people from doing bad things with money. These rules are called Anti-Money Laundering. Know Your Customer procedures. The company uses these Aynzenix Technology Limited Anti-Money Laundering procedures and Aynzenix Technology Limited Know Your Customer procedures to prevent things like money laundering and terrorist financing. Aynzenix Technology Limited also wants to stop fraud and other illegal activities from happening. The Aynzenix Technology Limited Anti-Money Laundering and Aynzenix Technology Limited Know Your Customer procedures are in place to keep everyone safe.
              </p>

            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 2 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">02</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">Customer Identification</h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">

              <p>
                Before we start working with you Aynzenix needs some information from you.
              </p>
              <br />

              <p>
                We may ask you to give us some documents to prove who you are.
              </p>
              <br />

              <p>
                These documents can include:
              </p>

              <ul className="list-none pl-0 space-y-4">
                <li className="pl-4 border-l-2 border-slate-200">A government ID</li>
                <li className="pl-4 border-l-2 border-slate-200">Papers that show your business is registered</li>
                <li className="pl-4 border-l-2 border-slate-200">Something that shows where you live</li>
                <li className="pl-4 border-l-2 border-slate-200">Information, about who owns your business</li>
              </ul>

              <br />

              <p>
                This helps us make sure you are a legitimate client and that everything is okay.
              </p>
              <br />

              <p>
                We want to make sure we are working with people.
              </p>

            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 3 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">03</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">Risk Assessment</h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">

              <p>
                Clients can be grouped based on how risk they pose. The risk categories are:
              </p>
              <br />

              <ul className="list-none pl-0 space-y-4">
                <li className="pl-4 border-l-2 border-slate-200">Low Risk</li>
                <li className="pl-4 border-l-2 border-slate-200">Medium Risk</li>
                <li className="pl-4 border-l-2 border-slate-200">High Risk</li>
              </ul>

              <br />

              <p>
                We do extra checks, for clients who fall into the higher-risk groups.
              </p>

            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 4 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">04</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">Transaction Monitoring</h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">

              <p>
                Aynzenix systems may monitor transaction activity to identify suspicious patterns including:
              </p>
              <br />

              <ul className="list-none pl-0 space-y-4">
                <li className="pl-4 border-l-2 border-slate-200">unusual trading behavior</li>
                <li className="pl-4 border-l-2 border-slate-200">abnormal transaction volumes</li>
                <li className="pl-4 border-l-2 border-slate-200">suspicious payment sources</li>
              </ul>

            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 5 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">05</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">Reporting Obligations</h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">

              <p>
                Where suspicious activity is detected, Aynzenix may report the activity to relevant regulatory authorities.
              </p>

            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 6 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">06</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">Compliance Responsibilities</h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">

              <p>
                Clients must cooperate with compliance procedures and provide accurate information during onboarding and throughout the business relationship.
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
          <p>&copy; {new Date().getFullYear()} Aynzenix Technology Limited. All rights reserved.</p>
        </motion.div>

      </div>
    </main>
  );
}