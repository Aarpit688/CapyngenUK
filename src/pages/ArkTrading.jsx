import React from "react";
import Banner2 from "../components/Banner2";
import ArkTradingIntro from "../components/ArkTradingIntro";
import ArkTradingFeatures from "../components/ArkTradingFeatures";
import ArkTradingInfrastructure from "../components/ArkTradingInfrastructure";
import ArkTradingPreference from "../components/ArkTradingPreference";
import ArkTradingBenefits from "../components/ArkTradingBenefits";
import ArkTradingUsage from "../components/ArkTradingUsage";
import ArkTradingHighPerformance from "../components/ArkTradingHighPerformance";

const ArkTrading = () => {
  return (
    <div>
      <Banner2
        title="Premium IT Solutions for Ark Trading Platforms"
        subtitle="Capyngen builds reliable, secure technology to optimize your Ark Trading system for speed, automation, and operational growth."
        buttonText="Explore Now"
        buttonLink="/contact-us"
        image="https://d33wubrfki0l68.cloudfront.net/54780decfb9574945bc873b582cdc6156144a2ba/d9fa1/images/hero/4/illustration.png"
      />
      <ArkTradingIntro />
      <ArkTradingFeatures />
      <ArkTradingInfrastructure />
      <ArkTradingPreference />
      <ArkTradingBenefits />
      <ArkTradingUsage />
      <ArkTradingHighPerformance />
    </div>
  );
};

export default ArkTrading;
