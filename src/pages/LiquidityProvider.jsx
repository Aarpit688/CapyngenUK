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
import { assets } from "../assets/assets";
import FaqSection from "../components/FaqSection";

const LiquidityProvider = () => {
  const faqItems = [
    {
      question: "What is a liquidity provider for brokers?",
      answer:
        "A liquidity provider is a market participant who offers the required market depth and the best prices for brokers to be able to perform trading operations quickly and with minimal slippage.",
    },
    {
      question:
        "Can Capyngen integrate liquidity for both forex and crypto brokers?",
      answer:
        "Sure, we can facilitate a liquidity provider setup for both forex and cryptocurrency brokers.",
    },
    {
      question: "What is included in a liquidity provider integration service?",
      answer:
        "This package is made up of API connectivity, trading platform integration, liquidity bridge and aggregation solutions, and real-time market data.",
    },
    {
      question: "Are Capyngen’s solutions suitable for startups?",
      answer:
        "Certainly, we provide scalable and simple liquidity provider connection solutions that are designed specifically for new brokers.",
    },
    {
      question: "How secure are your liquidity solutions?",
      answer:
        "The technology used by our platforms is of institutional-grade and comes with secure, low-latency connectivity and compliance-focused architectures.",
    },
    {
      question: "Can your solutions help reduce trading risks?",
      answer:
        "Certainly, we offer risk management measures and exposure monitoring to provide dependable execution.",
    },
    {
      question: "Do you provide support after integration?",
      answer:
        "Indeed, we extend complete post-integration support, upkeep, and updates to ensure your systems are always in good working order.",
    },
    {
      question: "Is Capyngen a global liquidity technology provider?",
      answer:
        "Indeed, with our main office in the UK, we are serving clients all over the globe with in-depth solutions for liquidity providers.",
    },
  ];
  return (
    <div>
      <Banner4
        badge="Trusted Design Hub"
        gradientText="Institutional-Grade Liquidity "
        title="Technology for Financial Brokers"
        description="Connect to deep liquidity pools with robust bridge systems and aggregation technology engineered for ultra-low-latency execution."
        buttonText="Get Started"
        statsText="120 new inspirations added yesterday"
        image={assets.liquidityProvider}
      />
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
        heroImage="https://bitquant.capital/wp-content/uploads/2022/07/Liquidity_provider_pic_2-1024x538.jpg"
        featuresHeading
        features={[]}
      />
      <LiquidityBenefits />
      <LiquiditySolutions />
      <LiquidityIntegration />
      <LiquiditySupport />
      <LiquidityKeyFeatures />
      <LiquidityConclusion />
      <FaqSection items={faqItems} />
    </div>
  );
};

export default LiquidityProvider;
