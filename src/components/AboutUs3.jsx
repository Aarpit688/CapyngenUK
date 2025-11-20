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
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6 leading-tight">
            What We Do — Complete Forex & Crypto Brokerage Engineering
          </h2>
          <p className="text-lg text-gray-300">
            Our services include a full range of Forex and Crypto brokerage
            setup solutions such as:
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {/* Service 1: Incorporation */}
          <div className="group bg-slate-900/50 backdrop-blur-xl rounded-md p-8 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col">
            <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
              <Layers className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
              Company Incorporation & Licensing
            </h3>
            <p className="text-slate-400 leading-relaxed flex-grow">
              We collaborate with brokers to determine the best location for
              them. In addition to that, we take care of all the paperwork,
              regulatory compliance, tax structuring and corporate banking
              account opening.
            </p>
          </div>

          {/* Photo 1 */}
          <div className="relative bg-slate-900 rounded-md overflow-hidden min-h-[240px] group border border-slate-800">
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
              alt="Corporate strategy meeting"
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-20"></div>
            <div className="absolute bottom-6 left-6 z-30">
              <div className="text-white font-bold text-lg">
                Global Compliance
              </div>
              <div className="text-blue-400 text-sm">Strategic Planning</div>
            </div>
          </div>

          {/* Service 2: Platform Setup */}
          <div className="group bg-slate-900/50 backdrop-blur-xl rounded-md p-8 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 flex flex-col">
            <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
              <Monitor className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-200 transition-colors">
              Trading Platform Setup (MT4 / MT5 / cTrader)
            </h3>
            <p className="text-slate-400 leading-relaxed flex-grow">
              Capyngen not only implements top trading platforms but also does
              it with highly secure backend architecture, liquidity integration,
              risk management, and 24/7 monitoring of operations.
            </p>
          </div>

          {/* Service 3: CRM (Large) */}
          <div className="group bg-slate-900/50 backdrop-blur-xl rounded-md p-8 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 md:col-span-2 lg:col-span-2">
            <div className="flex flex-col md:flex-row gap-8 h-full">
              <div className="flex-1 flex flex-col">
                <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                  <Database className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">
                  CRM Development With MAM, PAMM & Copy Trading
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  We develop complex, multi-layer CRM systems. Our CRM is
                  flexible enough to be used both by a small broker startup and
                  a big global brokerage.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                  <div className="flex items-center bg-slate-800/50 p-2 rounded-lg border border-slate-700/50">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 shadow-[0_0_8px_rgba(192,132,252,0.5)]"></span>
                    <span className="text-sm text-slate-300">
                      MAM (Multi-Account)
                    </span>
                  </div>
                  <div className="flex items-center bg-slate-800/50 p-2 rounded-lg border border-slate-700/50">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 shadow-[0_0_8px_rgba(192,132,252,0.5)]"></span>
                    <span className="text-sm text-slate-300">PAMM Modules</span>
                  </div>
                  <div className="flex items-center bg-slate-800/50 p-2 rounded-lg border border-slate-700/50">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 shadow-[0_0_8px_rgba(192,132,252,0.5)]"></span>
                    <span className="text-sm text-slate-300">Copy Trading</span>
                  </div>
                  <div className="flex items-center bg-slate-800/50 p-2 rounded-lg border border-slate-700/50">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 shadow-[0_0_8px_rgba(192,132,252,0.5)]"></span>
                    <span className="text-sm text-slate-300">
                      IB Portal & Reporting
                    </span>
                  </div>
                </div>
              </div>

              {/* Inner Image */}
              <div className="md:w-1/3 relative rounded-2xl overflow-hidden h-64 md:h-auto border border-slate-700/50 shadow-2xl">
                <div className="absolute inset-0 bg-purple-900/10 mix-blend-overlay z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
                  alt="CRM Dashboard Interface"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20"></div>
              </div>
            </div>
          </div>

          {/* Service 4: Liquidity */}
          <div className="group bg-slate-900/50 backdrop-blur-xl rounded-md p-8 border border-slate-800 hover:border-green-500/40 transition-all duration-300 flex flex-col">
            <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
              <CreditCard className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-200 transition-colors">
              Liquidity & Payment Integration
            </h3>
            <p className="text-slate-400 leading-relaxed flex-grow">
              We make it possible for brokers to access tier-1 liquidity
              providers such as LMAX, PrimeXM, and MatchPrime. Payment
              integration allows banks and crypto gateways to work together.
            </p>
          </div>

          {/* Photo 3 */}
          <div className="relative bg-slate-900 rounded-md overflow-hidden min-h-[240px] group border border-slate-800">
            <div className="absolute inset-0 bg-green-900/20 mix-blend-multiply z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop"
              alt="Digital payment network"
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-20"></div>
            <div className="absolute bottom-6 left-6 z-30">
              <div className="text-white font-bold text-lg">
                Secure Payments
              </div>
              <div className="text-green-400 text-sm">Tier-1 Liquidity</div>
            </div>
          </div>

          {/* Service 5: Portal */}
          <div className="group bg-slate-900/50 backdrop-blur-xl rounded-md p-8 border border-slate-800 hover:border-orange-500/40 transition-all duration-300 flex flex-col">
            <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
              <LayoutDashboard className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-200 transition-colors">
              Client & IB Portal Configuration
            </h3>
            <p className="text-slate-400 leading-relaxed flex-grow">
              We provide the installation of fully personalized dashboards for
              traders, investors, and IBs, that are supporting structures of
              various levels, commission tracking, and reporting tools.
            </p>
          </div>

          {/* Service 6: Website */}
          <div className="group bg-slate-900/50 backdrop-blur-xl rounded-md p-8 border border-slate-800 hover:border-teal-500/40 transition-all duration-300 flex flex-col">
            <div className="w-12 h-12 bg-teal-500/10 border border-teal-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500/20 transition-colors">
              <Globe className="w-6 h-6 text-teal-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-200 transition-colors">
              Website Development & Branding
            </h3>
            <p className="text-slate-400 leading-relaxed flex-grow">
              By implementing various innovative techniques we can convert, gain
              the trust of investors and attract them globally through
              professional broker websites made by our team.
            </p>
          </div>

          {/* Photo 4 */}
          <div className="relative bg-slate-900 rounded-md overflow-hidden min-h-[240px] group border border-slate-800">
            <div className="absolute inset-0 bg-teal-900/20 mix-blend-multiply z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
              alt="Web development team"
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-20"></div>
            <div className="absolute bottom-6 left-6 z-30">
              <div className="text-white font-bold text-lg">
                Digital Presence
              </div>
              <div className="text-teal-400 text-sm">Brand Identity</div>
            </div>
          </div>

          {/* Service 7: Marketing */}
          <div className="group bg-slate-900/50 backdrop-blur-xl rounded-md p-8 border border-slate-800 hover:border-pink-500/40 transition-all duration-300 flex flex-col md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-pink-500/10 border border-pink-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors">
              <Megaphone className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-pink-200 transition-colors">
              Digital Marketing & Business Growth
            </h3>
            <p className="text-slate-400 leading-relaxed flex-grow">
              Capyngen implements all efforts required to marketing success by
              providing a 360° marketing support which include SEO, social media
              presence, digital campaigns, and long-term brand positioning.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-700/50 flex items-center gap-2 text-pink-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Grow Your Brokerage</span>{" "}
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs3;
