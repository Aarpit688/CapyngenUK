import React from "react";
import { Rocket } from "lucide-react";
import { assets } from "../assets/assets";

export const Careers7 = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Aurora Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 opacity-40 blur-[140px] animate-pulse-slow"></div>
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-700 opacity-40 blur-[130px] animate-pulse-slower"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 mb-12 lg:mb-0 order-2 lg:order-1">
            <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              Grow Your Future With Capyngen
            </h2>

            <div className="text-gray-300 text-lg leading-relaxed mb-8">
              <p>
                Capyngen Technologies UK Limited is not just a company — it is a
                worldwide community of innovators creating meaningful impact. If
                you want to build, learn, and work on products shaping the
                fintech industry — this is where you belong.
              </p>
            </div>

            {/* Glassmorphism Box */}
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-md border-l-4 border-cyan-400 shadow-xl">
              <p className="text-2xl font-bold text-white mb-2">
                Come and work with us.
              </p>
              <p className="text-xl font-medium text-cyan-300">
                Your next big opportunity starts here.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-purple-600 opacity-20 rounded-md transform rotate-6 blur-sm"></div>

            <img
              src={assets.careers9}
              alt="Professional growth at Capyngen"
              className="relative rounded-md shadow-2xl w-full object-cover h-[500px] border border-white/10"
            />

            {/* Floating Badge (Glassmorphism) */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Careers7;
