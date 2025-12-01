import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { assets } from "../assets/assets";

const projects = [
  {
    title: "MT5 White Label Solutions",
    image: assets.mt5,
    extra:
      "Fast deployment, Secure hosting, Full customization, Broker-ready setup",
  },
  {
    title: "Liquidity Provider Solutions",
    image: assets.liquidityProvider,
    extra:
      "Deep liquidity access, Low latency feeds, Multi-asset pricing, Institutional execution",
  },
  {
    title: "Crypto Exchange Development",
    image: assets.cryptoExchange,
    extra:
      "Secure architecture, Scalable matching engine, Multi-chain support, KYC/AML ready",
  },
  {
    title: "Forex CRM Software",
    image: assets.forexBroker,
    extra:
      "Lead management, Client onboarding, IB/affiliate tools, Payment integrations",
  },
];

export default function ProjectsShowcase() {
  return (
    <section className="relative py-16 md:py-20 bg-black text-white w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Content */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Showcase of Our Recognized Work
            </h2>

            <p className="mb-6 text-gray-300 text-sm md:text-base max-w-md mx-auto md:mx-0">
              We deliver high-performance digital products built to scale with
              business success.
            </p>

            <ul className="space-y-3 text-gray-200 text-sm md:text-base">
              {[
                "Managed Services and Products",
                "Flexibility and Adaptability",
                "Competitive Advantage",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 justify-center md:justify-start"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Swiper */}
          <div className="md:col-span-2 w-full">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              loop
              autoplay={{ delay: 2200, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                0: { slidesPerView: 1 },
                480: { slidesPerView: 1.1 },
                640: { slidesPerView: 1.4 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2.5 },
                1280: { slidesPerView: 3 },
              }}
              className="pb-10"
            >
              {projects.map((proj, idx) => (
                <SwiperSlide key={idx}>
                  <div className="rounded-lg overflow-hidden group bg-black/70 border border-white/10 backdrop-blur-md hover:scale-[1.03] transition duration-500">
                    {/* Image */}
                    <div className="relative h-[280px] sm:h-[300px] ">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                    </div>

                    {/* Text */}
                    <div className="p-5 border-t border-white/10">
                      <h3 className="text-lg md:text-xl font-bold">
                        {proj.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm mt-1">
                        {proj.extra}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
