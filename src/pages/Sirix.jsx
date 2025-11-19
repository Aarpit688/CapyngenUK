import React from "react";
import SirixIntro from "../components/SirixIntro";
import Banner1 from "../components/Banner1";
import SirixFeatures from "../components/SirixFeatures";
import SirixEcosystem from "../components/SirixEcosystem";
import SirixWhyChoose from "../components/SirixWhyChoose";
import SirixBenefits from "../components/SirixBenefits";
import SirixExtraBenefits from "../components/SirixExtraBenefits";

const Sirix = () => {
  return (
    <div>
      <Banner1 />
      <SirixIntro />
      <SirixFeatures />
      <SirixEcosystem />
      <SirixWhyChoose />
      <SirixBenefits />
      <SirixExtraBenefits />
    </div>
  );
};

export default Sirix;
