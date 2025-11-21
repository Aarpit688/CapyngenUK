import React from "react";
import CTraderServiceIntro from "../components/CTraderServiceIntro";
import { Banner10 } from "../components/Banner10";
import CTraderServiceFeatures from "../components/CTraderServiceFeatures";
import CTraderServiceSolutions from "../components/CTraderServiceSolutions";
import CTraderServiceAdvantages from "../components/CTraderServiceAdvantages";
import CTraderServiceBenefits from "../components/CTraderServiceBenefits";
import CTraderServiceConclusion from "../components/CTraderServiceConclusion";
import { assets } from "../assets/assets";

const CTraderService = () => {
  return (
    <div>
      <Banner10
        backgroundImage={assets.cTraderService1}
        heading="Specialized cTrader Technology Services for Brokers"
        subheading="Experience seamless trading operations with our expert cTrader installation, configuration, and infrastructure solutions."
        parallaxImages={[
          {
            src: assets.cTraderService2,
            alt: "Rocket launch",
            start: -200,
            end: 200,
            className: "w-1/3",
          },
          {
            src: assets.cTraderService3,
            alt: "Space shuttle",
            start: 200,
            end: -250,
            className: "mx-auto w-2/3",
          },
          {
            src: assets.cTraderService4,
            alt: "Satellite orbit",
            start: -200,
            end: 200,
            className: "ml-auto w-1/3",
          },
          {
            src: assets.cTraderService5,
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
