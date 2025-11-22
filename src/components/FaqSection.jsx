import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FaqSection = ({
  title = "FAQs",
  desc = "",
  items,
  bgColor = "bg-black",
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className={`${bgColor} text-white py-10 pb-16 px-4 md:px-10 flex flex-col items-center`}
    >
      {/* Title */}
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
        {title}
      </h1>

      {/* Description */}
      <p className="mt-4 max-w-2xl text-lg mx-auto text-gray-300">{desc}</p>

      <div className="max-w-6xl mx-auto mt-10">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => toggle(index)}
            className="group py-5 border-b border-gray-700 cursor-pointer transition-all duration-300"
          >
            {/* Question Row */}
            <div className="w-full flex justify-between items-center text-left font-semibold text-xl focus:outline-none">
              <div className="flex items-center">
                {/* INDEX NUMBER */}
                <span className="text-emerald-400 font-mono mr-2 select-none">
                  {`${index < 9 ? "0" : ""}${index + 1}.`}
                </span>

                {/* QUESTION TEXT */}
                <span className="transition-colors duration-300 group-hover:text-emerald-400">
                  {item.question}
                </span>
              </div>

              {/* ICON */}
              <span
                className={`ml-4 text-xl transition-all duration-300 ${
                  activeIndex === index
                    ? "text-emerald-400 rotate-180"
                    : "text-gray-400 group-hover:text-emerald-400"
                }`}
              >
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </div>

            {/* Animated Answer */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                activeIndex === index
                  ? "max-h-96 opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-gray-300 text-lg leading-relaxed pl-1 border-l-2 border-emerald-500/40 pl-4">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
