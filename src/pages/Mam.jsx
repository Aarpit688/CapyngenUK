import React from "react";
import { Banner10 } from "../components/Banner10";
import TopRatedCompany from "../components/TopRatedCompany";
import CardsSection from "../components/CardsSection";
import {
  FaCode,
  FaCodeBranch,
  FaProjectDiagram,
  FaServer,
  FaShoppingCart,
  FaWordpressSimple,
} from "react-icons/fa";
import MAMStackBuild from "../components/MAMStackBuild";
import IndustryServices from "../components/IndustryServices";
import MAMUseCases from "../components/MAMUseCases";
import MAMCapabilities from "../components/MAMCapabilities";
import MAMInfrastructure from "../components/MAMInfrastructure";
import { assets } from "../assets/assets";

const Mam = () => {
  const cardsSectionData1 = [
    {
      title: "Branded MAM White-Label Deployment",
      description:
        "We offer a full MAM white-label configuration with customer branding, privacy hosting, and various device support.",
      icon: <FaServer className="text-4xl text-white" />,
    },
    {
      title: "Liquidity Bridge & Trade Allocation Integration",
      description:
        "By linking your liquidity bridge to MAM, our technology enables you to have the deepest liquidity, the quickest execution, and the most accurate allocation.",
      icon: <FaProjectDiagram className="text-4xl text-white" />,
    },
    {
      title: "API-Based Automation & System Integration",
      description:
        "MAM API is a tool that brokers can use to establish a connection between CRMs, analytics, and other risk and compliance systems to achieve a fully automated workflow.",
      icon: <FaCodeBranch className="text-4xl text-white" />,
    },
  ];
  const servicesData = [
    {
      image: assets.mam09,
      title: "A​‍​‌‍​‍‌​‍​‌‍​‍‌ network with minimal delay on a global scale",
      desc: "Perfectly designed for instant allocation",
    },
    {
      image: assets.mam10,
      title: "Various allocation methods",
      desc: "Proportional, percentage, equity, lot-based & custom",
    },
    {
      image: assets.mam11,
      title: "Effortless API integration",
      desc: "Connect CRMs, PSPs, compliance systems and analytics",
    },
  ];

  return (
    <div>
      <Banner10 />
      <TopRatedCompany
        title="Transform Your Brokerage with Multi-Account Management Technology"
        description={[
          "Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ Technologies UK Limited is a one-stop MAM platform provider of infrastructure to forex, CFD, and multi-asset brokers that are in need of quick allocation, a reliable architecture, and worldwide performance.",
          "We provide an MAM allocation technology solution that can be API-driven, by allocation engines, liquidity bridges, or backend systems thus giving a trading infrastructure that is safe, efficient, and exactly optimized to the broker's needs.",
        ]}
        image={assets.mam06}
        isHidden={true}
      />
      <TopRatedCompany
        title="What Makes the MAM System Essential for Brokers"
        description={[
          "A​‍​‌‍​‍‌​‍​‌‍​‍‌ MAM (Multi-Account Manager) platform basically means managing multiple client accounts which are under a single master account with instant trade replication. Capyngen is keeping a very stable, compliant, and scalable environment for multi-asset execution, which is supported by high-speed allocation and global infrastructure. The MAM engine is delivering very fast trade distribution, different methods of allocation, and effortless connection with liquidity providers, MT4/MT5, Capmarket, and other trading solutions. By utilizing its robust APIs, brokers have the freedom to link up CRMs, reporting systems, risk units, PSPs, and other fintech solutions without a ​‍​‌‍​‍‌​‍​‌‍​‍‌hitch.",
        ]}
        image={assets.mam07}
        reverse
        isHidden={true}
      />
      <CardsSection
        heading="Core MAM System Features for Brokers"
        subheading={""}
        services={cardsSectionData1}
        sectionBg="bg-[#001410]"
        cardBg="bg-gradient-to-b from-[#00382C]/90 to-[#005A49]/90 hover:from-[#006A58] hover:to-[#00856F] shadow-lg shadow-emerald-900/40 hover:shadow-emerald-700/50"
        headColor="text-emerald-300 mb-10"
        textColor="text-gray-200"
        textSize="text-[15px]"
        footerNote=""
      />
      <MAMStackBuild />
      <TopRatedCompany
        title="Why Brokers Rely on Our MAM Ecosystem"
        description={[
          "The​‍​‌‍​‍‌​‍​‌‍​‍‌ MAM framework is designed to perform quickly, maintain stability during operations, and be scalable worldwide. Through additional powerful allocation options, a secure infrastructure, and reliable routing technology brokers benefit.",
          "As a result, MAM offers accurate execution, multi-layer control, and flexible allocation that is perfect for portfolio managers and large-volume brokerages, which is far beyond basic copy-trading tools.",
        ]}
        image={assets.mam08}
        isHidden={true}
      />
      <IndustryServices
        heading="Advantages of Using a Professional MAM Platform"
        subheading=""
        cardBg="bg-gray-700"
        cardText="text-white"
        footer="By leveraging these capabilities, brokers can expand their business worldwide while maintaining complete operational ​‍​‌‍​‍‌​‍​‌‍​‍‌control."
        cardDescText="text-white"
        services={servicesData}
      />
      <MAMUseCases />
      <MAMCapabilities />
      <MAMInfrastructure />
    </div>
  );
};

export default Mam;
