import { assets } from "../assets/assets";
import Banner4 from "../components/Banner4";
import FaqSection from "../components/FaqSection";
import NTraderAdvantages from "../components/NTraderAdvantages";
import NTraderArchitecture from "../components/NTraderArchitecture";
import NTraderCapabilities from "../components/NTraderCapabilities";
import NTraderConclusion from "../components/NTraderConclusion";
import NTraderFeatures from "../components/NTraderFeatures";
import NTraderIntro from "../components/NTraderIntro";
import NTraderUsage from "../components/NTraderUsage";
import NTraderWhyChoose from "../components/NTraderWhyChoose";

const NTrader = () => {
  const faqItems = [
    {
      question: "What is the nTrader trading platform?",
      answer:
        "nTrader is a multi-asset trading platform that is packed with features to facilitate very fast execution and attract strong liquidity for forex, CFD, and crypto brokers.",
    },
    {
      question: "Do you provide white-label nTrader deployment?",
      answer:
        "Certainly, we offer a full white-label nTrader platform package inclusive of hosting and branding.",
    },
    {
      question: "Is nTrader connected with liquidity providers?",
      answer:
        "Yes, nTrader works with many liquidity providers through its sophisticated bridge system which enables seamless integration.",
    },
    {
      question: "Does nTrader allow multi-asset trading?",
      answer:
        "Yes, nTrader can trade the forex market, CFDs, indices, crypto, and commodities too.",
    },
    {
      question: "Do you offer backend hosting and infrastructure?",
      answer:
        "Indeed, we are in charge of world-class hosting, servers, routing engines, and security layers.",
    },
    {
      question:
        "Is it possible for nTrader to be integrated with CRM or payment systems?",
      answer:
        "Absolutely, nTrader APIs are built to allow CRM, PSP, KYC, and analytics integrations without any hassle.",
    },
    {
      question: "Is nTrader a good choice for new brokers?",
      answer:
        "Indubitably, it's an excellent resource for startups that require quick deployment and low-cost infrastructure.",
    },
    {
      question: "Are you available to support clients 24/7?",
      answer:
        "Yes, Capyngen support team is always available to provide support, updates and ensure performance.",
    },
  ];
  return (
    <div>
      <Banner4
        badge="Trusted Design Hub"
        gradientText="Complete nTrader Platform "
        title="Technology for Emerging Brokers"
        description="We provide flexible, modern IT solutions tailored to enhance the nTrader ecosystem for brokers worldwide."
        buttonText="Get Started"
        statsText="120 new inspirations added yesterday"
        image={assets.ntraderbanner}
      />

      <NTraderIntro />
      <NTraderFeatures />
      <NTraderArchitecture />
      <NTraderWhyChoose />
      <NTraderAdvantages />
      <NTraderUsage />
      <NTraderCapabilities />
      <NTraderConclusion />
      <FaqSection items={faqItems} />
    </div>
  );
};

export default NTrader;
