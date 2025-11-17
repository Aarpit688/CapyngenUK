import React from "react";
import Banner8 from "../components/Banner8";
import B2ConnectIntro from "../components/B2ConnectIntro";
import B2ConnectFeatures from "../components/B2ConnectFeatures";
import B2ConnectImplementation from "../components/B2ConnectImplementation";
import B2ConnectBenefits from "../components/B2ConnectBenefits";
import B2ConnectUseCases from "../components/B2ConnectUseCases";
import B2ConnectIntegration from "../components/B2ConnectIntegration";

const B2Connect = () => {
  return (
    <div>
      <Banner8 />
      <B2ConnectIntro />
      <B2ConnectFeatures />
      <B2ConnectImplementation />
      <B2ConnectBenefits />
      <B2ConnectUseCases />
      <B2ConnectIntegration />
    </div>
  );
};

export default B2Connect;
