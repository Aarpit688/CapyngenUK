import React from "react";
import { Lightbulb, Briefcase, Package, Users, TrendingUp } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Innovation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed voluptuat mollis felis a pulvinar. Curabitur a placerat nibh. Ut eu sem dictum lorem auctor tincidunt in eget urna.",
    icon: <Lightbulb className="w-6 h-6" />,
    numberBg: "bg-pink-400",
    badgeBg: "bg-gradient-to-r from-pink-500 to-pink-600",
    badgeText: "text-white",
    iconBg: "bg-pink-400",
  },
  {
    id: 2,
    title: "Business",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed voluptuat mollis felis a pulvinar. Curabitur a placerat nibh. Ut eu sem dictum lorem auctor tincidunt in eget urna.",
    icon: <Briefcase className="w-6 h-6" />,
    numberBg: "bg-blue-500",
    badgeBg: "bg-gradient-to-r from-blue-600 to-blue-700",
    badgeText: "text-white",
    iconBg: "bg-blue-500",
  },
  {
    id: 3,
    title: "Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed voluptuat mollis felis a pulvinar. Curabitur a placerat nibh. Ut eu sem dictum lorem auctor tincidunt in eget urna.",
    icon: <Package className="w-6 h-6" />,
    numberBg: "bg-orange-400",
    badgeBg: "bg-gradient-to-r from-orange-500 to-orange-600",
    badgeText: "text-white",
    iconBg: "bg-orange-400",
  },
  {
    id: 4,
    title: "Team",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed voluptuat mollis felis a pulvinar. Curabitur a placerat nibh. Ut eu sem dictum lorem auctor tincidunt in eget urna.",
    icon: <Users className="w-6 h-6" />,
    numberBg: "bg-yellow-600",
    badgeBg: "bg-gradient-to-r from-yellow-700 to-yellow-800",
    badgeText: "text-white",
    iconBg: "bg-yellow-600",
  },
  {
    id: 5,
    title: "Analytics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed voluptuat mollis felis a pulvinar. Curabitur a placerat nibh. Ut eu sem dictum lorem auctor tincidunt in eget urna.",
    icon: <TrendingUp className="w-6 h-6" />,
    numberBg: "bg-red-700",
    badgeBg: "bg-gradient-to-r from-red-800 to-red-900",
    badgeText: "text-white",
    iconBg: "bg-red-700",
  },
];

export default function ServicesInfographic() {
  return (
    <div className="relative w-full min-h-screen rounded-xl shadow-2xl p-10 max-w-full mx-auto overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-50">
      {/* Background blurred colored blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div
          className="absolute top-16 left-12 w-[400px] h-[400px] rounded-full bg-pink-400 opacity-20 blur-3xl animate-pulse"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-20 right-16 w-[450px] h-[450px] rounded-full bg-indigo-500 opacity-15 blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-cyan-400 opacity-10 blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-wide">
          OUR SERVICES
        </h1>
        <p className="text-gray-400 text-lg tracking-widest uppercase">
          Infographic
        </p>
      </div>

      {/* Services List */}
      <div className="space-y-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex items-center gap-6 cursor-pointer rounded-lg p-5 transition-shadow shadow-sm hover:shadow-xl hover:scale-[1.02] duration-300"
          >
            {/* Number Circle */}
            <div
              className={`${service.numberBg} rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-lg`}
            >
              <span className="text-white text-2xl font-extrabold">
                {String(service.id).padStart(2, "0")}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 bg-blue-50 rounded-xl p-6 ml-2 shadow-inner">
              {/* Badge */}
              <div
                className={`${service.badgeBg} ${service.badgeText} inline-block px-5 py-2 rounded-full text-sm font-semibold mb-3 select-none tracking-wide`}
              >
                {service.title}
              </div>

              {/* Description */}
              <p className="text-gray-700 text-base leading-relaxed font-medium">
                {service.description}
              </p>
            </div>

            {/* Icon */}
            <div
              className={`${service.iconBg} rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0 text-white shadow-lg`}
            >
              {service.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
