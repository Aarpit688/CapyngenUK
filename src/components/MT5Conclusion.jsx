import React from "react";

const MT5Conclusion = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#030404] via-[#07120f] to-[#0a1a15] text-white py-28 px-6 overflow-hidden">
      {/* Background accent glows */}
      <div className="absolute -top-48 -left-32 w-[500px] h-[500px] bg-green-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-400/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-[90vw] mx-auto text-center space-y-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
          Conclusion
        </h2>

        {/* Glass Container */}
        <div className="relative bg-white/5 backdrop-blur-xl border border-emerald-500/10 rounded-xl shadow-xl shadow-emerald-500/10 p-8 md:p-12 text-left">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            <span className="font-semibold text-emerald-300">
              MetaTrader 5 (MT5)
            </span>{" "}
            is arguably one of the most potent and flexible trading platforms
            worldwide. For a UK-based company expanding globally, MT5 represents
            the perfect balance of{" "}
            <span className="text-emerald-400">
              regulatory trust, cutting-edge technology, and seamless global
              accessibility.
            </span>
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            MT5 empowers traders of all levels — from beginners to professionals
            — through its exceptional charting tools, multi-asset capabilities,
            automated strategy integration, and secure infrastructure. It is
            built to handle the demands of international traders efficiently and
            reliably.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            Whether clients wish to execute{" "}
            <span className="text-emerald-300">forex trades</span>, engage in{" "}
            <span className="text-emerald-300">
              commodities and indices trading
            </span>
            , or automate their own trading systems, MT5 provides a{" "}
            <span className="text-emerald-400">
              stable, connected, and trusted
            </span>{" "}
            environment. When combined with a{" "}
            <span className="text-emerald-300">UK-regulated broker</span>, it
            becomes the ultimate solution for secure and uninterrupted global
            trading from any corner of the world.
          </p>

          {/* Soft gradient line */}
          <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

          {/* Tagline */}
          <p className="mt-6 text-center text-gray-400 text-base italic">
            Empowering global traders with innovation, trust, and seamless
            market access — that’s the power of MT5.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MT5Conclusion;
