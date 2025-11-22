import React from "react";
import Banner8 from "../components/Banner8";
import B2ConnectIntro from "../components/B2ConnectIntro";
import B2ConnectFeatures from "../components/B2ConnectFeatures";
import B2ConnectImplementation from "../components/B2ConnectImplementation";
import B2ConnectBenefits from "../components/B2ConnectBenefits";
import B2ConnectUseCases from "../components/B2ConnectUseCases";
import B2ConnectIntegration from "../components/B2ConnectIntegration";
import { assets } from "../assets/assets";
import FaqSection from "../components/FaqSection";

const B2Connect = () => {
  const faqItems = [
    {
      question: "What is B2Connect Liquidity Bridge?",
      answer:
        "This tool is a multi-asset liquidity bridge that allows brokers to access liquidity providers in forex, crypto, and CFDs.",
    },
    {
      question: "Can B2Connect integrate with crypto exchanges?",
      answer:
        "Yes, it facilitates the direct connection with the leading crypto exchanges and OTC liquidity networks.",
    },
    {
      question: "Is B2Connect compatible with MT4/MT5 and cTrader?",
      answer:
        "Yes, it merges with MT4, MT5, cTrader, DXtrade, and even custom trading platforms.",
    },
    {
      question:
        "Can B2Connect Broker Technology Provider run multi-asset liquidity through B2Connect?",
      answer:
        "Yes, completely it can. The instrument supports forex, indices, crypto, commodities, and CFDs.",
    },
    {
      question:
        "Does Capyngen handle the installation and configuration of the bridge?",
      answer:
        "Absolutely, we oversee the entire bridge engagement, LP setup, and execution routing.",
    },
    {
      question: "Is B2Connect a good fit for small or startup brokers?",
      answer:
        "Definitely, it works perfectly for both startups and large-scale regulated brokerages.",
    },
    {
      question: "Are you available for regular check-ins and support?",
      answer:
        "Yes, we remain committed to the continuous fine-tuning, upgrading, and offering of technical support.",
    },
  ];
  return (
    <div>
      <Banner8
        image={assets.b2connect}
        badge=""
        name="Advanced Mobile Trading Technology for B2Connect"
        description="Deliver a smooth, secure mobile trading experience with our customized solutions for B2Connect-powered platforms."
        buttonText="Get to Know More"
      />
      <B2ConnectIntro />
      <B2ConnectFeatures />
      <B2ConnectImplementation />
      <B2ConnectBenefits />
      <B2ConnectUseCases />
      <B2ConnectIntegration />
      <FaqSection items={faqItems} />
    </div>
  );
};

export default B2Connect;
