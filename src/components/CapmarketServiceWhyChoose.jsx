import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, TrendingUp } from "lucide-react";
import { assets } from "../assets/assets";

export default function CapmarketServiceWhyChoose() {
  const title = "Why Brokers Choose Capyngen for Capmarket Services";
  const intro =
    "Brokers​‍‌​‍‌​‍​‌‍​‍‌ have to deal with numerous problems such as fragmented liquidity, latency, and complex infrastructure management. Capyngen Technologies UK Limited addresses these problems with custom Capmarket technology solutions that are scalable, reliable, and globally connected. Brokers obtain:";

  const benefits = [
    "Fast implementation of turnkey Capmarket solutions",
    "Integration of a multi-asset trading platform",
    "Secure and low-latency server hosting and liquidity bridges",
    "Continuous support, platform maintenance, and technical upgrades",
  ];

  const closing =
    "By having Capyngen as a Capmarket technology provider UK-based, brokers are able to concentrate on growth and client acquisition while we take care of the technical ​‍​‌‍​‍‌​‍​‌‍​‍‌side.";

  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  return (
    <motion.section
      className="overflow-hidden py-20 bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <div className="max-w-[90vw] mx-auto grid lg:grid-cols-2 gap-14 items-start">
        {/* LEFT: CONTENT SECTION */}
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-6">
            {title}
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-10">
            {intro}
          </p>

          {/* BENEFITS GRID */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
            variants={staggerContainer}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-3 items-start transition-colors"
                variants={fadeUp}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : { scale: 1.03, borderColor: "#3b82f6" }
                }
              >
                <div className="w-9 h-9 rounded-full bg-blue-600 flex justify-center items-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-200 text-sm md:text-base leading-snug">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CLOSING CARD */}
          <motion.div
            variants={fadeUp}
            className="p-6 bg-slate-900 border-l-4 border-blue-500 rounded-xl"
          >
            <p className="text-slate-300 italic leading-relaxed">{closing}</p>
          </motion.div>
        </motion.div>

        {/* RIGHT: IMAGE + HIGHLIGHT CARD */}
        <motion.div
          className="relative  h-96 lg:h-[40rem] overflow-hidden border border-slate-800"
          variants={fadeUp}
        >
          {/* Main Image */}
          <img
            src={assets.capmarketService9}
            alt="Capmarket Global Network"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
