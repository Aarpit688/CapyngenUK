import React from "react";
import Banner4 from "../components/Banner4";
import ForexLanding from "../components/ForexLanding";
import { FaBolt, FaCogs, FaShieldAlt } from "react-icons/fa";
import LiquidityBenefits from "../components/LiquidityBenefits";
import LiquiditySolutions from "../components/LiquiditySolutions";
import LiquidityIntegration from "../components/LiquidityIntegration";
import LiquiditySupport from "../components/LiquiditySupport";
import LiquidityKeyFeatures from "../components/LiquidityKeyFeatures";
import LiquidityConclusion from "../components/LiquidityConclusion";

const LiquidityProvider = () => {
  return (
    <div>
      <Banner4 />
      <ForexLanding
        heroTitle="What Is a Liquidity Provider and How We Help Brokers Succeed"
        heroDescription={
          <span>
            Liquidity​‍​‌‍​‍‌​‍​‌‍​‍‌ provider is the one who offers the
            required market depth which enables brokers to carry out trades in
            an efficient manner, control spreads, and give attractive pricing to
            their clients. The need for liquidity solutions is of equal
            importance in the forex and cryptocurrency markets to guarantee fair
            trading and to keep slippage at a minimum.
            <br />
            <br />
            At Capyngen Technologies, we are engaged in offering technology
            solutions to liquidity providers that facilitate brokers to
            integrate institutional-grade liquidity, manage multiple liquidity
            sources, and optimize execution. We are the one-stop-shop for
            liquidity provider services which include setting up a liquidity
            provider for forex brokers, crypto brokers, API integration, and
            complete liquidity provider integration solutions thus allowing
            brokers to be reliable, scalable, and fast in any market
            ​‍​‌‍​‍‌​‍​‌‍​‍‌situation.
          </span>
        }
        primaryBtn={{ label: "Get Started", link: "#" }}
        secondaryBtn={{ label: "", link: "" }}
        heroImage="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
        featuresHeading
        features={[]}
      />
      <LiquidityBenefits />
      <LiquiditySolutions />
      <LiquidityIntegration />
      <LiquiditySupport />
      <LiquidityKeyFeatures />
      <LiquidityConclusion />
    </div>
  );
};

export default LiquidityProvider;
