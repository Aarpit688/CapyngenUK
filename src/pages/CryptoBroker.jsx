import React from "react";
import Banner3 from "../components/Banner3";
import GetStarted from "../components/GetStarted";
import ForexConclusion from "../components/ForexConclusion";
import ForexSolutions from "../components/ForexSolutions";
import IndustryServices from "../components/IndustryServices";
import CryptoExpertise from "../components/CryptoExpertise";
import BrokerSolutions from "../components/BrokerSolutions";
import {
  FaCogs,
  FaExchangeAlt,
  FaLaptopCode,
  FaUsersCog,
} from "react-icons/fa";
import BenefitsSection from "../components/BenefitsSection";
import WhyCapyngenSection from "../components/WhyCapyngenSection";
import ConclusionSection from "../components/ConclusionSection";

const CryptoBroker = () => {
  const servicesData = [
    {
      image: "https://picsum.photos/id/1082/600/400",
      title: "Scalable Technology",
      desc: "Platforms, which can extend their features and capabilities to accommodate your client base and trade volume growth.",
    },
    {
      image: "https://picsum.photos/id/1082/600/400",
      title: "Top-Tier Security",
      desc: "A system, which incorporates encryption, secure servers, and a compliance-focused infrastructure.",
    },
    {
      image: "https://picsum.photos/id/1082/600/400",
      title: "Global Market Ready",
      desc: "Products that are created for international brokers and clients.",
    },
    {
      image: "https://picsum.photos/id/1082/600/400",
      title: "Intuitive User Experience",
      desc: "Broker and trader friendly interfaces, which are simple to use.",
    },
    {
      image: "https://picsum.photos/id/1082/600/400",
      title: "Seamless Integration",
      desc: "Enable your trading platform, CRM, analytics, and marketing tools to connect with each other.",
    },
    {
      image: "https://picsum.photos/id/1082/600/400",
      title: "Performance Analytics",
      desc: "Track platform performance, user behavior, and conversion metrics to optimize growth.",
    },
  ];
  return (
    <div>
      <Banner3
        title="Complete Technology Stack for Crypto Brokerage Businesses"
        description="Offer seamless crypto trading experiences with our powerful IT solutions designed to support liquidity, automation, and multi-asset trading."
        primaryCtaText="Start Now"
        primaryCtaLink="/contact-us"
        secondaryCtaText="View Demo"
        secondaryCtaLink="/contact-us"
        desktopBgImage="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/background.png"
        mobileBgImage="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/bg.png"
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        title="Grow Your Crypto Brokerage with Easy IT Solutions"
        description={[
          "Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ Technologies UK Limited is a provider of easy-to-use, secure, and fully featured crypto broker IT solutions. As a one-stop-shop for custom trading platforms, CRM, and apps, we enable brokers to carry out operations efficiently, attract clients, and expand globally. If you are going to start a new brokerage or simply give a facelift to the old one, our solutions are designed to be with you ​‍​‌‍​‍‌​‍​‌‍​‍‌continually.",
        ]}
        buttonText="Contact Us"
        image="https://picsum.photos/id/1064/600/400"
      />
      <ForexConclusion
        heading="Understanding Crypto Brokers and How We Help"
        paragraphs={[
          "A​‍​‌‍​‍‌​‍​‌‍​‍‌ crypto  brokerage is a service that enables users to purchase, sell, and exchange digital currencies. Though it might be a direct activity, a crypto brokerage entails more than just executing the trades. Brokers need to oversee customer accounts, conform to the rules, keep their systems secure, and offer a convenient trading experience.",
          "We at Capyngen Technologies deliver a full range of crypto broker technology solutions that simplify the challenges. Our talented staff creates tailored cryptocurrency broker platform solutions that match your business requirements, implements the client management system software to manage customers effectively, and installs the trading platform, which is the fastest, most reliable, and automated.",
          "Moreover, we offer digital marketing services to support brokers in customer acquisition and retention worldwide. With the help of technology, security, and tactical assistance, we let brokers run their businesses smoothly and make them ​‍​‌‍​‍‌​‍​‌‍​‍‌scalable.",
        ]}
      />
      <ForexSolutions
        heading="Complete and Easy-to-Use Crypto Broker Solutions"
        subheading="We​‍​‌‍​‍‌​‍​‌‍​‍‌ have created our solutions to facilitate crypto brokerage management to be a simple task. We offer the following:"
        outro="By having these instruments at your disposal, Capyngen turns into your reliable technology partner who is always there when you need to keep your brokerage competitive and ​‍​‌‍​‍‌​‍​‌‍​‍‌efficient."
        sectionBg="bg-gradient-to-b from-black via-gray-900 to-black"
        solutions={[
          {
            imgSrc: "https://picsum.photos/id/1064/600/400",
            alt: "Trading Platforms",
            title: "Trading Platforms",
            desc: "Secure, fast, and user-friendly with advanced analytics",
          },
          {
            imgSrc: "https://picsum.photos/id/1048/600/400",
            alt: "CRM Software",
            title: "CRM Software",
            desc: "Track leads, clients, and campaigns all from a single place",
          },
          {
            imgSrc: "https://picsum.photos/id/1059/600/400",
            alt: "Website & App Development",
            title: "Website & App Development",
            desc: "Great user experience both for desktop and mobile",
          },
          {
            imgSrc: "https://picsum.photos/id/1075/600/400",
            alt: "Payment Gateway Integration",
            title: "Payment Gateway Integration",
            desc: "Extremely fast, secure, and reliable deposits and withdrawals",
          },
          {
            imgSrc: "https://picsum.photos/id/1082/600/400",
            alt: "Back-Office Tools",
            title: "Back-Office Tools",
            desc: "Easy-to-understand reporting, compliance, and operational management",
          },
        ]}
      />
      <IndustryServices
        heading="Why Choose Capyngen  or Crypto Broker IT Solutions"
        subheading="By​‍​‌‍​‍‌​‍​‌‍​‍‌ selecting Capyngen, your brokerage will be able to enjoy multiple benefits such as:"
        cardBg="bg-gray-700"
        cardText="text-white"
        footer="Our innovations serve as a guarantee that your brokerage will be able to function in a stable, secure, and efficient manner, even in a fiercely competitive ​‍​‌‍​‍‌​‍​‌‍​‍‌market."
        cardDescText="text-white"
        services={servicesData}
      />
      <BrokerSolutions />
      <BenefitsSection />
      <WhyCapyngenSection />
      <ConclusionSection />
    </div>
  );
};

export default CryptoBroker;
