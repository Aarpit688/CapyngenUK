import React from "react";

const Banner2 = () => {
  return (
    <div className="overflow-x-hidden bg-gradient-to-br from-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-24">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
              Quality resources shared by the community
            </h1>

            <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-300 font-inter">
              Access premium development resources created and curated by expert
              developers worldwide.
            </p>

            <div className="relative inline-flex mt-10 group">
              <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

              <a
                href="#"
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 hover:bg-gray-800/80"
              >
                Get access to 4,958 resources
              </a>
            </div>
          </div>
        </div>

        {/* Hero Image with Glass Effect */}
        <div className="mt-16 md:mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>
          <div className="relative backdrop-blur-xl p-1 ">
            <img
              className="object-cover object-top w-full h-auto mx-auto rounded-2xl"
              src="https://d33wubrfki0l68.cloudfront.net/54780decfb9574945bc873b582cdc6156144a2ba/d9fa1/images/hero/4/illustration.png"
              alt="Hero Illustration"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner2;
