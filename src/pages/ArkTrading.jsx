import React from "react";
import Banner2 from "../components/Banner2";
import ArkTradingIntro from "../components/ArkTradingIntro";
import ArkTradingFeatures from "../components/ArkTradingFeatures";
import ArkTradingInfrastructure from "../components/ArkTradingInfrastructure";
import ArkTradingPreference from "../components/ArkTradingPreference";
import ArkTradingBenefits from "../components/ArkTradingBenefits";
import ArkTradingUsage from "../components/ArkTradingUsage";
import ArkTradingHighPerformance from "../components/ArkTradingHighPerformance";
import FaqSection from "../components/FaqSection";
import Banner8 from "../components/Banner8";
import { assets } from "../assets/assets";

const ArkTrading = () => {
  const faqItems = [
    {
      question: "What is the Ark Trading platform?",
      answer:
        "Ark Trading is a multi-asset trading platform designed for forex, CFD, crypto, and index brokers who require fast execution and modern trading tools.",
    },
    {
      question: "Do you offer Ark Trading white-label solutions?",
      answer:
        "Sure, Capyngen offers globally fully branded Ark Trading white-label setups for brokers.",
    },
    {
      question: "Can Ark Trading connect to liquidity providers?",
      answer:
        "Yes, we connect Ark liquidity instruments with major liquidity providers for deep liquidity and stable pricing.",
    },
    {
      question: "Does Ark Trading support multi-asset trading?",
      answer:
        "Yes, it supports the trading of forex, CFDs, commodities, indices, cryptocurrencies, and more.",
    },
    {
      question: "Do you provide backend hosting and management?",
      answer:
        "Yes, we take care of servers, databases, routing systems, and security so that your platform stays stable.",
    },
    {
      question: "Can Ark Trading integrate with CRMs and external systems?",
      answer:
        "Indeed, Ark Trading API facilitates integration without any hurdles with CRMs, PSPs, KYC systems, and fintech tools.",
    },
    {
      question: "Is Ark Trading suitable for new brokers?",
      answer:
        "Yes, the arrangement is quick, inexpensive, and perfectly suits a new broker coming into the market.",
    },
    {
      question: "Do you offer 24/7 technical support?",
      answer:
        "Yes, we ensure around-the-clock monitoring, maintenance, and performance support.",
    },
  ];
  return (
    <div>
      <Banner8
        image={assets.arkTrading1}
        badge=""
        name="Premium IT Solutions for Ark Trading Platforms"
        description="Capyngen builds reliable, secure technology to optimize your Ark Trading system for speed, automation, and operational growth."
        buttonText="Get to Know More"
      />
      <ArkTradingIntro />
      <ArkTradingFeatures />
      <ArkTradingInfrastructure />
      <ArkTradingPreference />
      <ArkTradingBenefits />
      <ArkTradingUsage />
      <ArkTradingHighPerformance />
      <FaqSection items={faqItems} />
    </div>
  );
};

export default ArkTrading;
