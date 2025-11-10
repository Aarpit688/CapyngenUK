import React from "react";
import { Camera, ImageIcon, Tv, Radio } from "lucide-react";

// Sample image URLs or import your own local images
const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=200&q=80",
];

const timelineItems = [
  {
    id: 1,
    title: "Step One",
    description:
      "Night after night, she came to tuck me in, even long after my childhood years. Following her longheaded events, she'd been in and push my long hair out of the way, then tuck my forehead. I don't.",
    icon: <Camera className="w-8 h-8" />,
  },
  {
    id: 2,
    title: "Step Two",
    description:
      "Night after night, she came to tuck me in, even long after my childhood years. Following her longheaded events, she'd been in and push my long hair out of the way, then tuck my forehead. I don't.",
    icon: <ImageIcon className="w-8 h-8" />,
  },
  {
    id: 3,
    title: "Step Three",
    description:
      "Night after night, she came to tuck me in, even long after my childhood years. Following her longheaded events, she'd been in and push my long hair out of the way, then tuck my forehead. I don't.",
    icon: <Tv className="w-8 h-8" />,
  },
  {
    id: 4,
    title: "Step Four",
    description:
      "Night after night, she came to tuck me in, even long after my childhood years. Following her longheaded events, she'd been in and push my long hair out of the way, then tuck my forehead. I don't.",
    icon: <Radio className="w-8 h-8" />,
  },
];

export default function TimelineInfoGraphic() {
  return (
    <div className="relative w-full max-w-full mx-auto py-12 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-50 via-white to-indigo-50 shadow-2xl">
      {/* Background glowing blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute top-10 left-8 w-72 h-72 rounded-full bg-pink-300 opacity-20 blur-3xl animate-pulse"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-12 right-10 w-80 h-80 rounded-full bg-purple-300 opacity-15 blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full bg-cyan-300 opacity-10 blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Timeline */}
      <div className="space-y-12 max-w-6xl mx-auto">
        {timelineItems.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={item.id}
              className={`relative flex flex-col md:flex-row gap-8 md:items-center ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="flex-shrink-0 rounded-lg overflow-hidden w-40 h-40 shadow-lg">
                <img
                  src={images[index]}
                  alt={`${item.title} image`}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>

              {/* Side Content */}
              <div className="flex-1 bg-indigo-700 bg-opacity-80 rounded-3xl p-8 text-white border border-indigo-600 shadow-lg transition-transform duration-300 hover:scale-105">
                <div
                  className="inline-block border border-yellow-300 px-3 py-1 rounded-full text-sm font-semibold mb-3 text-yellow-300 select-none"
                  aria-label={`Badge for ${item.title}`}
                >
                  {item.title}
                </div>

                <p className="text-sm leading-relaxed text-indigo-200">
                  {item.description}
                </p>
              </div>

              {/* Center Circle */}
              <div
                className="relative flex-shrink-0"
                aria-label={`Step number ${item.id}`}
              >
                <div className="w-32 h-32 rounded-full bg-yellow-400 shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-indigo-900">
                      {String(item.id).padStart(2, "0")}
                    </div>
                    <div className="text-indigo-900 font-semibold text-sm mt-1">
                      {item.title}
                    </div>
                  </div>
                </div>
              </div>

              {/* Icon */}
              <div className="flex-1 flex justify-center md:justify-start">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-indigo-900 shadow-lg">
                  {item.icon}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
