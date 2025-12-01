import React from "react";
import { ShieldAlert, Lock, CheckCircle, Mail } from "lucide-react";

const AboutUs8 = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-black relative overflow-hidden">
      {/* Soft diagonal pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #ffffff10 0, #ffffff10 1px, transparent 0, transparent 40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-neutral-900/80 backdrop-blur-xl shadow-2xl border border-neutral-800 rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* LEFT CARD */}
            <div className="md:w-1/3 bg-neutral-950 p-8 sm:p-10 lg:p-14 text-center relative flex flex-col items-center">
              <div className="absolute w-52 h-52 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>

              <div className="relative z-10 bg-neutral-900/80 p-5 rounded-2xl border border-neutral-700 shadow-xl mb-6">
                <ShieldAlert className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400" />
              </div>

              <h3 className="text-white font-extrabold text-lg sm:text-xl tracking-wide mb-2">
                Security Notice
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Fraud Prevention Protocol
              </p>

              <div className="mt-8 sm:mt-10 w-full border-t border-neutral-800 pt-4 sm:pt-6">
                <div className="flex items-center justify-center gap-2 sm:text-sm text-green-400 font-semibold">
                  <Lock className="w-4 h-4" />
                  <span>Official Channels Only</span>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="md:w-2/3 p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-5 sm:mb-6 leading-tight">
                Commitment to Security & Transparency
              </h2>

              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
                We strongly encourage our clients to perform transactions
                exclusively with accounts officially registered under Capyngen.
              </p>

              <p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed mb-8 sm:mb-10">
                To stay protected from cyber fraud, our team remains available
                to confirm invoices through the following secure channel:
              </p>

              {/* EMAIL CONTACT BOX */}
              <div className="bg-blue-900/25 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 p-2 rounded-lg sm:p-3 shadow-lg shadow-blue-600/20">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-300 text-[10px] sm:text-xs font-semibold uppercase tracking-wide">
                      Verify Invoices At
                    </p>
                    <a
                      href="mailto:billing@capyngen.co.uk"
                      className="text-white font-bold text-base sm:text-lg hover:underline break-all"
                    >
                      billing@capyngen.co.uk
                    </a>
                  </div>
                </div>

                {/* Verified Badge */}
                <div className="flex items-center justify-center text-green-400 text-xs sm:text-sm font-semibold bg-neutral-900/70 px-4 py-1.5 rounded-full border border-green-800/40 shadow-md w-full sm:w-auto">
                  <CheckCircle className="w-4 h-4 mr-1.5" />
                  Verified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs8;
