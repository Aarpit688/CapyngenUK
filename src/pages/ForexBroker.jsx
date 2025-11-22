import Banner1 from "../components/Banner1";
import ForexLanding from "../components/ForexLanding";
import ForexEmpowerment from "../components/ForexEmpowerment";
import ForexSolutions from "../components/ForexSolutions";
import ForexBenefits from "../components/ForexBenefits";
import ForexExpertise from "../components/ForexExpertise";
import ForexConclusion from "../components/ForexConclusion";
import {
  FaBolt,
  FaBullseye,
  FaChartLine,
  FaCogs,
  FaGlobe,
  FaShieldAlt,
  FaUsersCog,
} from "react-icons/fa";
import ForexTechSolutions from "../components/ForexTechSolutions";
import { assets } from "../assets/assets";
import FaqSection from "../components/FaqSection";

const ForexBroker = () => {
  const faqItems = [
    {
      question: "What components does Forex Broker IT Solutions consist of?",
      answer:
        "We provide solutions such as trading platforms, CRM software, website & application development, payment integrations, and back-office management tools.",
    },
    {
      question:
        "Is it possible for Capyngen to create a trading platform that is unique for my brokerage?",
      answer:
        "Indeed, we are experts in creating custom trading platforms for the forex market that are specifically designed based on your business needs.",
    },
    {
      question:
        "Are your Forex CRM Software Solutions designed for small brokers?",
      answer:
        "Yes, definitely! Our CRM solutions are scalable and customizable, which makes them a perfect fit for startups as well as for already established brokers.",
    },
    {
      question:
        "Does Capyngen offer digital marketing services to forex brokers?",
      answer:
        "Yes, we do. We use technology and digital marketing strategies to help brokers reach their potential clients anywhere in the world.",
    },
    {
      question:
        "Are Capyngen's forex technology solutions reliable in terms of security?",
      answer:
        "We take care of security by incorporating the latest encryption techniques, using secure servers and designing the system architecture in a way that is easy to comply with security regulations.",
    },
    {
      question:
        "Is it possible for your solutions to work with the existing brokerage systems?",
      answer:
        "We are creating our platforms and software solutions in a way that they can be easily integrated with third-party tools and existing systems.",
    },
    {
      question:
        "Do you offer support continuously after the implementation phase?",
      answer:
        "We provide complete post-implementation support, maintenance, and regular updates to make sure your technology is always up to date and in good working condition.",
    },
    {
      question: "Does Capyngen provide their services internationally?",
      answer:
        "Yes, we are a UK-based company, but we offer our services and provide forex technology solutions to clients and brokers anywhere in the world.",
    },
  ];
  return (
    <div>
      <Banner1
        title="Empowering Modern Forex Brokers with Advanced Trading Technology"
        subtitle="Capyngen Technologies UK Limited delivers secure, scalable, and customizable IT solutions built to launch and grow your forex brokerage with confidence."
        ctaText="Contact Now"
        noiseImg={assets.forexBroker}
        illustrationImg={assets.forexBroker}
        trustedByText="Trusted by 120k+ companies"
        rating={4.8}
        totalReviews="27k Reviews"
      />

      <ForexLanding
        heroTitle="Transforming Forex Brokerage with Advanced IT Solutions"
        heroDescription="In​‍​‌‍​‍‌​‍​‌‍​‍‌ the quickly changing world of forex trading, the proper technology is not merely an advantage—it is a must. Capyngen Technologies UK Limited, a company in the UK with clients all over the world, is focused on delivering Forex Broker IT Solutions that are meant to provide brokers with the power, improve trading experiences, and make operations more efficient. If you are a broker going for a new business or a mature company, our inventive forex broker technology solutions guarantee that your business will be leading in the market that is getting more and more ​‍​‌‍​‍‌​‍​‌‍​‍‌competitive."
        primaryBtn={{ label: "Get Started", link: "#" }}
        secondaryBtn={{ label: "", link: "" }}
        heroImage={assets.forexBroker2}
        features={[
          {
            title: "End-to-end trading stack",
            desc: "From matching engines to client portals — fully integrated.",
            icon: <FaBolt />,
          },
          {
            title: "Compliance & security",
            desc: "Audit-ready systems, encryption, KYC pipelines.",
            icon: <FaShieldAlt />,
          },
          {
            title: "Custom integrations",
            desc: "Integrate liquidity providers, reporting and back-office.",
            icon: <FaCogs />,
          },
        ]}
      />
      <ForexEmpowerment
        title="What is a Forex Broker and How We Empower Them"
        description={`A​‍​‌‍​‍‌​‍​‌‍​‍‌ forex broker is a financial services provider that allows traders and investors to purchase and sell currencies in the global forex market. Forex brokers are the middlemen who provide trading platforms, account management tools, and access to liquidity providers. However, in today’s competitive market, merely executing trades is not enough—brokers have to use advanced technology, robust CRM systems, and innovative platforms not only to attract clients but also to ensure compliance and operate efficiently.`}
        sectionTitle="How Capyngen Empowers Brokers"
        sectionDescription={`Capyngen Technologies UK Limited is the answer to this problem. We, as a leading Forex technology provider, offer end-to-end solutions for brokers of any size:`}
        cards={[
          {
            icon: <FaChartLine className="text-indigo-400 text-2xl" />,
            title: "Custom Forex Trading Platforms",
            desc: "Facilitating seamless execution and offering real-time analytics.",
          },
          {
            icon: <FaUsersCog className="text-pink-400 text-2xl" />,
            title: "Forex CRM Software Solutions",
            desc: "Manage clients, automate workflows, and enhance retention.",
          },
          {
            icon: <FaBullseye className="text-green-400 text-2xl" />,
            title: "Digital Marketing Solutions for Brokers",
            desc: "Extend your global reach and attract quality clients.",
          },
          {
            icon: <FaGlobe className="text-yellow-400 text-2xl" />,
            title: "Full-Stack Forex Broker Technology",
            desc: "Website & app development, back-office management, and payment integration.",
          },
        ]}
        outroText={`Thanks to the combination of profound industry knowledge and state-of-the-art technology, we are able to give forex brokers the power to globally scale their operations, enhance client experience, and keep their competitive advantage in the ​‍​‌‍​‍‌​‍​‌‍​‍‌market.`}
      />
      <ForexTechSolutions />
      <ForexSolutions
        heading="Comprehensive Forex Broker Software Solutions"
        subheading="Our​‍​‌‍​‍‌​‍​‌‍​‍‌ company provides numerous forex broker software solutions that are suitable for any type of business:"
        outro="By offering these solutions, Capyngen is a forex technology provider that changes your brokerage to a globally competitive enterprise with high ​‍​‌‍​‍‌​‍​‌‍​‍‌performance."
        sectionBg="bg-gradient-to-b from-black via-gray-900 to-black"
        solutions={[
          {
            imgSrc: assets.forexBroker7,
            alt: "Trading Platforms",
            title: "Trading Platforms",
            desc: "Sophisticated platforms that can be automated for trading, include risk management features, and have integrated analytics.",
          },
          {
            imgSrc: assets.forexBroker8,
            alt: "CRM Software Solutions",
            title: "CRM Software Solutions",
            desc: "Designed systems for the efficient management of leads, clients, and campaigns.",
          },
          {
            imgSrc: assets.forexBroker9,
            alt: "Website & App Development",
            title: "Website & App Development",
            desc: "Easily accessible websites and mobile applications to offer clients an effortless trading experience.",
          },
          {
            imgSrc: assets.forexBroker10,
            alt: "Payment Gateway Integration",
            title: "Payment Gateway Integration",
            desc: "Systems that are secure and free of any problems for the deposit and withdrawal of funds.",
          },
          {
            imgSrc: assets.forexBroker11,
            alt: "Back-Office Solutions",
            title: "Back-Office Solutions",
            desc: "Tools for efficient reporting, compliance management, and operational control.",
          },
        ]}
      />
      <ForexBenefits />
      <ForexExpertise
        title="Our Expertise as a Forex Technology Provider"
        subtitle="Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ Technologies UK Limited is a perfect blend of technical expertise, domain knowledge, and client-focused innovation. Our team saw no better way of understanding your workflow, challenges, and goals than working closely with your brokerage. We deliver solutions that include:"
        outroText="With us, you get not only a software vendor but also a business enabler who will help you to grow, attract clients, and keep up with the market leaders in a competitive ​‍​‌‍​‍‌​‍​‌‍​‍‌environment."
        expertise={[
          {
            title: "Custom Forex Trading Platform Development",
            img: assets.forexBroker17,
            desc: "",
          },
          {
            title: "Forex Broker Technology Solutions",
            img: assets.forexBroker18,
            desc: "",
          },
          {
            title: "Website & App Development",
            img: assets.forexBroker19,
            desc: "",
          },
          {
            title: "End-to-End Forex IT Solutions",
            img: assets.forexBroker20,
            desc: "",
          },
        ]}
      />
      <ForexConclusion
        heading="Conclusion: Elevate Your Brokerage with Capyngen’s IT Solutions"
        paragraphs={[
          "Capyngen Technologies UK Limited is not only a software provider—it is your strategic technology partner in the forex brokerage area. We deliver end-to-end services from forex broker software solutions to CRM integration and digital marketing strategies that ensure your brokerage is running at peak efficiency.",
          "Make the move to a brokerage that is ready for tomorrow’s challenges. Collaborate with Capyngen and feel how easy and effective tech solutions can be when they are innovative, dependable, and in line with global standards.",
        ]}
      />
      <FaqSection items={faqItems} />
    </div>
  );
};

export default ForexBroker;
