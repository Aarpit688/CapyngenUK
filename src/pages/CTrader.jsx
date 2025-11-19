import React from "react";
import CTraderIntro from "../components/CTraderIntro";
import Banner3 from "../components/Banner3";
import CTraderFeatures from "../components/CTraderFeatures";
import CTraderSolutions from "../components/CTraderSolutions";
import CTraderWhyChoose from "../components/CTraderWhyChoose";
import CTraderAdvantages from "../components/CTraderAdvantages";
import CTraderBenefits from "../components/CTraderBenefits";
import CTraderAdditionalFeatures from "../components/CTraderAdditionalFeatures";
import CTraderConclusion from "../components/CTraderConclusion";

const CTrader = () => {
  return (
    <div>
      <Banner3 />
      <CTraderIntro />
      <CTraderFeatures />
      <CTraderSolutions />
      <CTraderWhyChoose />
      <CTraderAdvantages />
      <CTraderBenefits />
      <CTraderAdditionalFeatures />
      <CTraderConclusion />
    </div>
  );
};

export default CTrader;
