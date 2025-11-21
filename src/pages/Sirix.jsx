import React from "react";
import SirixIntro from "../components/SirixIntro";
import Banner1 from "../components/Banner1";
import SirixFeatures from "../components/SirixFeatures";
import SirixEcosystem from "../components/SirixEcosystem";
import SirixWhyChoose from "../components/SirixWhyChoose";
import SirixBenefits from "../components/SirixBenefits";
import SirixExtraBenefits from "../components/SirixExtraBenefits";
import { assets } from "../assets/assets";

const Sirix = () => {
  return (
    <div>
      <Banner1
        title="Scalable Sirix Trading Technology for Modern Brokers"
        subtitle="Deliver social trading, web trading, and mobile trading with powerful Sirix-focused IT infrastructure."
        ctaText="Contact Now"
        noiseImg={assets.sirix1}
        illustrationImg={assets.sirix1}
        trustedByText="Tstedru by 120k+ companies"
        rating={4.8}
        totalReviews="27k Reviews"
      />
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
