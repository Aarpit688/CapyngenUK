import React from "react";
import { Home, Clock, Mail, MessageCircle } from "lucide-react";
import ProfileImg from "../assets/sampleImg.png"; // Use your actual image as needed

// Reusable step card
function StepCard({
  number,
  title,
  description,
  icon: Icon,
  position = "top-left",
}) {
  const pos = typeof position === "string" ? position : "top-left";
  const isTop = pos.includes("top");
  const isLeft = pos.includes("left");

  return (
    <div className="relative">
      {/* Number Badge with tail */}
      <div
        className={`absolute ${isTop ? "top-0" : "bottom-0"} ${
          isLeft ? "left-0" : "right-0"
        } z-10`}
      >
        <div className="relative">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-[#7A9428] shadow-lg flex flex-col items-center justify-center text-white">
            <span className="text-4xl md:text-5xl font-bold">{number}</span>
            <span className="text-xs md:text-sm tracking-wider">
              LOREM IPSUM
            </span>
          </div>
          {/* Triangle tail */}
          <div
            className={`absolute ${isTop ? "bottom-[-12px]" : "top-[-12px]"} ${
              isLeft ? "left-8" : "right-8"
            } w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent ${
              isTop
                ? "border-t-[12px] border-t-[#7A9428]"
                : "border-b-[12px] border-b-[#7A9428]"
            }`}
          />
        </div>
      </div>

      {/* Icon Box or image */}
      <div
        className={`absolute ${isTop ? "top-0" : "bottom-0"} ${
          isLeft ? "right-0" : "left-0"
        } z-10`}
      >
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white shadow-lg flex items-center justify-center">
          {/* Use image for step 1 */}
          {number === "01" ? (
            <img
              src={ProfileImg}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover"
              alt="profile"
            />
          ) : (
            <Icon
              className="w-12 h-12 md:w-14 md:h-14 text-[#7A9428]"
              strokeWidth={1.5}
            />
          )}
        </div>
      </div>

      {/* Content Card */}
      <div
        className={`bg-white rounded-2xl shadow-xl p-6 ${
          isTop ? "pt-20 md:pt-24" : "pb-20 md:pb-24"
        } ${
          isLeft ? "ml-8 mr-20 md:mr-24" : "mr-8 ml-20 md:ml-24"
        } min-h-[200px] md:min-h-[220px]`}
      >
        <div
          className={`absolute ${
            isTop
              ? "top-[88px] md:top-[100px]"
              : "bottom-[88px] md:bottom-[100px]"
          } ${
            isLeft ? "left-[20px]" : "right-[20px]"
          } w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent ${
            isTop
              ? "border-b-[16px] border-b-white"
              : "border-t-[16px] border-t-white"
          }`}
        />
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#7A9428] flex items-center justify-center">
            <span className="text-white text-lg font-bold leading-none">+</span>
          </div>
          <h3 className="text-[#7A9428] font-bold text-base md:text-lg uppercase tracking-wide">
            {title}
          </h3>
        </div>
        <p className="text-gray-700/70 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

const stepsData = [
  {
    number: "01",
    label: "STEP ONE",
    title: "LOREM IPSUM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    icon: Home,
    position: "top-left",
  },
  {
    number: "02",
    label: "STEP TWO",
    title: "LOREM IPSUM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    icon: Clock,
    position: "top-right",
  },
  {
    number: "03",
    label: "STEP THREE",
    title: "LOREM IPSUM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    icon: MessageCircle,
    position: "bottom-right",
  },
  {
    number: "04",
    label: "STEP FOUR",
    title: "LOREM IPSUM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    icon: Mail,
    position: "bottom-left",
  },
];

export default function StepsZigzagInfographic() {
  return (
    <div className="relative w-full py-14 px-1 sm:px-2 min-h-screen overflow-hidden bg-gradient-to-bl from-[#F3F8E4] via-white to-[#E7F1CE]">
      {/* Animated, softly glowing background blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-24 left-4 w-80 h-80 bg-green-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/2 right-6 w-[380px] h-[360px] bg-lime-400 opacity-10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/2 w-[420px] h-[400px] bg-[#7A9428] opacity-10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {stepsData.map((step, idx) => (
          <StepCard key={step.number} {...step} />
        ))}
      </div>

      {/* Stylish Button */}
      <div className="flex justify-center mt-16">
        <button className="bg-gradient-to-r from-[#9AB835] to-[#7A9428] hover:from-[#7A9428] hover:to-[#9AB835] text-white text-base font-bold px-12 py-3 rounded-full shadow-xl transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-lime-200">
          More Steps
        </button>
      </div>
    </div>
  );
}
