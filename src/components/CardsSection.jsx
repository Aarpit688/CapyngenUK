import React from "react";
import { motion } from "framer-motion";

const CardsSection = ({
  heading,
  height = "h-auto",
  subheading,
  sectionBg = "bg-white dark:bg-gray-900",
  services,
  cardBg = "bg-white dark:bg-gray-800",
  hoverBg = "hover:bg-gray-100 dark:hover:bg-gray-700",
  headColor = "text-black dark:text-white",
  textColor = "text-gray-800 dark:text-gray-300",
  textSize = "text-md md:text-md",
  cardHeadSize = "text-xl md:text-2xl",
  footerNote = "",
  hoverTextColor = "hover:text-black dark:hover:text-white",
}) => {
  return (
    <section
      className={`py-20 px-6 md:px-12 ${sectionBg} transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-normal tracking-tight ${headColor} drop-shadow-md`}
        >
          {heading}
        </motion.h1>

        {subheading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`mt-6 mb-14 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed ${headColor} drop-shadow-sm`}
          >
            {subheading}
          </motion.div>
        )}

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 pt-4">
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${cardBg} ${hoverBg} ${textColor} ${hoverTextColor} ${
                service.cardBg || ""
              } ${height} p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-left flex flex-col border border-transparent hover:border-gray-300 dark:hover:border-gray-600`}
              tabIndex={0}
              aria-labelledby={`card-title-${index}`}
              aria-describedby={`card-desc-${index}`}
            >
              {/* Icon / Image */}
              <div className="mb-6 flex justify-center">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title || `service-img-${index}`}
                    className="w-full max-h-48 object-cover rounded-xl shadow-md"
                    loading="lazy"
                  />
                ) : (
                  <div className="text-5xl text-indigo-400 dark:text-indigo-300">
                    {service.icon}
                  </div>
                )}
              </div>

              {/* Title */}
              <h3
                id={`card-title-${index}`}
                className={`${cardHeadSize} font-semibold mb-4`}
              >
                {service.title}
              </h3>

              {/* Description or Points */}
              <div
                id={`card-desc-${index}`}
                className={`${textSize} flex-grow leading-relaxed`}
              >
                {Array.isArray(service.points) ? (
                  <ul className="list-disc pl-5 space-y-2 text-left">
                    {service.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{service.description}</p>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {footerNote && <p className="mt-15 text-white text-lg">{footerNote}</p>}
      </div>
    </section>
  );
};

export default CardsSection;
