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
      <Banner2 />
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
