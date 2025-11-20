import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { CheckCircle2, ArrowRight, Award, TrendingUp } from "lucide-react";
import { assets } from "../assets/assets";

export default function CTraderServiceConclusion() {
  // Exact content strings provided
  const title =
    "Conclusion: Build a Scalable, High-Performance Brokerage with cTrader";
  const intro =
    "Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ Technologies UK Limited provides brokers with the entire range of cTrader functionalities, that are:";

  const features = [
    "White-label platform solutions for rapid brokerage launches",
    "Multi-asset trading infrastructure and liquidity bridge integration",
    "Hosting, maintenance, and backend support for safe operations",
    "Platform migration and customization services for expansion and flexibility",
  ];

  const summary =
    "Working with Capyngen means that brokers will have the equipment, linkages, and efficiency required to offer excellent trading experiences while expanding their business ​‍​‌‍​‍‌​‍​‌‍​‍‌worldwide.";

  const ctaText =
    "Deploy Complete cTrader Services for Your Brokerage – Start your high-performance setup with Capyngen.";

  // Animation controls & refs
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, amount: 0.22 });
  const containerControls = useAnimation();
  const titleControls = useAnimation();
  const itemControls = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const ctaControls = useAnimation();

  useEffect(() => {
    if (inView) {
      // entrance sequence
      containerControls.start({
        opacity: 1,
        y: 0,
        transition: { when: "beforeChildren" },
      });
      titleControls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      // staggered features
      itemControls.forEach((c, i) => {
        c.start({
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            delay: i * 0.12,
            type: "spring",
            stiffness: 90,
            damping: 14,
          },
        });
      });
      // CTA pop
      ctaControls.start({
        opacity: 1,
        y: 0,
        transition: { delay: 0.6, type: "spring", stiffness: 70 },
      });
    }
  }, [inView, containerControls, titleControls, itemControls, ctaControls]);

  // Pointer-follow tilt for cards
  const handleCardMove = (e, idx) => {
    const el = cardRefs[idx].current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rotateY = (px - 0.5) * 18; // -9..9
    const rotateX = -(py - 0.5) * 10; // -5..5

    itemControls[idx].start({
      rotateX,
      rotateY,
      scale: 1.03,
      transition: { type: "spring", stiffness: 300, damping: 26 },
    });
  };

  const handleCardLeave = (idx) => {
    itemControls[idx].start({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 28 },
    });
  };

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0, y: 10 }}
      animate={containerControls}
      className="bg-black overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="lg:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={titleControls}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-100 mb-6 leading-tight"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={titleControls}
            className="text-slate-300 text-lg leading-relaxed mb-8"
          >
            {intro}
          </motion.p>

          <ul className="space-y-4 mb-10">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                ref={cardRefs[index]}
                initial={{
                  opacity: 0,
                  y: 18,
                  scale: 0.98,
                  rotateX: 0,
                  rotateY: 0,
                }}
                animate={itemControls[index]}
                onMouseMove={(e) => handleCardMove(e, index)}
                onMouseLeave={() => handleCardLeave(index)}
                whileTap={{ scale: 0.98 }}
                className="flex items-start bg-slate-800/50 p-4 rounded-lg border border-slate-800 hover:border-emerald-500 transition-colors transform-gpu will-change-transform"
                style={{ transformStyle: "preserve-3d" }}
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-200 font-medium">{feature}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={titleControls}
            className="border-l-4 border-emerald-500 pl-6 py-2 mb-8"
          >
            <p className="text-slate-200 italic text-lg leading-relaxed">
              "{summary}"
            </p>
          </motion.div>
        </div>

        {/* Visual Section */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={containerControls}
          className="lg:w-2/5 relative bg-gradient-to-b from-slate-900 to-slate-800 min-h-[400px] lg:min-h-full overflow-hidden"
        >
          <img
            src={assets.cTraderService11}
            alt="Scalable Brokerage Infrastructure"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
