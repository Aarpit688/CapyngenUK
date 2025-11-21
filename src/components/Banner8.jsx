import React from "react";
import { Link } from "react-router-dom";

const Banner8 = ({ image, badge, name, description, buttonText }) => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      {/* Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center max-w-[90vw] mx-auto py-16 sm:py-20 gap-6 lg:gap-16">
        {/* Left Image */}
        <div className="relative w-full flex justify-center">
          <div className="relative w-full">
            <img
              src={image}
              alt={name}
              className="lg:min-h-[80vh] object-cover shadow-2xl"
            />
          </div>
        </div>

        {/* Right Content Card */}
        <div className="relative lg:-ml-20 w-full max-w-2xl bg-gray-800/30 backdrop-blur-2xl border border-gray-700/50 shadow-2xl p-8 sm:p-10 lg:p-12">
          <p className="text-green-400 text-sm font-medium tracking-wide mb-2">
            {badge}
          </p>

          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
            {name}
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
            {description}
          </p>

          <Link
            to={"/contact-us"}
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 border border-gray-700/50 rounded-full transition-all duration-300 hover:from-green-700 hover:to-emerald-700 backdrop-blur-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            {buttonText}
          </Link>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Banner8;
