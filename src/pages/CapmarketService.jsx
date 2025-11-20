import React from "react";
import Banner7 from "../components/Banner7";
import CapmarketServiceIntro from "../components/CapmarketServiceIntro";
import CapmarketServiceUnderstanding from "../components/CapmarketServiceUnderstanding";
import CapmarketServiceFeatures from "../components/CapmarketServiceFeatures";
import CapmarketServiceSolutions from "../components/CapmarketServiceSolutions";
import CapmarketServiceWhyChoose from "../components/CapmarketServiceWhyChoose";
import CapmarketServiceAdvantages from "../components/CapmarketServiceAdvantages";
import CapmarketServiceUsage from "../components/CapmarketServiceUsage";
import CapmarketServiceAdditionalFeatures from "../components/CapmarketServiceAdditionalFeatures";
import CapmarketServiceConclusion from "../components/CapmarketServiceConclusion";

const CapmarketService = () => {
  return (
    <div>
      <Banner7
        title="Full-Scale Capmarket Platform Technology Services"
        description="From server deployment to integration, Capyngen delivers complete Capmarket technology solutions for efficient brokerage operations."
        ctaText="Join Now"
        ctaLink="/contact-us"
        cards={[
          {
            thumbnail:
              "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-1.png",
            title: "Innovative Capmarket Technology",
            description: "Broker operations got an end-to-end setup.",
          },
          {
            thumbnail:
              "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-1.png",
            title: "Capmarket System Implementation",
            description:
              "The trading environment is created to be fast and safe.",
          },
          {
            thumbnail:
              "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-1.png",
            title: "Capmarket Integration Suite",
            description: "Brokerage workflow-efficient tools.",
          },
        ]}
      />
      <CapmarketServiceIntro />
      <CapmarketServiceUnderstanding />
      <CapmarketServiceFeatures />
      <CapmarketServiceSolutions />
      <CapmarketServiceWhyChoose />
      <CapmarketServiceAdvantages />
      <CapmarketServiceUsage />
      <CapmarketServiceAdditionalFeatures />
      <CapmarketServiceConclusion />
    </div>
  );
};

export default CapmarketService;
