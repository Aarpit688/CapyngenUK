import React from "react";
import { Heart, Laptop2, Link, CheckCircle2 } from "lucide-react";

const SirixWhyChoose = () => {
  return (
    <div className="w-full bg-black py-20">
      <section className="max-w-[90vw] mx-auto w-full animate-fade-in-up">
        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600"></div>
          <div className="absolute -right-24 -top-24 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Introduction Section */}
          <div className="mb-16 max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Brokers Choose the{" "}
              <span className="text-amber-500">Sirix Platform Today</span>
            </h2>
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
              <p className="text-slate-300 leading-relaxed text-lg">
                The core intent behind the creation of Sirix was to amplify
                client interaction and to facilitate brokers who are in need of
                a user-friendly and graphically straightforward platform. In
                contrast to the usually employed trading mechanisms, Sirix
                provides less emphasis on the community-driven and social
                aspects of trading which, in turn, makes it a perfect duo of the
                traders who are just starting and brokerages that are looking to
                expand.
              </p>
            </div>
          </div>

          {/* Advantages Section */}
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-10">
              <div className="h-px w-12 bg-slate-700 mr-4"></div>
              <h3 className="text-2xl font-bold text-white text-center">
                Major Advantages of Sirix for Brokers
              </h3>
              <div className="h-px w-12 bg-slate-700 ml-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Advantage 1 */}
              <div className="group bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                <div className="w-12 h-12 bg-amber-900/20 border border-amber-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <Heart className="w-6 h-6 text-amber-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
                  Faster Client Engagement
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                  Social trading functionality that is integrated internally
                  enhances client engagement and loyalty.
                </p>
              </div>

              {/* Advantage 2 */}
              <div className="group bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                <div className="w-12 h-12 bg-amber-900/20 border border-amber-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <Laptop2 className="w-6 h-6 text-amber-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
                  Cross-Device Trading
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                  Sirix is compatible with web, mobile, and desktop, and the
                  user experience is in real-time sync.
                </p>
              </div>

              {/* Advantage 3 */}
              <div className="group bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                <div className="w-12 h-12 bg-amber-900/20 border border-amber-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <Link className="w-6 h-6 text-amber-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
                  Seamless Integration
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                  Simple API connection with CRMs, payments, and liquidity
                  providers.
                </p>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="flex items-start gap-3 bg-amber-500/5 border border-amber-500/10 p-6 rounded-xl max-w-7xl mx-auto">
              <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
              <p className="text-slate-300 text-lg font-light italic">
                By having these features brokers are enabled to provide a
                contemporary trading experience which is in line with
                international standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SirixWhyChoose;
