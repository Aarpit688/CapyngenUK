import React from "react";
import { motion } from "framer-motion";

export default function CryptoExpertise({
  heading = "Our Expertise: Building Crypto Exchanges That Win",
  subheading = "At​‍​‌‍​‍‌​‍​‌‍​‍‌ Capyngen Technologies UK Limited, we bring together technical brilliance and business understanding to create impactful solutions. Our skill set spans:",
  outro = "Our service is beyond just technology delivery; we provide the power to exchanges to grow worldwide, make a stronghold in the market, and be a step ahead of their ​‍​‌‍​‍‌​‍​‌‍​‍‌competitors.",
  cards = [],
  sectionBg = "bg-gradient-to-b from-[#05070d] via-[#0b0f1f] to-[#05070d]",
  glow1 = "bg-blue-600/20",
  glow2 = "bg-indigo-500/20",
  titleGradient = "bg-gradient-to-r from-blue-300 to-indigo-400",
  cardBg = "bg-white/5 backdrop-blur-md border border-white/10",
  cardHoverBg = "hover:bg-white/10 hover:border-indigo-300/40",
  cardShadow = "shadow-xl hover:shadow-indigo-500/20",
  cardTextColor = "text-zinc-400",
  cardTitleColor = "text-blue-200",
  iconColor = "text-indigo-300",
  iconHoverColor = "group-hover:text-blue-300",
}) {
  return (
    <section
      className={`w-full py-24 px-6 md:px-12 lg:px-20 ${sectionBg} relative overflow-hidden text-white`}
    >
      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute w-[400px] h-[400px] ${glow1} blur-[150px] -top-20 -left-10`}
        ></div>
        <div
          className={`absolute w-[450px] h-[450px] ${glow2} blur-[180px] bottom-0 right-0`}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${titleGradient} bg-clip-text text-transparent`}
        >
          {heading}
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-zinc-300 max-w-3xl mx-auto mt-6 leading-relaxed text-lg"
        >
          {subheading}
        </motion.p>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl flex flex-col items-center group transition ${cardBg} ${cardHoverBg} ${cardShadow}`}
            >
              <div className={`text-4xl mb-4 ${iconColor} ${iconHoverColor}`}>
                {card.icon}
              </div>
              <h3
                className={`text-lg font-semibold ${cardTitleColor} group-hover:text-indigo-300 transition`}
              >
                {card.title}
              </h3>
              <p
                className={`text-sm mt-3 leading-relaxed ${cardTextColor} group-hover:text-zinc-300 transition`}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Outro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-zinc-300 max-w-4xl mx-auto mt-12 text-lg leading-relaxed"
        >
          {outro}
        </motion.p>
      </div>
    </section>
  );
}
