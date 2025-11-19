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
      <Banner10 />
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
