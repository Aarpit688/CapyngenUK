import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.6, ease: "easeOut" },
  }),
};

const B2ConnectBenefits = () => {
  const benefitsList = [
    "Support of multi-asset liquidity (forex + crypto + CFDs)",
    "Extremely fast execution",
    "Reliability due to worldwide data centers & cloud routing",
    "Integration with all major trading platforms",
    "Automated risk & exposure management",
    "Designed for both enterprise & startup brokerages",
  ];

  return (
    <section className="relative w-full py-14 sm:py-18 lg:py-24 px-4 sm:px-6 overflow-hidden text-white bg-black">
      {/* WRAPPER WITH ANIMATED BORDER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto rounded-xl p-[2px]
                   bg-gradient-to-r from-amber-400 via-red-500 to-amber-400
                   animate-[neonBorder_7s_linear_infinite]"
      >
        {/* INNER CARD */}
        <div
          className="rounded-xl bg-[#0b0f19]/90 backdrop-blur-xl 
                        border border-amber-400/20 overflow-hidden
                        shadow-[0_0_45px_rgba(255,150,60,0.25)]"
        >
          <div className="grid md:grid-cols-2 items-center gap-0">
            {/* LEFT PARALLAX IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[240px] sm:h-[320px] md:h-full overflow-hidden"
            >
              <img loading="lazy"
                src={assets.b2Connect04}
                alt="Brokerage Benefits"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r 
                              from-[#0b0f19]/85 via-transparent to-transparent"
              ></div>
            </motion.div>

            {/* RIGHT CONTENT SECTION */}
            <div className="p-6 sm:p-8 lg:p-12">
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight"
              >
                Benefits of Using AynX Connect for Your Brokerage
              </motion.h2>

              {/* LIST */}
              <ul className="mt-6 sm:mt-8 space-y-5">
                {benefitsList.map((benefit, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom={index}
                    viewport={{ once: true }}
                    className="flex gap-3 items-start text-sm sm:text-base md:text-lg text-gray-200"
                  >
                    <motion.span
                      animate={{
                        rotate: [0, 15, -15, 0],
                        scale: [1, 1.15, 1],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 mt-1
                                   drop-shadow-[0_0_8px_#ffbf47]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1
                          1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 
                          00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z"
                        />
                      </svg>
                    </motion.span>
                    {benefit}
                  </motion.li>
                ))}
              </ul>

              {/* PROMO BOX */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                viewport={{ once: true }}
                className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-lg 
                           bg-gradient-to-r from-red-500/25 to-amber-500/25 
                           border border-amber-400/30
                           text-center shadow-[0_0_22px_rgba(255,140,60,0.25)]
                           backdrop-blur-lg"
              >
                <Link to="/contact-us" className="text-base sm:text-lg lg:text-xl font-semibold text-amber-200">
                  Upgrade Your Liquidity Infrastructure With AynX Connect Bridge.
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* KEYFRAME ANIMATION */}
      <style>
        {`
          @keyframes neonBorder {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
          }
        `}
      </style>
    </section>
  );
};

export default B2ConnectBenefits;
