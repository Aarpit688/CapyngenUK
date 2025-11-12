import React from "react";

const MT5Section = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0b0e0e] via-[#0c1715] to-[#08201D] text-white py-24 px-6 overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
              What Is MT5?
            </span>{" "}
            <br className="hidden sm:block" />
            <span className="text-gray-100">
              (MetaTrader 5 Explained for Global Use)
            </span>
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            <span className="font-semibold text-white">MetaTrader 5</span> is a
            multi-asset trading platform created by MetaQuotes to support
            trading in forex, indices, commodities, stocks (CFDs), and
            cryptocurrencies (CFDs). With its cross-regional adaptability, it is
            perfect for a company registered in the UK and serving clients
            globally.
          </p>

          {/* Benefits Box */}
          <div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 shadow-xl transition hover:shadow-emerald-500/20 hover:-translate-y-1 duration-300">
            <h3 className="text-xl font-semibold mb-4 text-green-400">
              Major Benefits Include:
            </h3>
            <ul className="grid gap-3 text-gray-200">
              {[
                "Professional-level charting",
                "Ability to trade multiple asset classes",
                "Order execution that is both fast and stable",
                "A secure and encrypted infrastructure",
                "Automated trading by Expert Advisors",
                "Compatibility with servers worldwide",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 hover:text-green-300 transition"
                >
                  <span className="mt-1.5 w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-gray-400 leading-relaxed">
            Such a mix has propelled{" "}
            <span className="text-white font-semibold">MT5</span> to become one
            of the most chosen platforms by retail traders, institutional
            players, and prop trading firms globally.
          </p>
        </div>

        {/* Right: Visual / Image */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-green-600/30 to-emerald-600/30 blur-3xl rounded-3xl"></div>
          <div className="relative overflow-hidden rounded-3xl border border-gray-700/50 backdrop-blur-xl shadow-2xl">
            <img
              src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
              alt="MetaTrader 5 Trading Dashboard"
              className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-500/40 rounded-full blur-2xl"></div>
          <div className="absolute -top-6 -right-6 w-40 h-40 bg-emerald-500/30 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default MT5Section;
