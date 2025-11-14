import Banner6 from "../components/Banner6";
import ComparisonTable from "../components/ComparisonTable";
import HowItWorks from "../components/HowItWorks";
import MT5BestBroker from "../components/MT5BestBroker";
import MT5Conclusion from "../components/MT5Conclusion";
import MT5ForBeginners from "../components/MT5ForBeginners";
import MT5GlobalStandard from "../components/MT5GlobalStandard";
import MT5IntroSection from "../components/MT5IntroSection";
import MT5Section from "../components/MT5Section";
import MT5WhyIdealSection from "../components/MT5WhyIdealSection";

const MT5 = () => {
  return (
    <div>
      <Banner6 />
      <MT5IntroSection />
      <MT5Section />
      <MT5WhyIdealSection />
      <HowItWorks />
      <MT5ForBeginners />
      <ComparisonTable />
      <MT5BestBroker />
      <MT5GlobalStandard />
      <MT5Conclusion />
    </div>
  );
};

export default MT5;
