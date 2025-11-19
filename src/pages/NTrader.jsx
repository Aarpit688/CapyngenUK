import Banner4 from "../components/Banner4";
import NTraderAdvantages from "../components/NTraderAdvantages";
import NTraderArchitecture from "../components/NTraderArchitecture";
import NTraderCapabilities from "../components/NTraderCapabilities";
import NTraderConclusion from "../components/NTraderConclusion";
import NTraderFeatures from "../components/NTraderFeatures";
import NTraderIntro from "../components/NTraderIntro";
import NTraderUsage from "../components/NTraderUsage";
import NTraderWhyChoose from "../components/NTraderWhyChoose";

const NTrader = () => {
  return (
    <div>
      <Banner4 />
      <NTraderIntro />
      <NTraderFeatures />
      <NTraderArchitecture />
      <NTraderWhyChoose />
      <NTraderAdvantages />
      <NTraderUsage />
      <NTraderCapabilities />
      <NTraderConclusion />
    </div>
  );
};

export default NTrader;
