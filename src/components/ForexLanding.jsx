import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaShieldAlt, FaCogs } from "react-icons/fa";

export default function ForexLanding() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-100 antialiased">
      <div className="container mx-auto px-6 py-16">
        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6 pr-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold leading-normal">
              Transforming Forex Brokerage with Advanced IT Solutions
            </h2>

            <p className="text-gray-300 max-w-xl text-md">
              In​‍​‌‍​‍‌​‍​‌‍​‍‌ the quickly changing world of forex trading,
              the proper technology is not merely an advantage—it is a must.
              Capyngen Technologies UK Limited, a company in the UK with clients
              all over the world, is focused on delivering Forex Broker IT
              Solutions that are meant to provide brokers with the power,
              improve trading experiences, and make operations more efficient.
              If you are a broker going for a new business or a mature company,
              our inventive forex broker technology solutions guarantee that
              your business will be leading in the market that is getting more
              and more ​‍​‌‍​‍‌​‍​‌‍​‍‌competitive.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-medium shadow-lg hover:bg-indigo-500 transition"
                href="#"
              >
                Get Started
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center justify-center rounded-md border border-gray-700 px-6 py-3 text-sm text-gray-300 hover:text-white transition"
                href="#solutions"
              >
                Explore Solutions
              </motion.a>
            </div>
          </motion.div>

          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <img
              src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
              alt="MT5 Platform Interface for Beginners"
              className="w-full"
            />
            {/* floating gradient */}
            <div className="absolute -right-6 -bottom-6 hidden md:block">
              <div className="w-44 h-44 rounded-full bg-gradient-to-br from-indigo-600/30 to-pink-500/20 blur-xl opacity-60"></div>
            </div>
          </motion.div>
        </section>

        {/* Solutions / Features */}
        <section id="solutions" className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-xl font-semibold mb-6"
          >
            What we bring to brokers
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "End-to-end trading stack",
                desc: "From matching engines to client portals — fully integrated.",
                icon: <FaBolt />,
              },
              {
                title: "Compliance & security",
                desc: "Audit-ready systems, encryption, KYC pipelines.",
                icon: <FaShieldAlt />,
              },
              {
                title: "Custom integrations",
                desc: "Integrate liquidity providers, reporting and back-office.",
                icon: <FaCogs />,
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-sm bg-gray-900 p-6 border hover:-translate-y-1 duration-300 border-gray-800 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 grid place-items-center rounded-lg bg-gradient-to-br from-indigo-700 to-pink-500 text-white shadow-inner">
                    {f.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{f.title}</div>
                    <div className="text-xs text-gray-500">{f.desc}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-400">
                  Designed to scale with your brokerage — zero downtime
                  deployment options available.
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
