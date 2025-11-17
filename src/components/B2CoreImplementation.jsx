// components/B2CoreImplementation.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * B2CoreImplementation.jsx
 * - Energy cursor orb (gsap for smoothness)
 * - Parallax tilt on wrapper (ref-based)
 * - Hologram shader effect on image (ref-based)
 * - Fade-up reveal (CSS animation)
 * - Neon title text
 *
 * No global DOM leaks, all listeners cleaned up.
 */

const useEnergyCursorOrb = () => {
  useEffect(() => {
    const orb = document.createElement("div");
    orb.className =
      "b2-orb pointer-events-none fixed w-12 h-12 bg-cyan-400/30 blur-xl mix-blend-screen z-[9999] opacity-90 transform translate-x-0 translate-y-0";
    document.body.appendChild(orb);

    let rafId = null;
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { x: pos.x, y: pos.y };

    const onMove = (e) => {
      target.x = e.clientX - 24;
      target.y = e.clientY - 24;
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          rafId = null;
          gsap.to(orb, {
            x: target.x,
            y: target.y,
            duration: 0.16,
            ease: "power2.out",
          });
        });
      }
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafId) cancelAnimationFrame(rafId);
      orb.remove();
    };
  }, []);
};

const useParallaxTilt = (containerRef) => {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // small smoothing via gsap
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 .. 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5;

      const rotateY = px * 8; // deg
      const rotateX = -py * 8;

      gsap.to(el, {
        rotationY: rotateY,
        rotationX: rotateX,
        transformPerspective: 900,
        duration: 0.35,
        ease: "power2.out",
        overwrite: true,
      });
    };

    const onLeave = () => {
      gsap.to(el, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    const onResize = () => {
      // re-calc if needed; nothing required here but keep handler for future use
    };
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
      gsap.set(el, { rotationX: 0, rotationY: 0 });
    };
  }, [containerRef]);
};

const useHologramImage = (imgRef) => {
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const onEnter = () => {
      img.classList.add("holo-active");
    };
    const onLeave = () => {
      img.classList.remove("holo-active");
    };

    img.addEventListener("mouseenter", onEnter);
    img.addEventListener("mouseleave", onLeave);

    return () => {
      img.removeEventListener("mouseenter", onEnter);
      img.removeEventListener("mouseleave", onLeave);
      img.classList.remove("holo-active");
    };
  }, [imgRef]);
};

const Check = ({ className = "w-5 h-5 text-cyan-300" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const B2CoreImplementation = () => {
  const parallaxRef = useRef(null);
  const imgRef = useRef(null);

  useEnergyCursorOrb();
  useParallaxTilt(parallaxRef);
  useHologramImage(imgRef);

  const features = [
    "Trader room installation",
    "Admin & back-office configuration",
    "Wallet + account structure setup",
    "Trading platform connectivity",
    "KYC automation",
    "Payment integrations",
    "CRM API routing",
    "Hosting + infrastructure deployment",
  ];

  return (
    <section className="relative py-24 px-6 bg-[#05070d] text-white overflow-hidden">
      <div
        ref={parallaxRef}
        className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-start transform-gpu"
      >
        {/* TEXT SIDE */}
        <div className="animate-fadeUp space-y-8 bg-white/5 p-8 md:p-12 border border-blue-400/10 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,140,255,0.06)]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold neon-title leading-tight">
            How Capyngen Implements B2Core for Brokers
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl">
            Capyngen offers a full turnkey installation — from trader rooms and
            back office configuration to KYC automation and hosting. We deliver
            a secure, scalable, and enterprise-grade deployment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {features.map((feat, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-cyan-300 drop-shadow-[0_0_8px_rgba(0,170,255,0.3)]" />
                </div>
                <div>
                  <p className="text-slate-200 transition-colors group-hover:text-white">
                    {feat}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xl font-semibold text-cyan-300 mt-6 drop-shadow-md">
            We set up a safe, reliable, and scalable environment for worldwide
            brokers.
          </p>
        </div>

        {/* IMAGE SIDE */}
        <div className="w-full">
          <div className="h-full overflow-hidden border border-blue-400/10 shadow-[0_30px_80px_rgba(0,120,255,0.06)] holo-wrapper">
            <img
              ref={imgRef}
              src="https://picsum.photos/seed/deploy/1200/900"
              alt="Infrastructure deployment"
              className="holo-img w-full h-full object-cover transition-all duration-600 ease-out"
            />
          </div>
        </div>
      </div>

      {/* inline styles for effects (move these into your CSS file if preferred) */}
      <style>{`
        /* fade-up */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp { animation: fadeUp 0.9s ease forwards; }

        /* neon title */
        .neon-title {
          background: linear-gradient(90deg, #6ee7ff 0%, #60a5fa 50%, #8b5cf6 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 6px 24px rgba(99, 102, 241, 0.08);
        }

        /* holo image baseline */
        .holo-wrapper { position: relative; overflow: hidden; }
        .holo-img {
          display: block;
          transform-origin: center center;
          transition: transform 0.6s cubic-bezier(.2,.9,.2,1), filter 0.45s ease, box-shadow 0.45s ease;
          will-change: transform, filter;
          filter: saturate(0.98) contrast(1);
        }

        /* subtle wrapper border glow */
        .holo-wrapper::after {
          content: "";
          position: absolute;
          inset: -1px;
          pointer-events: none;
          border-radius: inherit;
          background: linear-gradient(180deg, rgba(80,200,255,0.04), rgba(0,80,140,0.02));
          mix-blend-mode: screen;
        }

        /* small responsive tweaks */
        @media (min-width: 1024px) {
          .neon-title { font-size: 2.4rem; }
        }
      `}</style>
    </section>
  );
};

export default B2CoreImplementation;
