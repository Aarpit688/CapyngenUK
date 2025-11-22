import React from "react";
import Banner9 from "../components/Banner9";
import OneZeroServiceIntro from "../components/OneZeroServiceIntro";
import OneZeroServiceUnderstanding from "../components/OneZeroServiceUnderstanding";
import OneZeroServiceFeatures from "../components/OneZeroServiceFeatures";
import OneZeroServiceAdvantages from "../components/OneZeroServiceAdvantages";
import OneZeroServiceSolutions from "../components/OneZeroServiceSolutions";
import OneZeroServiceWhyChoose from "../components/OneZeroServiceWhyChoose";
import OneZeroServiceBenefits from "../components/OneZeroServiceBenefits";
import OneZeroServiceAdditionalFeatures from "../components/OneZeroServiceAdditionalFeatures";
import OneZeroServiceConclusion from "../components/OneZeroServiceConclusion";
import { assets } from "../assets/assets";
import FaqSection from "../components/FaqSection";

const OneZeroService = () => {
  const faqItems = [
    {
      question: "What is OneZero technology?",
      answer:
        "OneZero is a trading technology that supports high-performance multi-asset infrastructure, APIs & bridges solutions, and broker connectivity offered by OneZero.",
    },
    {
      question: "Can Capyngen integrate OneZero for both MT4 and MT5 brokers?",
      answer:
        "Definitely we offer integration that is smooth for both MT4 and MT5 platforms.",
    },
    {
      question: "What is included in OneZero services?",
      answer:
        "Firstly, multi-asset trading infrastructure and API & bridge along with connectivity and execution solutions are the main items in a service. Additionally, there are analytics platforms.",
    },
    {
      question: "Are these solutions suitable for startups?",
      answer:
        "Yes, Capyngen provides a OneZero setup turnkey solution that is designed for fast deployment and easy scalability.",
    },
    {
      question: "How reliable is OneZero technology?",
      answer:
        "OneZero is a provider of institutional-grade infrastructure that has ultra-low latency, strong connectivity, and global scalability.",
    },
    {
      question: "Can OneZero handle high-volume trading?",
      answer:
        "The platform, which is designed for high-volume trading, facilitates the stable execution of trading and access to liquidity in a reliable manner.",
    },
    {
      question: "Do you provide post-deployment support?",
      answer:
        "Indeed, Capyngen is always ready to provide support, maintenance, and optimization for any OneZero implementations.",
    },
    {
      question: "Is Capyngen a trusted global OneZero technology provider?",
      answer:
        "Certainly, we deliver OneZero turnkey solutions to the global customers while our headquarters is located in the UK.",
    },
  ];
  return (
    <div>
      <Banner9
        title="OneZero Liquidity Bridge Technology Services"
        subheading="Connect your brokerage to multi-asset liquidity with Capyngen’s reliable OneZero integration and infrastructure support."
        ctaText="Contact Now"
        ctaLink="/contact-us"
        images={[
          [assets.onezeroService1, assets.onezeroService2],
          [assets.onezeroService3, assets.onezeroService4],
          [assets.onezeroService5, assets.onezeroService6],
        ]}
        topGlowColor="cyan-500/20"
        bottomGlowColor="pink-600/20"
        radialGlowColor="blue-500/10"
      />
      <OneZeroServiceIntro />
      <OneZeroServiceUnderstanding />
      <OneZeroServiceFeatures />
      <OneZeroServiceSolutions />
      <OneZeroServiceWhyChoose />
      <OneZeroServiceAdvantages />
      <OneZeroServiceBenefits />
      <OneZeroServiceAdditionalFeatures />
      <OneZeroServiceConclusion />
      <FaqSection items={faqItems} />
    </div>
  );
};

export default OneZeroService;
