"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { assets } from "../assets/assets";

const IMG_PADDING = 12;

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-black">
      {/* 1️⃣ Back-office Tools */}
      <TextParallaxContent
        imgUrl={assets.forexBroker11}
        subheading="Use​‍​‌‍​‍‌​‍​‌‍​‍‌ automation and admin controls effectively to help your brokerage run a little better."
        heading="Build, Scale & Lead with Powerful Back-Office Tools"
      >
        <ContentBackOffice />
      </TextParallaxContent>

      {/* 2️⃣ Liquidity Section */}
      <TextParallaxContent
        imgUrl={assets.liquidityProvider}
        subheading="Deliver superior trade execution through deep liquidity, real-time pricing, and institutional-grade market access."
        heading="Liquidity: Fast, Accurate Connection to the Market"
      >
        <ContentLiquidity />
      </TextParallaxContent>

      {/* 3️⃣ SiRiX Trading Platform */}
      <TextParallaxContent
        imgUrl={assets.homepage5}
        subheading="Seamlessly connect to global markets and elevate your traders with an integrated multi-platform ecosystem."
        heading="Give Your Traders a Competitive Edge with Our Next-Gen Trading Platform"
      >
        <ContentSiRiX />
      </TextParallaxContent>
    </div>
  );
};

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}
      className="w-full"
    >
      {/* Parallax image section */}
      <div className="relative mb-20 lg:mb-0 lg:h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>

      {/* Text / CTA section */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

/* ------------------------------
   Sticky Background Image
--------------------------------- */
const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  return (
    <>
      {/* Desktop Parallax */}
      <motion.div
        ref={targetRef}
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: `calc(100vh - ${IMG_PADDING * 2}px)`,
          top: IMG_PADDING,
          scale,
          opacity,
        }}
        className="hidden md:block sticky z-0 overflow-hidden rounded-2xl shadow-lg border border-white/10 will-change-transform"
      >
        <motion.div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Mobile Static */}
      <motion.div
        className="block md:hidden relative rounded-2xl shadow-lg border border-white/10 overflow-hidden h-[220px] sm:h-[280px]"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>
    </>
  );
};

/* ------------------------------
   Overlay Text Motion
--------------------------------- */
const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <>
      {/* Desktop overlay */}
      <motion.div
        ref={targetRef}
        style={{ y, opacity }}
        className="hidden md:flex absolute left-0 top-0 h-screen w-full flex-col items-center justify-center px-4 sm:px-8 text-center"
      >
        <p className="mb-10 text-base sm:text-xl md:text-2xl text-white font-medium drop-shadow max-w-3xl mx-auto">
          {subheading}
        </p>
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg leading-snug max-w-4xl mx-auto">
          {heading}
        </p>
      </motion.div>

      {/* Mobile overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:hidden relative flex flex-col items-center justify-center px-4 sm:px-6 py-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl mx-3 -mt-[180px] sm:-mt-[230px] text-center"
      >
        <p className="mb-2 text-sm sm:text-base text-gray-300 font-medium max-w-sm">
          {subheading}
        </p>
        <p className="text-lg sm:text-2xl font-bold text-white drop-shadow-lg leading-tight">
          {heading}
        </p>
      </motion.div>
    </>
  );
};

/* ------------------------------
   CONTENT SECTIONS (Responsive)
--------------------------------- */

const baseContainer =
  "mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-16 lg:gap-20 px-4 sm:px-6 md:px-8 pb-16 pt-12 md:pt-20 text-white bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl pb-10";

const ContentBackOffice = () => (
  <div className={baseContainer}>
    <h2 className="text-2xl sm:text-3xl font-bold mb-5 leading-snug">
      Reveal a next-level toolkit of workflow automation, compliance management,
      and performance insights—designed to make running the business easy from
      the very first day.
    </h2>
    <div>
      <ul className="space-y-3 mb-6 sm:mb-8">
        {[
          "Broker Control Panel",
          "Advanced CRM System",
          "Sirix Admin Tools",
          "IB & Affiliate Management",
        ].map((item, index) => (
          <li
            key={index}
            className="flex items-center text-white text-sm sm:text-xl"
          >
            <span className="w-2 h-2 rounded-full mr-3 bg-linear-to-r from-fuchsia-500 via-indigo-500 to-cyan-400"></span>
            {item}
          </li>
        ))}
      </ul>
      <button className="py-2 sm:py-3 px-6 sm:px-8 bg-linear-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 rounded-full text-white font-semibold shadow-[0_8px_24px_rgba(99,102,241,0.35)] hover:opacity-90 transition-all duration-300 text-sm sm:text-base">
        Learn More
      </button>
    </div>
  </div>
);

const ContentLiquidity = () => (
  <div className={baseContainer}>
    <h2 className="text-2xl sm:text-3xl font-bold mb-5 leading-snug">
      Be powered by the best execution contributed by the deepest liquidity
      pools and by the most up-to-date market intelligence. Faster fills,
      tighter pricing, and effortless access to global trading venues are what
      Liquidity Prime is all ‌ ​‍​‌‍​‍‌​‍​‌‍​‍‌about.
    </h2>
    <div>
      <ul className="space-y-3 mb-6 sm:mb-8">
        {[
          "Deep Multi-Asset Liquidity",
          "Ultra-Fast Execution",
          "Tight & Stable Pricing",
          "Global Market Access",
        ].map((item, index) => (
          <li
            key={index}
            className="flex items-center text-white text-sm sm:text-xl"
          >
            <span className="w-2 h-2 rounded-full mr-3 bg-linear-to-r from-fuchsia-500 via-indigo-500 to-cyan-400"></span>
            {item}
          </li>
        ))}
      </ul>
      <button className="py-2 sm:py-3 px-6 sm:px-8 bg-linear-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 rounded-full text-white font-semibold shadow-[0_8px_24px_rgba(99,102,241,0.35)] hover:opacity-90 transition-all duration-300 text-sm sm:text-base">
        Learn More
      </button>
    </div>
  </div>
);

const ContentSiRiX = () => (
  <div className={baseContainer}>
    <h2 className="text-2xl sm:text-3xl font-bold mb-5 leading-snug">
      Access global markets, leverage pro-grade charting, and enjoy seamless
      trading across every device. With social trading, flexible layouts, and
      smart order types, SiRiX empowers your brokerage with a decisive edge.
    </h2>
    <div>
      <ul className="space-y-3 mb-6 sm:mb-8">
        {[
          "Multi-Device Trading Experience",
          "Professional Charting & Tools",
          "Built-In Social Trading",
          "Flexible & Customizable UI",
        ].map((item, index) => (
          <li
            key={index}
            className="flex items-center text-white text-sm sm:text-xl"
          >
            <span className="w-2 h-2 rounded-full mr-3 bg-linear-to-r from-fuchsia-500 via-indigo-500 to-cyan-400"></span>
            {item}
          </li>
        ))}
      </ul>
      <button className="py-2 sm:py-3 px-6 sm:px-8 bg-linear-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 rounded-full text-white font-semibold shadow-[0_8px_24px_rgba(99,102,241,0.35)] hover:opacity-90 transition-all duration-300 text-sm sm:text-base">
        Learn More
      </button>
    </div>
  </div>
);
