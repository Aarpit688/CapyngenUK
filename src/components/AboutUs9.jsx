import React from "react";
import { Hexagon } from "lucide-react";

const AboutUs9 = () => {
  return (
    <section className="py-20 bg-black relative">
      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo / Symbol */}
        <div className="mb-12 flex flex-col items-center justify-center">
          <img src="" alt="" className="" />
        </div>

        {/* Quote Section */}
        <div className="relative">
          {/* Large quote mark */}
          <span className="absolute -top-12 -left-4 sm:-left-12 text-9xl text-white/10 font-serif leading-none select-none">
            &ldquo;
          </span>

          <div className="relative z-10 space-y-8">
            <p className="text-2xl md:text-3xl font-serif text-gray-200 leading-relaxed italic">
              Capyngen Technologies UK Limited is a reliable worldwide
              technology partner that supports Forex and Crypto brokers. By
              using our state-of-the-art infrastructure, worldwide proficiency,
              and fully integrated turnkey solutions, businesses become ready to
              start and expand their activities with assurance.
            </p>

            <p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed">
              In case you are a broker with a small business idea or a trading
              company at the enterprise level, Capyngen delivers to you the full
              set of requisites for accomplishing your goal in the rapidly
              changing financial market.
            </p>
          </div>

          {/* Closing quote */}
          <span className="absolute -bottom-20 -right-4 sm:-right-12 text-9xl text-white/10 font-serif leading-none select-none">
            &rdquo;
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutUs9;
