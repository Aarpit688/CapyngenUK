import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const B2ConnectBenefits = () => {
  const benefitsList = [
    "Support of multi-asset liquidity (forex + crypto + CFDs)",
    "Extremely fast execution",
    "Reliability due to worldwide data centers & cloud routing",
    "Integration without any barriers with all major trading platforms",
    "Risk and exposure management on control, automated",
    "Large brokerages as well as small startups can use ​‍​‌‍​‍‌​‍​‌‍​‍‌it",
  ];

  return (
    <section className="relative w-full min-h-screen py-20 px-6 overflow-hidden text-white bg-black">
      {/* ░░ CYBERPUNK CARD WRAPPER ░░ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-[90vw] mx-auto rounded-3xl p-[2px] 
                   bg-gradient-to-r from-amber-400 via-red-500 to-amber-400
                   animate-[neonBorder_6s_linear_infinite]"
      >
        {/* Inner Container */}
        <div
          className="rounded-3xl bg-[#0b0f19]/90 backdrop-blur-xl overflow-hidden
                        border border-amber-400/20 shadow-[0_0_40px_rgba(255,150,60,0.3)]"
        >
          <div className="grid md:grid-cols-2 items-center h-full">
            {/* ░░ LEFT IMAGE (Parallax Layer) ░░ */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-64 md:h-full overflow-hidden"
              style={{ transform: "translateZ(-1px)" }}
            >
              <img
                src="https://picsum.photos/800/1000?random=3"
                alt="Brokerage Benefits"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0b0f19]/70 via-transparent to-transparent"></div>
            </motion.div>

            {/* ░░ RIGHT CONTENT ░░ */}
            <div className="p-10 md:p-14 lg:p-20">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-extrabold text-transparent 
                           bg-clip-text bg-gradient-to-r from-amber-300 to-red-400 
                           drop-shadow-[0_0_15px_rgba(255,150,80,0.5)]"
              >
                Benefits of Using B2Connect for Your Brokerage
              </motion.h2>

              <ul className="mt-10 space-y-5">
                {benefitsList.map((benefit, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom={index}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 20, -20, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <svg
                        className="w-7 h-7 text-amber-400 mr-3 mt-1 
                                   drop-shadow-[0_0_10px_#ffbf47]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 
                          1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 
                          00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z"
                        />
                      </svg>
                    </motion.div>

                    <span className="text-slate-300 leading-relaxed">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Highlight Box */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-10 p-6 rounded-xl bg-gradient-to-r 
                           from-red-500/20 to-amber-500/20 
                           border border-amber-400/40 
                           text-center shadow-[0_0_25px_rgba(255,150,80,0.25)]
                           backdrop-blur-lg"
              >
                <h3 className="text-xl text-amber-100 font-bold tracking-wide">
                  Upgrade Your Liquidity Infrastructure With B2Connect Bridge.
                </h3>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Keyframes */}
      <style>
        {`
        @keyframes neonBorder {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }

        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.9; }
        }
        `}
      </style>
    </section>
  );
};

export default B2ConnectBenefits;
