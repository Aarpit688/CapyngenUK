import React from "react";
import { Code2, TrendingUp, Building2, Palette } from "lucide-react";

export default function Careers4() {
  const categories = [
    {
      title: "Technology & Development",
      icon: <Code2 className="w-6 h-6 text-white" />,
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Fintech & Trading Specialists",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      color: "from-indigo-500 to-cyan-500",
    },
    {
      title: "Corporate & Operational Roles",
      icon: <Building2 className="w-6 h-6 text-white" />,
      color: "from-slate-600 to-blue-600",
    },
    {
      title: "Digital & Creative Roles",
      icon: <Palette className="w-6 h-6 text-white" />,
      color: "from-rose-500 to-pink-500",
    },
  ];

  return (
    <section className="py-20 relative text-white overflow-hidden">
      {/* ⬇ AURORA GRADIENT BEHIND SECTION */}
      <div className="absolute inset-0 -z-20">
        <div className="aurora-bg opacity-50"></div>
      </div>

      {/* Glass overlay */}
      <div className="absolute inset-0 -z-10 bg-black"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* TOP CONTENT */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight text-white">
              Who We’re Looking For
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              We hire people who are innovative, analytical, creative, and
              excellent problem-solvers. If you have the ambition and curiosity
              to build world-leading fintech products, you belong at Capyngen.
            </p>

            <p className="text-xl font-semibold text-blue-200">
              We are actively hiring across these major functions:
            </p>
          </div>

          <div className="lg:w-1/2 relative">
            {/* glowing background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl rounded-md"></div>

            <img
              src="https://picsum.photos/800/500?random=25"
              alt="Team Meeting"
              className="relative rounded-md shadow-2xl w-full object-cover h-64 lg:h-80 border border-white/10"
            />
          </div>
        </div>

        {/* GRID SECTION */}
        <div className="grid lg:grid-cols-12 gap-10">
          {/* LEFT: CATEGORY CARDS */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-xl rounded-md p-8 border border-white/10 hover:border-blue-400/40 hover:shadow-blue-500/30 hover:shadow-lg transition-all duration-500 group"
              >
                {/* ICON BOX */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  {category.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">{category.title}</h3>

                <ul className="space-y-3 text-gray-300">
                  {[
                    ...(idx === 0
                      ? [
                          "Software Developers (Python, Node.js, PHP, JavaScript)",
                          "Trading Platform Engineers (MT4/MT5/cTrader)",
                          "QA & Testing Engineers",
                          "UI/UX Designers",
                          "API & Integration Specialists",
                        ]
                      : idx === 1
                      ? [
                          "Forex Market Analysts",
                          "Risk Management Officers",
                          "Liquidity & Bridge Specialists",
                          "Platform Operations Executives",
                        ]
                      : idx === 2
                      ? [
                          "HR & Administration",
                          "Business Development & Sales",
                          "Account Managers",
                          "Finance & Billing Team",
                          "AML & Compliance Officers",
                        ]
                      : [
                          "Digital Marketers",
                          "Content Writers",
                          "Brand Strategists",
                          "Social Media Managers",
                          "Video & Graphic Designers",
                        ]),
                  ].map((role, rIndex) => (
                    <li key={rIndex} className="flex items-start text-md">
                      <span className="mr-3 mt-1.5 w-2 h-2 bg-blue-400 rounded-full"></span>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-4">
            <div className="relative h-full min-h-[320px] rounded-md overflow-hidden shadow-2xl group border border-white/10">
              {/* Image */}
              <img
                src="https://picsum.photos/600/900?random=30"
                alt="Office Workspace"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="font-bold text-2xl mb-1">Grow With Us</p>
                <p className="text-white/80 text-sm">
                  Join a community of innovators shaping the future of fintech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aurora CSS */}
      <style>{`
        .aurora-bg {
          background:
            radial-gradient(circle at 20% 20%, rgba(79, 70, 229, 0.8), transparent 50%),
            radial-gradient(circle at 80% 10%, rgba(6, 182, 212, 0.7), transparent 55%),
            radial-gradient(circle at 50% 85%, rgba(236, 72, 153, 0.7), transparent 45%);
          filter: blur(160px);
        }
      `}</style>
    </section>
  );
}
