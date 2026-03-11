import React from "react";
import { motion } from "framer-motion";

export default function CookiePolicy() {
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
            Cookie Policy
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            The Aynzenix Website Cookie Policy is important to understand.
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
                What Are Cookies
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">
              <p>
                When you visit websites small files called cookies are stored on your device.
              </p>
            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 2 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">02</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Types of Cookies Used
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">

              <p>
                The Aynzenix website uses different kinds of cookies. These include essential cookies:
              </p>
              <br />

              <ul className="list-none pl-0 space-y-4">
                <li className="pl-4 border-l-2 border-slate-200">performance cookies</li>
                <li className="pl-4 border-l-2 border-slate-200">analytics cookies</li>
                <li className="pl-4 border-l-2 border-slate-200">security cookies</li>
              </ul>

              <br />

              <p>
                The Aynzenix website uses these cookies to make the website work better and to improve how well it performs.
              </p>

            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 3 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">03</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Purpose of Cookies
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">

              <p>
                The cookies used by the Aynzenix website do things. Cookies help the Aynzenix website remember what you like. The Aynzenix website uses cookies to see how many people visit the website. The Aynzenix website also uses cookies to make sure everything is secure. The cookies used by the Aynzenix website help make your experience on the website
              </p>

            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 4 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">04</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Managing Cookies
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">

              <p>
                You can control the cookies on your device through your browser settings. If you do not want to use cookies you can turn them off. However, if you turn off cookies, some things on the Aynzenix website may not work properly. The Aynzenix website needs cookies to work right.
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