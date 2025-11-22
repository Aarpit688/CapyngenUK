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
import FaqSection from "../components/FaqSection";

const Mam = () => {
  const faqItems = [
    {
      question: "What is the role of a MAM platform?",
      answer:
        "A MAM platform is a system that can copy the master account operations to different client accounts in real-time.",
    },
    {
      question: "Is there any facility for your MAM white-label deployment?",
      answer:
        "Certainly, Capyngen is able to offer full white-label MAM solutions to brokers worldwide.",
    },
    {
      question: "Is MAM working with liquidity providers?",
      answer:
        "Indeed, MAM is coupled with a liquidity bridge to achieve a seamless execution and to have a deep liquidity pool.",
    },
    {
      question: "Can MAM be used for multi-asset trading?",
      answer:
        "Yes, the brokers can open trading in forex, CFDs, metals, indices, crypto, and commodities.",
    },
    {
      question: "Are you in charge of backend hosting?",
      answer:
        "We are, indeed, managing the servers, the execution systems, the databases, and the routing layers.",
    },
    {
      question: "Is MAM able to link with CRMs and PSPs?",
      answer: "Yes, it supports full API connectivity.",
    },
    {
      question: "Can MAM be a good choice for new brokers?",
      answer:
        "Yes, a startup can be able to launch in no time and there won't be a large amount of setup costs.",
    },
    {
      question:
        "Is there any provision from your side for 24/7 monitoring and updates?",
      answer:
        "Indeed, our crew is always there providing maintenance and performance improvement.",
    },
  ];
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
      <Banner10
        backgroundImage={assets.mam1}
        heading="Institutional MAM Technology for Professional Money Managers"
        subheading="Achieve advanced trade allocation and multi-account management through our robust MAM technology solutions."
        parallaxImages={[
          {
            src: assets.mam2,
            alt: "Rocket launch",
            start: -200,
            end: 200,
            className: "w-1/3",
          },
          {
            src: assets.mam3,
            alt: "Space shuttle",
            start: 200,
            end: -250,
            className: "mx-auto w-2/3",
          },
          {
            src: assets.mam4,
            alt: "Satellite orbit",
            start: -200,
            end: 200,
            className: "ml-auto w-1/3",
          },
          {
            src: assets.mam5,
            alt: "Rocket detail",
            start: 0,
            end: -500,
            className: "ml-24 w-5/12",
          },
        ]}
      />
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
      <FaqSection items={faqItems} />
    </div>
  );
};

export default Mam;
