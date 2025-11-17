import React from "react";
import Banner5 from "../components/Banner5";
import B2TraderUnderstanding from "../components/B2TraderUnderstanding";
import B2TraderFeatures from "../components/B2TraderFeatures";
import B2TraderInfrastructure from "../components/B2TraderInfrastructure";
import B2TraderTrust from "../components/B2TraderTrust";
import B2TraderBenefits from "../components/B2TraderBenefits";
import B2TraderHighPerformance from "../components/B2TraderHighPerformance";

const B2Trader = () => {
  return (
    <div>
      <Banner5 />
      <B2TraderUnderstanding />
      <B2TraderFeatures />
      <B2TraderInfrastructure />
      <B2TraderTrust />
      <B2TraderBenefits />
      <B2TraderHighPerformance />
    </div>
  );
};

export default B2Trader;
