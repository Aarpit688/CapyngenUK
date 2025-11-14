import React from "react";

const CTraderArchitectureSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#0a0a10] via-[#0d0f18] to-[#11131b] text-white py-28 px-6 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-24">
        {/* Header Section */}
        <header className="text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-red-400">
              A Modern Platform Built for
            </span>{" "}
            Professional and Retail Traders
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Built on cutting-edge architecture, cTrader combines speed,
            performance, and transparency to meet the demands of global traders
            across all levels of experience.
          </p>
        </header>

        {/* Section 1 - Left Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://cdn.dribbble.com/userupload/13244021/file/original-87862d3ed5a97cf9ab19ffac720bb8e9.png?resize=1200x900"
              alt="cTrader Speed and Architecture"
              className="rounded-3xl shadow-2xl shadow-blue-500/10 border border-white/10"
            />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-300">
              Cutting-Edge Architecture for Lightning Speed
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Unlike legacy trading platforms,{" "}
              <span className="text-cyan-400 font-medium">cTrader</span> is
              built on a new-generation architecture that optimizes data
              processing, enabling faster order execution and seamless
              connectivity for traders worldwide.
            </p>
            <p className="text-gray-400">
              This makes it ideal for both high-frequency trading and long-term
              investment strategies, ensuring reliability at institutional
              standards.
            </p>
          </div>
        </div>

        {/* Section 2 - Right Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-300">
              Designed with Simplicity and Transparency
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              The cTrader interface prioritizes usability — offering a{" "}
              <span className="text-blue-400 font-medium">
                clean, intuitive workspace
              </span>{" "}
              that keeps critical market data in focus while minimizing
              distractions.
            </p>
            <p className="text-gray-400">
              Its advanced Level II market depth view allows traders to see
              liquidity layers directly from providers, giving a transparent
              understanding of true market conditions.
            </p>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <img
              src="https://cdn.dribbble.com/userupload/13211880/file/original-71f1cf0568e79f7738035c48e3b2db54.png?resize=1200x900"
              alt="cTrader Transparency and Interface"
              className="rounded-3xl shadow-2xl shadow-red-500/10 border border-white/10"
            />
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-500/10 blur-3xl rounded-full"></div>
          </div>
        </div>

        {/* Section 3 - Center Image */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-300">
            A Platform That Scales Globally
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            With enhanced performance on web and mobile,{" "}
            <span className="text-cyan-400 font-semibold">cTrader</span> is
            engineered for speed and global accessibility. Traders can monitor
            markets, execute orders, and manage strategies on any device,
            anywhere in the world.
          </p>
          <div className="relative flex justify-center mt-10">
            <img
              src="https://cdn.dribbble.com/userupload/13092616/file/original-9b9a9267e5a58a5367c58a67a25f42d0.png?resize=1200x900"
              alt="Global Access and Connectivity"
              className="rounded-3xl shadow-2xl shadow-blue-500/10 border border-white/10 w-full max-w-3xl"
            />
            <div className="absolute -bottom-10 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-red-500/10 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTraderArchitectureSection;
