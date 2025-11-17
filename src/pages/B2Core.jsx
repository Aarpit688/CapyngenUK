import React from "react";
import Banner6 from "../components/Banner6";
import B2CoreIntro from "../components/B2CoreIntro";
import B2CoreInfo from "../components/B2CoreInfo";
import B2CoreImplementation from "../components/B2CoreImplementation";
import B2CoreUses from "../components/B2CoreUses";
import B2CoreDeployment from "../components/B2CoreDeployment";

const B2Core = () => {
  return (
    <div>
      <Banner6 />
      <B2CoreIntro />
      <B2CoreInfo />
      <B2CoreImplementation />
      <B2CoreUses />
      <B2CoreDeployment />
    </div>
  );
};

export default B2Core;
