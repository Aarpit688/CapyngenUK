import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* --------------------------------------------------------
   CURSOR PARTICLE TRAIL
-------------------------------------------------------- */
const useCursorParticles = () => {
  useEffect(() => {
    const createParticle = (x, y) => {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      document.body.appendChild(particle);

      setTimeout(() => particle.remove(), 600);
    };

    const move = (e) => createParticle(e.clientX, e.clientY);
    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);
};

/* --------------------------------------------------------
   HEXAGON GRID DISTORTION LAYER
-------------------------------------------------------- */
const HexagonGrid = () => (
  <div className="pointer-events-none absolute inset-0 opacity-20 hex-grid"></div>
);

/* --------------------------------------------------------
   NEON CIRCUIT LINES FOLLOWING CURSOR
-------------------------------------------------------- */
const useNeonCircuits = () => {
  useEffect(() => {
    const layer = document.querySelector(".circuit-layer");
    if (!layer) return;

    const move = (e) => {
      layer.style.setProperty("--x", `${e.clientX}px`);
      layer.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
};

/* --------------------------------------------------------
   MAIN COMPONENT
-------------------------------------------------------- */
const B2CopyIntro = () => {
  useCursorParticles();
  useNeonCircuits();

  return (
    <section className="relative py-24 bg-[#05070d] text-white overflow-hidden">
      <div className="max-w-[90vw] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="overflow-hidden h-full border border-cyan-500/30 
                       shadow-[0_0_40px_rgba(0,255,255,0.25)]
                       transform transition-all duration-700"
          >
            <img
              src="https://picsum.photos/seed/copytrade/800/600"
              className="w-full h-full object-cover transition-transform duration-700"
              alt="Copy trading platform interface"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl lg:text-5xl font-extrabold 
                           text-transparent bg-clip-text 
                           bg-gradient-to-r from-cyan-300 to-blue-500 
                           drop-shadow-[0_0_25px_#00eaff]"
            >
              Build a Powerful Copy Trading Ecosystem with B2Copy
            </h2>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ Technologies UK Limited provides advanced
              B2Copy broker tech solutions to forex, crypto, and multi-asset
              brokers.
            </p>

            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              We help brokerages integrate B2Copy, link liquidity, configure
              trader groups, automate routing, and deploy an intuitive platform
              for beginners & professionals.
            </p>

            <div className="mt-10">
              <p className="text-xl font-semibold text-cyan-300 drop-shadow-[0_0_12px_#00eaff]">
                Launch Your B2Copy Platform – Speak with Our Experts Today.
              </p>

              <motion.a
                href="#"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.9 }}
                className="inline-block mt-6 px-10 py-4 bg-cyan-500 text-black 
                           font-bold rounded-xl shadow-[0_0_35px_#00ffff]
                           hover:shadow-[0_0_55px_#00ffff] transition-all"
              >
                Contact Our Experts
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FX STYLES */}
      <style>{`
        /* Particle Trail */
        .particle {
          position: fixed;
          width: 8px;
          height: 8px;
          background: cyan;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0.9;
          filter: blur(2px);
          animation: particleFade 0.6s ease-out forwards;
        }
        @keyframes particleFade {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(0.2); opacity: 0; }
        }

        /* Neon Circuit Layer */
        .circuit-layer {
          background:
            radial-gradient(circle at var(--x) var(--y),
              rgba(0,255,255,0.25),
              transparent 120px),
            url('https://i.ibb.co/6b2bvYm/circuit-lines.png');
          background-size: cover;
          opacity: 0.25;
          mix-blend-mode: screen;
          transition: background-position 0.1s linear;
        }

        /* Hex Grid Distortion */
        .hex-grid {
          background-image: url('https://i.ibb.co/7rG4h7X/hexgrid.png');
          background-size: 300px;
          animation: gridDistort 10s ease-in-out infinite;
        }
        @keyframes gridDistort {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.05); opacity: 0.25; }
        }
      `}</style>
    </section>
  );
};

export default B2CopyIntro;
