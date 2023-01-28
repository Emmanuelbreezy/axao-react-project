import React from "react";
import withLayout from "@axao/hoc/Layout/withLayout";
import { TopSection, SecondSection, ThirdSection, FAQ } from "./component";

function Home() {
  return (
    <div>
      <TopSection />
      <SecondSection />
      <ThirdSection />
      <FAQ />
    </div>
  );
}

export default withLayout(Home);
