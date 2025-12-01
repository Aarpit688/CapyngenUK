import React from "react";
import {
  Layers,
  Monitor,
  Database,
  CreditCard,
  LayoutDashboard,
  Globe,
  Megaphone,
  ArrowUpRight,
} from "lucide-react";

export const AboutUs3 = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
            What We Do — Complete Forex & Crypto Brokerage Engineering
          </h2>
          <p className="text-sm sm:text-lg text-gray-300 px-2">
            Our services include a full range of Forex and Crypto brokerage
            setup solutions such as:
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {/* Service 1: Incorporation */}
          <div className="group bg-slate-900/50 backdrop-blur-xl rounded-md p-6 sm:p-8 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col">
            <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
              <Layers className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
              Company Incorporation & Licensing
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed flex-grow">
              We collaborate with brokers to determine the best location for
              them and handle compliance, taxation & corporate accounts.
            </p>
          </div>

          {/* Photo 1 */}
          <div className="relative bg-slate-900 rounded-md overflow-hidden h-48 sm:h-60 lg:h-full group border border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
              alt="Corporate strategy meeting"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent z-20"></div>
            <div className="absolute bottom-4 left-4 z-30">
              <p className="text-white font-semibold text-sm sm:text-base">
                Global Compliance
              </p>
              <p className="text-blue-400 text-xs">Strategic Planning</p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="group bg-slate-900/50 rounded-md p-6 sm:p-8 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 flex flex-col">
            <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
              <Monitor className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-indigo-200">
              Trading Platform Setup (MT4 / MT5 / cTrader)
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed flex-grow">
              Secure architecture, liquidity connection & risk management with
              24/7 monitoring.
            </p>
          </div>

          {/* Large CRM Card (Always Full Width on Tablet) */}
          <div className="group bg-slate-900/50 rounded-md p-6 sm:p-8 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 sm:col-span-2 lg:col-span-2">
            <div className="flex flex-col md:flex-row gap-6 h-full">
              <div className="flex-1 flex flex-col">
                <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-purple-200">
                  CRM Development With MAM, PAMM & Copy Trading
                </h3>

                {/* Feature Badges */}
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 mt-auto">
                  {["MAM", "PAMM", "Copy Trading", "IB Portal"].map((item) => (
                    <div
                      key={item}
                      className="flex items-center bg-slate-800/50 p-2 rounded-md"
                    >
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 shadow"></span>
                      <span className="text-xs sm:text-sm text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden h-44 sm:h-56 md:h-auto border border-slate-700">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
                  alt="CRM Dashboard Interface"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent z-10"></div>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="group bg-slate-900/50 rounded-md p-6 sm:p-8 border border-slate-800 hover:border-green-500/40 flex flex-col transition">
            <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center mb-4">
              <CreditCard className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
              Liquidity & Payment Integration
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Connect with tier-1 liquidity providers & global payment rails.
            </p>
          </div>

          {/* Photo */}
          <div className="relative bg-slate-900 rounded-md overflow-hidden h-48 sm:h-60 group border border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 z-30">
              <p className="text-white text-sm font-semibold">
                Secure Payments
              </p>
              <p className="text-green-400 text-xs">Tier-1 Liquidity</p>
            </div>
          </div>

          {/* Service 5 */}
          <div className="group bg-slate-900/50 rounded-md p-6 sm:p-8 border border-slate-800 hover:border-orange-500/40 flex flex-col transition">
            <LayoutDashboard className="w-6 h-6 text-orange-400 mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
              Client & IB Portal Configuration
            </h3>
            <p className="text-slate-400 text-sm sm:text-base">
              Personalized dashboards & commission tracking systems.
            </p>
          </div>

          {/* Service 6 */}
          <div className="group bg-slate-900/50 rounded-md p-6 sm:p-8 border border-slate-800 hover:border-teal-500/40 flex flex-col transition">
            <Globe className="w-6 h-6 text-teal-400 mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
              Website Development & Branding
            </h3>
            <p className="text-slate-400 text-sm sm:text-base">
              We build trust-focused, conversion-driven broker websites.
            </p>
          </div>

          {/* Photo */}
          <div className="relative bg-slate-900 rounded-md overflow-hidden h-48 sm:h-60 group border border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform"
            />
          </div>

          {/* Marketing */}
          <div className="group bg-slate-900/50 rounded-md p-6 sm:p-8 border border-slate-800 hover:border-pink-500/40 flex flex-col transition md:col-span-2 lg:col-span-1">
            <Megaphone className="w-6 h-6 text-pink-400 mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
              Digital Marketing & Business Growth
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mb-4">
              SEO, campaigns & strategic brand positioning for long-term growth.
            </p>

            <div className="flex items-center gap-2 text-pink-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Grow Your Brokerage</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs3;
