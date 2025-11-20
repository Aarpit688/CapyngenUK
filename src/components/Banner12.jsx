import React from "react";

const Banner12 = ({
  heading = "Digital Marketing Services to Grow Your Business",
  highlight = "Digital Marketing Services",
  description = `In the current whirlwind digital environment, the importance of visibility cannot be overstated. Through digital marketing, your brand can connect with the appropriate target market, on time, using the most suitable communication, thus increasing your business with tangible results.`,
  cards = [],
  bgColor = "bg-black",
  textColor = "text-white",
}) => {
  return (
    <section
      className={`relative min-h-screen ${bgColor} px-6 py-20 flex items-center justify-center`}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-12">
          {/* Header Section */}
          <header className="space-y-6">
            <h1
              className={`text-3xl max-w-6xl mx-auto sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${textColor}`}
            >
              <span className="text-blue-600">{highlight}</span>{" "}
              {heading.replace(highlight, "").trim()}
            </h1>
            <p
              className={`text-base sm:text-lg md:text-xl max-w-4xl mx-auto ${textColor} text-opacity-80`}
            >
              {description}
            </p>
          </header>

          {/* Cards Section */}
          <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
            {cards.map((card, idx) => (
              <li key={idx} className="group">
                <div className="w-full h-full p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                  <figure className="flex flex-col gap-4">
                    <div className="rounded-xl overflow-hidden h-48 bg-gradient-to-br from-indigo-500/20 to-indigo-100/10">
                      <img
                        src={card.img}
                        alt={card.alt || card.text}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <figcaption className="font-semibold text-white text-lg text-center">
                      {card.text}
                    </figcaption>
                  </figure>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Decorative Gradient Glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Banner12;
