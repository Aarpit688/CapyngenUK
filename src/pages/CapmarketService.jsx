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
import { assets } from "../assets/assets";
import FaqSection from "../components/FaqSection";

const CapmarketService = () => {
  const faqItems = [
    {
      question: "What are Capmarket services?",
      answer:
        "Capmarket services consist of a multi-asset trading platform, liquidity bridges, server hosting, white-label solutions, and integration services for brokers.",
    },
    {
      question: "Can Capyngen integrate Capmarket with MT5 platforms?",
      answer:
        "Yes, we enable the integration of Capmarket with trading platforms such as MT5 and other multi-asset brokers.",
    },
    {
      question: "What services are included in Capmarket solutions?",
      answer:
        "The services cover platform setup, liquidity bridges, server hosting, white-label platform development, API integration, and support indefinitely.",
    },
    {
      question: "Are Capmarket services suitable for startups?",
      answer:
        "Yes, the turnkey solutions make it possible for startups to enter the market very fast with fully operational, branded platforms.",
    },
    {
      question: "How reliable is Capmarket technology for high-volume trading?",
      answer:
        "Capmarket delivers a low-latency, easily extendable infrastructure along with strong liquidity links for the support of trading at an institutional level.",
    },
    {
      question:
        "Can Capmarket integrate with existing MT4/MT5 or other platforms?",
      answer:
        "Certainly, we provide tailored platform integration solutions to accommodate brokers anywhere in the world.",
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer:
        "Yes, Capyngen is responsible for hosting, technical assistance, updates, and the optimization of all Capmarket services.",
    },
    {
      question: "Is Capyngen a trusted Capmarket technology provider UK-based?",
      answer:
        "Yes, we are located in the UK and deliver Capmarket broker technology solution services to clients globally.",
    },
  ];
  return (
    <div>
      <Banner7
        title="Full-Scale Capmarket Platform Technology Services"
        description="From server deployment to integration, Capyngen delivers complete Capmarket technology solutions for efficient brokerage operations."
        ctaText="Join Now"
        ctaLink="/contact-us"
        cards={[
          {
            thumbnail: assets.capMarketService1,
            title: "Innovative Capmarket Technology",
            description: "Broker operations got an end-to-end setup.",
          },
          {
            thumbnail: assets.capMarketService2,
            title: "Capmarket System Implementation",
            description:
              "The trading environment is created to be fast and safe.",
          },
          {
            thumbnail: assets.capMarketService3,
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
      <FaqSection items={faqItems} />
    </div>
  );
};

export default CapmarketService;
