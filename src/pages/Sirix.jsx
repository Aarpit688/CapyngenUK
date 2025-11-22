import React from "react";
import SirixIntro from "../components/SirixIntro";
import Banner1 from "../components/Banner1";
import SirixFeatures from "../components/SirixFeatures";
import SirixEcosystem from "../components/SirixEcosystem";
import SirixWhyChoose from "../components/SirixWhyChoose";
import SirixBenefits from "../components/SirixBenefits";
import SirixExtraBenefits from "../components/SirixExtraBenefits";
import { assets } from "../assets/assets";
import FaqSection from "../components/FaqSection";

const Sirix = () => {
  const faqItems = [
    {
      question: "What kind of platform is the Sirix trading platform?",
      answer:
        "Sirix is a next-generation multi-asset trading platform that is social trading enabled, has mobile applications, and a sleek, user-friendly interface that is created for forex and CFD brokers.",
    },
    {
      question: "Are you providing a white-label Sirix setup?",
      answer:
        "Yes, Capyngen delivers fully branded, hosted, and integrated white-label Sirix solutions.",
    },
    {
      question: "Is Sirix able to connect with liquidity providers?",
      answer:
        "Yes, we perform Sirix API integration with top-tier liquidity providers and bridge solutions.",
    },
    {
      question: "Can a trader access Sirix through a mobile device and trade?",
      answer:
        "Certainly. Sirix has a fully mobile-optimized trading app available for iOS and Android.",
    },
    {
      question: "What feature of Sirix is superior compared to MT5 or cTrader?",
      answer:
        "Sirix is unique in having a social trading system that is integrated, visual dashboards, and powerful user engagement tools.",
    },
    {
      question: "Are you completing the backend for Sirix?",
      answer:
        "Yes, we provide the necessary infrastructure to host Sirix securely, manage servers, and track activities round the clock.",
    },
    {
      question: "Is it possible for Sirix to trading multi-asset?",
      answer:
        "Yes, Sirix can trade foreign exchange, CFDs, crypto, indices, commodities, and other assets.",
    },
    {
      question: "Do you provide assistance in the customization of Sirix?",
      answer:
        "Yes, we customize brokerage dashboards, branding, UI components, and trading tools to suit your business requirements.",
    },
  ];
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
      <FaqSection items={faqItems} />
    </div>
  );
};

export default Sirix;
