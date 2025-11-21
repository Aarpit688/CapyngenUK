import React from "react";
import Banner2 from "../components/Banner2";
import CardsSection from "../components/CardsSection";
import {
  FaChartLine,
  FaCode,
  FaCogs,
  FaCubes,
  FaExchangeAlt,
  FaLaptopCode,
  FaLaravel,
  FaReact,
  FaShoppingCart,
  FaUserCog,
  FaUsersCog,
  FaWordpressSimple,
} from "react-icons/fa";
import ForexSolutions from "../components/ForexSolutions";
import CryptoExpertise from "../components/CryptoExpertise";
import TopRatedCompany from "../components/TopRatedCompany";
import { Link } from "react-router-dom";
import CardsSectionImage from "../components/CardsSectionImage";
import IndustryServices from "../components/IndustryServices";
import GetStarted from "../components/GetStarted";
import { assets } from "../assets/assets";

const CryptoExchange = () => {
  const cardsSectionData1 = [
    {
      title:
        "Open a Custom Cryptocurrency Exchange Platform that is aligned with the business goals",
      description: "",
      icon: <FaExchangeAlt className="text-4xl text-white" />,
    },
    {
      title:
        "Deploy a Crypto Exchange CRM System for smooth client and campaign management",
      description: "",
      icon: <FaUserCog className="text-4xl text-white" />,
    },
    {
      title:
        "Install Crypto Trading Platforms having the features like real-time analytics and automated trading",
      description: "",
      icon: <FaChartLine className="text-4xl text-white" />,
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Complete Crypto Exchange Broker Setup",
      description: "Your trading platform to CRM all in one solution",
      image: assets.cryptoExchange7,
      cardBg: "bg-gray-200",
    },
    {
      title: "Digital Marketing Integration",
      description: "Effectively promote your exchange to a global audience",
      image: assets.cryptoExchange8,
      cardBg: "bg-gray-200",
    },
    {
      title: "Custom Platform Development",
      description: "Precisely to fit your business model",
      image: assets.cryptoExchange9,
      cardBg: "bg-gray-200",
    },
    {
      title: "Security & Compliance",
      description: "Following international regulatory standards",
      image: assets.cryptoExchange10,
      cardBg: "bg-gray-200",
    },
    {
      title: "Client Engagement Improvement",
      description: "Simplified CRM for customer retention and loyalty",
      image: assets.cryptoExchange11,
      cardBg: "bg-gray-200",
    },
  ];
  const servicesData = [
    {
      image: "https://picsum.photos/id/1064/600/400",
      title: "Search Engine Optimization (SEO)",
      desc: "Make your website be ranked at the top of Google.",
    },
    {
      image: "https://picsum.photos/id/1064/600/400",
      title: "Social Media Integration",
      desc: "Get more customers and advertising your products directly on Instagram, Facebook, and LinkedIn.",
    },
    {
      image: "https://picsum.photos/id/1064/600/400",
      title: "Email & SMS Campaigns",
      desc: "Revive relationships with customers and stimulate repeat purchases.",
    },
    {
      image: "https://picsum.photos/id/1064/600/400",
      title: "Content Marketing",
      desc: "Gain the trust of visitors and attract the traffic with helpful content.",
    },
    {
      image: "https://picsum.photos/id/1064/600/400",
      title: "Paid Advertising (PPC)",
      desc: "Get targeted traffic to your online shop right away.",
    },
    {
      image: "https://picsum.photos/id/1064/600/400",
      title: "Analytics & Conversion Tracking",
      desc: "Evaluate the results and evolve effectively.",
    },
  ];

  return (
    <div>
      <Banner2
        title="Next-Gen Technology Infrastructure for Crypto Exchanges"
        subtitle="From matching engines to multi-layer security, Capyngen builds high-performance digital asset exchange systems for global market operations."
        buttonText="Explore Now"
        buttonLink="/contact-us"
        image="https://d33wubrfki0l68.cloudfront.net/54780decfb9574945bc873b582cdc6156144a2ba/d9fa1/images/hero/4/illustration.png"
      />
      <CardsSection
        heading="Understanding Crypto Exchanges: What They Are and Why They Matter"
        subheading={
          <>
            A​‍​‌‍​‍‌​‍​‌‍​‍‌ crypto exchange broker is a platform that allows
            traders and investors to buy, sell, and trade cryptocurrencies. In
            fact, a successful exchange today is not only about facilitating
            trades, but it also requires advanced technology, a secure
            infrastructure, customer management tools, and compliance with
            regulations. <br />
            <br />
            We at Capyngen Technologies, assist brokers to:
          </>
        }
        services={cardsSectionData1}
        sectionBg="bg-black"
        cardBg="bg-gradient-to-b from-[#000]/90 to-[#0010A2]/90 hover:bg-gradient-to-t transition-all ease-in-out shadow-xl shadow-gray-700/50 hover:shadow-2xl hover:shadow-gray-700/70"
        headColor="text-white"
        hoverBg=" hover:bg-gray-700"
        textColor="text-white"
        textSize="text-md"
        footerNote="Use the Digital Marketing Solutions for Crypto Exchanges to access the global market and increase their client ​‍​‌‍​‍‌​‍​‌‍​‍‌base"
      />
      <ForexSolutions
        heading="Comprehensive Solutions for Every Crypto Exchange Need"
        subheading="We​‍​‌‍​‍‌​‍​‌‍​‍‌ have a complete spectrum of crypto exchange technology solutions that are meticulously crafted to address every single aspect of your brokerage-operation:"
        outro="By Capyngen offering all these services, it stands out as a top crypto brokerage technology provider both for startups and established ​‍​‌‍​‍‌​‍​‌‍​‍‌brokers."
        sectionBg="bg-gradient-to-br from-[#020617] via-[#0b0f29] to-[#111827]"
        cardBg="bg-gradient-to-b from-[#0a1a3c]/90 via-[#0f1f43]/80 to-[#0a1229]/90"
        cardBorder="border-[#1e3a8a]/40"
        titleColor="text-white"
        textColor="text-[#cbd5e1]"
        imageBg="bg-[#0f172a]"
        cardHoverShadow="hover:shadow-[0_0_25px_-5px_rgba(56,189,248,0.5)]"
        hoverTranslate="hover:-translate-y-3"
        solutions={[
          {
            imgSrc: assets.cryptoExchange2,
            alt: "Trading Platforms",
            title: "Next-Gen Trading Platforms",
            desc: "Extremely fast, secure, and feature-packed platforms alongside advanced analytics.",
          },
          {
            imgSrc: assets.cryptoExchange3,
            alt: "CRM Software Solutions",
            title: "Client Relationship Management (CRM) Software",
            desc: "Workflow automation, lead tracking, and customer retention enhancement.",
          },
          {
            imgSrc: assets.cryptoExchange4,
            alt: "Website & App Development",
            title: "Website & App Development",
            desc: "Perfectly responsive, user-friendly interface designs for delivering excellent user experience.",
          },
          {
            imgSrc: assets.cryptoExchange5,
            alt: "Payment Gateway Integration",
            title: "Payment Gateway Integration",
            desc: "Deposit/withdrawal operations designed to be safe and smooth.",
          },
          {
            imgSrc: assets.cryptoExchange6,
            alt: "Back-Office Solutions",
            title: "Operational & Back-Office Tools",
            desc: "Simplified reporting, compliance, and management.",
          },
        ]}
      />
      <TopRatedCompany
        title="Why Capyngen Stands Out in Crypto Exchange IT Solutions"
        description={[
          <span>
            It's​‍​‌‍​‍‌​‍​‌‍​‍‌ very important to select the most suitable
            technology partner for the job. The benefits that your trading gets
            from Capyngen are:
          </span>,
          <>
            <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto my-8 text-gray-300">
              {[
                {
                  title: "Technology that is both Scalable and Flexible",
                  text: "The technology is able to handle a large number of users and a high volume of trades without any problems",
                  color: "text-blue-500",
                },
                {
                  title: "First-Class Security",
                  text: "Encryption, secure servers, and architectures that are designed with compliance in mind",
                  color: "text-blue-500",
                },
                {
                  title: "Preparedness for the Global Market",
                  text: "The product is created considering international clients and regulatory standards.",
                  color: "text-blue-500",
                },
                {
                  title: "Friendly User Interface",
                  text: "User-friendly interfaces for both brokers and traders",
                  color: "text-blue-500",
                },
                {
                  title: "Easy Integrations",
                  text: "Link trading platforms with CRMs, analytics tools, and marketing systems",
                  color: "text-blue-500",
                },
              ].map(({ title, text, color }, idx) => (
                <li
                  key={idx}
                  className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
                >
                  <strong className={`${color} drop-shadow-md`}>
                    {title} -
                  </strong>{" "}
                  {text}
                </li>
              ))}
            </ul>
            <p>
              Regardless of whether you require crypto exchange IT solutions or
              a full crypto exchange broker setup solution, Capyngen is the one
              that guarantees your platform to be dependable, compliant, and
              safeguarded against the ​‍​‌‍​‍‌​‍​‌‍​‍‌future.
            </p>
          </>,
        ]}
        isHidden={true}
      />
      <CryptoExpertise
        heading="Our Expertise: Building Crypto Exchanges That Win"
        subheading="At​‍​‌‍​‍‌​‍​‌‍​‍‌ Capyngen Technologies UK Limited, we bring together technical brilliance and business understanding to create impactful solutions. Our skill set spans:"
        outro="Our service is beyond just technology delivery; we provide the power to exchanges to grow worldwide, make a stronghold in the market, and be a step ahead of their ​‍​‌‍​‍‌​‍​‌‍​‍‌competitors."
        cards={[
          {
            icon: <FaExchangeAlt />,
            title: "Creating a custom Cryptocurrency Exchange Platform",
            desc: "We build complete exchange systems engineered for scalability and security.",
          },
          {
            icon: <FaCogs />,
            title:
              "Complete Crypto Exchange Software Solutions for both startups and enterprises",
            desc: "Perfect for startups and established global exchanges.",
          },
          {
            icon: <FaLaptopCode />,
            title:
              "Development of Websites and Apps to facilitate user-friendly trading experiences",
            desc: "Beautiful, fast and intuitive UI/UX for traders & brokers.",
          },
          {
            icon: <FaUsersCog />,
            title:
              "Implementation of CRM software for the Crypto Exchange to ensure excellent client management",
            desc: "Manage leads, clients & automation workflows easily.",
          },
        ]}
      />
      <CardsSectionImage
        heading="Unlocking the Benefits of Capyngen’s Crypto Exchange Solutions"
        subheading="Your​‍​‌‍​‍‌​‍​‌‍​‍‌ crypto brokerage will have real benefits if you partner with us:"
        services={cardsSectionImageData1}
        sectionBg="bg-gray-800"
        headColor="text-white"
        cardBg=""
        textSize="text-md"
        footer="By using Capyngen, your exchange will be technologically superior, operationally efficient, and competitive in the ​‍​‌‍​‍‌​‍​‌‍​‍‌market."
        hoverBg="hover:bg-gray-200"
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        title="Conclusion: Build a Global-Ready Crypto Exchange with Capyngen"
        description={[
          "Starting​‍​‌‍​‍‌​‍​‌‍​‍‌ a crypto exchange might be complicated, but it gets effortless with Capyngen Technologies UK Limited. Our services cover the entire range of the crypto exchange broker installation, from platforms, CRM, mobile apps, to back-office management and even marketing strategies.",
          "Be our partner in achieving your crypto exchange dream to go live with a safe, expandable, and internationally competitive ​‍​‌‍​‍‌​‍​‌‍​‍‌platform.",
        ]}
        buttonText="Contact Us"
        image={assets.cryptoExchange12}
      />
    </div>
  );
};

export default CryptoExchange;
