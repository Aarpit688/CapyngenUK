import React from "react";
import VideoGallery from "../components/VideoGallery";
import TimelineInfoGraphic from "../components/TimelineInfoGraphic";
import ServicesInfographic from "../components/ServicesInfographic";
import StepsZigzagInfographic from "../components/StepsZigzagInfographic";
import AboutSection from "../components/AboutSection";
import Home from "../components/Home";
import Banner1 from "../components/Banner1";
import ForexLanding from "../components/ForexLanding";
import ForexEmpowerment from "../components/ForexEmpowerment";
import ForexSolutions from "../components/ForexSolutions";
import ForexBenefits from "../components/ForexBenefits";
import ForexExpertise from "../components/ForexExpertise";
import ForexConclusion from "../components/FramerConclusion";

const ForexBroker = () => {
  return (
    <div>
      <Banner1 />
      <ForexLanding />
      <ForexEmpowerment />
      <ForexSolutions />
      <ForexBenefits />
      <ForexExpertise />
      <ForexConclusion />
      {/* <VideoGallery />
      <TimelineInfoGraphic />
      <ServicesInfographic />
      <StepsZigzagInfographic />
      <AboutSection />
      <Home /> */}
    </div>
  );
};

export default ForexBroker;
