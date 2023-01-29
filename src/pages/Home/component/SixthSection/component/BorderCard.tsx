import React from "react";
import { Button } from "@axao/components";
import profile from "@axao/assets/image/profile.png";
import { Container, Col, Title, Image, ImageDiv } from "./BorderCardStyle";

function BorderCard() {
  return (
    <Container>
      <ImageDiv>
        <Image src={profile} alt="" />
      </ImageDiv>
      <Col>
        <Title>
          <h1>Individuals</h1>
          <h2>The world&apos;s most advanced digital business card</h2>
        </Title>
        <Button fontSize="24px" outline={false} text="Learn More" />
      </Col>
    </Container>
  );
}

export default BorderCard;
