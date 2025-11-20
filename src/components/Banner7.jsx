import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Banner7 = ({
  title,
  description,
  highlightText,
  ctaText,
  ctaLink = "/contact-us",
  cards = [],
  glow1 = "bg-indigo-500/10",
  glow2 = "bg-purple-600/10",
}) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 1.5 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div
      className={`relative bg-gradient-to-br from-gray-900 via-gray-950 to-black flex items-center min-h-screen overflow-hidden`}
    >
      {/* Decorative Glow Elements */}
      <div
        className={`absolute -top-32 -right-32 w-72 h-72 ${glow1} rounded-full blur-3xl`}
      ></div>
      <div
        className={`absolute -bottom-32 -left-32 w-96 h-96 ${glow2} rounded-full blur-3xl`}
      ></div>

      <section className="relative z-10 px-5 py-16 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1440px] mx-auto lg:py-20 xl:py-28 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
        {/* Left Section */}
        <div className="order-2 lg:order-1 lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-5xl lg:mx-0">
            {/* Dynamic Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              {title}
            </h1>

            {/* Dynamic Description */}
            <p className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 max-w-lg">
              {description}
            </p>

            {/* CTA Button */}
            <Link
              to={ctaLink}
              className="inline-flex mt-5 items-center justify-center px-6 py-3 sm:px-8 sm:py-3.5 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 border border-gray-700/50 rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {ctaText}
            </Link>
          </div>
        </div>

        {/* Right Slider Section */}
        <div className="order-2 w-full max-w-3xl mx-auto lg:max-w-none">
          <div className="relative">
            <Slider {...sliderSettings}>
              {cards.map((card, idx) => (
                <div key={idx} className="px-3 sm:px-4 lg:px-6">
                  <div className="relative h-110 flex flex-col bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 shadow-xl rounded-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                    {/* Image */}
                    <div className="w-full h-[50%] overflow-hidden">
                      <img
                        src={card.thumbnail}
                        alt={card.title}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Text */}
                    <div className="flex-1 px-5 py-5 sm:p-6">
                      <h3 className="text-base sm:text-lg font-semibold text-white">
                        {card.title}
                      </h3>
                      <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-gray-300 line-clamp-3">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Subtle BG Lighting */}
            <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-indigo-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner7;
