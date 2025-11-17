import React, { useRef } from "react";
import { motion } from "framer-motion";

/* ----------------------------
   Mouse Glow Effect Hook
-----------------------------*/
const useMouseGlow = (selector) => {
  React.useEffect(() => {
    const el = document.querySelector(selector);
    if (!el) return;

    const move = (e) => {
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [selector]);
};

/* ----------------------------
   Tilt Hook
-----------------------------*/
const useTilt = () => {
  const ref = useRef(null);

  const move = (e) => {
    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    card.style.transform = `perspective(900px) rotateX(${y / 20}deg) rotateY(${
      x / -20
    }deg)`;
  };

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg)";
    }
  };

  return { ref, move, reset };
};

/* ----------------------------
   Icon
-----------------------------*/
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

/* ----------------------------
   Component
-----------------------------*/
const B2CoreDeployment = () => {
  const tiltImg = useTilt();
  useMouseGlow(".mouse-glow-area");

  const services = [
    "Branding & customization",
    "Role-based access setup",
    "Payment & trading integrations",
    "Server optimization",
    "User journey flows",
    "Post-deployment maintenance",
  ];

  return (
    <section className="relative py-20 bg-[#05070d] text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold hologram-text bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">
              Complete White-Label B2Core CRM Deployment
            </h2>

            <p className="mt-6 text-lg text-slate-300">
              Capyngen manages the entire end-to-end process:
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {services.map((srv, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                >
                  <div className="flex items-start">
                    <CheckIcon className="text-cyan-400 drop-shadow-[0_0_6px_#00eaff]" />
                    <span className="ml-3 text-slate-300">{srv}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              className="inline-block mt-8 px-10 py-4 bg-cyan-500 text-black font-bold rounded-xl shadow-[0_0_30px_#00ffff]"
            >
              Talk to Us
            </motion.a>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            ref={tiltImg.ref}
            onMouseMove={tiltImg.move}
            onMouseLeave={tiltImg.reset}
            className="overflow-hidden rounded-2xl border border-cyan-400/30 shadow-[0_0_50px_#00ffff50] cursor-pointer"
          >
            <img
              src="https://picsum.photos/seed/ecosystem/900/650"
              className="w-full h-full object-cover transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes hologramFlicker {
          0% { opacity: 1; }
          50% { opacity: 0.85; text-shadow: 0 0 20px #00eaff; }
          100% { opacity: 1; }
        }
        .hologram-text { animation: hologramFlicker 2s infinite; }

        @keyframes slowGrid { 0%{ background-position:0 0 } 100%{ background-position:400px 400px } }
        .animate-slowGrid { animation: slowGrid 60s linear infinite; }

        .mouse-glow-area {
          background: radial-gradient(250px circle at var(--mx) var(--my),
            rgba(0, 255, 255, 0.2),
            rgba(0, 255, 255, 0) 70%
          );
          transition: background 0.15s ease-out;
        }
      `}</style>
    </section>
  );
};

export default B2CoreDeployment;
