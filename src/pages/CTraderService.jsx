import React from "react";
import CTraderServiceIntro from "../components/CTraderServiceIntro";
import { Banner10 } from "../components/Banner10";
import CTraderServiceFeatures from "../components/CTraderServiceFeatures";
import CTraderServiceSolutions from "../components/CTraderServiceSolutions";
import CTraderServiceAdvantages from "../components/CTraderServiceAdvantages";
import CTraderServiceBenefits from "../components/CTraderServiceBenefits";
import CTraderServiceConclusion from "../components/CTraderServiceConclusion";
import { assets } from "../assets/assets";
import FaqSection from "../components/FaqSection";

const CTraderService = () => {
  const faqItems = [
    {
      question: "What is cTrader technology?",
      answer:
        "cTrader is a trading platform that can handle various asset classes to individuals, as well as brokers, it provides brokers with intuitive interfaces, fast execution, and robust connectivity.",
    },
    {
      question: "Can Capyngen customize cTrader platforms?",
      answer:
        "Definitely, we are able to fully customize and develop your cTrader software in terms of branding, UI, and feature changes.",
    },
    {
      question: "What services are included in cTrader solutions?",
      answer:
        "The services encompass the setup of a white-label, integration of the platform, hosting, bridging, API connectivity, multi-asset trading, and analytics platforms.",
    },
    {
      question: "Are these solutions suitable for startups?",
      answer:
        "Indeed, the turnkey cTrader solutions would enable a startup to be up and running in no time with only a minimal technical background.",
    },
    {
      question: "How reliable is cTrader for high-volume trading?",
      answer:
        "cTrader is a platform built with the latest technology and is very fast, which guarantees the stability of trades at heavy volumes; this is a low-latency, high-performance trading platform.",
    },
    {
      question: "Can cTrader integrate with MT4/MT5 and other platforms?",
      answer:
        "Sure, we offer integration between platforms for brokers trading a variety of assets; this also includes MT4 and MT5.",
    },
    {
      question: "Do you provide post-deployment support?",
      answer:
        "Yes. Capyngen is always there for you with continuous support, maintenance, and upgrading after any cTrader installation.",
    },
    {
      question: "Is Capyngen a global cTrader technology solutions provider?",
      answer:
        "Yes, although our main office is in the United Kingdom, we are happy to deliver complete cTrader turnkey solutions to clients all over the world.",
    },
  ];

  return (
    <div>
      <Banner10
        backgroundImage={assets.cTraderService1}
        heading="Specialized cTrader Technology Services for Brokers"
        subheading="Experience seamless trading operations with our expert cTrader installation, configuration, and infrastructure solutions."
        parallaxImages={[
          {
            src: assets.cTraderService2,
            alt: "Rocket launch",
            start: -200,
            end: 200,
            className: "w-1/3",
          },
          {
            src: assets.cTraderService3,
            alt: "Space shuttle",
            start: 200,
            end: -250,
            className: "mx-auto w-2/3",
          },
          {
            src: assets.cTraderService4,
            alt: "Satellite orbit",
            start: -200,
            end: 200,
            className: "ml-auto w-1/3",
          },
          {
            src: assets.cTraderService5,
            alt: "Rocket detail",
            start: 0,
            end: -500,
            className: "ml-24 w-5/12",
          },
        ]}
      />

      <CTraderServiceIntro />
      <CTraderServiceFeatures />
      <CTraderServiceSolutions />
      <CTraderServiceAdvantages />
      <CTraderServiceBenefits />
      <CTraderServiceConclusion />
      <FaqSection items={faqItems} />
    </div>
  );
};

export default CTraderService;
