import React from "react";
import { ShieldAlert, Lock, CheckCircle, Mail } from "lucide-react";

const AboutUs8 = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Soft Diagonal Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #ffffff10 0, #ffffff10 1px, transparent 0, transparent 40px)",
        }}
      ></div>

      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-neutral-900/80 backdrop-blur-xl shadow-2xl border border-neutral-800 overflow-hidden">
          <div className="md:flex">
            {/* LEFT — SECURITY BADGE */}
            <div className="md:w-1/3 bg-neutral-950 p-10 md:p-14 flex flex-col items-center text-center relative overflow-hidden">
              {/* Soft Pulsing Glow */}
              <div className="absolute w-48 h-48 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>

              {/* Icon Container */}
              <div className="relative z-10 bg-neutral-900/80 p-6 rounded-2xl border border-neutral-700 shadow-xl backdrop-blur-xl mb-6">
                <ShieldAlert className="w-12 h-12 text-blue-400" />
              </div>

              <h3 className="text-white font-extrabold text-xl tracking-wide mb-2">
                Security Notice
              </h3>
              <p className="text-gray-400 text-sm">Fraud Prevention Protocol</p>

              {/* Divider */}
              <div className="mt-10 w-full border-t border-neutral-800 pt-6">
                <div className="flex items-center justify-center space-x-2 text-green-400 text-sm font-semibold">
                  <Lock className="w-4 h-4" />
                  <span>Official Channels Only</span>
                </div>
              </div>
            </div>

            {/* RIGHT — MAIN CONTENT */}
            <div className="md:w-2/3 p-10 md:p-14 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                Commitment to Security & Transparency
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                We​‍​‌‍​‍‌​‍​‌‍​‍‌ put a strong emphasis on our customers that
                they should carry out transactions exclusively with official
                Capyngen accounts as indicated in our offers and invoices.
              </p>

              <p className="text-gray-400 leading-relaxed mb-10">
                In order to keep the security against cyber fraud, our crew is
                constantly on hand for confirmation through the following
                official channel:
              </p>

              {/* EMAIL VERIFICATION CARD */}
              <div className="bg-blue-900/25 backdrop-blur-xl rounded-2xl p-6 border border-blue-800/40 flex items-center justify-between flex-wrap gap-6">
                {/* Left Email Section */}
                <div className="flex items-center">
                  <div className="bg-blue-600 p-2.5 rounded-lg mr-4 shadow-lg shadow-blue-600/20">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-300 font-semibold uppercase tracking-wide">
                      Verify Invoices At
                    </p>
                    <a
                      href="mailto:billing@capyngen.co.uk"
                      className="text-white font-bold text-xl hover:underline"
                    >
                      billing@capyngen.co.uk
                    </a>
                  </div>
                </div>

                {/* Verified Badge */}
                <div className="flex items-center text-green-400 text-sm font-semibold bg-neutral-900/70 px-4 py-1.5 rounded-full border border-green-800/40 shadow-md">
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
