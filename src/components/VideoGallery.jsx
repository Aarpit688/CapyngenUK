import React, { useState } from "react";

const VideoGallery = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const videos = [
    {
      id: "FvmiH6t3KUE",
      title: "Video 1 - Wonderplast",
      description: "Discover our innovative water management solutions",
      thumbnail: "https://img.youtube.com/vi/FvmiH6t3KUE/maxresdefault.jpg",
    },
    {
      id: "w5ODXlwt0tU",
      title: "Video 2 - Product Showcase",
      description: "Explore our premium product range",
      thumbnail: "https://img.youtube.com/vi/w5ODXlwt0tU/maxresdefault.jpg",
    },
    {
      id: "HhmA5N4tFuk",
      title: "Video 3 - Company Overview",
      description: "Learn about our commitment to excellence",
      thumbnail: "https://img.youtube.com/vi/HhmA5N4tFuk/maxresdefault.jpg",
    },
  ];

  const handleVideoSelect = (index) => {
    setActiveVideo(index);
    setIsPlaying(false);
  };

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 rounded-full blur-3xl opacity-20 animate-pulse bg-blue-300"></div>
        <div
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl opacity-20 animate-pulse bg-purple-300"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          animationType="fadeUp"
          duration={0.8}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4 text-white">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Video Gallery
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4 text-gray-300">
            Immerse yourself in our curated collection of stunning videos. Click
            to explore and enjoy.
          </p>
        </div>

        {/* Main Video Player */}
        <div animationType="fadeUp" duration={0.8} delay={0.2}>
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-white shadow-gray-300/50">
            {/* Video Container - 16:9 Aspect Ratio */}
            <div className="relative w-full h-0 pb-[56.25%]">
              {!isPlaying ? (
                // Thumbnail View
                <div
                  className="absolute inset-0 group cursor-pointer"
                  onClick={handlePlayVideo}
                >
                  <img
                    src={videos[activeVideo].thumbnail}
                    alt={videos[activeVideo].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300 group-hover:bg-black/50">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 bg-blue-600 hover:bg-blue-700 shadow-lg">
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Video Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                      {videos[activeVideo].title}
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base">
                      {videos[activeVideo].description}
                    </p>
                  </div>
                </div>
              ) : (
                // YouTube Player
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videos[activeVideo].id}?autoplay=1&rel=0&modestbranding=1`}
                  title={videos[activeVideo].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>

        {/* Video Thumbnails Grid */}
        <div
          className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
          animationType="fadeUp"
          duration={0.8}
          delay={0.4}
        >
          {videos.map((video, index) => (
            <div
              key={index}
              onClick={() => handleVideoSelect(index)}
              className={`relative rounded-lg sm:rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                activeVideo === index
                  ? "ring-2 sm:ring-4 ring-blue-600 shadow-lg shadow-blue-500/30"
                  : "bg-white border border-gray-200 shadow-md"
              }`}
            >
              <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {/* Active Indicator */}
                {activeVideo === index && (
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                    <div className="px-2 sm:px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white">
                      Now Playing
                    </div>
                  </div>
                )}
                {/* Play Icon Overlay */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/30 flex items-center justify-center transition-all duration-300">
                  <svg
                    className="w-10 h-10 sm:w-12 sm:h-12 text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-3 sm:p-4 bg-white">
                <h4 className="font-bold text-sm sm:text-base mb-1 line-clamp-1 text-gray-900">
                  {video.title}
                </h4>
                <p className="text-xs sm:text-sm line-clamp-2 text-gray-600">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
