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

const B2CoreInfo = () => {
  const magneticBtnRef = useRef(null);

  useMagnetic(magneticBtnRef);
  useTilt();

  return (
    <section className="relative py-20 px-6 bg-[#030508] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* ---------------- IMAGE GRID ---------------- */}
        <div className="grid grid-cols-2 grid-rows-2 gap-5 h-full w-full">
          {/* Large Top Image */}
          <div className="col-span-2  overflow-hidden border border-cyan-400/30 shadow-[0_0_35px_rgba(0,255,255,0.15)] energyPulse tilt-img">
            <img
              src={assets.b2c05}
              className="w-full h-full object-cover transition-transform duration-700"
              alt="Broker Dashboard"
            />
          </div>

          {/* Bottom Images */}
          <div className=" overflow-hidden border border-cyan-400/30 shadow-lg energyPulse tilt-img">
            <img
              src={assets.b2c06}
              className="w-full h-full object-cover transition-transform duration-700"
              alt="Team"
            />
          </div>

          <div className=" overflow-hidden border border-cyan-400/30 shadow-lg energyPulse tilt-img">
            <img
              src={assets.b2c07}
              className="w-full h-full object-cover transition-transform duration-700"
              alt="Assets"
            />
          </div>
        </div>

        {/* ---------------- TEXT AREA ---------------- */}
        <div className="bg-white/5 p-10 lg:p-12 border border-cyan-400/20 backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,255,0.2)] animate-fadeUp w-full">
          <h2 className="text-4xl font-extrabold leading-tight text-white">
            Why B2Core Is the Preferred CRM for Modern Brokerages
          </h2>

          <p className="text-md text-slate-300 mt-6 ">
            B2Core​‍​‌‍​‍‌​‍​‌‍​‍‌ is an energetically, modular, and expansible
            multi-asset broker CRM system which is a first choice of forex,
            crypto, and CFD brokers globally.
          </p>

          <p className="text-md text-slate-300  mt-3">
            By means of tailored dashboards, safe client accounts, compliance
            automation tools, and ample integrations, B2Core provides a forex
            broker a vibrant operational command ​‍​‌‍​‍‌​‍​‌‍​‍‌center.
          </p>

          {/* Feature Cards */}
          <div className="space-y-2 mt-5">
            {[
              {
                title: "Customizable White-Label CRM Implementation",
                desc: "We implemented a fully branded white-label B2Core CRM with custom modules, UI design, and workflows.",
              },
              {
                title: "Multi-Asset CRM for Different Broker Types",
                desc: "The CRM system unites the trading of forex, crypto, CFDs, commodities, indices, and more.",
              },
              {
                title: "Intelligent Wallet & Back Office Management",
                desc: "By using a cutting-edge and secure admin system, brokers have the power to oversee transactions, wallets, permissions, and the user ​‍​‌‍​‍‌​‍​‌‍​‍‌activity.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black/40 p-3 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.2)]"
              >
                <strong className="block text-lg text-white">
                  {item.title}
                </strong>
                <p className="text-slate-300 mt-1 text-md leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
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

export default B2CoreInfo;
