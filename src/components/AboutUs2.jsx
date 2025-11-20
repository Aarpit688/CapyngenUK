import React from "react";
import { Globe } from "lucide-react";

export const AboutUs2 = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-black">
      {/* --- Aurora Background --- */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black"></div>

        {/* Aurora blobs */}
        <div className="absolute -top-10 -left-20 w-[600px] h-[600px] bg-purple-600/30 blur-[180px] rounded-full animate-pulse"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/30 blur-[170px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-cyan-500/20 blur-[200px] rounded-full animate-pulse"></div>

        {/* Soft vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      {/* --- Content Wrapper --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* --- Image Block --- */}
          <div className="relative">
            {/* Glow ring background */}
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-blue-600/20 via-purple-600/30 to-cyan-500/20 blur-2xl"></div>

            {/* Main Image Card */}
            <div className="relative overflow-hidden rounded-lg border border-white/10 shadow-2xl backdrop-blur-xl bg-white/5">
              <img
                src="https://picsum.photos/800/600?random=77"
                alt="Fintech"
                className="w-full h-full object-cover opacity-90"
              />

              {/* Bottom Glass Info Card */}
            </div>
          </div>

          {/* --- Text Content --- */}
          <div>
            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-8">
              A Global Fintech Company Empowering Businesses Worldwide
            </h2>

            {/* Description */}
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                We​‍​‌‍​‍‌​‍​‌‍​‍‌ are a one-stop fintech technology provider
                who owns a broad international presence. Our team is full of
                experienced industry professionals. We help both new and already
                existing brokerages to start, grow, and run their businesses
                without any doubt or fear in a very competitive financial market
                context.
              </p>

              <p>
                We provide the entire range of services from forming a company
                to trading platforms, CRM systems, MAM/PAMM modules, liquidity
                integration, and worldwide marketing. These are all wrapped up
                in one unified ecosystem. Our goal is clear — to equip financial
                businesses with technology that is safe, innovative, and
                ​‍​‌‍​‍‌​‍​‌‍​‍‌scalable.
              </p>
            </div>

            {/* Stats */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs2;
