import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Banner7 = () => {
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
      {
        breakpoint: 1280, // Large desktops
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 1024, // Tablets (landscape)
        settings: { slidesToShow: 1.5 },
      },
      {
        breakpoint: 768, // Tablets (portrait)
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 640, // Mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const cards = [1, 2, 3, 1, 2, 3];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black flex items-center min-h-screen overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <section className="relative z-10 px-5 py-16 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1440px] mx-auto lg:py-20 xl:py-28 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
        {/* Left Section */}
        <div className="order-2 lg:order-1 lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Community of designers{" "}
              <span className="inline-block align-middle">
                <img
                  className="inline w-auto h-8 sm:h-10 lg:h-12"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-1.svg"
                  alt="shape-1"
                />
              </span>{" "}
              made by designers{" "}
              <span className="inline-block align-middle">
                <img
                  className="inline w-auto h-8 sm:h-10 lg:h-11"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-2.svg"
                  alt="shape-2"
                />
              </span>
            </h1>

            <p className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula
              massa in enim luctus. Rutrum arcu.
            </p>

            {/* Decorative Lines */}
            <svg
              className="w-auto h-3 sm:h-4 mt-8 text-gray-600"
              viewBox="0 0 172 16"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              {[...Array(24)].map((_, i) => (
                <line
                  key={i}
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform={`matrix(-0.5547 0.83205 0.83205 0.5547 ${
                    11 + i * 7
                  } 1)`}
                />
              ))}
            </svg>

            <p className="mt-8 text-sm sm:text-base font-semibold text-white">
              Join to get free updates every week
            </p>

            {/* Email Form */}

            <Link
              to="/contact-us"
              type="button"
              className="inline-flex mt-5 items-center justify-center px-6 py-3 sm:px-8 sm:py-3.5 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 border border-gray-700/50 rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Join Now
            </Link>
          </div>
        </div>

        {/* Right Section with React Slick */}
        <div className="order-2 w-full max-w-3xl mx-auto lg:max-w-none">
          <div className="relative">
            <Slider {...sliderSettings}>
              {cards.map((num, idx) => (
                <div key={idx} className="px-3 sm:px-4 lg:px-6">
                  <div className="relative flex flex-col overflow-hidden bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 shadow-xl rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={`https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-${num}.png`}
                        alt={`thumbnail-${num}`}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 px-5 py-5 sm:p-6">
                      <h3 className="text-base sm:text-lg font-semibold text-white">
                        How to write content about your photographs
                      </h3>
                      <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-gray-300 line-clamp-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sit quis auctor odio arcu et dolor.
                      </p>
                    </div>
                    <div className="px-5 py-4 mt-auto border-t border-gray-700/50 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-gray-300 text-xs sm:text-sm">
                          <p>Growth</p>
                          <span>•</span>
                          <p>7 Mins Read</p>
                        </div>
                        <button>
                          <svg
                            className="w-5 h-5 text-gray-400 transition-all duration-200 group-hover:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <line x1="17" y1="7" x2="7" y2="17"></line>
                            <polyline points="8 7 17 7 17 16"></polyline>
                          </svg>
                        </button>
                      </div>
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
