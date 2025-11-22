import StatsSection from "../components/StatsSection";
import HomeHero from "../components/HomeHero";
import MagicBentoWithTabs from "../components/MagicBento";
import TurnkeySolutions from "../components/TurnkeySolutions";
import TradingPlatformSection from "../components/TradingPlatformSection";
import { assets } from "../assets/assets";
import IntegrationShowcase from "../components/IntegrationShowcase";
import { TextParallaxContentExample } from "../components/TextParallaxContent";
import ProjectsShowcase from "../components/ProjectsShowcase";
import FaqSection from "../components/FaqSection";

const Homepage = () => {
  const faqItems = [
    {
      question:
        "What Capyngen Technologies UK Limited do as a global technology provider?",
      answer:
        "Capyngen is a global provider of forex & Fintech tech including with new trends related to white-label trading platforms, liquidity solutions, CRM systems, and turnkey brokerage setups for brokers worldwide.",
    },
    {
      question: "Does Capyngen provide a full turnkey forex brokerage setup?",
      answer:
        "We are producing a full SiRiX+ advanced CRM IB/Affiliate systems setup along with the cloud infrastructure including market data, risk management, and liquidity & of course turnkey brokerage solution.",
    },
    {
      question: "What trading platform does Capyngen offer?",
      answer:
        "We offer the trading platform of next generation technologies Open Source SiRiX with Social Trading, comprehensive TradingView Charting, Multi-Device Access, Smart Order Types, and Trend Hedge/Netting Support.",
    },
    {
      question: "Do you offer liquidity solutions for forex brokers?",
      answer:
        "By means of our Liquidity Prime, the customer will get real-time pricing, extremely deep liquidity, prompt and the most accurate execution of orders, and multi-asset data feeds for forex, commodities, indices, and the crypto world.",
    },
    {
      question: "Does Capyngen offer a white-label CRM for brokers?",
      answer:
        "The answer is positive. Our WL Core CRM provides KYC/AML tools, IB management innovations, payment gateway integration, custom workflows, and a centralized data view targeting brokerage operations.",
    },
    {
      question:
        "What is included in your back-office and broker management tools?",
      answer:
        "The scope of our services includes Broker Portal, Advanced CRM, SIRIX Broker, IBs System, risk management tools, and workflow automation for complete back-office efficiency.",
    },
    {
      question: "Do you support affiliate and IB management systems?",
      answer:
        "Definitely. Our Affiliate & IB Management System supports multi-tier structures, is entirely automated, and is created to extend your partner network worldwide.",
    },
    {
      question: "Can Capyngen integrate external trading platforms or CRMs?",
      answer:
        "Indeed. Our integration services are open for various-level APIs of trading platforms, CRM systems, liquidity providers, payment gateways, and all forex distribution systems to unify the work of the company.",
    },
    {
      question: "Does Capyngen provide cloud and infrastructure setup?",
      answer:
        "Exactly. Our Cloud Infrastructure Implementation is centered on AWS/Azure going live, a secure infra build, and a scalable cloud environment for worldwide brokerages.",
    },
    {
      question: "Do you provide SaaS-based solutions for brokers?",
      answer:
        "Yes. We are capable of SaaS integration, CRM workflow automation, software delivery automation, and tech stack optimization for fintech and forex companies.",
    },
    {
      question: "Can Capyngen build mobile trading or fintech apps?",
      answer:
        "Definitely, the scope of our Mobile Platform Development covers fintech app architecture, building custom app ecosystems, and providing secure solutions for mobile trading.",
    },
    {
      question: "Do you offer e-commerce development solutions?",
      answer:
        "Besides that, we are also in charge of E-commerce Platform Development services, featuring omnichannel retail systems and the construction of customized e-commerce architectures.",
    },
    {
      question: "What security solutions does Capyngen offer?",
      answer:
        "Among the measures we use are complete security for digital assets, the protection of platforms, data encryption, and risk control of the highest level for enterprises operating in forex and the fintech field.",
    },
    {
      question:
        "Can Capyngen customize technology according to the broker’s needs?",
      answer:
        "Certainly. Our Custom Development Services lead to the delivery of tailor-made trading tools, CRM customizations, API integrations, and broker-specific fintech solutions.",
    },
    {
      question: "Why should a broker choose Capyngen Technologies UK Limited?",
      answer:
        "In short, this is the reason why a broker would want to work with Capyngen Technologies UK Limited: smart brokerage technology, high-speed connectivity, reliable liquidity, white-label solutions, end-to-end brokerage setup, and global fintech expertise — all in one place.",
    },
  ];

  return (
    <div className="overflow-x-hidden md:overflow-x-visible">
      <HomeHero />
      <MagicBentoWithTabs
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
      />
      <StatsSection />
      <IntegrationShowcase />
      <TurnkeySolutions />
      <TextParallaxContentExample />
      <ProjectsShowcase />
      <FaqSection items={faqItems} />
    </div>
  );
};

export default Homepage;
