import React from "react";
import PrimeXMServiceIntro from "../components/PrimeXMServiceIntro";
import Banner8 from "../components/Banner8";
import PrimeXMXServiceUnderstanding from "../components/PrimeXMServiceUnderstanding";
import PrimeXMServiceFeatures from "../components/PrimeXMServiceFeatures";
import PrimeXMServiceInfrastructure from "../components/PrimeXMServiceInfrastructure";
import PrimeXMServiceTechnology from "../components/PrimeXMServiceTechnology";
import PrimeXMServiceSolutions from "../components/PrimeXMServiceSolutions";
import PrimeXMServiceBenefits from "../components/PrimeXMServiceBenefits";
import PrimeXMServiceAdditionalFeatures from "../components/PrimeXMServiceAdditionalFeatures";
import PrimeXMServiceConclusion from "../components/PrimeXMServiceConclusion";

const PrimeXMService = () => {
  return (
    <div>
      <Banner8 />
      <PrimeXMServiceIntro />
      <PrimeXMXServiceUnderstanding />
      <PrimeXMServiceFeatures />
      <PrimeXMServiceInfrastructure />
      <PrimeXMServiceTechnology />
      <PrimeXMServiceSolutions />
      <PrimeXMServiceBenefits />
      <PrimeXMServiceAdditionalFeatures />
      <PrimeXMServiceConclusion />
    </div>
  );
};

export default PrimeXMService;
