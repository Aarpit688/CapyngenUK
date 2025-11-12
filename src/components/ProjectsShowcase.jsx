import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "E-commerce Platform Development",
    image: "https://dummyimage.com/600x800/111/fff&text=E-commerce",
    extra: "The North Face",
  },
  {
    title: "Software as a Service Integration",
    image: "https://dummyimage.com/600x800/eee/222&text=SaaS",
    extra: "CRM Integration",
  },
  {
    title: "Mobile Platform Development",
    image: "https://dummyimage.com/600x800/f9f9f9/000&text=Mobile",
    extra: "Fintech Solutions",
  },
  {
    title: "Cloud Infrastructure Setup",
    image: "https://dummyimage.com/600x800/222/fff&text=Cloud",
    extra: "AWS / Azure",
  },
];

export default function ProjectsShowcase() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    responsive: [
      { breakpoint: 1536, settings: { slidesToShow: 3 } },
      { breakpoint: 1280, settings: { slidesToShow: 2.3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1.3 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative py-20 bg-black text-white min-h-[70vh] flex items-center overflow-hidden">
      {/* Background glows */}
      <span className="absolute -top-24 -left-40 w-[520px] h-[520px] rounded-full bg-fuchsia-500/20 opacity-40 blur-[180px] pointer-events-none"></span>
      <span className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-indigo-500/20 opacity-30 blur-[170px] pointer-events-none"></span>

      <div className="max-w-[90vw] mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Text Section */}
        <div className="w-full md:w-1/3 flex flex-col justify-center">
          <p className="tracking-widest text-xs font-semibold mb-3 text-gray-300">
            PROJECTS
          </p>
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Showcase of Our Recognized Work
          </h2>
          <p className="mb-8 text-gray-300">
            Our collaborative approach ensures we deeply understand each
            client’s unique challenges and create tailored digital solutions
            that perform.
          </p>
          <div className="space-y-4">
            {[
              "Managed Services and Products",
              "Flexibility and Adaptability",
              "Competitive Advantage",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-200">
                <span className="w-2.5 h-2.5 rounded-full bg-linear-to-r from-fuchsia-500 via-indigo-500 to-cyan-400"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Carousel Section */}
        <div className="w-full md:w-2/3">
          <Slider {...settings}>
            {projects.map((proj, idx) => (
              <div key={idx} className="px-3">
                <div className="group rounded-2xl p-px bg-linear-to-br from-fuchsia-500/70 via-indigo-500/70 to-cyan-400/70 shadow-[0_8px_24px_rgba(99,102,241,0.35)] hover:shadow-[0_10px_30px_rgba(99,102,241,0.45)] transition-transform duration-300">
                  {/* Card Container */}
                  <div className="rounded-2xl h-[460px] flex flex-col overflow-hidden bg-black/60 backdrop-blur-xl border border-white/10">
                    {/* Image Section */}
                    <div className="relative w-full flex-1">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                      />
                      {/* Subtle Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                    </div>

                    {/* Text Section */}
                    <div className="p-6 bg-black/70 backdrop-blur-sm border-t border-white/10">
                      <h3 className="text-xl font-semibold mb-1">
                        {proj.title}
                      </h3>
                      {proj.extra && (
                        <p className="text-sm text-gray-400">{proj.extra}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
