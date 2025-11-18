import React from "react";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaServer,
  FaCogs,
  FaChartLine,
  FaUsersCog,
  FaShieldAlt,
} from "react-icons/fa";

const ForexTechSolutions = () => {
  const items = [
    {
      icon: <FaChartLine className="text-blue-400 text-3xl" />,
      title: "Advanced Multi-Device Trading Platforms",
      desc: "We build easy-to-use and fully adjustable trading platforms through which our customers can get real-time analytics, execute their orders without any interruption, and access their accounts from any device.",
      img: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: <FaUsersCog className="text-blue-400 text-3xl" />,
      title: "Intelligent CRM Systems for Broker Growth",
      desc: "Our CRM systems are designed to facilitate brokers implementing client engagement strategies, automating their workflows, and increasing client loyalty.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: <FaGlobe className="text-blue-400 text-3xl" />,
      title: "Technology-Driven Global Marketing Enablement",
      desc: "Capyngen merges technology with marketing plans in order to help you get new customers and keep the existing ones all over the world.",
      img: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: <FaShieldAlt className="text-blue-400 text-3xl" />,
      title: "Complete Forex Brokerage Operations & Risk Management",
      desc: "Our technologies cover the forex brokerage operations from the management of liquidity to the tools for assessing‍ ‍ ‌‍​‍‌​‍​‌‍​‍‌risks.",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-[#0B0E14] text-white">
      <div className="max-w-[90vw] mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Why Choose Capyngen for Forex Broker Technology Solutions?
          </h2>
          <p className="text-gray-300 mt-6 text-lg leading-relaxed">
            Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ realizes what kind of difficulties the
            forex brokers have. For example, such kinds of issues as managing a
            large number of operations, following regulations, making sure one's
            IT structure is strong, secured, and can grow should be Capyngen's
            customers' concern no more. The Forex IT solutions which the
            Capyngen team provides allow users to focus on business expansion
            instead of technical limitations.
          </p>
        </motion.div>

        {/* GRID CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden shadow-xl bg-gray-900/50 border border-white/10 group"
            >
              {/* IMAGE */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  {card.icon}
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                </div>

                <p className="text-gray-300 leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForexTechSolutions;
