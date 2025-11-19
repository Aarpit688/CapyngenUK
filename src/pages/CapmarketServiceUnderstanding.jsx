import React from "react";
import { motion } from "framer-motion";
import { Layers, Activity, ShieldCheck, Globe2 } from "lucide-react";

export default function CapmarketServiceUnderstanding() {
  const title = "Understanding Capmarket Services and How Brokers Benefit";
  const content =
    "Capmarket is a technology platform that allows brokers to handle multi-asset trading, liquidity, and platform connectivity in an efficient manner. With the help of Capmarket trading infrastructure and integration services, brokers are able to reach out to liquidity providers, load up their servers for scalable operations, and carry on with their activities at a high level of performance. At Capyngen Technologies, we are experts in the setup of the Capmarket platform, hosting of servers, and development of the white-label, thus enabling brokers to offer their clients secure, quick, and trading environments that are reliable. Our products are suitable for both brokerages that are startups as well as those that are already established, thus making institutional-grade performance possible anywhere in the world.";

  const container = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, when: "beforeChildren" },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardHover = {
    whileHover: {
      scale: 1.02,
      y: -6,
      boxShadow: "0 20px 40px rgba(2,6,23,0.6)",
    },
    whileTap: { scale: 0.995 },
  };

  return (
    <motion.section
      className="overflow-hidden py-20 bg-black"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="flex flex-col md:flex-row">
        {/* Visual Side */}
        <motion.div
          className="md:w-1/2 relative min-h-[300px]"
          variants={fadeUp}
        >
          <motion.img
            src="https://picsum.photos/seed/capservices/800/800"
            alt="Capmarket Trading Infrastructure"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            initial={{ scale: 1.03 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-transparent"></div>
        </motion.div>

        {/* Text Content Side */}
        <motion.div
          className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center"
          variants={fadeUp}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
            variants={fadeUp}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-slate-300 leading-relaxed text-lg mb-8"
            variants={fadeUp}
          >
            {content}
          </motion.p>

          {/* Feature Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              className="flex items-center space-x-3 p-3 bg-slate-900 rounded-lg border border-slate-800 hover:border-emerald-400/40 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.995 }}
            >
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="text-slate-200 font-medium text-sm">
                Secure Environment
              </span>
            </motion.div>

            <motion.div
              className="flex items-center space-x-3 p-3 bg-slate-900 rounded-lg border border-slate-800 hover:border-indigo-400/40 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.995 }}
            >
              <Globe2 className="w-5 h-5 text-indigo-400" />
              <span className="text-slate-200 font-medium text-sm">
                Global Access
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
