import React from "react";
import Banner9 from "../components/Banner9";
import OneZeroServiceIntro from "../components/OneZeroServiceIntro";
import OneZeroServiceUnderstanding from "../components/OneZeroServiceUnderstanding";
import OneZeroServiceFeatures from "../components/OneZeroServiceFeatures";
import OneZeroServiceAdvantages from "../components/OneZeroServiceAdvantages";
import OneZeroServiceSolutions from "../components/OneZeroServiceSolutions";
import OneZeroServiceWhyChoose from "../components/OneZeroServiceWhyChoose";
import OneZeroServiceBenefits from "../components/OneZeroServiceBenefits";
import OneZeroServiceAdditionalFeatures from "../components/OneZeroServiceAdditionalFeatures";
import OneZeroServiceConclusion from "../components/OneZeroServiceConclusion";
import { assets } from "../assets/assets";

const OneZeroService = () => {
  return (
    <div>
      <Banner9
        title="OneZero Liquidity Bridge Technology Services"
        subheading="Connect your brokerage to multi-asset liquidity with Capyngen’s reliable OneZero integration and infrastructure support."
        ctaText="Contact Now"
        ctaLink="/contact-us"
        images={[
          [assets.onezeroService1, assets.onezeroService2],
          [assets.onezeroService3, assets.onezeroService4],
          [assets.onezeroService5, assets.onezeroService6],
        ]}
        topGlowColor="cyan-500/20"
        bottomGlowColor="pink-600/20"
        radialGlowColor="blue-500/10"
      />
      <OneZeroServiceIntro />
      <OneZeroServiceUnderstanding />
      <OneZeroServiceFeatures />
      <OneZeroServiceSolutions />
      <OneZeroServiceWhyChoose />
      <OneZeroServiceAdvantages />
      <OneZeroServiceBenefits />
      <OneZeroServiceAdditionalFeatures />
      <OneZeroServiceConclusion />
    </div>
  );
};

export default OneZeroService;
