import React from "react";
import { motion } from "framer-motion";
import {
  FaCloud,
  FaCogs,
  FaUsers,
  FaLink,
  FaChartPie,
  FaLayerGroup,
  FaShieldAlt,
} from "react-icons/fa";

const B2CopyTechnology = () => {
  const features = [
    {
      icon: <FaLayerGroup className="text-cyan-400 text-2xl" />,
      text: "Copy trading platform deployment",
    },
    {
      icon: <FaUsers className="text-cyan-400 text-2xl" />,
      text: "Master & follower account configuration",
    },
    {
      icon: <FaChartPie className="text-cyan-400 text-2xl" />,
      text: "Multi-asset trading setup",
    },
    {
      icon: <FaShieldAlt className="text-cyan-400 text-2xl" />,
      text: "Risk tools & permission settings",
    },
    {
      icon: <FaLink className="text-cyan-400 text-2xl" />,
      text: "Liquidity & pricing integrations",
    },
    {
      icon: <FaCloud className="text-cyan-400 text-2xl" />,
      text: "Cloud hosting & infrastructure setup",
    },
    {
      icon: <FaCogs className="text-cyan-400 text-2xl" />,
      text: "API connectivity & system automation",
    },
  ];

  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 bg-[#04070d] text-white overflow-hidden">
      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-10 w-[500px] h-[500px] bg-cyan-600/20 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[200px]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-40 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE — Heading + Text */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-7"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent leading-tight">
            Complete Broker Setup with B2Copy Technology
          </h2>

          <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
            Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ delivers turnkey broker solutions powered
            by B2Copy, handling everything from installation to launch.
          </p>

          <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
            Our setup includes:
          </p>
        </motion.div>

        {/* RIGHT SIDE — Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10
                           hover:border-cyan-400/40 hover:bg-white/10 transition-all duration-300
                           shadow-lg hover:shadow-cyan-500/20 backdrop-blur-md"
              >
                <div>{item.icon}</div>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Outro */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="text-center text-gray-300 max-w-5xl mx-auto text-lg mt-16 leading-relaxed"
      >
        We create a secure system capable of supporting retail, professional,
        and institutional ​‍​‌‍​‍‌​‍​‌‍​‍‌clients.
      </motion.p>

      {/* Extra Animations */}
      <style>{`
        .animate-pulse {
          animation: pulseMove 3s infinite ease-in-out;
        }
        @keyframes pulseMove {
          0% { transform: scale(.8); opacity: .4; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(.8); opacity: .4; }
        }
      `}</style>
    </section>
  );
};

export default B2CopyTechnology;
