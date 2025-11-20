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
import { assets } from "../assets/assets";

const PrimeXMService = () => {
  return (
    <div>
      <Banner8
        image={assets.ai1}
        badge=""
        name="PrimeXM X-Core Technology for High-Speed Liquidity Routing"
        description="Optimize execution flow with our expert setup and technology solutions for the PrimeXM X-Core environment."
        buttonText="Get to Know More"
      />

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
