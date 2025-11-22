import React from "react";
import CTraderIntro from "../components/CTraderIntro";
import Banner3 from "../components/Banner3";
import CTraderFeatures from "../components/CTraderFeatures";
import CTraderSolutions from "../components/CTraderSolutions";
import CTraderWhyChoose from "../components/CTraderWhyChoose";
import CTraderAdvantages from "../components/CTraderAdvantages";
import CTraderBenefits from "../components/CTraderBenefits";
import CTraderAdditionalFeatures from "../components/CTraderAdditionalFeatures";
import CTraderConclusion from "../components/CTraderConclusion";
import { assets } from "../assets/assets";
import FaqSection from "../components/FaqSection";

const CTrader = () => {
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
      <Banner3
        title="High-Performance cTrader Technology Solutions for Brokers"
        description="Deliver institutional trading experiences with robust cTrader server setups, API integrations, and IT support."
        primaryCtaText="Start Now"
        primaryCtaLink="/contact-us"
        secondaryCtaText="View Demo"
        secondaryCtaLink="/contact-us"
        desktopBgImage={assets.ctraderbanner}
        mobileBgImage={assets.ctraderbanner}
      />

      <CTraderIntro />
      <CTraderFeatures />
      <CTraderSolutions />
      <CTraderWhyChoose />
      <CTraderAdvantages />
      <CTraderBenefits />
      <CTraderAdditionalFeatures />
      <CTraderConclusion />
      <FaqSection items={faqItems} />
    </div>
  );
};

export default CTrader;
