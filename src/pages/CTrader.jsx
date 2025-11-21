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
import { assets } from "../assets/assets";

const CTrader = () => {
  return (
    <div>
      <Banner3
        title="High-Performance cTrader Technology Solutions for Brokers"
        description="Deliver institutional trading experiences with robust cTrader server setups, API integrations, and IT support."
        primaryCtaText="Start Now"
        primaryCtaLink="/contact-us"
        secondaryCtaText="View Demo"
        secondaryCtaLink="/contact-us"
        desktopBgImage={assets.ctraderbanner}
        mobileBgImage={assets.ctraderbanner}
      />

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
