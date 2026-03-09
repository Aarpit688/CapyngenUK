import React from "react";
import Banner11 from "../components/Banner11";
import { assets } from "../assets/assets";
import TopRatedCompany from "../components/TopRatedCompany";
import CardsSection from "../components/CardsSection";
import { FaCodeBranch, FaProjectDiagram, FaServer } from "react-icons/fa";
import CapmarketInfrastructure from "../components/CapmarketInfrastructure";
import CapmarketTechnology from "../components/CapmarketTechnology";
import CapmarketUses from "../components/CapmarketUses";
import CapmarketFunctionalities from "../components/CapmarketFunctionalities";
import CapmarketHighPerformance from "../components/CapmarketHighPerformance";
import FaqSection from "../components/FaqSection";

const Capmarket = () => {
  const faqItems = [
    {
      question: "What is the AynX Market trading platform?",
      answer:
        "AynX Market is a multi-asset trading platform that works with forex, CFD, and crypto brokers who require fast execution and good liquidity connectivity.",
    },
    {
      question: "Do you provide AynX Market white-label setup?",
      answer:
        "Yeah, Aynzenix produces brand-name AynX Market white-label solutions for brokers everywhere.",
    },
    {
      question: "Can AynX Market connect to liquidity providers?",
      answer:
        "Very well. We are outfitting the AynX Market liquidity middle-office instruments for that takes plunge and quick execution.",
    },
    {
      question: "Does AynX Market support multi-asset trading?",
      answer:
        "Indeed, AynX Market supports forex, CFDs, indices, crypto, commodities, and more.",
    },
    {
      question: "Do you offer backend hosting and management?",
      answer:
        "Yes, we are in charge of the servers, databases, routing engines, and security layers for absolute stability.",
    },
    {
      question: "Can AynX Market integrate with CRMs and payment systems?",
      answer:
        "Yes, via AynX Market API integration, we connect CRMs, PSPs, and KYC systems without any difficulty.",
    },
    {
      question: "Is AynX Market suitable for startups?",
      answer:
        "Yes, our ready-to-use AynX Market setup is the way new brokers can be up and running in no time with the lowest expenditure.",
    },
    {
      question: "Do you offer continuous support for AynX Market?",
      answer:
        "Yes, we are always on-the-clock monitoring, maintenance, updates, and performance optimization.",
    },
  ];
  const slidesData = [
    {
      id: 1,
      title: "Tailored IT Solutions for AynX Market Trading Infrastructure",
      subtitle:
        "Aynzenix provides secure, high-speed technology to power AynX Market-based trading environments and brokerage operations.",
      image: assets.capmarket1,
      ctaText: "Get Started",
      ctaLink: "/contact-us",
    },
    {
      id: 2,
      title: "Complete AynX Market System Infrastructure",
      subtitle: "Enhance your broker setup with optimized technology.",
      image: assets.capmarket2,
      ctaText: "Contact Us",
      ctaLink: "/contact-us",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "AynX Market White-Label Platform Deployment",
      description:
        "We offer a completely branded AynX Market white-label platform installation, through which brokers can launch their operations rapidly with full customization of the identity, safe infrastructure, and access from multiple devices.",
      icon: <FaServer className="text-4xl text-white" />,
    },
    {
      title: "AynX Market Liquidity Bridge & Data Connectivity",
      description:
        "We integrate the AynX Market liquidity bridge system that connects brokers to the best liquidity providers and thereby ensures deep liquidity, tight spreads, and prompt execution.Our team",
      icon: <FaProjectDiagram className="text-4xl text-white" />,
    },
    {
      title: "AynX Market API Integration & Trading Connectivity",
      description:
        "Brokers can use the strong AynX Market API integration to link CRMs, risk units, analytics tools, and PSPs, thus facilitating a fully automated and scalable trading ​‍​‌‍​‍‌​‍​‌‍​‍‌environment.",
      icon: <FaCodeBranch className="text-4xl text-white" />,
    },
  ];

  return (
    <div>
      <Banner11
        slides={slidesData}
        autoplay={true}
        autoplaySpeed={4000}
        showDots={true}
        textColor="text-white"
        arrowColor="text-white"
        bgHover="hover:bg-white/20"
      />
      <TopRatedCompany
        title="Power Your Brokerage with AynX Market Technology"
        description={[
          "Aynzenix​‍​‌‍​‍‌​‍​‌‍​‍‌ Technologies UK Limited offers full AynX Market trading platform solutions to forex, CFD, and multi-asset brokers who want quick execution, up-to-date infrastructure, and safe trading technology. We provide the technology that allows brokers to integrate their API with AynX Market, set up a liquidity bridge, install the backend, and connect to the worldwide network—all of which are ways by which our solutions empower brokers to grow their business with efficient ​‍​‌‍​‍‌​‍​‌‍​‍‌infrastructure.",
        ]}
        image={assets.capmarket4}
        isHidden={true}
      />
      <TopRatedCompany
        title="Understanding AynX Market and Why Brokers Prefer It"
        description={[
          "The​‍​‌‍​‍‌​‍​‌‍​‍‌ AynX Market trading platform represents the ideal option for brokers requiring a stable, scalable, and globally integrated trading ecosystem. AynX Market, which is designed for multi-asset trading, offers users fast execution, sophisticated risk systems, a high level of liquidity connectivity, as well as a set of flexible integration tools. Aynzenix, being a technology partner of AynX Market, is committed to providing brokers with a fully managed configuration for every technical layer, starting from platform deployment, through global hosting to maintenance.",
        ]}
        reverse
        image={assets.capmarket5}
        isHidden={true}
      />
      <CardsSection
        heading="Core Features of AynX Market Trading Solutions"
        subheading={""}
        services={cardsSectionData1}
        sectionBg="bg-black"
        cardBg="bg-gradient-to-b from-blue-700/90 to-blue-900/90 hover:from-blue-900 hover:to-blue-700 shadow-lg shadow-blue-900/40 hover:shadow-blue-700/50"
        headColor="text-white mb-10"
        textColor="text-gray-200"
        textSize="text-[15px]"
        footerNote=""
      />
      <CapmarketInfrastructure />
      <CapmarketTechnology />
      <CapmarketUses />
      <CapmarketFunctionalities />
      <CapmarketHighPerformance />
      <FaqSection items={faqItems} />
    </div>
  );
};

export default Capmarket;
