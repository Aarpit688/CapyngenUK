import React from "react";
import { motion } from "framer-motion";

export default function ForexBenefits() {
  const benefits = [
    {
      title: "Scalable Technology",
      desc: "Our solutions are engineered to grow with your brokerage — maintaining peak performance and stability as client bases and trade volumes expand.",
      img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Security and Compliance",
      desc: "With advanced encryption, secure data centers, and compliance-first frameworks, Capyngen guarantees peace of mind for your operations and traders.",
      img: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Enhanced User Experience",
      desc: "We design interfaces that are fluid, intuitive, and accessible — turning trading into a seamless experience across platforms and devices.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Integration Capabilities",
      desc: "Link your entire ecosystem with our API-ready systems — connecting CRMs, liquidity providers, payment gateways, and analytics platforms effortlessly.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Global Reach",
      desc: "Capyngen empowers your brokerage to expand internationally with multilingual support, global liquidity integrations, and high-speed trading infrastructure.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-100 py-24 px-6 overflow-hidden">
      {/* Background gradient lighting */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.12),transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white pb-4">
            Benefits of Capyngen’s IT Solutions for Forex Brokers
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
            Partnering with Capyngen means leveraging the best of performance,
            innovation, and reliability — built for the next generation of
            global forex trading.
          </p>
        </motion.div>

        {/* Alternating Benefits */}
        <div className="space-y-10 ">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col lg:flex-row ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              } items-center justify-center gap-10`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="relative w-full lg:w-1/3 rounded-2xl overflow-hidden shadow-2xl group"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[380px] object-cover transform transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-60 transition-all duration-500"></div>
              </motion.div>

              {/* Text */}
              <div className="w-full lg:w-1/2">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-3xl font-semibold mb-4 text-white"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-gray-400 text-lg leading-relaxed"
                >
                  {item.desc}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Outro CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-24"
        >
          <p className="text-gray-300 text-xl max-w-5xl mx-auto leading-relaxed mb-8">
            Whether you’re looking for enterprise-grade trading solutions or a
            complete broker management ecosystem, Capyngen makes your brokerage
            technologically unstoppable.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="inline-block bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-10 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Let’s Build Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
