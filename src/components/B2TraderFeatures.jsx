import React from "react";
import { motion } from "framer-motion";
import { FaServer, FaChartLine, FaPlug } from "react-icons/fa";
import { assets } from "../assets/assets";

const B2TraderFeatures = () => {
  const features = [
    {
      icon: <FaServer className="text-cyan-300 text-3xl" />,
      title: "B2Trader White-Label Platform Deployment",
      desc: "We offer a complete brand B2Trader white-label solution for brokers who need a fast setup, personalized branding, and a safe multi-asset trading environment.",
    },
    {
      icon: <FaChartLine className="text-cyan-300 text-3xl" />,
      title: "B2Trader Liquidity & Pricing Integration",
      desc: "Capyngen implements B2Trader liquidity solutions that guarantee correct pricing, tight spreads, quick execution, and a stable market connection for forex, crypto, and CFD brokers.",
    },
    {
      icon: <FaPlug className="text-cyan-300 text-3xl" />,
      title: "B2Trader API Trading Integration",
      desc: "Through B2Trader API connection, we facilitate the interaction of CRMs, client portals, risk tools, analytics systems, PSPs, and liquidity providers, thus, allowing full automation and increased ​‍​‌‍​‍‌​‍​‌‍​‍‌capacity.",
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-[#0A0D14] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT IMAGE BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Soft glow background */}
          <div className="absolute -top-10 -left-10 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-2xl rounded-full"></div>

          <div className="relative rounded-md overflow-hidden shadow-[0_0_40px_rgba(0,255,255,0.15)] border border-white/10">
            <img
              src={assets.b2Trader3}
              alt="B2Trader Trading"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT TEXT + FEATURE LIST */}
        <div className="relative">
          <div className="pl-6">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Core Features of Our B2Trader Trading Solutions
            </motion.h2>

            {/* FEATURES LIST */}
            <div className="space-y-14 mt-12">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="mt-1">{item.icon}</div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 mt-2 text-[15px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2TraderFeatures;
