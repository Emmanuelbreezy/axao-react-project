import React from "react";
import SVG from "react-inlinesvg";
import BusinessCard6 from "@axao/assets/image/business-card-6.png";
import BusinessCard7 from "@axao/assets/image/business-card-7.png";
import ArrowCircle from "@axao/assets/image/arrow-circle.svg";

import { Container, Header, Group, Card } from "./FifthSectionStyle";

function FifthSection() {
  return (
    <Container>
      <Header>
        <h1>more Functions to Come</h1>
      </Header>
      <Group>
        <Card imgSrc={BusinessCard6}>
          <div className="TitleDiv">
            <span>Function</span>
            <h1>Tap to Pay</h1>
          </div>
        </Card>
        <Card imgSrc={BusinessCard7}>
          <div className="TitleDiv">
            <span>Function</span>
            <h1>1 Touch Social Sharing</h1>
          </div>
        </Card>
        <div className="TransparentBox" />
        <div className="ArrowCircle">
          <SVG src={ArrowCircle} />
        </div>
      </Group>
    </Container>
  );
}

export default FifthSection;
