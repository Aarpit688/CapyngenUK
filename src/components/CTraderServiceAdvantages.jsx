import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Zap, Globe, Lock } from "lucide-react";

// Enhanced dark-themed React component for cTrader services
// - Pointer-follow 3D parallax on each card
// - Framer Motion useAnimation entrance control
// - Subtle blob parallax tied to mouse on container
// - Keeps the user's copy verbatim

export default function CTraderServiceAdvantages() {
  const headerTitle = "Key Advantages of cTrader Services for Brokers";

  const advantages = [
    "Rapid‍‌‍‌‍‌‍‌ White-Label Deployment – Get a fully branded platform up and running fast with a few technical changes only.",
    "Seamless Multi-Asset Trading – Allow forex, CFDs, and crypto trading in one platform with the integration of liquidity.",
    "Reliable Execution & Connectivity – Trade smoothly is ensured by low-latency hosting and the liquidity bridge.",
  ];

  const concluding =
    "As a result of these features, cTrader has become the primary platform for brokers who are looking for professional, efficient, and internationally linked trading ‍‌‍‌‍‌‍‌solutions.";

  // Entrance controls
  const containerControls = useAnimation();
  const itemControls = [useAnimation(), useAnimation(), useAnimation()];

  // Refs
  const containerRef = useRef(null);
  const cardRefs = [useRef(null), useRef(null), useRef(null)];
  const inView = useInView(containerRef, { once: true, amount: 0.25 });

  // Blob refs for a subtle background parallax
  const blobARef = useRef(null);
  const blobBRef = useRef(null);

  useEffect(() => {
    if (inView) {
      containerControls.start({
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.12 },
      });
      itemControls.forEach((c, i) =>
        c.start({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: i * 0.08,
            type: "spring",
            stiffness: 90,
            damping: 14,
          },
        })
      );
    }
  }, [inView, containerControls, itemControls]);

  // Mouse move on a single card -> framer-motion animate rotateX/rotateY
  const handleCardMove = (e, idx) => {
    const el = cardRefs[idx].current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1

    // Map to rotation ranges
    const rotateY = (px - 0.5) * 18; // -9..9 deg
    const rotateX = -(py - 0.5) * 12; // -6..6 deg

    itemControls[idx].start({
      rotateX,
      rotateY,
      scale: 1.03,
      transition: { type: "spring", stiffness: 300, damping: 28 },
    });
  };

  const handleCardLeave = (idx) => {
    itemControls[idx].start({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 26 },
    });
  };

  // Container-level mouse move for subtle background blob parallax
  const handleContainerMouse = (e) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 .. 0.5
    const cy = (e.clientY - rect.top) / rect.height - 0.5;

    if (blobARef.current) {
      blobARef.current.style.transform = translate3d(
        `${cx * 28}px, ${cy * 16}px, 0) scale(1.02`
      );
    }
    if (blobBRef.current) {
      blobBRef.current.style.transform = translate3d(
        `${cx * -26}px, ${cy * -10}px, 0) scale(1.03`
      );
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18, rotateX: 0, rotateY: 0 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black overflow-hidden"
      onMouseMove={handleContainerMouse}
    >
      {/* Background blobs (parallax via container mouse) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          ref={blobARef}
          className="absolute -right-20 top-6 w-96 h-96 bg-gradient-to-tr from-emerald-500/8 to-cyan-400/6 rounded-full blur-3xl transform transition-transform will-change-transform"
        />
        <div
          ref={blobBRef}
          className="absolute left-6 bottom-6 w-96 h-96 bg-gradient-to-tr from-indigo-600/8 to-rose-500/6 rounded-full blur-3xl transform transition-transform will-change-transform"
        />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        {/* Header with entrance animation control */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={containerControls}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            {headerTitle}
          </h1>
        </motion.div>

        {/* Advantages - cards with pointer-follow tilt and subtle effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {advantages.map((text, idx) => (
            <motion.div
              key={idx}
              ref={cardRefs[idx]}
              variants={itemVariants}
              initial="hidden"
              animate={itemControls[idx]}
              whileTap={{ scale: 0.99 }}
              onMouseMove={(e) => handleCardMove(e, idx)}
              onMouseLeave={() => handleCardLeave(idx)}
              className="group relative perspective-800"
              style={{ perspective: 900 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-900/60 to-slate-800/50 border border-slate-800 shadow-[0_12px_50px_rgba(2,6,23,0.6)] transform-gpu" />

              <motion.div
                className="relative p-8 rounded-2xl bg-slate-900/30 backdrop-blur-md border border-slate-800/40 z-10 min-h-[160px] flex flex-col justify-between will-change-transform"
                style={{ transformStyle: "preserve-3d" }}
                // animate rotate/scale via itemControls
              >
                <div>
                  <div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 p-0.5 mb-4 flex items-center justify-center transform-gpu"
                    style={{ transform: "translateZ(18px)" }}
                  >
                    {idx === 0 && <Zap className="w-6 h-6 text-white" />}
                    {idx === 1 && <Globe className="w-6 h-6 text-white" />}
                    {idx === 2 && <Lock className="w-6 h-6 text-white" />}
                  </div>

                  <p
                    className="text-slate-100 font-semibold leading-relaxed transform-gpu"
                    style={{ transform: "translateZ(12px)" }}
                  >
                    {text}
                  </p>
                </div>

                <div
                  className="mt-4 h-1 w-full bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-20 transform-gpu"
                  style={{ transform: "translateZ(8px)" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Concluding sentence */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-slate-300 text-lg leading-relaxed">{concluding}</p>
        </motion.div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <motion.button
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-3 rounded-xl py-3 px-6 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-emerald-500/30 transition"
          >
            Get Started with cTrader
          </motion.button>
        </div>
      </div>

      <style>{`
        @keyframes blob{0%{transform:translateY(0) scale(1)}33%{transform:translateY(-8px) scale(1.04)}66%{transform:translateY(6px) scale(0.98)}100%{transform:translateY(0) scale(1)}}
        .animate-blob{animation:blob 10s infinite}
        .animation-delay-4000{animation-delay:4s}
        /* small helper for perspective class in Tailwind-less setups */
        .perspective-800 { perspective: 800px; }
      `}</style>
    </div>
  );
}
