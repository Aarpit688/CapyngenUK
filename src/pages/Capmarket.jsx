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

const Capmarket = () => {
  const slidesData = [
    {
      id: 1,
      title: "Tailored IT Solutions for Capmarket Trading Infrastructure",
      subtitle:
        "Capyngen provides secure, high-speed technology to power Capmarket-based trading environments and brokerage operations.",
      image: assets.ai1,
      ctaText: "Get Started",
      ctaLink: "/contact-us",
    },
    {
      id: 2,
      title: "Complete Capmarket System Infrastructure",
      subtitle: "Enhance your broker setup with optimized technology.",
      image: assets.ai2,
      ctaText: "Contact Us",
      ctaLink: "/contact-us",
    },
    {
      id: 3,
      title: "Professional Services for Capmarket Platforms",
      subtitle: "Improve operation flow with stable, scalable systems.",
      image: assets.ai3,
      ctaText: "Explore Now",
      ctaLink: "/contact-us",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "Capmarket White-Label Platform Deployment",
      description:
        "We offer a completely branded Capmarket white-label platform installation, through which brokers can launch their operations rapidly with full customization of the identity, safe infrastructure, and access from multiple devices.",
      icon: <FaServer className="text-4xl text-white" />,
    },
    {
      title: "Capmarket Liquidity Bridge & Data Connectivity",
      description:
        "We integrate the Capmarket liquidity bridge system that connects brokers to the best liquidity providers and thereby ensures deep liquidity, tight spreads, and prompt execution.Our team",
      icon: <FaProjectDiagram className="text-4xl text-white" />,
    },
    {
      title: "Capmarket API Integration & Trading Connectivity",
      description:
        "Brokers can use the strong Capmarket API integration to link CRMs, risk units, analytics tools, and PSPs, thus facilitating a fully automated and scalable trading ​‍​‌‍​‍‌​‍​‌‍​‍‌environment.",
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
        title="Power Your Brokerage with Capmarket Technology"
        description={[
          "Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ Technologies UK Limited offers full Capmarket trading platform solutions to forex, CFD, and multi-asset brokers who want quick execution, up-to-date infrastructure, and safe trading technology. We provide the technology that allows brokers to integrate their API with Capmarket, set up a liquidity bridge, install the backend, and connect to the worldwide network—all of which are ways by which our solutions empower brokers to grow their business with efficient ​‍​‌‍​‍‌​‍​‌‍​‍‌infrastructure.",
        ]}
        image={assets.capmarket4}
        isHidden={true}
      />
      <TopRatedCompany
        title="Understanding Capmarket and Why Brokers Prefer It"
        description={[
          "The​‍​‌‍​‍‌​‍​‌‍​‍‌ Capmarket trading platform represents the ideal option for brokers requiring a stable, scalable, and globally integrated trading ecosystem. Capmarket, which is designed for multi-asset trading, offers users fast execution, sophisticated risk systems, a high level of liquidity connectivity, as well as a set of flexible integration tools. Capyngen, being a technology partner of Capmarket, is committed to providing brokers with a fully managed configuration for every technical layer, starting from platform deployment, through global hosting to maintenance.",
        ]}
        reverse
        image={assets.capmarket5}
        isHidden={true}
      />
      <CardsSection
        heading="Core Features of Capmarket Trading Solutions"
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
    </div>
  );
};

export default Capmarket;
