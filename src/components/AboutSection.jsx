export default function AboutSection() {
  const points = [
    {
      number: 1,
      title: "Who We Are",
      description:
        "You get a 2-week free trial to kick the Smartly tires. We want you to.",
    },
    {
      number: 2,
      title: "What Do We Do",
      description:
        "We give you a free course that guides you through the process.",
    },
    {
      number: 3,
      title: "How Do We Help",
      description:
        "Use our multimedia lectures, videos, and coaching sessions.",
    },
    {
      number: 4,
      title: "Create success story",
      description:
        "With access to online learning resources anyone can transform.",
    },
  ];

  const photos = [
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1546439773-622acbd2c3f9?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1555098462-c1dcdcb52f11?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1505797694712-402989daffaf?w=600&h=600&fit=crop",
  ];

  return (
    <section className="w-full max-w-full px-6 md:px-12 py-12 bg-gradient-to-tr from-white to-slate-50 rounded-3xl shadow-xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-extrabold text-slate-800 mb-3 tracking-wide drop-shadow-sm">
                About Us
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-md leading-relaxed">
                At Besnik Consultancy, we take pride in our values – service,
                integrity, and excellence.
              </p>
            </div>
            <button
              type="button"
              className="ml-4 px-6 py-3 rounded-lg bg-gradient-to-r from-teal-400 to-green-400 text-white font-semibold shadow-md hover:from-teal-500 hover:to-green-500 transition-colors duration-300 drop-shadow-lg"
            >
              Learn more
            </button>
          </div>

          {/* Points Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {points.map((point) => (
              <div
                key={point.number}
                className="p-5 rounded-2xl bg-white shadow-md transition-shadow transition-colors duration-300 hover:shadow-xl hover:bg-gradient-to-r hover:from-teal-100 hover:via-green-100 hover:to-teal-100"
              >
                <h3 className="text-teal-600 text-4xl font-bold mb-2">
                  {point.number}.
                </h3>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">
                  {point.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Photo Grid */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:scale-105"
            >
              <img
                src={photo}
                alt={`Interior design ${index + 1}`}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
