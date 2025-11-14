import React from "react";

const CTraderIntroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#07070b] via-[#0d0a16] to-[#0e111a] text-white py-28 px-6 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-red-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* --- Left Content --- */}
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-red-400">
              cTrader Trading Platform:
            </span>{" "}
            A Modern Global Trading Solution
          </h1>

          <div className="space-y-5 text-gray-300 text-md leading-relaxed">
            <p>
              The global{" "}
              <span className="text-cyan-400">financial industry</span>
              is evolving toward faster execution, higher transparency, and
              institutional-level clarity. Among the new-generation platforms,
              <span className="text-blue-400 font-semibold"> cTrader </span>
              stands out as a powerful, data-rich, and intuitive solution built
              for traders who demand excellence.
            </p>

            <p>
              Designed with precision and modern UI, cTrader offers a seamless
              environment that appeals to traders across all experience levels.
              For a{" "}
              <span className="text-red-400 font-medium">
                UK-based global financial company
              </span>
              , cTrader provides the flexibility and technological performance
              required to support a diverse and international client base.
            </p>

            <p>
              With an unwavering focus on
              <span className="text-cyan-400 font-medium">
                {" "}
                transparency, speed,{" "}
              </span>
              and <span className="text-cyan-400 font-medium">accuracy</span>,
              cTrader delivers a trading experience that feels effortless yet
              advanced — ideal for forex, commodities, indices, and
              cryptocurrency CFD traders around the globe.
            </p>
          </div>
        </div>

        {/* --- Right Visual Section --- */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative bg-white/5 backdrop-blur-2xl border border-blue-500/20 rounded-3xl shadow-2xl shadow-blue-500/10 overflow-hidden max-w-md">
            <img
              src="https://picsum.photos/id/1064/600/400"
              alt="cTrader Global Platform Illustration"
              className="object-cover w-full h-full"
            />
            {/* Gradient overlay for polish */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e111a]/90 to-transparent"></div>
          </div>

          {/* Accent glow */}
          <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-red-500/20 blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default CTraderIntroSection;
