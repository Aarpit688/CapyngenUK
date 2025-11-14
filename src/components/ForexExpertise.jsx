import React from "react";
import { motion } from "framer-motion";

export default function ForexExpertise() {
  const expertise = [
    {
      title: "Custom Forex Trading Platform Development",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Forex Broker Technology Solutions Provider Services",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Forex Website & App Development Company Solutions",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "End-to-End Forex IT Solutions",
      img: "https://images.unsplash.com/photo-1526401281623-3526c67d8e2f?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-100 py-20 overflow-hidden">
      {/* Soft gradient lights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.12),transparent_60%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-5xl font-bold text-white mb-6">
            Our Expertise as a Forex Technology Provider
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-5xl mx-auto leading-relaxed">
            Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ Technologies UK Limited is a perfect blend
            of technical expertise, domain knowledge, and client-focused
            innovation. Our team saw no better way of understanding your
            workflow, challenges, and goals than working closely with your
            brokerage. We deliver solutions that include:
          </p>
        </motion.div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {expertise.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-md bg-gray-900 border border-gray-800 shadow-xl group"
            >
              {/* Background Image */}
              <div className="relative h-[320px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-500"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-black/50 hover:bg-black/30 transition-all duration-500">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl font-semibold text-white mb-3"
                >
                  {item.title}
                </motion.h3>
              </div>

              {/* Accent Glow */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-to-br from-indigo-600 to-pink-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition"></div>
            </motion.div>
          ))}
        </div>

        {/* Outro CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-28"
        >
          <p className="text-gray-300 text-xl max-w-5xl mx-auto leading-relaxed mb-10">
            With us, you get not only a software vendor but also a business
            enabler who will help you to grow, attract clients, and keep up with
            the market leaders in a competitive ​‍​‌‍​‍‌​‍​‌‍​‍‌environment.
          </p>
          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="inline-block bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Let’s Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
