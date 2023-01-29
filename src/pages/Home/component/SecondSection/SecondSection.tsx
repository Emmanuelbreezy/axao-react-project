import React from "react";
import features from "@axao/assets/image/features.png";
import { Container, Image } from "./SecondSectionStyle";

function SecondSection() {
  return (
    <Container>
      <Image src={features} />
    </Container>
  );
}

export default SecondSection;
