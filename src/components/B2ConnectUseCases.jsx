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

        card.style.transform = `rotateX(${y / -18}deg) rotateY(${x / 18
          }deg) scale(1.05)`;
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
  for (let i = 0; i < 10; i++) {
    const p = document.createElement("span");
    p.className = "particle";

    const size = Math.random() * 5 + 3;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;

    const angle = Math.random() * 360;
    const distance = Math.random() * 45 + 20;

    p.style.transform = `rotate(${angle}deg) translate(${distance}px)`;
    element.appendChild(p);

    setTimeout(() => p.remove(), 1000);
  }
};

// -------------------- Icons --------------------
const ForexIcon = () => (
  <FaMoneyBillTrendUp className="h-7 w-7 sm:h-8 sm:w-8 text-fuchsia-300" />
);
const CryptoIcon = () => (
  <SiBlockchaindotcom className="h-7 w-7 sm:h-8 sm:w-8 text-fuchsia-300" />
);
const MultiAssetIcon = () => (
  <MdOutlineCategory className="h-7 w-7 sm:h-8 sm:w-8 text-fuchsia-300" />
);

// -------------------- Card Component --------------------
const UseCaseCard = ({ icon, title, children }) => {
  return (
    <div
      onMouseEnter={(e) => emitParticles(e.currentTarget)}
      className="relative tilt-card bg-[#0b0f16] p-6 sm:p-8 rounded-xl 
                 border border-fuchsia-500/30 transition-all duration-300 
                 hover:border-fuchsia-400 hover:shadow-[0_0_30px_rgba(255,0,255,0.3)]
                 overflow-hidden"
    >
      <div className="absolute h-20 w-20 bg-fuchsia-600/20 blur-2xl rounded-full -top-10 -right-10 opacity-0 group-hover:opacity-100 transition-all"></div>

      <div className="relative z-10">
        <div className="mb-3">{icon}</div>
        <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
          {title}
        </h4>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
};

// -------------------- Main Component --------------------
const B2ConnectUseCases = () => {
  useTilt();

  return (
    <section className="py-14 sm:py-20 bg-black px-4">
      <div
        className="relative max-w-6xl mx-auto rounded-xl p-6 sm:p-10 
                      bg-[#090d15] border border-fuchsia-500/20 
                      shadow-[0_0_40px_rgba(255,0,255,0.15)] backdrop-blur-xl"
      >
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            Use Cases of AynX Connect for Brokers
          </h2>
        </div>

        {/* Grid Responsive */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <UseCaseCard icon={<ForexIcon />} title="For Forex Brokers">
            Tap into deep price streams, lower spreads & ultra-fast execution.
          </UseCaseCard>

          <UseCaseCard icon={<CryptoIcon />} title="For Crypto Brokers">
            Access direct liquidity from digital-asset LPs & exchanges.
          </UseCaseCard>

          <UseCaseCard
            icon={<MultiAssetIcon />}
            title="For Multi-Asset Brokers"
          >
            Unified order routing + automated risk control in one hub.
          </UseCaseCard>
        </div>

        {/* Particle Animation Style */}
        <style>{`
          .particle {
            position: absolute;
            top: 50%;
            left: 50%;
            background: rgba(255,0,255,0.75);
            border-radius: 50%;
            transform-origin: center;
            animation: fadeParticle 1s ease-out forwards;
          }
          @keyframes fadeParticle {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0.2); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default B2ConnectUseCases;
