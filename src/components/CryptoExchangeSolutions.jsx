import React from "react";
import { motion } from "framer-motion";

export default function CryptoExchangeSolutions() {
  const solutions = [
    {
      title: "Next-Gen Trading Platforms",
      desc: "Extremely fast, secure, and feature-packed trading platforms integrated with advanced analytics and automation tools.",
      img: "https://images.unsplash.com/photo-1621764713271-1037fc15d8be?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Client Relationship Management (CRM) Software",
      desc: "Automate workflows, track leads, and enhance customer retention with seamless CRM solutions designed for crypto brokers.",
      img: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Website & App Development",
      desc: "Deliver an intuitive trading experience with responsive, high-performance websites and mobile apps built for engagement.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Payment Gateway Integration",
      desc: "Enable secure and smooth deposit/withdrawal operations with globally compliant payment systems built for reliability.",
      img: "https://images.unsplash.com/photo-1620056013553-9c8f9d49872f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Operational & Back-Office Tools",
      desc: "Simplify compliance, reporting, and management through intuitive dashboards that streamline back-office operations.",
      img: "https://images.unsplash.com/photo-1581091012184-5c19ec7d66df?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-100 py-28 px-6 overflow-hidden">
      {/* glowing background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-700/20 via-pink-600/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[700px] h-[700px] bg-gradient-to-bl from-pink-600/20 via-purple-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Comprehensive Solutions for Every Crypto Exchange Need
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            We provide a complete spectrum of crypto exchange technology
            solutions meticulously crafted to address every aspect of brokerage
            operations — empowering you with innovation, scalability, and
            security.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="flex flex-col space-y-24">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col lg:flex-row ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              } items-center gap-10`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="relative w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl group"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[380px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-4 py-2 rounded-md border border-gray-700 text-xs text-gray-300">
                  Secure • Scalable • Compliant
                </div>
              </motion.div>

              {/* Text */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Outro CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-24"
        >
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            By offering all these services, Capyngen stands out as a leading
            crypto brokerage technology provider — trusted by both startups and
            established brokers worldwide.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="inline-block bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Explore Our Crypto Solutions
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
