import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Aynzenix Technology Limited – Privacy Policy
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
              <h2 className="text-xl font-bold text-slate-900 mt-1">Overview</h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">

              <p>
                Aynzenix Technology Limited is really careful about keeping corporate data safe. This Privacy Policy is here to tell you how Aynzenix Technology Limited collects information, what Aynzenix Technology Limited does with it and how Aynzenix Technology Limited stores it. Aynzenix Technology Limited gets this information from the Aynzenix Technology Limited website and the services that Aynzenix Technology Limited offers.
              </p>
              <br />

              <p>
                Aynzenix Technology Limited is a financial technology company so Aynzenix Technology Limited has to keep some client information to follow the rules. This is so Aynzenix Technology Limited can verify who the clients are and keep an eye on transactions.
              </p>
              <br />

              <p>
                When you use Aynzenix Technology Limited services you are saying it is okay, with you that Aynzenix Technology Limited does things the way this Privacy Policy says.
              </p>

            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 2 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">02</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">Information We Collect</h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">

              <p>We may collect the following categories of data:</p>
              <br />

              <p className="font-semibold">Personal Identification Information</p>

              <ul className="list-none pl-0 space-y-4">
                <li className="pl-4 border-l-2 border-slate-200">name</li>
                <li className="pl-4 border-l-2 border-slate-200">email address</li>
                <li className="pl-4 border-l-2 border-slate-200">phone number</li>
                <li className="pl-4 border-l-2 border-slate-200">identification documents for compliance checks</li>
              </ul>

              <br />

              <p className="font-semibold">Corporate Information</p>

              <ul className="list-none pl-0 space-y-4">
                <li className="pl-4 border-l-2 border-slate-200">company registration details</li>
                <li className="pl-4 border-l-2 border-slate-200">business contact information</li>
                <li className="pl-4 border-l-2 border-slate-200">billing and payment details</li>
              </ul>

              <br />

              <p className="font-semibold">Technical Information</p>

              <ul className="list-none pl-0 space-y-4">
                <li className="pl-4 border-l-2 border-slate-200">IP addresses</li>
                <li className="pl-4 border-l-2 border-slate-200">device identifiers</li>
                <li className="pl-4 border-l-2 border-slate-200">system logs</li>
                <li className="pl-4 border-l-2 border-slate-200">login timestamps</li>
              </ul>

              <br />

              <p className="font-semibold">Financial Data</p>

              <p>
                When clients use trading platforms or CRM systems, certain transaction and account information may be processed within the infrastructure.
              </p>

            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 3 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">03</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">How We Use Information</h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">

              <p>Collected data helps us in:</p>
              <br />

              <ul className="list-none pl-0 space-y-4">
                <li className="pl-4 border-l-2 border-slate-200">giving you our services and keeping them running</li>
                <li className="pl-4 border-l-2 border-slate-200">managing your account and getting you started</li>
                <li className="pl-4 border-l-2 border-slate-200">following rules and keeping an eye on security</li>
                <li className="pl-4 border-l-2 border-slate-200">making our system work better</li>
                <li className="pl-4 border-l-2 border-slate-200">fixing issues</li>
              </ul>

              <br />

              <p>We do not sell your data to other companies.</p>

            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 4 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">04</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">Data Storage and Security</h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">

              <p>Aynzenix follows security steps that're common in the industry. These steps include:</p>
              <br />

              <ul className="list-none pl-0 space-y-4">
                <li className="pl-4 border-l-2 border-slate-200">encrypted data storage</li>
                <li className="pl-4 border-l-2 border-slate-200">cloud infrastructure</li>
                <li className="pl-4 border-l-2 border-slate-200">restricted employee access</li>
                <li className="pl-4 border-l-2 border-slate-200">continuous monitoring systems</li>
              </ul>

              <br />

              <p>
                These steps help keep information safe from people who should not access it or use it in a bad way.
              </p>
              <br />

              <p>
                Aynzenix uses these steps to protect information. The measures help protect information, against people who try to access it without permission or use it wrongly.
              </p>

            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 5 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">05</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">Data Sharing</h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">

              <p>We share our information with a people like:</p>
              <br />

              <ul className="list-none pl-0 space-y-4">
                <li className="pl-4 border-l-2 border-slate-200">payment providers</li>
                <li className="pl-4 border-l-2 border-slate-200">the companies that help us with our website</li>
                <li className="pl-4 border-l-2 border-slate-200">the services that check if we are doing things right</li>
                <li className="pl-4 border-l-2 border-slate-200">the police or other legal authorities when they need it</li>
              </ul>

              <br />

              <p>All of these partners have to keep our information secret and safe.</p>

            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 6 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">06</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">Data Retention</h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">

              <p>
                Data may be stored for a specific period to comply with regulatory obligations, security monitoring, and contractual requirements.
              </p>
              <br />

              <p>
                Certain financial records may be retained for multiple years depending on applicable compliance laws.
              </p>

            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 7 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">07</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">User Rights</h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">

              <p>
                People who use our services have rights when it comes to their information. This includes things like:
              </p>
              <br />

              <ul className="list-none pl-0 space-y-4">
                <li className="pl-4 border-l-2 border-slate-200">being able to see the information we have about them</li>
                <li className="pl-4 border-l-2 border-slate-200">fixing any mistakes in their information</li>
                <li className="pl-4 border-l-2 border-slate-200">asking us to delete their information if the law says we can</li>
                <li className="pl-4 border-l-2 border-slate-200">asking us to move their information to another place</li>
              </ul>

              <br />

              <p>
                People can send these kinds of requests to the Aynzenix team that handles these things.
              </p>

            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 8 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">08</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">Policy Updates</h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">
              <p>
                Aynzenix may update this policy periodically. Updated versions will be published on the website.
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