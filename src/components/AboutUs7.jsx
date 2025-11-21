import React from "react";
import { Users, MapPin, ShieldCheck } from "lucide-react";
import { assets } from "../assets/assets";

export const AboutUs7 = () => {
  const expertiseAreas = [
    "Technical Architecture",
    "Software Development",
    "Risk and Compliance",
    "AML Operations",
    "Human Resources & Administration",
    "Marketing & Growth Strategy",
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Soft Aurora Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[45vw] h-[45vw] bg-purple-600/25 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[55vw] h-[55vw] bg-blue-500/20 blur-[170px] rounded-full"></div>
        <div className="absolute top-1/3 left-1/4 w-[40vw] h-[40vw] bg-emerald-500/15 blur-[190px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          {/* LEFT COLUMN */}
          <div className="order-2 lg:order-1 mt-16 lg:mt-0">
            <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
              Our Leadership — A Multi-National Expert Team
            </h2>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We​‍​‌‍​‍‌​‍​‌‍​‍‌ are fortunate to have experts spread across our
              global teams in the UK, USA, and India in the following areas:
            </p>

            {/* Expertise Pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {expertiseAreas.map((area, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 
                             backdrop-blur-xl border border-white/10 text-gray-200 text-md 
                             hover:border-blue-400 hover:text-blue-300 transition"
                >
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                  {area}
                </span>
              ))}
            </div>

            {/* Quote Card */}
            <div className="relative bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-xl">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 rounded-l-2xl"></div>

              <p className="text-gray-200 italic leading-relaxed">
                “The leadership of the company is composed of seasoned
                professionals who are at the helm of each department. They are
                the ones who guarantee accuracy, safety, and top-notch quality
                in every ​‍​‌‍​‍‌​‍​‌‍​‍‌project.”
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN — Upgraded Staggered Image Layout */}
          <div className="order-1 lg:order-2 relative">
            {/* Soft Glow */}
            <div className="absolute inset-0 bg-blue-400/10 blur-[120px] rounded-full"></div>

            <div className="grid grid-cols-2 gap-6">
              {/* Column 1 */}
              <div className="space-y-6 mt-10">
                <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-white/10">
                  <img
                    src={assets.aboutUs13}
                    alt="Leader 1"
                    className="w-full h-64 object-cover"
                  />
                </div>

                <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-white/10">
                  <img
                    src={assets.aboutUs14}
                    alt="Leader 2"
                    className="w-full h-56 object-cover"
                  />
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-6">
                <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-white/10">
                  <img
                    src={assets.aboutUs15}
                    alt="Leader 3"
                    className="w-full h-56 object-cover"
                  />
                </div>

                <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-white/10">
                  <img
                    src={assets.aboutUs16}
                    alt="Leader 4"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs7;
