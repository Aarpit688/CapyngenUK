import React from "react";
import Banner9 from "../components/Banner9";
import TopRatedCompany from "../components/TopRatedCompany";
import ForexExpertise from "../components/ForexExpertise";
import ForexEmpowerment from "../components/ForexEmpowerment";
import { FaBullseye, FaChartLine, FaGlobe, FaUsersCog } from "react-icons/fa";
import ForexSolutions from "../components/ForexSolutions";
import CardsSectionImage from "../components/CardsSectionImage";
import PammConclusion from "../components/PammConclusion";

const Pamm = () => {
  const cardsSectionImageData1 = [
    {
      title: "Rapid​‍​‌‍​‍‌​‍​‌‍​‍‌ Investor Acquisition",
      description:
        "Your platform becomes enticing to top-tier investors and experienced money managers due to the transparency and automation implemented.",
      image: "https://picsum.photos/id/1064/600/400",
      cardBg: "bg-gray-200",
    },
    {
      title: "Additional Revenue Streams",
      description:
        "You can profit from fees, investor deposits, and performance-based income as well as trading volumes.",
      image: "https://picsum.photos/id/1064/600/400",
      cardBg: "bg-gray-200",
    },
    {
      title: "Decreased Operational Workload",
      description:
        "Capyngen’s solution is equipped to manage everything from allocations to reporting, thereby substantially lessening the manual tasks on your side.",
      image: "https://picsum.photos/id/1064/600/400",
      cardBg: "bg-gray-200",
    },
    {
      title: "Expandable Trading Infrastructure",
      description:
        "Designed to maintain the same level of performance with a number of investors ranging from 100 to over 100,000.",
      image: "https://picsum.photos/id/1064/600/400",
      cardBg: "bg-gray-200",
    },
    {
      title: "Totally White Label",
      description:
        "Capyngen Technologies UK Limited is fully customizable in terms of branding for websites, platforms, and‍ ‍ ‌‍​‍‌​‍​‌‍​‍‌dashboards.",
      image: "https://picsum.photos/id/1064/600/400",
      cardBg: "bg-gray-200",
    },
  ];

  return (
    <div>
      <Banner9
        title="Reliable PAMM Technology Solutions for Investment Brokers"
        subheading="Empower asset managers and investors with a stable, automated PAMM system crafted for accuracy and transparency."
        ctaText="Hire Talent"
        ctaLink="/contact-us"
        images={[
          [
            "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=500&q=80",
          ],
          [
            "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=500&q=80",
          ],
          [
            "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=500&q=80",
          ],
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
            img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
            desc: "Capyngen’s highly efficient allocation engine is the main reason for accurate, real-time distribution of trades, risks, profits, and fees — even under extreme market volatility.",
          },
          {
            title: "Total Transparency for Investors",
            img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
            desc: "Offer, real-time dashboards giving absolute visibility to trading performance, open positions, risk curves, and reporting.",
          },
          {
            title: "Plug-and-Play Broker Integration",
            img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
            desc: "Capyngen Technologies UK Limited is the major reason for integration without any issues with trading platforms, CRMs, liquidity bridges, and back-office tools.",
          },
          {
            title: "Modular & Customizable Architecture",
            img: "https://images.unsplash.com/photo-1526401281623-3526c67d8e2f?auto=format&fit=crop&w=1200&q=80",
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
            imgSrc: "https://picsum.photos/id/1064/600/400",
            alt: "Advanced Allocation Engine",
            title: "Advanced Allocation Engine",
            desc: "Enables usage of different allocation methods like proportional, lot-based, equity-based, ratio-based, and broker-specific allocations.",
          },
          {
            imgSrc: "https://picsum.photos/id/1048/600/400",
            alt: "MT4/MT5/CTrader/VertexFX Integration",
            title: "MT4/MT5/CTrader/VertexFX Integration",
            desc: "We have implemented the technology that allows the synchronization of master and investor trades along with the distribution of trades at ultra-low latency.",
          },
          {
            imgSrc: "https://picsum.photos/id/1059/600/400",
            alt: "Investor & Master Dashboards",
            title: "Investor & Master Dashboards",
            desc: "Capyngen offers sleek and powerful user interfaces that are designed for the ease, openness, and instantaneous tracking.",
          },
          {
            imgSrc: "https://picsum.photos/id/1075/600/400",
            alt: "Multi-Asset Support",
            title: "Multi-Asset Support",
            desc: "Forex, Crypto, Metals, Indices, Commodities, Synthetic Assets, and many others.",
          },
          {
            imgSrc: "https://picsum.photos/id/1082/600/400",
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
    </div>
  );
};

export default Pamm;
