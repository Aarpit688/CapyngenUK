import React from "react";
import { Send, FileText, UserCheck } from "lucide-react";
import { assets } from "../assets/assets";

export const Careers6 = () => {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* AURORA BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Aurora Layer 1 */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/40 via-blue-500/30 to-cyan-500/40 blur-[140px] animate-aurora" />

        {/* Aurora Layer 2 */}
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-gradient-to-r from-fuchsia-500/30 via-violet-500/30 to-indigo-500/40 blur-[150px] animate-aurora-delay" />

        {/* Aurora Layer 3 */}
        <div className="absolute top-1/3 right-1/3 w-[350px] h-[350px] bg-gradient-to-r from-emerald-500/25 via-teal-500/25 to-blue-600/25 blur-[120px] animate-aurora-rev" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          {/* LEFT COLUMN */}
          <div className="mb-16 lg:mb-0">
            <div className="mb-10">
              <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-6">
                How to Apply
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Follow these simple steps to complete your application:
              </p>
            </div>

            <div className="space-y-10 relative">
              {/* VERTICAL GLASS LINE */}
              <div className="absolute left-8 top-8 bottom-8 w-[2px] bg-white/10 backdrop-blur-md hidden sm:block"></div>

              {/* STEP TEMPLATE */}
              {[
                {
                  icon: Send,
                  title: "Step 1",
                  text: (
                    <>
                      Email your resume to{" "}
                      <a
                        href="mailto:careers@capyngen.co.uk"
                        className="text-blue-400 hover:underline"
                      >
                        careers@capyngen.co.uk
                      </a>
                    </>
                  ),
                },
                {
                  icon: FileText,
                  title: "Step 2",
                  text: "Write a short cover note explaining your fit. Include your portfolio if applying for design or development.",
                },
                {
                  icon: UserCheck,
                  title: "Step 3",
                  text: "Our HR team will contact you for the shortlisting & interview stages.",
                },
              ].map((step, i) => (
                <div key={i} className="flex sm:items-start group">
                  {/* Glassmorphism Icon Box */}
                  <div className="flex-shrink-0 h-16 w-16 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl flex items-center justify-center group-hover:border-blue-400 transition-all duration-300 group-hover:scale-110">
                    <step.icon className="h-7 w-7 text-blue-400" />
                  </div>

                  {/* Text Content */}
                  <div className="ml-6 pt-2">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-300">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN – IMAGE STACK */}
          <div className="relative h-[600px] w-full hidden lg:block">
            {/* Image Top Right */}
            <div className="absolute top-0 right-0 w-3/4 h-3/5 rounded-md overflow-hidden border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.6)] backdrop-blur-xl bg-white/5 hover:scale-105 transition-all duration-500">
              <img
                src={assets.careers7}
                alt="Applying visual"
                className="w-full h-full object-cover opacity-90"
              />
            </div>

            {/* Image Bottom Left */}
            <div className="absolute bottom-0 left-0 w-3/4 h-3/5 rounded-md overflow-hidden border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.6)] backdrop-blur-xl bg-white/5 hover:scale-105 transition-all duration-500">
              <img
                src={assets.careers8}
                alt="HR Interview"
                className="w-full h-full object-cover opacity-90"
              />
            </div>

            {/* Spinning Decorative Element */}
            <div className="absolute top-1/2 left-1/2 w-full h-full border-2 border-white/10 rounded-full scale-125 opacity-20 -translate-x-1/2 -translate-y-1/2 animate-spin-slow"></div>
          </div>

          {/* MOBILE IMAGE */}
          <div className="mt-12 lg:hidden">
            <img
              src={assets.careers8}
              alt="Applying mobile"
              className="w-full rounded-md shadow-xl border border-white/10 bg-white/5 backdrop-blur-md"
            />
          </div>
        </div>
      </div>

      {/* AURORA ANIMATIONS */}
      <style>{`
        @keyframes aurora {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-40px) translateX(40px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        @keyframes auroraDelay {
          0% { transform: translateY(20px) translateX(-20px); }
          50% { transform: translateY(-30px) translateX(30px); }
          100% { transform: translateY(20px) translateX(-20px); }
        }
        @keyframes auroraRev {
          0% { transform: translateY(-20px) translateX(20px); }
          50% { transform: translateY(30px) translateX(-30px); }
          100% { transform: translateY(-20px) translateX(20px); }
        }

        .animate-aurora {
          animation: aurora 9s ease-in-out infinite;
        }
        .animate-aurora-delay {
          animation: auroraDelay 10s ease-in-out infinite;
        }
        .animate-aurora-rev {
          animation: auroraRev 11s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 18s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Careers6;
