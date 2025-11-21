import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { assets } from "../assets/assets";

/* ---------------------------------------------------------
   MAGNETIC BUTTON HOOK
--------------------------------------------------------- */
const useMagnetic = (ref) => {
  useEffect(() => {
    const btn = ref.current;
    if (!btn) return;

    const strength = 40;

    const move = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      gsap.to(btn, {
        x: x / strength,
        y: y / strength,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const reset = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.3, ease: "power3.out" });
    };

    btn.addEventListener("mousemove", move);
    btn.addEventListener("mouseleave", reset);

    return () => {
      btn.removeEventListener("mousemove", move);
      btn.removeEventListener("mouseleave", reset);
    };
  }, [ref]);
};

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

/* ---------------------------------------------------------
   3D TILT HOOK
--------------------------------------------------------- */
const useTilt = () => {
  useEffect(() => {
    const tiltItems = document.querySelectorAll(".tilt-img");

    tiltItems.forEach((el) => {
      const move = (e) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        const rotateX = gsap.utils.mapRange(0, 1, 10, -10)(y);
        const rotateY = gsap.utils.mapRange(0, 1, -10, 10)(x);

        gsap.to(el, {
          rotationX: rotateX,
          rotationY: rotateY,
          transformPerspective: 600,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const reset = () => {
        gsap.to(el, { rotationX: 0, rotationY: 0, duration: 0.4 });
      };

      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", reset);
    });
  }, []);
};

/* ---------------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------------- */

const B2CoreIntro = () => {
  useCursorTrails();
  const magneticBtnRef = useRef(null);

  useMagnetic(magneticBtnRef);
  useTilt();

  return (
    <section className="relative py-28 px-6 bg-[#030508] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* ---------------- TEXT AREA (NOW ON LEFT) ---------------- */}
        <div className="bg-white/5 p-10 lg:p-12 border border-cyan-400/20 backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,255,0.2)] animate-fadeUp w-full order-1 lg:order-1">
          <h2 className="text-4xl font-extrabold leading-tight text-white">
            A Complete CRM Ecosystem for Forex, Crypto & Multi-Asset Brokers
          </h2>

          <p className="text-md text-slate-300 mt-6">
            Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ Technologies UK Limited is a pioneer in
            providing B2Core broker CRM solutions, by which the entire broker
            life-cycle is made efficient through easy onboarding, workflow
            automation, account management, and the facilitation of broker
            operations worldwide.
          </p>

          <p className="text-md text-slate-300 mt-3">
            We take care of CRM implementation, client cabinet installation, API
            integration, payment linking, and full back-office ​​configuration.
          </p>

          {/* CTA BUTTON */}
          <div className="mt-6">
            <button
              ref={magneticBtnRef}
              className="relative mt-4 inline-block bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-10 py-4 rounded-xl font-bold shadow-[0_0_25px_rgba(0,200,255,0.5)] hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </button>
          </div>
        </div>

        {/* ---------------- IMAGE GRID (NOW ON RIGHT) ---------------- */}
        <div className="grid grid-cols-2 grid-rows-2 gap-5 h-full max-h-130 w-full order-2 lg:order-2">
          {/* Large Top Image */}
          <div className="col-span-2 overflow-hidden border border-cyan-400/30 shadow-[0_0_35px_rgba(0,255,255,0.15)] energyPulse tilt-img">
            <img
              src={assets.b2c05}
              className="w-full h-full object-cover transition-transform duration-700"
              alt="Broker Dashboard"
            />
          </div>

          {/* Bottom Images */}
          <div className="overflow-hidden border border-cyan-400/30 shadow-lg energyPulse tilt-img">
            <img
              src={assets.b2c06}
              className="w-full h-full object-cover transition-transform duration-700"
              alt="Team"
            />
          </div>

          <div className="overflow-hidden border border-cyan-400/30 shadow-lg energyPulse tilt-img">
            <img
              src={assets.b2c07}
              className="w-full h-full object-cover transition-transform duration-700"
              alt="Assets"
            />
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 1s ease forwards;
        }

        @keyframes pulseGlow {
          0% { box-shadow: 0 0 10px rgba(0,255,255,0.1); }
          50% { box-shadow: 0 0 25px rgba(0,255,255,0.3); }
          100% { box-shadow: 0 0 10px rgba(0,255,255,0.1); }
        }
        .energyPulse {
          animation: pulseGlow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default B2CoreIntro;
