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
        imgUrl="https://images.unsplash.com/photo-1581094794329-c8112bfbf3c7?q=80&w=2600&auto=format&fit=crop"
        subheading="Manage with a comprehensive suite of features designed to boost efficiency and streamline operations."
        heading="Build, Scale, and Lead with Our Back-office Tools"
      >
        <ContentBackOffice />
      </TextParallaxContent>

      {/* 2️⃣ Liquidity Section */}
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2600&auto=format&fit=crop"
        subheading="Deliver speed, accuracy, and scale through flawless market execution."
        heading="Liquidity: Precision Pricing with Limitless Market Reach"
      >
        <ContentLiquidity />
      </TextParallaxContent>

      {/* 3️⃣ SiRiX Trading Platform */}
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2600&auto=format&fit=crop"
        subheading="Access global markets and empower traders with a unified multi-platform experience."
        heading="Give Your Traders the Edge with SiRiX Trading Platform"
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
        <p className="mb-3 text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-200 font-medium drop-shadow max-w-3xl mx-auto">
          {subheading}
        </p>
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-lg leading-snug max-w-4xl mx-auto">
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
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 leading-snug">
      Build, Scale, and Lead with{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400">
        Our Back-office Tools
      </span>
    </h2>
    <div>
      <p className="text-gray-200 mb-5 text-sm sm:text-base md:text-lg max-w-md">
        Manage with a comprehensive suite of features designed to boost
        efficiency and streamline operations.
      </p>
      <ul className="space-y-3 mb-6 sm:mb-8">
        {[
          "Broker Portal",
          "Cutting-Edge Broker CRM",
          "SiRiX Broker",
          "Affiliate & IBs Multi Level System",
        ].map((item, index) => (
          <li
            key={index}
            className="flex items-center text-white text-sm sm:text-base"
          >
            <span className="w-2 h-2 rounded-full mr-3 bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400"></span>
            {item}
          </li>
        ))}
      </ul>
      <button className="py-2 sm:py-3 px-6 sm:px-8 bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 rounded-full text-white font-semibold shadow-[0_8px_24px_rgba(99,102,241,0.35)] hover:opacity-90 transition-all duration-300 text-sm sm:text-base">
        Learn More
      </button>
    </div>
  </div>
);

const ContentLiquidity = () => (
  <div className={baseContainer}>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 leading-snug">
      Liquidity:{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400">
        Precision Pricing with Limitless Market Reach
      </span>
    </h2>
    <div>
      <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
        Deliver speed, accuracy, and scale. Liquidity Prime connects your
        traders to thousands of instruments with real-time data and flawless
        execution.
      </p>
      <button className="py-2 sm:py-3 px-6 sm:px-8 bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 rounded-full text-white font-semibold shadow-[0_8px_24px_rgba(99,102,241,0.35)] hover:opacity-90 transition-all duration-300 text-sm sm:text-base">
        Try Demo
      </button>
    </div>
  </div>
);

const ContentSiRiX = () => (
  <div className={baseContainer}>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 leading-snug">
      Give Your Traders the Edge with{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400">
        SiRiX Trading Platform
      </span>
    </h2>
    <div>
      <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
        Access global markets, deliver advanced TradingView charting, and offer
        seamless trading across web, desktop, and mobile. With social trading,
        customizable layouts, and advanced order types, SiRiX gives your
        brokerage the competitive edge.
      </p>
      <button className="py-2 sm:py-3 px-6 sm:px-8 bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 rounded-full text-white font-semibold shadow-[0_8px_24px_rgba(99,102,241,0.35)] hover:opacity-90 transition-all duration-300 text-sm sm:text-base">
        Try Demo
      </button>
    </div>
  </div>
);
