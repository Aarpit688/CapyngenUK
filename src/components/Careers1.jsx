import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Careers1() {
  return (
    <section className="relative bg-black pt-24 min-h-screen overflow-hidden">
      {/* 🌌 Aurora Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="aurora-bg"></div>
      </div>

      <div className="relative max-w-[90vw] mx-auto">
        {/* ✨ Strong Glassmorphism Card */}
        <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.6)] overflow-hidden">
          <div className="lg:grid lg:grid-cols-12">
            {/* IMAGE */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-full order-first lg:order-last">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-90"
                src="https://picsum.photos/800/1200"
                alt="Capyngen Team"
              />

              {/* Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-black/40"></div>
            </div>

            {/* CONTENT */}
            <div className="lg:col-span-7 p-10 sm:p-14 lg:p-16 flex flex-col justify-center text-white">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                Careers at Capyngen Technologies UK Limited
              </h1>

              <div className="prose prose-lg prose-invert text-gray-300">
                <p className="mb-6">
                  Be a part of the transformation in global trading by working
                  with one of the fastest-growing fintech technology companies
                  globally. At Capyngen Technologies UK Limited, we create
                  cutting-edge solutions for Forex, Crypto, and Multi-Asset
                  brokerages globally. This journey is powered by a mix of
                  thinkers, innovators, developers, and leaders — who happen to
                  be passionate — and we are open to welcoming new talents on
                  board.
                </p>
                <p className="mb-8">
                  If you are an experienced fintech professional or a motivated
                  beginner, Capyngen will still be able to offer you an
                  environment where you can develop, innovate and have a genuine
                  impact on the worldwide financial technology sector.
                </p>
              </div>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                {/* Primary */}
                <button className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/40 inline-flex items-center">
                  View Open Roles
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>

                {/* Secondary */}
                <button className="px-8 py-3 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 backdrop-blur-xl transition-all">
                  Our Culture
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Extensions */}
      <style>
        {`
          /* 🌌 Aurora Animation Keyframes */
          @keyframes auroraFlow {
            0% { transform: translate(-20%, -10%) scale(1); opacity: 0.5; }
            50% { transform: translate(10%, 20%) scale(1.2); opacity: 0.8; }
            100% { transform: translate(-20%, -10%) scale(1); opacity: 0.5; }
          }

          /* Aurora Layer */
          .aurora-bg {
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 20% 20%, rgba(0,180,255,0.35), transparent 60%),
                        radial-gradient(circle at 80% 30%, rgba(190,0,255,0.35), transparent 60%),
                        radial-gradient(circle at 50% 80%, rgba(0,255,160,0.35), transparent 70%);
            filter: blur(100px);
            animation: auroraFlow 12s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}
