import React from "react";
import PrimeXMServiceIntro from "../components/PrimeXMServiceIntro";
import Banner8 from "../components/Banner8";
import PrimeXMXServiceUnderstanding from "../components/PrimeXMServiceUnderstanding";
import PrimeXMServiceFeatures from "../components/PrimeXMServiceFeatures";
import PrimeXMServiceInfrastructure from "../components/PrimeXMServiceInfrastructure";
import PrimeXMServiceTechnology from "../components/PrimeXMServiceTechnology";
import PrimeXMServiceSolutions from "../components/PrimeXMServiceSolutions";
import PrimeXMServiceBenefits from "../components/PrimeXMServiceBenefits";
import PrimeXMServiceAdditionalFeatures from "../components/PrimeXMServiceAdditionalFeatures";
import PrimeXMServiceConclusion from "../components/PrimeXMServiceConclusion";
import { assets } from "../assets/assets";
import FaqSection from "../components/FaqSection";

const PrimeXMService = () => {
  const faqItems = [
    {
      question: "What is PrimeXM X-Core technology?",
      answer:
        "PrimeXM X-Core represents an advanced trading infrastructure in the market that allows a broker to have access to aggregated liquidity, achieve ultra-low latency execution and have a strong data flow.",
    },
    {
      question:
        "Can Capyngen integrate PrimeXM X-Core for both forex and crypto brokers?",
      answer:
        "Definitely, we can provide a complete set up of connectivity and liquidity network for trading platforms dealing in forex and crypto equally.",
    },
    {
      question: "What are the service parts of PrimeXM X-Core?",
      answer:
        "Those parts are the steps of setting the infrastructure, the technology of liquidity aggregation, connectivity of data, the system with ultra-low latency, and the integration with the trading platforms.",
    },
    {
      question: "Are your solutions suitable for startup brokers?",
      answer:
        "Certainly, our PrimeXM X-Core solutions at Capyngen are not only scalable but also instantly deployable for startups to facilitate their quick market entry.",
    },
    {
      question: "How secure and reliable is PrimeXM X-Core technology?",
      answer:
        "The security of PrimeXM X-Core is at the level of institutional-grade performance which is attained with the use of secure servers, low-latency connectivity, and continuous monitoring.",
    },
    {
      question: "Can PrimeXM X-Core handle high-volume trading?",
      answer:
        "Correct, in fact, it is set up for ultra-high-volume trading only where a situation of slow or stable execution and the aggregated liquidity arises from it.",
    },
    {
      question: "Do you provide ongoing support after deployment?",
      answer:
        "Yes, we, Capyngen, are always available for you and provide nonstop support, the latest updates, and maintenance after your infrastructure has been deployed.",
    },
    {
      question: "Is Capyngen a global PrimeXM X-Core technology partner?",
      answer:
        "With our main office in the United Kingdom, we extend our care for clients all over the world as a trustworthy PrimeXM X-Core technology provider.",
    },
  ];
  return (
    <div>
      <Banner8
        image={assets.primeXMService1}
        badge=""
        name="PrimeXM X-Core Technology for High-Speed Liquidity Routing"
        description="Optimize execution flow with our expert setup and technology solutions for the PrimeXM X-Core environment."
        buttonText="Get to Know More"
      />

      <PrimeXMServiceIntro />
      <PrimeXMXServiceUnderstanding />
      <PrimeXMServiceFeatures />
      <PrimeXMServiceInfrastructure />
      <PrimeXMServiceTechnology />
      <PrimeXMServiceSolutions />
      <PrimeXMServiceBenefits />
      <PrimeXMServiceAdditionalFeatures />
      <PrimeXMServiceConclusion />
      <FaqSection items={faqItems} />
    </div>
  );
};

export default PrimeXMService;
