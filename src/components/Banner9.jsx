import React from "react";
import { Link } from "react-router-dom";

const Banner9 = ({
  title,
  subheading,
  ctaText,
  ctaLink = "/contact-us",
  images = [
    ["/img/team1.jpg", "/img/team2.jpg"],
    ["/img/work1.jpg", "/img/work2.jpg"],
    ["/img/office1.jpg", "/img/office2.jpg"],
  ],
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black py-24 sm:py-32">
      {/* Decorative Glow Elements */}
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      {/* Subtle background grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Container */}
      <div className="relative mx-auto max-w-[90vw]">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          {/* Left Content Section */}
          <div className="max-w-xl lg:max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              {title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-300">{subheading}</p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                to={ctaLink}
                className="rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:from-indigo-700 hover:to-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm border border-gray-700/50"
              >
                {ctaText}
              </Link>
            </div>
          </div>

          {/* Right Collage Section */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 relative">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 mt-10">
              <img
                src={images[0][0]}
                alt="team meeting"
                className="rounded-2xl object-cover shadow-xl w-full h-64"
              />
              <img
                src={images[0][1]}
                alt="person working"
                className="rounded-2xl object-cover shadow-xl w-full h-64"
              />
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 -mt-10">
              <img
                src={images[1][0]}
                alt="team collaboration"
                className="rounded-2xl object-cover shadow-xl w-full h-64"
              />
              <img
                src={images[1][1]}
                alt="coworking"
                className="rounded-2xl object-cover shadow-xl w-full h-64"
              />
            </div>
            {/* Column 3 */}
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 mt-10">
              <img
                src={images[2][0]}
                alt="team meeting"
                className="rounded-2xl object-cover shadow-xl w-full h-64"
              />
              <img
                src={images[2][1]}
                alt="person working"
                className="rounded-2xl object-cover shadow-xl w-full h-64"
              />
            </div>

            {/* Decorative radial glow */}
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-indigo-500/20 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner9;
