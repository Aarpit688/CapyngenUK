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
import FaqSection from "../components/FaqSection";

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
  const faqItems = [
    {
      question: "What is VertexFX?",
      answer:
        "VertexFX is a multi-asset trading platform built for forex, CFD, commodity, and crypto brokers that require fast execution and strong liquidity connectivity.",
    },
    {
      question: "Do you provide VertexFX white-label solutions?",
      answer:
        "Capyngen does provide a complete VertexFX white-label setup including branding and worldwide hosting.",
    },
    {
      question: "Can VertexFX connect to liquidity providers?",
      answer:
        "Yes, we can integrate top-tier liquidity sources for stable execution through the VertexFX liquidity bridge.",
    },
    {
      question: "Does VertexFX support multi-asset trading?",
      answer:
        "Yes, the platform can trade forex, CFDs, indices, crypto, commodities, and other instruments.",
    },
    {
      question: "Do you offer backend hosting and management?",
      answer:
        "Yes, we take care of the servers, routing engines, security systems, and the performance layers.",
    },
    {
      question: "Can VertexFX integrate with CRMs and PSPs?",
      answer:
        "The VertexFX API integration facilitates a smooth connection between VertexFX and CRMs, PSPs, analytics, and KYC tools.",
    },
    {
      question: "Is VertexFX suitable for startups?",
      answer:
        "Yes, it is a solution that is good to go with only a few basic infrastructure needs.",
    },
    {
      question: "Do you provide 24/7 support?",
      answer:
        "Yes, Capyngen is always available for monitoring, maintenance, updates, and optimization.",
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
      <FaqSection items={faqItems} />
    </div>
  );
};

export default VertexFx;
