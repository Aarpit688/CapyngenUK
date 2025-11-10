import React from "react";
import VideoGallery from "../components/VideoGallery";
import TimelineInfoGraphic from "../components/TimelineInfoGraphic";
import ServicesInfographic from "../components/ServicesInfographic";
import StepsZigzagInfographic from "../components/StepsZigzagInfographic";
import AboutSection from "../components/AboutSection";
import Home from "../components/Home";
import Banner1 from "../components/Banner1";

const ForexBroker = () => {
  return (
    <div>
      <Banner1 />
      <VideoGallery />
      <TimelineInfoGraphic />
      <ServicesInfographic />
      <StepsZigzagInfographic />
      <AboutSection />
      <Home />
    </div>
  );
};

export default ForexBroker;
