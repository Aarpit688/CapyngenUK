import React from "react";
import Banner9 from "../components/Banner9";
import TopRatedCompany from "../components/TopRatedCompany";
import ForexExpertise from "../components/ForexExpertise";
import ForexEmpowerment from "../components/ForexEmpowerment";
import { FaBullseye, FaChartLine, FaGlobe, FaUsersCog } from "react-icons/fa";
import ForexSolutions from "../components/ForexSolutions";
import CardsSectionImage from "../components/CardsSectionImage";
import PammConclusion from "../components/PammConclusion";
import { assets } from "../assets/assets";
import FaqSection from "../components/FaqSection";

const Pamm = () => {
  const cardsSectionImageData1 = [
    {
      title: "Rapid​‍​‌‍​‍‌​‍​‌‍​‍‌ Investor Acquisition",
      description:
        "Your platform becomes enticing to top-tier investors and experienced money managers due to the transparency and automation implemented.",
      image: assets.pamm17,
      cardBg: "bg-gray-200",
    },
    {
      title: "Additional Revenue Streams",
      description:
        "You can profit from fees, investor deposits, and performance-based income as well as trading volumes.",
      image: assets.pamm18,
      cardBg: "bg-gray-200",
    },
    {
      title: "Decreased Operational Workload",
      description:
        "Capyngen’s solution is equipped to manage everything from allocations to reporting, thereby substantially lessening the manual tasks on your side.",
      image: assets.pamm19,
      cardBg: "bg-gray-200",
    },
    {
      title: "Expandable Trading Infrastructure",
      description:
        "Designed to maintain the same level of performance with a number of investors ranging from 100 to over 100,000.",
      image: assets.pamm20,
      cardBg: "bg-gray-200",
    },
    {
      title: "Totally White Label",
      description:
        "Capyngen Technologies UK Limited is fully customizable in terms of branding for websites, platforms, and‍ ‍ ‌‍​‍‌​‍​‌‍​‍‌dashboards.",
      image: assets.cTrader8,
      cardBg: "bg-gray-200",
    },
  ];
  const faqItems = [
    {
      question: "Does Capyngen provide a fully white-label PAMM system?",
      answer:
        "Indeed, brokers are allowed to brand the platform with their identity - logo, colors, UI, and custom dashboards.",
    },
    {
      question: "Does the PAMM platform support MT4 and MT5?",
      answer:
        "Certainly. Capyngen Technologies UK Limited provides depth, and low-latency integration with MT4/MT5 and other trading engines.",
    },
    {
      question: "How long does deployment take?",
      answer:
        "Normally, the deployment is done within 24-48 hours, which is largely dependent on the integrations.",
    },
    {
      question: "Can large brokers scale with this PAMM system?",
      answer:
        "Definitely, our setup is capable of handling tens of thousands of investors without any performance issues.",
    },
    {
      question: "Does Capyngen offer PAMM customization?",
      answer:
        "Yes, aspects like allocation logic, UI design, and fee modules - can all be customized.",
    },
    {
      question: "Is the data secure?",
      answer:
        "This is a PAMM platform with bank-grade security, redundancy architecture, encrypted APIs, and continuous monitoring.",
    },
    {
      question: "Can it integrate with my CRM?",
      answer:
        "Certainly, our PAMM API is compatible with CRM, mobile apps, back-office systems, and other platforms.",
    },
  ];

  return (
    <div>
      <Banner9
        title="Reliable PAMM Technology Solutions for Investment Brokers"
        subheading="Empower asset managers and investors with a stable, automated PAMM system crafted for accuracy and transparency."
        ctaText="Contact Us"
        ctaLink="/contact-us"
        images={[
          [assets.pamm1, assets.pamm2],
          [assets.pamm3, assets.pamm4],
          [assets.pamm5, assets.pamm6],
        ]}
        topGlowColor="cyan-500/20"
        bottomGlowColor="pink-600/20"
        radialGlowColor="blue-500/10"
      />

      <TopRatedCompany
        title="PAMM Technology Engine Built by Capyngen Technologies UK Limited"
        description={[
          "Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ Technologies UK Limited offers PAMM Trading Technology Solutions tailored to technologically advanced brokerages that require automation, reliability, and a structure for institutional investment.",
          "We cover the entire cycle of a PAMM fund system with the broker's interface as the hub -- investor allocations, master account executions, risk distribution, and real-time reporting, in fact, the whole set of tools that brokers need for a high-performance PAMM investment ​‍​‌‍​‍‌​‍​‌‍​‍‌environment.",
        ]}
        isHidden={true}
      />
      <ForexExpertise
        title="Why Brokers Choose Our PAMM System"
        subtitle=""
        outroText=""
        ctaText="Work With Us"
        ctaLink="/contact"
        expertise={[
          {
            title: "Advanced​‍​‌‍​‍‌​‍​‌‍​‍‌ Allocation & Risk Automation",
            img: assets.pamm08,
            desc: "Capyngen’s highly efficient allocation engine is the main reason for accurate, real-time distribution of trades, risks, profits, and fees — even under extreme market volatility.",
          },
          {
            title: "Total Transparency for Investors",
            img: assets.pamm09,
            desc: "Offer, real-time dashboards giving absolute visibility to trading performance, open positions, risk curves, and reporting.",
          },
          {
            title: "Plug-and-Play Broker Integration",
            img: assets.pamm10,
            desc: "Capyngen Technologies UK Limited is the major reason for integration without any issues with trading platforms, CRMs, liquidity bridges, and back-office tools.",
          },
          {
            title: "Modular & Customizable Architecture",
            img: assets.pamm11,
            desc: "It is your decision to either have the PAMM modules that are ready for deployment or the fully customized configurations of the ​‍​‌‍​‍‌​‍​‌‍​‍‌enterprise.",
          },
        ]}
      />
      <ForexSolutions
        heading="Core Features of the PAMM Platform"
        subheading=""
        outro=""
        sectionBg="bg-gradient-to-b from-black via-gray-900 to-black"
        solutions={[
          {
            imgSrc: assets.pamm12,
            alt: "Advanced Allocation Engine",
            title: "Advanced Allocation Engine",
            desc: "Enables usage of different allocation methods like proportional, lot-based, equity-based, ratio-based, and broker-specific allocations.",
          },
          {
            imgSrc: assets.pamm13,
            alt: "MT4/MT5/CTrader/VertexFX Integration",
            title: "MT4/MT5/CTrader/VertexFX Integration",
            desc: "We have implemented the technology that allows the synchronization of master and investor trades along with the distribution of trades at ultra-low latency.",
          },
          {
            imgSrc: assets.pamm14,
            alt: "Investor & Master Dashboards",
            title: "Investor & Master Dashboards",
            desc: "Capyngen offers sleek and powerful user interfaces that are designed for the ease, openness, and instantaneous tracking.",
          },
          {
            imgSrc: assets.pamm15,
            alt: "Multi-Asset Support",
            title: "Multi-Asset Support",
            desc: "Forex, Crypto, Metals, Indices, Commodities, Synthetic Assets, and many others.",
          },
          {
            imgSrc: assets.pamm16,
            alt: "Real-Time Performance Analytics",
            title: "Real-Time Performance Analytics",
            desc: "Briefs of the day, equity charts, risk curves, sharpe ratio, profit tables, and deep strategy insights.",
          },
        ]}
      />
      <CardsSectionImage
        heading="Broker Benefits — What You Gain"
        subheading=""
        services={cardsSectionImageData1}
        sectionBg="bg-gray-800"
        headColor="text-white"
        cardBg=""
        textSize="text-md"
        footer=""
        hoverBg="hover:bg-gray-200"
      />
      <PammConclusion />
      <FaqSection items={faqItems} />
    </div>
  );
};

export default Pamm;
