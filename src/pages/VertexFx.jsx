import React from "react";
import { assets } from "../assets/assets";
import Banner12 from "../components/Banner12";

const VertexFx = () => {
  const marketingCards = [
    {
      img: assets.ai1,
      alt: "Christmas background 3D cartoon",
      text: "Digital Health Connection to Care",
    },
    {
      img: assets.ai2,
      alt: "A beautiful glowing flower",
      text: "Making Healthy Decisions Smarter",
    },
    {
      img: assets.ai3,
      alt: "A magical leopard",
      text: "When Fitness Meets Technology",
    },
    {
      img: assets.ai4,
      alt: "A female 3D cartoon holding a wrapped gift box",
      text: "Digital Transformation of a Healthier Future",
    },
  ];

  return (
    <div>
      <Banner12
        heading=" with IT Solutions Beyond Imagination"
        highlight="Transforming Healthcare & Fitness"
        description="One of the innovative ways to improve patient care is developing software which will automate the process of hospitals, clinics and fitness centres."
        cards={marketingCards}
      />
    </div>
  );
};

export default VertexFx;
