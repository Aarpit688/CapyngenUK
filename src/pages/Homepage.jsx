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
      question: "What services does Capyngen offer?",
      answer:
        "We provide Information Technology (IT) services, Customer Relationship Management (CRM) solutions, cybersecurity, application development, user interface/user experience (UI/UX) design, and digital marketing that can contribute to the growth of the businesses.",
    },
    {
      question: "Why should I choose Capyngen over others?",
      answer:
        "Well! Because we combine strategy, technology, and artistry to produce quantifiable, scalable, and dependable solutions that are unique to your objectives.",
    },
    {
      question: "Do you work with startups as well as enterprises?",
      answer:
        "Indeed, we create startups, Small and Medium-sized Businesses (SMBs), and large enterprises solutions in a manner that is adaptable to any industry.",
    },
    {
      question: "Can Capyngen help improve my online presence?",
      answer:
        "Of course! We make your brand visible and increase your digital presence through SEO, social media, and performance marketing.",
    },
    {
      question: "Do you offer custom software development?",
      answer:
        "Certainly, we take pride in creating customized web, mobile, and enterprise software applications that address specific business requirements.",
    },
    {
      question: "How experienced is your team?",
      answer:
        "Our team is made up of certified experts who have several years of experience in Information Technology (IT), marketing, and business transformation.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We partner with the healthcare, finance, education, e-commerce, travel, IT, etc. industries.",
    },
    {
      question: "Is your approach data-driven?",
      answer:
        "Absolutely, all our measures rely on data analytics, performance tracking, and continuous optimization.",
    },
    {
      question: "Can you handle large-scale IT projects?",
      answer:
        "Sure, our team is capable to oversee the management of complicated projects at the enterprise-level with the use of end-to-end solutions.",
    },
    {
      question: "Do you offer CRM solutions for small businesses?",
      answer:
        "Yes, we offer CRM tools that are manageable and can adapt to any business regardless of its size.",
    },
    {
      question: "How do you ensure cybersecurity for clients?",
      answer:
        "We incorporate multiple layers of security, real-time surveillance, and regulatory frameworks to guarantee the security of data and networks.",
    },
    {
      question: "Can I track the progress of my projects?",
      answer:
        "Yes, we allow the provision of progress updates and other forms of transparent reporting at any point of the project lifecycle.",
    },
    {
      question: "Are your digital marketing strategies customized?",
      answer:
        "Definitely — the objectives, the target market, and the industry of your business are the main factors in every campaign that we execute.",
    },
    {
      question: "Do you provide ongoing support after deployment?",
      answer:
        "The answer is yes, we provide support 24 hours a day, 7 days a week, to make sure that everything runs smoothly and in case of a problem, the resolution will be quick.",
    },
    {
      question: "How can I get started with Capyngen?",
      answer:
        "A free consultation can be arranged at your leisure, you tell us what you need, and then our professionals get down to work creating the exact solution your business requires.",
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
