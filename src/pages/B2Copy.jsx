import React from "react";
import Banner7 from "../components/Banner7";
import B2CopyIntro from "../components/B2CopyIntro";
import B2CopyFeatures from "../components/B2CopyFeatures";
import B2CopyTechnology from "../components/B2CopyTechnology";
import B2CopyWhy from "../components/B2CopyWhy";
import B2CopyFunctionalities from "../components/B2CopyFunctionalities";
import B2CopyLaunch from "../components/B2CopyLaunch";
import { assets } from "../assets/assets";
import FaqSection from "../components/FaqSection";

const B2Copy = () => {
  const faqItems = [
    {
      question: "What is B2Copy?",
      answer:
        "B2Copy allows traders to connect with their experts and automatically copy the trading actions of those super-traders in a multi-asset copy trading system.",
    },
    {
      question: "Do you provide B2Copy white-label solutions?",
      answer:
        "Yes — Capyngen delivers B2Copy white-label copy trading platforms that can be entirely branded by the customer.",
    },
    {
      question: "Can B2Copy support forex and crypto trading?",
      answer:
        "Definitely. B2Copy is an open-ended multi-market platform which means the users can trade forex, crypto, commodities, indices and CFDs.",
    },
    {
      question: "How does B2Copy replicate trades?",
      answer:
        "The B2Copy platform uses the latest technology to ensure trades from the master account are reflected in real-time on the follower accounts instantly.",
    },
    {
      question:
        "Can B2Copy integrate with our existing CRM or trading platform?",
      answer:
        "Yes — we are fully equipped with the B2Copy API that can seamlessly connect B2Copy with CRMs, PSPs, KYC tools, and trading platforms to create a one-stop environment for your customers' needs.",
    },
    {
      question: "Is B2Copy suitable for startup brokers?",
      answer:
        "Yes — B2Copy would be an ideal choice for a startup broker considering the rapid implementation time, minimal technical requirements, and ability to scale up swiftly.",
    },
    {
      question: "Do you handle hosting and infrastructure setup?",
      answer:
        "Yes — Capyngen is responsible for cloud hosting, backend deployment, routing, and server optimization.",
    },
    {
      question: "Do you offer ongoing support after the launch?",
      answer:
        "Yes — We offer 24/7 technical support, monitoring, and maintenance services to all our B2Copy customers.",
    },
  ];
  return (
    <div>
      <Banner7
        title="High-Performance Copy Trading Technology for B2Copy"
        description="Enable seamless copy trading with scalable IT infrastructure built for professional traders and global brokerages."
        ctaText="Join Now"
        ctaLink="/contact-us"
        cards={[
          {
            thumbnail: assets.b2Copy1,
            title: "Copy Trading with a Technological Edge for B2Copy",
            description:
              "Use a technological infrastructure of copy trading to make fast, reliable and efficient copies.",
          },
          {
            thumbnail: assets.b2Copy2,
            title: "B2Copy High-Speed Copy Trading",
            description:
              "Provide automated trading with the help of technology for professional traders.",
          },
          {
            thumbnail: assets.b2Copy3,
            title: "The Strength of Copy Trading Is in the Technology",
            description:
              "Make smooth signal executions by having real-time signal synchronization.",
          },
        ]}
      />

      <B2CopyIntro />
      <B2CopyFeatures />
      <B2CopyTechnology />
      <B2CopyWhy />
      <B2CopyFunctionalities />
      <B2CopyLaunch />
      <FaqSection items={faqItems} />
    </div>
  );
};

export default B2Copy;
