import React from "react";

const MT5IntroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#030404] via-[#07120f] to-[#0a1a15] text-white py-24 px-6 overflow-hidden">
      {/* Background lighting glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-green-400/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* --- Left: Text Content --- */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
              MT5 Trading Platform:
            </span>{" "}
            A Complete Guide for Global Traders Powered by a UK-Based Company
          </h2>

          <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
            <p>
              In response to the ongoing changes in the global financial
              markets, traders and institutions are seeking advanced platforms
              that combine{" "}
              <span className="text-emerald-300 font-medium">
                speed, stability, and multi-asset accessibility
              </span>
              .{" "}
              <span className="text-emerald-400 font-semibold">
                MetaTrader 5 (MT5)
              </span>{" "}
              is widely recognized as one of the most powerful and reliable
              platforms for modern trading.
            </p>

            <p>
              A UK-based financial company operating on a global scale can
              leverage MT5 to achieve the perfect balance of{" "}
              <span className="text-emerald-400">regulatory trust</span>,{" "}
              <span className="text-emerald-400">worldwide compatibility</span>,
              and{" "}
              <span className="text-emerald-400">cutting-edge technology</span>{" "}
              that meets the standards of institutional-grade trading.
            </p>

            <p>
              Whether a trader chooses to engage in{" "}
              <span className="text-emerald-300">forex trading</span>, access{" "}
              <span className="text-emerald-300">
                global market instruments
              </span>
              , or develop{" "}
              <span className="text-emerald-300">
                automated trading strategies
              </span>
              , the MT5 ecosystem provides a secure, efficient, and versatile
              environment — perfectly suited for both{" "}
              <span className="text-emerald-300 font-medium">
                beginners and professionals
              </span>{" "}
              alike.
            </p>
          </div>
        </div>

        {/* --- Right: Image / Visual --- */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative bg-white/5 backdrop-blur-xl border border-emerald-500/10 rounded-3xl shadow-2xl shadow-emerald-500/10 overflow-hidden max-w-md">
            <img
              src="https://picsum.photos/id/1064/600/400"
              alt="MT5 Global Trading Platform"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a15]/80 to-transparent"></div>
          </div>
          {/* Glow effect */}
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-emerald-400/20 blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default MT5IntroSection;
