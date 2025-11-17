import Banner1 from "../components/Banner1";
import ForexLanding from "../components/ForexLanding";
import ForexEmpowerment from "../components/ForexEmpowerment";
import ForexSolutions from "../components/ForexSolutions";
import ForexBenefits from "../components/ForexBenefits";
import ForexExpertise from "../components/ForexExpertise";
import ForexConclusion from "../components/ForexConclusion";
import { FaBolt, FaCogs, FaShieldAlt } from "react-icons/fa";

const ForexBroker = () => {
  return (
    <div>
      <Banner1 />
      <ForexLanding
        heroTitle="Transforming Forex Brokerage with Advanced IT Solutions"
        heroDescription="In​‍​‌‍​‍‌​‍​‌‍​‍‌ the quickly changing world of forex trading, the proper technology is not merely an advantage—it is a must. Capyngen Technologies UK Limited, a company in the UK with clients all over the world, is focused on delivering Forex Broker IT Solutions that are meant to provide brokers with the power, improve trading experiences, and make operations more efficient. If you are a broker going for a new business or a mature company, our inventive forex broker technology solutions guarantee that your business will be leading in the market that is getting more and more ​‍​‌‍​‍‌​‍​‌‍​‍‌competitive."
        primaryBtn={{ label: "Get Started", link: "#" }}
        secondaryBtn={{ label: "", link: "" }}
        heroImage="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
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
      <ForexEmpowerment />
      <ForexSolutions
        heading="Comprehensive Forex Broker Software Solutions"
        subheading="Our​‍​‌‍​‍‌​‍​‌‍​‍‌ company provides numerous forex broker software
            solutions that are suitable for any type of business:"
        outro="By offering these solutions, Capyngen is a forex technology provider
          that changes your brokerage to a globally competitive enterprise with
          high ​‍​‌‍​‍‌​‍​‌‍​‍‌performance."
        sectionBg="bg-gradient-to-b from-black via-gray-900 to-black"
        solutions={[
          {
            imgSrc: "https://picsum.photos/id/1064/600/400",
            alt: "Trading Platforms",
            title: "Trading Platforms",
            desc: "Sophisticated platforms that can be automated for trading, include risk management features, and have integrated analytics.",
          },
          {
            imgSrc: "https://picsum.photos/id/1048/600/400",
            alt: "CRM Software Solutions",
            title: "CRM Software Solutions",
            desc: "Designed systems for the efficient management of leads, clients, and campaigns.",
          },
          {
            imgSrc: "https://picsum.photos/id/1059/600/400",
            alt: "Website & App Development",
            title: "Website & App Development",
            desc: "Easily accessible websites and mobile applications to offer clients an effortless trading experience.",
          },
          {
            imgSrc: "https://picsum.photos/id/1075/600/400",
            alt: "Payment Gateway Integration",
            title: "Payment Gateway Integration",
            desc: "Systems that are secure and free of any problems for the deposit and withdrawal of funds.",
          },
          {
            imgSrc: "https://picsum.photos/id/1082/600/400",
            alt: "Back-Office Solutions",
            title: "Back-Office Solutions",
            desc: "Tools for efficient reporting, compliance management, and operational control.",
          },
        ]}
      />
      <ForexBenefits />
      <ForexExpertise />
      <ForexConclusion
        heading="Conclusion: Elevate Your Brokerage with Capyngen’s IT Solutions"
        paragraphs={[
          "Capyngen Technologies UK Limited is not only a software provider—it is your strategic technology partner in the forex brokerage area. We deliver end-to-end services from forex broker software solutions to CRM integration and digital marketing strategies that ensure your brokerage is running at peak efficiency.",
          "Make the move to a brokerage that is ready for tomorrow’s challenges. Collaborate with Capyngen and feel how easy and effective tech solutions can be when they are innovative, dependable, and in line with global standards.",
        ]}
      />
    </div>
  );
};

export default ForexBroker;
