import React from "react";
import CTraderServiceIntro from "../components/CTraderServiceIntro";
import { Banner10 } from "../components/Banner10";
import CTraderServiceFeatures from "../components/CTraderServiceFeatures";
import CTraderServiceSolutions from "../components/CTraderServiceSolutions";
import CTraderServiceAdvantages from "../components/CTraderServiceAdvantages";
import CTraderServiceBenefits from "../components/CTraderServiceBenefits";
import CTraderServiceConclusion from "../components/CTraderServiceConclusion";

const CTraderService = () => {
  return (
    <div>
      <Banner10
        backgroundImage="https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop"
        heading="Specialized cTrader Technology Services for Brokers"
        subheading="Experience seamless trading operations with our expert cTrader installation, configuration, and infrastructure solutions."
        parallaxImages={[
          {
            src: "https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop",
            alt: "Rocket launch",
            start: -200,
            end: 200,
            className: "w-1/3",
          },
          {
            src: "https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop",
            alt: "Space shuttle",
            start: 200,
            end: -250,
            className: "mx-auto w-2/3",
          },
          {
            src: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2370&auto=format&fit=crop",
            alt: "Satellite orbit",
            start: -200,
            end: 200,
            className: "ml-auto w-1/3",
          },
          {
            src: "https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop",
            alt: "Rocket detail",
            start: 0,
            end: -500,
            className: "ml-24 w-5/12",
          },
        ]}
      />

      <CTraderServiceIntro />
      <CTraderServiceFeatures />
      <CTraderServiceSolutions />
      <CTraderServiceAdvantages />
      <CTraderServiceBenefits />
      <CTraderServiceConclusion />
    </div>
  );
};

export default CTraderService;
