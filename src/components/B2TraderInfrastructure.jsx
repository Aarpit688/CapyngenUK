import React from "react";
import { motion } from "framer-motion";

const B2TraderInfrastructure = () => {
  const steps = [
    "Platform deployment",
    "Integration of the liquidity bridge",
    "Smart order routing configuration",
    "API trading connectivity",
    "Backend management",
    "Security setup & system hardening",
    "Worldwide hosting & uptime monitoring",
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-[#0A0D14] text-white overflow-hidden">
      <div className="max-w-[90vw] mx-auto relative">
        {/* --------------------------- HEADING --------------------------- */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 relative text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            How Capyngen Builds Your Complete B2Trader Infrastructure
          </h2>

          <p className="pl-6 text-gray-300 text-lg mt-6 max-w-5xl mx-auto leading-relaxed">
            Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ Technologies UK Limited is the single point
            of contact B2Trader trading platform, responsible for the entire
            setup from the installation stage to the going live.
          </p>
        </motion.div>

        {/* --------------------------- IMAGE BLOCK --------------------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-24"
        >
          {/* Soft glows */}
          <div className="absolute -top-14 -left-14 w-96 h-96 bg-cyan-500/10 blur-[140px]"></div>
          <div className="absolute bottom-0 -right-10 w-80 h-80 bg-blue-500/10 blur-[160px]"></div>

          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,255,255,0.14)]">
            <img
              src="https://picsum.photos/seed/b2tinfra/1200/600"
              alt="Trading Infrastructure"
              className="w-full object-cover"
            />
          </div>
        </motion.div>

        {/* --------------------------- PROCESS FLOW --------------------------- */}
        <div className="relative px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
            {steps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="
          flex items-start gap-4 p-4
          rounded-xl
          bg-white/5 border border-white/10
          hover:border-cyan-400/40
          hover:shadow-[0_0_25px_rgba(0,200,255,0.25)]
          transition-all duration-300
        "
              >
                {/* Number Bubble */}
                <div
                  className="
            w-10 h-10 flex items-center justify-center
            rounded-full font-bold
            bg-gradient-to-br from-cyan-300 to-blue-500
            shadow-[0_0_15px_rgba(0,200,255,0.7)]
            text-black text-lg
          "
                >
                  {i + 1}
                </div>

                {/* Text */}
                <p className="text-gray-200 leading-relaxed text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --------------------------- OUTRO TEXT --------------------------- */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mt-24"
        >
          Thanks to our managed hardware, brokers get a stable, secure, and
          well-optimized B2Trader environment that is trading volume is high is
          ​‍​‌‍​‍‌​‍​‌‍​‍‌ready.
        </motion.p>
      </div>
    </section>
  );
};

export default B2TraderInfrastructure;
