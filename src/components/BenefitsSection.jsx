import React from "react";
import {
  FaPuzzlePiece,
  FaUsers,
  FaRocket,
  FaShieldAlt,
  FaGlobe,
  FaLifeRing,
} from "react-icons/fa";

/* ---------------------------------------------
   UPDATED ICON COMPONENTS (REPLACED SVGs)
--------------------------------------------- */

export const PuzzleIcon = ({ className = "w-7 h-7" }) => (
  <FaPuzzlePiece className={className + " text-cyan-300"} />
);

export const UsersIcon = ({ className = "w-7 h-7" }) => (
  <FaUsers className={className + " text-cyan-300"} />
);

export const RocketIcon = ({ className = "w-7 h-7" }) => (
  <FaRocket className={className + " text-cyan-300"} />
);

export const ShieldIcon = ({ className = "w-7 h-7" }) => (
  <FaShieldAlt className={className + " text-cyan-300"} />
);

export const GlobeIcon = ({ className = "w-7 h-7" }) => (
  <FaGlobe className={className + " text-cyan-300"} />
);

export const SupportIcon = ({ className = "w-7 h-7" }) => (
  <FaLifeRing className={className + " text-cyan-300"} />
);

/* ---------------------------------------------
   DATA
--------------------------------------------- */

const benefitsData = [
  {
    icon: <PuzzleIcon />,
    title: "Complete Crypto Broker Setup Solution",
    description: "A single package with everything for ease.",
  },
  {
    icon: <UsersIcon />,
    title: "Client Engagement on a Higher Level",
    description:
      "CRM and automation tools result in customer satisfaction and loyalty.",
  },
  {
    icon: <RocketIcon />,
    title: "Shorter Time-to-Market",
    description:
      "Your brokerage can be up and running fast with plug-and-play solutions.",
  },
  {
    icon: <ShieldIcon />,
    title: "Secure & Compliant Platforms",
    description:
      "Be in line with regulatory requirements of different countries without giving it a second thought.",
  },
  {
    icon: <GlobeIcon />,
    title: "Support for Global Expansion",
    description:
      "Platforms that are scalable and thus perfect for international markets.",
  },
  {
    icon: <SupportIcon />,
    title: "Continuous Support & Updates",
    description:
      "You can stay efficient through the provision of ongoing technical support.",
  },
];

/* ---------------------------------------------
   CARD COMPONENT (UNCHANGED)
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
   MAIN SECTION (UNCHANGED)
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
        {/* Heading */}
        <div className="text-center mb-16">
          <h1
            className="
            text-4xl pb-5
            md:text-5xl 
            font-bold 
            tracking-tight 
            text-white
          "
          >
            Benefits of Capyngen’s Crypto Broker IT Solutions
          </h1>

          <p className="text-lg max-w-3xl mx-auto text-gray-400 mt-6">
            Partnering​‍​‌‍‌ with Capyngen makes sense not only strategically
            but also financially as it brings tangible benefits to the business.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <img
              src="https://picsum.photos/seed/crypto/800/1000"
              alt="Crypto Technology Abstract"
              className="rounded-2xl shadow-2xl shadow-black/30 w-full object-cover"
            />
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefitsData.map((benefit) => (
              <BenefitCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </div>

        {/* Outro */}
        <div className="text-center mt-16">
          <p className="text-lg max-w-4xl mx-auto text-gray-400 leading-relaxed">
            Thanks to Capyngen, your brokerage is running smoothly, getting
            bigger at a quicker pace, and is able to deliver better experiences
            to the ​‍​‌‍​‍‌​‍​‌‍​‍‌clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
