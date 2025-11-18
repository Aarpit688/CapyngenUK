import React from "react";

// Example: Logos for list bullets
// Replace these URLs with your actual brand icons or PNG/SVG files
const bulletLogo = "https://cdn-icons-png.flaticon.com/512/190/190411.png";

const WhyCapyngenSection = ({
  heading = "Why Capyngen Is Your Ideal Technology Partner",
  introText = "At Capyngen Technologies UK Limited, we blend technology know-how and crypto market insight to provide impactful solutions. We collaborate with your team to:",
  points = [
    "Develop tailored trading platforms and broker software solutions",
    "Deliver websites, mobile apps, and CRM tools",
    "Provide next to no disruption services, support, and upgrades",
  ],
  outroText = "We are committed to simplifying, securing, and scaling the operation of a crypto brokerage through technology so that you can concentrate on business expansion.",
  image = "https://picsum.photos/seed/partner/800/600",
  bulletIcon = bulletLogo,
}) => {
  return (
    <section className="w-full">
      <div
        className="
        bg-gradient-to-br from-[#05070d] via-[#0b0f1c] to-[#05070d]
        border border-[#1c2231]
        p-8 md:p-14
        relative overflow-hidden
      "
      >
        {/* Glow Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 left-10 w-[400px] h-[400px] bg-cyan-500/15 blur-[160px]" />
          <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-blue-600/15 blur-[180px]" />
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          {/* TEXT SECTION */}
          <div>
            <h2
              className="
              text-3xl md:text-4xl font-extrabold leading-snug
              text-white
            "
            >
              {heading}
            </h2>

            <p className="text-gray-300 mt-5 mb-8 text-lg leading-relaxed">
              {introText}
            </p>

            {/* BULLETS */}
            <ul className="space-y-5 mb-10">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <img
                    src={bulletIcon}
                    alt="bullet-icon"
                    className="w-6 h-6 mt-1 filter brightness-150"
                  />
                  <span className="text-gray-200 text-base leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-gray-300 text-lg leading-relaxed">{outroText}</p>
          </div>

          {/* IMAGE SECTION */}
          <div className="hidden lg:block">
            <div
              className="
              rounded-2xl overflow-hidden
              shadow-2xl shadow-black/50
              border border-[#1c2231]
            "
            >
              <img
                src={image}
                alt="Technology Partner Visual"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCapyngenSection;
