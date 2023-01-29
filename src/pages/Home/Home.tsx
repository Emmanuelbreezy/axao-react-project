import React from "react";
import withLayout from "@axao/hoc/Layout/withLayout";
import {
  TopSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
  SixthSection,
  FAQ,
} from "./component";

function Home() {
  return (
    <div>
      <TopSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <FAQ />
    </div>
  );
}

export default withLayout(Home);
