import React, { useEffect } from "react";
import { MdHub, MdMonitorHeart } from "react-icons/md";
import { FaUserCheck, FaChartLine, FaServer } from "react-icons/fa";
import { TbNetwork } from "react-icons/tb";

/* -------------- Spotlight Cursor Hook -------------- */
const useSpotlightCursor = () => {
  useEffect(() => {
    const spot = document.getElementById("spotlight");
    if (!spot) return;

    /* Disable spotlight for mobile for performance */
    if (window.innerWidth < 768) {
      spot.style.display = "none";
      return;
    }

    let x = 0;
    let y = 0;

    const handleMove = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    const animate = () => {
      spot.style.transform = `translate(${x - 190}px, ${y - 190}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    requestAnimationFrame(animate);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
};

const services = [
  { text: "Bridge installation", icon: <MdHub className="iconStyle" /> },
  { text: "LP onboarding", icon: <FaUserCheck className="iconStyle" /> },
  {
    text: "Multi-asset execution setup",
    icon: <FaChartLine className="iconStyle" />,
  },
  { text: "Server optimization", icon: <FaServer className="iconStyle" /> },
  {
    text: "Trading system connectivity",
    icon: <TbNetwork className="iconStyle" />,
  },
  {
    text: "Monitoring & ongoing support",
    icon: <MdMonitorHeart className="iconStyle" />,
  },
];

const B2ConnectIntegration = () => {
  useSpotlightCursor();

  return (
    <section className="relative w-full py-14 sm:py-18 lg:py-24 bg-[#02060d] overflow-hidden">
      {/* Glow Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] -top-24 -left-24"></div>
        <div className="absolute w-[550px] h-[550px] bg-blue-600/20 blur-[200px] bottom-0 right-0"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]"></div>
      </div>

      {/* Spotlight */}
      <div
        id="spotlight"
        className="pointer-events-none fixed w-[380px] h-[380px] bg-cyan-400/10
                   blur-[120px] rounded-full transition-transform duration-75 ease-out z-20"
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div
          className="border border-cyan-400/20 rounded-xl p-6 sm:p-10 lg:p-14
                        bg-[#0b111b]/80 backdrop-blur-xl shadow-[0_0_50px_rgba(0,255,200,0.08)]"
        >
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white text-center">
            Complete End-to-End AynX Connect Integration by Aynzenix
          </h2>

          <p className="mt-3 sm:mt-4 text-gray-300 text-sm sm:text-base lg:text-lg text-center max-w-3xl mx-auto">
            Aynzenix handles your entire liquidity infrastructure setup —
            stress-free.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-14">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="relative bg-[#0e1523]/70 p-6 rounded-xl border border-cyan-400/10
                           hover:border-cyan-300/40 hover:shadow-[0_0_25px_rgba(0,255,200,0.15)]
                           transition-all duration-300 backdrop-blur-md"
              >
                {service.icon}
                <h3 className="font-semibold text-white text-sm sm:text-base mt-3">
                  {service.text}
                </h3>

                {/* Glow highlight */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 hover:opacity-10 
                                bg-gradient-to-br from-white/10 to-transparent transition-all"
                ></div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 sm:mt-16 text-center">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-cyan-300 max-w-2xl mx-auto">
              Your execution environment becomes fast, scalable &
              enterprise-ready.
            </h3>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .iconStyle {
          width: 2.25rem;
          height: 2.25rem;
          color: #67e8f9;
        }
      `}</style>
    </section>
  );
};

export default B2ConnectIntegration;
