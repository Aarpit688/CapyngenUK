import React, { useEffect } from "react";

// ------------------------------------------------------
// 🔵 Smooth Neon Cursor Trails (Optimized Version)
// ------------------------------------------------------
const useCursorTrails = () => {
  useEffect(() => {
    const handleMove = (e) => {
      const trail = document.createElement("div");
      trail.className = "cursor-trail";
      trail.style.setProperty("--x", `${e.clientX}px`);
      trail.style.setProperty("--y", `${e.clientY}px`);
      document.body.appendChild(trail);

      setTimeout(() => trail.remove(), 600);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
};

// ------------------------------------------------------
// 🌀 PROPER 3D Tilt Card Logic (Fixed + Smoothed)
// ------------------------------------------------------
const useTilt = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".tilt-image");

    cards.forEach((card) => {
      let bounds = card.getBoundingClientRect();

      const rotate = (e) => {
        const x = e.clientX - (bounds.left + bounds.width / 2);
        const y = e.clientY - (bounds.top + bounds.height / 2);

        const rotateX = (y / -20).toFixed(2);
        const rotateY = (x / 20).toFixed(2);

        card.style.transform = `
          perspective(900px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale(1.06)
        `;
      };

      const reset = () => {
        card.style.transform =
          "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
      };

      card.addEventListener("mousemove", rotate);
      card.addEventListener("mouseleave", reset);

      window.addEventListener("resize", () => {
        bounds = card.getBoundingClientRect();
      });
    });
  }, []);
};

// ------------------------------------------------------
// MAIN COMPONENT
// ------------------------------------------------------
const CheckIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const B2CoreIntro = () => {
  useCursorTrails();
  useTilt();

  return (
    <section className="relative py-24 px-6 bg-[#04060c] text-white overflow-hidden">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient Blobs */}
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[170px] -top-20 left-0"></div>
        <div className="absolute w-[600px] h-[600px] bg-blue-600/20 blur-[200px] bottom-0 right-0"></div>

        {/* Cyber Grid */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.06] animate-pulse-slow"></div>

        {/* Floating Nodes */}
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full blur-md animate-node"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* MAIN GRID */}
      <div className="relative max-w-[90vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-center animate-fade-up">
        {/* LEFT TEXT PANEL */}
        <div className="space-y-6 h-full p-10 bg-white/5 border border-cyan-400/20 backdrop-blur-xl shadow-[0_0_40px_rgba(0,200,255,0.15)]">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400">
            A Complete CRM Ecosystem for Forex, Crypto & Multi-Asset Brokers
          </h2>

          <p className="text-lg text-slate-300">
            Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ Technologies UK Limited is a pioneer in
            providing B2Core broker CRM solutions...
          </p>

          <ul className="space-y-4 pt-2">
            {[
              "CRM implementation",
              "Client cabinet installation",
              "API integration",
              "Payment linking",
              "Full back-office configuration",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <CheckIcon className="text-cyan-400 mr-3" />
                <span className="text-slate-200 font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <p className="text-xl font-semibold text-cyan-300">
              Start Your B2Core CRM Deployment with Our Expert Team.
            </p>
            <a
              href="#"
              className="mt-6 inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 px-10 rounded-xl shadow-[0_0_25px_rgba(0,200,255,0.5)] hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </a>
          </div>
        </div>

        {/* RIGHT: 3D Tilt Image Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-6">
          <div className="col-span-2 overflow-hidden border border-cyan-500/30 shadow-xl tilt-image">
            <img
              src="https://picsum.photos/seed/finance/800/400"
              className="w-full h-full object-cover transition-transform duration-700"
            />
          </div>

          <div className="overflow-hidden border border-cyan-500/30 shadow-xl tilt-image">
            <img
              src="https://picsum.photos/seed/crypto/400/400"
              className="w-full h-full object-cover transition-transform duration-700"
            />
          </div>

          <div className="overflow-hidden border border-cyan-500/30 shadow-xl tilt-image">
            <img
              src="https://picsum.photos/seed/team/400/400"
              className="w-full h-full object-cover transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* CSS ANIMATIONS */}
      <style>{`
        @keyframes pulse-slow {
          0%,100% { opacity: .07; }
          50% { opacity: .12; }
        }

        .cursor-trail {
          position: fixed;
          top: var(--y);
          left: var(--x);
          width: 12px;
          height: 12px;
          background: cyan;
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 30px cyan, 0 0 60px cyan;
          animation: trailFade .6s ease-out forwards;
        }

        @keyframes trailFade {
          from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          to { opacity: 0; transform: translate(-50%, -50%) scale(0); }
        }

        @keyframes nodePulse {
          0%,100% { transform: scale(.6); opacity:.4; }
          50% { transform: scale(1.4); opacity:1; }
        }
        .animate-node {
          animation: nodePulse 3s ease-in-out infinite;
        }

        @keyframes fadeUp {
          from { opacity:0; transform: translateY(40px); }
          to { opacity:1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 1s ease;
        }
      `}</style>
    </section>
  );
};

export default B2CoreIntro;
