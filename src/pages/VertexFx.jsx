import React from "react";
import { assets } from "../assets/assets";
import Banner12 from "../components/Banner12";
import VertexFXIntro from "../components/VertexFxIntro";
import VertexFxWhyChoose from "../components/VertexFxWhyChoose";
import VertexFxFeatures from "../components/VertexFxFeatures";
import VertexFxInfrastructure from "../components/VertexFxInfrastructure";
import VertexFxTechnology from "../components/VertexFxTechnology";
import VertexFxUses from "../components/VertexFxUses";
import VertexFxFunctionalities from "../components/VertexfxFunctionalities";
import VertexFxHighPerformance from "../components/VertexfxHighPerformance";

const VertexFx = () => {
  const marketingCards = [
    {
      img: assets.vertexFX1,
      alt: "Christmas background 3D cartoon",
      text: "Technology Solutions for VertexFX Brokers",
    },
    {
      img: assets.vertexFX2,
      alt: "A beautiful glowing flower",
      text: "Professional VertexFX Trading Enhancements",
    },
    {
      img: assets.vertexFX3,
      alt: "A magical leopard",
      text: "High-Speed VertexFX Platform Optimization",
    },
    {
      img: assets.vertexFX4,
      alt: "A female 3D cartoon holding a wrapped gift box",
      text: "Complete IT Solutions for VertexFX Platforms",
    },
  ];

  return (
    <div>
      <Banner12
        heading="for VertexFX Brokers"
        highlight="Advanced Technology Solutions "
        description="Enhance your VertexFX trading platform with our complete IT, automation, and integration solutions designed for global brokers."
        cards={marketingCards}
      />
      <VertexFXIntro />
      <VertexFxWhyChoose />
      <VertexFxFeatures />
      <VertexFxInfrastructure />
      <VertexFxTechnology />
      <VertexFxUses />
      <VertexFxFunctionalities />
      <VertexFxHighPerformance />
    </div>
  );
};

export default VertexFx;
