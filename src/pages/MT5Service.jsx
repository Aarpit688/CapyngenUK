import React from "react";
import Banner2 from "../components/Banner2";
import MT5ServiceIntro from "../components/MT5ServiceIntro";
import MT5ServiceFeatures from "../components/MT5ServiceFeatures";
import MT5ServiceUnderstanding from "../components/MT5ServiceUnderstanding";
import MT5ServiceSolutions from "../components/MT5ServiceSolutions";
import MT5ServiceWhyChoose from "../components/MT5ServiceWhyChoose";
import MT5ServiceAdvantages from "../components/MT5ServiceAdvantages";
import MT5ServiceBenefits from "../components/MT5ServiceBenefits";
import MT5ServiceConclusion from "../components/MT5ServiceConclusion";

const MT5Service = () => {
  return (
    <div>
      <Banner2 />
      <MT5ServiceIntro />
      <MT5ServiceUnderstanding />
      <MT5ServiceFeatures />
      <MT5ServiceSolutions />
      <MT5ServiceWhyChoose />
      <MT5ServiceAdvantages />
      <MT5ServiceBenefits />
      <MT5ServiceConclusion />
    </div>
  );
};

export default MT5Service;
