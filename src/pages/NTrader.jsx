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
      <Banner4
        badge="Trusted Design Hub"
        gradientText="Complete nTrader Platform "
        title="Technology for Emerging Brokers"
        description="We provide flexible, modern IT solutions tailored to enhance the nTrader ecosystem for brokers worldwide."
        buttonText="Get Started"
        statsText="120 new inspirations added yesterday"
        image="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png"
      />

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
