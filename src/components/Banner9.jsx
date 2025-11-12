import React from "react";

const Banner9 = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black py-24 sm:py-32">
      {/* Decorative Glow Elements */}
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      {/* Subtle background grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Container */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          {/* Left Content Section */}
          <div className="max-w-xl lg:max-w-lg">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              We're changing the way people connect
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="#"
                className="rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:from-indigo-700 hover:to-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm border border-gray-700/50"
              >
                Get started
              </a>
            </div>
          </div>

          {/* Right Collage Section */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 relative">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 mt-10">
              <img
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=500&q=80"
                alt="team meeting"
                className="rounded-2xl object-cover shadow-xl w-full h-64"
              />
              <img
                src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=500&q=80"
                alt="person working"
                className="rounded-2xl object-cover shadow-xl w-full h-64"
              />
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 -mt-10">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=500&q=80"
                alt="team collaboration"
                className="rounded-2xl object-cover shadow-xl w-full h-64"
              />
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80"
                alt="coworking"
                className="rounded-2xl object-cover shadow-xl w-full h-64"
              />
            </div>
            {/* Column 3 */}
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 mt-10">
              <img
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=500&q=80"
                alt="team meeting"
                className="rounded-2xl object-cover shadow-xl w-full h-64"
              />
              <img
                src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=500&q=80"
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
