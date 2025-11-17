import React from "react";

/* ---------------------------------------------
   UPGRADED ICON COMPONENTS
--------------------------------------------- */

export const PuzzleIcon = ({ className = "w-7 h-7" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.7}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
    />
  </svg>
);

export const UsersIcon = ({ className = "w-7 h-7" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.7}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-3-5.197M15 21a9 9 0 00-9-9"
    />
  </svg>
);

export const RocketIcon = ({ className = "w-7 h-7" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.7}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

export const ShieldIcon = ({ className = "w-7 h-7" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.7}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

export const GlobeIcon = ({ className = "w-7 h-7" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.7}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293a1 1 0 010 1.414L5.414 8l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm9.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L18.586 8l-2.293-2.293a1 1 0 010-1.414z"
    />
  </svg>
);

export const SupportIcon = ({ className = "w-7 h-7" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.7}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

/* ---------------------------------------------
   DATA
--------------------------------------------- */

const benefitsData = [
  {
    icon: <PuzzleIcon />,
    title: "Complete Crypto Broker Setup Solution",
    description:
      "A single package with everything needed for effortless setup.",
  },
  {
    icon: <UsersIcon />,
    title: "Client Engagement on a Higher Level",
    description:
      "CRM + automation tools increase customer satisfaction & loyalty.",
  },
  {
    icon: <RocketIcon />,
    title: "Shorter Time-to-Market",
    description: "Launch your brokerage fast with plug-and-play systems.",
  },
  {
    icon: <ShieldIcon />,
    title: "Secure & Compliant Platforms",
    description: "Meet global regulatory standards with zero complexity.",
  },
  {
    icon: <GlobeIcon />,
    title: "Built for Global Expansion",
    description:
      "Scale effortlessly and serve international markets with ease.",
  },
  {
    icon: <SupportIcon />,
    title: "Continuous Support & Updates",
    description:
      "Stay efficient with ongoing improvements and dedicated support.",
  },
];

/* ---------------------------------------------
   CARD COMPONENT (IMPROVED)
--------------------------------------------- */

const BenefitCard = ({ icon, title, description }) => (
  <div
    className="
    bg-[#0e111a] 
    border border-[#1c2231] 
    rounded-2xl 
    p-6 
    flex flex-col 
    gap-4 
    transition-all 
    duration-300 
    hover:border-cyan-400/50 
    hover:shadow-lg 
    hover:shadow-cyan-400/10 
    hover:-translate-y-1
  "
  >
    <div className="p-3 rounded-xl bg-[#151923] border border-[#1f2533] text-cyan-300">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
  </div>
);

/* ---------------------------------------------
   MAIN SECTION (IMPROVED)
--------------------------------------------- */

const BenefitsSection = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#05070d] via-[#0a0f1c] to-[#05070d] px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Soft gradient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-10 w-[400px] h-[400px] bg-cyan-500/15 blur-[160px]"></div>
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-600/15 blur-[180px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h1
            className="
            text-4xl pb-5
            md:text-5xl 
            font-bold 
            tracking-tight 
            text-transparent 
            bg-clip-text 
            bg-gradient-to-r 
            from-cyan-300 
            to-blue-400
          "
          >
            Benefits of Capyngen’s Crypto Broker IT Solutions
          </h1>

          <p className="text-lg max-w-3xl mx-auto text-gray-400 mt-6">
            Partnering with Capyngen delivers strategic, operational, and
            financial advantages that elevate your brokerage.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Image */}
          <div className="lg:col-span-5">
            <img
              src="https://picsum.photos/seed/crypto/800/1000"
              alt="Crypto Technology Abstract"
              className="rounded-2xl shadow-2xl shadow-black/30 w-full object-cover"
            />
          </div>

          {/* Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefitsData.map((benefit) => (
              <BenefitCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </div>

        {/* Outro */}
        <div className="text-center mt-16">
          <p className="text-lg max-w-4xl mx-auto text-gray-400 leading-relaxed">
            With Capyngen, your brokerage becomes smoother, scales faster, and
            delivers exceptional experiences that keep clients coming back.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
