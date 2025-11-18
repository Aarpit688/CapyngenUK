import React from "react";
import { motion } from "framer-motion";

export default function ForexBenefits() {
  const benefits = [
    {
      title: "Scalable Technology",
      desc: "The services that we offer will still be suitable for your business even after it has grown with more clients and trading volumes.",
      img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Security and Compliance",
      desc: "One of the main characters in the story is security which is ensured by advanced encryption, secure servers, and a compliance-focused architect.",
      img: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Enhanced User Experience",
      desc: "Great user-friendly interfaces are the result of the work of developers and designers and are the final users which are brokers and traders.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Integration Capabilities",
      desc: "There are no hindrances in the way of linking to trading platforms or CRMs, analytics, and marketing tools.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Global Reach",
      desc: "Products designed for a worldwide forex market.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-100 py-20 px-6 overflow-hidden">
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
            Simply​‍​‌‍​‍‌​‍​‌‍​‍‌ by working with us, you will get holding of
            top-notch tech, strong setup, and industry skill which is
            result-oriented. This is what differentiates us from others:
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
                  className="text-4xl font-semibold mb-4 text-white"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-gray-400 text-xl leading-relaxed"
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
            Whether you need the most efficient IT solutions for forex brokers
            or a complete forex CRM software solution for brokers, Capyngen is
            the one to make your brokerage technologically
            ​‍​‌‍​‍‌​‍​‌‍​‍‌future-ready.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
