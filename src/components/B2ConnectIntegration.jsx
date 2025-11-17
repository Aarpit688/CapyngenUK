import React, { useEffect } from "react";
import { MdHub, MdMonitorHeart } from "react-icons/md";
import { FaUserCheck, FaChartLine, FaServer } from "react-icons/fa";
import { TbNetwork } from "react-icons/tb";

// --- Smooth spotlight cursor using requestAnimationFrame ---
const useSpotlightCursor = () => {
  useEffect(() => {
    const spot = document.getElementById("spotlight");
    let x = 0;
    let y = 0;

    if (!spot) return;

    const handleMove = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    const animate = () => {
      spot.style.transform = `translate(${x - 180}px, ${y - 180}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    requestAnimationFrame(animate);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
};

const services = [
  {
    text: "Bridge installation",
    icon: <MdHub className="h-10 w-10 text-teal-300 mb-4" />,
  },
  {
    text: "LP onboarding",
    icon: <FaUserCheck className="h-10 w-10 text-teal-300 mb-4" />,
  },
  {
    text: "Multi-asset execution setup",
    icon: <FaChartLine className="h-10 w-10 text-teal-300 mb-4" />,
  },
  {
    text: "Server optimization",
    icon: <FaServer className="h-10 w-10 text-teal-300 mb-4" />,
  },
  {
    text: "Trading system connectivity",
    icon: <TbNetwork className="h-10 w-10 text-teal-300 mb-4" />,
  },
  {
    text: "Monitoring & ongoing support",
    icon: <MdMonitorHeart className="h-10 w-10 text-teal-300 mb-4" />,
  },
];

const B2ConnectIntegration = () => {
  useSpotlightCursor();

  return (
    <section className="relative w-full py-24 bg-[#02060d] overflow-hidden">
      {/* Gradient background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-cyan-600/20 blur-[160px] -top-10 -left-20"></div>
        <div className="absolute w-[600px] h-[600px] bg-blue-700/20 blur-[200px] bottom-0 right-0"></div>

        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.06] animate-pulse-slow"></div>

        {/* Floating particles */}
        <div className="absolute w-2 h-2 bg-cyan-400 rounded-full blur-sm animate-bounce top-20 left-1/3"></div>
        <div className="absolute w-3 h-3 bg-blue-500 rounded-full blur-md animate-ping bottom-28 right-1/4"></div>
      </div>

      {/* Spotlight cursor */}
      <div
        id="spotlight"
        className="pointer-events-none fixed w-96 h-96 bg-cyan-400/10 blur-[120px] rounded-full 
                   transition-transform duration-100 ease-out z-20"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div
          className="relative border border-cyan-500/20 rounded-3xl p-10 md:p-16 
                     bg-[#0b111b]/80 backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,200,0.1)]"
        >
          {/* Title */}
          <h2 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-400 text-center animate-shimmer">
            Complete End-to-End B2Connect Integration by Capyngen
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-gray-300 text-lg text-center max-w-3xl mx-auto">
            <span className="font-bold text-teal-200">
              Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌
            </span>{" "}
            enables the entire rollout that includes:
          </p>

          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-[#0e1523]/60 p-6 rounded-xl border border-cyan-400/10 
                           hover:border-cyan-300/50 transition-all duration-300 
                           shadow-[0_0_20px_rgba(0,255,200,0.05)] hover:shadow-cyan-500/20
                           backdrop-blur-md group hover:-translate-y-1"
              >
                {service.icon}
                <h3 className="font-semibold text-white">{service.text}</h3>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-white/10 to-transparent rounded-xl transition-all duration-300"></div>

                {/* Neon Outline */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-cyan-300/40 transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div
            className="mt-16 p-6 rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 
                       shadow-[0_0_25px_rgba(0,255,255,0.1)] text-center"
          >
            <h3 className="text-xl font-bold text-teal-200 animate-shimmer">
              Your liquidity and execution environment becomes scalable,
              reliable, and enterprise-ready.
            </h3>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .animate-shimmer {
          background-size: 250%;
          animation: shimmer 4s ease infinite;
        }
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse-slow {
          0%,100% { opacity: .06; }
          50% { opacity: .12; }
        }
      `}</style>
    </section>
  );
};

export default B2ConnectIntegration;
