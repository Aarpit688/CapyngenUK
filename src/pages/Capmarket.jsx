import React from "react";
import Banner11 from "../components/Banner11";
import { assets } from "../assets/assets";

const Capmarket = () => {
  const slidesData = [
    {
      id: 1,
      title: "Transform Learning with Smart Education Solutions",
      subtitle:
        "Motivate students and teachers with e-learning resources that open the doors to development and engagement.",
      image: assets.ai1,
      ctaText: "Get Started",
      ctaLink: "/contact-us",
    },
    {
      id: 2,
      title: "Building the Future of EdTech",
      subtitle:
        "The school can be more meaningful with our knowledge software and e-learning platforms.",
      image: assets.ai2,
      ctaText: "Contact Us",
      ctaLink: "/contact-us",
    },
    {
      id: 3,
      title: "Reimagine Classrooms with Digital technology",
      subtitle:
        "Implement AI and analytics in education to speed up growth and efficiency.",
      image: assets.ai3,
      ctaText: "Explore Now",
      ctaLink: "/contact-us",
    },
  ];

  return (
    <div>
      <Banner11
        slides={slidesData}
        autoplay={true}
        autoplaySpeed={4000}
        showDots={true}
        textColor="text-white"
        arrowColor="text-white"
        bgHover="hover:bg-white/20"
      />
    </div>
  );
};

export default Capmarket;
