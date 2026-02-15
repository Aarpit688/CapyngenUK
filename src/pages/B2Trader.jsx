import React from "react";
import Banner5 from "../components/Banner5";
import B2TraderUnderstanding from "../components/B2TraderUnderstanding";
import B2TraderFeatures from "../components/B2TraderFeatures";
import B2TraderInfrastructure from "../components/B2TraderInfrastructure";
import B2TraderTrust from "../components/B2TraderTrust";
import B2TraderBenefits from "../components/B2TraderBenefits";
import B2TraderHighPerformance from "../components/B2TraderHighPerformance";
import FaqSection from "../components/FaqSection";

const B2Trader = () => {
  const faqItems = [
    {
      question: "What is the function of AynXtrader trading platform?",
      answer:
        "AynXtrader is a multi-asset trading engine that is tailored to forex, crypto, and CFD brokers and is characterized by a need for fast execution and strong liquidity access.",
    },
    {
      question: "Are AynXtrader white-label solutions available through you?",
      answer:
        "Yes, Aynzenix is a fully branded AynXtrader white-label setup provider for brokers worldwide.",
    },
    {
      question: "Whether AynXtrader can liaise with liquidity providers?",
      answer:
        "Sure. We link several liquidity sources to have deep liquidity and get accurate market pricing.",
    },
    {
      question: "Is AynXtrader supporting multi-asset trading?",
      answer:
        "Indeed, AynXtrader supports trading in forex, CFDs, cryptocurrencies, indices, commodities, and more.",
    },
    {
      question: "Do you take care of hosting and backend infrastructure?",
      answer:
        "Yes, we are responsible for cloud hosting, backend management, routing engines, and security configurations.",
    },
    {
      question: "Whether AynXtrader get together with CRMs and payment systems?",
      answer:
        "Indeed. AynXtrader API supports quick integration with CRMs, PSPs, KYC tools, and analytics platforms.",
    },
    {
      question: "Is AynXtrader a good choice for brokers that are new?",
      answer:
        "Certainly, as its quick installation, automation, and low-cost features make it a perfect fit for startups.",
    },
    {
      question: "Do you provide uninterrupted support and assistance?",
      answer:
        "Yes, Aynzenix is responsible for 24/7 monitoring, updates, maintenance, and technical support.",
    },
  ];
  return (
    <div>
      <Banner5 />
      <B2TraderUnderstanding />
      <B2TraderFeatures />
      <B2TraderInfrastructure />
      <B2TraderTrust />
      <B2TraderBenefits />
      <B2TraderHighPerformance />
      <FaqSection items={faqItems} />
    </div>
  );
};

export default B2Trader;
