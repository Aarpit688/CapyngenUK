import React from "react";
import PersonImage from "../assets/sampleImg.png";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden rounded-3xl">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${PersonImage})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content Container */}
        <div className="relative h-full w-full flex items-end pb-8 md:pb-16 px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-end w-full">
            {/* Left Side - Main Content */}
            <div className="space-y-6 md:space-y-8">
              {/* Eyebrow Text */}
              <div className="text-white/80 text-xs md:text-sm font-medium">
                #1 Energy provider in the world
              </div>

              {/* Main Heading */}
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                New Energy for the Future
              </h1>

              {/* Action Links */}
              <div className="flex flex-wrap gap-6 md:gap-8 items-center pt-4">
                <a
                  href="#"
                  className="text-white/90 hover:text-white flex items-center gap-2 pb-2 border-b border-white/40 hover:border-white transition-all text-sm md:text-base"
                >
                  Get in touch
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-6"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white/90 hover:text-white flex items-center gap-2 pb-2 border-b border-white/40 hover:border-white transition-all text-sm md:text-base"
                >
                  Our services
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Side - Card and Stats */}
            <div className="space-y-8 lg:space-y-1 flex flex-col items-end w-full">
              {/* Project Card */}
              <div className="relative w-fit mr-0">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl w-fit">
                  {/* Card Image */}
                  <img
                    src={PersonImage}
                    alt="Wind turbine project"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover mb-4"
                  />

                  {/* Card Header with Menu */}
                  <div className="flex items-center justify-between mb-3 w-full">
                    <span className="text-xs md:text-sm text-gray-600">
                      Discover Our Recent Project
                    </span>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-8 mt-12 md:mt-16 w-full">
                {/* Stat 1 */}
                <div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                    6 mil
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">
                    The company&apos;s annual net income
                  </p>
                </div>

                {/* Stat 2 */}
                <div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                    315
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">
                    Projects completed worldwide
                  </p>
                </div>

                {/* Stat 3 */}
                <div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                    120K
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">
                    Employees work in all parts of the world
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
