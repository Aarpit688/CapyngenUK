import React from "react";
import Banner2 from "../components/Banner2";
import MT5ServiceIntro from "../components/MT5ServiceIntro";
import MT5ServiceFeatures from "../components/MT5ServiceFeatures";
import MT5ServiceUnderstanding from "../components/MT5ServiceUnderstanding";
import MT5ServiceSolutions from "../components/MT5ServiceSolutions";
import MT5ServiceWhyChoose from "../components/MT5ServiceWhyChoose";
import MT5ServiceAdvantages from "../components/MT5ServiceAdvantages";
import MT5ServiceBenefits from "../components/MT5ServiceBenefits";
import MT5ServiceConclusion from "../components/MT5ServiceConclusion";
import FaqSection from "../components/FaqSection";
import Banner3 from "../components/Banner3";
import { assets } from "../assets/assets";
import Banner6 from "../components/Banner6";

const MT5Service = () => {
  const faqItems = [
    {
      question: "What is MT5 technology?",
      answer:
        "MT5 is a multi-asset trading platform for forex, CFDs, commodities, and cryptocurrencies, that features advanced charting and algorithmic trading functionalities.",
    },
    {
      question: "Can Capyngen integrate MT5 for new and existing brokers?",
      answer:
        "We do platform integration and server setup for new and existing brokers. So the answer is yes.",
    },
    {
      question: "What services are included in MT5 solutions?",
      answer:
        "The services comprise a white-label setup, liquidity bridge solutions, API integration, plugin development, hosting, and backend infrastructure.",
    },
    {
      question: "Are MT5 solutions suitable for startups?",
      answer:
        "Yes, a turnkey MT5 setup enables a startup to enter into the market with a fully-featured platform very quickly.",
    },
    {
      question: "How reliable is MT5 for high-volume trading?",
      answer:
        "MT5 aims to be a high-performance trading platform with features such as low-latency execution, strong infrastructure, and integrated liquidity.",
    },
    {
      question: "Can MT5 integrate with existing MT4/MT5 platforms?",
      answer:
        "Capyngen offers a solution that allows global integration of MT5 with multi-asset brokers and Fintech firms.",
    },
    {
      question: "Do you provide ongoing support after the deployment?",
      answer:
        "Indeed, we continue to provide hosting, tech support, updating, and optimization for any MT5 service long after the initial deployment.",
    },
    {
      question: "Is Capyngen a trusted MT5 technology partner worldwide?",
      answer:
        "Based in the UK, we are a global MetaTrader 5 platform provider for brokers and thus, 'yes', is the answer.",
    },
  ];
  return (
    <div className="overflow-x-hidden w-full max-w-[100vw]">
      <Banner6
        titleGradient="Professional MT5 Platform Setup & Technology Services"
        description="Build a powerful and compliant MT5 brokerage with our advanced IT setup, automation, and system optimization solutions."
        ctaText="Explore Now"
        ctaLink="/contact-us"
        buttonBg="bg-gradient-to-r from-blue-600 to-blue-600 rounded-lg shadow-lg border border-white/10 hover:from-blue-700 hover:to-blue-700 hover:shadow-emerald-500/20"
        bgImageDesktop={assets.mtService2}
        bgImageMobile={assets.mt5}
        features={[
          {
            icon: ``,
            text: "",
          },
        ]}
      />

      <MT5ServiceIntro />
      <MT5ServiceUnderstanding />
      <MT5ServiceFeatures />
      <MT5ServiceSolutions />
      <MT5ServiceWhyChoose />
      <MT5ServiceAdvantages />
      <MT5ServiceBenefits />
      <MT5ServiceConclusion />
      <FaqSection items={faqItems} />
    </div>
  );
};

export default MT5Service;
