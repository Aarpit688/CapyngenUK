import React from "react";
import Banner7 from "../components/Banner7";
import B2CopyIntro from "../components/B2CopyIntro";
import B2CopyFeatures from "../components/B2CopyFeatures";
import B2CopyTechnology from "../components/B2CopyTechnology";
import B2CopyWhy from "../components/B2CopyWhy";
import B2CopyFunctionalities from "../components/B2CopyFunctionalities";
import B2CopyLaunch from "../components/B2CopyLaunch";

const B2Copy = () => {
  return (
    <div>
      <Banner7
        title="High-Performance Copy Trading Technology for B2Copy"
        description="Enable seamless copy trading with scalable IT infrastructure built for professional traders and global brokerages."
        ctaText="Join Now"
        ctaLink="/contact-us"
        cards={[
          {
            thumbnail:
              "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-1.png",
            title: "Copy Trading with a Technological Edge for B2Copy",
            description:
              "Use a technological infrastructure of copy trading to make fast, reliable and efficient copies.",
          },
          {
            thumbnail:
              "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-1.png",
            title: "B2Copy High-Speed Copy Trading",
            description:
              "Provide automated trading with the help of technology for professional traders.",
          },
          {
            thumbnail:
              "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-1.png",
            title: "The Strength of Copy Trading Is in the Technology",
            description:
              "Make smooth signal executions by having real-time signal synchronization.",
          },
        ]}
      />

      <B2CopyIntro />
      <B2CopyFeatures />
      <B2CopyTechnology />
      <B2CopyWhy />
      <B2CopyFunctionalities />
      <B2CopyLaunch />
    </div>
  );
};

export default B2Copy;
