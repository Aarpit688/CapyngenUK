import React from "react";

const ComparisonTable = () => {
  const comparisonData = [
    { feature: "Multi-Asset Support", mt4: "Limited", mt5: "Advanced" },
    { feature: "Timeframes", mt4: "9", mt5: "21" },
    { feature: "Indicators", mt4: "30+", mt5: "80+" },
    { feature: "Market Depth", mt4: "No", mt5: "Yes" },
    { feature: "Execution", mt4: "Standard", mt5: "Faster" },
    {
      feature: "Global Trading Compatibility",
      mt4: "Moderate",
      mt5: "Excellent",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#0a0d0c] via-[#0d1715] to-[#0b211d] text-white py-24 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-16">
        {/* Header */}
        <header className="space-y-5">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
              MT5 vs MT4:
            </span>{" "}
            Why MT5 Is the Better Global Choice
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Compare the evolution of MetaTrader — see how MT5 outperforms MT4
            with greater flexibility, speed, and multi-asset trading power.
          </p>
        </header>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-3 text-left">
            <thead>
              <tr className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl">
                <th className="px-6 py-4 text-lg font-semibold text-emerald-400 rounded-l-xl">
                  Feature
                </th>
                <th className="px-6 py-4 text-lg font-semibold text-gray-200 text-center">
                  MT4
                </th>
                <th className="px-6 py-4 text-lg font-semibold text-green-400 text-center rounded-r-xl">
                  MT5
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, idx) => (
                <tr
                  key={idx}
                  className="bg-gray-800/30 hover:bg-gray-700/40 transition backdrop-blur-xl border border-gray-700/50 rounded-xl"
                >
                  <td className="px-6 py-4 text-gray-300 font-medium rounded-l-xl">
                    {item.feature}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-400">
                    {item.mt4}
                  </td>
                  <td className="px-6 py-4 text-center text-emerald-300 font-semibold rounded-r-xl">
                    {item.mt5}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed pt-8 border-t border-gray-700/40">
          <p>
            For a company operating globally,{" "}
            <span className="text-emerald-300 font-semibold">MT5</span> provides
            broader market access, enhanced analytical tools, and better
            long-term scalability — making it the platform of choice for modern
            traders and institutions worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
