import React, { useEffect } from "react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { SiBlockchaindotcom } from "react-icons/si";
import { MdOutlineCategory } from "react-icons/md";

// -------------------- 3D Tilt Effect Hook --------------------
const useTilt = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".tilt-card");

    cards.forEach((card) => {
      const move = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        card.style.transform = `rotateX(${y / -15}deg) rotateY(${
          x / 15
        }deg) scale(1.03)`;
      };

      const reset = () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      };

      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", reset);

      return () => {
        card.removeEventListener("mousemove", move);
        card.removeEventListener("mouseleave", reset);
      };
    });
  }, []);
};

// -------------------- Particle Burst Effect --------------------
const emitParticles = (element) => {
  for (let i = 0; i < 12; i++) {
    const p = document.createElement("span");
    p.className = "particle";

    const size = Math.random() * 6 + 4;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;

    const angle = Math.random() * 360;
    const distance = Math.random() * 60 + 20;

    p.style.transform = `rotate(${angle}deg) translate(${distance}px)`;

    element.appendChild(p);

    setTimeout(() => p.remove(), 1200);
  }
};

// -------------------- Icons (React Icons Replacements) --------------------
const ForexIcon = () => (
  <FaMoneyBillTrendUp className="h-8 w-8 text-fuchsia-300" />
);

const CryptoIcon = () => (
  <SiBlockchaindotcom className="h-8 w-8 text-fuchsia-300" />
);

const MultiAssetIcon = () => (
  <MdOutlineCategory className="h-8 w-8 text-fuchsia-300" />
);

// -------------------- Card Component --------------------
const UseCaseCard = ({ icon, title, children }) => {
  const handleHover = (e) => {
    emitParticles(e.currentTarget);
  };

  return (
    <div
      onMouseEnter={handleHover}
      className="relative tilt-card bg-[#0b0f16] p-8 rounded-xl border border-fuchsia-500/30 
                 overflow-hidden group transition-all duration-300 ease-in-out 
                 hover:border-fuchsia-400 hover:shadow-[0_0_30px_rgba(255,0,255,0.3)]"
    >
      <div
        className="absolute h-24 w-24 bg-fuchsia-600/20 blur-2xl rounded-full 
                      -top-10 -right-10 group-hover:opacity-100 opacity-0 transition-all duration-500"
      ></div>

      <div className="relative z-10">
        <div className="mb-4">{icon}</div>
        <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
        <p className="text-slate-400">{children}</p>
      </div>
    </div>
  );
};

// -------------------- Main Component --------------------
const B2ConnectUseCases = () => {
  useTilt(); // enable 3D tilt

  return (
    <div className="py-20 bg-black">
      <section
        className="relative w-full max-w-[90vw] mx-auto p-10 bg-[#090d15] 
                        rounded-xl border border-fuchsia-500/20 shadow-[0_0_40px_rgba(255,0,255,0.15)] 
                        backdrop-blur-xl overflow-hidden"
      >
        <div className="text-center relative z-10 mb-14">
          <h2 className="text-4xl font-extrabold text-white">
            Use Cases of B2Connect for Brokers
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 relative z-10">
          <UseCaseCard icon={<ForexIcon />} title="For Forex Brokers">
            Have the ability to tap into deeply layered price streams, enjoy
            lowered spreads, and get super-efficient or very-fast execution.
          </UseCaseCard>

          <UseCaseCard icon={<CryptoIcon />} title="For Crypto Brokers">
            Obtain unmediated or direct liquidity provision from digital-asset
            LPs and crypto exchanges.
          </UseCaseCard>

          <UseCaseCard
            icon={<MultiAssetIcon />}
            title="For Multi-Asset Brokers"
          >
            Operate integrated or consolidated order routing and risk management
            from a single bridge ​‍​‌‍​‍‌​‍​‌‍​‍‌system.
          </UseCaseCard>
        </div>

        {/* Particle Styles */}
        <style>{`
        .particle {
          position: absolute;
          top: 50%;
          left: 50%;
          background: rgba(255,0,255,0.7);
          border-radius: 50%;
          transform-origin: center;
          animation: particleFade 1.2s ease-out forwards;
        }
        @keyframes particleFade {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.2); }
        }
      `}</style>
      </section>
    </div>
  );
};

export default B2ConnectUseCases;
