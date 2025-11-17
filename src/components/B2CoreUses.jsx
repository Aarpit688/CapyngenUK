import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

/* ------------------------------
   GSAP MAGNETIC EFFECT HOOK
--------------------------------*/
const useMagnetic = (selector, strength = 40) => {
  useEffect(() => {
    const items = document.querySelectorAll(selector);

    items.forEach((item) => {
      const move = (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        gsap.to(item, {
          x: x / strength,
          y: y / strength,
          duration: 0.3,
          ease: "power3.out",
        });
      };

      const reset = () => {
        gsap.to(item, { x: 0, y: 0, duration: 0.3 });
      };

      item.addEventListener("mousemove", move);
      item.addEventListener("mouseleave", reset);

      return () => {
        item.removeEventListener("mousemove", move);
        item.removeEventListener("mouseleave", reset);
      };
    });
  }, [selector, strength]);
};

/* ------------------------------
   CARD COMPONENT
--------------------------------*/
const Card = ({ title, children, index }) => (
  <motion.div
    className="mag-card bg-[#0b0f17] rounded-xl border border-cyan-300/20 
               p-8 shadow-[0_0_30px_rgba(0,255,255,0.1)]
               hover:shadow-[0_0_40px_rgba(0,255,255,0.35)]
               transition-all duration-300 cursor-pointer"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
  >
    <h3 className="text-2xl font-bold text-cyan-300 mb-4 drop-shadow-[0_0_10px_#00eaff]">
      {title}
    </h3>
    <p className="text-slate-300 leading-relaxed">{children}</p>
  </motion.div>
);

/* ------------------------------
   MAIN COMPONENT
--------------------------------*/
const B2CoreUses = () => {
  useMagnetic(".mag-card", 35);
  useMagnetic(".mag-btn", 25);
  useMagnetic(".mag-img", 30);

  return (
    <section className="relative py-24 px-6 bg-[#05070d] text-white overflow-hidden">
      <div className="relative max-w-[90vw] mx-auto z-10">
        {/* TITLE */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-transparent 
                         bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 
                         drop-shadow-[0_0_25px_rgba(0,255,255,0.5)]"
          >
            How Brokers Use B2Core
          </h2>
        </motion.div>

        {/* 3 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Card index={0} title="For​‍​‌‍​‍‌​‍​‌‍​‍‌ Forex Brokers">
            Manage MT4/MT5 accounts such as KYC, deposits, withdrawals, and
            trading data through a single CRM.
          </Card>

          <Card index={1} title="For Crypto Brokers">
            With features such as crypto wallets, blockchain tracking, and
            automated deposit/withdrawal flows, B2Core suits digital asset
            firms.
          </Card>

          <Card index={2} title="For Multi-Asset Firms">
            Achieve operational efficiency with centralized control of all
            trading accounts and ​‍​‌‍​‍‌​‍​‌‍​‍‌instruments.
          </Card>
        </div>

        {/* CTA BUTTON (magnetic + framer motion) */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mag-btn relative px-10 py-4 bg-cyan-300 text-black font-bold 
                       rounded-xl shadow-[0_0_30px_rgba(0,255,255,0.4)]
                       hover:shadow-[0_0_45px_rgba(0,255,255,0.8)]
                       transition-all duration-300 cursor-pointer"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      {/* Extra animations */}
      <style>{`
        @keyframes slowScroll {
          0% { background-position: 0 0; }
          100% { background-position: 400px 400px; }
        }
        .animate-slowScroll {
          animation: slowScroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default B2CoreUses;
