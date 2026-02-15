import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const FaqSection = ({
  title = "FAQs",
  desc = "",
  items,
  bgColor = "bg-black",
}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      ref={ref}
      className={`${bgColor} text-white py-10 pb-16 px-4 md:px-10 flex flex-col items-center overflow-hidden`}
    >
      {/* Title */}
      <h1
        className={`mt-2 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent text-center transition-all duration-700 ease-out transform ${inView ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
      >
        {title}
      </h1>

      {/* Description */}
      {desc && (
        <p
          className={`mt-4 max-w-2xl text-base sm:text-lg mx-auto text-gray-300 text-center transition-all duration-700 delay-150 ease-out transform ${inView ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
            }`}
        >
          {desc}
        </p>
      )}

      <div className="max-w-6xl w-full mx-auto mt-10">
        {items?.map((item, index) => (
          <div
            key={index}
            onClick={() => toggle(index)}
            className={`group py-5 border-b border-gray-700 cursor-pointer transition-all duration-700 ease-out transform ${inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            style={{ transitionDelay: inView ? `${300 + index * 100}ms` : "0ms" }}
          >
            {/* Question Row */}
            <div className="w-full flex justify-between items-start sm:items-center text-left font-semibold text-md sm:text-xl focus:outline-none">
              <div className="flex items-start sm:items-center">
                {/* INDEX NUMBER */}
                <span className="text-emerald-400 font-mono mr-3 sm:mr-4 shrink-0 mt-0.5 sm:mt-0 select-none">
                  {`${index < 9 ? "0" : ""}${index + 1}.`}
                </span>

                {/* QUESTION TEXT */}
                <span className="transition-colors duration-300 group-hover:text-emerald-400">
                  {item.question}
                </span>
              </div>

              {/* ICON */}
              <span
                className={`ml-4 shrink-0 text-md sm:text-xl transition-all duration-300 mt-1 sm:mt-0 ${activeIndex === index
                  ? "text-emerald-400 rotate-180"
                  : "text-gray-400 group-hover:text-emerald-400"
                  }`}
              >
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </div>

            {/* Animated Answer */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${activeIndex === index
                ? "max-h-[1000px] opacity-100 mt-4 sm:mt-5"
                : "max-h-0 opacity-0"
                }`}
            >
              <div className="text-gray-300 text-sm sm:text-lg leading-relaxed pl-4 ml-2 sm:ml-8 border-l-2 border-emerald-500/40">
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